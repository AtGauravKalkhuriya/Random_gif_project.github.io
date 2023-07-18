import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const Random = () => {
  // const[gif,setGif] =useState("");
  // const[loading,setLoading] = useState(false);
    
  //   async function fetchData(){
  //     setLoading(true);
     
  //     const {data} = await axios.get(url);
  //     const imgSource = data.data.images.downsized_large.url;
  //     setGif(imgSource);
  //     setLoading(false);
      


  //   }
  //   useEffect( ()=>{
  //     fetchData();

  //   },[])
   const{gif,loading,fetchData} = useGif();
    function clickHandler(){
      fetchData();
          
    }
  return (
    <div className='bg-green-500 w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
          loading?(<Spinner/>):(<img src={gif} width="450"  alt='gif pick'/>)
        }
        
        <button
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mt-[20px]'
         onClick={clickHandler}>Generate</button>
    </div>
  );
}

export default Random