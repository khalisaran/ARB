import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IProjectName } from './projectname';

@Injectable()
export class ProjectNameService {
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_ProjectName(projectname: IProjectName): Observable<IProjectName>{
        return this.apiService.post(this.config.api_url+`/ProjectNameActivity/create_ProjectName`,projectname);

    }
    update_ProjectName(projectname: IProjectName): Observable<IProjectName>{
        return this.apiService.put(this.config.api_url+`/ProjectNameActivity/update_ProjectName`,projectname);

    }
    search_for_update_ProjectName(projectname_id: number): Observable<IProjectName>{
        return this.apiService.get(this.config.api_url+`/ProjectNameActivity/search_for_update_ProjectName/${projectname_id}`);

    }
    delete_ProjectName(projectname: IProjectName): Observable<IProjectName>{
        return this.apiService.delete(this.config.api_url+`/ProjectNameActivity/delete_ProjectName/${projectname.id}`);

    }
    get_all_ProjectName(): Observable<IProjectName[]>{
        return this.apiService.get(this.config.api_url+`/ProjectNameActivity/get_all_ProjectName`);

    }
}