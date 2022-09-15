import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
// import { BooksService } from '../books.service';
// import { IBooks } from '../models/ibooks';


@Component({
  selector: 'app-admin-panel-books',
  templateUrl: './admin-panel-books.component.html',
  styleUrls: ['./admin-panel-books.component.css']
})
export class AdminPanelBooksComponent implements OnInit {

  // ELEMENT_DATA!: IBooks[];
  // displayedColumns: string[] = ['title', 'isbn','synopsis','action'];
  // dataSource = new MatTableDataSource<IBooks>(this.ELEMENT_DATA);


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  // private booksService: BooksService
  constructor() { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    // let resp = this.booksService.returnAllBooks();
    // resp.subscribe(report=> this.dataSource.data = report as IBooks[]);

  }

}
