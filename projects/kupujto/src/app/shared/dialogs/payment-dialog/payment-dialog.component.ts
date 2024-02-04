import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Order, PaymentStatus } from "../../../order/order.service";

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {

  public timeout: any;
  public interval: any;
  public seconds = 10;

  constructor(@Inject(MAT_DIALOG_DATA) public order: Order, private dialogRef: MatDialogRef<PaymentDialogComponent>) {
  }

  ngOnInit() {
    this.interval = setInterval(() => this.seconds--, 1000);
    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      this.dialogRef.close(PaymentStatus.WAIT);
    }, 10000);
  }

  reject() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    this.dialogRef.close(PaymentStatus.REJECTED);
  }

  pay() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    this.dialogRef.close(PaymentStatus.SUCCESS);
  }

}
