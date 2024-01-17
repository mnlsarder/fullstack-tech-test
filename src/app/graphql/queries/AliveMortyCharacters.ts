import { gql } from "graphql-request";

const AliveMortyCharacters = gql`
  query getAliveMortyCharacters($page: Int) {
    characters(page: $page, filter: { name: "Morty", status: "alive" }) {
      info {
        count
        pages
        next
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export default AliveMortyCharacters;
