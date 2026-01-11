import { Navigate, Route, Routes } from "react-router-dom";
import { useUser, useAuth, SignIn, SignUp } from "@clerk/clerk-react";
import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";

import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "./components/LoadingSpinner";
import { useCartStore } from "./stores/useCartStore";

function App() {
	const { isLoaded, isSignedIn, user } = useUser();
	const { getToken } = useAuth();
	const { getCartItems } = useCartStore();

	useEffect(() => {
		const setupInterceptor = async () => {
			import("./lib/axios").then(({ default: axiosInstance }) => {
				axiosInstance.interceptors.request.use(async (config) => {
					const token = await getToken();
					if (token) {
						config.headers.Authorization = `Bearer ${token}`;
					}
					return config;
				});
			});
		};
		setupInterceptor();
	}, [getToken]);

	useEffect(() => {
		if (isSignedIn) {
			getCartItems();
		}
	}, [getCartItems, isSignedIn]);

	if (!isLoaded) return <LoadingSpinner />;

	// Support for "uploader" role from Clerk Metadata
	const isUploader = user?.publicMetadata?.role === "uploader";

	return (
		<div className='min-h-screen bg-gray-100 text-gray-900 relative overflow-hidden font-sans selection:bg-blue-100 selection:text-blue-600'>
			<div className='relative z-50 pt-[72px] md:pt-[84px]'>
				<Navbar />
				<CategoryBar />
				<div className='container mx-auto px-4 lg:px-10 py-8 md:py-12'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route
							path='/signup'
							element={
								<div className='flex justify-center items-center py-8'>
									<SignUp routing='path' path='/signup' />
								</div>
							}
						/>
						<Route
							path='/login'
							element={
								<div className='flex justify-center items-center py-8'>
									<SignIn routing='path' path='/login' />
								</div>
							}
						/>
						<Route
							path='/secret-dashboard'
							element={isUploader ? <AdminPage /> : <Navigate to='/' />}
						/>
						<Route path='/category/:category' element={<CategoryPage />} />
						<Route path='/cart' element={isSignedIn ? <CartPage /> : <Navigate to='/login' />} />
						<Route
							path='/purchase-success'
							element={isSignedIn ? <PurchaseSuccessPage /> : <Navigate to='/login' />}
						/>
						<Route path='/purchase-cancel' element={isSignedIn ? <PurchaseCancelPage /> : <Navigate to='/login' />} />
					</Routes>
				</div>
			</div>
			<Toaster />
		</div>
	);
}

export default App;
