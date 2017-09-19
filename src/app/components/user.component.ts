import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'
import {PhotosServcie} from '../services/photos.service'

@Component({  
  selector: 'user',
  template: `
    <h1>
    {{name}}
    </h1>
    <p><strong>Email</strong>:{{email}}</p> 
    <p><strong>Address</strong>:{{address.street}}, {{address.city}}, {{address.state}}  </p>
    
    <button (click)="toggleHobbies()" >{{showHobbies? "Hide Hobbies": "Show Hobbies" }}</button>
    
    <div *ngIf="showHobbies">
    <ul>
        <li *ngFor="let hobby of hobbies; let i = index">
        {{hobby}} <button (click)="deleteHobby(i)">X</button>
        </li>
    </ul>
    <form (submit)="addHobby(hobby.value)">
        <label>Hobby: </label> <br>
        <input type="text" #hobby  />
    </form>
    </div>
    <hr>
    <h3>Edit</h3>
    <form>
        <label>Name: </label> <br>
        <input type="text" name="name" [(ngModel)]="name" /><br>
        <label>Email: </label> <br>
        <input type="text" name="email" [(ngModel)]="email" /><br>
        <label>Address: </label> <br>
        <input type="text" name="street" [(ngModel)]="address.street" /> <br>
        <label>City: </label> <br>
        <input type="text" name="city" [(ngModel)]="address.city" /><br>
        <label>State: </label> <br>
        <input type="text" name="state" [(ngModel)]="address.state" /><br>
    </form>
    <div *ngFor="let post of posts">
        <h3>{{post.title}}</h3> 
        <p>{{post.body}}</p>        
    </div>
    <div *ngFor="let photo of photos">
        <h3>{{photo.title}}</h3>
        <img src={{photo.thumbnailUrl}} />
    </div>
    
    `,
    providers: [PostsService, PhotosServcie]
})
export class UserComponent  {   
  name: string;
  email: string;
  address:address;
  hobbies: string[];
  showHobbies:boolean;
  hobby:string;
  posts: Post[];
  photos: Photo[];

  constructor(private postsService : PostsService, private photosService : PhotosServcie) {
    this.name = 'Sand Box';   
    this.email = "noor.chervu@gmail.com"
    this.address = {
        street: "1618 clonial gardens dr",
        city: "Boston", 
        state: "MA"
    }
    this.hobbies = ["Music","Movies", "Sports"];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
    
    this.photosService.getPhotos().subscribe(photos => {
        this.photos = photos;
    });

  }

  
  toggleHobbies() {
    
    if(this.showHobbies == true)
        this.showHobbies = false;
    else 
        this.showHobbies = true;
  }
  addHobby(hobby) {
      this.hobbies.push(hobby);            
  }
  deleteHobby(i){
      this.hobbies.splice(i,1);
  }

  }

    interface address{
        street:   string;
        city: string;
        state:    string;           
    }
    
    interface Post {
        userId: number;
        id :    number;
        title:  string;
        body:   string;
    }

    interface Photo {
            albumId: number;
            id :    number;
            title:  string;
            url:   string;
            thumbnailUrl:   string;
        }





