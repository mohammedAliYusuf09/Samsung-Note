import React from 'react'
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectAll, toggleNevUi } from '../Store/UISclice';
import { TbSquareRounded } from "react-icons/tb";
import { BiSolidBullseye } from "react-icons/bi";

export const HeaderRecycle = () => {

    const uiState = useSelector((store)=> store.uiSlice);
    const {selectAll, deleteStage} = uiState;
    const dispach = useDispatch();
    const toggleNav = () => {
        dispach(toggleNevUi())
      };

      const handelSelectAll = ()=> {
        dispach(setSelectAll())
      }

    return (
        <div className='h-16'>
            <div className='flex justify-between items-center mx-10'>
                <span className='text-4xl cursor-pointer' onClick={toggleNav}>
                    <IoMenu />
                </span>
                <div className='flex bg-[#232222] items-center px-4 py-2 rounded-md gap-3 cursor-pointer' onClick={handelSelectAll}>
                    <p>Select All</p>
                    <span>{
                        selectAll ? <BiSolidBullseye /> : <TbSquareRounded />
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}
