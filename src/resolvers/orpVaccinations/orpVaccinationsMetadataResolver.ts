import { config } from "../../config";
import { collections } from "../../utils/collections";

interface OrpVaccinationsMetadata {
  collectionUpdatedAt?: Date;
  sourceUpdatedAt?: Date;
}

export const orpVaccinationsMetadataResolver = {
  Query: {
    orpVaccinationsMetadata: async (): Promise<
      OrpVaccinationsMetadata | undefined
    > => {
      const collection = collections.orpVaccinations;

      const docRef = collection.doc(config.metadataDocName);
      const doc = await docRef.get();
      if (!doc.exists) {
        return undefined;
      } else {
        const data = doc.data();

        const result: OrpVaccinationsMetadata = {
          collectionUpdatedAt: data?.collectionUpdatedAt.toDate(),
          sourceUpdatedAt: data?.sourceUpdatedAt.toDate(),
        };

        return result;
      }
    },
  },
};
