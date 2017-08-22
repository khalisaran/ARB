import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IApproverOrProjectManager } from './approverorprojectmanager';

@Injectable()
export class ApproverOrProjectManagerService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_ApproverOrProjectManager(approverorprojectmanager: IApproverOrProjectManager): Observable<IApproverOrProjectManager>{
        return this.apiService.post(this.config.api_url+`/ApproverOrProjectManager/create_ApproverOrProjectManager`,approverorprojectmanager);

    }
    update_ApproverOrProjectManager(approverorprojectmanager: IApproverOrProjectManager): Observable<IApproverOrProjectManager>{
        return this.apiService.put(this.config.api_url+`/ApproverOrProjectManager/update_ApproverOrProjectManager`,approverorprojectmanager);

    }
    search_for_update_ApproverOrProjectManager(approverorprojectmanager_id: number): Observable<IApproverOrProjectManager>{
        return this.apiService.get(this.config.api_url+`/ApproverOrProjectManager/search_for_update_ApproverOrProjectManager/${approverorprojectmanager_id}`);

    }
    delete_ApproverOrProjectManager(approverorprojectmanager: IApproverOrProjectManager): Observable<IApproverOrProjectManager>{
        return this.apiService.delete(this.config.api_url+`/ApproverOrProjectManager/delete_ApproverOrProjectManager/${approverorprojectmanager.id}`);

    }
    get_all_ApproverOrProjectManager(): Observable<IApproverOrProjectManager[]>{
        return this.apiService.get(this.config.api_url+`/ApproverOrProjectManager/get_all_ApproverOrProjectManager`);

    }
}