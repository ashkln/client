import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="center-container">
                    <div className="header">
                        <h1>A Simple Plant Monitor</h1>
                        <div className="border-bottom"></div>
                    </div>
                    <div className="description">
                        <p>This Monitoring application takes temperature and humidity readings from locally fitted sensors and displays them in a real time environment.</p>
                        <p> To start the monitor select: Start Monitor</p>
                    </div>
                    <div className="start-button">
                        <Link to="/monitor">
                            <button className="start-monitor">Start Monitor</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
