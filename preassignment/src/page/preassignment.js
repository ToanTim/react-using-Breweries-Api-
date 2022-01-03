import React from "react";
import Card_view from "../components/card.component";
import "./preassignmnet.css";
import logo from "../assets/Logo.png";

class Preassignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items_search: [],
      items: [],
      popUp: false,

      helloPopUpSearch: false,
      DataisLoaded: false,
      name: "",
      city: "",
      breweryType: "",
      currenntID: "",
      value: "",
    };

    this.onClickPopUp = this.onClickPopUp.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  onClickPopUp(e) {
    this.setState({
      currenntID: e.currentTarget.id,
      popUp: !this.state.popUp,
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit() {
    var url =
      "https://api.openbrewerydb.org/breweries?by_city=" + this.state.value;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items_search: json,
          DataisLoaded_search: true,
        });
      });

    this.setState({
      helloPopUpSearch: !this.state.helloPopUpSearch,
    });

    if (this.state.popUp === true) {
      this.setState({
        popUp: !this.state.popUp,
      });
    }
  }

  render() {
    console.log(this.state.currenntID);
    return (
      <div className="container">
        <div className="form" onSubmit={this.handleSubmit}>
          <img src={logo} alt="Logo" width="100" height="100" />

          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <button
            className="submitButton"
            onClick={this.handleSubmit}
            type="submit"
            value="Search Bar"
          >
            Search By City
          </button>
        </div>
        <div className="row">
          {this.state.items.slice(0, 6).map((item) => {
            return (
              <Card_view
                id={item.id}
                name={item.name}
                breweryType={item.brewery_type}
                city={item.city}
                viewfuntion={this.onClickPopUp}
              />
            );
          })}
        </div>

        <div
          className={
            this.state.helloPopUpSearch ? "popUpSearch" : "removePopUpSearch"
          }
        >
          {this.state.items_search.map((item) => {
            return (
              <Card_view
                id={item.id}
                name={item.name}
                breweryType={item.brewery_type}
                city={item.city}
                viewfuntion={this.onClickPopUp}
              />
            );
          })}
        </div>

        <div className={this.state.popUp ? "popUp" : "removePopUp"}>
          {this.state.items.map((item) => {
            if (item.id === this.state.currenntID)
              return (
                <ul>
                  <li>id : {item.id}</li>
                  <li>name : {item.name}</li>
                  <li>brewery_type : {item.brewery_type}</li>
                  <li>street : {item.street}</li>
                  <li>address_2 : {item.address_2}</li>
                  <li>address_3 : {item.address_3}</li>
                  <li>city : {item.city}</li>
                  <li>state : {item.state}</li>
                  <li>county_province: {item.county_province}</li>
                  <li>postal_code : {item.postal_code}</li>
                  <li>country : {item.coutry}</li>
                  <li>longitude : {item.longitude}</li>
                  <li>latitude : {item.latitude}</li>
                  <li>phone : {item.phone}</li>
                  <li>website_url : {item.website_url}</li>
                  <li>updated_at : {item.updated_at}</li>
                  <li>created_at : {item.created_at}</li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              );
          })}

          {this.state.items_search.map((item) => {
            if (item.id === this.state.currenntID)
              return (
                <ul>
                  <li>id : {item.id}</li>
                  <li>name : {item.name}</li>
                  <li>brewery_type : {item.brewery_type}</li>
                  <li>street : {item.street}</li>
                  <li>address_2 : {item.address_2}</li>
                  <li>address_3 : {item.address_3}</li>
                  <li>city : {item.city}</li>
                  <li>state : {item.state}</li>
                  <li>county_province: {item.county_province}</li>
                  <li>postal_code : {item.postal_code}</li>
                  <li>country : {item.coutry}</li>
                  <li>longitude : {item.longitude}</li>
                  <li>latitude : {item.latitude}</li>
                  <li>phone : {item.phone}</li>
                  <li>website_url : {item.website_url}</li>
                  <li>updated_at : {item.updated_at}</li>
                  <li>created_at : {item.created_at}</li>
                </ul>
              );
          })}

          <button className="buttonPopUp" onClick={this.onClickPopUp}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
/* {
            this.state.popUpSearch ? "popUpSearch" : "removePopUpSearch"
          } */
export default Preassignment;
