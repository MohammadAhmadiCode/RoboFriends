import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundy from "../components/ErrorBoundy";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onSearchChange = (event) => {
    this.setState({SearchField : event.target.value})
  };
  render() {
    const { robots, SearchField } = this.state;
    const filteredRobotes = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(SearchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFreinds</h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundy>
            <CardList robots={filteredRobotes} />
          </ErrorBoundy>  
        </Scroll>
      </div>
    );
  }
}

export default App;
