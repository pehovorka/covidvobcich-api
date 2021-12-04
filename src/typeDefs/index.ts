import { query } from "./query";
import {
  municipalityCasesType,
  dayCasesType,
  municipalityCasesMetadataType,
} from "./types/municipalityCases";
import {
  dayVaccinationsType,
  dosesOrderType,
  orpVaccinationsType,
  vaccineNamesType,
  vaccineTypeType,
  orpVaccinationsMetadataType,
} from "./types/orpVaccinations";
import { municipalitySearchResultType } from "./types/search/municipalitySearchResultType";
import { serverInfoType } from "./types/serverInfo/serverInfoType";

export const typeDefs = [
  query,
  municipalityCasesType,
  dayCasesType,
  municipalityCasesMetadataType,
  municipalitySearchResultType,
  serverInfoType,
  dayVaccinationsType,
  dosesOrderType,
  orpVaccinationsType,
  vaccineNamesType,
  vaccineTypeType,
  orpVaccinationsMetadataType,
];
