import React, { Component } from 'react'

export default class GroupFormContainer extends Component {
    state = {
        name: "",
        fav_event: "",
        fav_genre: "",
        catchphrase: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.fav_event]: e.target.value,
            [e.target.fav_genre]: e.target.value,
            [e.target.catchphrase]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/groups', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({group: this.state})
        })
          .then(res => res.json())
          .then(groupJson => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="">
                <h1 className="title">Create Your Group</h1>
                <input 
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name} 
                placeholder="Name your Group" 
                />
                <br></br>
                <br></br>
                <input 
                type="text"
                name="fav_event"
                onChange={this.handleChange}
                value={this.state.fav_event}
                placeholder="Favorite Event Type"
                />
                <br></br>
                <br></br>
                <input 
                type="text"
                name="fav_genre"
                onChange={this.handleChange}
                value={this.state.fav_genre}
                placeholder="Favorite Genre"
                />
                <br></br>
                <br></br>
                <input 
                type="text"
                name="catchphrase"
                onChange={this.handleChange}
                value={this.state.catchphrase}
                placeholder="Groups Catchphrase"
                />
                <br></br>
                <br></br>
                <h2><button type="submit">Add New Group</button></h2>
            </form>
        )
    }
}