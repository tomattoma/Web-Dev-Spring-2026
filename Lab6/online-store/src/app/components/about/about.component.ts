import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h1>About This Project</h1>
    <p>Student Name: [Твое Имя]</p>
    <p>Course: Web Development</p>
    <p>This lab covers Angular Routing and HTTP Client.</p>
  `
})
export class AboutComponent {}