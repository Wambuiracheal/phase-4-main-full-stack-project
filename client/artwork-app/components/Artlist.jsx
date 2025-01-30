import React from 'react'
import Artcard from '/components/Artcard'

function Artlist({art,setArt}){

    return(
        <ul className='cards'>
            {art.length > 0?art.map(artpiece => (
                <li  key={artpiece.id}>
                    <Artcard 
                        artist = {artpiece.artist}
                        id = {artpiece.id}
                        title = {artpiece.title}
                        image = {artpiece.image}
                        price = {artpiece.price}
                        category = {artpiece.category}
                        art = {art}
                        setArt = {setArt}
                    />
                 </li>  
            )):null}
        </ul>
     
    )

}

export default Artlist

