import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ISg } from './sg';

@Injectable()
export class SgService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Sg(sg: ISg): Observable<ISg>{
        return this.apiService.post(this.config.api_url+``,sg);

    }
    update_Sg(sg: ISg): Observable<ISg>{
        return this.apiService.put(this.config.api_url+``,sg);

    }
    search_for_update_Sg(sg_id: number): Observable<ISg>{
        return this.apiService.get(this.config.api_url+`${sg_id}`);

    }
    delete_Sg(sg: ISg): Observable<ISg>{
        return this.apiService.delete(this.config.api_url+`${sg.id}`);

    }
    get_all_Sg(): Observable<ISg[]>{
        return this.apiService.get(this.config.api_url+``);

    }
}