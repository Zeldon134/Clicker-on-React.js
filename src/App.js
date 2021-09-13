import React from "react";
import './index.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
    this.stop = this.stop.bind(this);
  }

  left() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }

  right() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  stop() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="main">
        <div>
          <div>
            <h1>Число: {this.state.count} </h1>
          </div>
          <div className="but">
           <img className="item blue" onClick={this.left} src="/images/one.png" alt=""/>
           <img className="item red"onClick={this.stop} src="/images/two.png" alt=""/>
           <img className="item blue" onClick={this.right} src="/images/three.png" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;