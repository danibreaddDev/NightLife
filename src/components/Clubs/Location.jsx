import React from 'react'

export const Location = ({address}) => {
  return (
    <div className="p-5 flex flex-col gap-12">
 <span className=" w-fit px-3 py-2 text-base bg-slate-500 rounded-3xl">Ubicacion</span>
 <h2 className="text-2xl">{address}</h2>
    </div>
   
  )
}
