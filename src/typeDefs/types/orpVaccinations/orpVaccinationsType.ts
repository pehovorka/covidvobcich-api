import { gql } from "apollo-server-express";

export const orpVaccinationsType = gql`
  type OrpVaccinations {
    orpId: Int!
    orpName: String!
    orpPopulation: Int
    days: [DayVaccinations!]!
    vaccineNames: [VaccineNames!]!
  }
`;
