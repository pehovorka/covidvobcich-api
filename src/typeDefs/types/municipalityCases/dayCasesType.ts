import { gql } from "apollo-server-express";

export const dayCasesType = gql`
  type DayCases {
    d: String!
    ac: Int!
    nc: Int!
    nc65: Int!
    nc7d: Int!
    nc14d: Int!
  }
`;
