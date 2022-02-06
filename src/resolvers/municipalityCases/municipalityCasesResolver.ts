import { collections } from "../../utils/collections";
import { MunicipalityCases } from "./types";

interface MunicipalityCasesArgs {
  municipalityId: number;
  limit: number;
}

export const municipalityCasesResolver = {
  Query: {
    municipalityCases: async (
      _: unknown,
      { municipalityId, limit }: MunicipalityCasesArgs
    ): Promise<MunicipalityCases | undefined> => {
      const collection = collections.municipalityCases;

      const docRef = collection.doc(municipalityId.toString());
      const doc = await docRef.get();
      if (!doc.exists) {
        return undefined;
      } else {
        const data = doc.data() as MunicipalityCases;

        const result = {
          ...data,
          days: data.days.slice(-limit),
        };

        // Return orpId 1000 for Prague.
        // Source data contain "orpId": 0 and "orpName": "nezařazení" for some reason.
        if (data.municipalityId === 554782) {
          (result.orpId = 1000), (result.orpName = "Praha");
        }

        return result;
      }
    },
  },
};
