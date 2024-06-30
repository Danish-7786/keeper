import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import "../App.css";
import Note from "./note";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function App(props) {
  const [isExpanded, setExpanded] = useState(false)
  const [inputNote, setNote] = useState({ title: "", content: "" });
  const [noteArray, setNoteArray] = useState([]);
  function handleInput(e) {
    const { value, name } = e.target;
    console.log(name);
    setNote((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
   

  }

  function handleClick() {
    setNoteArray((prevItem) => {
      return [...prevItem, inputNote];
    });
    setNote({
      title:"",
      content:""
    })
    
  }
  function handleDelete(id){
    setNoteArray((prevItem)=>{
      
      return prevItem.filter((item,index)=>{
        return index !== id; 
        //We have returned here an all items of array which didnt matches with the clicked item id[index no.]
      //jaise hi delete button pe click karte hai ye filter option prevItem[array of objectsof our notes] 
      // mese un array item ko filter kar deta hai jiski id clicked item ki id se milti ho
      // To phor bachti hai an array with all items except clicked item 
      })
      
    })
  }

  function expand(){
    setExpanded(true)
  }


  return (
    <div>
      <Header />
      <section>
        <div className="input">
        
          <input
            onChange={handleInput}
            name="title"
            placeholder="Title"
            value={inputNote.title}
          >

          </input>

          <textarea
            onChange={handleInput}
            onClick ={expand}
            name="content"
            rows={isExpanded ? 3: 1}
            placeholder="Content"
            value={inputNote.content}
          />
          
       

        <Zoom in={isExpanded}>
          <Fab size="medium" color="secondary" aria-label="add" onClick={handleClick} type="submit">
            <AddIcon />
          </Fab>
          </Zoom>
        </div>
      </section>

      {noteArray.map((book,index) => {
        return < Note 
        key={index} 
        id={index} 
        title={book.title} 
        description={book.content} 
        delItem={handleDelete}
        />;
      })}

      <Footer />
    </div>
  );
}

export default App;
