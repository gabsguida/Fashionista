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
      cart: []
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
        },
				(error) => {
					this.setState({
						isLoaded: false,
						error
					});
				}
      )
  }

  addToCart() {
    
    // ver sobre redux pra usar o state apenas no app
    this.setState({
      cart:[]
    })
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
