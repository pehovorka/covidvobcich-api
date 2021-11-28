import { municipalityCasesMetadataResolver } from "./municipalityCases/municipalityCasesMetadataResolver";
import { municipalityCasesResolver } from "./municipalityCases/municipalityCasesResolver";
import { municipalitySearchResultsResolver } from "./search/municipalitySearchResultsResolver";
export const resolvers = [
  municipalityCasesResolver,
  municipalityCasesMetadataResolver,
  municipalitySearchResultsResolver,
];
