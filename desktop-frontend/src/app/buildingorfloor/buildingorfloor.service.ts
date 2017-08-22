import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IBuildingOrFloor } from './buildingorfloor';

@Injectable()
export class BuildingOrFloorService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_BuildingOrFloor(buildingorfloor: IBuildingOrFloor): Observable<IBuildingOrFloor>{
        return this.apiService.post(this.config.api_url+`/BuildingOrFloorActivity/create_BuildingOrFloor`,buildingorfloor);

    }
    update_BuildingOrFloor(buildingorfloor: IBuildingOrFloor): Observable<IBuildingOrFloor>{
        return this.apiService.put(this.config.api_url+`/BuildingOrFloorActivity/update_BuildingOrFloor`,buildingorfloor);

    }
    search_for_update_BuildingOrFloor(buildingorfloor_id: number): Observable<IBuildingOrFloor>{
        return this.apiService.get(this.config.api_url+`/BuildingOrFloorActivity/search_for_update_BuildingOrFloor/${buildingorfloor_id}`);

    }
    delete_BuildingOrFloor(buildingorfloor: IBuildingOrFloor): Observable<IBuildingOrFloor>{
        return this.apiService.delete(this.config.api_url+`/BuildingOrFloorActivity/delete_BuildingOrFloor/${buildingorfloor.id}`);

    }
    get_all_BuildingOrFloor(): Observable<IBuildingOrFloor[]>{
        return this.apiService.get(this.config.api_url+`/BuildingOrFloorActivity/get_all_BuildingOrFloor`);

    }
}