import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)
  const pageButtonsText = ['about us','features','contact']

  function PageButtons(element){
    return(
      <button>
      <p>{element}</p>
      <img src="../src/assets/Vector.svg" alt="" />
      </button>
    )
  }

  return (
    <>
    <div className='outerNavbar'>
      <div className='innerNavbar'>
        <div className='content'>
        <div className='logo'>
        <img src="../src/assets/SVG.svg" alt="" /> <p>dogather</p>
        </div>
        <div className='pageButtonsStyle'>
        {pageButtonsText.map((element) => PageButtons(element))}
        </div>
        <div className='rightContent'>
        <div className='login'>
        <button>
        <p>login</p>
        <img src="../src/assets/Vector.svg" alt="" />
        </button>
        </div>
        <button className='registerButton'>register</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
