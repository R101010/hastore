import React from 'react';
import { Link } from 'react-router-dom';
import './NoteListItem.css';

function NoteListItem({note, handleDeleteNote}) {
    return (
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{note.title}</h3>
                <h4>{note.description}</h4>
            </div>
            <div className='panel-footer NoteListItem-action-panel'>
                <Link
                    className='btn btn-xs btn-info'
                    to={{
                        pathname: '/details',
                        state: {note}
                    }}
                >
                    DETAILS
                </Link>
                <Link
                className='btn btn-xs btn-warning'
                to={{
                    pathname: '/edit',
                    state: {note}
                }}
                >
                    EDIT
                </Link>
                <button
                    className='btn btn-xs btn-danger margin-left-10'
                    onClick={() => handleDeleteNote(note._id)}
                >
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default NoteListItem;



