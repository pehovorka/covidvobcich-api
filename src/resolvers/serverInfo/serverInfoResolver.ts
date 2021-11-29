import { config } from "../../config";
import { collections } from "../../utils/collections";

interface ServerInfo {
  apiVersion?: string;
  importerVersion?: string;
}

export const serverInfoResolver = {
  Query: {
    serverInfo: async (): Promise<ServerInfo | undefined> => {
      const collection = collections.serverInfo;

      const docRef = collection.doc(config.metadataDocName);
      const doc = await docRef.get();
      if (!doc.exists) {
        const result: ServerInfo = {
          apiVersion: process.env.npm_package_version,
          importerVersion: undefined,
        };
        return result;
      } else {
        const data = doc.data();

        const result: ServerInfo = {
          apiVersion: process.env.npm_package_version,
          importerVersion: data?.importerVersion,
        };

        return result;
      }
    },
  },
};
