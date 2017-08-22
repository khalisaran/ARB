import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IPoentity } from './poentity';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class PoentityService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService,private shared_service: SharedService){}

    create_Poentity(poentity: IPoentity): Observable<IPoentity>{
        console.log(this.shared_service.baseUrl+this.config.api_url+'/Poentity_Activity/create_Poentity');
       //  return this._http.post(this.shared_service.baseUrl+this.config.api_url+'/Poentity_Activity/create_Poentity',poentity)
         //                       .map((res:Response) => res.json())
           //                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
        return this.apiService.post(this.config.api_url+'/Poentity_Activity/create_Poentity',poentity);

    }
    update_Poentity(poentity: IPoentity): Observable<IPoentity>{
        return this.apiService.put(this.config.api_url+`Poentity_Activity/update_Poentity`,poentity);

    }
    search_for_update_Poentity(poentity_id: number): Observable<IPoentity>{
        return this.apiService.get(this.config.api_url+`/Poentity_Activity/search_for_update_Poentity/${poentity_id}`);

    }
    delete_Poentity(poentity: IPoentity): Observable<IPoentity>{
        return this.apiService.delete(this.config.api_url+`/Poentity_Activity/delete_Poentity/${poentity.id}`);

    }

    get_all_Poentity(): Observable<IPoentity[]>{
        return this.apiService.get(this.config.api_url+`/Poentity_Activity/get_all_Poentity`)
        .map((res:Response) => res)
                                .catch((error:any) => Observable.throw(error || 'Server error')); 
    }
}