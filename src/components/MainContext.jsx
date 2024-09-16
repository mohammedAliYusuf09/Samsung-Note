import React, { useEffect } from 'react'
import { TopStatus } from './TopStatus';
import { Header } from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { Notes } from './Notes';
import { cloaseNav } from '../Store/UISclice';
import { Empty } from './Empty';

export const MainContext = ({addOnSelected, navbarRef }) => {

    const noteElements = useSelector((store)=> store.notes.notes);

    const uiSlice = useSelector((store)=> store.uiSlice);
    const {isNavVisible} = uiSlice;
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


    return (
        <div className={`main-content ${isNavVisible ? 'opacity-95' : ''}`}>
            <div className="content ">
                <TopStatus />
                <Header/>
                <div className='min-h-96 px-10'>
                    {
                        noteElements.length > 0 ? 
                        <div className='grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3'>
                            {noteElements.map(item=> <Notes key={item.id} item={item} addOnSelected={addOnSelected}/>)}
                        </div> : <Empty/>
                    }
                </div>
            </div>
        </div>
    )
}

// grid md:grid-cols-4 grid-cols-3 md:gap-4 gap-2 place-items-center
// flex flex-wrap gap-4 items-start justify-center
