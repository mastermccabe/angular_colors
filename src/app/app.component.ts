import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Regro Barcode Generator';
  // colors = '#F0F8FF';
  switch: boolean = true;
  colors = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurleyWood','CadetBlue','Chartreuse'];


}


// soln
// mport { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   imageArray = [];
//
//   fillImageArray() {
//     for (let y = 0; y < 10; y++) {
//       const randNum = (Math.floor(Math.random() * 6) ) + 1;
//       if (randNum === 1) {
//         this.imageArray.push('DarkSeaGreen ');
//       } else if (randNum === 2) {
//         this.imageArray.push('MediumBlue ');
//       } else if (randNum === 3) {
//         this.imageArray.push('MediumAquaMarine ');
//       } else if (randNum === 4) {
//         this.imageArray.push('DarkBlue ');
//       } else if (randNum === 5) {
//         this.imageArray.push('CadetBlue ');
//       } else if (randNum === 6) {
//         this.imageArray.push('Chartreuse');
//       } else if (randNum === 7) {
//         this.imageArray.push('IndianRed');
//       }
//     }
//   }
//
//   ngOnInit() {
//     this.fillImageArray();
//   }
//
// }
