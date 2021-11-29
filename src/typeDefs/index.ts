import { query } from "./query";
import {
  municipalityCasesType,
  dayCasesType,
  municipalityCasesMetadataType,
} from "./types/municipalityCases";
import { municipalitySearchResultType } from "./types/search/municipalitySearchResultType";
import { serverInfoType } from "./types/serverInfo/serverInfoType";

export const typeDefs = [
  query,
  municipalityCasesType,
  dayCasesType,
  municipalityCasesMetadataType,
  municipalitySearchResultType,
  serverInfoType,
];
