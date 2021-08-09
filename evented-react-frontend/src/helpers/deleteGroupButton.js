import React, { Fragment } from 'react' 

export default function DeleteGroupButton ({ deleteGroup, group }) {
    return (
        <Fragment>
            <button type="button" onClick={() => deleteGroup(group.id)}>Delete</button>
        </Fragment>
    )
}