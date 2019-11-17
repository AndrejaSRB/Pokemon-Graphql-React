import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import uniqid from "uniqid";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: "100%",
    margin: "20px auto",
    padding: 20,
    textAlign: "center"
  },
  control: {
    padding: theme.spacing(2)
  },
  attackInformation: {
    margin: "5px 0",
    width: "100%"
  },
  padding: {
    padding: "5px 0"
  },
  image: {
    width: '100%'
}
}));

const Pokemon = props => {
  const classes = useStyles();
  const { pokemon } = props;

  const renderTypes = type => (
    <Typography component="h1" variant="body2" align="left" key={uniqid()}>
      {type}
    </Typography>
  );

  const renderInformation = pokemon ? (
    <Grid container>
      <Grid container justify="space-between" className={classes.padding}>
        <Grid item md={6}>
          <Typography component="div" variant="subtitle2" align="left">
            Pokemon name
          </Typography>
        </Grid>
        <Grid item md={6}>
          {pokemon.name}
        </Grid>
      </Grid>
      <Grid container className={classes.padding}>
        <Grid item xs={12}>
          <Typography component="div" variant="subtitle2" align="left">
            Pokemon types
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {pokemon.types.map(renderTypes)}
        </Grid>
      </Grid>
      <Grid container className={classes.padding}>
        <Grid item xs={12}>
          <Typography component="div" variant="subtitle2" align="left">
            Pokemon weight
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="div" variant="body2" align="left">
            min-weight: {pokemon.weight.minimum}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="div" variant="body2" align="left">
            max-weight: {pokemon.weight.maximum}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.padding}>
        <Grid item xs={12}>
          <Typography component="div" variant="subtitle2" align="left">
            Pokemon height
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="div" variant="body2" align="left">
            min-height: {pokemon.height.minimum}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="div" variant="body2" align="left">
            max-height: {pokemon.height.maximum}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  ) : null;

  const renderAttack = attack => (
    <div key={uniqid()} className={classes.attackInformation}>
      <Grid container justify="space-between">
        <Grid item md={6}>
          <Typography component="div" variant="body2" align="left">
            Name
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="div" variant="body2" align="left">
            {attack.name}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item md={6}>
          <Typography component="div" variant="body2" align="left">
            Type
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="div" variant="body2" align="left">
            {attack.type}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item md={6}>
          <Typography component="div" variant="body2" align="left">
            Damage
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography component="div" variant="body2" align="left">
            {attack.damage}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );

  const renderSpecialAttacks = props.pokemon ? (
    <Grid container className={classes.padding}>
      <Typography component="div" variant="subtitle2" align="left">
        Special attacks
      </Typography>
      <Grid container>
        {pokemon.attacks && pokemon.attacks.special.map(renderAttack)}
      </Grid>
    </Grid>
  ) : null;

  const pictureUrl = pokemon.image ? pokemon.image : null;
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img className={classes.image} src={pictureUrl} alt={pokemon && pokemon.name} />
        </Grid>
        <Grid item xs={12} md={3}>
          {renderInformation}
        </Grid>
        <Grid item xs={12} md={3}>
          {renderSpecialAttacks}
        </Grid>
      </Grid>
    </Paper>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
