import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='relative overflow-hidden h-[400px] w-full rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-500'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer relative'>
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10' />
					<img
						src={category.imageUrl}
						alt={category.name}
						className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
						loading='lazy'
					/>
					<div className='absolute bottom-0 left-0 right-0 p-6 z-20'>
						<h3 className='text-white text-2xl font-black mb-1 group-hover:text-yellow-400 transition-colors'>{category.name}</h3>
						<p className='text-gray-200 text-sm font-bold uppercase tracking-widest opacity-80'>Shop Now &rarr;</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
