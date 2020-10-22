import React from 'react';

class GifList extends React.Component {
    render() {
        return(
            <ul className='gif-list'>
                {this.props.gifData.map((gif, key) => {
                    return(
                        <li key={key} className='gif-list-item'>
                            <img src={gif.images.original.url} alt=""></img>
                        </li>
                    )
                    
                })}

            </ul>
        )
    }
}

export default GifList;