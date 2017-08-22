import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IModeOfUse } from './modeofuse';

@Injectable()
export class ModeOfUseService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_ModeOfUse(modeofuse: IModeOfUse): Observable<IModeOfUse>{
        return this.apiService.post(this.config.api_url+`/ModeOfUse/create_ModeOfUse`,modeofuse);

    }
    update_ModeOfUse(modeofuse: IModeOfUse): Observable<IModeOfUse>{
        return this.apiService.put(this.config.api_url+`/ModeOfUse/update_ModeOfUse`,modeofuse);

    }
    search_for_update_ModeOfUse(modeofuse_id: number): Observable<IModeOfUse>{
        return this.apiService.get(this.config.api_url+`/ModeOfUse/search_for_update_ModeOfUse/${modeofuse_id}`);

    }
    delete_ModeOfUse(modeofuse: IModeOfUse): Observable<IModeOfUse>{
        return this.apiService.delete(this.config.api_url+`/ModeOfUse/delete_ModeOfUse/${modeofuse.id}`);

    }
    get_all_ModeOfUse(): Observable<IModeOfUse[]>{
        return this.apiService.get(this.config.api_url+`/ModeOfUse/get_all_ModeOfUse`);

    }
}