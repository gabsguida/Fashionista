import React from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    }
  }

  componentDidMount() {
    fetch("https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
            products: result,
            productsFull: result
          });
          console.log(this.state.products)},
				(error) => {
					this.setState({
						isLoaded: false,
						error
					});
				}
      )
  }

  render() {
  

    return (
      <React.Fragment>
        <Header />
        <main>
          <Hero />
          <Cards products={this.state.products}/>          
        </main>
      </React.Fragment>
    )
      
  }
     
}

export default App;
