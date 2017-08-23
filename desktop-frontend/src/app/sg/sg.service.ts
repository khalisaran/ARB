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
        return this.apiService.post(this.config.api_url+`/Sg_Activity/create_Sg`,sg);

    }
    update_Sg(sg: ISg): Observable<ISg>{
        return this.apiService.put(this.config.api_url+`/Sg_Activity/update_Sg`,sg);

    }
    search_for_update_Sg(sg_id: number): Observable<ISg>{
        return this.apiService.get(this.config.api_url+`/Sg_Activity/search_for_update_Sg/${sg_id}`);

    }
    delete_Sg(sg: ISg): Observable<ISg>{
        return this.apiService.delete(this.config.api_url+`/Sg_Activity/delete_Sg/${sg.id}`);

    }
    get_all_Sg(): Observable<ISg[]>{
        return this.apiService.get(this.config.api_url+`/Sg_Activity/get_all_Sg`);

    }
}