import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked"+text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Uppercase was clicked","success")
  }
  const handleLowClick = () =>{
    //console.log("Lowercase was clicked"+text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Uppercase was clicked","success")
  }
  const handleOnChange = (event) =>{
    //console.log("On Change");
    setText(event.target.value);
  }

  const handleOnClear = () =>{
    //console.log("On Change");
    let newtext = '';
    setText(newtext);
    props.showalert("Clear TEXT was clicked","success")
  }
  const handleExtraspaces = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showalert("Extra Spaces are cleared","success")
  }
  const [text, setText] = useState('');
    
  return (
    <>
<div className='container' style={{color: props.mode === 'dark'?'white':'#36454F'}}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#36454F':'white',  color: props.mode==='dark'?'white':'#36454F'}} id="mybox" rows="8"></textarea>
    </div>
    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
    <button disabled={text.length === 0}  type="button" className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase</button>
    <button disabled={text.length === 0}  type="button" className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>Clear TEXT</button>
    <button disabled={text.length === 0}  type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Clear Extra Spaces</button>
</div>
<div className='container' style={{color: props.mode === 'dark'?'white':'#36454F'}}>
    <h1>
      Your Text Summary
    </h1>
    <p>{text.split(" ").filter((element)=>{
      return element.length !== 0;
    }).length} words & {text.length} characters</p>
    <p>Time taken to read the given words is:{text.split(" ").length * 0.008}</p>

</div>
</>
  )
}
