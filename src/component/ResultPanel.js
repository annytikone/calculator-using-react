import React, { Component } from 'react'
import '../App.css'

class ResultPanel extends Component {
    render() {

        let result = this.props.result;

        return (
            <div className="result">
                <p>{result}</p>
            </div>
        )
    }
}

export default ResultPanel