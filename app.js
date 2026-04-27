// ============== 英语绘本馆 - 核心逻辑 ==============

// 当前状态
let currentBook = null;
let currentPage = 0;
let currentWord = null;
let isAutoPlaying = false;
let autoPlayTimer = null;

// 书籍缓存
const bookCache = {};

// GitHub 基础地址 - 换成你的GitHub用户名和仓库名
// 以后你的书籍就上传到这里：https://github.com/tzwj9xt9cp-bit/english-books
const GITHUB_BASE = 'https://raw.githubusercontent.com/tzwj9xt9cp-bit/english-books/main';

// 示例数据 - 以后会替换成从GitHub动态加载
const sampleBooks = booksLibrary;

// ============== 动态加载书籍 ==============

async function loadBookContent(bookId) {
  // 如果已经缓存了，直接返回
  if (bookCache[bookId]) {
    return bookCache[bookId];
  }
  
  // 先在booksLibrary里找这本书的元数据
  const bookInfo = booksLibrary.find(b => b.id === bookId);
  if (!bookInfo) {
    return null;
  }
  
  // 如果书籍自带content，直接用（内嵌的示例书）
  if (bookInfo.content && bookInfo.content.length > 0) {
    bookCache[bookId] = bookInfo;
    return bookInfo;
  }
  
  // 否则尝试从本地JSON文件加载
  try {
    const response = await fetch(`books/${bookId}.json`);
    if (response.ok) {
      const bookData = await response.json();
      bookCache[bookId] = bookData;
      return bookData;
    }
  } catch (e) {
    console.log('无法从本地加载，尝试GitHub:', e);
  }
  
  // 尝试从GitHub加载
  try {
    const response = await fetch(`${GITHUB_BASE}/books/${bookId}.json`);
    if (response.ok) {
      const bookData = await response.json();
      bookCache[bookId] = bookData;
      return bookData;
    }
  } catch (e) {
    console.log('GitHub加载失败:', e);
  }
  
  return null;
}
  // What If? 科普系列
  {
    id: 'what-if-001',
    title: 'What If? 古怪科学问题',
    level: 'L4 科普读物',
    coverIcon: '❓',
    coverBg: '#16a085',
    category: 'science',
    pages: 100,
    content: []
  },
  // Nate the Great 系列 - 第1册
  {
    id: 'nate-great-001',
    title: 'Nate the Great',
    level: 'L2 章节书',
    coverIcon: '🔍',
    coverBg: '#1a5276',
    category: 'classic',
    pages: 12,
    content: [
      "I am Nate the Great. I am a detective. I work very hard. I am the best detective in the world.",
      "One morning I got a phone call. It was my friend Annie. \"Nate the Great, I need you,\" she said. \"I have lost a picture.\" \"I will be right over,\" I said.",
      "I put on my detective coat and my detective hat. I ate a quick breakfast of pancakes. I love pancakes. Then I went to Annie's house.",
      "Annie was waiting for me outside. Her dog Fang was with her. Fang is a big dog. He does not like strangers. He barks at almost everyone. Fang does not bark at me. I know Fang. Fang knows me. Fang and I are friends.",
      "\"Tell me about the picture,\" I said. \"I painted a picture of Fang,\" said Annie. \"It is a very good picture. I left it on the table to dry. Now it is gone.\" \"When did you last see it?\" I asked. \"Ten minutes ago,\" said Annie. \"I went outside to get the mail. When I came back, the picture was gone.\"",
      "\"Who was in the house?\" I asked. \"My brother Harry was home,\" said Annie. \"And my friend Rosamond came to visit. That is all.\" \"First I will look around,\" I said. I walked slowly around the house. I looked under bushes. I looked in the garbage can. I looked everywhere.",
      "I did not find the picture. \"Now I will question the suspects,\" I said. \"Suspects?\" said Annie. \"Who are the suspects?\" \"Harry and Rosamond,\" I said.",
      "\"First I will question Rosamond,\" I said. We went to Rosamond's house. Rosamond has four cats. Her cats are very strange. \"Hello, Rosamond,\" I said. \"We are looking for a picture. Have you seen Annie's picture of Fang?\" \"I do not like dogs,\" said Rosamond. \"I like cats. I would not take a picture of a dog.\"",
      "I believed Rosamond. She loves cats too much. She would not take a dog picture. \"Now I will question Harry,\" I said. We went back to Annie's house. Harry was in his room. He was painting. \"Hello, Harry,\" I said. \"We are looking for Annie's picture. Have you seen it?\"",
      "Harry did not answer. He just kept painting. I watched him paint. He was painting a red monster. I looked closely at Harry's painting. The monster had three heads. It was a very strange monster. Then I saw something. Something yellow was showing through. I knew then what had happened.",
      "\"I, Nate the Great, have found your picture,\" I said. \"Where?\" asked Annie. \"Right here,\" I said. I pointed to Harry's painting. \"Harry painted his red monster right over your yellow picture of Fang.\" Annie looked at the painting. \"Oh, Harry!\" she said.",
      "Harry looked sad. \"I needed a piece of paper,\" he said. \"I did not see your picture. I am sorry.\" \"That is okay,\" said Annie. \"Now I have a picture of Fang with a red monster on his head. It is even more interesting!\" The case was solved. I, Nate the Great, had done it again. I went home. My mother made me pancakes. I love pancakes."
    ]
  },
  {
    id: 'book-001',
    title: 'At School',
    level: 'RAZ AA',
    coverIcon: '🏫',
    coverBg: '#5d6d7e',
    category: 'hot',
    pages: 8,
    content: [
      'I see the teacher.',
      'I see the book.',
      'I see the pencil.',
      'I see the paper.',
      'I see the desk.',
      'I see the chair.',
      'I see the backpack.',
      'I see the school.'
    ]
  },
  {
    id: 'book-002',
    title: 'Colors',
    level: 'RAZ AA',
    coverIcon: '🎨',
    coverBg: '#85929e',
    category: 'hot',
    pages: 8,
    content: [
      'I see red.',
      'I see blue.',
      'I see yellow.',
      'I see green.',
      'I see orange.',
      'I see purple.',
      'I see black.',
      'I see white.'
    ]
  },
  {
    id: 'book-003',
    title: 'Animals',
    level: 'RAZ AA',
    coverIcon: '🐶',
    coverBg: '#7f8c8d',
    category: 'hot',
    pages: 8,
    content: [
      'I see a dog.',
      'I see a cat.',
      'I see a bird.',
      'I see a fish.',
      'I see a rabbit.',
      'I see a mouse.',
      'I see a cow.',
      'I see a pig.'
    ]
  },
  {
    id: 'book-004',
    title: 'The Park',
    level: 'RAZ A',
    coverIcon: '🌳',
    coverBg: '#7d6608',
    category: 'level',
    pages: 10,
    content: [
      'We go to the park.',
      'I see the slide.',
      'I see the swing.',
      'I see the sandbox.',
      'I see the seesaw.',
      'I see the tree.',
      'I see the grass.',
      'I see the flowers.',
      'I see the birds.',
      'I love the park.'
    ]
  },
  {
    id: 'book-005',
    title: 'My Family',
    level: 'RAZ AA',
    coverIcon: '👨‍👩‍👧‍👦',
    coverBg: '#922b21',
    category: 'classic',
    pages: 8,
    content: [
      'This is my mom.',
      'This is my dad.',
      'This is my sister.',
      'This is my brother.',
      'This is my grandma.',
      'This is my grandpa.',
      'This is my dog.',
      'This is my family.'
    ]
  },
  {
    id: 'book-006',
    title: 'A Day at the Beach',
    level: 'RAZ B',
    coverIcon: '🏖️',
    coverBg: '#154360',
    category: 'classic',
    pages: 10,
    content: [
      'Today we go to the beach.',
      'The sun is bright.',
      'The sand is warm.',
      'The water is blue.',
      'I build a sand castle.',
      'My sister collects shells.',
      'We swim in the ocean.',
      'We eat ice cream.',
      'We watch the sunset.',
      'What a fun day!'
    ]
  }
];

// 简单的单词词典 - 以后可以扩展成单独的文件
const wordDict = {
  'i': { phonetic: '/aɪ/', cn: '我' },
  'see': { phonetic: '/siː/', cn: '看见' },
  'the': { phonetic: '/ðə/', cn: '这个' },
  'teacher': { phonetic: '/ˈtiː.tʃər/', cn: '老师' },
  'book': { phonetic: '/bʊk/', cn: '书' },
  'pencil': { phonetic: '/ˈpen.səl/', cn: '铅笔' },
  'paper': { phonetic: '/ˈpeɪ.pər/', cn: '纸' },
  'desk': { phonetic: '/desk/', cn: '书桌' },
  'chair': { phonetic: '/tʃer/', cn: '椅子' },
  'backpack': { phonetic: '/ˈbæk.pæk/', cn: '背包' },
  'school': { phonetic: '/skuːl/', cn: '学校' },
  'red': { phonetic: '/red/', cn: '红色' },
  'blue': { phonetic: '/bluː/', cn: '蓝色' },
  'yellow': { phonetic: '/ˈjel.əʊ/', cn: '黄色' },
  'green': { phonetic: '/ɡriːn/', cn: '绿色' },
  'orange': { phonetic: '/ˈɒr.ɪndʒ/', cn: '橙色' },
  'purple': { phonetic: '/ˈpɜː.pəl/', cn: '紫色' },
  'black': { phonetic: '/blæk/', cn: '黑色' },
  'white': { phonetic: '/waɪt/', cn: '白色' },
  'dog': { phonetic: '/dɒɡ/', cn: '狗' },
  'cat': { phonetic: '/kæt/', cn: '猫' },
  'bird': { phonetic: '/bɜːd/', cn: '鸟' },
  'fish': { phonetic: '/fɪʃ/', cn: '鱼' },
  'rabbit': { phonetic: '/ˈræb.ɪt/', cn: '兔子' },
  'mouse': { phonetic: '/maʊs/', cn: '老鼠' },
  'cow': { phonetic: '/kaʊ/', cn: '奶牛' },
  'pig': { phonetic: '/pɪɡ/', cn: '猪' },
  'we': { phonetic: '/wiː/', cn: '我们' },
  'go': { phonetic: '/ɡəʊ/', cn: '去' },
  'to': { phonetic: '/tuː/', cn: '到' },
  'park': { phonetic: '/pɑːk/', cn: '公园' },
  'slide': { phonetic: '/slaɪd/', cn: '滑梯' },
  'swing': { phonetic: '/swɪŋ/', cn: '秋千' },
  'sandbox': { phonetic: '/ˈsænd.bɒks/', cn: '沙盒' },
  'seesaw': { phonetic: '/ˈsiː.sɔː/', cn: '跷跷板' },
  'tree': { phonetic: '/triː/', cn: '树' },
  'grass': { phonetic: '/ɡrɑːs/', cn: '草' },
  'flower': { phonetic: '/ˈflaʊ.ər/', cn: '花' },
  'love': { phonetic: '/lʌv/', cn: '爱' },
  'this': { phonetic: '/ðɪs/', cn: '这个' },
  'is': { phonetic: '/ɪz/', cn: '是' },
  'my': { phonetic: '/maɪ/', cn: '我的' },
  'mom': { phonetic: '/mɒm/', cn: '妈妈' },
  'dad': { phonetic: '/dæd/', cn: '爸爸' },
  'sister': { phonetic: '/ˈsɪs.tər/', cn: '姐姐/妹妹' },
  'brother': { phonetic: '/ˈbrʌð.ər/', cn: '哥哥/弟弟' },
  'grandma': { phonetic: '/ˈɡrænd.mɑː/', cn: '奶奶/外婆' },
  'grandpa': { phonetic: '/ˈɡrænd.pɑː/', cn: '爷爷/外公' },
  'family': { phonetic: '/ˈfæm.əl.i/', cn: '家庭' },
  'today': { phonetic: '/təˈdeɪ/', cn: '今天' },
  'beach': { phonetic: '/biːtʃ/', cn: '海滩' },
  'sun': { phonetic: '/sʌn/', cn: '太阳' },
  'bright': { phonetic: '/braɪt/', cn: '明亮的' },
  'sand': { phonetic: '/sænd/', cn: '沙子' },
  'warm': { phonetic: '/wɔːm/', cn: '温暖的' },
  'water': { phonetic: '/ˈwɔː.tər/', cn: '水' },
  'build': { phonetic: '/bɪld/', cn: '建造' },
  'castle': { phonetic: '/ˈkɑː.səl/', cn: '城堡' },
  'collect': { phonetic: '/kəˈlekt/', cn: '收集' },
  'shell': { phonetic: '/ʃel/', cn: '贝壳' },
  'swim': { phonetic: '/swɪm/', cn: '游泳' },
  'ocean': { phonetic: '/ˈəʊ.ʃən/', cn: '海洋' },
  'eat': { phonetic: '/iːt/', cn: '吃' },
  'ice': { phonetic: '/aɪs/', cn: '冰' },
  'cream': { phonetic: '/kriːm/', cn: '奶油' },
  'watch': { phonetic: '/wɒtʃ/', cn: '看' },
  'sunset': { phonetic: '/ˈsʌn.set/', cn: '日落' },
  'what': { phonetic: '/wɒt/', cn: '什么' },
  'fun': { phonetic: '/fʌn/', cn: '有趣的' },
  'day': { phonetic: '/deɪ/', cn: '一天' }
};

// ============== 页面导航 ==============

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showPage('home-page');
  renderAllBooks();
}

function goWords() {
  renderWordList();
  showPage('words-page');
}

function goMy() {
  showPage('my-page');
}

function goRaz() {
  showToast('RAZ分级阅读即将上线 🎯');
}

function goBackFromReader() {
  if (isAutoPlaying) {
    toggleAutoPlay(); // 停止自动播放
  }
  if (currentBook) {
    showPage('home-page');
  } else {
    goHome();
  }
  currentBook = null;
}

// ============== 渲染书籍列表 ==============

function renderAllBooks() {
  renderBookGrid('hot-books', sampleBooks.filter(b => b.category === 'hot'));
  renderBookGrid('level-books', sampleBooks.filter(b => b.category === 'level'));
  renderBookGrid('classic-books', sampleBooks.filter(b => b.category === 'classic'));
}

function renderBookGrid(elementId, books) {
  const el = document.getElementById(elementId);
  el.innerHTML = books.map(book => {
    // 如果有封面图片就用图片，没有就用默认背景+图标
    const coverStyle = book.coverImg 
      ? `background-image: url(${book.coverImg})` 
      : `background: ${book.coverBg || '#f0f0f0'}`;
    
    return `
    <div class="book-card" onclick="openBook('${book.id}')">
      <div class="book-cover" style="${coverStyle}">
        ${book.coverImg ? '' : book.coverIcon}
      </div>
      <div class="book-name">${book.title}</div>
      <div class="book-level">${book.level}</div>
    </div>
  `}).join('');
}

function filterLevel(level) {
  // 切换标签样式
  document.querySelectorAll('.level-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  
  // 过滤书籍
  let filtered = sampleBooks;
  if (level !== 'all') {
    filtered = sampleBooks.filter(b => b.level.toLowerCase().includes(level));
  }
  
  renderBookGrid('level-books', filtered);
}

// ============== 阅读器核心功能 ==============

async function openBook(bookId) {
  // 显示加载提示
  showToast('正在加载书籍...');
  
  // 加载书籍内容
  const book = await loadBookContent(bookId);
  if (!book) {
    showToast('书籍加载失败');
    return;
  }
  
  currentBook = book;
  currentPage = 0;
  
  document.getElementById('reader-book-title').textContent = book.title;
  renderReaderPage();
  showPage('reader-page');
}

function renderReaderPage() {
  if (!currentBook) return;
  
  const pageText = currentBook.content[currentPage];
  const readerEl = document.getElementById('reader-content');
  
  // 将句子拆分成单词，每个单词可点击
  const words = pageText.split(' ').map(word => {
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    return `<span onclick="clickWord('${cleanWord}', this)">${word}</span>`;
  }).join(' ');
  
  readerEl.innerHTML = `
    <div class="reader-page">
      <div class="reader-text">
        ${words}
      </div>
    </div>
  `;
  
  document.getElementById('page-info').textContent = 
    `第 ${currentPage + 1} / ${currentBook.pages} 页`;
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderReaderPage();
    if (isAutoPlaying) {
      setTimeout(autoPlayCurrentPage, 300);
    }
  }
}

function nextPage() {
  if (currentBook && currentPage < currentBook.pages - 1) {
    currentPage++;
    renderReaderPage();
    if (isAutoPlaying) {
      setTimeout(autoPlayCurrentPage, 300);
    }
  } else if (isAutoPlaying) {
    // 读完了
    isAutoPlaying = false;
    showToast('阅读完成！🎉');
  }
}

// ============== 单词点读功能 ==============

function clickWord(word, element) {
  // 先停止自动播放
  if (isAutoPlaying) {
    speechSynthesis.cancel();
  }
  
  // 高亮当前单词
  document.querySelectorAll('.reader-text span').forEach(s => s.classList.remove('active'));
  element.classList.add('active');
  
  currentWord = word;
  
  // 查找单词信息
  const wordInfo = wordDict[word.toLowerCase()] || {
    phonetic: '/?/',
    cn: '点击播放发音'
  };
  
  document.getElementById('modal-word-en').textContent = word;
  document.getElementById('modal-word-phonetic').textContent = wordInfo.phonetic;
  document.getElementById('modal-word-cn').textContent = wordInfo.cn;
  
  document.getElementById('word-modal').classList.add('active');
  
  // 自动播放发音
  setTimeout(() => playWordAudio(), 300);
}

function closeWordModal() {
  document.getElementById('word-modal').classList.remove('active');
  currentWord = null;
  
  // 如果在自动播放模式，关闭弹窗后继续播放
  if (isAutoPlaying) {
    setTimeout(autoPlayCurrentPage, 500);
  }
}

function playWordAudio() {
  if (!currentWord) return;
  
  // 使用浏览器的语音合成
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(currentWord);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
}

// ============== 生词本功能 ==============

function getWords() {
  const words = localStorage.getItem('reader_words');
  return words ? JSON.parse(words) : [];
}

function saveWords(words) {
  localStorage.setItem('reader_words', JSON.stringify(words));
}

function addToWords() {
  if (!currentWord) return;
  
  const words = getWords();
  const wordInfo = wordDict[currentWord.toLowerCase()] || {
    phonetic: '/?/',
    cn: ''
  };
  
  // 检查是否已经存在
  if (!words.find(w => w.word === currentWord)) {
    words.unshift({
      word: currentWord,
      phonetic: wordInfo.phonetic,
      cn: wordInfo.cn,
      mastered: false,
      addTime: Date.now()
    });
    saveWords(words);
  }
  
  closeWordModal();
  showToast('已加入生词本 ✓');
}

function renderWordList() {
  const words = getWords();
  const listEl = document.getElementById('word-list');
  const emptyEl = document.getElementById('words-empty');
  
  // 更新统计
  document.getElementById('total-words').textContent = words.length;
  document.getElementById('mastered-words').textContent = words.filter(w => w.mastered).length;
  document.getElementById('review-words').textContent = words.filter(w => !w.mastered).length;
  
  if (words.length === 0) {
    listEl.innerHTML = '';
    emptyEl.style.display = 'block';
    return;
  }
  
  emptyEl.style.display = 'none';
  
  listEl.innerHTML = words.map(w => `
    <div class="word-item">
      <div class="word-left">
        <div class="word-en-item">${w.word}</div>
        <div class="word-cn-item">${w.phonetic} · ${w.cn}</div>
      </div>
      <div class="word-actions-item">
        <button class="word-btn-item play" onclick="playThisWord('${w.word}')">🔊</button>
        <button class="word-btn-item mastered" onclick="toggleMastered('${w.word}')">
          ${w.mastered ? '✓ 已掌握' : '掌握'}
        </button>
      </div>
    </div>
  `).join('');
}

function playThisWord(word) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  }
}

function toggleMastered(word) {
  const words = getWords();
  const w = words.find(item => item.word === word);
  if (w) {
    w.mastered = !w.mastered;
    saveWords(words);
    renderWordList();
    showToast(w.mastered ? '太棒了！✓' : '可以继续复习哦');
  }
}

// ============== 自动播放功能 ==============

function toggleAutoPlay() {
  isAutoPlaying = !isAutoPlaying;
  
  if (isAutoPlaying) {
    showToast('自动播放已开启');
    autoPlayCurrentPage();
  } else {
    showToast('自动播放已关闭');
    speechSynthesis.cancel();
    if (autoPlayTimer) {
      clearTimeout(autoPlayTimer);
      autoPlayTimer = null;
    }
  }
}

function autoPlayCurrentPage() {
  if (!isAutoPlaying || !currentBook) return;
  
  const pageText = currentBook.content[currentPage];
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(pageText);
    utterance.lang = 'en-US';
    utterance.rate = 0.75;
    utterance.onend = function() {
      // 读完一页后停顿1秒，然后下一页
      if (isAutoPlaying && currentPage < currentBook.pages - 1) {
        autoPlayTimer = setTimeout(() => {
          nextPage();
        }, 1000);
      } else if (isAutoPlaying) {
        isAutoPlaying = false;
        showToast('阅读完成！🎉');
      }
    };
    speechSynthesis.speak(utterance);
  }
}

// ============== 工具函数 ==============

function showToast(message, duration = 2000) {
  // 简单的toast提示
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 2000;
    opacity: 0;
    transition: opacity 0.3s;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.style.opacity = '1', 10);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ============== 初始化 ==============

document.addEventListener('DOMContentLoaded', function() {
  console.log('📚 英语绘本馆已启动');
  
  // 渲染书籍列表
  renderAllBooks();
  
  // 初始化我的页面统计
  const words = getWords();
  document.getElementById('my-words').textContent = words.length;
  document.getElementById('my-books').textContent = 6;
  document.getElementById('my-days').textContent = 3;
});
