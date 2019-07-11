import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import WineForm from './WineForm';
import Zip from './Zip';

class App extends Component {
  state = {
    wineCases: [],
    zipLocation: 'Enter Zip to Populate City and State',
    locationInfo: this.emptyMessage
  }

  emptyMessage = 'Enter Zip to Populate City and State'
  ctMessage = 'Upon completion of this form, your order will be forwarded to The Wine Cellar, located in Wallingford, CT for processing and shipping.';

  handleWineData = (responseData) => {
      const wineArray = responseData.map((wineCase) => {
        return ({
            name: wineCase.product.name,
            price: wineCase.listPrice,
            itemCode: wineCase.itemCode
          })
      });

      this.setState({
        wineCases: wineArray
      })
  }

  handleZipData = (responseData) => {
     const location = responseData.city + ", " + responseData.stateCode;
     this.setState({
      zipLocation: location
    })
  }

  searchWines = () => {
    fetch(`https://www.wsjwine.com/api/offer/0033008`)
    .then(response => response.json())
    .then(responseData => {
      this.handleWineData(responseData.response.mainItems);
    })
    .catch((error) => {
      console.log("There was an error retrieving data from Direct Wines:", error);
    });
  }

  searchZipCode = (zip) => {

    if (zip.length > 0) {
      fetch(`https://www.wsjwine.com/api/address/zipcode/${zip}`)
      .then(response => response.json())
      .then(responseData => {
        this.handleZipData(responseData.response);
      })
      .catch((error) => {
        console.log("There was an error retrieving data from Direct Wines:", error);
      });
    } else {
      this.setState({
        zipLocation: this.emptyMessage
      })
    }
  }

  componentDidMount() {
    this.searchWines();
  }

  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch> />
            <Route exact path="/" 
              render={ () => <WineForm wineCases={this.state.wineCases} /> } />
            <Route exact path="/zip" 
              render={ () => <Zip 
                  searchZipCode={this.searchZipCode} 
                  zipLocation={this.state.zipLocation}
                  ctMessage={this.ctMessage} /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
