import React from 'react';
import Stock from '../components/Stock'
const PortfolioContainer = props => {
  const { folio, removeClick } = props
  return (
    <div>
      <h2>My Portfolio</h2>
        {
          folio.map(stock => {
            return (
              <div key={stock.id} onClick={() => removeClick(stock)}>
                <Stock stock={stock} />
              </div>
            )
          })
          //render your portfolio stocks here
        }
    </div>
  );
}
export default PortfolioContainer;
