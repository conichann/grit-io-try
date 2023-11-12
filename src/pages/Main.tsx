import React from "react";

type Props = {};

type State = {
  count: number;
};

export class Main extends React.Component<Props, State> {
  state: State = {
    count: 0,
  };

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>count: {this.state.count}</h2>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}
