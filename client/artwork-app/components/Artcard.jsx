import React, {useState} from 'react'

function Artcard({id,artist,title,image,price,category,art,setArt}){
    console.log("Artwork ID:", id);
    const url = 'http://127.0.0.1:5000/artworks'
    const [newArt,setNewArt] = useState({
        artist:'',
        title:'',
        image:'',
        price:0,
        category:'',
        id:0
})
// DELETE
function handleDelete(e){
    e.preventDefault()
    fetch(`${url}/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(() => {
        let remainingArt = art.filter(artpiece => artpiece.id !== id)
        setArt(remainingArt)
    })
    .catch(err => console.error(err))
}

// CHANGE
function handleChange(e){
    let name = e.target.name
    let value = e.target.value

    if (name === "category") {
        value = value.toLowerCase();
    }
    
    setNewArt({
        ...newArt,
        [name]:value
    })
}

// UPDATE
function handleSubmit(e){
    e.preventDefault()

    fetch(`${url}/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newArt),
    })
    .then(res => res.json())
    .then(na => {
        const updatedArt = art.map(artpiece =>{
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

return(
    <div className='card'>
        <h2>{artist}</h2>
        <img id='image' src={image} alt={title}/>
        <h2>{title}</h2>
        <h2>${price}</h2>
        <h2>{category}</h2>
        <form onSubmit={handleSubmit}>
            <input name='artist' type='text' placeholder='enter new artist...' value={newArt.artist} onChange={handleChange}/>
            <input name='title' type='text' placeholder='enter new title...' value={newArt.title} onChange={handleChange}/>
            <input name='image' type='text' placeholder='enter new image...' value={newArt.image} onChange={handleChange}/>
            <input name='price' type='number' placeholder='enter new price...' value={newArt.price} onChange={handleChange}/>
            <select name="category" value={newArt.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="painting">painting</option>
                <option value="sculpture">sculpture</option>
                <option value="photography">photography</option>
            </select><br></br>
            <button type='submit'>Update</button>
        </form>
        <button type='button' onClick={handleDelete}>Delete</button>

    </div>
)
}

export default Artcard
