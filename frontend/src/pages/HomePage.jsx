import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryBar from "../components/CategoryBar";
import HeroCarousel from "../components/HeroCarousel";

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden bg-gray-100'>
			{/* Flipkart-like Category Bar */}
			<div className="bg-white shadow-sm mt-16 sm:mt-0">
				<CategoryBar />
			</div>

			{/* Main Content */}
			<div className='relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4'>

				{/* Hero Carousel */}
				<HeroCarousel />

				{/* Featured Products Section */}
				{!isLoading && products.length > 0 && (
					<div className="mt-6 bg-white p-4 shadow-sm rounded-sm">
						<h2 className="text-xl font-bold text-black mb-4">Best of Electronics</h2>
						<FeaturedProducts featuredProducts={products} />
					</div>
				)}
			</div>
		</div>
	);
};
export default HomePage;
