import React from 'react';
import NoteCard from '../../components/NoteCard/NoteCard';

function NoteDetailPage(props) {
    const note = props.location.state.note;
    return (
        <>
            <h1>Note Details</h1>
            <NoteCard
                key={note._id}
                note={note}
            />
        </>
    );
}

export default NoteDetailPage;