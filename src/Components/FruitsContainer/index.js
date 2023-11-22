import {Component} from 'react'
import "./index.css"

class FruitsCounter extends Component {
    state = {mangoCount: 0, bananaCount: 0}

    eatMango = () => {
        this.setState(prevState => 
            ({mangoCount: prevState.mangoCount + 1})
        )
    }

    eatBanana = () => {
        this.setState(prevState => 
            ({bananaCount: prevState.bananaCount + 1})
        )
    }
    render(){
        const {mangoCount, bananaCount} = this.state
        return (
            <div className="fruits-counter-container">
                <div className="counter-card">
                    <h1 className="heading">Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span> bananas</h1>
                    <div className="image-button-container">
                        <div className="mango-container">
                            <img className="mango-image"  src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango"/>
                            <div>
                                <button className="button" onClick={this.eatMango}>Eat Mango</button>
                            </div>
                        </div>
                        <div className="banana-container">
                            <img className="banana-image" src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana"/>
                            <div>
                                <button className="button" onClick={this.eatBanana}>Eat Banana</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FruitsCounter