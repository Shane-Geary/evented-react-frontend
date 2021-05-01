import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGroups } from '../actions/groups';
import GroupsList from '../components/GroupsList';

class GroupsIndexContainer extends Component {

    componentDidMount() {
        this.props.dispatchFetchGroups();
    }

    render() {
        if(this.props.loadingState === "inactive") {
            return null 
        }
        return (
            <section>
                {this.props.loadingState === "loading" ? (
                    "loading_spinner" 
                ) : ( 
                <GroupsList groups={this.props.groups} /> 
                )} 
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups.arr,
        loadingState: state.groups.loadingState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchGroups: () => dispatch(fetchGroups())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsIndexContainer);