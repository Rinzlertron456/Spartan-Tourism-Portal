import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Features from './Features';

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
  // const FeatureArr=["Capitalize","LowerCase","Clear","Who's the King?","What's the first word?","So, where was I?","Save something for yourself, will you?","Everything is one."];
  const FeatureArr = [
    {'index': 0, 'value': 'Capitalize'},
    {'index': 1, 'value': 'LowerCase'},
    {'index': 2, 'value': 'Clear'},
    {'index': 3, 'value': "Who's the King?"},
    {'index': 4, 'value': "What's the first word?"},
    {'index': 5, 'value': 'So, where was I?'},
    {'index': 5, 'value': 'Save something for yourself, will you?'},
    {'index': 6, 'value': 'Everything is one.'}
  ];

  let originaltext='Have some balls and say something!!';
  const handleFeatureClick=(feature)=>{
    console.log(feature);
  }
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
    // props.DisplayAlert("On Change activated","success");
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
  const featureHandlers = {
    'Capitalize': handleUpClick,
    'LowerCase': handleLowClick,
    'Clear': handleClearClick,
    "Who's the King?": handleReplaceClick,
    "What's the first word?": handleFirstWordClick,
    'So, where was I?': handleRevertClick,
    'Save something for yourself, will you?': handleClipboard,
    'Everything is one.': handleSpaces,
  };
  return (
    <>
        <h2 style={{color:'red'}}>{props.heading}{props.name}{props.headingcont}</h2>
        <div className="mb-3">
        <textarea className="box" style={boxstyle} value={text} id="box" onChange={(e)=>handleOnChange(e)} rows="13"></textarea>
        {FeatureArr.map((feature)=>{
          return(
          <button key = {feature.index} className='btn mx-4' onClick={featureHandlers[feature.value]}>{feature.value}</button>
        )
          })}
        </div>
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
