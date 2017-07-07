import { Injectable } from '@angular/core';
import { Bug } from './bug/bug';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QCService {
    private bugURL = 'http://localhost:8080/bugs/';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    ///qcbin/api/domains/{domain}/projects/{project}/defects
    ///qcbin/api/domains/{domain}/projects/{project}/defects/{ID}
    //http://alm-help.saas.hp.com/en/12.50/api_refs/REST/webframe.htm#attachments.htm

    constructor(private http: Http) {
        this.authenticate();
    }

    authenticate(): void {
        console.log("authentication");
        let authentUrl = 'http://alm-help.saas.hp.com/en/12.50/api_refs/REST/webframe.htm#attachments.htm';///qcbin/api/authentication/sign-in HTTP/1.1';
        let authInfos = 'Basic ' + btoa('mmft9450:0223aXa21!');
        let headerAuth = new Headers({ 'Authorization': authInfos });

        this.http.post(authentUrl, "", { headers: headerAuth })
            .toPromise()
            .then(() => console.log("authInfos"));

    }//this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })

    printBugs(): void {
        this.http.get(this.bugURL)
            .toPromise()
            .then(response => console.log(response.json()))
            .catch(this.handleError);
    }

    getBugs(): Promise<Bug[]> {
        return this.http.get(this.bugURL)
            .toPromise()
            .then(response => response.json() as Bug[])
            .catch(this.handleError);
    }

    getBug(id: number): Promise<Bug> {
        const url = `${this.bugURL}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Bug)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }*/

}