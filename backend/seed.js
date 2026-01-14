
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.model.js";

dotenv.config();

const mobiles = [
    // --- Mi / Xiaomi ---
    {
        name: "Redmi Note 13 Pro (12GB RAM, 256GB)",
        description: "Super-clear 200MP camera, 120Hz AMOLED display, and 67W turbo charging. The perfect mid-range beast.",
        price: 24999,
        category: "mobiles",
        brand: "mi",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1704355523.51859664!400x400!85.png",
        isFeatured: true
    },
    {
        name: "Xiaomi 14 Ultra (16GB RAM, 512GB)",
        description: "Leica professional optics, Snapdragon 8 Gen 3, and a stunning WQHD+ display.",
        price: 99999,
        category: "mobiles",
        brand: "mi",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1709893979.74088219!400x400!85.png",
    },
    {
        name: "Redmi 13C 5G (8GB RAM, 128GB)",
        description: "5G performance accessible to everyone. 50MP AI camera and 90Hz display.",
        price: 13999,
        category: "mobiles",
        brand: "mi",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1701837568.61803738!400x400!85.png",
    },

    // --- Samsung ---
    {
        name: "Samsung Galaxy S24 Ultra (Titanium Gray)",
        description: "Galaxy AI is here. 200MP camera, Snapdragon 8 Gen 3 for Galaxy, and Titanium frame.",
        price: 129999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s928bztqins/gallery/in-galaxy-s24-ultra-s928-sm-s928bztqins-thumb-539573356?$344_344_PNG$",
        isFeatured: true
    },
    {
        name: "Samsung Galaxy M34 5G",
        description: "Monster 6000mAh battery, 50MP No Shake Cam, and 120Hz sAMOLED display.",
        price: 16999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m346bzddins/gallery/in-galaxy-m34-5g-sm-m346-sm-m346bzddins-thumb-537466861?$344_344_PNG$",
    },
    {
        name: "Samsung Galaxy Z Flip5",
        description: "Flex Window, pocketability, and the best selfie camera on a Galaxy smartphone.",
        price: 99999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-f731blgain/gallery/in-galaxy-z-flip5-f731-sm-f731blgain-thumb-537456720?$344_344_PNG$",
    },

    // --- Apple ---
    {
        name: "Apple iPhone 15 Pro Max (Natural Titanium)",
        description: "Forged in titanium. A17 Pro chip. The most powerful iPhone ever.",
        price: 159900,
        category: "mobiles",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-natural-titanium-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1693555335029",
        isFeatured: true
    },
    {
        name: "Apple iPhone 14 (Blue)",
        description: "A total powerhouse. Vital safety features. And a ceramic shield front.",
        price: 59999,
        category: "mobiles",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-blue-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661601639893",
    },

    // --- Realme ---
    {
        name: "realme 12 Pro+ 5G (Submarine Blue)",
        description: "Periscope Portrait Camera, Sony IMX890 OIS, and Luxury Watch Design.",
        price: 29999,
        category: "mobiles",
        brand: "realme",
        image: "https://image01.realme.net/general/20240129/1706509040846.png.webp",
    },
    {
        name: "realme Narzo 60 5G",
        description: "Premium Vegan Leather Design, 90Hz Super AMOLED Display.",
        price: 17999,
        category: "mobiles",
        brand: "realme",
        image: "https://image01.realme.net/general/20230704/1688439266133.png.webp",
    },

    // --- Motorola ---
    {
        name: "Motorola Edge 50 Pro (Luxe Lavender)",
        description: "World's 1st AI Powered Pro-Grade Camera and Pantone validated display.",
        price: 31999,
        category: "mobiles",
        brand: "motorola",
        image: "https://motorolain.vtexassets.com/arquivos/ids/159066-800-auto?v=638478491740070000&width=800&height=auto&aspect=true",
    },
    {
        name: "Motorola g24 Power",
        description: "Thinner, Lighter, and stunning. 6000mAh battery for days of power.",
        price: 8999,
        category: "mobiles",
        brand: "motorola",
        image: "https://motorolain.vtexassets.com/arquivos/ids/158784-800-auto?v=638422409024000000&width=800&height=auto&aspect=true",
    },

    // --- Poco ---
    {
        name: "POCO X6 Neo 5G",
        description: "Sleek design, 120Hz AMOLED, and pure performance.",
        price: 15999,
        category: "mobiles",
        brand: "poco",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/v/a/-original-imagxsf3p7hzfz6p.jpeg?q=70",
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
