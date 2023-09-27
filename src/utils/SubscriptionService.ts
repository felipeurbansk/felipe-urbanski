import ProductCreatedSubscriber from "@products/amqp/sub/ProductCreatedSubscriber";

export default class SubscriptionService {
  private productCreatedSubscriber: ProductCreatedSubscriber;

  constructor({
    productCreatedSubscriber,
  }: {
    productCreatedSubscriber: ProductCreatedSubscriber;
  }) {
    this.productCreatedSubscriber = productCreatedSubscriber;
  }

  async initialize() {
    await this.productCreatedSubscriber.subscribe();
  }
}
