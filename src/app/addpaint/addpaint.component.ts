import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';

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
export class AddpaintComponent {
  showNewPaint = false;

  brand = '';
  range = '';
  name = '';
  hex = '';

  userPaints: string[][] = [];


  addPaint() {
    this.userPaints.push([this.brand, this.range, this.name, this.hex ])

    this.brand = '';
    this.range = '';
    this.name = '';
    this.hex = '';
    this.showNewPaint = false;

  }
}
