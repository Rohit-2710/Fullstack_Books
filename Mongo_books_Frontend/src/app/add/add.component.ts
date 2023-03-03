import { Component } from '@angular/core';
import { book } from 'src/book';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(public BookService:BookServiceService){}
  books:book={
    title:'',
    description:'',
    id:'',
    author:'',
    cost:0
  }
  submitted=false

  addBook():void{
    const data={
      title:this.books.title,
      description:this.books.description,
      author:this.books.author,
      cost:this.books.cost

    }
    this.BookService.add(data).subscribe({
      next:(res)=>{
        console.log(res);
        this.submitted = true;
      },
      error:(err)=>console.log(err)
    })
 
  }
  newTutorial():void{
    this.submitted = false;
    this.books={
      title:'',
      description:'',
      id:'',
      author:'',
      cost:0

    }
  }

}
