import { Injectable } from '@angular/core';
import {FacilityType} from "../model/facility/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilictyTypeService {
  facilityTypeList: FacilityType[] = [
    {
      id: 1,
      name: "Villa"
    }, {
      id: 2,
      name: "House"
    }, {
      id: 3,
      name: "Room"
  }];
  constructor() { }
  getAll() {
    return this.facilityTypeList;
  }
}
