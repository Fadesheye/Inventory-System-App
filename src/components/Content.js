import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Items from './Items'
import Table from "./Table"


class Content extends Component {
    state ={
        data: []
    };

    render() {
        return (
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-1 ml-0"> 
                            <ul className="nav flex-column">
                            <li className="side-item">
                            <a className="nav-link active" href="/">PRODUCTS</a>
                            </li>
                            <li className="side-item">
                            <a className="nav-link" href="/">SUPPLIER</a>
                            </li>
                            <li className="side-item">
                            <a className="nav-link" href="/">SALES</a>
                            </li>
                            <li className="side-item">
                            <a className="nav-link" href="/">Reports</a>
                            </li>
                            </ul>
                        </div>

                        <div className="col-11">
                            <Dashboard />
                            <Table 
                                data ={this.state.data}
                                header= {[
                                    {
                                        name: "Product Code",
                                        prop: "productCode",
                                    },
                                    {
                                        name: "Product Name",
                                        prop: "productName",
                                    },
                                    {
                                        name: "Category",
                                        prop: "category",
                                    },
                                    {
                                        name: "Quantity",
                                        prop: "quantity",
                                    },
                                    {
                                        name: "Price",
                                        prop: "price",
                                    },
                                    {
                                        name: "Brand",
                                        prop: "brands",
                                    },
                                    {
                                        name: "Supplier",
                                        prop: "supplier",
                                    },
                                    
                                ]}
                            />
                            <Items onSubmit={submission => this.setState({
                                data: [...this.state.data, submission]
                            })} />

                        </div>
                    </div>
                </div>
        )
    }
}
export default Content