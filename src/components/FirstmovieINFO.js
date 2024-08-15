function FirstmovieINFO({name,overview}) {
  return (
    <div className='pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{name}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='p-4 px-12 text-black text-xl bg-white rounded-lg font-semibold hover:bg-opacity-70'>▶Play</button>
            <button className='p-4 px-12 mx-2 bg-gray-500 text-white text-xl bg-opacity-50 rounded-lg font-semibold hover:bg-opacity-70'>More Info</button>
        </div>
    </div>
  )
}

export default FirstmovieINFO