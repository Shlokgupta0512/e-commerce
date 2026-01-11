import { ShoppingCart, LogIn, Search, Store, ChevronDown, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user } = useUser();
	const isUploader = user?.publicMetadata?.role === "uploader";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-white z-40 shadow-md border-b border-gray-100 transition-all duration-300'>
			<div className='container mx-auto px-4 lg:px-10 py-2.5 md:py-3.5'>
				<div className='flex items-center justify-between gap-6 lg:gap-14'>

					{/* Logo Section */}
					<Link to='/' className='flex flex-col flex-shrink-0 group'>
						<span className='text-3xl font-black text-blue-600 italic tracking-tighter leading-none group-hover:text-blue-700 transition-colors'>Mega</span>
						<span className='text-xs font-bold text-gray-400 italic mt-0.5 flex items-center'>
							Mart <span className='text-yellow-500 ml-1'>Plus ✦</span>
						</span>
					</Link>

					{/* Extended Search Bar */}
					<div className='flex-grow max-w-[800px] hidden sm:block'>
						<div className='relative group'>
							<div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
								<Search className='text-gray-400 group-focus-within:text-blue-500 transition-colors' size={18} />
							</div>
							<input
								type='text'
								placeholder='Search for Products, Brands and More'
								className='block w-full bg-[#f0f5ff] border border-transparent text-gray-800 text-sm rounded-lg py-2.5 pl-11 pr-4 focus:outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50/30 placeholder-gray-400 transition-all shadow-inner'
							/>
						</div>
					</div>

					{/* Action Links */}
					<nav className='flex items-center gap-6 lg:gap-10 flex-shrink-0'>

						{/* Login / Profile */}
						<div className='flex items-center'>
							<SignedIn>
								<div className='flex items-center gap-2.5 group cursor-pointer p-1.5 rounded-lg hover:bg-gray-50 transition-colors'>
									<UserButton afterSignOutUrl='/' appearance={{
										elements: {
											userButtonAvatarBox: "w-9 h-9 shadow-sm"
										}
									}} />
									<div className='flex flex-col'>
										<span className='text-gray-400 text-[10px] font-bold uppercase tracking-wider'>Account</span>
										<span className='text-gray-800 font-bold text-sm hidden lg:block -mt-1'>
											{user?.firstName || "Profile"}
										</span>
									</div>
									<ChevronDown size={14} className='text-gray-400 group-hover:text-blue-500 transition-colors' />
								</div>
							</SignedIn>
							<SignedOut>
								<Link
									to='/login'
									className='flex items-center gap-2.5 bg-blue-600 text-white px-7 py-2 rounded font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100'
								>
									<LogIn size={20} />
									<span>Login</span>
								</Link>
							</SignedOut>
						</div>

						{/* Cart */}
						<Link
							to='/cart'
							className='flex items-center gap-2.5 text-gray-700 hover:text-blue-600 transition-all group'
						>
							<div className='relative p-1.5 rounded-full group-hover:bg-blue-50 transition-colors'>
								<ShoppingCart size={24} className='text-gray-700 group-hover:text-blue-600 transition-colors' />
								{cart.length > 0 && (
									<span className='absolute top-0 -right-1 bg-[#ff6161] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow-md animate-bounce-short'>
										{cart.length}
									</span>
								)}
							</div>
							<span className='hidden lg:inline text-sm font-bold tracking-tight'>Cart</span>
						</Link>

						{/* Become a Seller */}
						<Link
							to={isUploader ? '/secret-dashboard' : '/become-seller'}
							className='flex items-center gap-2.5 text-gray-700 hover:text-blue-600 transition-all group'
						>
							<div className='p-1.5 rounded-full group-hover:bg-blue-50 transition-colors'>
								<Store size={22} className='text-gray-700 group-hover:text-blue-600 transition-colors' />
							</div>
							<span className='hidden lg:inline text-sm font-bold whitespace-nowrap tracking-tight'>{isUploader ? 'Dashboard' : 'Become a Seller'}</span>
						</Link>

						{/* More Vertical */}
						<div className='hidden xl:block cursor-pointer text-gray-400 hover:text-blue-500 p-1.5 rounded-full hover:bg-blue-50 transition-colors'>
							<MoreVertical size={22} />
						</div>
					</nav>
				</div>

				{/* Mobile Search Overlay */}
				<div className='mt-3.5 sm:hidden relative pb-1'>
					<input
						type='text'
						placeholder='Search products'
						className='w-full bg-[#f0f5ff] border-none text-gray-800 text-sm rounded-lg py-2.5 px-11 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all'
					/>
					<Search className='absolute left-3.5 top-3 text-gray-400' size={18} />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
