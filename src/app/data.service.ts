import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  profile:User;

  constructor(private http:HttpClient) {
      this.profile = new User("","","","","")
   }


  getData(){
    interface ApiResponse{
      name:string
      login:string
      avatar_url: string
      location:string
      email:string;
    }
    let username: string = 'p-koskey'
    let promise = new Promise((resolve,reject)=>{
      let apiURL = `https://api.github.com/users/${username}?access_token=${environment.apiKey}`
      this.http.get<ApiResponse>(apiURL).toPromise().then(
        response =>{

         this.profile.name = response.name,
         this.profile.username = response.login,
         this.profile.image = response.avatar_url,
         this.profile.location = response.location,
         this.profile.email = response.email
          resolve()
      },
      error=>{
        console.log('Error')

        reject(error)
      })
    })
    console.log(promise);
    return promise
  }

  }
