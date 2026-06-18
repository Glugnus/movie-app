"use client"

import { useState } from "react"

export default function MovieSearch(){
    const [movieResults, setMovieResults]=useState([])
    const updateMovieSearch= async (query)=>{
        const response = await fetch(`/api.movies.search?query=${query}`)
        const {results}=await response.json()
        console.log(results);
        
setMovieResults([])
    }
    return (
    <div>
        <input
          className="mx-2.5 min-w-[300] rounded-lg bg-white pl-2.5 placeholder-gray-600"
          type="text"
          placeholder="Rechercher un titre ..."
          onChange={e=>updateMovieSearch(e.target.value)}
        />
    </div>
    )
}