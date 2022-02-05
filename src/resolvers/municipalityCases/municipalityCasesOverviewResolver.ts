import { config } from "../../config";
import { collections } from "../../utils/collections";
import { MunicipalityCasesOverview } from "./types";

export const municipalityCasesOverviewResolver = {
  Query: {
    municipalityCasesOverview: async (): Promise<
      MunicipalityCasesOverview | undefined
    > => {
      const collection = collections.municipalityCases;

      const docRef = collection.doc(config.overviewDocName);
      const doc = await docRef.get();
      if (!doc.exists) {
        return undefined;
      } else {
        const docData = doc.data();

        if (!docData) return;

        const data = docData.municipalityCases as MunicipalityCasesOverview;

        return data;
      }
    },
  },
};
