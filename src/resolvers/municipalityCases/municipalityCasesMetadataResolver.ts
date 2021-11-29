import { config } from "../../config";
import { collections } from "../../utils/collections";

interface MunicipalityCasesMetadata {
  collectionUpdatedAt?: Date;
  sourceUpdatedAt?: Date;
}

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
