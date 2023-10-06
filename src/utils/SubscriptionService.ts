import ProductCreatedSubscriber from "@products/amqp/sub/ProductCreatedSubscriber";
import CatalogUpdateSubscriber from "@catalogs/amqp/sub/CatalogUpdateSubscriber";

export default class SubscriptionService {
  private productCreatedSubscriber: ProductCreatedSubscriber;
  private catalogUpdateSubscriber: CatalogUpdateSubscriber;

  constructor({
    productCreatedSubscriber,
    catalogUpdateSubscriber,
  }: {
    productCreatedSubscriber: ProductCreatedSubscriber;
    catalogUpdateSubscriber: CatalogUpdateSubscriber;
  }) {
    this.productCreatedSubscriber = productCreatedSubscriber;
    this.catalogUpdateSubscriber = catalogUpdateSubscriber;
  }

  async initialize() {
    await this.productCreatedSubscriber.subscribe();
    await this.catalogUpdateSubscriber.subscribe();
  }
}
