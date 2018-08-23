import React, { Component, createContext } from "react";
import { addFave, removeFave, getFaves } from "../../config/models";
const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: []
    };
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = () => {
    try {
      this.setState({ faveIds: getFaves() });
    } catch (err) {
      console.log(err);
    }
  };

  addFaveSession = sessionId => {
    try {
      addFave(sessionId);
      this.getFavedSessionIds();
    } catch (err) {
      console.log(err);
    }
  };

  removeFaveSession = sessionId => {
    try {
      removeFave(sessionId);
      this.getFavedSessionIds();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFave: this.addFaveSession,
          getFave: this.getFavedSessionIds,
          removeFave: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
