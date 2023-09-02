import React,{useState,useEffect} from 'react'

function Document() {
    const [count, setCount ] = useState(0)
    useEffect(()=> {
     document.title = `Count - ${count}`
    },[count])
  return (
    <div>
      <h1> Count - {count} </h1>
      <button onClick={()=> setCount(count+1)}> Change </button>
    </div>
  )
}

export default Document
