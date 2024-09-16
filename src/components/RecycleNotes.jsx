import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { TbSquareRounded } from "react-icons/tb";
import { BiSolidBullseye } from "react-icons/bi";
export const RecycleNotes = ({addOnSelectedRecycle, item}) => {

    const uiSlice = useSelector((store)=> store.uiSlice);
    const {isNavVisible, deleteStage, selectAll} = uiSlice;
    const [chack, setChack] = useState(false);
    
    

    const titleResize = (str) => {
        let noteTitle;
        if(str.length < 14){
          noteTitle = item.noteTitle;  
        } else{
            noteTitle = str.slice(0, 15) + '...';
        }
        return noteTitle;
    }
    const title = titleResize(item.noteTitle);

    const noteObjectRecycle = {
        id : item.id,
        noteTitle : item.noteTitle,
        noteText : item.noteText,
        noteDate : item.noteDate
    }

    const handelDeleteSelection = ()=> {
        setChack(chack=> !chack)
        addOnSelectedRecycle(noteObjectRecycle);
    }

    return (
        <div className='flex w-[24%] flex-col text-white justify-center items-center cursor-default relative' onClick={handelDeleteSelection} >
            <div className={`md:h-60 h-40 w-full ${isNavVisible ? 'bg-[#0a0a0a]' : 'bg-[#131313]'} p-4 rounded-md overflow-hidden`}>
                <p className={`text-lg ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{item.noteText}</p>
            </div>
            <p className={`text-xl mt-2 ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{title}</p>
            <p className={`text-lg font-mono ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{item.noteDate}</p>
            <span className={`absolute top-2 right-2  ${chack ? "text-red-400" : ''}`} >
                {
                    chack || selectAll ? <BiSolidBullseye /> : <TbSquareRounded />
                }
            </span>
        </div>
    )
}
