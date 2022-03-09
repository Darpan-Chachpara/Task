import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router,private http: Http,private activatedRoute: ActivatedRoute,private modalService: NgbModal) { 
    this.headers.append('authorization', this.token);   
  }
  token:any= localStorage.getItem('token');
  headers = new Headers();
  fruits_txt:any;
  Units_txt:any;
  weight_txt:any;
  ngOnInit(): void {
    this.getallfruits();
    this.finalvalue=0;
  }
  fruits_data:any;
  getallfruits(){
    this.http.get('http://localhost:9090/task', { headers: this.headers })
    .subscribe(Response => {
      const result = Response.json();
      console.log("***", Response);
      this.fruits_data=result;
      console.log(this.fruits_data);
    });
  }
  fruitpricedata:any;
  onFruitOptionsSelected(){
  localStorage.setItem("FruitPrice",this.fruits_data[3].unit_price);
  console.log("&&&", this.fruits_data);
  this.fruitpricedata=this.fruits_data[3].unit_price;
  console.log("$$$",this.fruitpricedata);
  this.Units_txt=0;
  this.finalvalue=0;
  }
  fruitprice:any;
  onOptionsSelected(){
    this.Units_txt=0;
    console.log(this.fruitpricedata);
    this.fruitprice=localStorage.getItem("FruitPrice");
    console.log(this.weight_txt);
    console.log( this.fruits_data[3]);
    this.Units_txt=this.weight_txt*this.fruitpricedata;
    console.log(this.weight_txt);
    console.log( this.fruitpricedata);
    console.log(this.Units_txt);
  }
  finalvalue:any;
  finalsubmit(){
    this.finalvalue=this.Units_txt;
  }
}
