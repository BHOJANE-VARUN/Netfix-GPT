import { IMAGE_URL } from "../util/Links";

const Movielist = ({title,tv}) => {
  return (
    <div className='text-white'>
        <h1 className='text-3xl pt-8 pb-5'>{title}</h1>
        <div className='flex overflow-x-scroll gap-5'>
            {tv?.results.map((d)=>  <img className='w-64 shadow-md shadow-gray-300 border-0 '  src={IMAGE_URL + d.backdrop_path} alt='movieImg'/> )}
        </div>
    </div>
  )
}
export default Movielist;