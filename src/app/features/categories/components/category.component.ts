import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
      this.groupCategories();
    });
  }
  groupedCategories: { [key: string]: Category[] } = {};

  groupCategories() {
    this.groupedCategories = {};
    this.categories.sort((a, b) => a.name.localeCompare(b.name, 'tr-TR')).forEach(category => {
      const firstLetter = category.name.charAt(0).toUpperCase();
      if (!this.groupedCategories[firstLetter]) {
        this.groupedCategories[firstLetter] = [];
      }
      this.groupedCategories[firstLetter].push(category);
    });
  }

  groupedKeys(): string[] {
    return Object.keys(this.groupedCategories).sort((a, b) => a.localeCompare(b, 'tr'));
  }
}
