import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions/events';

class EventContainer extends Component {

    state = {
        errors: {},
        num: 0
    }



    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();

        formData.append('event[name]', form.name.value);
        formData.append('event[location]', form.location.value);
        formData.append('event[event_type]', form.event_type.value);
        formData.append(
            "event[start_time]",
            new Date(form.start_time.value).toISOString()
          );
          formData.append(
            "event[end_time]",
            new Date(form.end_time.value).toISOString()
          );
        form.poster.files[0] && formData.append('event[poster]', form.poster.files[0], form.poster.value);
        formData.append('event[group_id]', this.props.match.params.groupId);
        formData.append('event[user_id]', this.props.match.params.userId);

        this.props.dispatchCreateEvent(formData, this.props.history, this.props.match.params.groupId)
    }

    handleClick = event => {
        event.preventDefault();
        let count = this.state.num 
        count += 1 
        this.setState({
            ...this.state,
            num: count 
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="">
               <h1 className="title">New Event</h1>
               <fieldset>
               <label htmlFor="name">Name{" "}<span>{this.state.errors.name}</span></label> 
               <input 
               type="text" 
               name="name"
               id="name"
               />
               </fieldset>
               <fieldset>
               <label htmlFor="location">Location{" "}</label>
               <input 
               type="text"
               name="location" 
               id="location" 
               />
               </fieldset>
               <fieldset>
               <label htmlFor="event_type">Type Of Event(Concert, Sports, Theater){" "}</label>
               <input 
               type="text" 
               name="event_type"
               id="event_type" 
               />
               </fieldset>
               <fieldset>
               <label htmlFor="start_time">Start Time{" "}</label>
               <input 
               type="datetime-local"
               name="start_time" 
               id="start_time" 
               />
               </fieldset>
               <fieldset>
               <label htmlFor="end_time">End Time{" "}</label>
               <input 
               type="datetime-local"
               name="end_time" 
               id="end_time"
               />
               </fieldset>
               <fieldset>
               <label htmlFor="poster">Poster{" "}</label>
               <input 
               type="file" 
               name="poster"
               id="poster" 
               />
               </fieldset>

               <h2><button type="submit">Add Event</button></h2>

               <h1>A Counter Button... cuz why not?!</h1>
               <h2><button onClick={this.handleClick}>{this.state.num}</button></h2>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateEvent: (formData, history, groupId) => dispatch(createEvent(formData, history, groupId))
    };
};

export default connect(null, mapDispatchToProps)(EventContainer);