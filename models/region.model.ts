//tỉnh thành
export interface Provinces {
  id: string;
  name: string;
  type: number;
  typeText: string;
  slug: string;
}

export interface District extends Provinces {
  provinceId: string;
}

export interface Ward extends Provinces {
  districtId: string;
}
