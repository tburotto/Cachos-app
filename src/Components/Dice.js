import React, { Component } from 'react'
import { faDiceOne } from '@fortawesome/free-solid-svg-icons'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { faDiceThree } from '@fortawesome/free-solid-svg-icons'
import { faDiceFour } from '@fortawesome/free-solid-svg-icons'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import { faDiceSix } from '@fortawesome/free-solid-svg-icons'

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Dice extends Component {
    constructor(props){
        super(props)
        this.state = {
            info: 1,
        }
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    render() {
        if (this.props.roll === true){
            let r = this.getRndInteger(1,6)
            this.setState({info: r})
        }
        if (this.props.info === 1){
            return (
                <div className="dado">
                  <FontAwesomeIcon icon={faDiceOne} size="6x"/>
                </div>
            )
        }
        if (this.props.info === 2){
            return (
                <div className="dado">
                  <FontAwesomeIcon icon={faDiceTwo} size="6x"/>
                </div>
            )
        }
        if (this.props.info === 3){
            return (
                <div className="dado">
                  <FontAwesomeIcon icon={faDiceThree} size="6x"/>
                </div>
            )
        }
        if (this.props.info === 4){
            return (
                <div className="dado">
                  <FontAwesomeIcon icon={faDiceFour} size="6x"/>
                </div>
            )
        }
        if (this.props.info === 5){
            return (
                <div className="dado">
                  <FontAwesomeIcon icon={faDiceFive} size="6x"/>
                </div>
            )
        }
        if (this.props.info === 6){
            return (
                <div className="dado">
                  <FontAwesomeIcon icon={faDiceSix} size="6x"/>
                </div>
            )
        }
    }
}
