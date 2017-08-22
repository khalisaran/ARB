import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IUsedUs } from './usedus';

@Injectable()
export class UsedUsService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_UsedUs(usedus: IUsedUs): Observable<IUsedUs>{
        return this.apiService.post(this.config.api_url+`/UsedUs_Activity/create_UsedUs`,usedus);

    }
    update_UsedUs(usedus: IUsedUs): Observable<IUsedUs>{
        return this.apiService.put(this.config.api_url+`/UsedUs_Activity/update_UsedUs`,usedus);

    }
    search_for_update_UsedUs(usedus_id: number): Observable<IUsedUs>{
        return this.apiService.get(this.config.api_url+`/UsedUs_Activity/delete_UsedUs/${usedus_id}`);

    }
    delete_UsedUs(usedus: IUsedUs): Observable<IUsedUs>{
        return this.apiService.delete(this.config.api_url+`/UsedUs_Activity/search_for_update_UsedUs/${usedus.id}`);

    }
    get_all_UsedUs(): Observable<IUsedUs[]>{
        return this.apiService.get(this.config.api_url+`/UsedUs_Activity/get_all_UsedUs`).map((res:Response) => res)
                                .catch((error:any) => Observable.throw(error || 'Server error')); 

    }
}