import gql from "graphql-tag";

export const CAT_QUERY = gql`
  {
    getCats {
      name
      breed
      age
    }
  }
`;
