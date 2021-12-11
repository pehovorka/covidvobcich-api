import { gql } from "apollo-server-express";

export const vaccineNamesType = gql`
  type VaccineNames {
    vaccineId: String!
    vaccineName: String!
  }
`;
