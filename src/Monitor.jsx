import React, { Component } from 'react'
import axios from 'axios';
import { Scatter } from 'react-chartjs-2';

export class Monitor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            humidityArray: [
                {
                    x: Math.floor(new Date().getTime()),
                    y: 0
                }
            ],
            temperatureArray: [
                {
                    x: Math.floor(new Date().getTime()),
                    y: 0
                }
            ],
            initialisedTime: Math.floor(new Date().getTime())
        }
    }

    getData() {
        axios.get('https://plant-monitoring-system.herokuapp.com/getData')
            .then(res => {
                this.setState({
                    humidityArray: [...this.state.humidityArray, {
                        x: Math.floor(new Date().getTime()),
                        y: res.data.humidity
                    }
                    ],
                    temperatureArray: [...this.state.temperatureArray, {
                        x: Math.floor(new Date().getTime()),
                        y: res.data.temperature
                    }
                    ]
                })
            })
    }

    clearArray() {
        let humidDataLength = this.state.humidityArray.length
        let tempDataLength = this.state.temperatureArray.length

        if (humidDataLength > 10) {
            this.state.humidityArray.shift();
        }

        if (tempDataLength > 10) {
            this.state.temperatureArray.shift();
        }
    }

    componentDidMount() {
        this.interval1 = setInterval(() => this.getData(), 1000 * 3);
        this.interval2 = setInterval(() => this.clearArray(), 1000 * 3);
    }

    componentWillUnmount() {
        clearInterval(this.interval1);
        clearInterval(this.interval2);
    }



    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="chart-container">
                        <Scatter
                            data={{
                                datasets: [
                                    {
                                        label: "Temperature",
                                        backgroundColor: 'rgba(75,192,192,1)',
                                        borderColor: 'rgb(100, 164, 201)',
                                        borderWidth: 3,
                                        fill: false,
                                        data: this.state.temperatureArray,
                                        showLine: true
                                    },
                                    {
                                        label: "Humidity",
                                        backgroundColor: 'rgb(50, 166, 90)',
                                        borderColor: 'rgb(50, 166, 90)',
                                        borderWidth: 3,
                                        fill: false,
                                        data: this.state.humidityArray,
                                        showLine: true
                                    }
                                ]
                            }}
                            options={{
                                scales:{
                                    xAxes:[{
                                        type:'time',
                                        ticks:{
                                            autoSkip:true,
                                            maxTicksLimit:11,
                                            fontSize:8
                                        }
                                    }]
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor
