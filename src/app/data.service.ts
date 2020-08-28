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
      this.profile = new User("","","","","","",0,0,0)
   }


  getData(){
    interface ApiResponse{
      name:string
      login:string
      avatar_url: string
      location:string
      email:string;
      twitter_username: string;
      followers: number;
      following:number;
      public_repos:number;
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
         this.profile.email = response.email,
         this.profile.twitter = response.twitter_username
         this.profile.followers= response.followers
         this.profile.following = response.following
         this.profile.repo = response.public_repos
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
