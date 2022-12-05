import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  path = "http://localhost:3000/newUser"
  register(registerUser:Register){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type","application/json")
    this.httpClient.post<Register>(this.path,registerUser, {headers:headers}).subscribe(data =>{})
  }
}
