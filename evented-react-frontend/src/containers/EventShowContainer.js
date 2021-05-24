import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGroup } from '../actions/groups';

class EventShowContainer extends Component {
    state = {
        group: {},
        events: [],
        loading: true
    }

    componentDidMount() {
        const groupId = this.props.match.params.groupId;
        this.props.dispatchFetchGroup(groupId);
    }

    render() {
        if (this.props.loadingState !== "successful") {
            return <div>Loading</div>;
        }
        return (
            <section>
                <h1 className="title">{this.props.group.name}</h1>
                <h2><p><Link to={`/groups/${this.props.group.id}/events/new`}>Add an Event</Link></p></h2>
                <div>{this.state.events.map((event) => {
                    <figure>
                        <img alt={event.name} src={event.poster_url} />
                        <h2>{event.name}</h2>
                        <h3>{event.location}</h3>
                        <h3>{event.event_type}</h3>
                        <p>{event.start_time}</p>
                        <p>{event.end_time}</p>
                    </figure>
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