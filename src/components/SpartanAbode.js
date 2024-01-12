import React,{ useState, useEffect} from 'react'
import Content from '../components/Content';

export default function SpartanAbode(props) {
  const initialMode = localStorage.getItem('mode') || 'light';
  const [mode, setMode] = useState(initialMode);
  useEffect(() => {
    document.body.style.backgroundColor = mode === 'dark' ? 'black' : 'white';
    // Save the mode to local storage whenever it changes
    localStorage.setItem('mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <>
    <h1>This is Sparta!!!!</h1>
        <Content mode={mode} toggleMode={toggleMode}/>
        <div className='container'>
        </div>
    </>
  )
}