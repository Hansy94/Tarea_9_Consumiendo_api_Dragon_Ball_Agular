import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'


@Injectable()
export class PersonajesService {

    private Api_Server = "https://dragon-ball-super-api.herokuapp.com/api/characters"

    constructor(public http: HttpClient) { }

    public getPersonajes(): Observable<any> {
        return this.http.get(this.Api_Server);
    }
    
}