import React, {Component} from "react";

import "./Order.css"


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'Write here',
          chars_left: 120,
          max_char: 120
        };
    }


    handleWordCount = event => {
        const charCount = event.target.value.length;
        const maxChar = this.state.max_char;
        const charLength = maxChar - charCount;
        this.setState({ chars_left: charLength, value: event.target.value});
    }



    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }


    render(){
        return(
            <div className="form-area">
                <form  onSubmit={this.handleSubmit}>
                <label>
                Add a note to your order (120 Words)
                <textarea 
                rows={6}
                type="text"
                maxLength="120"
                required
                value={this.state.value} 
                onChange={this.handleWordCount}
                />
                </label>
                <p>You have {this.state.chars_left} words left</p>
                <input type="submit" value="Add note"  required/>
                </form>

            </div>
        )
    }
}

export default Form