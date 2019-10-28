import React from 'react';
import Itemlist from './itemlist'

class Items extends React.Component {

    render()
    {
        // console.log(this.props.items);
        return (
           this.props.items.map( (item)=> (
               <Itemlist item ={item} clickHandler={this.props.clickHandler}/>
        )
        )
        );

    }

}

export default Items;