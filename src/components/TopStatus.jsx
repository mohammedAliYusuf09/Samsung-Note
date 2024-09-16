import React from 'react'
import { useSelector } from 'react-redux';

export const TopStatus = () => {

    const noteElements = useSelector((store)=> store.notes.notes);

    return (
        <div className='flex items-center justify-center h-44'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-mono'>All Notes</h1>
                <p className='text-lg font-light'>{noteElements.length} items</p>
            </div>
        </div>
    )
}
