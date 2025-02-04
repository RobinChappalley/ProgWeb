class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
      this.element = this.#generateCardElement();
    }
  
    display() {
      document.querySelector(".deck").appendChild(this.element);
      this.element.addEventListener("click", this.#toggleHidden.bind(this));
      return this;
    }
  
  
    #generateCardElement() {
      const card = document.createElement("div");
      card.dataset.value = this.value;
      card.dataset.suit = this.suit;
  
      card.classList.add("card");
      card.classList.add("hidden");
      card.classList.add(`v${this.value}`);
      card.classList.add(this.suit.toLowerCase());
  
      const interior = document.createElement("div");
      interior.classList.add("interior");
      interior.insertAdjacentHTML("afterbegin", this.#generateCardInterior());
      card.appendChild(interior);
      return card;
    }
  
  
    #generateCardInterior() {
      if (!isNaN(this.value)) {
        let html = "";
        for (let i = 1; i <= this.value; i++) {
          html += `<div class="symbol"></div>`;
        }
        return html;
      } else {
        return `<div class="title">${this.value}</div>`;
      }
    }

    #toggleHidden() {
      this.element.classList.toggle("hidden");
    }
  }
  
  export default Card;
  