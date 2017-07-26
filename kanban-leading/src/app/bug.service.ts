import { Injectable } from '@angular/core';
import { Bug } from './bug/bug';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BugService {
    private bugURL = 'http://localhost:3000/bugs';  // URL to web api    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private headers_delete = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    myBugs: Promise<Bug[]>;

    constructor(private http: Http) {
        this.getBugs();
        this.printBugs();
    }

    printBugs(): void {
        console.log(this.myBugs);
    }

    getBugs(): Promise<Bug[]> {
        this.myBugs = this.getBugsFromDB();
        this.printBugs();
        return this.myBugs;
    }


    getBugsFromDB(): Promise<Bug[]> {
        console.log("getting bug from api");
        var result = this.http.get(this.bugURL + "/")
            .toPromise()
            .then(response => response.json() as Bug[])
            .catch(this.handleError);
        console.log(result);
        return result;
    }

    getBug(id: number): Promise<Bug> {
        const url = `${this.bugURL}:${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Bug)
            .catch(this.handleError);
    }

    createBug(_name: string, _source: string): Promise<Bug> {
        console.log("sending post request with name :" + _name + " and source : " + _source);
        console.log(JSON.stringify({ name: _name, source: _source }));
        var newBug = this.http
            .post(this.bugURL + "/", JSON.stringify({ name: _name, source: _source }), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Bug)
            .catch(this.handleError);
        this.myBugs = this.getBugsFromDB();
        return newBug;
    }

    deleteBug(bug: Bug): Promise<void> {
        const url = `${this.bugURL}${bug._id}`;
        var remBug = this.http.delete(url, { headers: this.headers_delete })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
        this.myBugs = this.getBugsFromDB();
        return remBug;
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}