import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';
import { ApiService } from '../api.service';


interface Paint {
  id: number;
  brand: string;
  range: string;
  name: string;
  hex: string;
}

@Component({
  selector: 'app-addpaint',
  standalone: true,
  imports: [
    RouterLink,
    NgIcon,
    NgForOf,
    NgIf,
    FormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatOptgroup,
  ],
  templateUrl: './addpaint.component.html',
  styleUrl: './addpaint.component.css',
})
export class AddpaintComponent implements OnInit {
  private readonly apiService = inject(ApiService);

  ngOnInit() {
    this.fetchPaint();
  }

  showNewPaint = false;


  newPaint: Paint = {
    id: 0,
    brand: '',
    range: '',
    name: '',
    hex: '',
  };

  userPaints: Paint[] = [];
  errorMessage: string | null = null;

  addPaint(): void {
    this.apiService.addPaint(this.newPaint).subscribe({
      next: (addedPaint) => {
        this.fetchPaint();
        this.newPaint = { id: 0, brand: '', range: '', name: '', hex: '' };
        this.showNewPaint = false;
        this.errorMessage = null;
      },
      error: (error) => {
        this.errorMessage = 'Failed to add paint. Please try again.';
        console.error(error);
      }
    });
  }



  deletePaint(id: number) {
    this.apiService
      .deleteRow(id)
      .subscribe(() => this.fetchPaint());

  }

  fetchPaint() {
    this.apiService.getUserPaints().subscribe(paints => {
      this.userPaints = paints;
    });
  }
}

