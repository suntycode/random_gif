
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";



 function Random() {

  // const API_KEY = "gUAn6lmw9JBjLs7gDO6hdHbjlh8t5CNs"

  // const[loader,setLoader]=useState(true);

  //   async function callApi(){
  //     setLoader(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

  const{gifs,loader,callApi}=useGif();
  return (
  <div className="bg-green-400 w-[50%] rounded-lg flex flex-col items-center mt-8 border border-black">
  <h1 className="text-xl font-bold underline mt-2">A Random gif</h1>
  <div> {loader ? (<Spinner/>):(<img src={gifs} alt="not load" width={350} height={250} className="my-4"></img>)}</div>
  
  <button onClick={()=>callApi()} className="bg-white font-bold rounded-lg my-4 w-[80%] p-2 text-xl" >Genrate Random</button>
  
  </div>)
}  export default Random;
