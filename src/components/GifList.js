import React from 'react'

function GifList(props) {
  let gifArray = props.gifs.map((gif) => <li key={gif.id}><img src={gif.images.original.url} alt="gif" /></li>)

  return (
    <ul>
      {gifArray}
    </ul>
  )
}

export default GifList