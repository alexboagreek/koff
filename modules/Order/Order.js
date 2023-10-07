import { addContainer } from "../addContainer";

export class Order {
  static instance = null;

  constructor() {
    if (!Order.instance) {
      Order.instance = this;

      this.element = document.createElement("div");
      this.element.classList.add("product__chars_order");
      this.containerElement = addContainer(
        this.element,
        "product__order-container"
      );
      this.isMounted = false;
    }

    return Order.instance;
  }

  mount() {
    if (this.isMounted) {
      return;
    }
  }

  unmount() {
    this.element.remove();
    this.isMounted = false;
  }

  getHTML() {
    return `
    <div class="container product__order-container">
    <ul class="order__info-list">
      <li class="order__info-item">
        <p class="order__info">Заказ успешно размещен</p>
      </li>
      <li class="order__info-item">
        <p class="order__price">20 000 ₽</p>
      </li>
      <li class="order__info-item">
        <p class="order__article">№43435</p>
      </li>
    </ul>
  
    <h3 class="product__chars_order-title">Данные доставки</h3>
    <table class="product__chars-table table">
      <tr class="table__row">
        <td class="table__field">Получатель</td>
        <td class="table__value">Иванов Петр Александрович</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Телефон</td>
        <td class="table__value">+7 (737) 346 23 00</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">E-mail</td>
        <td class="table__value">Ivanov84@gmail.com</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Адрес доставки</td>
        <td class="table__value">Москва, ул. Ленина, 21, кв. 33</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Способ оплаты</td>
        <td class="table__value">Картой при получении</td>
      </tr>
      <tr class="table__row">
        <td class="table__field">Способ получения</td>
        <td class="table__value">Доставка</td>
      </tr>
    </table>
  
    <a class="order__link" href="/">На главную</a>
  </div>    
    `;
  }
}

