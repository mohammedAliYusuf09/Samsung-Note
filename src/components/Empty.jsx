import React from 'react'
import { TbMoodEmptyFilled } from "react-icons/tb";

export const Empty = () => {
    return (
        <div className='mt-10 flex justify-center'>
            <div className='flex flex-col items-center'>
                <span className='text-7xl text-yellow-600'>
                    <TbMoodEmptyFilled />
                </span>
                <p className='text-3xl font-bold text-center'>There is not notes abulable.<br/> Add some notes first.</p>
            </div>
        </div>
    )
}
