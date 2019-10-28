import React, { Component } from 'react'

export class Itemdesc extends Component {
    getStyle(){
        return{

            display:this.props.item.clicked ?
            'inline': 'none'
        }        
    }



    render() {
        const {id,clicked} = this.props.item;
        return (
            

            <div className="container">
                        <button class="btn" onClick={this.props.clickHandler.bind(this,id)}>
                            {this.props.item.name} <br/> Price  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;> <br/> 
                            {this.props.item.price}
                        </button>

                    {/* <div className="toggle" style={this.getStyle()}> 
                         <h2>{this.props.item.name}</h2>
                        
                        {"img"}
                        <br/>
                        {"big Image"}
                        <br/>
                   
                    <h6>Specification</h6>
                    <div id="dimensions">
                        <h5>
                        {this.props.item.specifications.dimensons} <br/>
                                Dimensions
                        </h5>
                        <h5>{this.props.item.specifications.weights} <br/>
                            Weights
                        </h5>
                        <h5>{this.props.item.specifications.capacity} <br/>
                            Capacity
                        </h5>
                        <br/>                                                                                                                                                                                                                                                                                                                                                                                                       
                        <br/>
                        <br/>
                    </div>
                    
                        <h6>{this.props.item.description}</h6>                                         
                     </div> */}


            </div>
        )
    }
}

export default Itemdesc




