import { IMAGE_URL } from "../util/Links";

const Movielist = ({title,tv}) => {
  return (
    <div className='text-white'>
        <h1 className='text-xl pt-4 pb-2 sm:text-2xl sm:pt-6 sm:pb-4 md:text-3xl md:pt-8 md:pb-5'>{title}</h1>
        <div className='flex overflow-x-scroll gap-5 hide-scrollbar'>
          {
              tv?.map((d)=>{
                if(!d?.backdrop_path) return null;
                return <img key={d.id} className='w-32 sm:w-52 md:w-64 shadow-md shadow-gray-300 border-0 '  src={IMAGE_URL + d.backdrop_path} alt='movieImg'/> 
            })
        } 
        </div>
    </div>
  )
}
export default Movielist;