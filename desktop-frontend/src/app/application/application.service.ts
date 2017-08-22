import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IApplication } from './application';

@Injectable()
export class ApplicationService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Application(application: IApplication): Observable<IApplication>{
        return this.apiService.post(this.config.api_url+`/Application_Activity/create_Application`,application);

    }
    update_Application(application: IApplication): Observable<IApplication>{
        return this.apiService.put(this.config.api_url+`/Application_Activity/update_Application`,application);

    }
    search_for_update_Application(application_id: number): Observable<IApplication>{
        return this.apiService.get(this.config.api_url+`/Application_Activity/search_for_update_Application/${application_id}`);

    }
    delete_Application(application: IApplication): Observable<IApplication>{
        return this.apiService.delete(this.config.api_url+`/Application_Activity/delete_Application/${application.id}`);

    }
    get_all_Application(): Observable<IApplication[]>{
        return this.apiService.get(this.config.api_url+`/Application_Activity/get_all_Application`);

    }
}