import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroup } from '../actions/groups';
import { format } from 'date-fns';

class EventShowContainer extends Component {
    state = {
        group: {},
        events: [],
        loading: true
    }

    render() {
        return (
            <section>
                <h1 className="title">{this.props.group.name}</h1>
                <h2><p><Link to={`/groups/${this.props.group.id}/events/new`}>Add an Event</Link></p></h2>
                <div>{this.props.group.events.map((event) => {
                return ( 
                    <figure>
                            {/* <img alt={event.name} src={event.poster_url} /> */}
                            <h1>{event.name}</h1>
                            <br></br>
                            Location:
                            <h3>{event.location}</h3>
                            <br></br>
                            Type:
                            <h3>{event.event_type}</h3>
                            <br></br>
                            Start:
                            <p>{format(new Date(event.start_time), 'Pp')}</p>
                            <br></br>
                            End:
                            <p>{format(new Date(event.end_time), 'Pp')}</p>
                        </figure>
                )
                })}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state, { match } ) => {
    const groupId = match.params.groupId
    let loadingState = state.events.groupsLoaded[groupId] || "inactive"
    return {
      group: state.groups.arr.find(group => group.id == groupId),
      events: state.events.arr.filter(event => event.group_id == groupId),
      loadingState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchGroup: (groupId) => dispatch(fetchGroup(groupId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer);