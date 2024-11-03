import { Component, inject, OnInit } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { NgForOf, NgIf } from '@angular/common';

interface Paint {
  brand: string;
  range: string;
  name: string;
  hex: string;
}

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    NgIcon,
    RouterLink,
    NgForOf,
    NgIf,
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit{

  private readonly apiService = inject(ApiService);

  ngOnInit() {
    this.fetchStockPaints();
  }

  stockPaints: Paint[] = [];



  fetchStockPaints() {
    this.apiService.getStockPaints().subscribe(paints => {this.stockPaints = paints;});
  }

}
