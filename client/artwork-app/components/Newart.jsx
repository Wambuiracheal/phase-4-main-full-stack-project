import React,{UseState} from 'react'

function Newart({art,setArt}){
    const url = 'http://127.0.0.1:5000/artworks'
    const[newArt,setNewArt] = UseState({
        id:0,
        artist:'',
        title:'',
        Image:'',
        price:0,
        category:''
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

    function handleSubmit(){
    fetch(`${url}`)
    method = 'POST'
    headers = {
        'Content-Type': 'application/json',
    }
    body = JSON.stringify()
    .then(res => res.json())
    .then(artpiece => setArt([...art,artpiece]),
    setNewArt({
        artist:'',
        title:'',
        Image:'',
        price:0,
        category:''
    })
)
.catch(error => console.log(error))

}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='artist' value={newArt.artist} onChange={handleChange} placeholder='Input Artist name...'/>
            <input type='text' name='title' value={newArt.title} onChange={handleChange} placeholder='TInput Title...'/>
            <input type='text' name='image' value={newArt.image} onChange={handleChange} placeholder='Input Image URL..'/>
            <input type='number' name='price' value={newArt.price} onChange={handleChange} placeholder='PInput new price...'/>
            <button type='submit'>Add new Art</button>
            <input />
        </form>
    </div>
)

}


export default Newart