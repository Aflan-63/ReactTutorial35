import React, { Component } from 'react'

export default class List2 extends Component {
    showList= (data) =>{
        return <h1>{data+10}</h1>
    }
    render() {
        const myList = [1,2,3,4,5,6,7,8];
        const listView = myList.map(this.showList)
        return (
            <div>
                <ol>{listView}</ol>
            </div>
        )
    }
}
