'use client'

import HomeCarousel from './carousel/carousel'
import DiscountCards from './discount/discount'
import FeatureCards from './feature/feature'
import Newarrival from './new arrival/newarrival'

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-232px)]">
      <HomeCarousel/>
      <Newarrival/>
      <DiscountCards/>
      <FeatureCards/>
    </div>
  )
}

export default Home
