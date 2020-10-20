import React, { Component } from 'react'


export default class GifList extends Component {
  render() {
    return (
        <ul className='list-group'>
            {this.props.gifs.map((gif, idx) => {
                return (
                    <li
                        key={idx}
                        className='list-group-item'
                    >
                        <img src={gif.images.original.url} alt='' />
                    </li>
                )
            })}
        </ul>
    )
  }
}
