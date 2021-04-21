import { Component } from 'react';
import GroupsList from '../components/GroupsList';

export default class GroupsIndexContainer extends Component {

    state = {
        groups: [],
        loading: true
    }

    componentDidMount() {
        fetch('http://localhost:3001/groups', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(groupsJson => {
            console.log('groups', groupsJson)
            this.setState({
                groups: groupsJson,
                loading: false 
            })
        })
    }

    render() {
        return (
            <section>
                {this.state.loading ? "loading_spinner" : <GroupsList groups={this.state.groups} /> } 
            </section>
        )
    }
}