import { gql } from "graphql-request";

const Character = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      origin {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      location {
        id
        name
        type
        dimension
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export default Character;
