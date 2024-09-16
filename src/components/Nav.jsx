import React, { useRef } from 'react'
import { CgNotes } from "react-icons/cg";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { cloaseNav } from '../Store/UISclice';

export const Nav = ({ navbarRef }) => {

  const noteElements = useSelector((store)=> store.notes.notes);
  const recycleElement = useSelector((store)=> store.notes.recycle);
  const uiSlice = useSelector((store)=> store.uiSlice);
  const {isNavVisible} = uiSlice;
  const dispach = useDispatch();

  const handleCloseNav=()=> {
    dispach(cloaseNav())
  }
  
  

  return (
    <nav ref={navbarRef} className={`side-nav ${isNavVisible ? 'show' : ''}`}>
      <div>
        <NavLink to='/' className="flex items-center justify-between gap-10 text-lg hover:bg-stone-800 p-3 rounded nav-item cursor-pointer" onClick={handleCloseNav}>
          <p className="w-[20%] text-2xl"><CgNotes /></p>
          <p className="w-[60%]">All Notes</p>
          <p className="w-[20%]">{noteElements.length}</p>
        </NavLink>

        <NavLink to='/recycle' className="flex items-center gap-10 text-lg hover:bg-stone-800 p-3 rounded nav-item cursor-pointer" onClick={handleCloseNav}>
          <p className="w-[20%] text-2xl"><AiFillDelete /></p>
          <p className="w-[60%]">Recycle bin</p>
          <p className="w-[20%]">{recycleElement.length}</p>
        </NavLink>
      </div>
    </nav>
  )
}
