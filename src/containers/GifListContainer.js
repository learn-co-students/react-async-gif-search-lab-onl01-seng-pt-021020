//FkfFXSHnHsxUxnsgs4DXXGUX1IwjAUrD
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
        < GifSearch fetchGifs={this.fetchGifs}/>
        < GifList gifs={this.state.gifs}/>
      </div>
    )
  }
  //GifListContainer passes data down to its child, the <GifList> component, as a prop.


  fetchGifs = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=dogs&api_key=FkfFXSHnHsxUxnsgs4DXXGUX1IwjAUrD&rating=g&limit=3`)
      .then(response => response.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }

  componentDidMount() {
    this.fetchGifs()
  };
}

export default GifListContainer


//<GifListContainer /> should be a container that does data fetching and then renders its corresponding sub-component. That’s it.


//In our app, the <GifListContainer /> will be responsible for fetching the data from the Giphy API, storing the first 3 gifs from the response in its component state,
//and passing that data down to its child, the <GifList> component, as a prop.

//It will also render a <GifSearch /> component that renders the form.
//<GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
