import React from 'react'
import { BG_IMGAGE } from '../util/Links'
import { useSelector } from 'react-redux'

function GptSearch() {
  const lang = useSelector(store =>store.lang.obj);
  return (
    <div className='relative w-full h-screen bg-black'>
      <img src={BG_IMGAGE} alt="background img" className='absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0'/>
      <div className='pt-[10%] pl-[7%] w-full flex justify-center z-20 bg-opacity-80 bg-black'>
      <form className='w-8/12 flex justify-between h-11 z-30'>
        <input type='text' className='bg-white border-2 border-black w-9/12' placeholder={lang?.place}/>
        <button className='text-white bg-red-600 font-bold text-xl pb-1 rounded-lg h-full w-2/12'>{lang?.Search}</button>
      </form>
    </div>
    </div>
  )
}

export default GptSearch