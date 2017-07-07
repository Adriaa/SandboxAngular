import { Injectable } from '@angular/core';
import { Bug } from './bug/bug';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BugService {
    private bugURL = 'http://localhost:3000/bugs';  // URL to web api    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers_delete = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //json' });

    constructor(private http: Http) {
        this.printBugs();
    }

    printBugs(): void {
        this.http.get(this.bugURL)
            .toPromise()
            .then(response => console.log(response.json()))
            .catch(this.handleError);
    }

    getBugs(): Promise<Bug[]> {
        return this.http.get(this.bugURL + "/")
            .toPromise()
            .then(response => response.json() as Bug[])
            .catch(this.handleError);
    }

    getBug(id: number): Promise<Bug> {
        const url = `${this.bugURL}:${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Bug)
            .catch(this.handleError);
    }

    createBug(_name: string): void {
        console.log("sending post request");
        console.log(JSON.stringify({ name: _name }));
        this.http
            .post(this.bugURL + "/", JSON.stringify({ name: _name }), { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
        /*.toPromise()
        .then(res => res.json().data as Bug)
        .catch(this.handleError);*/
    }

    deleteBug(id: number): void {
        const url = `${this.bugURL}${id}`;
        this.http.delete(url, { headers: this.headers_delete })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        console.log("bug deleted");
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