import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

function MovieInfo() {
    const params = useParams();
    const [item , setItem] = useState({})
    const nav = useNavigate()
    useEffect(() =>{
        doApi()
    },[])

    const doApi =async()=>{
        let url = `https://www.omdbapi.com/?i=${params['id']}&apikey=4dbb069c`
        let resp = await fetch(url);
        let data = await resp.json();
        setItem(data);
    }
return (
    <div className='container p-2 text-center'>
        <img src={item.Poster} className='col-md-2'/>
        <h2>Movie name: {item.Title}</h2>
        <div>Runtime :{item.Runtime} </div>
        <div>Rating: {item.imdbRating}</div>
        <div>Genere: {item.Genre}</div>
        <div className='col-md-5 mx-auto'>Plot: {item.Plot}</div>
        <button className='btn btn-dark mt-3' onClick={()=>{nav(-1)}}>Back to List</button>
        

        
        
        
        </div>
)
}

export default MovieInfo