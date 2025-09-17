import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./Server/Index";
import axios from "axios";
import Page from "./Form/Page";
import "./index.css";
/* import Appl from './App.jsx' */
/* const noted = axios
                .get('http://localhost:3001/notes')
                .then(res => {
                    const notess = res.data
                    return notess
                })
console.log(noted)

const notes = [noted] */

/* [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
] */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Appl notes={notes}/> */}
    {/* <App /> */}
    {/*  <Apps /> */}
    <Page />
    {/* <Index /> */}
  </StrictMode>
);

/* const refresh = () => {
  root.render(
    <App counter={counter}/>
  )
}

setTimeout( () => {
    refresh()
    counter += 1
},2000)
refresh()
counter += 1 */
