import React, { Component } from 'react'
import { link } from 'fs';

class QuizQuestionButton extends Component {
    render() {
        return (
            <li>
                <button>
                    {this.props.button_text}
                </button>
            </li>
        )
    }
}

export default QuizQuestionButton