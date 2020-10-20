import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch gifFetch={this.gifFetch} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    gifFetch = (query="computer") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=DAKgYT4srQRiz32G8pdVhlWQAUOmTBvC&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
              })
    }

    componentDidMount() {
        this.gifFetch()
    }
}


export default GifListContainer