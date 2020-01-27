import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) {}

  register(user){

    return this.http.post("http://localhost:8080/DacAug19/user/register",user);
  }

  login(user)
  {
    console.log(user);
    return this.http.post("http://localhost:8080/DacAug19/user/login/",user);
  }
  
  isEmailExist(email){
    return this.http.get("http://localhost:8080/DacAug19/user/isEmailExist/"+email+"");
  }

  bookService(allData)
  {
    console.log(allData);

    return this.http.post("http://localhost:8080/DacAug19/booking",allData);
  }

  deleteBooking(id)
  {
    return this.http.delete("http://localhost:8080/DacAug19/booking/"+id);
  }

  cart(id)
  {
    return this.http.get("http://localhost:8080/DacAug19/booking/"+id);
  }
}

