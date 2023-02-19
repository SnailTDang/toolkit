import React from 'react'
import {Link } from 'react-router-dom'
import './notfound.css'

export default function NotFound() {
  return (
    <div className='container'>
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>we are sorry, but the page you requested was not found</h2>
            <Link to='/home' className="home-btn">Go Home</Link>
            <Link to='/contact' className="contact-btn">Contact us</Link>
        </div>
    </div>
  )
}
