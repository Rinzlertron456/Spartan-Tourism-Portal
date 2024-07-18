import React from 'react'

function Features() {
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
  return (
    <>
    
    </>
  )
}

export default Features