import './App.css';

import React, { Component } from 'react';

import ProductsFeed from './components/products-feed';
import Search from './components/search';

// const products = [];

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      search: '',
    };
  }

  getApiData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(p => this.setState({ products: p }));
  }

  componentDidMount() {
    this.getApiData();
  }

  onSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { products, search } = this.state;
    const searchProducts = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <Search onSearchChange={this.onSearchChange} />
        <ProductsFeed products={searchProducts} />
      </div>
    );
  }
}

export default App;
