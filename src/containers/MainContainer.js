import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      folio: [],
	  filtered: 'all',
	  radio: 'all'
    }
  }
  componentDidMount() {
    const url = 'http://localhost:3000/stocks'
    fetch(url).then(r => r.json()).then(stocks => this.setState({ stocks }))
  }

  handleClick = (stock) => {
    //I want to just add this stock to my folio in state
    if (!this.state.folio.includes(stock)) {
      this.setState({
        folio: [...this.state.folio, stock]
      })
    }
  }

  removeClick = stock => {
    this.setState({
      folio: this.state.folio.filter(s => s.id !== stock.id)
    })
  }

  dropDown = e => {
    //e.persist()
    this.setState({filtered: e.target.value })
  }

	radioButton = e => {
		this.setState({radio: e.target.value})
	}

  render() {
    const { stocks, folio, filtered, radio } = this.state
    return (
      <div>
		<SearchBar 
			dropDown={this.dropDown}
			radioButton={this.radioButton}
		/>
          <div className="row">
            <div className="col-8">
			  <StockContainer
			  	radio={radio} 
                filtered={filtered}
                stocks={stocks} 
                handleClick={this.handleClick}
              />
            </div>
            <div className="col-4">
              <PortfolioContainer 
                removeClick={this.removeClick} 
                folio={folio} 
              />
            </div>
          </div>
      </div>
    );
  }
}
export default MainContainer;
