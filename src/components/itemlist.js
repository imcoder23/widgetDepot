import React, { Component } from 'react'

import './css/itemlist.css'
import Itemdesc from './itemdesc'

export class Itemlist extends Component {

// clickHandler(id){
//     console.log(id)
// }

    render() {
         const {id,clicked} = this.props.item;
            
        //  var loadItem; 
        //  if(clicked){
        //     loadItem = < Items/>         
        //  } else {
        //      loadItem = <Itemsdetail/>
        //  }

        return (
            
            <Itemdesc item={this.props.item} clickHandler={this.props.clickHandler} />

            // <div>
            //     <button onClick={this.props.clickHandler.bind(this,id)}>{this.props.item.name} <br/> Price  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> <br/> {this.props.item.price}</button>

            // <div className="toggle">
            //     {this.props.item.name}
            //     {"img"}
            //     <br/>
            //     {"big Image"}
            //     <br/>
            //     Specification
            //     {this.props.item.specifications.dimensons}
            //     {this.props.item.specifications.weights}
            //     {this.props.item.specifications.capacity}
            //     <br/>
            //     {this.props.item.description}
            // </div>


            // </div>
        )
    }
}

export default Itemlist
