import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iprodotti } from '../interfaces/iprodotti';
import { ElementiService } from '../elementi.service';

@Component({
  selector: 'app-prodlist',
  templateUrl: './prodlist.component.html',
  styleUrls: ['./prodlist.component.css']
})
export class ProdlistComponent implements OnInit {

  prod: Iprodotti[] = [];

  constructor(private elemntiService: ElementiService,
    private router: Router) { }

  ngOnInit(): void {
    this.elemntiService.getAllProd().subscribe(resp => this.prod = resp);
  }
  removeProd(item: Iprodotti): void  {
    this.elemntiService.removeProd(item).subscribe(resp => {
      this.prod = this.prod.filter(element => element.id !== item.id);
     });
  }
selectProd(item: Iprodotti): void {
  this.router.navigate(['prod',item.id,'edit' ])
}
addCart(item: Iprodotti){
  
}

}
