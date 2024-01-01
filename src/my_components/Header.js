import React from 'react'
import { Outlet,Link } from "react-router-dom";
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-md">
                <a className="navbar-brand" href="#">{props.title}</a>
                {props.custCondition ? <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fixed bottom</a>
                </div> : "Nothing Here"}
                {/* <a className="navbar-brand" href={`/contact`}>Add Todo</a> */}
                <Link to={`contact`}>Add Todo</Link>

            </div>
        </nav>
    )
}