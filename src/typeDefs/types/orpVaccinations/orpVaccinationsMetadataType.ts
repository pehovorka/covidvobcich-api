import { gql } from "apollo-server-express";

export const orpVaccinationsMetadataType = gql`
  type OrpVaccinationsMetadata {
    sourceUpdatedAt: String
    collectionUpdatedAt: String
  }
`;
