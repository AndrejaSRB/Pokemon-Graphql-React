import React, { useState, useEffect, Fragment } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import Loading from "../Loading/Loading";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Pokemon from "../Pokemon/Pokemon";
import Pagination from "../Pagination/Pagination";
import { FETCH_ALL_POKEMONS } from "./query";

const useStyles = makeStyles(theme => ({
  heading: {
    padding: 10
  }
}));

const POKEMONS_PER_PAGE = 5;

const Pokemons = props => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(1);
  const [loadPokemons, { loading, error, data, fetchMore }] = useLazyQuery(
    FETCH_ALL_POKEMONS,
    {
      fetchPolicy: "cache-and-network"
    }
  );

  useEffect(() => {
    loadPokemons({
      variables: { first: POKEMONS_PER_PAGE * +props.match.params.page }
    });
    setActivePage(+props.match.params.page);
  }, [props.match.params.page, loadPokemons]);

  const renderPokemon = pokemon => (
    <Grid item xs={12} key={pokemon.id}>
      <Pokemon pokemon={pokemon} />
    </Grid>
  );

  const onChangePagination = pageNumber => {
    setActivePage(pageNumber);
    props.history.push(`/${pageNumber}`);
    fetchNewPokemons();
  };

  const fetchNewPokemons = async () => {
    try {
      await fetchMore({
        variables: {
          first: POKEMONS_PER_PAGE * +props.match.params.page
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          const allPokemons = [...fetchMoreResult.pokemons];
          const currentPokemons = filterPokemons(allPokemons);
          return Object.assign({}, prev, {
            pokemons: currentPokemons
          });
        }
      });
    } catch {
      console.log("Upps something went wrong.");
    }
  };

  const filterPokemons = list => {
    const unusedPokemons = POKEMONS_PER_PAGE * +props.match.params.page - POKEMONS_PER_PAGE;
    const allPokemons = [...list];
    allPokemons.splice(0, unusedPokemons);
    return allPokemons;
  };

  const renderPokemons = loading ? (
    <Loading />
  ) : (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          className={classes.heading}
        >
          Pokemons
        </Typography>
        <Grid container>
          {data && filterPokemons(data.pokemons.map(renderPokemon))}
        </Grid>
        <Pagination
          onChange={onChangePagination}
          activePage={activePage}
          itemsPerPage={POKEMONS_PER_PAGE}
          items={POKEMONS_PER_PAGE}
        />
      </Container>
    </React.Fragment>
  );

  if (error) return `Error! ${error.message}`;

  return <Fragment>{renderPokemons}</Fragment>;
};

export default Pokemons;
