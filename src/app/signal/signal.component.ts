import { CommonModule } from '@angular/common';
import { Component,computed,effect,OnInit,signal} from '@angular/core';


@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent implements OnInit {
  ngOnInit(): void {
    
  }

cartItems = signal([
    {
      id: 1,
      name: 'PIANAI Portable Charger Solar Power Bank 100000mah',
      price: 85,
      quantity: signal(3),
      image: '../../assets/varmfront-power-bank-dark-blue__1172519_pe893862_s5.avif'
    },
    {
      id: 2,
      name: 'USB A to C type cable',
      price: 9,
      quantity: signal(2),
      image: '../../assets/varmfront-power-bank-dark-blue__1172519_pe893862_s5.avif'
    }
  ]);

  shipping = signal(7);
  couponCode = signal('');

  subtotal = computed(() =>
    this.cartItems().reduce((total, item) => total + item.price * item.quantity(), 0)
  );

  total = computed(() => this.subtotal() + this.shipping());

  effect = effect(() => {
    console.log('Total:', this.total());
  });

  updateQuantity(itemId: number, newQty: number) {
    const updated = this.cartItems().map((item) =>
      item.id === itemId
        ? { ...item, quantity: signal(+newQty) }
        : item
    );
    this.cartItems.set(updated);
  }

  applyCoupon() {
    alert(`Coupon applied: ${this.couponCode()}`);
  }




 
}


  
