      import React ,{useState} from 'react'

      export default function Textform(props) {

        const handleUpClick = ()=>{
          // console.log('Convert to upper case was clicked' + text);
          const newText = text.toUpperCase();
          setText(newText);
        }
        const handleLowClick = ()=>{
          const newText = text.toLowerCase();
          setText(newText);
        }
        const handleClearClick = ()=>{
          const newText = "";
          setText(newText);
        }

        const handleOnChange = (event)=>{
          setText(event.target.value) // this is to write in input
        }

      const[text,setText] = useState("");

          return (
              <>
     <div className="container">
      <div className="mb-3 my-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Your Text"></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleClearClick} >Clear Text</button>
      </div>
    </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2> <hr /> 
        <p> <b> {text.split(" ").length -1 }  words and {text.length}  characters</b></p>
        <p><b>{0.008 * text.split(" ").length} Minutes read </b></p>
        <hr /> 
        <h3>Preview <hr /> </h3>
        <p>{text}</p>
</div>
        </>
    )
}
