import React from 'react'

const Navbar = () => {
    
        return (
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                    <a className="navbar-brand" href="/navbar">StockMart</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home"><span className="sr-only">(current)</span></a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/link">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="/link" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li> */}
                        </ul>
                        
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-2" type="submit">Search</button>
                                
                        </form>
                        <div className="dropdown px-5">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Admin
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">Change Password</a>
                            <a className="dropdown-item" href="/">Log Out</a>
                        </div>
                        </div>
                        
                    </div>
                           
                </nav>
                
            
        )
    }

export default Navbar