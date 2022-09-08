import React from 'react';

export default class HelloComponent extends React.Component{


    constructor(props){
        super(props);
        this.state =  {
          date: new Date(),
          field1: "Hello"
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render(){
        return <>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </>
        
    }

    tick() {
      console.log('tick');
      this.setState({
        date: new Date()
      });
    }

}