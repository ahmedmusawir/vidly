import React, { Component } from 'react';
import Input from './Input';

export class FormBasic extends Component {
  state = {
    account: {
      userName: '',
      userEmail: '',
    },
    errors: {},
  };
  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.userName.trim() === '')
      errors.userName = 'Username is required';

    if (account.userEmail.trim() === '')
      errors.userEmail = 'User Email is required';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    alert('Submitted');
  };

  validateProperty = ({ name, value }) => {
    if (name === 'userName') {
      if (value.trim() === '') return 'Username is required';
    }
    if (name === 'userEmail') {
      if (value.trim() === '') return 'User Email is required';
    }
  };

  handleChange = ({ currentTarget: input }) => {
    //Handling single input validation
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //Handling Form Values & State
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>
          Form (<small>Controlled Comp and Basic Auth</small>)
        </h1>

        <hr />
        <form onSubmit={this.handleSubmit}>
          <Input
            auto={true}
            label='User Name'
            name='userName'
            value={account.userName}
            placeholder='Your Name'
            onChange={this.handleChange}
            error={errors.userName}
          />
          <Input
            auto={false}
            label='User Email'
            name='userEmail'
            value={account.userEmail}
            placeholder='Your Email'
            onChange={this.handleChange}
            error={errors.userEmail}
          />

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormBasic;
