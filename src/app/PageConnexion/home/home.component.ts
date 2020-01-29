import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataList: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.form.);
    this.findAll();
  }

  findAll() {
    this.joueurService.findAll().subscribe((value: any[]) => this.joueurList = value);
  }

  deconnection() {
    this.router.navigate(['/projet/inscription']);
  }
}
