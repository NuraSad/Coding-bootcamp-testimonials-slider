import { useState } from 'react'
import Card from './components/Card.jsx'
import './App.css'
import tanyaPhoto from './assets/image-tanya.jpg'
import johnPhoto from './assets/image-john.jpg'

const peopleInfo = [
  {img: tanyaPhoto,
  credentials: {
    name: 'Tanya Sinclair',
    title: 'UX Engineer'
  },
  text: ` I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future. `
  }, {
    img: johnPhoto,
  credentials: {
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer'
  },
  text: ` If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. `
  }
]

function App() {
  const [cardNumber, setCardNumber] = useState(0);

  function handleButtonClick() {
    setCardNumber(prev => prev === 0 ? 1 : 0);
  }

  return (
    <>
      <div className='carousel'>
      <svg id="curve" xmlns="http://www.w3.org/2000/svg" width="610" height="154"><path fill="#F4F4FC" fillRule="evenodd" d="M610 154C469.493 123.42 358.432 86.087 276.818 42S102.93-11.42 0 14v140h610z"/></svg>
        {peopleInfo.map((person, idx) => {
          return <Card key={idx} text={person.text} img={person.img} credentials={person.credentials} className={idx === cardNumber ? 'card active' : 'card'}/>
        })}
        <div className='button-field'>
          <button onClick={handleButtonClick}><svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="none" stroke="#8585AC" strokeWidth="3" d="M11 1L3 9l8 8"/></svg></button>
          <button onClick={handleButtonClick}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" strokeWidth="3" d="M2 1l8 8-8 8"/></svg></button>
        </div>
      </div>
    </>
  )
}

export default App
