import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IEngineer } from './engineer';

@Injectable()
export class EngineerService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Engineer(engineer: IEngineer): Observable<IEngineer>{
        return this.apiService.post(this.config.api_url+`/Engineer/create_Engineer`,engineer);

    }
    update_Engineer(engineer: IEngineer): Observable<IEngineer>{
        return this.apiService.put(this.config.api_url+`/Engineer/update_Engineer`,engineer);

    }
    search_for_update_Engineer(engineer_id: number): Observable<IEngineer>{
        return this.apiService.get(this.config.api_url+`/Engineer/search_for_update_Engineer/${engineer_id}`);

    }
    delete_Engineer(engineer: IEngineer): Observable<IEngineer>{
        return this.apiService.delete(this.config.api_url+`/Engineer/delete_Engineer/${engineer.id}`);

    }
    get_all_Engineer(): Observable<IEngineer[]>{
        return this.apiService.get(this.config.api_url+`/Engineer/get_all_Engineer`);

    }
}