import React from "react";
import "./favorites.css";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }
  async componentDidMount() {
    const url = "http://localhost:5000/favorites";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ favorites: data });
    console.log(data);
  }
  render() {
    var favorites = this.state.favorites.map((favorite) => (
      <div id="favDiv">{favorite.user_id}</div>
    ));
    return <div>{favorites}</div>;
  }
}
export default Favorites;
