import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
	const { isSignedIn } = useUser();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!isSignedIn) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};

	return (
		<div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group'>
			<div className='relative mx-3 mt-3 flex h-48 sm:h-60 overflow-hidden rounded-xl bg-gray-50'>
				<img
					className='object-contain w-full h-full p-2 group-hover:scale-105 transition-transform duration-300'
					src={product.image}
					alt={product.name}
					loading="lazy"
				/>
			</div>

			<div className='mt-4 px-4 pb-4 flex-1 flex flex-col'>
				<h5 className='text-base sm:text-lg font-semibold tracking-tight text-gray-800 line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors'>
					{product.name}
				</h5>

				<div className='mt-auto'>
					<div className='mb-3 flex items-center justify-between'>
						<p>
							<span className='text-2xl sm:text-3xl font-bold text-gray-900'>₹{product.price.toLocaleString('en-IN')}</span>
						</p>
					</div>
					<button
						className='w-full flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 sm:py-3 text-center text-sm font-bold
						 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 active:scale-95 shadow-md'
						onClick={handleAddToCart}
					>
						<ShoppingCart size={20} className='mr-2' />
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
