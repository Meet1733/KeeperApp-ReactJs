import React , {useState} from "react"
import Heading from "./Header"
import Note from "./Note"
import Footer from "./Footer"
import CreateArea from "./CreateNote";


function App() {

    const [notes , setNotes] = useState([]);

    function addNote(newnote){
        setNotes((prevNotes) => {
            return [...prevNotes , newnote];
        })
    }

    function deleteNote(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((note , index) => {
                return index !== id;
            })
        })
    }

    return (
      <div>
        <Heading />
        <CreateArea add={addNote} />
        {notes.map((noteItem , index) => {
            return (
                <Note 
                    key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    clk={deleteNote}
                />
            )
        })}
        <Footer />
      </div>
    );
  }

export default App