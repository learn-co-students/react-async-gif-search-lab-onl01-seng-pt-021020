import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmitEvent = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitEvent}>
                    <
                        input type="text" 
                        value={this.state.query} 
                        onChange={event => this.setState({query: event.target.value})} 
                    />
                </form>
            </div>
        )
    }
}
