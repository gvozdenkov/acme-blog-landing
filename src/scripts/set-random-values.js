import { randomeImages, titles, shortTexts, longTexts, getRandomItem } from './random-assets';

var getRandomTitle = getRandomItem(titles);
var getRandomTextShort = getRandomItem(shortTexts);
var getRandomTextLong = getRandomItem(longTexts);

var imgElements = document.querySelectorAll('.random-img');
var titleElements = document.querySelectorAll('.random-title');
var shortTextElements = document.querySelectorAll('.random-text');
var longTextElements = document.querySelectorAll('.random-text-l');

imgElements.forEach(
  function (img, i) {
    img.src = this.randomeImages[i];
  },
  {
    randomeImages,
  }
);

titleElements.forEach(
  function (title, i) {
    title.innerHTML = this.getRandomTitle();
  },
  {
    getRandomTitle,
  }
);

shortTextElements.forEach(
  function (title, i) {
    title.innerHTML = this.getRandomTextShort();
  },
  {
    getRandomTextShort,
  }
);

longTextElements.forEach(
  function (title, i) {
    title.innerHTML = this.getRandomTextLong();
  },
  {
    getRandomTextLong,
  }
);
