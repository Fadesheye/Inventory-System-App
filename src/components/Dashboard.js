import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="board">
                    <div className="b1">
                    <h1>0</h1>
                    <p></p>
                    <p>Total no. of Items</p>
                    </div>
                </div>
                <div className="board">
                    <div className="b2">
                    <h1>0</h1>
                    <p></p>
                    <p>Total no. of Sales</p>
                    </div>
                </div>
                <div className="board">
                    <div className="b3">
                    <h1>0</h1>
                    <p></p>
                    <p>Total no. of Purchase</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard