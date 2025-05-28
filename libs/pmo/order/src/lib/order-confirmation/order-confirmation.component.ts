import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-order-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="confirmation-container">
      <div class="confirmation-card">
        <div class="icon-container">
          <div class="success-icon">✓</div>
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>
          Thank you for your order. We've sent a confirmation email with the
          details.
        </p>
        <div class="action-buttons">
          <button class="primary-btn" routerLink="/restaurants">
            Order from another restaurant
          </button>
          <button class="secondary-btn" routerLink="/my-orders">
            View my orders
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .confirmation-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        padding: 20px;
      }

      .confirmation-card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 30px;
        text-align: center;
        max-width: 500px;
        width: 100%;
      }

      .icon-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
      }

      .success-icon {
        background-color: #28a745;
        color: white;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
      }

      h1 {
        color: #333;
        margin-bottom: 15px;
      }

      p {
        color: #666;
        margin-bottom: 25px;
        font-size: 16px;
      }

      .action-buttons {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      button {
        padding: 12px 20px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
      }

      .primary-btn {
        background-color: #007bff;
        color: white;
      }

      .primary-btn:hover {
        background-color: #0069d9;
      }

      .secondary-btn {
        background-color: #6c757d;
        color: white;
      }

      .secondary-btn:hover {
        background-color: #5a6268;
      }

      @media (min-width: 768px) {
        .action-buttons {
          flex-direction: row;
          justify-content: center;
        }
      }
    `,
  ],
})
export class OrderConfirmationComponent {}
