import React, { Component } from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, 
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem , MDBIcon,
    MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

export class Togglelist extends Component {
    getStyle(){
        return{
            display:this.props.item.clicked ?
            'inline': 'none'
        }        
    }
    
    render() {
        return (
            <div className="toggle" style ={this.getStyle()} >
        <Router>
        <MDBNavbar color="indigo" dark expand="md">
             <MDBNavbarBrand>
                    <strong className="white-text">{this.props.item.name}</strong>
            </MDBNavbarBrand>
                    
            <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                <MDBIcon icon="cart-arrow-down" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
                </Router>

        <MDBContainer className="mt-5 row d-flex justify-content-center">
        <MDBRow className="mb-4">
          <MDBCol md="12">
            <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
                
                
                {/* <h2>{this.props.item.name}</h2>
                        
                        {"img"}
                        <br/>
                        {"big Image"} */}
                        <br/>
                   
                    <div id="specification">
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
                    </div>
                    <br/>
                        <h6>{this.props.item.description}</h6> 




            </div>
        )
    }
}

export default Togglelist
