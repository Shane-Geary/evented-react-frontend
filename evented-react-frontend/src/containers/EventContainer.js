import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions/events';

class EventContainer extends Component {

    state = {
        errors: {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();

        formData.append('event[name]', form.name.value);
        formData.append('event[location]', form.location.value);
        formData.append('event[event_type]', form.event_type.value);
        formData.append('event[start_time]', form.start_time.value);
        formData.append('event[end_time]', form.end_time.value);
        form.poster.files[0] && formData.append('event[poster]', form.poster.files[0], form.poster.value);
        formData.append('event[group_id]', this.props.match.params.groupId);

        this.props.dispatchCreateEvent(formData)
        .then(resp => resp.json())
        .then(eventJson => {
            this.props.history.push(`/groups/${this.props.match.params.groupId}`);
        })
        .catch(errors => {
            this.setState({errors})
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="">
               <h1 className="title">New Event</h1>
               <label htmlFor="name">Name{" "}<span>{this.state.errors.name}</span></label> 
               <input 
               type="text" 
               name="name"
               id="name"
               />
               <label htmlFor="location">Location{" "}</label>
               <input 
               type="text"
               name="location" 
               id="location" 
               />
               <label htmlFor="event_type">Type Of Event{" "}</label>
               <input 
               type="text" 
               name="event_type"
               id="event_type" 
               />
               <label htmlFor="start_time">Start Time{" "}</label>
               <input 
               type="datetime-local"
               name="start_time" 
               id="start_time" 
               />
               <label htmlFor="end_time">End Time{" "}</label>
               <input 
               type="datetime-local"
               name="end_time" 
               id="end_time"
               />
               <label htmlFor="poster">Poster{" "}</label>
               <input 
               type="file" 
               name="poster"
               id="poster" 
               />

               <h2><button type="submit">Add Event</button></h2>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateEvent: (formData) => dispatch(createEvent(formData))
    };
};

export default connect(null, mapDispatchToProps)(EventContainer);