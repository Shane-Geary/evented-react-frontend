import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroup } from '../actions/groups';
import { format,  } from 'date-fns';

class EventShowContainer extends Component {
    state = {
        group: {},
        events: [],
        loading: true
    }

    // date = new Date();

    // sdf = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");

    // sdf.setTimeZone(TimeZone.getTimeZone("America/Los_Angeles"));
// System.out.println(sdf.format(date)); // Prints date in Los Angeles

// sdf.setTimeZone(TimeZone.getTimeZone("America/Chicago"));
// System.out.println(sdf.format(date)); // Prints same date in Chicago

    render() {
        console.log(this.props.group)
        return (
            <section>
                <h1 className="title">{this.props.group.name}</h1>
                <h2><p><Link to={`/groups/${this.props.group.id}/events/new`}>Add an Event</Link></p></h2>
                <div>{this.props.group.events.map((event) => {
                    // debugger
                return ( 
                    <figure>
                            <img alt={event.name} src={event.poster_url} />
                            <h1>{event.name}</h1>
                            Location:
                            <h3>{event.location}</h3>
                            Type:
                            <h3>{event.event_type}</h3>
                            Start:
                            <p>{format(new Date(event.start_time), 'Pp')}</p>
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