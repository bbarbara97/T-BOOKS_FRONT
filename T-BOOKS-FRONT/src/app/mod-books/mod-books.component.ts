import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-mod-books',
  templateUrl: './mod-books.component.html',
  styleUrls: ['./mod-books.component.css'],
})
export class ModBooksComponent implements OnInit {
  book: Book = {
    title: '',
    isbn: '',
    synopsis: '',
    author: '',
    editorial: '',
    user: {
      id: '',
      name: '',
      email: '',
      phone: '',
      city: '',
      username: '',
      password: '',
      role: '',
    },
  };
  message = '';

  validation = false;
  message1: string = '';

  constructor(
    private bookService: BooksService,
    private activateRoute: ActivatedRoute,
    private toastService: HotToastService
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.activateRoute.snapshot.paramMap.get('id'));
  }

  getBook(id: any): void {
    this.bookService.returnBookById(id).subscribe(
      (data) => {
        this.book = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateBook(): void {
    this.message = '';

    this.book.isbn = this.book.isbn?.replace(/-/g, '');
   
    if (this.validation === true) {
      this.bookService.update(this.book.id, this.book).subscribe(
        (response) => {
          this.message = response.message
            ? response.message
            : 'The status was updated successfully';
          this.showToast();
          setTimeout(() => {
            this.reload();
          }, 1000);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  showToast() {
    this.toastService.show('Los cambios se han actualizado con éxito.', {
      position: 'top-right',
      duration: 5000,
      style: {
        border: '1px solid #badbcc',
        background: '#d1e7dd',
        padding: '16px',
        color: '#0f5132',
      },
    });
  }

  reload(): void {
    window.location.assign('');
  }

  validateForm() {
    const ISBN_REGEX = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;

    if (this.validation === false) {
      if (ISBN_REGEX.test(this.book.isbn?.toString()!)) {
        this.message1 = '';
      } else {
        this.message1 = 'El isbn no coincide';
      }
    }
    if (this.message1 === '') {
      this.validation = true;
      this.updateBook();
    }
    console.log(this.validation + ' validation');
  }
}
