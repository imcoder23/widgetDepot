import React from 'react';
import './App.css';
import Items from './components/items';
import Itemtoggle from './components/itemtoggle';
import Searchbar from './components/searchbar'
import Titlebar from './components/titlebar'

class App extends React.Component {
  state = {
    items: [
      {
         id: 1,
         name:"WIDGET 1",
         price: "$750",
         specifications:{
           dimensons:'14" x 20" x 5"',
           weights: "4lbs",
           capacity: "10L"
         },
         clicked:false,
         description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
         
       },
       {
         id: 2,
         name:"WIDGET 2",
         price: "$240",
         specifications:{
           dimensons:'16" x 20" x 5"',
           weights: "5lbs",
           capacity: "30L"
         },
         clicked:false,
         description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
         
       },
       {
         id: 3,
         name:"WIDGET 3",
         price: "$75",
         specifications:{
           dimensons:'17" x 20" x 5"',
           weights: "7lbs",
           capacity: "10L"
         },
         clicked:false,
         description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
         
       },
       {
         id: 4,
         name:"WIDGET 4",
         price: "$700",
         specifications:{
           dimensons:'10" x 20" x 5"',
           weights: "40lbs",
           capacity: "6L"
         },
         clicked:false,
         description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
       },

   ]

}

clickHandler=(id)=>{
      // console.log(id) 
  this.setState({ items:this.state.items.map(item=>{
    if(item.id === id){
      
      item.clicked = !item.clicked
      
    } 
    return item;
  })
  });
      
}

render()
{
  // console.log(this.state.items)
  return (
  <div>
    <Titlebar/>
    <Searchbar/>

  <div className="App">
    
      <div className="Items">
        <Items items={this.state.items} clickHandler={this.clickHandler}  />
      </div>
      
      <div className="Itemsdetails">
              <Itemtoggle items ={this.state.items}/>
      </div>
      
    </div>
    </div>

    );
  }
}
export default App;
