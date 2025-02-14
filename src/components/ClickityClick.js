import React from 'react'

class ClickityClick extends React.Component {
    constructor(props){
        super()
        this.state = {
            hasBeenClicked: false
        }
    }

    handleClick = () => {
        this.setSate({
            hasBeenClicked: true
        })
    }

    render(){
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null: "not"} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    };
}

export default ClickityClick;
