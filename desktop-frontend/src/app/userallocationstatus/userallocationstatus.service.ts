import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IUserAllocationStatus } from './userallocationstatus';

@Injectable()
export class UserAllocationStatusService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_UserAllocationStatus(userallocationstatus: IUserAllocationStatus): Observable<IUserAllocationStatus>{
        return this.apiService.post(this.config.api_url+`/UserAllocationStatus_Activity/create_UserAllocationStatus`,userallocationstatus);

    }
    update_UserAllocationStatus(userallocationstatus: IUserAllocationStatus): Observable<IUserAllocationStatus>{
        return this.apiService.put(this.config.api_url+`/UserAllocationStatus_Activity/update_UserAllocationStatus`,userallocationstatus);

    }
    search_for_update_UserAllocationStatus(userallocationstatus_id: number): Observable<IUserAllocationStatus>{
        return this.apiService.get(this.config.api_url+`/UserAllocationStatus_Activity/search_for_update_UserAllocationStatus${userallocationstatus_id}`);

    }
    delete_UserAllocationStatus(userallocationstatus: IUserAllocationStatus): Observable<IUserAllocationStatus>{
        return this.apiService.delete(this.config.api_url+`/UserAllocationStatus_Activity/delete_UserAllocationStatus${userallocationstatus.id}`);

    }
    get_all_UserAllocationStatus(): Observable<IUserAllocationStatus[]>{
        return this.apiService.get(this.config.api_url+`/UserAllocationStatus_Activity/get_all_UserAllocationStatus`).map((res:Response) => res)
                                .catch((error:any) => Observable.throw(error || 'Server error')); 

    }
}