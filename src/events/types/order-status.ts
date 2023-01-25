export enum OrderStatus {
  // When the order has been created, but the ticket has not been reserved
  Created = 'created',

  // The ticket has already been reserved,
  // or when the user has cancelled the order
  // or the order expires before payment
  Cancelled = 'cancelled',

  // the order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // The order has reserved the ticket and the user has
  // provided payment successfully
  Complete = 'complete',
}
