import React , {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded , setisExpanded] = useState(false);

    const [note , setNote] = useState({
        title: "",
        content: ""
    });

    function handelChange(event){
        const {name , value} = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submit(event){
        props.add(note);
        setNote({
            title: "",
            content: ""
        })

        event.preventDefault();
    }

    function expand(){
        setisExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
      {isExpanded ? <input onChange={handelChange} name="title" placeholder="Title" value={note.title}/> : null}
        
        <textarea 
            onClick={expand} 
            onChange={handelChange} 
            name="content" 
            placeholder="Take a note..." 
            value={note.content} 
            rows= {isExpanded ? 3 : 1} />
        <Zoom in={true}>
            <Fab onClick={submit}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
