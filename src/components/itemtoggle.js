import React, { Component } from 'react'
import Togglelist from './togglelist'

export class Itemtoggle extends Component {
    
    render()
    {
        // console.log(this.props.items);
        return (
           this.props.items.map( (item)=> (
               <Togglelist item ={item} />
        )
        )
        );

    }  
}
export default Itemtoggle
