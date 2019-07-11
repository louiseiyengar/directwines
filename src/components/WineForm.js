import React from 'react';

import FormOption from './FormOption';

const WineForm = (props) => {
  const wineCases = props.wineCases;
  let wineOptions;

  if (wineCases.length > 0) {
    wineOptions = wineCases.map((wineCase, i) =>
      <FormOption 
        key={wineCase.itemCode} 
        name={wineCase.name} 
        price={wineCase.price} 
        index = {i}
        />);
  } else {
    wineOptions = "...options are loading";
  }

  return(
      <div className="main-content-wineforms">
        <div className="section-header section-header-1">
            <span className="step">Step 1</span><span className="triangle"></span> <span className="step-name">Which Case Would You Like?</span>
        </div>
        <p>Whatever you choose, we’ll add in two bonus Cabs and two crystal glasses and you’ll have the complete package – 
        worth over $250 – for ONLY $69.99 (plus $19.99 shipping &amp; applicable tax; please allow 5-10 days for delivery, 
        depending on shipping state).</p> 
        <div className="wine-select">
          {wineOptions}
        </div>
    </div>
  );
}
  
export default WineForm;

