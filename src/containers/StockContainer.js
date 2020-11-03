import React, { Component } from 'react';
import Stock from '../components/Stock'
class StockContainer extends Component {
  filterStocks = () => {
    const { filtered, stocks } = this.props
    if (filtered === 'all') {
      return stocks
    } 
    if (filtered === 'Sportswear') {
      return [...stocks].filter(stock => stock.type === 'Sportswear')
    } 
    if (filtered === 'Tech') {
      return [...stocks].filter(stock => stock.type === 'Tech')
    }
    if (filtered === 'Finance') {
      return [...stocks].filter(stock => stock.type === 'Finance')
    }
  }

  radioStocks = () => {
    const { radio }  = this.props
    if (radio === 'all') {
      return this.filterStocks()
    }
    if (radio === "Alphabetically") {
      return this.filterStocks().sort((a,b) => {
        if (a.name < b.name) {
          console.log('derp')
          return -1
        }
        return 1
      })
    }
    if (radio === 'Price') {
      return this.filterStocks().sort((a,b) => a.price - b.price)
    }
  }

  render() {
    console.log(this.props.filtered)
    const { handleClick } = this.props
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.radioStocks().map(stock => {
            return (
              <div key={stock.id} onClick={() => handleClick(stock)}>
                <Stock stock={stock}/>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default StockContainer;
