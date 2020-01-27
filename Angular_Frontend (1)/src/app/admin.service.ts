import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

getService()
{
  return this.http.get("http://localhost:8080/DacAug19/admin/list");
}

addService(data)
{
  return this.http.post("http://localhost:8080/DacAug19/admin", data );
}
deleteService(id:any)
{
  return this.http.delete("http://localhost:8080/DacAug19/admin/"+id);
}

getSubServices(id:any)
{
  
  return this.http.get("http://localhost:8080/DacAug19/subservice/"+id);
}
deleteSubService(id:any)
{
  return this.http.delete("http://localhost:8080/DacAug19/subservice/"+id);
}
updateSubService(id,subservice)
{
  return this.http.put("http://localhost:8080/DacAug19/subservice/"+id,subservice);
}
addSubService(newdata)
{
  return this.http.post("http://localhost:8080/DacAug19/subservice/",newdata);
}

getUser()
{
  return this.http.get("http://localhost:8080/DacAug19/user/list");
}

}
