import React, { Component } from 'react';

export default class EventContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const body = new FormData();

        body.append('event[name]', form.name.value);
        body.append('event[location]', form.location.value);
        body.append('event[type]', form.type.value);
        body.append('event[start_time]', form.start_time.value);
        body.append('event[end_time]', form.end_time.value);
        body.append('event[poster]', form.poster.files[0], form.poster.value);
        body.append('event[group_id]', this.props.match.params.groupId);

        fetch('http://localhost:3001/events', {
            method: "post",
            body
        })
        .then(resp => resp.json())
        .then(eventJson => {
            this.props.history.push(`/groups/${this.props.match.params.groupId}`)
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="">
                <h1>New Event</h1>
               <label htmlFor="name">Name</label> 
               <input 
               type="text" 
               name="name"
               id="name"
               />
               <label htmlFor="location">Location</label>
               <input 
               type="text"
               name="location" 
               id="location" 
               />
               <label htmlFor="type">Type</label>
               <input 
               type="text" 
               name="type"
               id="type" 
               />
               <label htmlFor="start_time">Start Time</label>
               <input 
               type="datetime-local"
               name="start_time" 
               id="start_time" 
               />
               <label htmlFor="end_time">End Time</label>
               <input 
               type="datetime-local"
               name="end_time" 
               id="end_time"
               />
               <label htmlFor="poster">Poster</label>
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