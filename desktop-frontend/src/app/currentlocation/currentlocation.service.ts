import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ICurrentLocation } from './currentlocation';

@Injectable()
export class CurrentLocationService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_CurrentLocation(currentlocation: ICurrentLocation): Observable<ICurrentLocation>{
        return this.apiService.post(this.config.api_url+`/CurrentLocation_Default_Activity/create_CurrentLocation`,currentlocation);

    }
    update_CurrentLocation(currentlocation: ICurrentLocation): Observable<ICurrentLocation>{
        return this.apiService.put(this.config.api_url+`/CurrentLocation_Default_Activity/update_CurrentLocation`,currentlocation);

    }
    search_for_update_CurrentLocation(currentlocation_id: number): Observable<ICurrentLocation>{
        return this.apiService.get(this.config.api_url+`/CurrentLocation_Default_Activity/search_for_update_CurrentLocation/${currentlocation_id}`);

    }
    delete_CurrentLocation(currentlocation: ICurrentLocation): Observable<ICurrentLocation>{
        return this.apiService.delete(this.config.api_url+`/CurrentLocation_Default_Activity/delete_CurrentLocation/${currentlocation.id}`);

    }
    get_all_CurrentLocation(): Observable<ICurrentLocation[]>{
        return this.apiService.get(this.config.api_url+`/CurrentLocation_Default_Activity/get_all_CurrentLocation`);

    }
}