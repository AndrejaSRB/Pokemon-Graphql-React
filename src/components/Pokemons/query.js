import gql from "graphql-tag";

export const FETCH_ALL_POKEMONS = gql`
query AllPokemones($first: Int!){
  pokemons(first: $first) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    types
    attacks {
      special {
        name
        type
        damage
      }
    }
    image
    attacks {
      special {
        name
        type
        damage
      }
    }
  }
}
`;