import React from 'react'
import GifList from './GifList'

class GifListContainer extends React.Component {

    state={
        searchResult:[]
    }

    serchData = (query) =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp=>resp.json())
        .then(data=>this.setSearchResults(data.data))
    }

    setSearchResults = (result) =>{
        this.setState({
            searchResult: result.slice(0,3)
        })
    }

    render() {
        this.serchData('cat')
        return(
            this.state.searchResult.map(obj=>{
                return (
                    <GifList url={obj.images.original.url}/>
                )
            })
            
        )
    }
}

export default GifListContainer
