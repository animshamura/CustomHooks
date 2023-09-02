import React,{useState,useEffect} from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'

function Document2() {
    const [count, setCount ] = useState(0)
    useDocumentTitle(count)
  return (
    <div>
      <h1> Count - {count} </h1>
      <button onClick={()=> setCount(count+1)}> Change </button>
    </div>
  )
}

export default Document2
