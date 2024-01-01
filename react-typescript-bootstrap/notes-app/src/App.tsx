import React,{useState} from 'react';
import './App.css';
import {Note} from './models/note-model'
import {Container,Row,Col} from 'react-bootstrap';
import Header from './components/Header';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
function App(){
  const [notes,setNotes]=useState<Note[]>([
  //   {
  //   id:(new Date).toString(),
  //   title:"Meeting",
  //   color:"#dfdfdf",
  //   text:"new project",
  //   date:(new Date).toString()
  // }
]);
  return (
        <>
        <Header/>
        <Container className="mt-5">
        <Row>
          <Col>
             <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
             <CreateNotes notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        </Container>
      </>
  )
}

export default App;
