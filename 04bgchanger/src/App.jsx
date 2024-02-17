import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")




  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        
        
        <button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("red")}
        style={{backgroundColor:"red"}}
        >Red</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("green")}

        style={{backgroundColor:"green"}}
        >green</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("Blue")}

        style={{backgroundColor:"Blue"}}
        >Blue</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("pink")}

        style={{backgroundColor:"pink"}}
        >pink</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("grey")}

        style={{backgroundColor:"grey"}}
        >grey</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("yellow")}

        style={{backgroundColor:"yellow"}}
        >yellow</button>

<button className="outline-none px-4 py-1 rounded-full text-white"
        onClick={()=>setcolor("black")}

        style={{backgroundColor:"black"}}
        >black</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("orange")}

        style={{backgroundColor:"orange"}}
        >orange</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("aqua")}

        style={{backgroundColor:"aqua"}}
        >aqua</button>

<button className="outline-none px-4 py-1 rounded-full "
        onClick={()=>setcolor("yellowgreen")}

        style={{backgroundColor:"yellowgreen"}}
        >yellowgreen</button>
      </div>
    </div>
   </div>
  )
}

export default App
