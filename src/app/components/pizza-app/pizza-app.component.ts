import { Component, inject } from '@angular/core';
import { Order, Pizza } from '../../common/model/pizza-app/pizza';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, NonNullableFormBuilder, Validators, FormsModule } from '@angular/forms';
import { CustomValidators } from '../../common/validators/custom-validators';

@Component({
  selector: 'app-pizza-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './pizza-app.component.html',
  styleUrl: './pizza-app.component.scss'
})
export class PizzaAppComponent {

  public cashInRegister = 100;
  public nextOrderId = 1;
  public nextPizzaId = 1;
  public searchText = "";

  public menu: Pizza[] = [
    { id: this.nextPizzaId++, name: "Margherita", price: 8 }, 
    { id: this.nextPizzaId++, name: "Pepperoni", price: 10 }, 
    { id: this.nextPizzaId++, name: "Hawaiian", price: 10 }, 
    { id: this.nextPizzaId++, name: "Veggie", price: 9},
  ];

  public selectedPizza: Pizza[] = [];
  public orderQueue: Order[] = []
  public searchResult: Pizza | string | undefined;

  fb = inject(NonNullableFormBuilder);
  
  form = this.fb.group({
    name: this.fb.control('', { validators: [Validators.required, Validators.minLength(3)] }),
    price: this.fb.control('', { validators: [Validators.required, Validators.minLength(1)]}),
  });

  onSubmit(){
    console.log(this.form.getRawValue())
    this.addToArray<Pizza>(this.menu, { 
      id: this.nextPizzaId++, 
      name: this.form.getRawValue().name, 
      price: Number(this.form.getRawValue().price) 
    });
  }

  onCheckboxSelect(event: Event, pizza: Pizza){
    const isChecked: boolean = (<HTMLInputElement>event.target).checked;

    if(isChecked){
      this.selectedPizza.push(pizza);
      this.cashInRegister += pizza.price
    } else {
      this.selectedPizza = this.selectedPizza.filter(ele => pizza.id !== ele.id)
      this.cashInRegister -= pizza.price
    }
  }

  public addToArray<T>(array: T[], item: T): T[] {
    array.push(item);
    return array;
  }

  placeOrder(): void {
    const newOrder: Order = { id: this.nextOrderId++, pizza: this.selectedPizza, status: "ordered" }
    this.orderQueue.push(newOrder);
  }
  
  completeOrder(orderId: number): Order | undefined { 
    const order = this.orderQueue.find(order => order.id === orderId) 
    if (!order) {
      console.error(`{orderId} was not found in the orderQueue`);
      return;
    }
    order.status = "completed"
    return order
  }

  clearPizzaDetail(){
    this.searchResult = "";
  }

  // search pizza 
  getPizzaDetail(identifier: string | number): Pizza | undefined {
    // console.log(identifier, typeof identifier);

      if (typeof identifier === "string") {
          this.searchResult = this.menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
          return this.menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
      } else if (typeof identifier === "number") {
          this.searchResult = this.menu.find(pizza => pizza.id === identifier) 
          return this.menu.find(pizza => pizza.id === identifier)
      } else {
          this.searchResult = "Parameter `identifier` must be either a string or a number";
          throw new TypeError("Parameter `identifier` must be either a string or a number")
      }
  }


}
