import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
    state = {
        gifs: [],
        baseUrl: 'https://api.giphy.com/v1/gifs/search?api_key=Exxi2u6mJ4xJNkSDte8xvC6l90CfrDPY',
        searchTerm: 'dog',
        resultsLimit: 3,
        resultsRating: 'g',
        resultsLang: '&lang=en'
    }

    componentDidMount() {
        this.updateGifs()
    }

    updateGifs(searchTerm=this.state.searchTerm) {
        return fetch(`${this.state.baseUrl}&q=${searchTerm}&limit=${this.state.resultsLimit}&rating=${this.state.resultsRating}`)
            .then(response => response.json())
            .then(json => {
                this.setState({gifs: Array.from(json.data)})})
    }

    handleSubmit = searchTerm => {
        this.updateGifs(searchTerm)
    }

    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}
