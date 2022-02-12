import { municipalityCasesResolver } from "./municipalityCases/municipalityCasesResolver";
import { municipalityCasesOverviewResolver } from "./municipalityCases/municipalityCasesOverviewResolver";
import { municipalityCasesMetadataResolver } from "./municipalityCases/municipalityCasesMetadataResolver";
import { municipalitySearchResultsResolver } from "./search/municipalitySearchResultsResolver";
import { serverInfoResolver } from "./serverInfo/serverInfoResolver";
import { orpVaccinationsReslover } from "./orpVaccinations/orpVaccinationsResolver";
import { orpVaccinationsMetadataResolver } from "./orpVaccinations/orpVaccinationsMetadataResolver";

export const resolvers = [
  municipalityCasesResolver,
  municipalityCasesOverviewResolver,
  municipalityCasesMetadataResolver,
  municipalitySearchResultsResolver,
  serverInfoResolver,
  orpVaccinationsReslover,
  orpVaccinationsMetadataResolver,
];
