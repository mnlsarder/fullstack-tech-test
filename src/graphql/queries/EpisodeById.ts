import { gql } from "graphql-request";

const EpisodeById = gql`
  query Episodes($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      id
      name
      air_date
      episode
      characters {
        id
      }
    }
  }
`;

export default EpisodeById;
