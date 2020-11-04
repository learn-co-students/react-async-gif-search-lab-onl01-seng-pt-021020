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


    render() {
        
      return (
          
            <form>
                <p>
                <label name="searchInput">Enter a Search Term:</label></p>
                <p><input type="text" name="searchInput" value={this.state.input} onChange={this.updateInput}/> </p>
                <p><input type="submit" name='searchInput' /></p>
            </form>
        )
    }
}

export default GifSearch
