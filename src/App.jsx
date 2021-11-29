import "./App.css";
import React, {Component}from "react";
import Box from "./components/Box";

class App extends Component {
  constructor(props) {
    super(props);
    // set default state
    const boxes=[];
    const numBoxes = 24;
    for(let i = 0; i<numBoxes; i++){
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      });
    }
    this.state = {boxes};

    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this);
  }

  getRandomColor(){
    const rgb = Math.floor(Math.random()*255);
    return rgb;
  }

  handleBoxClick(event){
    const newBoxes = this.state.boxes.map((box)=> {
      if(box.id == event.target.id){
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
      }
      return box;
    });
    this.setState({
      boxes: newBoxes,
    })
  }


  render() {

    const renderBoxes = this.state.boxes.map((box)=>{
      return <Box
        key= {box.id}
        id= {box.id}
        color= {box.color}
        handleClick= {this.handleBoxClick}
      
      />
    })




    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{renderBoxes}</div>
      </main>
    );
  }
}

export default App;
