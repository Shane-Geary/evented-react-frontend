import React from 'react';
import GroupListItem from './GroupListItem';

const GroupsList = ({groups}) => {
    return(
    <>
        <h1>All groups</h1>
        <br/>
        <ul>
            {groups.map(group => <GroupListItem key={group.id} group={group} />)}
        </ul>
    </>
    )
}

export default GroupsList;