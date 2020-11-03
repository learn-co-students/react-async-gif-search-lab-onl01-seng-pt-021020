// This container is responsible for fetching data from the API,
// storing the first 3 gifs in its component state,
// and passing that data down to its child, the <Giflist> component, as a prop

import React, { Component } from 'react'
import GifList from './components/GifList'
import GifSearch from './components/GifSearch'



class GifListContainer extends Component {
    state = {
        gifs: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=YOUR API KEY&rating=g')
        .then(resp => resp.json)
        .then(data => {
            this.setState({
                gifs: data.map ( gif => ({ url: gif.images.original.url}))
            })
        })
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default GifListContainer