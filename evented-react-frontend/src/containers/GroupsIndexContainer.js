import { Component } from 'react';
import GroupsList from '../components/GroupsList';

export default class GroupsIndexContainer extends Component {

    state = {
        groups: [],
        loading: true
    }

    componentDidMount() {
        this.setState({
            groups: [
                {name: "Deadheads"}
            ],
            loading: false
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