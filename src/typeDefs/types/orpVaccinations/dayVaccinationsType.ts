import { gql } from "apollo-server-express";

export const dayVaccinationsType = gql`
  type DayVaccinations {
    date: String!
    doses: [DosesOrder!]!
    vaccines: [VaccineType!]!
  }
`;
