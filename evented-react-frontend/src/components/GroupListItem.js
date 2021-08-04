import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteEvent } from '../actions';

// handleClick = event => {
//     event.preventDefault()
//     this.props.deleteEvent()
// }

const GroupListItem = ({group}) => {
    return <li className="border" key={group.id}>
    <h5 className="card_title"><Link to={`/groups/${group.id}`}>{group.name}</Link></h5>
    Favorite Event: {group.fav_event}
    <br/> 
    Favorite Genre: {group.fav_genre} 
    <br/>
    Catchphrase: {group.catchphrase}
    <br/>
    <button onClick={() => this.props.deleteEvent(props.events)}>Delete</button> 
    <br/></li>
}

const mapDispatchToProps = dispatch => {
    return {
        deleteEvent: events => dispatch(deleteEvent(events))
    };
};

export default connect(null, mapDispatchToProps)(GroupListItem);