import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class FormTutorial1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            number: 0,
        }
    }

    onChangeHandler = (event) => {
        var newValue = event.target.value;
        var newName = event.target.name;
        console.log(newValue+" "+newName);
        this.setState({[newName]:newValue});
        var element = document.getElementById("button");
        ReactDOM.findDOMNode(element).disabled=false;
    }

    onSubmiHandler = (event) => {
        // var newValue = event.target.value;
        // var newName = event.target.name;
        alert("You have typed " + this.state.name + ": " + this.state.number);
    }

    render() {
        return (
            <div>
                <h1>Form Tutorial 1</h1>
                <form style={{ margin: 50 }} onSubmit={this.onSubmiHandler}>

                    <h1>You have typed= {this.state.name} and You have typed= {this.state.number}</h1>
                    <input name="name" type="text" onChange={this.onChangeHandler} placeholder="Enter Name"></input><br />
                    <input name="number" type="number" onChange={this.onChangeHandler} placeholder="Enter Phone Number"></input><br />
                    <input id="button" type="submit" onSubmit={this.onSubmiHandler} defaultValue="Submit" disabled></input> <br/><br/>
                    <textarea type="text" value="This is a text area!"></textarea>
                </form>
            </div>
        )
    }
}
