import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { book } from 'src/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private bookService: BookServiceService){}
  books?:book[]

  ngOnInit(){
     this.retrieveAll()
  }
  
  retrieveAll(): void{
    this.bookService.getAll().subscribe({
      next:((data)=>{
        this.books=data;
        console.log(this.books)
      }),
      error:(err)=>{
        console.log(err);
      }

      })
    }
    deleteById(id:string){
      this.bookService.deleteByID(id).subscribe({
        next:(res)=>{
          console.log(res);
        },
        error:(err)=>{
         console.log(err);
        }
      })
      window.location.reload()
    }

  }


