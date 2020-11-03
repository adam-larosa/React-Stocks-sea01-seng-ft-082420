import React, { Component } from 'react';
import Stock from '../components/Stock'
class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.folio.map(stock => {
              return (
                <div key={stock.id} onClick={() => this.props.removeClick(stock)}>
                  <Stock stock={stock} />
                </div>
              )
            })
            //render your portfolio stocks here
          }
      </div>
    );
  }
}
export default PortfolioContainer;
