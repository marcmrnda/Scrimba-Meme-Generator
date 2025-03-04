import Header from "./Header.jsx";
import Form from "./Form.jsx";
import { useEffect, useState } from "react";
import Meme from './assets/memeimg.png'
function App() {

  const [meme, setMeme] = useState({
    topText: "SHUT UP",
    bottomText: "AND TAKE MY MONEY",
    photoMeme: Meme
  })  

  const [allMeme,setAllMeme] = useState([])
  const [memeImg, setMemeImg] = useState([])

  useEffect(() => {
    allMeme.map(el => memeImg.push(el.url))
  })

  const change = (e) => {
    const {value,name} = e.currentTarget
    setMeme(prev => ({
      ...prev,
      [name]: value.toUpperCase()
    }))
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(dataBase => setAllMeme(dataBase.data.memes))
  },[])

  const randomPhoto = () => {
    const rand = Math.floor(Math.random() * allMeme.length)
    setMeme(prev => ({
      ...prev,
      photoMeme: memeImg[rand]
    }))
  }
  

  return (
    <>
      <Header />
      <main className="h-screen bg-[#FFFFFF]">
      <Form change={change}
            random={randomPhoto}
            meme={meme}/>
      </main>
    </>
  )
}

export default App
