import React from 'react'
import Artcard from Artcard

function ArtList({art,Setart}){

    return(
        <ul className='cards'>
            {art.length > 0?art.map(artlist => (
                <li  key={artlist.id}>
                    <Artcard 
                        artist = {artlist.artist}
                        title = {artlist.title}
                        image = {artlist.image}
                        price = {artlist.price}
                        category = {artlist.category}
                    />
                 </li>  
            )):null}
        </ul>
     
    )

}

export default Artlist

