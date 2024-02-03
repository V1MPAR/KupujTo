import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { BasketItemModel, BasketService } from "../../../shared/services/basket.service";
import { Router } from "@angular/router";
import { Order, OrderService, PaymentStatus } from "../../order.service";
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  basketItems: BasketItemModel[] = this.basketService.getBasketItems()

  basketForm = this.formBuilder.group({
    basketItems: [this.basketItems, Validators.required],
  });

  deliveryForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    street: ['', Validators.required],
    flat: [''],
    streetCode: ['', Validators.required],
    city: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    method: ['', Validators.required],
  });
  paymentForm = this.formBuilder.group({
    method: ['', Validators.required],
  });
  IsOrderEditable = true;
  IsDeliveryEditable = true;
  IsPaymentEditable = true;
  IsFinishEditable = true;
  isOrderCompleted = false;
  isDeliveryCompleted = false;
  isPaymentCompleted = false;
  isFinishCompleted = false;

  totalPrice = this.basketItems.reduce((acc, item) => acc + item.totalPrice, 0)
  deliveryCost = 9.99;
  paymentStatus: PaymentStatus = PaymentStatus.WAIT;
  order: Order | null = null;

  constructor(private formBuilder: FormBuilder, private basketService: BasketService, private orderService: OrderService, private router: Router) {
    this.basketService.basketItems.subscribe((basketItems => {
      this.basketItems = basketItems;
      this.totalPrice = this.basketItems.reduce((acc, item) => acc + item.totalPrice, 0)
      this.deliveryCost = 9.99;
      this.basketForm.patchValue({basketItems: this.basketItems});
    }));
  }

  payment(stepper: MatStepper): void {
    if (this.deliveryForm.valid && this.paymentForm.valid) {
      this.IsOrderEditable = false;
      this.IsDeliveryEditable = false;
      this.IsPaymentEditable = false;
      this.isOrderCompleted = true;
      this.isDeliveryCompleted = true;
      this.isPaymentCompleted = true;
      this.order = {
        id: 0,
        delivery: {
          name: this.deliveryForm.value.name!,
          lastname: this.deliveryForm.value.lastname!,
          street: this.deliveryForm.value.street!,
          flat: this.deliveryForm.value.flat!,
          streetCode: this.deliveryForm.value.streetCode!,
          city: this.deliveryForm.value.city!,
          email: this.deliveryForm.value.email!,
          phone: this.deliveryForm.value.phone!,
          method: this.deliveryForm.value.method!
        },
        payment: {
          method: this.paymentForm.value.method!
        },
        status: this.paymentStatus,
        totalPrice: this.totalPrice,
        deliveryCost: this.deliveryCost,
        basketItems: this.basketItems
      };
      this.orderService.addOrder(this.order);
      stepper.next();
      this.basketService.clearBasket();
      this.IsFinishEditable = false;
      this.isFinishCompleted = true;
    }
  }

  goToHome(): void {
    this.router.navigate(['/']).then();
  }

  getPaymentStatus(paymentStatus: PaymentStatus): string {
    switch (paymentStatus) {
      case PaymentStatus.SUCCESS:
        return 'opłacona'
      case PaymentStatus.WAIT:
        return 'oczekująca'
      case PaymentStatus.REJECTED:
        return 'odrzucona przez użytkownika'
    }
  }
}
