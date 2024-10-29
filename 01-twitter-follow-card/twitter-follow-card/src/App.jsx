import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
        className='tw-followCard-avatar'
        src="https://unavatar.io/claiderman" 
        alt="Avatar de midudev" />
      </header>
      <div className='tw-followCard-info'>
        <strong>Claxx Nuxx Moxx</strong>
        <span>@claxxx</span>
      </div>
      <aside>
        <button className='tw-followCard-button'>
          seguir
        </button>
      </aside>
    </article>
  )
}

export default App
