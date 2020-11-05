import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state={
        searchResult:[]
    }

    serchData = (query='dolphins') =>{
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
        // this.serchData('cat')
        return(
            <div>
           <GifSearch find={this.serchData}/>
            
            <GifList results={this.state.searchResult}/>
            </div>
            
        )
    }

    componentDidMount(){
        this.serchData()
    }
}

export default GifListContainer
