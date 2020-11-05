import React from 'react'

class GifSearch extends React.Component{
  
    state={
            input: ""
        }
    
    updateInput= event =>{
        this.setState({
            input: event.target.value
        })
    }

    searchGifs = event =>{
        event.preventDefault();
        this.props.find(this.state.input)
        
    }

    render() {
        
      return (
          
            <form onSubmit={this.searchGifs}>
                <p>
                <label name="searchInput">Enter a Search Term:</label></p>
                <p><input type="text" name="searchInput" value={this.state.input} onChange={this.updateInput}/> </p>
                <p><input type="submit" name='searchInput' /></p>
            </form>
        )
    }
}

export default GifSearch
