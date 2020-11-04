import React from 'react'

class GifList extends React.Component{
    constructor(props){
        super(props)
    }

render(){
  return (
    <ul>
    {this.props.results.map(obj=>{
        return (
            <li><img src={obj.images.original.url} alt="" /></li>
    )
    })}
    </ul>
    )
}   
}

export default GifList
