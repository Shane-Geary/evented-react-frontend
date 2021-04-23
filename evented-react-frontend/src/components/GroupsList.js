import React from 'react';
import GroupListItem from './GroupListItem';

const GroupsList = ({groups}) => {
    return(
    <>
        <h1 className="title">All groups</h1>
        <br/>
        <div className="container">
            <div className="container__column">
                <ul>
                    <div className="container__content">
                        {groups.map(group => <GroupListItem key={group.id} group={group} />)}
                    </div>
                </ul>
            </div>
        </div>
    </>
    )
}

export default GroupsList;