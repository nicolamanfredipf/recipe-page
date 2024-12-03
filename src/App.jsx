import { useState } from 'react'
import './App.css'
import Page from './layout/Page'

function App() {
  const [count, setCount] = useState(0);
  const imgUrl= 'src/assets/image-omelette.jpeg';
  const imgAlt= 'image-omelette.jpeg';


  return (
    <>
      <Page imgUrl={imgUrl} imgAlt={imgAlt}/>
    </>
  )
}

export default App
