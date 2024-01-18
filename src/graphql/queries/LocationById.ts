import { gql } from "graphql-request";

const LocationById = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      residents {
        id
      }
      dimension
    }
  }
`;

export default LocationById;
