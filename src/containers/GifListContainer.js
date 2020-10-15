import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

  state = {
    gifs: []
  }
  componentDidMount() {
    this.searchApi()
  }
  searchApi = (term = 'a') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=8LzNMS8J9ZZTFr47L873f97gjwBnJuUl&rating=g&limit=3`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data
        })
      })
  }

  handleSubmit = (term) => {
    this.searchApi(term)
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