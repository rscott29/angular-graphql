import gql from "graphql-tag";

export const CAT_MUTATION = gql`
  mutation CreateCat($cat: CreateCatInput) {
    createCat(createCatInput: $cat) {
      name
      breed
      age
    }
  }
`;
