import React from 'react'

const BookingForm = () => {
  return (
    <div className=' p-8 rounded-lg bg-white'>
        <form className='gap-4 flex flex-row items-center justify-center'>
            <div className='flex flex-col'>
                <label className='text-black font-semibold mb-4'>Check In</label>
                <input className='border-2 rounded-md border-black w-40 h-10' type="date" required/>
            </div>
            
            <div className='flex flex-col'>
                <label className='text-black font-semibold mb-4'>Check Out</label>
                <input className='border-2 rounded-md border-black w-40 h-10' type="date" required/>
            </div>
           
            <div className='flex flex-col'>
                <label className='text-black font-semibold mb-4'>Guest</label>
                <input className='border-2 rounded-md border-black w-40 h-10' type='number' required/>
            </div>

            <div>
                <button className="mt-10 px-4 py-2 bg-stone-500 rounded-md hover:scale-105 transition duration-300">Check Availability</button>
            </div>
            
        </form>
    </div>
  )
}

export default BookingForm