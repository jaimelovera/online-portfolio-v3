import React, { Component } from "react";
import PropTypes from "prop-types";

import CircularProgress from "@material-ui/core/CircularProgress";

class PageLoadingSpinner extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.pageLoaded === true) {
      return true;
    }
  }
  render() {
    const { pageLoaded } = this.props;
    return !pageLoaded ? (
      <CircularProgress
        size={80}
        thickness={1}
        color="secondary"
        style={{
          opacity: 0,
          position: "fixed",
          top: "30%",
          left: "50%",
          marginLeft: -40,
          animation: "fadeIn 2s ease-in forwards",
          animationDelay: "1.75s",
        }}
      />
    ) : null;
  }
}

PageLoadingSpinner.propTypes = {
  pageLoaded: PropTypes.bool.isRequired,
};

export default PageLoadingSpinner;
