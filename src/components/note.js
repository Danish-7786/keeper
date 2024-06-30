import "../App.css"
import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';


export default function Note(props){
 
    return(
        <div>
        
<div className="note">
  <h1>{props.title}</h1>
  <p>{props.description}</p>
  <button onClick={()=>{
    props.delItem(props.id);
    }}>
    <DeleteIcon/>
  </button>
</div>
  




        </div>
    )
}