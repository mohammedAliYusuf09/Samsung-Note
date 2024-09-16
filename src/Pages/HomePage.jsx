import React, { useRef } from 'react'
import { Nav } from '../components/Nav'
import { MainContext } from '../components/MainContext'
import { RiStickyNoteAddFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addOnRecycle, deleteNotes } from '../Store/SliceNotes';
import { FalseDeleteStage } from '../Store/UISclice';

export const HomePage = ({ navbarRef }) => {
    const dispach = useDispatch();
    const uiSlice = useSelector((store)=> store.uiSlice);
    const {deleteStage} = uiSlice;

    let selectedItems = []
    const addOnSelected =(noteObject)=> {
        const isPresint = selectedItems.some(note=> note.id === noteObject.id);
        if(isPresint)return;
        selectedItems.push(noteObject); 
    }

    const onDeleteClick = ()=> {
        dispach(deleteNotes(selectedItems));
        dispach(addOnRecycle(selectedItems))
        dispach(FalseDeleteStage());
    }

    const handelClear = ()=> {
        dispach(FalseDeleteStage());
    }
    


    return (
        <>
            <div className="app-container">
                <Nav navbarRef={navbarRef} />
                <MainContext navbarRef={navbarRef} addOnSelected={addOnSelected}/>
                <Link to='/addnote' className="fixed  bottom-5 right-5 text-red-500 text-4xl bg-[#1f1f1f] p-4 rounded-lg cursor-pointer">
                    <RiStickyNoteAddFill />
                </Link>

            </div>
            {
                deleteStage ? 
                <div className='w-full flex justify-center items-center'>
                <div className='flex gap-8 bg-[#181818] px-6 py-2 text-3xl rounded-lg fixed bottom-2 left-[45%]'>
                    <span className='text-white' onClick={handelClear}>
                    <RxCross2 />
                    </span>
                    <span className='text-red-400' onClick={onDeleteClick}>
                        <AiFillDelete />
                    </span>
                </div>
            </div> :
            ''
            }

            

        </>

    )
}
