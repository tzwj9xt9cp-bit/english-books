// ============== 书籍库 ==============
// 所有书籍的元数据，不包含具体内容
// 具体内容在 books/ 文件夹下，打开书时动态加载

const booksLibrary = [
  // What If? 科普系列 - 前100页
  (function() {
    // 把前100页内容直接放进来
    const pages = [
      "what if? Serious Scientific Answers to Absurd Hypothetical Questions RANDALL MUNROE HOUGHTON MIFFLIN HARCOURT 2014 • BOSTON • NEW YORK",
      "Copyright © 2014 by xkcd Inc. all rights reserved For information about permission to reproduce selections from this book, write to Permissions, Houghton Mifflin Harcourt Publishing Company, 215 Park Avenue South, New York, New York 10003. www.hmhco.com",
      "Introduction This book is a collection of answers to hypothetical questions. These questions were submitted to me through my website, where — in addition to serving as a sort of Dear Abby for mad scientists — I draw xkcd, a stick-figure webcomic.",
      "I went to school for physics, and after graduating, I worked on robotics at NASA. I eventually left NASA to draw comics full-time, but my interest in science and math didn't fade. Eventually, it found a new outlet: answering the Internet's weird — and sometimes worrying — questions.",
      "I've been using math to try to answer weird questions for as long as I can remember. When I was five years old, my mother had a conversation with me that she wrote down and saved in a photo album.",
      "Global Windstorm Q. What would happen if the Earth and all terrestrial objects suddenly stopped spinning, but the atmosphere retained its velocity? —Andrew Brown A. Nearly everyone would die. Then things would get interesting.",
      "At the equator, the Earth's surface is moving at about 470 meters per second — a little over a thousand miles per hour — relative to its axis. If the Earth stopped and the air didn't, the result would be a sudden thousand-mile-per-hour wind.",
      "The wind would be highest at the equator, but everyone and everything living between 42 degrees north and 42 degrees south — which includes about 85 percent of the world's population — would suddenly experience supersonic winds.",
      "The highest winds would last for only a few minutes near the surface; friction with the ground would slow them down. However, those few minutes would be long enough to reduce virtually all human structures to ruins.",
      "My home in Boston is far enough north to be just barely outside the supersonic wind zone, but the winds there would still be twice as strong as those in the most powerful tornadoes.",
      "Buildings, from sheds to skyscrapers, would be smashed flat, torn from their foundations, and sent tumbling across the landscape. Winds would be lower near the poles, but no human cities are far enough from the equator to escape devastation.",
      "The human race wouldn't go extinct. Very few people above the surface would survive; the flying debris would pulverize anything that wasn't nuclear-hardened. However, a lot of people below the surface of the ground would survive just fine.",
      "Relativistic Baseball Q. What would happen if you tried to hit a baseball pitched at 90 percent the speed of light? —Ellen McManis Let's set aside the question of how we got the baseball moving that fast.",
      "We'll suppose it's a normal pitch, except in the instant the pitcher releases the ball, it magically accelerates to 0.9c. From that point onward, everything proceeds according to normal physics.",
      "The answer turns out to be 'a lot of things,' and they all happen very quickly, and it doesn't end well for the batter (or the pitcher). I sat down with some physics books, a Nolan Ryan action figure, and a bunch of videotapes of nuclear tests and tried to sort it all out.",
      "What follows is my best guess at a nanosecond-by-nanosecond portrait. The ball would be going so fast that everything else would be practically stationary. Even the molecules in the air would stand still.",
      "The ideas of aerodynamics wouldn't apply here. Normally, air would flow around anything moving through it. But the air molecules in front of this ball wouldn't have time to be jostled out of the way.",
      "The ball would smack into them so hard that the atoms in the air molecules would actually fuse with the atoms in the ball's surface. Each collision would release a burst of gamma rays and scattered particles.",
      "These gamma rays and debris would expand outward in a bubble centered on the pitcher's mound. They would start to tear apart the molecules in the air, ripping the electrons from the nuclei and turning the air in the stadium into an expanding bubble of incandescent plasma.",
      "The wall of this bubble would approach the batter at about the speed of light — only slightly ahead of the ball itself. After about 70 nanoseconds the ball would arrive at home plate.",
      "The batter wouldn't even have seen the pitcher let go of the ball, since the light carrying that information would arrive at about the same time the ball would. Everything within roughly a mile of the park would be leveled.",
      "Major League Baseball Rule 6.08(b) suggests that in this situation, the batter would be considered 'hit by pitch,' and would be eligible to advance to first base."
    ];
    
    return {
      id: 'what-if-001',
      title: 'What If? 古怪科学问题',
      level: 'L4 科普读物',
      coverIcon: '❓',
      coverBg: '#16a085',
      category: 'science',
      pages: pages.length,
      content: pages
    };
  })(),
  
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
      "One morning I got a phone call. It was my friend Annie. 'Nate the Great, I need you,' she said. 'I have lost a picture.' 'I will be right over,' I said.",
      "I put on my detective coat and my detective hat. I ate a quick breakfast of pancakes. I love pancakes. Then I went to Annie's house.",
      "Annie was waiting for me outside. Her dog Fang was with her. Fang is a big dog. He does not like strangers. He barks at almost everyone. Fang does not bark at me. I know Fang. Fang knows me. Fang and I are friends.",
      "'Tell me about the picture,' I said. 'I painted a picture of Fang,' said Annie. 'It is a very good picture. I left it on the table to dry. Now it is gone.' 'When did you last see it?' I asked. 'Ten minutes ago,' said Annie. 'I went outside to get the mail. When I came back, the picture was gone.'",
      "'Who was in the house?' I asked. 'My brother Harry was home,' said Annie. 'And my friend Rosamond came to visit. That is all.' 'First I will look around,' I said. I walked slowly around the house. I looked under bushes. I looked in the garbage can. I looked everywhere.",
      "I did not find the picture. 'Now I will question the suspects,' I said. 'Suspects?' said Annie. 'Who are the suspects?' 'Harry and Rosamond,' I said.",
      "'First I will question Rosamond,' I said. We went to Rosamond's house. Rosamond has four cats. Her cats are very strange. 'Hello, Rosamond,' I said. 'We are looking for a picture. Have you seen Annie's picture of Fang?' 'I do not like dogs,' said Rosamond. 'I like cats. I would not take a picture of a dog.'",
      "I believed Rosamond. She loves cats too much. She would not take a dog picture. 'Now I will question Harry,' I said. We went back to Annie's house. Harry was in his room. He was painting. 'Hello, Harry,' I said. 'We are looking for Annie's picture. Have you seen it?'",
      "Harry did not answer. He just kept painting. I watched him paint. He was painting a red monster. I looked closely at Harry's painting. The monster had three heads. It was a very strange monster. Then I saw something. Something yellow was showing through. I knew then what had happened.",
      "'I, Nate the Great, have found your picture,' I said. 'Where?' asked Annie. 'Right here,' I said. I pointed to Harry's painting. 'Harry painted his red monster right over your yellow picture of Fang.' Annie looked at the painting. 'Oh, Harry!' she said.",
      "Harry looked sad. 'I needed a piece of paper,' he said. 'I did not see your picture. I am sorry.' 'That is okay,' said Annie. 'Now I have a picture of Fang with a red monster on his head. It is even more interesting!' The case was solved. I went home. My mother made me pancakes. I love pancakes."
    ]
  },
  // Nate the Great 系列 - 第2册
  {
    id: 'nate-great-002',
    title: 'Nate the Great Goes Undercover',
    level: 'L2 章节书',
    coverIcon: '🕵️',
    coverBg: '#27ae60',
    category: 'classic',
    pages: 12,
    content: [
      "I am Nate the Great. I am a detective. I work very hard. Today I have a new case. My friend Rosamond called me. She is very upset.",
      "'Nate the Great, I need you,' she said. 'My cat is missing. Her name is Super Hex. She is the best cat in the world. You must find her.'",
      "'I will take the case,' I said. I put on my detective coat and my detective hat. I ate a quick breakfast of pancakes. I love pancakes. Then I went to Rosamond's house.",
      "Rosamond was waiting for me outside. All her cats were there except Super Hex. 'When did you last see Super Hex?' I asked. 'Last night,' said Rosamond. 'She went out and never came back.'",
      "'Where does she usually go?' I asked. 'She likes to go next door to Annie's house,' said Rosamond. 'She likes Fang. Fang is Annie's dog. They are friends. Strange, but true.'",
      "I went next door to Annie's house. Annie and Fang were outside. 'Have you seen Super Hex?' I asked. 'No,' said Annie. 'Fang has not seen her either. He would have told me.'",
      "I looked around the yard. I looked under the bushes. I looked behind the trees. I looked everywhere. Then I saw something. A piece of yellow string was on the ground.",
      "'Super Hex has a yellow collar,' said Rosamond. 'This string is from her collar! She was here!' I followed the string. It went across the street. It went into Mr. Brown's yard.",
      "I walked into Mr. Brown's yard. There was Super Hex! She was sitting on the fence. She had a little kitten with her! 'Oh!' said Rosamond. 'Super Hex is a mother!'",
      "'She did not come home because she was busy taking care of her kitten,' I said. 'That is why she went undercover. She wanted a private place for her baby.'",
      "Rosamond was very happy. She picked up Super Hex and the kitten. 'Thank you, Nate the Great!' she said. 'You are the best detective in the world!'",
      "The case was solved. I went home. My mother made me pancakes. I love pancakes. Pancakes taste extra good when you have just solved a great case."
    ]
  },
  // Nate the Great 系列 - 第3册
  {
    id: 'nate-great-003',
    title: 'Nate the Great and the Monster Mess',
    level: 'L2 章节书',
    coverIcon: '👾',
    coverBg: '#f39c12',
    category: 'classic',
    pages: 12,
    content: [
      "I am Nate the Great. I am a detective. I work very hard. Today I have a very strange case. My friend Annie called me. Her brother Harry is in big trouble.",
      "'Nate the Great, you must help us,' said Annie. 'Harry's monster project is missing. He worked on it for three weeks. Now it is gone!'",
      "'I will take the case,' I said. I put on my detective coat and my detective hat. I ate a quick breakfast of pancakes. I love pancakes. Then I went to Annie's house.",
      "Harry was in his room. He looked very sad. His desk was empty. 'Tell me about the monster,' I said. 'It was the best monster ever,' said Harry. 'It had five heads and ten arms.'",
      "'Where did you last see it?' I asked. 'Last night,' said Harry. 'I put it on the kitchen table to dry. This morning it was gone! There was a big mess everywhere.'",
      "I went to the kitchen. There was green paint everywhere. There were pieces of newspaper all over the floor. 'Someone made a monster mess,' I said. 'Now I must find clues.'",
      "I looked around carefully. I saw paw prints in the paint. Big paw prints. 'Fang!' I said. 'Annie's dog Fang was here! He must have knocked over the monster.'",
      "We found Fang outside. He had green paint on his paws. And he had something in his mouth. It was a piece of Harry's monster! 'Fang ate my monster!' cried Harry.",
      "'Wait,' I said. I looked closer. Fang had not eaten the whole monster. He had just chewed on one arm. The rest was under the porch! He dragged it outside to play with it.",
      "We pulled the monster out from under the porch. It was a little dirty, but mostly okay. 'We can fix it,' I said. 'We just need to add some new paint and make a new arm.'",
      "Harry was happy again. 'Thank you, Nate the Great!' he said. 'You are the best detective in the world! Even my big dog could not fool you.'",
      "The case was solved. I went home. My mother made me pancakes. I love pancakes. Pancakes taste especially good after you solve a messy case."
    ]
  },
  // Nate the Great 系列 - 第4册
  {
    id: 'nate-great-004',
    title: 'Nate the Great and the Halloween Hunt',
    level: 'L2 章节书',
    coverIcon: '🎃',
    coverBg: '#e74c3c',
    category: 'classic',
    pages: 12,
    content: [
      "I am Nate the Great. I am a detective. I work very hard. Today is Halloween. I love Halloween. But right now I have a case to solve. My friend Esmeralda called me.",
      "'Nate the Great, I need you,' she said. 'My Halloween costume is missing! I was going to be a witch. Now I have nothing to wear to the party tonight.'",
      "'I will take the case,' I said. I put on my detective coat and my detective hat. I ate a quick breakfast of pancakes. I love pancakes. Then I went to Esmeralda's house.",
      "Esmeralda showed me her room. Her costume was not there. 'Tell me about the costume,' I said. 'It was black and pointy,' said Esmeralda. 'It had a tall hat and a magic wand.'",
      "'When did you last see it?' I asked. 'Last night,' said Esmeralda. 'I left it on the kitchen chair. This morning it was gone!' 'Who else was in the house?' I asked.",
      "'My little brother Oliver was home,' said Esmeralda. 'He said he did not see it. But I think he took it. He loves to play dress-up.' I went to find Oliver.",
      "Oliver was in the backyard. He was wearing a sheet. He looked like a ghost. 'Have you seen the witch costume?' I asked. 'No,' said Oliver. But he looked nervous.",
      "I followed Oliver to the garage. I heard noises. I opened the door. There was Oliver's friend. He was wearing the witch costume! 'Oliver let me borrow it,' he said.",
      "'We were practicing being scary for Halloween.' Esmeralda was not angry. 'That is okay,' she said. 'We can both be witches! Or you can be a warlock.'",
      "They decided to share the costume. Esmeralda would wear it to the party, and her friend would wear it trick-or-treating. Everyone was happy. The Halloween mystery was solved!",
      "'Thank you, Nate the Great!' said Esmeralda. 'You are the best detective in the world. Even on Halloween!' The case was solved. I went to the party too.",
      "I had a great time. I ate lots of candy. When I got home, my mother made me pancakes. I love pancakes. Pancakes taste better than Halloween candy. Well, almost better."
    ]
  },
  // Nate the Great 系列 - 第5册
  {
    id: 'nate-great-005',
    title: 'Nate the Great and the Phony Clue',
    level: 'L2 章节书',
    coverIcon: '🔖',
    coverBg: '#8e44ad',
    category: 'classic',
    pages: 12,
    content: [
      "I am Nate the Great. I am a detective. I work very hard. Today I have a tricky case. My friend Claude called me. He is very upset.",
      "'Nate the Great, someone stole my favorite stamp!' he said. 'It is a very rare stamp from Sweden. It has a moose on it. I keep it in my desk drawer. Now it is gone!'",
      "'I will take the case,' I said. I put on my detective coat and my detective hat. I ate a quick breakfast of pancakes. I love pancakes. Then I went to Claude's house.",
      "Claude showed me his desk. The drawer was open. The stamp was gone. 'Look!' said Claude. 'There is a clue! A piece of red paper! Someone left it behind.'",
      "I picked up the red paper. It had a paw print on it. 'Fang!' I said. 'Annie's dog Fang has red paws from painting. But why would Fang take a stamp? That does not make sense.'",
      "I went to Annie's house. Fang was outside. His paws were red. But he looked innocent. 'Fang, did you take a stamp?' I asked. Fang just wagged his tail. I did not think he did it.",
      "'Who else knew about your stamp?' I asked Claude. 'Rosamond knows,' said Claude. 'She loves cats. She said she likes my moose stamp. And Harry knows too.'",
      "I went to Rosamond's house. Her cats were everywhere. 'Have you seen Claude's moose stamp?' I asked. 'No,' said Rosamond. 'Cats do not care about stamps.' That was true.",
      "I went to find Harry. He was in his room painting. 'Have you seen Claude's stamp?' I asked. Harry looked guilty. 'I might have borrowed it,' he said. 'I wanted to copy it.'",
      "Harry gave the stamp back. 'I left the red paper on purpose,' he said. 'I wanted to make the case more interesting. I am sorry.' Claude was happy to get his stamp back.",
      "'That was a phony clue!' I said. 'A good detective does not get tricked. But everyone makes mistakes. Even Harry.' The case was solved. I went home.",
      "My mother made me pancakes. I love pancakes. Pancakes taste extra good when you catch someone who leaves phony clues. Do not try to trick Nate the Great!"
    ]
  },
  
  // 示例 RAZ 书籍
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
  }
];
