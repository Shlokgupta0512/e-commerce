
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
        isFeatured: true
    },
    {
        name: "Redmi 13C 5G (8GB RAM, 128GB)",
        description: "5G performance accessible to everyone. 50MP AI camera and 90Hz display.",
        price: 13999,
        category: "mobiles",
        brand: "mi",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1701837568.61803738!400x400!85.png",
    },
    {
        name: "Redmi Note 12 Pro+ 5G (8GB RAM, 256GB)",
        description: "200MP HyperPixel camera, MediaTek Dimensity 1080, 120W HyperCharge.",
        price: 27999,
        category: "mobiles",
        brand: "mi",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1673004164.81824986!400x400!85.png",
    },
    {
        name: "Xiaomi 13 Pro (12GB RAM, 256GB)",
        description: "Leica triple camera system, Snapdragon 8 Gen 2, 120W charging.",
        price: 74999,
        category: "mobiles",
        brand: "mi",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677490116.05394673!400x400!85.png",
    },
    {
        name: "Redmi 12 5G (6GB RAM, 128GB)",
        description: "Budget 5G smartphone with Snapdragon 4 Gen 2, 50MP camera, 5000mAh battery.",
        price: 11999,
        category: "mobiles",
        brand: "mi",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1691053679.58068991!400x400!85.png",
    },

    // --- Samsung (6 products) ---
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
    {
        name: "Samsung Galaxy A54 5G (8GB RAM, 256GB)",
        description: "Awesome camera with OIS, 120Hz Super AMOLED display, 5000mAh battery.",
        price: 38999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546elvdins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546elvdins-thumb-536892142?$344_344_PNG$",
    },
    {
        name: "Samsung Galaxy S23 FE (8GB RAM, 128GB)",
        description: "Flagship experience for everyone. 50MP camera, Exynos 2200, 120Hz display.",
        price: 49999,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s711blbcins/gallery/in-galaxy-s23-fe-s711-sm-s711blbcins-thumb-538359162?$344_344_PNG$",
    },
    {
        name: "Samsung Galaxy M14 5G (6GB RAM, 128GB)",
        description: "Segment-leading 6000mAh battery, 50MP triple camera, 5G ready.",
        price: 13990,
        category: "mobiles",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m146bzkdins/gallery/in-galaxy-m14-5g-sm-m146-sm-m146bzkdins-thumb-535892858?$344_344_PNG$",
    },

    // --- Apple (5 products) ---
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
        name: "Apple iPhone 15 (Pink, 128GB)",
        description: "Dynamic Island, 48MP Main camera, USB-C, and all-day battery life.",
        price: 79900,
        category: "mobiles",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pink-select-202309?wid=940&hei=1112&fmt=png-alpha&.v=1693555335029",
    },
    {
        name: "Apple iPhone 14 (Blue, 128GB)",
        description: "A total powerhouse. Vital safety features. And a ceramic shield front.",
        price: 59999,
        category: "mobiles",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-blue-select-202209?wid=940&hei=1112&fmt=png-alpha&.v=1661601639893",
    },
    {
        name: "Apple iPhone 13 (Midnight, 128GB)",
        description: "A15 Bionic chip, advanced dual-camera system, Cinematic mode.",
        price: 49900,
        category: "mobiles",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315986",
    },
    {
        name: "Apple iPhone SE (Midnight, 64GB)",
        description: "Powerful A15 Bionic chip. 5G capable. Affordable iPhone experience.",
        price: 43900,
        category: "mobiles",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-midnight-select-2022?wid=940&hei=1112&fmt=png-alpha&.v=1646033433732",
    },

    // --- Realme (5 products) ---
    {
        name: "realme 12 Pro+ 5G (Submarine Blue)",
        description: "Periscope Portrait Camera, Sony IMX890 OIS, and Luxury Watch Design.",
        price: 29999,
        category: "mobiles",
        brand: "realme",
        image: "https://image01.realme.net/general/20240129/1706509040846.png.webp",
        isFeatured: true
    },
    {
        name: "realme Narzo 60 5G (Mars Orange)",
        description: "Premium Vegan Leather Design, 90Hz Super AMOLED Display, 5000mAh battery.",
        price: 17999,
        category: "mobiles",
        brand: "realme",
        image: "https://image01.realme.net/general/20230704/1688439266133.png.webp",
    },
    {
        name: "realme 11 Pro+ 5G (Sunrise Beige)",
        description: "200MP OIS camera, curved AMOLED display, 100W SUPERVOOC charging.",
        price: 27999,
        category: "mobiles",
        brand: "realme",
        image: "https://image01.realme.net/general/20230612/1686555823704.png.webp",
    },
    {
        name: "realme C55 (Sunshower, 6GB RAM)",
        description: "64MP AI camera, Mini Capsule, 33W SUPERVOOC charging.",
        price: 11999,
        category: "mobiles",
        brand: "realme",
        image: "https://image01.realme.net/general/20230322/1679453578816.png.webp",
    },
    {
        name: "realme GT 6T 5G (Fluid Silver)",
        description: "Snapdragon 7+ Gen 3, 120Hz AMOLED, 5500mAh battery with 120W charging.",
        price: 32999,
        category: "mobiles",
        brand: "realme",
        image: "https://image01.realme.net/general/20240522/1716364987419.png.webp",
    },

    // --- Motorola (4 products) ---
    {
        name: "Motorola Edge 50 Pro (Luxe Lavender)",
        description: "World's 1st AI Powered Pro-Grade Camera and Pantone validated display.",
        price: 31999,
        category: "mobiles",
        brand: "motorola",
        image: "https://motorolain.vtexassets.com/arquivos/ids/159066-800-auto?v=638478491740070000&width=800&height=auto&aspect=true",
    },
    {
        name: "Motorola g24 Power (Glacier Blue)",
        description: "Thinner, Lighter, and stunning. 6000mAh battery for days of power.",
        price: 8999,
        category: "mobiles",
        brand: "motorola",
        image: "https://motorolain.vtexassets.com/arquivos/ids/158784-800-auto?v=638422409024000000&width=800&height=auto&aspect=true",
    },
    {
        name: "Motorola Edge 40 (Nebula Green)",
        description: "Curved pOLED display, 50MP OIS camera, IP68 water resistance.",
        price: 24999,
        category: "mobiles",
        brand: "motorola",
        image: "https://motorolain.vtexassets.com/arquivos/ids/155767-800-auto?v=638196260177030000&width=800&height=auto&aspect=true",
    },
    {
        name: "Motorola g64 5G (Pearl Blue)",
        description: "MediaTek Dimensity 7025, 50MP OIS camera, 6000mAh battery, 120Hz display.",
        price: 14999,
        category: "mobiles",
        brand: "motorola",
        image: "https://motorolain.vtexassets.com/arquivos/ids/159271-800-auto?v=638538859654330000&width=800&height=auto&aspect=true",
    },

    // --- Poco (4 products) ---
    {
        name: "POCO X6 Neo 5G (Astral Black)",
        description: "Sleek design, 120Hz AMOLED, MediaTek Dimensity 6080, and pure performance.",
        price: 15999,
        category: "mobiles",
        brand: "poco",
        image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/v/a/-original-imagxsf3p7hzfz6p.jpeg?q=70",
    },
    {
        name: "POCO M6 Pro 5G (Forest Green)",
        description: "Powerful 5G, 50MP AI dual camera, 5000mAh battery, 67W turbo charging.",
        price: 12999,
        category: "mobiles",
        brand: "poco",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1691053679.58068991!400x400!85.png",
    },
    {
        name: "POCO F5 5G (Snowstorm White)",
        description: "Snapdragon 7+ Gen 2, 64MP OIS triple camera, 120Hz Flow AMOLED.",
        price: 26999,
        category: "mobiles",
        brand: "poco",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1683187456.62264341!400x400!85.png",
    },
    {
        name: "POCO C65 (Pastel Blue)",
        description: "Budget-friendly with 50MP AI camera, 5000mAh battery, 6.74-inch display.",
        price: 8499,
        category: "mobiles",
        brand: "poco",
        image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1699435523.36634827!400x400!85.png",
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
