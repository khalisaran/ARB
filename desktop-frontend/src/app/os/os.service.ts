import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IOS } from './os';

@Injectable()
export class OSService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_OS(os: IOS): Observable<IOS>{
        return this.apiService.post(this.config.api_url+`/OS_Activity/create_OS`,os);

    }
    update_OS(os: IOS): Observable<IOS>{
        return this.apiService.put(this.config.api_url+`/OS_Activity/update_OS`,os);

    }
    search_for_update_OS(os_id: number): Observable<IOS>{
        return this.apiService.get(this.config.api_url+`/OS_Activity/search_for_update_OS/${os_id}`);

    }
    delete_OS(os: IOS): Observable<IOS>{
        return this.apiService.delete(this.config.api_url+`/OS_Activity/delete_OS/${os.id}`);

    }
    get_all_OS(): Observable<IOS[]>{
        return this.apiService.get(this.config.api_url+`/OS_Activity/get_all_OS`);

    }
}