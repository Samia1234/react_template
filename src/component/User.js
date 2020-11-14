import React, { Component } from 'react'

export class User extends Component {
    render() {
        return (
            <div>
                <h1>user </h1>
                <button onClick={this.props.changename}>change the user</button>
            </div>
        )
    }
}

export default User
