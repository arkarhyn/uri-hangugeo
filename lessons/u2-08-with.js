"use strict";
LESSONS.push({
  id:"with", unit:2, ko:"하고 랑 한테", title:"With someone, to someone",
  blurb:"Say who you did something with using 하고 and (이)랑, and who you gave, sent or said something to with 한테 and 에게.",
  src:["L13"],
  goals:["Join two nouns with 하고 or (이)랑","Say who you did something with","Say who you gave, called or sent something to with 한테 or 에게","Say who you got something from with 한테서"],
  slides:[
    {h:"Noun and noun: 하고", p:"하고 joins two nouns, like \"and\". It never changes, whatever the noun ends in. You saw it in the shopping lesson.",
     ex:[["빵[하고] 우유를 샀어요.","I bought bread and milk."],["엄마[하고] 아빠는 서울에 살아요.","Mom and Dad live in Seoul."],["월요일[하고] 수요일에 운동해요.","I work out on Mondays and Wednesdays."]],
     note:"하고 only joins nouns. To join verbs or whole sentences, use -고 (the linking lesson)."},
    {h:"With someone: 하고 (같이)", p:"The same 하고 also means \"with\". People often add 같이 (together) after it.",
     ex:[["친구[하고] 영화를 봤어요.","I watched a movie with a friend."],["엄마[하고] 같이 요리했어요.","I cooked with Mom."],["누구[하고] 갔어요?","Who did you go with?"]]},
    {h:"(이)랑: the friendly version", p:"(이)랑 means the same as 하고 but sounds a little warmer and more casual. 랑 goes after a vowel, 이랑 after a consonant.",
     t:[["Noun","Ends in","With"],["친구","vowel","친구랑"],["언니","vowel","언니랑"],["동생","consonant","동생이랑"],["선생님","consonant","선생님이랑"]],
     ex:[["커피[랑] 케이크 주세요.","Coffee and cake, please."],["동생[이랑] 같이 살아요.","I live with my younger sibling."],["나[랑] 놀자!","Come hang out with me! (casual)"]],
     note:"In writing you'll also see 와/과 (와 after a vowel, 과 after a consonant): 친구와, 책과. It's the formal one, used in news and textbooks."},
    {h:"To someone: 한테 and 에게", p:"For giving, sending, calling, asking or telling, the person on the receiving end gets 한테 (spoken) or 에게 (written). Both go after any noun.",
     ex:[["친구[한테] 전화했어요.","I called a friend."],["동생[한테] 선물을 줬어요.","I gave my sibling a present."],["엄마[한테] 문자를 보냈어요.","I texted Mom."],["누구[한테] 물어봤어요?","Who did you ask?"]],
     note:"For someone you raise, it's 께 with a humble verb (Review 2): 할머니께 선물을 드렸어요."},
    {h:"People get 한테, places get 에", p:"People and animals take 한테/에게. A place, an office or a thing takes 에.",
     ex:[["회사[에] 전화했어요.","I called the office."],["엄마[한테] 전화했어요.","I called Mom."],["강아지[한테] 밥을 줬어요.","I fed the dog."],["꽃[에] 물을 줬어요.","I watered the flowers."]]},
    {h:"From someone: 한테서", p:"Add 서 for \"from\" a person: 한테서 (spoken), 에게서 (written). In speech the 서 often drops off when the verb makes the meaning obvious.",
     ex:[["친구[한테서] 문자를 받았어요.","I got a text from a friend."],["언니[한테서] 배웠어요.","I learned it from my older sister."],["친구[한테] 받았어요.","I got it from a friend. (서 dropped)"]],
     note:"에서 means \"from\" a place (Review 5), never from a person: 회사에서 왔어요, but 친구한테서 받았어요."},
    {h:"Putting them together",
     ex:[["주말에 친구[하고] 밥을 먹고 엄마[한테] 전화했어요.","On the weekend I ate with a friend and called Mom."],["누구[랑] 살아요?","Who do you live with?"],["이거 누구[한테] 줄 거예요?","Who are you going to give this to?"]]},
    {h:"In 반말", p:"하고, (이)랑 and 한테 don't change at all. Only the verb ending and 저/제 do.",
     t:[["Polite","반말"],["친구한테 전화했어요","친구한테 전화했어[x:요]"],["친구랑 갔어요","친구랑 갔어[x:요]"],["저는 동생이랑 살아요","[c:나]는 동생이랑 살아[x:요]"],["제 친구하고 먹었어요","[c:내] 친구하고 먹었어[x:요]"]],
     ex:[["[c:나]는 친구[e:랑] 갔어.","I went with a friend."],["엄마[e:한테] 문자 보냈어.","I texted Mom."],["누구[e:한테서] 받았어?","Who did you get it from?"]],
     note:"See also: the casual speech lesson (반말)."}
  ],
  vocab:[["하고","and, with"],["(이)랑","and, with (friendly)"],["같이","together"],["한테","to (a person, spoken)"],["에게","to (a person, written)"],["한테서","from (a person)"],["누구","who"],["동생","younger sibling"],["언니","older sister (for a woman)"],["형","older brother (for a man)"],["주다","to give"],["보내다","to send"],["받다","to receive"],["문자","text message"],["선물","present"],["물어보다","to ask"],["강아지","puppy, dog"],["살다","to live"]],
  ex:[
    {k:"mc",q:"\"bread and milk\"",c:["빵하고 우유","빵고 우유","빵한테 우유","빵이랑하고 우유"],why:"하고 joins two nouns."},
    {k:"mc",q:"친구 + (이)랑",c:["친구랑","친구이랑","친구과","친구한테랑"],why:"친구 ends in a vowel, so 랑."},
    {k:"mc",q:"동생 + (이)랑",c:["동생이랑","동생랑","동생와","동생이하고"],why:"동생 ends in a consonant, so 이랑."},
    {k:"mc",q:"\"I watched a movie with a friend.\"",c:["친구하고 영화를 봤어요.","친구한테 영화를 봤어요.","친구에 영화를 봤어요.","친구고 영화를 봤어요."],why:"With someone: 하고."},
    {k:"mc",q:"\"Who did you go with?\"",c:["누구하고 갔어요?","누구에 갔어요?","누가하고 갔어요?","누구고 갔어요?"],why:"누구 + 하고 = with whom."},
    {k:"mc",q:"\"I called a friend.\"",c:["친구한테 전화했어요.","친구에 전화했어요.","친구가 전화했어요.","친구한테서 전화했어요."],why:"Calling a person: 한테. 친구가 전화했어요 means the friend called."},
    {k:"mc",q:"\"I called the office.\"",c:["회사에 전화했어요.","회사한테 전화했어요.","회사에게 전화했어요.","회사한테서 전화했어요."],why:"A place takes 에, not 한테."},
    {k:"mc",q:"\"I gave my sibling a present.\"",c:["동생한테 선물을 줬어요.","동생에 선물을 줬어요.","동생한테 선물이 줬어요.","동생한테서 선물을 줬어요."],why:"The person receiving gets 한테; the present gets 을."},
    {k:"mc",q:"\"I got a text from a friend.\"",c:["친구한테서 문자를 받았어요.","친구에서 문자를 받았어요.","친구하고서 문자를 받았어요.","친구한테서 문자를 줬어요."],why:"From a person: 한테서. 에서 is for places."},
    {k:"mc",q:"Which one sounds like a textbook or the news?",c:["친구와 책을 읽었어요.","친구랑 책을 읽었어요.","친구하고 책을 읽었어요.","친구랑 책 읽었어."],why:"와/과 is the written, formal \"and/with\"."},
    {k:"mc",q:"\"I fed the dog.\"",c:["강아지한테 밥을 줬어요.","강아지에 밥을 줬어요.","강아지한테서 밥을 줬어요.","강아지가 밥을 줬어요."],why:"Animals take 한테, like people."},
    {k:"mc",q:"\"I gave Grandma a present.\" (raising her)",c:["할머니께 선물을 드렸어요.","할머니께서 선물을 줬어요.","할머니에 선물을 드렸어요.","할머니한테서 선물을 드렸어요."],why:"께 plus the humble verb 드리다 (Review 2)."},
    {k:"build",q:"I live with my younger sibling.",ok:["동생이랑 같이 살아요","동생이랑 살아요"],x:["동생한테"]},
    {k:"build",q:"I texted Mom.",ok:["엄마한테 문자를 보냈어요"],x:["엄마하고"]}
  ],
  pool:[
    {k:"mc",q:"선생님 + (이)랑",c:["선생님이랑","선생님랑","선생님와","선생님하고랑"],why:"Ends in a consonant, so 이랑."},
    {k:"mc",q:"언니 + (이)랑",c:["언니랑","언니이랑","언니과","언니한테랑"],why:"Ends in a vowel, so 랑."},
    {k:"mc",q:"책 + 와/과",c:["책과","책와","책이와","책랑과"],why:"Ends in a consonant, so 과."},
    {k:"mc",q:"\"Who do you live with?\"",c:["누구랑 살아요?","누구한테 살아요?","누구에 살아요?","누가랑 살아요?"],why:"With someone: (이)랑 or 하고."},
    {k:"mc",q:"\"Who did you ask?\"",c:["누구한테 물어봤어요?","누구에 물어봤어요?","누구한테서 물어봤어요?","누가한테 물어봤어요?"],why:"Asking a person: 한테."},
    {k:"mc",q:"한테서 means…",c:["from (a person)","to (a person)","with (a person)","at (a place)"],why:"한테 + 서 = from."},
    {k:"mc",q:"\"Coffee and cake, please.\"",c:["커피랑 케이크 주세요.","커피이랑 케이크 주세요.","커피한테 케이크 주세요.","커피고 케이크 주세요."],why:"커피 ends in a vowel, so 랑."}
  ],
  poolN:4,
  say:[
    {en:"I bought bread and milk.", ko:"빵[하고] 우유를 샀어요.", ban:"빵[하고] 우유를 샀어.", alt:["빵이랑 우유를 샀어요."], banAlt:["빵이랑 우유를 샀어."], hint:"하고 joins two nouns"},
    {en:"I watched a movie with a friend.", ko:"친구[랑] 영화를 봤어요.", ban:"친구[랑] 영화를 봤어.", alt:["친구하고 영화를 봤어요."], banAlt:["친구하고 영화를 봤어."], hint:"친구 ends in a vowel"},
    {en:"Who did you go with?", ko:"누구[랑] 갔어요?", ban:"누구[랑] 갔어?", alt:["누구하고 갔어요?"], banAlt:["누구하고 갔어?"]},
    {en:"I live with my younger sibling.", ko:"동생[이랑] 같이 살아요.", ban:"동생[이랑] 같이 살아.", alt:["동생하고 같이 살아요."], banAlt:["동생하고 같이 살아."], hint:"동생 ends in a consonant"},
    {en:"I called Mom.", ko:"엄마[한테] 전화했어요.", ban:"엄마[한테] 전화했어.", hint:"the person you call gets 한테"},
    {en:"I'm going to give my friend a present.", ko:"[c:저]는 친구[한테] 선물을 줄 거예요.", ban:"[c:나]는 친구[한테] 선물을 줄 거야.", hint:"the person receiving gets 한테"},
    {en:"I got a text from a friend.", ko:"친구[한테서] 문자를 받았어요.", ban:"친구[한테서] 문자를 받았어.", alt:["친구한테 문자를 받았어요."], banAlt:["친구한테 문자를 받았어."], hint:"from a person: 한테 + 서"},
    {en:"On the weekend I ate with a friend and called Mom.", ko:"주말에 친구[하고] 밥을 먹고 엄마[한테] 전화했어요.", ban:"주말에 친구[하고] 밥을 먹고 엄마[한테] 전화했어.", alt:["주말에 친구랑 밥을 먹고 엄마한테 전화했어요."], banAlt:["주말에 친구랑 밥을 먹고 엄마한테 전화했어."], hint:"join the two actions with -고"}
  ],
  dlg:{
    scene:"On a bench in the park. 민수 notices 지은's new bag. They're friends the same age, so they talk in 반말.",
    cast:[["민수","ban"],["지은","ban"]],
    lines:[
      ["민수","어? 그 가방 뭐야? 샀어?","Huh? What's that bag? Did you buy it?"],
      ["지은","아, 이거? 아니, 언니[한테서] 받았어.","Oh, this? No, I got it from my older sister."],
      ["민수","오, 진짜 좋다. 아, 맞다! 다음 주에 우리 엄마 생일이야.","Ooh, it's really nice. Oh, right! It's my mom's birthday next week."],
      ["지은","진짜? 그럼 엄마[한테] 뭐 줄 거야?","Really? Then what are you going to give your mom?"],
      ["민수","글쎄... 꽃?","Hmm... flowers?"],
      ["지은","꽃 좋아. 케이크는?","Flowers are good. What about a cake?"],
      ["민수","응, 꽃[하고] 케이크 줄 거야. 토요일에 나[랑] 같이 시장에 갈 수 있어?","Yeah, I'll give her flowers and a cake. Can you go to the market with me on Saturday?"],
      ["지은","토요일? 응, 같이 가자!","Saturday? Yeah, let's go together!"]
    ],
    clean:[
      ["민수","지은아, 그 가방은 뭐야? 그 가방을 샀어?","Jieun, what is that bag? Did you buy it?"],
      ["지은","아니, 이 가방은 언니[한테서] 받았어.","No, I got this bag from my older sister."],
      ["민수","그 가방이 정말 좋아. 그런데 다음 주에 우리 엄마 생일이야.","That bag is really nice. By the way, next week is my mom's birthday."],
      ["지은","그럼 너는 엄마[한테] 뭐 줄 거야?","Then what are you going to give your mom?"],
      ["민수","나는 꽃을 줄 거야.","I'm going to give her flowers."],
      ["지은","꽃이 좋아. 케이크도 줄 거야?","Flowers are good. Are you going to give her a cake, too?"],
      ["민수","응, 꽃[하고] 케이크를 줄 거야. 토요일에 나[랑] 같이 시장에 갈 수 있어?","Yes, I'm going to give her flowers and a cake. Can you go to the market with me on Saturday?"],
      ["지은","응, 토요일에 같이 가자.","Yes, let's go together on Saturday."]
    ],
    q:[
      {q:"Who did Jieun get the bag from?", c:["Her older sister","Her mom","A friend","Nobody, she bought it"], why:"아니, 언니한테서 받았어: no, I got it from my older sister.", cwhy:"이 가방은 언니한테서 받았어: I got this bag from my older sister."},
      {q:"What is Minsu going to give his mom?", c:["Flowers and a cake","A bag","Only flowers","Only a cake"], why:"꽃하고 케이크 줄 거야: I'll give her flowers and a cake.", cwhy:"꽃하고 케이크를 줄 거야: I'm going to give her flowers and a cake."},
      {q:"What does Minsu ask Jieun to do on Saturday?", c:["Go to the market with him","Call his mom","Lend him her bag","Make a cake with him"], why:"토요일에 나랑 같이 시장에 갈 수 있어?"}
    ],
    note:"Three links to a person show up: 언니한테서 (from), 엄마한테 (to), 나랑 (with). 꽃하고 케이크 uses 하고 to join two things."
  },
  plan:[
    ["3","Warm-up","Each person says what they had at their last meal, joining the foods with 하고 (밥하고 김치하고 계란을 먹었어요)."],
    ["9","Teach","Slides 1 to 3. Say who you did three things with this week (친구랑 커피를 마셨어요)."],
    ["7","Who to?","Slides 4 to 6. Check your phones: who did you last call, last text, and last get a text from? Say each one (엄마한테 전화했어요, 친구한테서 문자를 받았어요)."],
    ["3","Gift list","Plan presents for three people (엄마한테 꽃을 줄 거예요)."],
    ["4","Check","Practice tab."],
    ["4","Say it","Say it tab. Add the name of someone real to each sentence (동생이랑… becomes 지은이랑…) and say it again."],
    ["4","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: one of you is 민수, the other 지은. Swap and go again."]
  ],
  talk:[["주말에 누구랑 시간을 보냈어요?","Who did you spend the weekend with?"],["오늘 누구한테 문자를 보냈어요?","Who did you text today?"],["누구하고 같이 살아요?","Who do you live with?"]],
  after:"HTSK Lesson 13 covers 와/과, (이)랑, 하고, 에게/한테/께 and more."
});
