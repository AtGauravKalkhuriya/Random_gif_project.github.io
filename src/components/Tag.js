import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from "../hooks/useGif";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {
  const[tag,setTag] = useState("");


  // const[gif,setGif] =useState("");
  // const[loading,setLoading] = useState(false);
 
    
  //   async function fetchData(){
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

     
  //     const {data} = await axios.get(url);
  //     const imgSource = data.data.images.downsized_large.url;
  //     setGif(imgSource);
  //     setLoading(false);
      


  //   }
  //   useEffect( ()=>{
  //     fetchData();

  //   },[])
  const{gif,loading,fetchData} = useGif(tag);
   
    function clickHandler(){
      fetchData();
          
    }

    function changeHandler(event) {
      setTag(event.target.value);

      
    }
  return (
    <div className='bg-blue-500 w-1/2  rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>
        {
          loading?(<Spinner/>):(<img src={gif} width="450"  alt='gif pick'/>)
        }

        <input
        className='w-10/12 text-center text-lg py-2 rounded-lg mt-[20px] mb-[1px]'
        onChange={changeHandler}
        value={tag}/>
        
        <button
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mt-[5px]'
         onClick={clickHandler}>Generate</button>
    </div>
  );
}

export default Tag