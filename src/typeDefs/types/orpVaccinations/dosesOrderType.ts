import { gql } from "apollo-server-express";

export const dosesOrderType = gql`
  type DosesOrder {
    o: Int!
    nd: Int!
    td: Int!
  }
`;
