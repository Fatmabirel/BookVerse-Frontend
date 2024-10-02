import { Component } from '@angular/core';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { SliderComponent } from '../../../shared/components/slider/slider.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BasicLayoutComponent,SliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
}
