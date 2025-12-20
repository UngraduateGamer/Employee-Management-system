import React from 'react'

const EMS_Card = ({icon,title,description}) => {
  return (
      <div className="card flex gap-5 w-[46%] items-center ">
                    <div className="left bg-[#333a56] text-white flex items-center justify-center w-fit h-fit p-2 rounded text-2xl">{icon}</div>
                    <div className="right flex flex-col gap-1">
                        <h4 className='text-[#333a56] text-xl font-bold'>{title}</h4>
                        <p className='text-[#52658f] text-lg font-normal'>{description} </p>
                    </div>
                </div>
  )
}

export default EMS_Card