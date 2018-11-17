import React from 'react'

export default class AddChild extends React.Component {
  constructor() {
    super();
    this.submitForm = (name, branch, resident) => event => {
      event.preventDefault();
      this.props.onSubmit(name, branch, resident)
    }
  }

  render() {
    const { name, branch, resident } = this.props;

    return (
      <div>
        <form onSubmit={this.submitForm(name, branch, resident)}>
          <input
            type="text"
            value={this.props.name}
            placeholder="Name"
          />
          <input
            type="text"
            value={this.props.branch}
            placeholder="Branch"
          />
          <input
            type="text"
            value={this.props.resident}
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
