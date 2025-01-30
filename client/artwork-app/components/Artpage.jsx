import React,{useState, useEffect} from 'react'
import Artlist  from './Artlist'
import Newart from './Newart'

function Artpage(){
const url = 'http://127.0.0.1:5000/artworks'
const [art,setArt] = useState([])
useEffect(() => {
    fetch(`${url}`)
    .then(res => res.json())
    .then(data => {
        setArt(data)
    })

},[])
    return (
        <main>
            <Newart  art = {art} setArt = {setArt}/>
            <Artlist art = {art} setArt = {setArt}/>
        </main>
    )

}

export default Artpage

