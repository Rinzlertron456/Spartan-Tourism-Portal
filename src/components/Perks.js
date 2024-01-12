import React from 'react';

export default function Perks(props) {
  return (
    <>
    <h1 className={'text-center my-4'} style={{color:'red'}}>Sparta is hiding so many things, {props.name}. Care to look inside?</h1>
    <div className={`flex-container-${props.mode==='light'?'dark':'light'}`}> 
      <div className={`text-container-${props.mode==='light'?'dark':'light'} text-justify mx-5`}>
        <h3>Step into the ancient world of Sparta, a city-state that will ignite your imagination with its legendary tales of courage, discipline, and warrior prowess! Get ready to be thrilled by the extraordinary history of Sparta:</h3>
        <ul className='my-4'>
          <li className='my-2'>Fearless Warriors</li>
          <li className='my-2'>Battle of Thermopylae</li>
          <li className='my-2'>Spartan Women</li>
          <li className='my-2'>Architecture and Engineering</li>
          <li className='my-2'>Spartan Society</li>
          <li className='my-2'>Unity and Camaraderie</li>
        </ul>
      </div>
      <div className="image-container">
        <img src="https://i.pinimg.com/originals/df/ea/9e/dfea9e53924bf078309b7f2540447c79.jpg" className="img-fluid" alt="Responsive image" />
      </div>
    </div>
    <div className={`flex-container-${props.mode==='light'?'dark':'light'} my-5 mx-5`}> 
    <div className="image-container">
        <img src="https://th.bing.com/th/id/OIP.HFwqEKPAUi-tQgQZhd3xUQAAAA?w=199&h=184&c=7&r=0&o=5&dpr=2&pid=1.7" className="img-fluid" alt="Responsive image" />
      </div>
      <div className={`text-container-${props.mode==='light'?'dark':'light'} text-justify mx-5`}>
        <h3>Are you still all ears? Good, go with the flow</h3>
        <ul className='my-4'>
          <li className='my-2'>Philosophy and Wisdom</li>
          <li className='my-2'>Cultural Traditions</li>
          <li className='my-2'>Last Stand at Plataea</li>
          <li className='my-2'>Sparta's Enduring Influence</li>
          <li className='my-2'>Ancient Olympic Games</li>
          <li className='my-2'>Ephors and Dual Kingship</li>
        </ul>
      </div>
    </div>
    <h2 className={`text-${props.mode==='light'?'dark':'light'} text-center my-4`}>Does Sparta excite you, {props.name}? Follow this path to know how to get Sparta with those valuable iron bars in your hand!!</h2>
    <a href="/pricing"><button className="button-64" role="button"><span className="text"><img src="https://cdn-icons-png.flaticon.com/128/4002/4002224.png" className="icon"/>PRICING<img src="https://cdn-icons-png.flaticon.com/128/4002/4002224.png" className="icon"/></span></button></a>
    </>
  );
}
