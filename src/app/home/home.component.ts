import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GarageService } from '../garage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cars!: Object; // Use a suitable type or 'any' based on your response structure

  constructor(private https : HttpClient,private garageService: GarageService) {}

  ngOnInit() {
    console.log('On Init ..............')
    this.garageService.getCars().subscribe(datas=>{
      this.cars=[datas];
    })
  }
}
