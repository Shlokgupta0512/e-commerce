import React from 'react';
import { Smartphone, Laptop, Shirt, Tv, Sofa, Plane, Footprints, Cookie } from 'lucide-react';

const categories = [
    { name: "Mobiles", icon: Smartphone, color: "text-blue-500" },
    { name: "Electronics", icon: Laptop, color: "text-purple-500" },
    { name: "Fashion", icon: Shirt, color: "text-pink-500" },
    { name: "Appliances", icon: Tv, color: "text-red-500" },
    { name: "Furniture", icon: Sofa, color: "text-amber-600" },
    { name: "Travel", icon: Plane, color: "text-cyan-500" },
    { name: "Footwear", icon: Footprints, color: "text-gray-600" },
    { name: "Grocery", icon: Cookie, color: "text-emerald-500" },
];

const CategoryBar = () => {
    return (
        <div className="bg-white border-b border-gray-100 hidden md:block shadow-sm">
            <div className="container mx-auto px-10 flex justify-between items-center py-4">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-pointer transition-all duration-300">
                        <div className={`p-3 rounded-2xl bg-gray-50 group-hover:bg-blue-50 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-md`}>
                            <cat.icon size={28} className={`${cat.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <span className="mt-2 text-[13px] font-bold text-gray-700 tracking-tight group-hover:text-blue-600 transition-colors">
                            {cat.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryBar;
