import { Component } from '@angular/core';

@Component({
  
  selector: 'my-app',
  template: `
   <user></user>
  `,
})
export class AppComponent  {   
  name = 'Sand Box';   
  email = "noor.chervu@gmail.com"
  address = {
    street: "1618 clonial gardens dr",
    city: "Boston", 
    state: "MA"
  }
}
