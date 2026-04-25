// 书籍数据 - 本地存储模式
// 添加新书直接在这里加就行

const books = [
  // ============ 示例书籍 ============
  {
    id: '1',
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    level: "AR 3.5",
    pages: 192,
    coverBg: "#667eea",
    coverIcon: "🐰",
    category: "经典童话",
    hasAudio: false,
    content: `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is the use of a book,' thought Alice 'without pictures or conversations?'

So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.

There was nothing so VERY remarkable in that; nor did Alice think it so VERY much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually TOOK A WATCH OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.

In another moment down went Alice after it, never once considering how in the world she was to get out again.`
  },
  {
    id: '2',
    title: "The Adventures of Tom Sawyer",
    author: "Mark Twain",
    level: "AR 4.6",
    pages: 224,
    coverBg: "#f093fb",
    coverIcon: "🏃",
    category: "冒险故事",
    hasAudio: false,
    content: `"TOM!"

No answer.

"TOM!"

No answer.

"What's gone with that boy, I wonder? You TOM!"

No answer.

The old lady pulled her spectacles down and looked over them about the room; then she put them up and looked out under them. She seldom or never looked through them for so small a thing as a boy; they were her state pair, the pride of her heart, and were built for "style," not service—she could have seen through a pair of stove-lids just as well. She looked perplexed for a moment, and then said, not fiercely, but still loud enough for the furniture to hear:

"Well, I lay if I get hold of you I'll—"

She did not finish, for by this time she was bending down and punching under the bed with the broom, and so she needed breath to punctuate the punches with. She resurrected nothing but the cat.

"I never did see the beat of that boy!"

She went to the open door and stood in it and looked out among the tomato vines and "jimpson" weeds that constituted the garden. No Tom.`
  }
]

// 获取所有书籍
function getAllBooks() {
  return books
}

// 根据ID获取书籍
function getBookById(id) {
  return books.find(book => book.id === id)
}

// 添加新书（临时用，刷新会丢失，正式使用直接加到上面的数组）
function addBook(bookData) {
  const newBook = {
    ...bookData,
    id: Date.now().toString()
  }
  books.unshift(newBook)
  return newBook
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook
}
