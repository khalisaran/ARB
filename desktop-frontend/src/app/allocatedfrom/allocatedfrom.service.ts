import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IAllocatedFrom } from './allocatedfrom';

@Injectable()
export class AllocatedFromService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_AllocatedFrom(allocatedfrom: IAllocatedFrom): Observable<IAllocatedFrom>{
        return this.apiService.post(this.config.api_url+`/AllocatedFrom/create_AllocatedFrom`,allocatedfrom);

    }
    update_AllocatedFrom(allocatedfrom: IAllocatedFrom): Observable<IAllocatedFrom>{
        return this.apiService.put(this.config.api_url+`/AllocatedFrom/update_AllocatedFrom`,allocatedfrom);

    }
    search_for_update_AllocatedFrom(allocatedfrom_id: number): Observable<IAllocatedFrom>{
        return this.apiService.get(this.config.api_url+`/AllocatedFrom/search_for_update_AllocatedFrom/${allocatedfrom_id}`);

    }
    delete_AllocatedFrom(allocatedfrom: IAllocatedFrom): Observable<IAllocatedFrom>{
        return this.apiService.delete(this.config.api_url+`/AllocatedFrom/delete_AllocatedFrom/${allocatedfrom.id}`);

    }
    get_all_AllocatedFrom(): Observable<IAllocatedFrom[]>{
        return this.apiService.get(this.config.api_url+`/AllocatedFrom/get_all_AllocatedFrom`);

    }
}