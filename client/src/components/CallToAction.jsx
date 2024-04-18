import React from 'react';
import {Button} from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 flex flex-col justify-center gap-2'>
        <h2 className='text-2xl dark:text-white'>
            Want to explore some more projects?
        </h2>
        <p className='text-gray-500 my-2'>Checkout the github link with many more projects.</p>
        <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none '>
        <a href="https://github.com/anusha7530" target='_blank' rel='noopener noreferrer'>
        Github Account
        </a>
        </Button>
      </div>
      <div className='p-7 flex-1'>
        <img src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" />
      </div>
    </div>
  )
}
