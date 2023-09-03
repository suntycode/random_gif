import axios from "axios";
import { useEffect, useState } from "react";

const useGif = (tag) => {

    const API_KEY = "gUAn6lmw9JBjLs7gDO6hdHbjlh8t5CNs"

  const[loader,setLoader]=useState(true);

  const vrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    async function callApi(tag){
      setLoader(true);
     
     const {data}= await axios.get(tag ? (`${vrl}&tag=${tag}`):vrl);
      const sourceimage= data.data.images.downsized_large.url;
      setGifs(sourceimage);
      setLoader(false);
    }
  
    useEffect(()=>{
     callApi("car");
    },[])
  


  const[gifs,setGifs]=useState("");
  
  return{gifs,loader,callApi}
};

export default useGif;
