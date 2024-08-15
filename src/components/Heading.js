import React, { useEffect } from 'react';
import { auth } from '../util/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../util/userSlice';
import { LOGO_URL } from '../util/Links';
const Heading = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleout = ()=>{
      signOut(auth).then(()=>{
          navigate('/')
      }).catch(()=>{
          navigate('/error')
      })
  }
  useEffect(()=>{
    const unsubscibe = onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      }
      else{
        dispatch(removeUser());
        navigate("/");
      }
    })
    return () => unsubscibe();
  },[])
  return (
    <div className="absolute h-28 w-full flex justify-between pl-36 pr-20 items-center  bg-gradient-to-b from-black z-10">
      <img 
        className='w-2/12' 
        src= {LOGO_URL} 
        alt="logo" 
      />
      <button className='text-white bg-red-600 w-24 h-10 font-bold text-xl pb-1  rounded-lg' onClick={handleout}>Log out</button>
    </div>
  );
}

export default Heading;
