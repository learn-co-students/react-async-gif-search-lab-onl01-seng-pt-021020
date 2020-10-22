import React from 'react';

class GifSearch extends React.Component {

    state = {
        query: ""
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {
        return(
        <div>
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state.query)}>
                <label>Gif Search: </label>
                <input type='text' name='search' onChange={this.handleChange}></input>
                <input type='submit' value="Search"></input>
            </form>
        </div>)
    }
}

export default GifSearch; 