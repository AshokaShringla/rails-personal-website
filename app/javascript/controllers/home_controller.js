import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["partialdata"]

  initialize() {
    this.boundCursor = this.cursor.bind(this);
    this.boundLoadExperience = this.loadExperience.bind(this);
  }

  connect() {
    console.log("welcome to the home page!")
    
    window.addEventListener("mousemove", this.boundCursor)

    let experienceCards = document.querySelectorAll(".experience-cards")
    let cardText = document.querySelectorAll(".card-text")
    let mouseCursor = document.querySelector(".cursor")
    let nameBox = document.querySelectorAll(".name-box")
    let experienceButton = document.getElementById("experience-button")

    experienceCards.forEach((card) => {
      card.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-grow")
        card.classList.add("hovered-card")

        // for cards that are not hovered if above then add class 'pushed-up-card', else if below add class 'pushed-down-card'
        // for (let i = 0; i < experienceCards.length; i++) {
        //   if (experienceCards[i] === card) {
        //     continue;
        //   } else if (parseInt(experienceCards[i].id) < parseInt(card.id)) {
        //     if (experienceCards[i].id == "2" ){
        //       console.log("card 2")
        //       experienceCards[i].classList.add("pushed-up-card")
        //       console.log("pushed up middle")
        //     } else {
        //       experienceCards[i].classList.add("pushed-up-card")
        //       console.log("pushed up")
        //     }
        //   } else if (parseInt(experienceCards[i].id) > parseInt(card.id)) {
        //     if (experienceCards[i].id == "2" ){
        //       console.log("card 2")
        //       experienceCards[i].classList.add("pushed-down-card")
        //       console.log("pushed down middle")
        //     } else {
        //       experienceCards[i].classList.add("pushed-down-card")
        //       console.log("pushed down")
        //     }
        //   }
        // }
        

      });
      card.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow")
        card.classList.add("not-hovered-card")
        card.classList.remove("hovered-card")
        // wait 0.5 seconds before removing class 'not-hovered-card'
        setTimeout(() => {
          card.classList.remove("not-hovered-card")
        }, 300)

        // for cards that are not hovered if above then remove class 'pushed-up-card', else if below remove class 'pushed-down-card'
        // for (let i = 0; i < experienceCards.length; i++) {
        //   if (experienceCards[i] === card) {
        //     continue;
        //   } else if (parseInt(experienceCards[i].id) < parseInt(card.id)) {
        //     experienceCards[i].classList.add("pushed-up-removal-card")
        //     setTimeout(() => {
        //       experienceCards[i].classList.remove("pushed-up-removal-card")
        //     }, 500)
        //     if (experienceCards[i].id == "2" ){
        //       experienceCards[i].classList.remove("pushed-up-card")
        //     } else {
        //       experienceCards[i].classList.remove("pushed-up-card")
        //     }
        //   } else if (parseInt(experienceCards[i].id) > parseInt(card.id)) {
        //     experienceCards[i].classList.add("pushed-down-removal-card")
        //     setTimeout(() => {
        //       experienceCards[i].classList.remove("pushed-down-removal-card")
        //     }, 500)
        //     if (experienceCards[i].id == "2" ){
        //       experienceCards[i].classList.remove("pushed-down-card")
        //     } else {
        //       experienceCards[i].classList.remove("pushed-down-card")
        //     }
        //   }
        // }

      })
    })

    cardText.forEach((text) => {
      text.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-grow")
        text.classList.add("hovered-text")
      });
      text.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow")
        text.classList.remove("hovered-text")
      })
    })

    experienceButton.addEventListener("click", this.boundLoadExperience)

    // wait 4 seconds before next part
    setTimeout(() => {
      nameBox.forEach((name) => {
        name.addEventListener("mouseover", () => {
          mouseCursor.classList.add("cursor-grow")
          for (let i = 0; i < nameBox.length; i++) {
            nameBox[i].classList.add("hovered-text")
          }
        });
        name.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("cursor-grow")
          for (let i = 0; i < nameBox.length; i++) {
            nameBox[i].classList.add("hovered-removal-text")
            setTimeout(() => {
              nameBox[i].classList.remove("hovered-removal-text")
            }, 500)
            nameBox[i].classList.remove("hovered-text")
          }
        })
      })
    }, 3000)

  }

  loadExperience(e) {
    console.log("parial loaded with experience")

    console.log('/home/experience')

    fetch('/home/experience')
      .then(response => response.text())
      .then(html => {
        this.partialdataTarget.innerHTML = html
      })
  }

  cursor(e) {
    let mouseCursor = document.querySelector(".cursor")
    mouseCursor.style.top = e.pageY + "px"
    mouseCursor.style.left = e.pageX + "px"
  }

}
