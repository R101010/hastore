import React from 'react';
import { Link } from 'react-router-dom';

function NoteCard({note}) {
    return (
        <div className='panel panel-default'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{note.title}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>Date: </dt>
                    <dd>{note.currentDate}</dd>
                    <dt>Description: </dt>
                    <dd>{note.description}</dd>

                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/'>RETURN TO LIST</Link>
            </div>
        </div>
    );
}

export default NoteCard;