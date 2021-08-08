import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteGroup } from '../actions/groups';

// handleClick = event => {
//     event.preventDefault()
//     this.props.deleteEvent()
// }

const GroupListItem = ({group, props}) => {
    return <li className="border" key={group.id}>
    <h5 className="card_title"><Link to={`/groups/${group.id}`}>{group.name}</Link></h5>
    Favorite Event: {group.fav_event}
    <br/> 
    Favorite Genre: {group.fav_genre} 
    <br/>
    Catchphrase: {group.catchphrase} 
    <br/>
    <button onClick={() => props.deleteGroup(props.groupId)}>Delete</button> 
    <br/></li>
}

const mapDispatchToProps = dispatch => {
    return {
        deleteGroup: groupId => dispatch(deleteGroup(groupId))
    };
};

export default connect(null, mapDispatchToProps)(GroupListItem);