import { gql } from "apollo-server-express";

export const vaccineTypeType = gql`
  type VaccineType {
    v: String!
    nd: Int!
    td: Int!
  }
`;
