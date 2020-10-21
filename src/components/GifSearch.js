import React from 'react'

class GifSearch extends React.Component {

    constructor() {
        super();
        this.state = {
          keywords: ''
        }
      }
    
      handleKeywordsChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      handleSearchSubmit = e => {
        e.preventDefault();
    
        if (!!this.state.keywords) {
          this.props.handleSearch(this.state)
        }
      }
    
      render() {
        return(
          <div>
            <form onSubmit={this.handleSearchSubmit}>
              <input onChange={this.handleKeywordsChange} type="text" name="keywords" value={this.state.keywords} />
              <button type="submit">Search</button>
            </form>
          </div>
        )
      }
}

export default GifSearch