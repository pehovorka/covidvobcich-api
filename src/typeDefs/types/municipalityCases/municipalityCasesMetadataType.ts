import { gql } from "apollo-server-express";

export const municipalityCasesMetadataType = gql`
  type MunicipalityCasesMetadata {
    sourceUpdatedAt: String
    collectionUpdatedAt: String
  }
`;
