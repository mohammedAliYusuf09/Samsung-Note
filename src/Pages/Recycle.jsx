import React, { useEffect } from 'react'
import { Nav } from '../components/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { cloaseNav, FalseSelectAll } from '../Store/UISclice';
import { TbRestore } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";
import { HeaderRecycle } from '../components/HeaderRecycle';
import { RecycleNotes } from '../components/RecycleNotes';
import { allRecycleToHome, deleteAllRecycle, deleteRecycle, recycleNotes } from '../Store/SliceNotes';
import { Empty } from '../components/Empty';

export const Recycle = ({ navbarRef }) => {

    const recycleElement = useSelector((store)=> store.notes.recycle);
    const uiSlice = useSelector((store)=> store.uiSlice);
    const {isNavVisible, selectAll} = uiSlice;

    const dispach = useDispatch();
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            dispach(cloaseNav());
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    let selectedRecycelDelete = []
    const addOnSelectedRecycle =(noteObject)=> {
        selectedRecycelDelete.push(noteObject);
    }

    const handelDelete = ()=> {
        // if(!selectResetAll){
        //     dispach(deleteRecycle(selectedRecycelDelete));
        // }else{
        //     dispach(deleteAllRecycle())
        // }
        if(selectAll){
            dispach(deleteAllRecycle());
        }else{
            dispach(deleteRecycle(selectedRecycelDelete));
        }
        dispach(FalseSelectAll());
        console.log("Delete Clicked"); 
    }

    const handelRecycle = ()=> {
        // if(!selectResetAll){
        //     dispach(recycleNotes(selectedRecycelDelete));
        //     dispach(deleteRecycle(selectedRecycelDelete));;
        // }else{
        //     dispach(allRecycleToHome(recycleElement));
        //     dispach(deleteAllRecycle());
        // }
        if(selectAll){
            dispach(allRecycleToHome(recycleElement));
            dispach(deleteAllRecycle());
            console.log('handle Recycle All');
        }else{
            dispach(recycleNotes(selectedRecycelDelete));
            dispach(deleteRecycle(selectedRecycelDelete));
            console.log('handle Recycle selected');
        }
        dispach(FalseSelectAll())
        console.log('handle Recycle');
        
    }

    return (
        <div className="app-container">
            <Nav navbarRef={navbarRef} />
            <div className={`main-content ${isNavVisible ? 'opacity-95' : ''}`}>
                <div className="content">
                    <HeaderRecycle/>
                    <div className='mx-10'>
                        {
                            recycleElement.length > 0 ? <div className='flex flex-wrap gap-4 items-start justify-center'>
                                {recycleElement.map(item => <RecycleNotes key={item.id} item={item} isNavVisible={isNavVisible} addOnSelectedRecycle={addOnSelectedRecycle}/>)}
                            </div> : <Empty/>
                        }
                        
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='flex gap-8 bg-[#181818] px-6 py-2 text-3xl rounded-lg fixed bottom-2 left-[45%]'>
                            <span  onClick={handelRecycle}>
                                <TbRestore />
                            </span>
                            <span className='text-red-400' onClick={handelDelete}>
                                <AiFillDelete />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
