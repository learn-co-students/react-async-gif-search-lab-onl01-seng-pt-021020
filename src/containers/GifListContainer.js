import React from 'react';

import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {

    state = {
        data: []
      }
      
    fetchData = (query) => {
        let url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=3&api_key=JUuCl7Wudmv30WQYNLeYdTyReefN2AQ5&rating=g`
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                data: data.data
            })
        })
    }

    handleSubmit = (e, query) => {
        e.preventDefault();
        this.fetchData(query)

    }

    render() {
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifData={this.state.data} />
            </div>
        )
    }
}

export default GifListContainer;