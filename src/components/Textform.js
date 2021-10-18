      import React ,{useState} from 'react'

      export default function Textform(props) {
           
          //it convert text in Upper case
        const handleUpClick = ()=>{
          // console.log('Convert to upper case was clicked' + text);
          const newText = text.toUpperCase();
          setText(newText);
        }
        //it convert text in lower case
        const handleLowClick = ()=>{
          const newText = text.toLowerCase();
          setText(newText);
        }
        //it clear complete text
        const handleClearClick = ()=>{
          const newText = "";
          setText(newText);
        }
        //it copy complete text
        const handleCopy = ()=>{
          var text = document.getElementById('myBox');
          text.select();
          navigator.clipboard.writeText(text.value);
        }
        const handleMode = ()=>{
          if(style.backGround === "white"){
            setDarkStyle({backGround:'#08141f',color:'white'})
            document.body.style.background = '#08141f';
          }
          if(style.backGround === "#08141f"){
            setDarkStyle({backGround:'white',color:'black'})
            document.body.style.background = 'white';
          }
        }

        // it handle extra spaces
        const handleExtraSpaces = ()=>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "))
        }
        // const download=(filename, text)=>{
        //   var element = document.createElement('a');
        //   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        //   element.setAttribute('download', filename);
        //   element.style.display = 'none'; document.body.appendChild(element);
        //   element.click(); document.body.removeChild(element);


           //this is permeanent code (function) eto take the input 
           // this is to write in input
        const handleOnChange = (event)=>{
          setText(event.target.value) 
        } 


        let myStyle ={
          display: 'flex',
          flexDirection: 'row',
          // marginLeft: '200px'
        }
      
      const[text,setText] = useState("");
      // const[mode,setMode] = useState("light");
      const[style,setDarkStyle] = useState({backGround:'white',color:'black'});


          return (
              <>
      <div className="container" style={myStyle}>
     <div className="container" style={style} >
      <div className="mb-3 my-3 "  >
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text}   onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Your Text"></textarea>

        <button type="button" className="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleLowClick} >Convert to LowerCase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleClearClick} >Clear Text</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleCopy} >Copy Text</button>
        <button type="button" className="btn btn-primary my-3 mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        
      </div>
      </div>
      <div className="form-check form-switch  my-3" >
  <input className="form-check-input" type="checkbox" onClick={handleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={style}>Enable dark mode</label>
</div>


    </div>
      <div className="container my-3 " style={style}>
        <h2>Your Text Summary</h2> <hr /> 
        <p> <b> {text.split(" ").length }  words and {text.length}  characters</b></p>
        <p><b>{0.008 * text.split(" ").length} Minutes read </b></p>
        <hr /> 
        <h3>Preview <hr /> </h3>
        <p>{text}</p>
</div>

        </>
    )
}
