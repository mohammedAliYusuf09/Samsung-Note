import React, { useRef, useState } from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { VscSave } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addNote, editNoteText, editNoteTitle } from '../Store/SliceNotes';


export const AddNote = () => {
    const noteList = useSelector((store)=> store.notes.notes);
    const dispach = useDispatch()
    const [noteTitle, setNoteTitle] = useState();
    const [noteText, setNoteText] = useState();
    // const refTitle = useRef();
    // const refText = useRef();

    const handelTitle = (e) => {
        setNoteTitle(e.target.value);
    }
    const handelText = (e) => {
        setNoteText(e.target.value);
    }

    const handleAddNote = () => {
        const now = new Date();
        const options = { month: 'short', day: '2-digit' };
        const noteDate = now.toLocaleDateString('en-US', options);
        const id = crypto.randomUUID();
        const NOTE = {
            id,
            noteTitle,
            noteText,
            noteDate,
        }
        if(noteTitle && noteText) {
            dispach(addNote(NOTE))
        } else{
            alert('Fill Title and Note')
        }
    }

    const linkId = useParams();
    let currentNote = {};
    if(linkId){
        const filteredNotes = noteList.filter(note => note.id == linkId.id);
        currentNote = filteredNotes[0];
    }

    const handleBack = ()=> {
        if(linkId.id) {
            const editObject = {
                id: currentNote.id,
                noteTitle,
                noteText,
                noteDate: currentNote.noteDate,
            }
            if(noteTitle){
                dispach(editNoteTitle(editObject));
            }
            if(noteText){
                dispach(editNoteText(editObject));
            }
        }
    }
    

    return (
        <div className='h-screen'>
            <div className='bg-[#333333] px-10 pt-4 h-1/5'>
                <Link to={'/'} className='text-4xl cursor-pointer text-slate-400 ' onClick={handleBack}>
                <MdOutlineKeyboardBackspace />
                </Link>
                <input className='w-full bg-transparent text-3xl text-white h-20 outline-none' type="text" name="title" id="Title" placeholder='Title...' defaultValue={currentNote?.noteTitle} onChange={handelTitle}/>
            </div>
            <div className='h-4/5 w-full bg-[#161616]'>
                <textarea name="noteText" id="noteText" placeholder='Write your note' className='bg-[#161616] h-full w-full text-white font-mono p-6 outline-none' defaultValue={currentNote?.noteText} onChange={handelText}>
                </textarea>
                <Link to={'/'} className={`fixed  bottom-5 right-5 flex gap-3 bg-[#313131] items-center text-white px-4 py-2 rounded-md cursor-pointer hover:text-stone-400 ${linkId.id ? 'hidden' : ''}`} onClick={handleAddNote}>
                    <span className='text-2xl'>
                        <VscSave />
                    </span>
                    <span  className='text-2xl'>Done</span>
                </Link>
            </div>
        </div>
    )
}
