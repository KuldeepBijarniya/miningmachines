import React from 'react'

export default function Machines(props) {
    return (
        <div className="card my-4">
            <img src={props.img} className="card-img-top" alt={props.title} style={{height:"325px"}}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.url} target={'_blank'} className="btn btn-dark">Read More</a>
            </div>
        </div>
    )
}
