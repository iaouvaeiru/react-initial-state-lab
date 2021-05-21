import React, { Component } from 'react'

export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    generateBombResult = () => {
        console.log(this.props.secondsLeft)
        return this.state.secondsLeft == 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
    render() {
        return (
            <div>
                {this.generateBombResult()}
            </div>
        )
    }
}
