import React, {useEffect} from 'react';
import Header from "./layouts/headers";
import Footer from "./layouts/footer";
import NotesPage from "./pages/notes-page";
import AddNoteForm from "./pages/add-note-form";
import { useAppSelector} from "./store";

const App = () => {
    const showForm : boolean = useAppSelector(state => state.notes.showForm)

    return (
        <div className="d-flex flex-column gap-sm-5 w-100 min-vh-100 justify-content-between">
            <Header />
            <NotesPage />
            {
                showForm &&
                <AddNoteForm />
            }
            <Footer />
        </div>
    )
}

export default App;
