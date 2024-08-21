function FirstmovieINFO({name,overview}) {
  return (
    <div className='pt-[20%] pl-2 absolute text-white bg-gradient-to-r from-black w-screen aspect-video sm:pl-[5%] md:pt-[13%]'>
        <h1 className='text-2xl font-bold sm:text-4xl md:text-6xl'>{name}</h1>
        <p className='py-1 text-xs w-[75%] text-wrap text-start h-fit mb-2 sm:w-[50%] sm:text-base md:text-lg md:w-72'>{overview}</p>
        <div className=''>
            <button className='w-fit p-[1%] px-[1%]  text-black text-lg bg-white rounded-lg font-semibold hover:bg-opacity-70 sm:px-7'>▶Play</button>
            <button className='w-fit p-[1%] px-[1%]  mx-2 bg-gray-500 text-white text-lg bg-opacity-50 rounded-lg font-semibold hover:bg-opacity-70 sm:px-7'>More Info</button>
        </div>
    </div>
  )
}

export default FirstmovieINFO