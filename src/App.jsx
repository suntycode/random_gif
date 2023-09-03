import Random from "./components/Random";
import Tag from "./components/Tag";



export default function App() {
  return <div className="w-full background  flex flex-col items-center">
  <nav className="w-11/12 bg-white text-center mt-5 p-2  rounded-lg">
  <h1 className="text-3xl font-semibold ">Random gifs</h1>
  </nav>
  <Random className=" border-4 border-black"/>
  <Tag/>

  </div>;
}
