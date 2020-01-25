import React, { Component } from 'react'

export default class ListJson extends Component {
    listViewHandler=(data)=>
    {
        return <div style={{textAlign:"left", margin:20, padding:10}}><li>ID: {data.id} City:{data.city}</li><br></br></div>
    }
    render() {
        const list = [
            {
                id:1,
                city: "Dhaka",
                key: 1
            },
            {
                id:2,
                city: "Mymensingh",
                key: 2
            },
            {
                id:3,
                city: "Canada",
                key: 3
            },
            {
                id:4,
                city: "Europe",
                key: 4
            }
        ]

        const listView = list.map(this.listViewHandler)
        return (
            <div>
                <h1>{listView}</h1>
            </div>
        )
    }
}
