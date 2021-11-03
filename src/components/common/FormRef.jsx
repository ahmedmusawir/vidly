import React, { Component } from 'react';

export class FormRef extends Component {
  userName = React.createRef();
  userEmail = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    const userName = this.userName.current.value;
    const userEmail = this.userEmail.current.value;

    alert(userName);
    alert(userEmail);
  };
  render() {
    return (
      <div>
        <h1>Form Using Ref</h1>

        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='userEmail'>Email address</label>
            <input
              autoFocus
              type='text'
              className='form-control'
              id='userEmail'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              ref={this.userEmail}
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='userName'>Name</label>
            <input
              type='text'
              className='form-control'
              id='userName'
              placeholder='Your Name'
              ref={this.userName}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormRef;
