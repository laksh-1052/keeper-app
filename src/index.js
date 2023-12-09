import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import notes from "./notes";
import Note from "./components/Note"

function createNote(note){
    return (
        <Note 
        title = {note.title}
        content = {note.content}
        />
    )
}


ReactDOM.render(
<div>
<Header />
{notes.map(createNote)}
<Footer />
</div>

, document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
