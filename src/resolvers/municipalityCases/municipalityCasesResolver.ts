import { collections } from "../../utils/collections";

interface MunicipalityCases {
  municipalityId: number;
  municipalityName?: string;
  municipalityPopulation?: number;
  regionId: string;
  regionName?: string;
  districtId: string;
  districtName?: string;
  orpId?: number;
  orpName?: string;
  days: DayCases[];
}

interface DayCases {
  d: string;
  ac: number;
  nc: number;
  nc65: number;
  nc7d: number;
  nc14d: number;
}

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
