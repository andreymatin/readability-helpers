/**
 * Get Random Fragment from Content
 *
 * Content
 * @param {string} content
 *
 * Min Words
 * @param {int} minWords
 *
 * Max Words
 * @param {int} maxWords
 *
 * Random Sentences
 * @param {bool} rnd
 *
 * @init 04/26/2020
 * @update 04/26/2020
 */
const getTextFragment = (content, minWords = 100, maxWords = 200, rnd = 1) => {


  // Init Words
  let w = 0;

  // Init Words Shift
  let wShift = Math.floor((Math.random() * (maxWords - minWords)) / 2);

  // Words Count
  let wCount = content.split(' ').length;

  if (wCount > minWords) {

    // Sentences
    let sList = content.match(/[^\.!\?]+[\.!\?]+/g);

    // Sentences Count
    let sListLength = sList.length;

    // Set an array with indexes
    let a = [];
    for (let i = 0; i < sListLength; i++) {
      a.push(i);
    }

    // Random Sentences
    let sRndRes = [];
    while (a.length > 1) {

      let si = 0;

      if (rnd === 1) {
        // Get Sentences Index
        si = Math.floor(Math.random() * a.length);
      }

      // Get Sentence
      let s = sList[a[si]];
      sRndRes.push(s);

      // Remove Index from array
      a.splice(si, 1);

      // Get words count
      let wCount = s.split(' ').length;
      w += wCount;

      if ((w > minWords + wShift) && (w < maxWords)) {
        return sRndRes;
      }
    }

  } // end. if
  else {
    return 0;
  }

  return 0;
}

export default getTextFragment;
