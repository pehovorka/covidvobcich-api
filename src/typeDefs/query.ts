import { gql } from "apollo-server-express";

export const query = gql`
  type Query {
    municipalityCases(municipalityId: Int!, limit: Int!): MunicipalityCases
  }
`;
