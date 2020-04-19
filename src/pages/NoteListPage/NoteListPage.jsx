import React from 'react';
import './NoteListPage.css';
import NoteListItem from '../../components/NoteListItem/NoteListItem';

function NoteListPage(props) {
    return (
        <>
            <h1>Note List</h1>
            <div className='NoteListPage-grid'>
                {props.notes.map(note =>
                    <NoteListItem
                        note={note}
                        handleDeleteNote={props.handleDeleteNote}
                        key={note._id}
                    />
                )}
            </div>
        </>
    );
}

export default NoteListPage;
