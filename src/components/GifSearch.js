import React, { Component } from 'react'


export default class GifSearch extends Component {
    state = {
        searchTerm: ''
    }

    handleInputChange(value) {
        this.setState({
            searchTerm: value
        })
    }

    render() {
        return (
            <form
            >
                <input
                    type='text'
                    value={this.state.searchTerm}
                    onChange={event => this.handleInputChange(event.target.value)}
                />
                <button
                    type='submit'
                    onClick={event => {
                        event.preventDefault()
                        return this.props.handleSubmit(this.state.searchTerm)
                    }}
                >
                    Search
                </button>
            </form>
        )
    }
}
