import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    changeHandler = (e) => {
        this.setState({ searchTerm: e.target.value }, ()=> console.log(e))
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }
    render() {
        return (

            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="search" value={this.state.searchTerm} onChange={event => this.changeHandler(event)} />
                <input type="submit" value="search" />
            </form>
        )
    }
}


export default GifSearch