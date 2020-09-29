
import React, { Component } from 'react';
import axios from "axios";
import './App.css';

 export class userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((j) => j.json())
      .then((users) => this.setState(users));
  }

  render() {

   const {users} = this.state;
    if (!users) {
      return <div>No users</div>;
    }

    else {

      return (

          <ul>
            {u.map(u => (

              <li key={u.id}>
                Name: {u.name} | Email: {u.email} 
              </li>
            ))};
          </ul>
      );
    }

  }
}

export default userlist;