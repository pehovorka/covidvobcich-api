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

export interface DayCases {
  d: string;
  ac: number;
  nc: number;
  nc65: number;
  nc7d: number;
  nc14d: number;
}

export interface MunicipalityCasesOverview {
  id: MunicipalityCases["municipalityId"];
  mn: MunicipalityCases["municipalityName"];
  dn?: MunicipalityCases["districtName"];
  d: DayCases["d"];
  ac: DayCases["ac"];
  nc: DayCases["nc"];
  rc: number | null;
}
