import React from 'react';
import { Link } from 'react-router-dom';

const GroupListItem = ({group}) => {
    return <li className="border" key={group.id}>
    <h5 className="card_title"><Link to={`/groups/${group.id}`}>{group.name}</Link></h5>
    Favorite Event: {group.fav_event}
    <br/> 
    Favorite Genre: {group.fav_genre} 
    <br/>
    Catchphrase: {group.catchphrase}
    <br/>
    <br/></li>
}

export default GroupListItem;