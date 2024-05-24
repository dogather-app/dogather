import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='outerNavbar'>
      <div className='innerNavbar'>
        <div className='content'>
        <div className='logo'>
        <img src="../src/assets/SVG.svg" alt="" /> <p>dogather</p>
        </div>
        <div className='pageButtons'>
        <p>about us</p>
        <img src="../src/assets/Vector.svg" alt="" />
        <p>features</p>
        <img src="../src/assets/Vector.svg" alt="" />
        <p>contact</p>
        <img src="../src/assets/Vector.svg" alt="" />
        </div>
        <div className='rightContent'>
        <div className='login'>
        <p>login</p>
        <img src="../src/assets/Vector.svg" alt="" />
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
