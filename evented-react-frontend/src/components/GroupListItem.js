import React from 'react' 

const GroupListItem = ({group}) => {
    return <li className="" key={group.id}><h5>{group.name}</h5>
    Favorite Event: {group.fav_event}
    <br/> 
    Favorite Genre: {group.fav_genre} 
    <br/>
    Catchphrase: {group.catchphrase}
    <br/>
    <br/></li>
}

export default GroupListItem;