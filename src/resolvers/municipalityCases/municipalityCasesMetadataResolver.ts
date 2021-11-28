import { config } from "../../config";
import { MunicipalityCasesMetadata } from "../../types/municipalityCases";
import { collections } from "../../utils/collections";

export const municipalityCasesMetadataResolver = {
  Query: {
    municipalityCasesMetadata: async (): Promise<
      MunicipalityCasesMetadata | undefined
    > => {
      const collection = collections.municipalityCases;

      const docRef = collection.doc(config.metadataDocName);
      const doc = await docRef.get();
      if (!doc.exists) {
        return undefined;
      } else {
        const data = doc.data();

        const result: MunicipalityCasesMetadata = {
          collectionUpdatedAt: data?.collectionUpdatedAt.toDate(),
          sourceUpdatedAt: data?.sourceUpdatedAt.toDate(),
        };

        return result;
      }
    },
  },
};
