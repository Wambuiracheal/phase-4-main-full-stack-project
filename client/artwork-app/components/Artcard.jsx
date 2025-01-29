import React, {UseState} from 'react'
function Artcard({id,artist,title,price,category}){
    const url = 'http://127.0.0.1:5000/artworks'
    const [newArt,setNewArt] = UseState({
        id:0,
        artist:'',
        title:'',
        Image:'',
        price:0,
        category:''
})
// DELETE
function handleDelete(){
    fetch(`${url}/${id}`)
    method = 'DELETE'
    headers = {
        'Content-Type': 'application/json'
    }
    body = JSON.stringify()
    .then(res => res.json())
    .then(() => {
        let remainingArt = Art.filter(art => art.id !== id)
        setArt(remainingArt)
    })
    .catch(err => console.error(err))
}

// CHANGE
function handleChange(e){
    let name = e.target.name
    let value = e.target.value
    
    setNewArt({
        ...newArt,
        [name]:value
    })
}

// UPDATE
function handleSubmit(){
    fetch(`${url}/${id}`)
    method = 'PATCH'
    headers = {
        'Content-Type': 'application/json'
    }
    body = JSON.stringify()
    .then(res => res.json())
    .then(na => {
        let updatedArt = art.map(artpiece =>{
            if(artpiece.id === id){
                artpiece.artist = na.artist,
                artpiece.title = na.title,
                artpiece.image = na.image,
                artpiece.price = na.price,
                artpiece.category = na.category
            } 
            return(artpiece)
        })
        setArt(updatedArt)
        alert(`Updated ${artist}`)

    })
    .catch(err => console.log(err))
}
// return(
//     <div className='card'>
//         <h2>{artist}</h2>
//         <img src={image} alt={name}/>
//         <h2>{title}</h2>
//         <h2>{price}</h2>
//         <h2>{category}</h2>
//         <form onSubmit={handleSubmit}>
//             <input name='New Artist:' type='text' placeholder='enter new artist...' value={newArt.artist} onChange={handleChange}/>
//             <input name='New Title:' type='text' placeholder='enter new title...' value={newArt.title} onChange={handleChange}/>
//             <input name='New Image:' type='text' placeholder='enter new image...' value={newArt.artist} onChange={handleChange}/>
//             <input name='New Price:' type='number' placeholder='enter new price...' value={newArt.price} onChange={handleChange}/>
//             <input name='New Category:' type='text' placeholder='enter new category...' value={newArt.artist} onChange={handleChange}/>
//             <button type='submit'>Update</button>
//         </form>
//         <button type='button' onClick={handleDelete}>Delete</button>

//     </div>
// )
// }

// export default Artcard
