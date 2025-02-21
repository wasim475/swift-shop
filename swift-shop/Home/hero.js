import Image from 'next/image'


const Hero = () => {
  return (
    <div className='w-full h-10  relative'>
      <img src="/images/commerce-hero.png" alt="" className='w-full h-full object-cover' />
      
      <div  className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent'></div>
    </div>
  )
}

export default Hero
