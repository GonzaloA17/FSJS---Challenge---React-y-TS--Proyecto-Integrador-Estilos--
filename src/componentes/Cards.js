import React from 'react'
import Card from './Card'

function Cards() {
    return (
        <div className='container d-flex justify-content-center aling-items-center bg-info'>
            <div className='row'>
                <div className='col-md-4'>
                <Card />
                </div>
                <div className='col-md-4'>
                <Card />
                </div>
                <div className='col-md-4'>
                <Card />
                </div>
            </div>
        </div>
    )
}

export default Cards