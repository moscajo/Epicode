import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiService } from '../elementi.service';
import { Iprodotti } from '../interfaces/iprodotti';
 
  

@Component({
  selector: 'app-newprod',
  templateUrl: './newprod.component.html',
  styleUrls: ['./newprod.component.css']
})
export class NewprodComponent implements OnInit {
  prods: Iprodotti = {
    name: '',
    qt: '',
    descrizione: '',
    prezzo: '',

  }
  constructor(private elementiService: ElementiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.id ){
        this.elementiService.getProds(params.id).subscribe(response => this.prods = response);
      }
    })
  }
  saveProd(){
    if(!this.prods.id) {
    this.elementiService.createProds(this.prods).subscribe(response => console.log(response));
    }else {
      this.elementiService.updateProds(this.prods).subscribe(response => console.log(response))
    }
    
    this.router.navigate(['users']
    )
  }
}
