import getTextFragment from './text-fragment';

document.addEventListener('DOMContentLoaded', function () {

  let text = `
  Aim lower than your audience’s education.

  Your audience may be highly educated and able to understand material at the post-graduate level. It’s still important to keep your reading level low.

  Most folks, no matter how well educated, would rather not read copy that scores much higher than 12. That’s why The Wall Street Journal is written at the 11th-grade level. (And nobody ever complains that the Journal is too easy!).

  “People prefer to read and get information at a level below their capacity,” says Douglas Mueller, president of the Gunning-Mueller Clear Writing Institute. “Even a Harvard University professor prefers to get information without strain.”

  About the Fog index.

  In the mid-1930s, textbook publisher Robert Gunning realized that much of America’s reading problem was actually a writing problem. He found that news and business writing was full of “fog,” or unnecessary complexity.

  In 1944, he founded the first readability consulting firm. During the next few years, he tested and consulted with more than 60 newspapers and magazines. He also correlated magazine reading levels with total circulation. (The lower the Fog, the higher the circulation.).

  He developed the Fog Index in 1952.

  Gunning worked with the United Press, helping bring the reading level of front-page newspaper stories from the 16th to the 11th grade. He also helped The Wall Street Journal reduce its level from 14th to 11th grade. In the process, the Journal’s circulation rocketed from less than 50,000 to more than 1 million in a decade.

  Aim lower than your audience’s education.

  Your audience may be highly educated and able to understand material at the post-graduate level. It’s still important to keep your reading level low.

  Most folks, no matter how well educated, would rather not read copy that scores much higher than 12. That’s why The Wall Street Journal is written at the 11th-grade level. (And nobody ever complains that the Journal is too easy!).

  “People prefer to read and get information at a level below their capacity,” says Douglas Mueller, president of the Gunning-Mueller Clear Writing Institute. “Even a Harvard University professor prefers to get information without strain.”

  About the Fog index.

  In the mid-1930s, textbook publisher Robert Gunning realized that much of America’s reading problem was actually a writing problem. He found that news and business writing was full of “fog,” or unnecessary complexity.

  In 1944, he founded the first readability consulting firm. During the next few years, he tested and consulted with more than 60 newspapers and magazines. He also correlated magazine reading levels with total circulation. (The lower the Fog, the higher the circulation.).

  He developed the Fog Index in 1952.

  Gunning worked with the United Press, helping bring the reading level of front-page newspaper stories from the 16th to the 11th grade. He also helped The Wall Street Journal reduce its level from 14th to 11th grade. In the process, the Journal’s circulation rocketed from less than 50,000 to more than 1 million in a decade.
  `;

  let textFrag = getTextFragment(text);

  console.log(textFrag);


});
