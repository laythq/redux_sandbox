import React from 'react'

export default class AddChild extends React.Component {
  constructor() {
    super();
    this.submitForm = (name, branch, resident) => event => {
      console.log(name)
      event.preventDefault();
      this.props.onSubmit(name, branch, resident)
    }
    this.handleChange = (evt) => {
      this.setState({ [evt.target.name]: evt.target.value })
    }
    this.state = {
      name: '',
      branch: '',
      resident: ''
    }
  }

  render() {

    return (
      <div>
        <form onSubmit={this.submitForm(this.state.name, this.state.branch, this.state.resident)}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="branch"
            onChange={this.handleChange}
            placeholder="Branch"
          />
          <input
            type="text"
            name="resident"
            onChange={this.handleChange}
            placeholder="Resident (true or false)"
          />
          <button
            type="submit"
          >
          Submit
          </button>
        </form>
      </div>
    );
  }

}
