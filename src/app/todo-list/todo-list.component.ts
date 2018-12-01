import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public formOffer: FormGroup;
  public offers = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formOffer = this.formBuilder.group({
      name: ['', Validators.required],
      offer: [[], Validators.required]
    })
  }

  public onAdd(offer) {
    if (offer.value) {
      this.offers.push(offer.value);
    }
    offer.value = '';
  }

  public onDelete(offerIdx) {
    this.offers.splice(offerIdx, 1);
  }

  public onSubmit(data) {
    this.formOffer.patchValue({
      offer: this.offers
    })
  }

  public onKey(e) {
    debugger;
    console.log(e);
  }

  public onFinish() {
    console.log('Finished');
  }
}
