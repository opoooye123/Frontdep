import axios from "axios"
import { useEffect,useState } from "react"

const Index = () => {
  const [notes,setNotes] = useState([])
   
  /* const hook = () =>{ setTimeout(() => {
      axios
     .get('http://localhost:3001/notes')
     .then(res => {
      console.log('Promise done✅')
      setNotes(res.data)
     })
    },2000)
  } */

  useEffect(() => {
    console.log('effect')

    const eventHandler = res => {
      console.log('promise fulfilled✅')
      setNotes(res.data)
    }

    const promise = axios.get('http://localhost:3001/notes')
    promise.then(eventHandler)
  },[])
  
  return (
    <div>


      {/* <ul>
         {note.map((data) => 
        <li key={data.id}>{data.content}</li>
      )}
      </ul> */}
    </div>
  )
}

export default Index