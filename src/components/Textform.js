import React, { useState } from "react";



export default function Textform(props) {

    const [text, setText] = useState('');


    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Your text has been converted to upper case", "success")
    }
    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Your text has been converted to lower case", "success")
    }
    const handleReverClick = ()=> {
        let newText = text.split("").reverse().join("");
        setText(newText)
        props.showAlert("Your text has been reversed", "success")
    }
    const handleClearClick = ()=> {
        let newText = '';
        setText(newText)
        props.showAlert("Now you can wright your new text", "success")
    }
    const handleOnChange = (event)=> {
        setText(event.target.value)
    }


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="15" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#212529':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleReverClick}>Reverse Text</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>This is Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characterts</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter Your For preview it here"}</p>
    </div>
    </>
  );
}
