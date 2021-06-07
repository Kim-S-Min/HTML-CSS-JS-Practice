import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 6000);
    axios
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {this.state.isLoading ? "Loading...." : "We are ready"}
      </div>
    );
  }
}

export default App;
