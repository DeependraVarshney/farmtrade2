import React from 'react'
import { FarmersSection } from '../component'

function ForFarmers() {
  return (
    <><div className="relative h-screen">
    <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover"
    >
      <source src="src\assets\vid3.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
        Maximize your <span className="text-green-500">Farming</span> Growth..!
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-4">
        Investments that puts you in control every step of the way.
      </p>
    </div>
  </div>
  <div className="p-4 text-center bg-gradient-to-r from-green-500 to-green-900 text-white">
  <h2 className="text-2xl mb-4">Investment for your next Expansion</h2>
  <p className="mb-4">FarmTrade connects you to the financing you need to scale</p>
  <div className="flex justify-center">
    <div className="mr-4 ">
      <h3 className="text-xl mb-1">Grow</h3>
      <p className="text-gray-200">Expand your farm and increase your yield</p>
    </div>
    <div className="mr-4">
      <h3 className="text-xl mb-1">Respect</h3>
      <p className="text-gray-200">Earn the respect of your peers and community</p>
    </div>
    <div>
      <h3 className="text-xl mb-1">Earn</h3>
      <p className="text-gray-200">Maximize your profits and secure your future</p>
    </div>
  </div>
  <FarmersSection />
</div>
 </>
  )
}

export default ForFarmers