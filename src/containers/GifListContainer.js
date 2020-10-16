import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
  state = {
    gifs: [],
    baseUrl: 'https://api.giphy.com/v1/gifs/search?api_key=Exxi2u6mJ4xJNkSDte8xvC6l90CfrDPY',
    searchTerm: 'dolphin',
    resultsLimit: 3,
    resultsRating: '&rating=g',
    resultsLang: '&lang=en'
  }

  componentDidMount() {
    fetch(`${this.state.baseUrl}&q=${this.state.searchTerm}&limit=${this.state.resultsLimit}`)
    .then(response => response.json())
    .then(json => {console.log(json)})
  }

  render() {
    return (
      <div>
        <GifList />
        <GifSearch />
      </div>
    )
  }
}