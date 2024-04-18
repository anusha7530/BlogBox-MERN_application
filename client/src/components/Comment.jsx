import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {FaThumbsUp} from 'react-icons/fa'

export default function Comment({comment, onLike}) {

  const [user,setUser] = useState({});
  const {currentUser} = useSelector(state=> state.user);

  useEffect(()=>{
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if(res.ok){
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getUser();
  },[comment]);

  return (
    <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
      <div className='flex-shrink-0 mr-3'>
        <img src={user.profilePicture} alt={user.username} className='w-10 h-10 rounded-full bg-gray-200'/>
      </div>
      <div className='flex-1'>
        <div className='dark:text-gray-400 flex items-center mb-1'>
          <span className='font-bold mr-1 text-sm truncate'>{user ? `@${user.username}` : 'anonymous user'}</span>
          <span className='text-xs'>
            {moment(comment.createdAt).fromNow()}
          </span>
        </div>
        <p className='dark:text-white pb-2'>{comment.content}</p>
        <div className='flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2'>
          <button className={`text-gray-400 hover:text-blue-500 ${currentUser && comment.likes.includes(currentUser._id) && '!text-blue-500'}` } type='button' onClick={() => onLike(comment._id)}>
            <FaThumbsUp className='text-sm'/>
          </button>
          <p className='text-gray-400'>{comment.numberOfLikes >0 && comment.numberOfLikes + " " + (comment.numberOfLikes === 1 ? "like" : "likes")} </p>
        </div>
      </div>
    </div>
  )
}
