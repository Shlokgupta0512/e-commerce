import { createClerkClient } from "@clerk/backend";

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export const protectRoute = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return res.status(401).json({ message: "Unauthorized - No token provided" });
		}

		const token = authHeader.split(" ")[1];

		try {
			const decoded = await clerkClient.verifyToken(token);
			const user = await clerkClient.users.getUser(decoded.sub);

			if (!user) {
				return res.status(401).json({ message: "User not found" });
			}

			// Map Clerk user to req.user
			req.user = {
				id: user.id,
				email: user.emailAddresses[0].emailAddress,
				role: user.publicMetadata.role || "customer", // Default to customer
			};

			next();
		} catch (error) {
			console.error("Clerk Token Verification Error:", error.message);
			return res.status(401).json({ message: "Unauthorized - Invalid token" });
		}
	} catch (error) {
		console.log("Error in protectRoute middleware", error.message);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

export const adminRoute = (req, res, next) => {
	// "uploader" is the role for those who can upload items (admin)
	if (req.user && req.user.role === "uploader") {
		next();
	} else {
		return res.status(403).json({ message: "Access denied - Uploader/Admin only" });
	}
};
