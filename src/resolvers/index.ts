import { municipalityCasesMetadataResolver } from "./municipalityCases/municipalityCasesMetadataResolver";
import { municipalityCasesResolver } from "./municipalityCases/municipalityCasesResolver";
import { municipalitySearchResultsResolver } from "./search/municipalitySearchResultsResolver";
import { serverInfoResolver } from "./serverInfo/serverInfoResolver";

export const resolvers = [
  municipalityCasesResolver,
  municipalityCasesMetadataResolver,
  municipalitySearchResultsResolver,
  serverInfoResolver,
];
