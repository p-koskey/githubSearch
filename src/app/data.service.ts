import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  dataRequest(userName:string){
    let promise = new Promise((resolve,reject)=>{
      let apiURL = `https://api.github.com/users/daneden?access_token=${environment.apiKey}`
      this.http.get(apiURL).toPromise().then(response=>{
        
        console.log('Sucess',response)
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
