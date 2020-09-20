import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Heroe[];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=> {
      this.termino = params['term'];
      this.heroes = this._heroesService.searchHeroes(params['term']);
    });
  }

  verHeroe(i:number){
    this.router.navigate(['/heroe', i]);
    console.log(i);
  }

}

interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  index?: number;
}
