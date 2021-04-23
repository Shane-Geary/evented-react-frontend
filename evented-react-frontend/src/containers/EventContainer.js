import React, { Component } from 'react';

export default class EventContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const body = new FormData();

        body.append('event[name]', form.name.value);
        body.append('event[location]', form.location.value);
        body.append('event[date]', form.date.value);
        body.append('event[type]', form.type.value);
        body.append('event[start_time]', form.start_time.value);
        body.append('event[end_time]', form.end_time.value);
        body.append('event[poster]', form.poster.files[0], form.poster.value);
        body.append('event[group_id]', this.props.match.params.groupId);

        fetch('http://localhost:3001/events', {
            method: "POST",
            body,
        })
        .then(resp => resp.json())
        .then(eventJson => {

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
               className="" 
               />
               <label htmlFor="location">Location</label>
               <input 
               type="text"
               name="location" 
               id="location"
               className="" 
               />
               <label htmlFor="date">Date</label>
               <input 
               type="text"
               name="date"
               id="date"
               className="" 
               />
               <label htmlFor="type">Type</label>
               <input 
               type="text" 
               name="type"
               id="type"
               className="" 
               />
               <label htmlFor="start_time">Start Time</label>
               <input 
               type="datetime-local"
               name="start_time" 
               id="start_time"
               className="" 
               />
               <label htmlFor="end_time">End Time</label>
               <input 
               type="datetime-local"
               name="end_time" 
               id="end_time"
               className="" 
               />
               <label htmlFor="poster">Poster</label>
               <input 
               type="file" 
               name="poster"
               id="poster"
               className="" 
               />

               <h2><button type="submit">Add Event</button></h2>
            </form>
        )
    }
}