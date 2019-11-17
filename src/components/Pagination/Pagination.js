import React from "react";
import Pagination from "react-js-pagination";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  pagination: {
    width: "100%",
    margin: "20px 0",
    "& > ul": {
      display: "flex",
      justifyContent: "center",
      listStyle: "none",
      margin: 0,
      padding: 0,
      width: "100%"
    },
    "& > ul > li": {
      width: 40,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #2a76d2",
      cursor: "pointer",
      transition: "all .6s",
      backgroundColor: "transparent",
      userSelect: "none",
      "&:hover": {
        backgroundColor: "#2a76d2",
        "& > a": {
          color: "#1A2023"
        }
      }
    },
    "& > ul > li > a": {
      textDecoration: "none",
      color: "#2a76d2"
    },
    "& > ul > li.active": {
      backgroundColor: "#2a76d2",
      "& > a": {
        color: "#FFFFFF"
      }
    },
    "& > ul > li.disabled": {
      cursor: "no-drop",
      "& > a": {
        color: "gray",
        cursor: "no-drop"
      },
      "&:hover": {
        backgroundColor: "transparent",
        "& > a": {
          color: "gray"
        }
      }
    }
  }
}));

const PaginationComponent = props => {
  const classes = useStyles();
  return (
    <div className={classes.pagination}>
      <Pagination
        activePage={props.activePage}
        itemsCountPerPage={props.itemsPerPage}
        totalItemsCount={100}
        pageRangeDisplayed={props.items}
        onChange={props.onChange}
      />
    </div>
  );
};

PaginationComponent.propTypes = {
  activePage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PaginationComponent;
