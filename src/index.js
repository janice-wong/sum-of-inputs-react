import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      numbers: [0, 0]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(i, e) {
    const numbers = this.state.numbers;
    numbers[i] = e.target.value === "" ? 0 : Number.parseInt(e.target.value);
    this.setState({
      numbers: numbers,
      sum: numbers.reduce((partial_sum, num) => partial_sum + num)
    });
  }

  handleClick(e) {
    var newArray = this.state.numbers;
    newArray.push(0);
    this.setState({
      numbers: newArray,
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <button onClick={(e) => this.handleClick(e)}>Add Number</button>
        </div>
        <div className="row">
          {this.state.numbers.map((number, i) =>
            <input
              type="Number"
              key={i}
              value={number}
              onChange={(e) => this.handleChange(i, e)}
            />
          )}
        </div>
        <div className="row" id="sum">
          Sum: {this.state.sum}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);

