import React, { Component } from 'react'

export default class GifSearch extends Component {

  state = {
    search: ''
  }
  handleChange = e => {
    this.setState({ search: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state.search)
    this.setState({ searchTerm: "" })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type='text' id='search'></input>
      </form>
    )
  }
}
