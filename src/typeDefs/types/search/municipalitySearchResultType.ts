import { gql } from "apollo-server-express";

export const municipalitySearchResultType = gql`
  type MunicipalitySearchResult {
    municipalityId: Int!
    municipalityName: String!
    districtName: String
  }
`;
