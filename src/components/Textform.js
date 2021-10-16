import React ,{useState} from 'react'

export default function Textform(props) {

  const handleUpClick = ()=>{
    console.log('Convert to upper case was clicked' + text);
    const newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value) // this is to write in input
  }

const[text,setText] = useState("Enter the text here");

    return (
        <>
<div className="mb-3 my-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <button type="button" class="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
</div>
        </>
    )
}
