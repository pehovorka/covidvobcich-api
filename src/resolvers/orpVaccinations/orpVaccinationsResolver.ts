import { collections } from "../../utils/collections";

interface Orp {
  orpId: number;
  orpName: string;
  orpPopulation?: number;
}

interface OrpVaccinations extends Orp {
  days: DayVaccinations[];
  vaccineNames: VaccineNames[];
}

interface DayVaccinations {
  date: string;
  doses: DosesOrder[];
  vaccines: VaccineType[];
}

interface DosesOrder {
  o: number;
  nd: number;
  td: number;
}

interface VaccineType {
  v: string;
  nd: number;
  td: number;
}

interface VaccineNames {
  vaccineId: string;
  vaccineName: string;
}

interface OrpVaccinationsArgs {
  orpId: number;
  limit: number;
}

export const orpVaccinationsReslover = {
  Query: {
    orpVaccinations: async (
      _: unknown,
      { orpId, limit }: OrpVaccinationsArgs
    ): Promise<OrpVaccinations | undefined> => {
      const collection = collections.orpVaccinations;

      const docRef = collection.doc(orpId.toString());
      const doc = await docRef.get();
      if (!doc.exists) {
        return undefined;
      } else {
        const data = doc.data() as OrpVaccinations;

        const result = {
          ...data,
          days: data.days.slice(-limit),
        };

        return result;
      }
    },
  },
};
