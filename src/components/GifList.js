import React from 'react'

class GifList extends React.Component {

    render() {
        return (
            <div>
            <img src={this.props.gifUrl} alt={this.props.gifUrl}/>
            </div>
        )
    }
}

export default GifList