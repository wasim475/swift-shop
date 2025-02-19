'use client'
import Link from 'next/link'


const EmptyCategoryCard = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center">
      <p className="text-xl font-bold mb-6">No Product Found</p>
      <Link
        href={'/products'}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-400 group-hover:bg-blue-400"></span>
        <span className="relative text-blue-500 group-hover:text-white">
          See All Products
        </span>
      </Link>
    </div>
  )
}

export default EmptyCategoryCard
