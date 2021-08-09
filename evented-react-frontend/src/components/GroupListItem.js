import React from 'react';
import { Link } from 'react-router-dom';
import DeleteGroupButton from '../helpers/DeleteGroupButton'

// handleClick = event => {
//     event.preventDefault()
//     this.props.deleteEvent()
// }

const GroupListItem = ({group, deleteGroup}) => {
    return <li className="border" key={group.id}>
    <h5 className="card_title"><Link to={`/groups/${group.id}`}>{group.name}</Link></h5>
    Favorite Event: {group.fav_event}
    <br/> 
    Favorite Genre: {group.fav_genre} 
    <br/>
    Catchphrase: {group.catchphrase} 
    <br/>
    <DeleteGroupButton group={group} deleteGroup={deleteGroup}/>
    <br/></li>
}

export default GroupListItem;