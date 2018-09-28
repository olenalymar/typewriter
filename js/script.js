// ES5 version:
//
// const TypeWritter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// // type method
// TypeWritter.prototype.type = function() {
//   // current index of word
//   const current = this.wordIndex % this.words.length;
//   // get full text of current word
//   const fullTxt = this.words[current];
//   // check if deleting
//   if (this.isDeleting) {
//     // remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // insert txt into element
//   this.txtElement.innerHTML = `<span class=txt>${this.txt}</span>`;

//   // initial type speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   //if word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     // make pause at the end
//     typeSpeed = this.wait;
//     // set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // move to the next word
//     this.wordIndex++;
//     // pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), 500);
// };

// // init on DOM load
// document.addEventListener('DOMContentLoaded', init);

// // init app
// function init() {
//   const txtElement = document.querySelector('.txt-type');
//   const words = JSON.parse(txtElement.getAttribute('data-words'));
//   const wait = txtElement.getAttribute('data-wait');

//   // init typewritter
//   new TypeWritter(txtElement, words, wait);
// }

// --------------------
// ES6 Class
// --------------------
class TypeWritter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    // current index of word
    const current = this.wordIndex % this.words.length;
    // get full text of current word
    const fullTxt = this.words[current];
    // check if deleting
    if (this.isDeleting) {
      // remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // insert txt into element
    this.txtElement.innerHTML = `<span class=txt>${this.txt}</span>`;

    // initial type speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // make pause at the end
      typeSpeed = this.wait;
      // set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // move to the next word
      this.wordIndex++;
      // pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), 400);
  }
}

// init on DOM load
document.addEventListener('DOMContentLoaded', init);

// init app
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // init typewritter
  new TypeWritter(txtElement, words, wait);
}
