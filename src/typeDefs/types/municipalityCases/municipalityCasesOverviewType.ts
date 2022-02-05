import { gql } from "apollo-server-express";

export const municipalityCasesOverviewType = gql`
  type MunicipalityCasesOverview {
    id: Int!
    mn: String
    dn: String
    d: String!
    ac: Int!
    nc: Int!
    rc: Float
  }
`;
