
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";

dotenv.config();

const mobiles = [
    // --- Mi / Xiaomi (6 products) ---
    {
        name: "Redmi Note 13 Pro (12GB RAM, 256GB)",
        description: "Super-clear 200MP camera, 120Hz AMOLED display, and 67W turbo charging. The perfect mid-range beast.",
        price: 24999,
        category: "mobiles",
        brand: "mi",
        image: "https://images.unsplash.com/photo-1698744766444-a09562ac3f31?q=80&w=800&auto=format&fit=crop",
        isFeatured: true
    },
    {
        name: "Xiaomi 14 Ultra (16GB RAM, 512GB)",
        description: "Leica professional optics, Snapdragon 8 Gen 3, and a stunning WQHD+ display.",
        price: 99999,
        category: "mobiles",
        brand: "mi",
        image: "https://images.unsplash.com/photo-1709778749712-4299b867c265?q=80&w=800&auto=format&fit=crop",
        isFeatured: true
    },
    {
        name: "Redmi 13C 5G (8GB RAM, 128GB)",
        description: "5G performance accessible to everyone. 50MP AI camera and 90Hz display.",
        price: 13999,
        category: "mobiles",
        brand: "mi",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Redmi Note 12 Pro+ 5G (8GB RAM, 256GB)",
        description: "200MP HyperPixel camera, MediaTek Dimensity 1080, 120W HyperCharge.",
        price: 27999,
        category: "mobiles",
        brand: "mi",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c65f97?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Xiaomi 13 Pro (12GB RAM, 256GB)",
        description: "Leica triple camera system, Snapdragon 8 Gen 2, 120W charging.",
        price: 74999,
        category: "mobiles",
        brand: "mi",
        image: "https://images.unsplash.com/photo-1680517904221-39580436858e?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Redmi 12 5G (6GB RAM, 128GB)",
        description: "Budget 5G smartphone with Snapdragon 4 Gen 2, 50MP camera, 5000mAh battery.",
        price: 11999,
        category: "mobiles",
        brand: "mi",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    },

    // --- Samsung (6 products) ---
    {
        name: "Samsung Galaxy S24 Ultra (Titanium Gray)",
        description: "Galaxy AI is here. 200MP camera, Snapdragon 8 Gen 3 for Galaxy, and Titanium frame.",
        price: 129999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.unsplash.com/photo-1706691456930-b4bd697e8845?q=80&w=800&auto=format&fit=crop",
        isFeatured: true
    },
    {
        name: "Samsung Galaxy M34 5G",
        description: "Monster 6000mAh battery, 50MP No Shake Cam, and 120Hz sAMOLED display.",
        price: 16999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.unsplash.com/photo-1610945265078-3853eadab238?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Samsung Galaxy Z Flip5",
        description: "Flex Window, pocketability, and the best selfie camera on a Galaxy smartphone.",
        price: 99999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.unsplash.com/photo-1694665476140-5e36f0147986?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Samsung Galaxy A54 5G (8GB RAM, 256GB)",
        description: "Awesome camera with OIS, 120Hz Super AMOLED display, 5000mAh battery.",
        price: 38999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.unsplash.com/photo-1678911820864-e2c567c65f97?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Samsung Galaxy S23 FE (8GB RAM, 128GB)",
        description: "Flagship experience for everyone. 50MP camera, Exynos 2200, 120Hz display.",
        price: 49999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.unsplash.com/photo-1676903264426-30248ad3279c?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Samsung Galaxy M14 5G (6GB RAM, 128GB)",
        description: "Segment-leading 6000mAh battery, 50MP triple camera, 5G ready.",
        price: 13990,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.unsplash.com/photo-1574677271442-f3e1d51a6549?q=80&w=800&auto=format&fit=crop",
    },

    // --- Apple (5 products) ---
    {
        name: "Apple iPhone 15 Pro Max (Natural Titanium)",
        description: "Forged in titanium. A17 Pro chip. The most powerful iPhone ever.",
        price: 159900,
        category: "mobiles",
        brand: "apple",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
        isFeatured: true
    },
    {
        name: "Apple iPhone 15 (Pink, 128GB)",
        description: "Dynamic Island, 48MP Main camera, USB-C, and all-day battery life.",
        price: 79900,
        category: "mobiles",
        brand: "apple",
        image: "https://images.unsplash.com/photo-1696446702378-d50d3498f86f?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Apple iPhone 14 (Blue, 128GB)",
        description: "A total powerhouse. Vital safety features. And a ceramic shield front.",
        price: 59999,
        category: "mobiles",
        brand: "apple",
        image: "https://images.unsplash.com/photo-1663499482523-1c0c16742a0c?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Apple iPhone 13 (Midnight, 128GB)",
        description: "A15 Bionic chip, advanced dual-camera system, Cinematic mode.",
        price: 49900,
        category: "mobiles",
        brand: "apple",
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Apple iPhone SE (Midnight, 64GB)",
        description: "Powerful A15 Bionic chip. 5G capable. Affordable iPhone experience.",
        price: 43900,
        category: "mobiles",
        brand: "apple",
        image: "https://images.unsplash.com/photo-1546200216-52bd3c7c25c6?q=80&w=800&auto=format&fit=crop",
    },

    // --- Realme (5 products) ---
    {
        name: "realme 12 Pro+ 5G (Submarine Blue)",
        description: "Periscope Portrait Camera, Sony IMX890 OIS, and Luxury Watch Design.",
        price: 29999,
        category: "mobiles",
        brand: "realme",
        image: "https://images.unsplash.com/photo-1616422712952-b8c8d8c36398?q=80&w=800&auto=format&fit=crop",
        isFeatured: true
    },
    {
        name: "realme Narzo 60 5G (Mars Orange)",
        description: "Premium Vegan Leather Design, 90Hz Super AMOLED Display, 5000mAh battery.",
        price: 17999,
        category: "mobiles",
        brand: "realme",
        image: "https://images.unsplash.com/photo-1663148421873-1f19f6358c2d?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "realme 11 Pro+ 5G (Sunrise Beige)",
        description: "200MP OIS camera, curved AMOLED display, 100W SUPERVOOC charging.",
        price: 27999,
        category: "mobiles",
        brand: "realme",
        image: "https://images.unsplash.com/photo-1678550732742-c179268f7b3c?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "realme C55 (Sunshower, 6GB RAM)",
        description: "64MP AI camera, Mini Capsule, 33W SUPERVOOC charging.",
        price: 11999,
        category: "mobiles",
        brand: "realme",
        image: "https://images.unsplash.com/photo-1602157581561-2a6d71b806d2?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "realme GT 6T 5G (Fluid Silver)",
        description: "Snapdragon 7+ Gen 3, 120Hz AMOLED, 5500mAh battery with 120W charging.",
        price: 32999,
        category: "mobiles",
        brand: "realme",
        image: "https://images.unsplash.com/photo-1660851897395-88cc5264b967?q=80&w=800&auto=format&fit=crop",
    },

    // --- Motorola (4 products) ---
    {
        name: "Motorola Edge 50 Pro (Luxe Lavender)",
        description: "World's 1st AI Powered Pro-Grade Camera and Pantone validated display.",
        price: 31999,
        category: "mobiles",
        brand: "motorola",
        image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b0d?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Motorola g24 Power (Glacier Blue)",
        description: "Thinner, Lighter, and stunning. 6000mAh battery for days of power.",
        price: 8999,
        category: "mobiles",
        brand: "motorola",
        image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Motorola Edge 40 (Nebula Green)",
        description: "Curved pOLED display, 50MP OIS camera, IP68 water resistance.",
        price: 24999,
        category: "mobiles",
        brand: "motorola",
        image: "https://images.unsplash.com/photo-1647424683515-3733075677ba?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Motorola g64 5G (Pearl Blue)",
        description: "MediaTek Dimensity 7025, 50MP OIS camera, 6000mAh battery, 120Hz display.",
        price: 14999,
        category: "mobiles",
        brand: "motorola",
        image: "https://images.unsplash.com/photo-1635832168752-d5966371ad52?q=80&w=800&auto=format&fit=crop",
    },

    // --- Poco (4 products) ---
    {
        name: "POCO X6 Neo 5G (Astral Black)",
        description: "Sleek design, 120Hz AMOLED, MediaTek Dimensity 6080, and pure performance.",
        price: 15999,
        category: "mobiles",
        brand: "poco",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff23?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "POCO M6 Pro 5G (Forest Green)",
        description: "Powerful 5G, 50MP AI dual camera, 5000mAh battery, 67W turbo charging.",
        price: 12999,
        category: "mobiles",
        brand: "poco",
        image: "https://images.unsplash.com/photo-1609503986063-4523d45c55d0?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "POCO F5 5G (Snowstorm White)",
        description: "Snapdragon 7+ Gen 2, 64MP OIS triple camera, 120Hz Flow AMOLED.",
        price: 26999,
        category: "mobiles",
        brand: "poco",
        image: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "POCO C65 (Pastel Blue)",
        description: "Budget-friendly with 50MP AI camera, 5000mAh battery, 6.74-inch display.",
        price: 8499,
        category: "mobiles",
        brand: "poco",
        image: "https://images.unsplash.com/photo-1662580400032-4299b867c265?q=80&w=800&auto=format&fit=crop",
    },
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Adding mobile products...");

        // Remove existing mobiles to avoid duplicates (optional, based on requirement)
        await Product.deleteMany({ category: "mobiles" });

        await Product.insertMany(mobiles);

        console.log("Mobile data seeded successfully!");
        process.exit();
    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
}

seedProducts();
