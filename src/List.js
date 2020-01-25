import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const List = ["dhaka", "uttara","badda", "linkroad","justice"];
        const itemList = List.map((List)=>
        {
            return <div> <li>{List}</li> <br></br></div>
        })
        return (
            <div>
                <ol>
                {itemList}
                </ol>
            </div>
        )
    }
}
