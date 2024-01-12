import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';


let fontsize='10px';
export default function Testimonials(props) {
  const initialMode = localStorage.getItem('mode') || 'light';
  const [mode] = useState(initialMode);
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
    // Save the mode to local storage whenever it changes
    localStorage.setItem('mode', mode);
  }, [mode]);
  const [boxstyle,setBoxStyle]=useState({
    color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : 'black',
    border: `10px double ${props.mode === 'light' ? 'black' : 'white'}`,
    fontSize:`${fontsize}`,
  });
  const handleFontSize=(e)=>{
    fontsize=e.target.value;
    if (boxstyle.color==='black') {
      setBoxStyle({
        color:'white',
        backgroundColor:'black',
        border:'10px double white',
        fontSize:`${fontsize}px`,
      })
      // document.body.style.backgroundColor = 'black';
      // document.body.style.color = 'white';
    } else {
      setBoxStyle({
        color:'black',
        backgroundColor:'white',
        border:'10px double black',
        fontSize:`${fontsize}px`,
      })
      // document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
    }
  }
  const [text, setText]=useState('Have some balls and say something!!');
  let originaltext='Have some balls and say something!!';
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.DisplayAlert("UpperCase Conversion done","success");
    alert(newText);
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    alert(newText);
    props.DisplayAlert("LowerCase Conversion done","success");
  }
  const handleClearClick=()=>{
    if(text===''){
      alert('No balls here!!');
      props.DisplayAlert("The playing field is already in ruins","danger");
    }
    else{
      setText('');
      alert('No balls here!!');
      props.DisplayAlert("On Clear completed","success");
    }
  }
  const handleReplaceClick=()=>{
    setText('Hail King Leonidas!!');
    alert(text);
    props.DisplayAlert("Replace done","success");

  }
  const handleFirstWordClick=()=>{
    let words=text.split(/\s+/);
    setText(words[0]);
    alert(text);
    props.DisplayAlert("First Word Click activated","success");
  }
  const handleRevertClick=()=>{
    setText(originaltext);
    alert('We came back to where we started!!');
    props.DisplayAlert("Reverted to original text","success");
  }
  const handleOnChange=(e)=>{
    setText(e.target.value);
    props.DisplayAlert("On Change activated","success");
  }
  const handleClipboard=()=>{
    var text=document.getElementById("box");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.DisplayAlert("Text Copied Successfully","success");

  }
  const handleSpaces=()=>{
    let newtext = text.split(/\s+/).filter(word => word !== '');
    setText(newtext.join(" "))
    props.DisplayAlert("Extra Spaces Removed","success");
  }
  return (
    <>
        <h2 style={{color:'red'}}>{props.heading}{props.name}{props.headingcont}</h2>
        <div className="mb-3">
        <textarea className="box" style={boxstyle} value={text} id="box" onChange={(e)=>handleOnChange(e)} rows="13"></textarea>
        </div>
        <button className='btn mx-4' onClick={handleUpClick}>Capitalize</button>
        <button className='btn mx-4' onClick={handleLowClick}>LowerCase</button>
        <button className='btn mx-4' onClick={handleClearClick}>Clear</button>
        <button className='btn mx-4' onClick={handleReplaceClick}>Who's the King?</button>
        <button className='btn mx-4' onClick={handleFirstWordClick}>What's the first word?</button>
        <button className='btn mx-3' onClick={handleRevertClick}>So, where was I?</button>
        <button className='btn mx-4 my-3' onClick={handleClipboard}>Save something for yourself, will you?</button>
        <button className='btn mx-4 my-3' onClick={handleSpaces}>Everything is one.</button>
    <div className='container'>
    <textarea style={boxstyle} placeholder="Enter font size above 15. If you give below 15, don't say I didn't warn you!! " onChange={(e)=>handleFontSize(e)}></textarea>
        <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.nextheading}</h2>
        <h4 className='text-center' style={{color:'red'}}>{text}</h4>
        <h4 className='text-center my-1' style={{color:'red'}}>{text.split(/\s+/).filter(word => word !== '').length} words, {0.0013*text.split(/\s+/).filter(word => word !== '').length} average read minutes and {text.length} characters</h4>
    </div>
    </>
  )
}

Testimonials.propTypes={
  heading:PropTypes.string.isRequired,
  headingcont:PropTypes.string.isRequired,
  nextheading:PropTypes.string.isRequired,
  toggleMode:PropTypes.string.isRequired,
}

Testimonials.defaultProps={
  heading:'Greetings,',
  headingcont:"! How are you? Hope Sparta has captivated your heart beyond your wildest imaginations. Amuse us with your experience and add to Sparta's glory, if you may?",
  nextheading:"Your Testimonial. Shall I consider this your word?",
  toggleMode:'Set Color here',
};
