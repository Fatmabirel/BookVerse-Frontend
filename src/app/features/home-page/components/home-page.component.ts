import { Component } from '@angular/core';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { Author } from '../../authors/models/author';
import { AuthorService } from '../../authors/services/author.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BasicLayoutComponent,SliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  authors: Author[];

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService.getAuthors().subscribe((response) => {
      this.authors = response;
    });
  }
  
}
