import React from "react";

import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";

import styles from "./App.module.css";

import { fetchedData } from "./api";

class App extends React.Component {
  state = { data: {} };

  async componentDidMount() {
    const data = await fetchedData();
    this.setState({ data });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
