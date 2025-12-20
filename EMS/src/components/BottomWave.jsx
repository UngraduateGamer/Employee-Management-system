import React from 'react'

const BottomWave = () => {
  return (
    <div className="relative bg-[#e8e8e8] rotate-180 h-64 -mt-40 z-1">

  <svg
    className="absolute bottom-0 w-full"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#f7f5e6"
      fillOpacity="1"
      d="M0,192L60,186.7C120,181,240,171,360,176C480,181,600,203,720,197.3C840,192,960,160,1080,144C1200,128,1320,128,1380,128L1440,128L1440,320L0,320Z"
    ></path>
  </svg>
</div>

  )
}

export default BottomWave