import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
option:any='1'
region:any='Tunis'
text:any='A'
constructor(private route:Router){

}
submit(){
this.route.navigate(['/search', this.option, this.region, this.text]).then(() => {
  window.location.reload();
});
}
}
