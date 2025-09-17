import { useEffect, useState } from "react";
import Note from "../Note";
import axios from "axios";
import noteService from "../Service/note";
import Error from "../Service/Error";

const Page = () => {
  const [note, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note....");
  const [show, setShowAll] = useState(true);
  const [errmsg, setErrmsg] = useState("some error happened.....");

  useEffect(() => {
    noteService.getAll().then((res) => {
      setNotes(res);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    const newObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(note.length + 1),
    };
    console.log(newObject);
    noteService.create(newObject).then((res) => {
      setNotes(note.concat(res));
      setNewNote(" ");
    });

    /*   setNotes(note.concat(newObject))
      setNewNote('') */

    /* axios
      .post('http://localhost:3001/notes', newObject)
      .then(res => {
        console.log(res)
      }) */
  };
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };
  const noteToShow = show ? note : note.filter((imp) => imp.important === true);

  console.log(noteToShow);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const notes = note.find((n) => n.id === id);
    const changedNote = { ...notes, important: !notes.important };
    console.log(id);
    noteService
      .update(id, changedNote)
      .then((upd) => {
        setNotes(note.map((no) => (no.id === id ? upd : no)));
      })
      .catch((err) => {
        setErrmsg(
          `the note ${note.content} was already deleted from the server`
        );
        setTimeout(() => {
          setErrmsg(null);
        }, 5000);

        setNotes(note.filter((n) => n.id !== id));
      });
    /*  axios.put(url,changedNote).then(res => {
       setNotes(note.map(no => no.id === id ? res.data : no))
     }) */
  };
  return (
    <div>
      <h1>Notes</h1>
      <Error message={errmsg} />
      <div>
        <button onClick={() => setShowAll(!show)}>
          show {show ? "important" : "all"}
        </button>
      </div>
      <ul>
        {noteToShow.map((ele, id) => (
          <Note
            key={id}
            note={ele}
            toggleImportance={() => toggleImportanceOf(ele.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <p>{newNote}</p>
    </div>
  );
};

export default Page;
