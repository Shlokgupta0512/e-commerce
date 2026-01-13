import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Helper to create simple subcategories
const simpleSub = (name, link) => ({ name, href: link });

const categories = [
    { name: "Top Offers", image: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100", href: "/category/top-offers" },
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
    const [activeCategory, setActiveCategory] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseEnter = (name) => {
        if (!isMobile) setActiveCategory(name);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setActiveCategory(null);
    };

    const handleClick = (e, cat) => {
        if (cat.subcategories && isMobile) {
            e.preventDefault();
            setActiveCategory(activeCategory === cat.name ? null : cat.name);
        }
    };

    const closeMenu = () => setActiveCategory(null);

    return (
        <div className="bg-white shadow-sm border-b border-gray-200 w-full relative z-40 font-sans">
            <div className="container mx-auto px-2 sm:px-4 py-3">
                {/* Main Category List */}
                <div className="flex gap-2 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide snap-x justify-between items-center mask-gradient">
                    {categories.map((cat, index) => {
                        // Smart Positioning Logic
                        const isRightHalf = index > categories.length / 2;
                        const dropdownAlignClass = isRightHalf ? "right-0" : "left-0";
                        const subDropdownAlignClass = isRightHalf ? "right-full mr-1" : "left-full ml-1";
                        // const slideOriginClass = isRightHalf ? "slide-in-from-right-2" : "slide-in-from-left-2";

                        return (
                            <div
                                key={cat.name}
                                className="relative flex-shrink-0 snap-start group"
                                onMouseEnter={() => handleMouseEnter(cat.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link
                                    to={cat.href}
                                    onClick={(e) => handleClick(e, cat)}
                                    className="flex flex-col items-center cursor-pointer px-2 transition-opacity hover:opacity-100"
                                >
                                    <div className="mb-1 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                        <img src={cat.image} alt={cat.name} className="object-contain w-full h-full" />
                                    </div>
                                    <div className="flex items-center gap-1 group-hover:text-[#2874f0]">
                                        <span className={`text-[12px] sm:text-[14px] font-semibold whitespace-nowrap ${activeCategory === cat.name ? "text-[#2874f0]" : "text-gray-800"
                                            }`}>
                                            {cat.name}
                                        </span>
                                        {cat.subcategories && (
                                            <ChevronDown
                                                size={12}
                                                className={`text-gray-500 transition-transform duration-300 ${activeCategory === cat.name ? "rotate-180 text-[#2874f0]" : "group-hover:rotate-180 group-hover:text-[#2874f0]"
                                                    }`}
                                            />
                                        )}
                                    </div>
                                </Link>

                                {/* Desktop Dropdown (CSS-based for instant hover response, backed by state for overlay) */}
                                {cat.subcategories && !isMobile && (
                                    <div className={`hidden lg:block absolute ${dropdownAlignClass} top-full mt-1 w-[240px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-gray-100 rounded-sm overflow-visible z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}>
                                        <div className="py-1">
                                            {cat.subcategories.map((sub) => (
                                                <div key={sub.name} className="group/sub relative">
                                                    <Link
                                                        to={sub.href}
                                                        className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-[#f5faff] hover:text-[#2874f0] hover:font-semibold flex justify-between items-center transition-colors"
                                                    >
                                                        {sub.name}
                                                        {sub.childCategories && <ChevronRight size={14} className="text-gray-400 group-hover/sub:text-[#2874f0]" />}
                                                    </Link>

                                                    {/* Nested Level 2 Dropdown (Flyout) */}
                                                    {sub.childCategories && (
                                                        <div className={`absolute ${subDropdownAlignClass} top-[-4px] w-[260px] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] border border-gray-100 rounded-sm hidden group-hover/sub:block z-50 min-h-[105%]`}>
                                                            <div className="px-5 py-3 text-[12px] text-gray-400 font-bold uppercase tracking-wider bg-white border-b border-gray-50">
                                                                More in {sub.name}
                                                            </div>
                                                            <div className="py-1">
                                                                {sub.childCategories.map((child) => (
                                                                    <Link
                                                                        key={child.name}
                                                                        to={child.href}
                                                                        className="block px-5 py-2 text-[14px] text-gray-600 hover:bg-[#f5faff] hover:text-[#2874f0] transition-colors"
                                                                    >
                                                                        {child.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Mobile/Tablet Full Screen Menu (The "Sab aa jaye" view) */}
                                {cat.subcategories && activeCategory === cat.name && isMobile && (
                                    <div className="fixed inset-0 z-[100] lg:hidden flex flex-col animate-in slide-in-from-bottom duration-300">
                                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu}></div>
                                        <div className="relative mt-auto h-[80vh] w-full bg-[#f1f3f6] rounded-t-xl overflow-hidden shadow-2xl flex flex-col">
                                            {/* Header */}
                                            <div className="flex items-center justify-between p-4 bg-white shadow-sm z-10">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
                                                </div>
                                                <button onClick={closeMenu} className="p-2 rounded-full hover:bg-gray-100 text-gray-600">
                                                    <ChevronDown className="rotate-180" size={24} />
                                                </button>
                                            </div>

                                            {/* Mobile Content */}
                                            <div className="flex-1 overflow-y-auto p-3">
                                                <div className="space-y-3">
                                                    {cat.subcategories.map((sub) => (
                                                        <div key={sub.name} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                                                            {/* Subcategory Header */}
                                                            <Link
                                                                to={sub.href}
                                                                onClick={closeMenu}
                                                                className="flex items-center justify-between p-4 bg-white active:bg-gray-50"
                                                            >
                                                                <span className="font-medium text-gray-800">{sub.name}</span>
                                                                <ChevronRight size={16} className="text-gray-400" />
                                                            </Link>

                                                            {/* Nested Items Grid */}
                                                            {sub.childCategories && (
                                                                <div className="grid grid-cols-3 bg-[#fdfdfd] border-t border-gray-100">
                                                                    {sub.childCategories.map(child => (
                                                                        <Link
                                                                            key={child.name}
                                                                            to={child.href}
                                                                            onClick={closeMenu}
                                                                            className="p-3 text-[12px] text-center text-gray-600 border-r border-b border-gray-100 hover:text-[#2874f0] flex items-center justify-center h-full active:bg-[#f5faff]"
                                                                        >
                                                                            {child.name}
                                                                        </Link>
                                                                    ))}
                                                                    <Link
                                                                        to={sub.href}
                                                                        onClick={closeMenu}
                                                                        className="p-3 text-[12px] text-center font-bold text-[#2874f0] border-r border-b border-gray-100 flex items-center justify-center active:bg-[#f5faff]"
                                                                    >
                                                                        View All
                                                                    </Link>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Overlay Removed */}
        </div>
    );
};

export default CategoryBar;
