import { useState } from 'react'
import Nav from './components/Nav'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)
  console.log('render')
  return (
    <>
      <Nav/>
      <Profile/>
    </>
  )
}

export default App
