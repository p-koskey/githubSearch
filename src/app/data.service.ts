import { Repo } from './repo';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  profile:User;
  repo:Repo
  repos:any;
  constructor(private http:HttpClient) {
      this.profile = new User("","","","","","","","",0,0,0,"")
      
   }


  getData(username:string){
    interface ApiResponse{
      name:string
      login:string
      avatar_url: string
      location:string
      email:string;
      twitter_username: string;
      created_at:string;
      updated_at: string;
      followers: number;
      following:number;
      public_repos:number;
      html_url:string;
    }
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
         this.profile.date = response.created_at
         this.profile.seen =response.updated_at 
         this.profile.followers= response.followers
         this.profile.following = response.following
         this.profile.repo = response.public_repos
         this.profile.prof = response.html_url;
          resolve()
      },
      error=>{
        console.log('Error')

        reject(error)
      })
    })
    
    return promise
  }

  getRepo(username:string){
    interface ApiResponse{
      full_name:string
      html_url:string
      ;
    }
    let promise = new Promise((resolve,reject)=>{
      let apiURL = `https://api.github.com/users/${username}/repos?access_token=${environment.apiKey}`
      this.http.get<ApiResponse>(apiURL).toPromise().then(
        (res:any) => { // Success

          this.repo = res;
         
          resolve();
      },
      error=>{
        console.log('Error')

        reject(error)
      })
    })
    
    return promise
  }

  

  search(repoName:string){
    interface ApiResponse{
      items:any
      
    }
    let promise = new Promise((resolve,reject)=>{
      
      let apiURL = `https://api.github.com/search/repositories?q=${repoName}&sort=stars&order=desc&per_page=10`
      this.http.get<ApiResponse>(apiURL).toPromise().then(
        response =>{

        this.repos =response.items;
         
         console.log(response)
          resolve()
      },
      error=>{
        console.log('Error')

        reject(error)
      })
    })
    
    return promise
  }
}