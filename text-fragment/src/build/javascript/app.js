(function () {
  'use strict';

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
   */
  var getTextFragment = function getTextFragment(content) {
    var minWords = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var maxWords = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    var rnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    // Init Words
    var w = 0; // Init Words Shift

    var wShift = Math.floor(Math.random() * (maxWords - minWords) / 2); // Words Count

    var wCount = content.split(' ').length;

    if (wCount > minWords) {
      // Sentences
      var sList = content.match(/[^\.!\?]+[\.!\?]+/g); // Sentences Count

      var sListLength = sList.length; // Set an array with indexes

      var a = [];

      for (var i = 0; i < sListLength; i++) {
        a.push(i);
      } // Random Sentences


      var sRndRes = [];

      while (a.length > 1) {
        var si = 0;

        if (rnd === 1) {
          // Get Sentences Index
          si = Math.floor(Math.random() * a.length);
        } // Get Sentence


        var s = sList[a[si]];
        sRndRes.push(s); // Remove Index from array

        a.splice(si, 1); // Get words count

        var _wCount = s.split(' ').length;
        w += _wCount;

        if (w > minWords + wShift && w < maxWords) {
          return sRndRes;
        }
      }
    } // end. if
    else {
        return 0;
      }

    return 0;
  };

  document.addEventListener('DOMContentLoaded', function () {
    var text = "\n  Aim lower than your audience\u2019s education.\n\n  Your audience may be highly educated and able to understand material at the post-graduate level. It\u2019s still important to keep your reading level low.\n\n  Most folks, no matter how well educated, would rather not read copy that scores much higher than 12. That\u2019s why The Wall Street Journal is written at the 11th-grade level. (And nobody ever complains that the Journal is too easy!).\n\n  \u201CPeople prefer to read and get information at a level below their capacity,\u201D says Douglas Mueller, president of the Gunning-Mueller Clear Writing Institute. \u201CEven a Harvard University professor prefers to get information without strain.\u201D\n\n  About the Fog index.\n\n  In the mid-1930s, textbook publisher Robert Gunning realized that much of America\u2019s reading problem was actually a writing problem. He found that news and business writing was full of \u201Cfog,\u201D or unnecessary complexity.\n\n  In 1944, he founded the first readability consulting firm. During the next few years, he tested and consulted with more than 60 newspapers and magazines. He also correlated magazine reading levels with total circulation. (The lower the Fog, the higher the circulation.).\n\n  He developed the Fog Index in 1952.\n\n  Gunning worked with the United Press, helping bring the reading level of front-page newspaper stories from the 16th to the 11th grade. He also helped The Wall Street Journal reduce its level from 14th to 11th grade. In the process, the Journal\u2019s circulation rocketed from less than 50,000 to more than 1 million in a decade.\n\n  Aim lower than your audience\u2019s education.\n\n  Your audience may be highly educated and able to understand material at the post-graduate level. It\u2019s still important to keep your reading level low.\n\n  Most folks, no matter how well educated, would rather not read copy that scores much higher than 12. That\u2019s why The Wall Street Journal is written at the 11th-grade level. (And nobody ever complains that the Journal is too easy!).\n\n  \u201CPeople prefer to read and get information at a level below their capacity,\u201D says Douglas Mueller, president of the Gunning-Mueller Clear Writing Institute. \u201CEven a Harvard University professor prefers to get information without strain.\u201D\n\n  About the Fog index.\n\n  In the mid-1930s, textbook publisher Robert Gunning realized that much of America\u2019s reading problem was actually a writing problem. He found that news and business writing was full of \u201Cfog,\u201D or unnecessary complexity.\n\n  In 1944, he founded the first readability consulting firm. During the next few years, he tested and consulted with more than 60 newspapers and magazines. He also correlated magazine reading levels with total circulation. (The lower the Fog, the higher the circulation.).\n\n  He developed the Fog Index in 1952.\n\n  Gunning worked with the United Press, helping bring the reading level of front-page newspaper stories from the 16th to the 11th grade. He also helped The Wall Street Journal reduce its level from 14th to 11th grade. In the process, the Journal\u2019s circulation rocketed from less than 50,000 to more than 1 million in a decade.\n  ";
    var textFrag = getTextFragment(text);
    console.log(textFrag);
  });

}());
//# sourceMappingURL=app.js.map
