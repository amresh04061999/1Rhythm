export class country {
  id!: number;
  country?: string;
}
export class state {
  id!: number;
  countryId!: number;
  state?: string;
}
export class city {
  id!: number;
  stateId!: number;
  city?: string;
}
