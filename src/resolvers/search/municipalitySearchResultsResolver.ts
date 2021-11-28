import Fuse from "fuse.js";

import { MunicipalitySearchResult } from "../../types/municipalitySearch";
import municipalities = require("./assets/municipalities");

interface municipalitySearchResultsArgs {
  name: string;
}

export const municipalitySearchResultsResolver = {
  Query: {
    municipalitySearch: (
      _: unknown,
      { name }: municipalitySearchResultsArgs
    ): MunicipalitySearchResult[] | undefined => {
      const fuseOptions: Fuse.IFuseOptions<MunicipalitySearchResult> = {
        threshold: 0.2,
        keys: ["municipalityName"],
      };
      const fuse = new Fuse(municipalities.municipalities, fuseOptions);

      const searchResults = fuse.search(name);

      const result = searchResults.map((searchResult) => searchResult.item);
      return result;
    },
  },
};
