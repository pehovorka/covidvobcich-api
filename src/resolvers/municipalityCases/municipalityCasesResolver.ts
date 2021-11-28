import { MunicipalityCases } from "../../types/municipalityCases";
import { collections } from "../../utils/collections";

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

        return result;
      }
    },
  },
};
