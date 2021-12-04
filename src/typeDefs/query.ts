import { gql } from "apollo-server-express";

export const query = gql`
  type Query {
    municipalityCases(municipalityId: Int!, limit: Int!): MunicipalityCases
    municipalityCasesMetadata: MunicipalityCasesMetadata
    municipalitySearch(name: String!, limit: Int): [MunicipalitySearchResult]!
    orpVaccinations(orpId: Int!, limit: Int!): OrpVaccinations
    serverInfo: ServerInfo!
  }
`;
