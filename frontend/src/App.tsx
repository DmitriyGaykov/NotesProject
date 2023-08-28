import React from 'react';
import Header from "./layouts/headers";
import Footer from "./layouts/footer";
import NotesPage from "./pages/notes-page";
import AddNoteForm from "./pages/add-note-form";

const App = () => {
    return (
        <div className="d-flex flex-column gap-sm-5 w-100 min-vh-100 justify-content-between">
            <Header />
            <NotesPage />
            {
                <AddNoteForm />
            }
            <Footer />
        </div>
    )
}

export default App;
