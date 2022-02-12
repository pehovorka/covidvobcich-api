import { gql } from "apollo-server-express";

export const query = gql`
  type Query {
    municipalityCases(municipalityId: Int!, limit: Int!): MunicipalityCases
    municipalityCasesOverview: [MunicipalityCasesOverview]!
    municipalityCasesMetadata: MunicipalityCasesMetadata
    municipalitySearch(name: String!, limit: Int): [MunicipalitySearchResult]!
    orpVaccinations(orpId: Int!, limit: Int!): OrpVaccinations
    orpVaccinationsMetadata: OrpVaccinationsMetadata
    serverInfo: ServerInfo!
  }
`;
