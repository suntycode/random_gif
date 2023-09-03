 import { useState } from "react";
 import { useEffect } from "react";
 import axios from "axios";
 import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
 
 function Tag() {
  // const API_KEY = "gUAn6lmw9JBjLs7gDO6hdHbjlh8t5CNs"

  // const[loader,setLoader]=useState(true);
  const[tag,setTag]=useState("car");

  //   async function callApi(){
  //     setLoader(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //    const {data}= await axios.get(url);
  //     const sourceimage= data.data.images.downsized_large.url;
  //     setGifs(sourceimage);
  //     setLoader(false);
  //   }
  
  //   useEffect(()=>{
  //    callApi();
  //   },[])
  


  // const[gifs,setGifs]=useState("");
  
  //  function callHandler(){
  //   callApi();
  //  }

  const{gifs,loader,callApi}=useGif(tag);
  return (
  <div className="bg-green-400 w-[50%] rounded-lg flex flex-col items-center mt-8 border border-black">
  <h1 className="text-xl font-bold underline mt-2"> Random gif</h1>
  <div> {loader ? (<Spinner/>):(<img src={gifs} alt="not load" width={350} height={250} className="my-4"></img>)}</div>
  <input placeholder="enter gif you want" onChange={(event)=>setTag(event.target.value)} className="bg-white font-bold rounded-lg my-4 w-[80%] p-2 text-xl text-center"/ >
  <button onClick={()=>callApi()} className="bg-white font-bold rounded-lg my-4 w-[80%] p-2 text-xl" >Genrate Random</button>
  
  </div>)
}
export default Tag;
