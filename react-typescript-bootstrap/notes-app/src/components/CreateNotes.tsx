import * as React from 'react';
import { useRef,useState} from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Note } from '../models/note-model';

interface ICreateNotesProps{
      notes:Note[],
      setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}
const CreateNotes: React.FunctionComponent<ICreateNotesProps>=({notes,setNotes})=>{
  const titleRef=useRef<HTMLInputElement | null>(null);
  const textRef=useRef<HTMLTextAreaElement | null>(null);
  const colorRef=useRef<HTMLInputElement | null>(null);

  const [error,setError]=useState<string>("");
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
      e.preventDefault();
      if(titleRef.current?.value===""|| textRef.current?.value===""){
        return setError("All fields are mandatory!")
      }
      setError("");
      setNotes([...notes,{
        id: (new Date()).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date:(new Date()).toString()
      }]);
      (titleRef.current as HTMLInputElement).value="";
      (textRef.current as HTMLTextAreaElement).value="";
  }
  return (
    <>
        <h4>Create New Note</h4>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form className="mb-3 mt-3" onSubmit={(e)=>handleSubmit(e)}>
          <Form.Group className="mb-3" controlId='formBasicTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' placeholder='Enter Your Title' ref={titleRef}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId='formBasicText'>
            <Form.Label>Text</Form.Label>
            <Form.Control type='text' placeholder='What You want to write about?...' as="textarea" rows={3} ref={textRef}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor='colorInput'>Notes Theme</Form.Label>
            <Form.Control type='color' id='colorInput' defaultValue='#dfdfdf'title='Change Theme' ref={colorRef}/>
          </Form.Group>
          <Button type='submit' variant='primary'>Create</Button>
        </Form>
    </>
  );
}
export default CreateNotes;
