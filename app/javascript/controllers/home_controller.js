import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  initialize() {
    this.boundCursor = this.cursor.bind(this);
  }

  connect() {
    console.log("welcome to the home page!")
    
    window.addEventListener("mousemove", this.boundCursor)

    let experienceCards = document.querySelectorAll(".experience-cards")
    let cardText = document.querySelectorAll(".card-text")
    let mouseCursor = document.querySelector(".cursor")
    let nameBox = document.querySelectorAll(".name-box")

    experienceCards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        console.log("mouseover")
        mouseCursor.classList.add("cursor-grow")
      });
      card.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow")
        card.classList.remove("hovered-card")
      })
    })

    cardText.forEach((text) => {
      text.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-grow")
        text.classList.add("hovered-card")
      });
      text.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow")
        text.classList.remove("hovered-card")
      })
    })

    nameBox.forEach((name) => {
      name.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-grow")
        for (let i = 0; i < nameBox.length; i++) {
          nameBox[i].classList.add("hovered-card")
        }
      });
      name.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow")
        for (let i = 0; i < nameBox.length; i++) {
          nameBox[i].classList.remove("hovered-card")
        }
      })
    })

  }

  cursor(e) {
    let mouseCursor = document.querySelector(".cursor")
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
  }

}
