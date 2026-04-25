// 书籍索引 - 只放书籍基本信息，内容按需下载
// 书籍内容和音频传CDN后，把链接填进来就行

const bookIndex = [
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
    // 内容链接（以后放CDN地址）
    contentUrl: '',
    // 音频链接（以后放CDN地址）
    audioUrl: '',
    // 内容是内置的还是远程的
    isLocal: true
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
    contentUrl: '',
    audioUrl: '',
    isLocal: true
  }
]

// 获取所有书籍列表
function getAllBooks() {
  return bookIndex.map(book => ({
    ...book,
    // 列表只返回基本信息，不返回内容
    content: undefined
  }))
}

// 根据ID获取书籍基本信息
function getBookMeta(id) {
  return bookIndex.find(book => book.id === id)
}

// 添加书籍到索引（管理后台用）
function addBookToIndex(bookData) {
  const newBook = {
    ...bookData,
    id: Date.now().toString(),
    isLocal: false
  }
  bookIndex.unshift(newBook)
  return newBook
}

module.exports = {
  getAllBooks,
  getBookMeta,
  addBookToIndex
}
