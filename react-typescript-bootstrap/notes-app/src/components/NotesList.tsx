import * as React from 'react';
import {Note} from '../models/note-model'
import Notes from './Notes';
interface INotesListProps {
  notes:Note[],
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({notes,setNotes}) => {
  const handleDelete=(id:string)=>{
    console.log("note to be deleted: ",id);
    setNotes(notes.filter(note =>note.id!==id))
  }
  const renderNotes=():JSX.Element[]=>{
    return notes.map(note=>{
       return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
    })
  }
  return (
    <>
   
    <div className='mt-3'>{renderNotes()}</div>
    </>
  )
};

export default NotesList;
