import React, { Component } from 'react'
import NewItems from './NewItems'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsApp - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewItems title="myTitle" description="myDesc" />
                    </div>
                    <div className="col-md-4">
                        <NewItems title="myTitle" description="myDesc" />
                    </div>
                    <div className="col-md-4">
                        <NewItems title="myTitle" description="myDesc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
