import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EventShowContainer extends Component {
    state = {
        group: {},
        events: [],
        loading: true
    }

    componentDidMount() {
        const groupId = this.props.match.params.groupId
        fetch(`http://localhost:3001/groups/${groupId}`)
            .then(resp => resp.json())
            .then(({group, events}) => {
                this.setState({
                    group,
                    events,
                    loading: false 
                })
            }) 
    }

    render() {
        if (this.state.loading) {
            return <div>Loading</div>
        }
        return (
            <section>
                <h1 className="title">{this.state.group.name}</h1>
                <p><Link to={`/groups/${this.state.group.id}/events/new`}>Add an Event</Link></p>
                <div>{this.state.events.map((event) => {
                    <figure>
                        <img alt={event.name} src={event.poster_url} />
                        <h2>{event.name}</h2>
                        <h3>{event.location}</h3>
                        <h3>{event.type}</h3>
                        <p>{event.start_time}</p>
                        <p>{event.end_time}</p>
                    </figure>
                })}
                </div>
            </section>
        )
    }
}