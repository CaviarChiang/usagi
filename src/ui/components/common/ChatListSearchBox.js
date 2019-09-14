import React from 'react';
import Search from '@material-ui/icons/Search';
// import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = {
  header: {
    padding: 15,
  },
};

const searchStyle = {
  flex: "1",
  position: "relative",
};

const inputStyle = {
    background: "#fff",
    padding: "8px",
    border: "1px solid #eee",
    width: "80%",
    borderRadius: "5px",
    fontSize: "14px",
    color: "#666",
    paddingLeft: "33px",
};

const searchIconStyle = {
    position: "absolute",
    color: "#aaa",
    left: "10px",
    top: "9px",
    fontSize: "17px",
}

class ChatListSearchBox extends React.Component {
  onChangeSearch = (event) => {
    console.log("On Change Search");
  };

  clearSearch = () => {
    console.log("On Clear Search");
  };

  onKeyUp = (event) => {
    if (event.key === 'Escape') {
      this.clearSearch();
    }
  };

  render() {
    const { search, classes } = this.props;

    return (
      <div className={classes.header}>
        <div className="search" style={searchStyle}>
          <Search className="searchIcon" style={searchIconStyle} />
          <input
            className="searchInput"
            type="text"
            value={search}
            onChange={this.onChangeSearch}
            onKeyUp={this.onKeyUp}
            placeholder="Search by name doesn't work tho"
            style={inputStyle}
          />
          {/* {search.length > 0 ? (
            <Close
              className="clearIcon"
              onClick={this.clearSearch}
            />
          ) : ('')} */}
        </div>
      </div>
    );
  }
}

ChatListSearchBox.propTypes = {
  search: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatListSearchBox);
