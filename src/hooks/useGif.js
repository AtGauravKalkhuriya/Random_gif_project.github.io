// import React from 'react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const useGif = (tag) => {
    const[gif,setGif] =useState("");
    const[loading,setLoading] = useState(false);
      async function fetchData(){
        const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

         const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

        setLoading(true);
        
  
       
        const {data} = await axios.get(tag?tagMemeurl:randomMemeurl);
        const imgSource = data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);
      
      }
      useEffect( ()=>{
        fetchData();
  
      },[])


      return {loading,gif,fetchData}
     
      
}

export default useGif