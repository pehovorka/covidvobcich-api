import { query } from "./query";
import {
  municipalityCasesType,
  dayCasesType,
  municipalityCasesMetadataType,
} from "./types/municipalityCases";

export const typeDefs = [
  query,
  municipalityCasesType,
  dayCasesType,
  municipalityCasesMetadataType,
];
