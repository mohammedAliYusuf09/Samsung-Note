import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { FalseDeleteStage, toggleNevUi, TrueDeleteStage } from '../Store/UISclice';
import { RxCross2 } from "react-icons/rx";

export const Header = ({deleteFromMain}) => {

    const uiSlice = useSelector((store)=> store.uiSlice);
    const {deleteStage} = uiSlice;
    const dispach = useDispatch();
    const toggleNav = () => {
        dispach(toggleNevUi())
    };

    const handleFalseDeleteStage=()=> {
        dispach(TrueDeleteStage())
    }

    const handleTrueDeleteStage=()=> {
        dispach(FalseDeleteStage())
    }


    return (
        <div className='h-16'>
            <div className='flex justify-between items-center mx-10'>
                <span className='text-4xl cursor-pointer' onClick={toggleNav}>
                    <IoMenu />
                </span>
                <div className='flex gap-6 items-center'>
                    <span className='text-4xl cursor-pointer'><IoMdSearch /></span>
                    <div className='text-xl'>
                        <select className='bg-[#232222] py-2 px-3 rounded' name="grid" id="grid">
                            <option value="small">Grid (small)</option>
                            <option value="medium">Grid (medium)</option>
                            <option value="large">Grid (large)</option>
                        </select>
                    </div>
                    {
                        !deleteStage ? 
                        <span className='text-4xl cursor-pointer' onClick={handleFalseDeleteStage}>
                        <AiFillDelete />
                        </span> 
                    : 
                    <span className='text-4xl cursor-pointer' onClick={handleTrueDeleteStage}>
                    <RxCross2 />
                    </span> 
                    }
                    
                </div>
            </div>
        </div>
    )
}
