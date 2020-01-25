import React, { Component } from 'react'

export default class extends Component {
    constructor() {
        super();
        this.state = {
            city1: "Dhaka",
            city2: "Mymensignh",
            city3: "Rangpur",
            city4: "Rajshahi",
            city5: "Barishal",
            city6: "Chittagong",
            show: "",
            auto: "Dhaka"
        }
    }

    onChangeHandler = (event) => {
        var value = event.target.value;
        this.setState({ show: value })
        this.setState({ auto: value })
    } 

    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city5}</option>
                    <option>{this.state.city6}</option>
                </select>
            </div>
        )
    }
}
