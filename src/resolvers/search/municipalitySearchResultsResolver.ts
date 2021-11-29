import Fuse from "fuse.js";
import diacritics from "diacritics";

import { MunicipalitySearchResult } from "../../types/municipalitySearch";
import municipalities = require("./assets/municipalities");

interface municipalitySearchResultsArgs {
  name: string;
  limit: number;
}

export const municipalitySearchResultsResolver = {
  Query: {
    municipalitySearch: (
      _: unknown,
      { name, limit }: municipalitySearchResultsArgs
    ): MunicipalitySearchResult[] | undefined => {
      const fuseOptions: Fuse.IFuseOptions<MunicipalitySearchResult> = {
        threshold: 0.2,
        keys: ["municipalityName"],
        getFn: (obj) => {
          const value = diacritics.remove(obj.municipalityName);
          return value;
        },
      };
      const fuse = new Fuse(municipalities.municipalities, fuseOptions);

      const searchResults = fuse.search(diacritics.remove(name));

      const result = searchResults
        .map((searchResult) => searchResult.item)
        .slice(0, limit);

      return result;
    },
  },
};
