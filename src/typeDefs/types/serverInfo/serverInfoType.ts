import { gql } from "apollo-server-express";

export const serverInfoType = gql`
  type ServerInfo {
    apiVersion: String
    importerVersion: String
  }
`;
