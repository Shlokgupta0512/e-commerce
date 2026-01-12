import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

// Helper to create simple subcategories
const simpleSub = (name, link) => ({ name, href: link });

const categories = [
    { name: "Top Offers", image: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100", href: "/offers" },
    {
        name: "Mobiles",
        image: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
        href: "/category/mobiles",
        subcategories: [
            { name: "Mi", href: "/category/mobiles/mi" },
            { name: "Realme", href: "/category/mobiles/realme" },
            { name: "Samsung", href: "/category/mobiles/samsung" },
            { name: "Infinix", href: "/category/mobiles/infinix" },
            { name: "OPPO", href: "/category/mobiles/oppo" },
            { name: "Apple", href: "/category/mobiles/apple" },
            { name: "Vivo", href: "/category/mobiles/vivo" },
            { name: "Honor", href: "/category/mobiles/honor" },
            { name: "Asus", href: "/category/mobiles/asus" },
            { name: "Poco X2", href: "/category/mobiles/poco-x2" },
            { name: "realme Narzo 10", href: "/category/mobiles/realme-narzo-10" },
            { name: "Infinix Hot 9", href: "/category/mobiles/infinix-hot-9" },
            { name: "IQOO 3", href: "/category/mobiles/iqoo-3" },
            { name: "iPhone SE", href: "/category/mobiles/iphone-se" },
            { name: "Motorola razr", href: "/category/mobiles/motorola-razr" },
            { name: "realme Narzo 10A", href: "/category/mobiles/realme-narzo-10a" },
            { name: "Motorola g8 power lite", href: "/category/mobiles/motorola-g8-power-lite" },
        ]
    },
    {
        name: "Fashion",
        image: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
        href: "/category/fashion",
        subcategories: [
            {
                name: "Men's Top Wear",
                href: "/category/fashion/men-top-wear",
                childCategories: [
                    { name: "All", href: "/category/fashion/men-top-wear/all" },
                    { name: "Men's T-Shirts", href: "/category/fashion/men-top-wear/tshirts" },
                    { name: "Men's Casual Shirts", href: "/category/fashion/men-top-wear/casual-shirts" },
                    { name: "Men's Formal Shirts", href: "/category/fashion/men-top-wear/formal-shirts" },
                    { name: "Men's Kurtas", href: "/category/fashion/men-top-wear/kurtas" },
                    { name: "Men's Ethnic Sets", href: "/category/fashion/men-top-wear/ethnic-sets" },
                    { name: "Men's Blazers", href: "/category/fashion/men-top-wear/blazers" },
                    { name: "Men's Raincoat", href: "/category/fashion/men-top-wear/raincoat" },
                    { name: "Men's Windcheaters", href: "/category/fashion/men-top-wear/windcheaters" },
                    { name: "Men's Suit", href: "/category/fashion/men-top-wear/suit" },
                    { name: "Men's Fabrics", href: "/category/fashion/men-top-wear/fabrics" },
                ]
            },
            {
                name: "Men's Bottom Wear",
                href: "/category/fashion/men-bottom-wear",
                childCategories: [
                    { name: "All", href: "/category/fashion/men-bottom-wear/all" },
                    { name: "Men's Jeans", href: "/category/fashion/men-bottom-wear/jeans" },
                    { name: "Men's Trousers", href: "/category/fashion/men-bottom-wear/trousers" },
                    { name: "Men's Trackpants", href: "/category/fashion/men-bottom-wear/trackpants" },
                    { name: "Men's Shorts", href: "/category/fashion/men-bottom-wear/shorts" },
                    { name: "Men's Cargos", href: "/category/fashion/men-bottom-wear/cargos" },
                    { name: "Men's Three Fourths", href: "/category/fashion/men-bottom-wear/three-fourths" },
                ]
            },
            {
                name: "Women Ethnic",
                href: "/category/fashion/women-ethnic",
                childCategories: [
                    { name: "All", href: "/category/fashion/women-ethnic/all" },
                    { name: "Women Sarees", href: "/category/fashion/women-ethnic/sarees" },
                    { name: "Women Kurtas & Kurtis", href: "/category/fashion/women-ethnic/kurtas" },
                    { name: "Women Kurta Sets", href: "/category/fashion/women-ethnic/kurta-sets" },
                    { name: "Women Ethnic Skirts", href: "/category/fashion/women-ethnic/ethnic-skirts" },
                    { name: "Women Palazzos", href: "/category/fashion/women-ethnic/palazzos" },
                    { name: "Women Blouse", href: "/category/fashion/women-ethnic/blouse" },
                ]
            },
            { name: "Men Footwear", href: "/category/fashion/men-footwear" },
            { name: "Women Footwear", href: "/category/fashion/women-footwear" },
            { name: "Watches and Accessories", href: "/category/fashion/watches-accessories" },
            { name: "Women Western", href: "/category/fashion/women-western" },
            { name: "Bags, Suitcases & Luggage", href: "/category/fashion/bags" },
            { name: "Kids", href: "/category/fashion/kids" },
            { name: "Essentials", href: "/category/fashion/essentials" },
            { name: "Winter", href: "/category/fashion/winter" },
        ]
    },
    {
        name: "Electronics",
        image: "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
        href: "/category/electronics",
        subcategories: [
            {
                name: "Audio", href: "/category/electronics/audio", childCategories: [
                    simpleSub("Bluetooth Headphones", "/category/electronics/audio/bluetooth"),
                    simpleSub("Wired Headphones", "/category/electronics/audio/wired"),
                    simpleSub("True Wireless", "/category/electronics/audio/tws"),
                    simpleSub("Speakers", "/category/electronics/audio/speakers"),
                ]
            },
            { name: "Cameras & Accessories", href: "/category/electronics/cameras" },
            { name: "Computer Peripherals", href: "/category/electronics/peripherals" },
            { name: "Gaming", href: "/category/electronics/gaming" },
            { name: "Health & Personal Care", href: "/category/electronics/health" },
            { name: "Laptop Accessories", href: "/category/electronics/laptop-accessories" },
            { name: "Laptop and Desktop", href: "/category/electronics/laptops" },
            { name: "MobileAccessory", href: "/category/electronics/mobile-accessories" },
            { name: "Powerbank", href: "/category/electronics/powerbank" },
            { name: "Smart Home automation", href: "/category/electronics/smart-home" },
            { name: "Smart Wearables", href: "/category/electronics/wearables" },
            { name: "Storage", href: "/category/electronics/storage" },
            { name: "Tablets", href: "/category/electronics/tablets" },
        ]
    },
    {
        name: "Home & Furniture",
        image: "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
        href: "/category/home",
        subcategories: [
            { name: "Kitchen & Dining", href: "/category/home/kitchen" },
            { name: "Furniture", href: "/category/home/furniture" },
            { name: "Furnishing", href: "/category/home/furnishing" },
            { name: "Home Decor", href: "/category/home/decor" },
            { name: "Tools & Hardware", href: "/category/home/tools" },
        ]
    },
    {
        name: "Appliances",
        image: "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
        href: "/category/appliances",
        subcategories: [
            { name: "Televisions", href: "/category/appliances/tvs" },
            { name: "Washing Machines", href: "/category/appliances/washing-machines" },
            { name: "Air Conditioners", href: "/category/appliances/acs" },
            { name: "Refrigerators", href: "/category/appliances/refrigerators" },
            { name: "Kitchen Appliances", href: "/category/appliances/kitchen" },
            { name: "Home Appliances", href: "/category/appliances/home" },
            { name: "Seasonal Appliances", href: "/category/appliances/seasonal" },
        ]
    },
    {
        name: "Travel",
        image: "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b460f.png?q=100",
        href: "/category/travel",
        subcategories: [
            { name: "Flight Bookings", href: "/category/travel/flights" },
            { name: "Bus Bookings", href: "/category/travel/bus" },
            { name: "Hotel Bookings", href: "/category/travel/hotels" },
            { name: "Holiday Packages", href: "/category/travel/holidays" },
        ]
    },
    {
        name: "Beauty & Toys",
        image: "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
        href: "/category/beauty",
        subcategories: [
            { name: "Beauty & Personal Care", href: "/category/beauty/personal-care" },
            { name: "Toys & School Supplies", href: "/category/beauty/toys" },
            { name: "Food & Drinks", href: "/category/beauty/food" },
            { name: "Baby Care", href: "/category/beauty/baby" },
            { name: "Sports & Fitness", href: "/category/beauty/sports" },
            { name: "Books", href: "/category/beauty/books" },
            { name: "Music", href: "/category/beauty/music" },
            { name: "Stationery & Office Supplies", href: "/category/beauty/stationery" },
        ]
    },
    {
        name: "Grocery",
        image: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
        href: "/category/grocery",
        subcategories: [
            { name: "Staples", href: "/category/grocery/staples" },
            { name: "Snacks & Beverages", href: "/category/grocery/snacks" },
            { name: "Packaged Food", href: "/category/grocery/packaged-food" },
            { name: "Personal & Baby Care", href: "/category/grocery/personal-care" },
            { name: "Household Care", href: "/category/grocery/household" },
            { name: "Dairy & Eggs", href: "/category/grocery/dairy" },
            { name: "Home & Kitchen", href: "/category/grocery/kitchen" },
        ]
    },
];

const CategoryBar = () => {
    return (
        <div className="bg-white shadow-sm border-b border-gray-200 w-full overflow-visible relative z-30">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center min-w-[800px] gap-4 sm:gap-8">
                    {categories.map((cat) => (
                        <div key={cat.name} className="relative group">
                            <Link
                                to={cat.href}
                                className="flex flex-col items-center cursor-pointer"
                            >
                                <div className="mb-1 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                                    <img src={cat.image} alt={cat.name} className="object-contain w-full h-full" />
                                </div>
                                <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 whitespace-nowrap flex items-center gap-1">
                                    {cat.name}
                                    {cat.subcategories && <ChevronDown size={14} className="text-gray-500 group-hover:rotate-180 transition-transform" />}
                                </span>
                            </Link>

                            {/* Level 1 Dropdown */}
                            {cat.subcategories && (
                                <div className="absolute left-0 top-full mt-1 w-[250px] bg-white shadow-xl border border-gray-100 rounded-b-md hidden group-hover:block transition-all z-40">
                                    {cat.subcategories.map((sub, index) => (
                                        <div key={sub.name} className="relative group/sub">
                                            <Link
                                                to={sub.href}
                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:font-bold flex justify-between items-center"
                                            >
                                                {sub.name}
                                                {sub.childCategories && <ChevronRight size={14} />}
                                            </Link>

                                            {/* Level 2 Dropdown */}
                                            {sub.childCategories && (
                                                <div className="absolute left-full top-0 w-[250px] bg-white shadow-xl border border-gray-100 rounded-md hidden group-hover/sub:block z-50 min-h-full">
                                                    <div className="px-4 py-3 text-xs text-gray-400 font-bold uppercase tracking-wider border-b border-gray-100">
                                                        More in {sub.name}
                                                    </div>
                                                    {sub.childCategories.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            to={child.href}
                                                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryBar;
