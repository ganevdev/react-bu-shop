import './App.css';

import React, { Component } from 'react';

import fakeProducts from './assets/fake-products.json';
import KindButtons from './components/kind-buttons';
import ProductsFeed from './components/products-feed';
import Search from './components/search';
import Summa from './components/summa';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      search: '',
      kind: '',
    };
  }

  getApiData() {
    // from api
    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then(response => response.json())
    //   .then(p => this.setState({ products: p }));
    //
    // local
    this.setState({ products: fakeProducts });
  }

  componentDidMount() {
    this.getApiData();
  }

  onSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  onKindChange = event => {
    this.setState({ kind: event.target.value });
  };

  render() {
    const { products, search, kind } = this.state;

    let filteredProducts = products;
    filteredProducts = filteredProducts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    filteredProducts = filteredProducts.filter(p => {
      if (!kind) return true;
      return p.kind === kind;
    });

    return (
      <div className="App">
        <div style={{ paddingTop: '80px' }}>
          <Search onSearchChange={this.onSearchChange} />
          <KindButtons products={products} onKindChange={this.onKindChange} />
          <Summa products={filteredProducts} />
          <ProductsFeed products={filteredProducts} />
        </div>
      </div>
    );
  }
}

export default App;
