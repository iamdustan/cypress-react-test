import React, { Component } from 'react';
export class Input extends Component {
  state = { value: '' };
  onChange = ({currentTarget}) => this.setState({
    value: currentTarget.value
  });

  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input
          type={name}
          name={name}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

