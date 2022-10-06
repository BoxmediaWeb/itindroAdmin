import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { User } from 'app/core/user/user.types';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private _user: ReplaySubject<User> = new ReplaySubject<User>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     *
     * @param value
     */
    set user(value: User)
    {
        // Store the value
        if(value){
            localStorage.setItem('userId', `${value.id}`);
        }
        
        this._user.next(value);
    }

    get user$(): Observable<User>
    {
        return this._user.asObservable();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get the current logged in user data
     */
    
    get(): Observable<User>
    {
        var currentUser:User;

        this.user$.subscribe((data:User)=>{
            currentUser = data;
        });

        return this._httpClient.post<User>(`${environment.serverUrl}/authuser`,{id:localStorage.getItem('userId')}).pipe(
                tap((user) => {
                    console.log("Este es el user devuelto en el servicio", user);
                    this._user.next(user);
                })
        );

        //return this._httpClient.get<User>('api/common/user').pipe(
        //    tap((user) => {
                //this._user.next(user);
        //    })
        //);

    }

    /**
     * Update the user
     *
     * @param user
     */
    update(user: User): Observable<any>
    {
        return this._httpClient.patch<User>('api/common/user', {user}).pipe(
            map((response) => {
                this._user.next(response);
            })
        );
    }
}
