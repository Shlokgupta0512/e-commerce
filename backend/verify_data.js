
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";

dotenv.config();

const checkData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB " + process.env.MONGO_URI.split("@")[1]); // Log partial URI to confirm

        const count = await Product.countDocuments({ category: "mobiles" });
        console.log(`Found ${count} products in 'mobiles' category.`);

        const sample = await Product.findOne({ category: "mobiles" });
        console.log("Sample product:", sample);

        process.exit();
    } catch (error) {
        console.error("Error checking data:", error);
        process.exit(1);
    }
}

checkData();
