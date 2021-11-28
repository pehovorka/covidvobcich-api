export interface MunicipalityCases {
  municipalityId: number;
  municipalityName?: string;
  municipalityPopulation?: number;
  regionId: string;
  regionName?: string;
  districtId: string;
  districtName?: string;
  orpId?: number;
  orpName?: string;
  days: DayCases[];
}

interface DayCases {
  d: string;
  ac: number;
  nc: number;
  nc65: number;
  nc7d: number;
  nc14d: number;
}

export interface MunicipalityCasesMetadata {
  collectionUpdatedAt?: Date;
  sourceUpdatedAt?: Date;
}
