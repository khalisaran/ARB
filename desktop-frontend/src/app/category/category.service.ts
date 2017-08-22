import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ICategory } from './category';

@Injectable()
export class CategoryService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Category(category: ICategory): Observable<ICategory>{
        return this.apiService.post(this.config.api_url+`/Category_Activity/create_Category`,category);

    }
    update_Category(category: ICategory): Observable<ICategory>{
        return this.apiService.put(this.config.api_url+`/Category_Activity/update_Category`,category);

    }
    search_for_update_Category(category_id: number): Observable<ICategory>{
        return this.apiService.get(this.config.api_url+`/Category_Activity/search_for_update_Category/${category_id}`);

    }
    delete_Category(category: ICategory): Observable<ICategory>{
        return this.apiService.delete(this.config.api_url+`/Category_Activity/delete_Category/${category.id}`);

    }
    get_all_Category(): Observable<ICategory[]>{
        return this.apiService.get(this.config.api_url+`/Category_Activity/get_all_Category`);

    }
}