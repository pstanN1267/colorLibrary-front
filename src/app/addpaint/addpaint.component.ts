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
  paint:string[] = [];
  selectedBrand = '';
  brand = ['Citadel', 'Vallejo'];

  selectedRange = '';
  range = ['Base', 'Dry', 'Layer'];

  selectedName = '';
  name = ['Abaddon Black', 'Caliban Green'];
  selectedHex = '';
  hex = ['#231F20', '#00401F'];

  showNewPaint = false;

  selectedValue: string = '';
  options = [
    { value: 'Citadel', label: 'Citadel' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  addPaint() {
    this.paint.push(this.selectedBrand, this.selectedRange, this.selectedName, this.selectedHex);
    this.selectedBrand = '';
    this.selectedRange = '';
    this.selectedName = '';
    this.selectedHex = '';
    this.showNewPaint = false;

  }
}
