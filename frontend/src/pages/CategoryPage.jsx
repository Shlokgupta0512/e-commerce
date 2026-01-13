import { useEffect, useState } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { ChevronDown, ChevronRight, Filter, Star } from "lucide-react";

const FilterSection = ({ title, children, defaultOpen = true }) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);
	return (
		<div className="border-b border-gray-200 py-4 last:border-0">
			<div
				className="flex justify-between items-center cursor-pointer mb-2"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="text-[13px] font-bold text-gray-800 uppercase tracking-wider">{title}</h3>
				{isOpen ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />}
			</div>
			{isOpen && <div className="space-y-2">{children}</div>}
		</div>
	);
};

const CheckboxFilter = ({ label }) => (
	<label className="flex items-center gap-2 cursor-pointer group">
		<input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
		<span className="text-[14px] text-gray-700 group-hover:text-gray-900">{label}</span>
	</label>
);

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();
	const { category } = useParams();

	useEffect(() => {
		fetchProductsByCategory(category);
	}, [fetchProductsByCategory, category]);

	const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

	// Dummy graphics for the banner based on category
	const getBannerImage = (cat) => {
		if (cat === "mobiles") return "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b237568600f12.jpg?q=20"; // Sample banner
		return "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070";
	};

	return (
		<div className="min-h-screen bg-[#f1f3f6] py-3">
			<div className="max-w-[1680px] mx-auto px-2 sm:px-3">
				<div className="flex flex-col lg:flex-row gap-3">

					{/* Left Sidebar - Filters (Hidden on Mobile, nice to have for Desktop) */}
					<div className="hidden lg:block w-[280px] flex-shrink-0 bg-white shadow-sm rounded-sm p-4 h-fit sticky top-[100px]">
						<div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-2">
							<h2 className="text-lg font-bold text-gray-800">Filters</h2>
							<span className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">CLEAR ALL</span>
						</div>

						{/* Categories */}
						<div className="py-3 border-b border-gray-200">
							<div className="text-[12px] font-medium text-gray-400 mb-2 uppercase">Categories</div>
							<div className="text-[14px] text-gray-600 flex items-center gap-2">
								<ChevronDown size={14} className="text-gray-400" />
								<span>{formattedCategory}</span>
							</div>
						</div>

						{/* Price Range */}
						<div className="py-4 border-b border-gray-200">
							<h3 className="text-[13px] font-bold text-gray-800 uppercase tracking-wider mb-2">Price</h3>
							<div className="h-1 bg-gray-200 rounded-full mb-4 relative">
								<div className="absolute left-0 right-0 top-0 h-full bg-blue-600 rounded-full"></div>
								<div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-gray-400 rounded-full shadow cursor-pointer"></div>
								<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-gray-400 rounded-full shadow cursor-pointer"></div>
							</div>
							<div className="flex justify-between gap-2">
								<select className="flex-1 border border-gray-300 text-sm p-1 rounded"><option>Min</option></select>
								<span className="text-gray-400">to</span>
								<select className="flex-1 border border-gray-300 text-sm p-1 rounded"><option>Max</option></select>
							</div>
						</div>

						{/* Brand */}
						<FilterSection title="Brand">
							<CheckboxFilter label="Samsung" />
							<CheckboxFilter label="Apple" />
							<CheckboxFilter label="Realme" />
							<CheckboxFilter label="Uniqlo" />
							<CheckboxFilter label="Nike" />
						</FilterSection>

						{/* Customer Ratings */}
						<FilterSection title="Customer Ratings">
							<label className="flex items-center gap-2 cursor-pointer group">
								<input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
								<div className="flex items-center gap-1 text-[14px] text-gray-700">
									4 <Star size={12} className="fill-black text-black" /> & above
								</div>
							</label>
							<label className="flex items-center gap-2 cursor-pointer group">
								<input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
								<div className="flex items-center gap-1 text-[14px] text-gray-700">
									3 <Star size={12} className="fill-black text-black" /> & above
								</div>
							</label>
						</FilterSection>

						<FilterSection title="Discount">
							<CheckboxFilter label="50% or more" />
							<CheckboxFilter label="40% or more" />
							<CheckboxFilter label="30% or more" />
						</FilterSection>
					</div>

					{/* Main Content Area */}
					<div className="flex-1">
						{/* Header & Breadcrumbs for Mobile (Simplified) */}
						<div className="bg-white p-4 shadow-sm rounded-sm mb-3">
							<h1 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">
								{formattedCategory}
								<span className="text-sm font-normal text-gray-500 ml-2">(Showing 1 – {products?.length || 0} products)</span>
							</h1>
							<div className="flex items-center gap-4 text-sm text-gray-700 font-medium">
								<span className="font-bold border-b-2 border-blue-600 pb-0.5 text-blue-600 cursor-pointer">Popularity</span>
								<span className="cursor-pointer hover:text-blue-600">Price -- Low to High</span>
								<span className="cursor-pointer hover:text-blue-600">Price -- High to Low</span>
								<span className="cursor-pointer hover:text-blue-600">Newest First</span>
							</div>
						</div>

						{/* Promo Banner */}
						<div className="bg-white shadow-sm rounded-sm mb-3 overflow-hidden">
							<img
								src={getBannerImage(category)}
								alt="Category Banner"
								className="w-full h-[150px] sm:h-[250px] object-cover object-center"
							/>
						</div>

						{/* Product Grid */}
						<div className="bg-white shadow-sm rounded-sm p-3">
							<motion.div
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								{products?.length === 0 && (
									<div className="col-span-full py-12 text-center">
										<h2 className="text-xl font-semibold text-gray-400">No products found in this category</h2>
										<p className="text-gray-500">Try adjusting your filters</p>
									</div>
								)}

								{products?.map((product) => (
									<ProductCard key={product._id} product={product} />
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
