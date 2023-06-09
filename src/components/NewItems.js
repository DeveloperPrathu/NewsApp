import React, { Component } from 'react'

export class NewItems extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl} = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://c.ndtvimg.com/2023-06/uff6t9o_-kilauea-volcano-_625x300_08_June_23.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItems
