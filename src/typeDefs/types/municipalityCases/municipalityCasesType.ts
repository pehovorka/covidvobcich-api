import { gql } from "apollo-server-express";

export const municipalityCasesType = gql`
  type MunicipalityCases {
    municipalityId: Int!
    municipalityName: String
    municipalityPopulation: Int
    regionId: String!
    regionName: String
    districtId: String!
    districtName: String
    orpId: Int
    orpName: String
    days: [DayCases!]!
  }
`;
