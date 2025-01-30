import React,{useState} from 'react'

function Newart({art,setArt}){
    const url = 'http://127.0.0.1:5000/artworks'
    const[newArt,setNewArt] = useState({
        artist:'',
        title:'',
        image:'',
        price:0,
        category:'',
        id:0
    })

    // Handle Change
    function handleChange(e){
        let name = e.target.name
        let value = e.target.value

        setNewArt({
            ...newArt,
            [name]:value
        })

    }

    function handleSubmit(e){
    e.preventDefault()
    fetch(`${url}`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(newArt)
    })
    .then(res => res.json())
    .then(artpiece => setArt([...art,artpiece]),
    setNewArt({
        artist:'',
        title:'',
        image:'',
        price:0,
        category:''
    })
)
.catch(error => console.log(error))

}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='artist' value={newArt.artist} onChange={handleChange} placeholder='enter artist name...'/><br></br>
            <input type='text' name='title' value={newArt.title} onChange={handleChange} placeholder='enter title...'/><br></br>
            <input type='text' name='image' value={newArt.image} onChange={handleChange} placeholder='enter image URL..'/><br></br>
            <input type='number' name='price' value={newArt.price} onChange={handleChange} placeholder='enter price...'/><br></br>
            <select name="category" value={newArt.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="painting">painting</option>
                <option value="sculpture">sculpture</option>
                <option value="photography">photography</option>
            </select><br></br>
            <button type='submit'>Add new Art</button>
        </form>
    </div>
)

}


export default Newart