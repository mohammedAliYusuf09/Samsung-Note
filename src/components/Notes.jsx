import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { TbSquareRounded } from "react-icons/tb";
import { BiSolidBullseye } from "react-icons/bi";
import { Link } from 'react-router-dom';
export const Notes = ({ addOnSelected, item }) => {

    const uiSlice = useSelector((store) => store.uiSlice);
    const { isNavVisible, deleteStage } = uiSlice;

    const [chack, setChack] = useState(false);


    const titleResize = (str) => {
        let noteTitle;
        if (str.length < 14) {
            noteTitle = item.noteTitle;
        } else {
            noteTitle = str.slice(0, 15) + '...';
        }
        return noteTitle;
    }
    const title = titleResize(item.noteTitle);

    const noteObject = {
        id: item.id,
        noteTitle: item.noteTitle,
        noteText: item.noteText,
        noteDate: item.noteDate
    }

    const handelDeleteSelection = () => {
        if (deleteStage) {
            addOnSelected(noteObject);
            setChack(chack => !chack)
        }
    }




    return (
        <>
            {
                deleteStage ? <div className='flex flex-col text-white justify-center items-center cursor-default relative'  >
                    <div className={`md:h-60 h-40 w-full ${isNavVisible ? 'bg-[#0a0a0a]' : 'bg-[#131313]'} p-4 rounded-md overflow-hidden`} onClick={handelDeleteSelection}>
                        <p className={`text-lg ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{item.noteText}</p>
                    </div>
                    <p className={`text-xl mt-2 ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{title}</p>
                    <p className={`text-lg font-mono ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{item.noteDate}</p>
                    <span className={`absolute top-2 right-2 ${deleteStage ? '' : 'hidden'} ${chack ? "text-red-400" : ''}`} >
                        {
                            chack ? <BiSolidBullseye /> : <TbSquareRounded />
                        }
                    </span>
                </div> :
                    <div  className='flex flex-col text-white justify-center items-center cursor-default relative'  >
                        <Link to={`${item.id}`} className={`md:h-60 h-40 w-full ${isNavVisible ? 'bg-[#0a0a0a]' : 'bg-[#131313]'} p-4 rounded-md overflow-hidden`} onClick={handelDeleteSelection}>
                            <p className={`text-lg ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{item.noteText}</p>
                        </Link>
                        <p className={`text-xl mt-2 ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{title}</p>
                        <p className={`text-lg font-mono ${isNavVisible ? 'text-stone-400' : 'text-white'}`}>{item.noteDate}</p>
                        <span className={`absolute top-2 right-2 ${deleteStage ? '' : 'hidden'} ${chack ? "text-red-400" : ''}`} >
                            {
                                chack ? <BiSolidBullseye /> : <TbSquareRounded />
                            }
                        </span>
                    </div>
            }

        </>

    )
}
