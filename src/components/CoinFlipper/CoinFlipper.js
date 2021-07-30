import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";
import options from "../Options";
import {randomThrow,findCount} from "../Throw";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: options[0],
      flipping: false,
      throw :[],
    };
  }
  handleClick = () => {
    this.setState({ flipping: true });
    const random = randomThrow(options);
    setTimeout(() => this.setState({ flipping: false },()=> {
      this.setState({
        side :random,
        throw:[...this.state.throw].concat([random])
      })
    }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>

        {/* <React.Fragment>
          {this.state.throw=[] && <h1>Yazı mı Tura mı?</h1>}
          
        </React.Fragment> */}
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.throw.length} </strong>
          atıştan
          <div>
            {
              options.map(option => {
              return <div key={option}>
              {findCount(this.state.throw, option)}
              <span> {option} </span> geldi.
              </div>
             })
            }
          </div>
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
