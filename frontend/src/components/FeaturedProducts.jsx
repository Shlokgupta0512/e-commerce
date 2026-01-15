import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const FeaturedProducts = ({ featuredProducts }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const { addToCart } = useCartStore();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) setItemsPerPage(1);
			else if (window.innerWidth < 1024) setItemsPerPage(2);
			else if (window.innerWidth < 1280) setItemsPerPage(3);
			else setItemsPerPage(4);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
	};

	const isStartDisabled = currentIndex === 0;
	const isEndDisabled = currentIndex >= featuredProducts.length - itemsPerPage;

	return (
		<div className='py-8 sm:py-12 lg:py-20'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between mb-6 sm:mb-8'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight'>
						Top <span className='text-blue-600'>Deals</span>
					</h2>
					<div className='flex gap-2'>
						<button
							onClick={prevSlide}
							disabled={isStartDisabled}
							className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 ${isStartDisabled ? "bg-gray-50 text-gray-300 border-gray-100" : "bg-white text-blue-600 border-gray-200 hover:border-blue-500 hover:bg-blue-50 shadow-sm"
								}`}
						>
							<ChevronLeft className='w-5 h-5 sm:w-6 sm:h-6' />
						</button>

						<button
							onClick={nextSlide}
							disabled={isEndDisabled}
							className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 ${isEndDisabled ? "bg-gray-50 text-gray-300 border-gray-100" : "bg-white text-blue-600 border-gray-200 hover:border-blue-500 hover:bg-blue-50 shadow-sm"
								}`}
						>
							<ChevronRight className='w-5 h-5 sm:w-6 sm:h-6' />
						</button>
					</div>
				</div>

				<div className='relative'>
					<div className='overflow-hidden rounded-2xl'>
						<div
							className='flex transition-transform duration-500 ease-out'
							style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
						>
							{featuredProducts?.map((product) => (
								<div key={product._id} className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2 sm:px-3'>
									<div className='bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden h-full transition-all duration-300 border border-gray-100 group'>
										<div className='relative h-48 sm:h-64 overflow-hidden bg-gray-50'>
											<img
												src={product.image}
												alt={product.name}
												className='w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105'
												loading="lazy"
											/>
											<div className='absolute top-3 left-3'>
												<span className='bg-yellow-400 text-gray-900 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm'>BESTSELLER</span>
											</div>
										</div>
										<div className='p-4 sm:p-5'>
											<h3 className='text-base sm:text-lg font-bold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
												{product.name}
											</h3>
											<p className='text-blue-600 font-black text-xl sm:text-2xl mb-3 sm:mb-4'>
												₹{product.price.toLocaleString('en-IN')}
											</p>
											<button
												onClick={() => addToCart(product)}
												className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-300 
												flex items-center justify-center gap-2 shadow-lg shadow-blue-100 active:scale-95'
											>
												<ShoppingCart className='w-4 h-4 sm:w-5 sm:h-5' />
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FeaturedProducts;
