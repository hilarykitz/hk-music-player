import React, { Component } from 'react';
import MdSearch from 'react-icons/lib/md/search';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      searchFailed: false
    };
  }

  saveString = (e, updateTracks) => {
    const newString = e.target.value;
    const currentString = this.state.searchString;
    if (currentString !== newString) {
      this.setState({ searchString: newString });
      updateTracks(newString);
    }
  };

  render() {
    const { searchString } = this.state;
    const { updateTracks } = this.props;

    return (
      <div className="searchWrapper">
        <input
          placeholder="Search for artists"
          onChange={e => this.saveString(e, updateTracks)}
          value={searchString}
        />
        <div className="iconRight">
          <MdSearch color="white" size={26} />
        </div>
      </div>
    );
  }
}

export default Search;
