"use strict";
LESSONS.push({
  id:"banmal", unit:2, ko:"반말", title:"Casual speech",
  blurb:"Talk the way close friends and partners talk to each other: drop the 요 and swap a few words.",
  src:["L6"],
  goals:["Know who you can use 반말 with, and who you can't","Turn any 해요 sentence into 반말 by dropping 요","Use 이야/야 for nouns and 아니야 for \"isn't\"","Use 응, 나 and 너, and call someone by name with 아/야","Suggest something with -자 and -(으)ㄹ까?"],
  slides:[
    {h:"A third speech level", p:"You know 합니다 (formal) and 해요 (polite). 반말 is the casual level, for close friends your age, a partner, younger siblings and kids. Using it with someone who hasn't agreed to it can sound rude, so wait until you've both settled on it.",
     t:[["Level","Example","Who with"],["합니다","갑니다","news, briefings, formal speeches"],["해요","가요","most adults, strangers, shops"],["반말","가","close friends, a partner, younger family, kids"]],
     ex:[["우리 말 편하게 할까요?","Shall we talk casually? (between people of about the same age)"],["말 놓으세요.","Feel free to speak casually to me. (said to someone older)"]]},
    {h:"Drop the 요", p:"For almost every verb and adjective, the casual form is the 해요 form with 요 taken off. The tense stays exactly where it was.",
     t:[["해요","반말","Meaning"],["가요","가","go"],["먹어요","먹어","eat"],["해요","해","do"],["봤어요","봤어","saw"],["좋아요","좋아","is good"],["갈 거예요","갈 거야","will go"]],
     note:"거예요 is really a noun (거) plus 예요, so it changes the way nouns do on the next slide: 거야."},
    {h:"Nouns: 이야 and 야", p:"이에요 (after a consonant) becomes 이야, and 예요 (after a vowel) becomes 야. 아니에요 becomes 아니야.",
     ex:[["나 학생[이야].","I'm a student."],["민수는 내 친구[야].","Minsu is my friend."],["그거 내 거 [아니야].","That's not mine."],["오늘 토요일[이야]?","Is it Saturday today?"]]},
    {h:"Words that change", p:"A handful of everyday words have their own casual versions. 나 and 너 belong to 반말; in 해요 you say 저, and you usually leave \"you\" out or use the person's name.",
     t:[["Polite","Casual","Meaning"],["네","응 / 어","yes"],["아니요","아니","no"],["저","나","I, me"],["저는 / 제가","나는 / 내가","I (topic / subject)"],["제","내","my"],["(their name)","너","you"],["안녕하세요","안녕","hi, and also bye"]],
     note:"네가 (you, as the subject) is usually said 니가 so it doesn't sound like 내가 (I)."},
    {h:"Calling someone's name", p:"To get a friend's attention, say their name plus 아 or 야: 아 after a consonant, 야 after a vowel. Never add 씨 here.",
     ex:[["민수[야]!","Minsu!"],["지은[아], 뭐 해?","Jieun, what are you doing?"],["유나[야], 밥 먹었어?","Yuna, did you eat?"]],
     note:"Inside a sentence, a name that ends in a consonant usually picks up 이: 지은이가 왔어 (Jieun's here)."},
    {h:"Questions sound the same", p:"A casual question is the statement with your voice going up at the end, exactly like 해요.",
     ex:[["뭐 해?","What are you doing?"],["어디 가?","Where are you going?"],["밥 먹었어?","Did you eat?"],["내일 시간 있어?","Are you free tomorrow?"],["괜찮아?","Are you okay?"]]},
    {h:"Let's: -자 and -(으)ㄹ까?", p:"Stem + 자 means \"let's\". -(으)ㄹ까요 just drops its 요 to become -(으)ㄹ까?, a softer \"shall we?\"",
     ex:[["가[자]!","Let's go!"],["같이 먹[자].","Let's eat together."],["영화 볼[까]?","Shall we see a movie?"],["뭐 먹을[까]?","What should we eat?"]],
     note:"-자 has no 요 version. In 해요, use -(으)ㄹ까요? or just the 해요 form: 같이 가요!"},
    {h:"Phrases you'll hear every day",
     ex:[["고마워.","Thanks."],["미안해.","Sorry."],["괜찮아.","It's okay. / I'm fine."],["잘 자.","Good night."],["보고 싶어.","I miss you."],["사랑해.","I love you."],["진짜?","Really?"]]}
  ],
  vocab:[["반말","casual speech"],["존댓말","polite speech"],["응","yes (casual)"],["아니","no (casual)"],["나","I, me (casual)"],["너","you (casual)"],["내","my (casual)"],["친구","friend"],["진짜","really"],["고맙다","to be thankful"],["미안하다","to be sorry"],["괜찮다","to be okay"],["사랑하다","to love"],["보고 싶다","to miss (someone)"],["편하게","comfortably, casually"],["같이","together"]],
  ex:[
    {k:"mc",q:"먹어요 in 반말",c:["먹어","먹","먹자요","먹어야"],why:"Drop the 요 from the 해요 form."},
    {k:"mc",q:"했어요 in 반말",c:["했어","했","해","했다요"],why:"Drop 요. The past tense stays."},
    {k:"mc",q:"갈 거예요 in 반말",c:["갈 거야","갈 거","갈 거에","가 거야"],why:"거예요 is a noun ending, so it becomes 거야."},
    {k:"mc",q:"학생이에요 in 반말",c:["학생이야","학생야","학생이어","학생이"],why:"학생 ends in a consonant, so 이에요 becomes 이야."},
    {k:"mc",q:"친구예요 in 반말",c:["친구야","친구이야","친구예","친구여"],why:"친구 ends in a vowel, so 예요 becomes 야."},
    {k:"mc",q:"아니에요 in 반말",c:["아니야","아니요","아니에","아닌야"],why:"아니에요 becomes 아니야. 아니요 is the polite answer \"no\"."},
    {k:"mc",q:"A friend asks 밥 먹었어? You did. Which reply fits?",c:["응, 먹었어.","네, 먹었어요요.","응, 먹었어요.","예, 먹었습니다."],why:"응 is the casual yes, and the verb drops 요 too."},
    {k:"mc",q:"제가 in 반말",c:["내가","나가","저가","너가"],why:"제가 becomes 내가. 나가 is never used for \"I\"."},
    {k:"mc",q:"Calling your friend 민수",c:["민수야!","민수아!","민수 씨야!","민수이야!"],why:"민수 ends in a vowel, so it takes 야."},
    {k:"mc",q:"Calling your friend 지은",c:["지은아!","지은야!","지은 씨아!","지은이요!"],why:"지은 ends in a consonant, so it takes 아."},
    {k:"mc",q:"\"Let's go!\" (casual)",c:["가자!","가요자!","갈자!","가자요!"],why:"Stem + 자."},
    {k:"mc",q:"\"Shall we see a movie?\" (casual)",c:["영화 볼까?","영화 보자요?","영화 볼까요자?","영화 봐까?"],why:"-(으)ㄹ까요 drops its 요."},
    {k:"mc",q:"Who is it normally fine to use 반말 with?",c:["A close friend your age","Your boss","A shop clerk","Your partner's grandmother"],why:"반말 is for close friends, a partner, and younger family, once you've agreed on it."},
    {k:"mc",q:"\"Thanks.\" to a close friend (casual, no 요)",c:["고마워.","고마워요.","감사합니다.","고마워자."],why:"Take 고마워요 and drop the 요."},
    {k:"build",q:"What are you doing now? (casual)",ok:["지금 뭐 해"],x:["해요"]},
    {k:"build",q:"I'm going to go home. (casual)",ok:["나는 집에 갈 거야","집에 갈 거야"],x:["저는","거예요"]}
  ],
  pool:[
    {k:"mc",q:"봐요 in 반말",c:["봐","보","봐자","보아요"],why:"Drop 요."},
    {k:"mc",q:"마셔요 in 반말",c:["마셔","마시","마셔야","마셨"],why:"Drop 요."},
    {k:"mc",q:"있어요 in 반말",c:["있어","있","있야","있어야"],why:"Drop 요."},
    {k:"mc",q:"괜찮아요 in 반말",c:["괜찮아","괜찮","괜찮야","괜찮아야"],why:"Drop 요."},
    {k:"mc",q:"갔어요 in 반말",c:["갔어","갔","가","갔야"],why:"Drop 요. The past tense stays."},
    {k:"mc",q:"제 (my) in 반말",c:["내","나","너","네요"],why:"제 becomes 내."},
    {k:"mc",q:"아니요 (the answer \"no\") in 반말",c:["아니","아니야","안","아니요야"],why:"The answer is just 아니. 아니야 means \"it isn't\"."},
    {k:"mc",q:"너 means…",c:["you","I","my","we"],why:"너 is the casual \"you\"."},
    {k:"mc",q:"\"Let's eat together.\" (casual)",c:["같이 먹자.","같이 먹어자.","같이 먹을자.","같이 먹자요."],why:"Stem 먹 + 자."}
  ],
  poolN:4,
  say:[
    {en:"I'm a student.", ko:"[c:저]는 학생이에요.", ban:"[c:나]는 학생[이야].", hint:"in 반말, 이에요 becomes 이야; 저 becomes 나"},
    {en:"That's not mine.", ko:"그거 [c:제] 거 아니에요.", ban:"그거 [c:내] 거 [아니야].", hint:"아니에요 becomes 아니야; 제 becomes 내"},
    {en:"Yes, I ate.", ko:"[c:네], 먹었어요.", ban:"[c:응], 먹었어.", hint:"the casual yes"},
    {en:"No, I didn't eat.", ko:"[c:아니요], 안 먹었어요.", ban:"[c:아니], 안 먹었어.", hint:"the casual no"},
    {en:"Jieun, what are you doing?", ko:"지은 씨, 뭐 해요?", ban:"지은[아], 뭐 해?", hint:"name + 아 after a consonant, no 씨"},
    {en:"Let's go together.", ko:"같이 가요.", ban:"같이 가[자].", hint:"stem + 자"},
    {en:"What should we eat?", ko:"뭐 먹을까요?", ban:"뭐 먹을[까]?", hint:"-(으)ㄹ까요 loses its 요"},
    {en:"Minsu, shall we see a movie this weekend?", ko:"민수 씨, 주말에 영화 볼까요?", ban:"민수[야], 주말에 영화 볼[까]?", hint:"name + 야 after a vowel"}
  ],
  dlg:{
    scene:"Lunchtime at 지은's home. 민수 comes over and says hi to her mom. He's polite with her mom, and uses 반말 with 지은.",
    cast:[["민수","ban"],["지은","ban"],["지은 어머니","yo","Jieun's mom"]],
    lines:[
      ["민수","아, 안녕하세요! 저 민수예요.","Oh, hello! It's Minsu.","yo"],
      ["지은 어머니","아, 민수 씨! 어서 와요. 밥 먹었어요?","Oh, Minsu! Come in. Have you eaten?"],
      ["민수","밥이요? 어... 아직이요.","Food? Uh... not yet.","yo"],
      ["지은 어머니","그럼 같이 먹어요.","Then eat with us."],
      ["지은","민수[야], 왔어?","Minsu, you're here?"],
      ["민수","[응]. 근데 점심 뭐[야]?","Yeah. So what's for lunch?"],
      ["지은","김치찌개[야]. [너] 그거 좋아해?","Kimchi stew. Do you like it?"],
      ["민수","[응], 진짜 좋아해!","Yeah, I really like it!"],
      ["지은","그럼 빨리 먹[자]!","Then let's hurry up and eat!"]
    ],
    clean:[
      ["민수","안녕하세요. 저는 민수예요.","Hello. This is Minsu.","yo"],
      ["지은 어머니","민수 씨, 어서 와요. 밥은 먹었어요?","Minsu, come in. Have you eaten?"],
      ["민수","아니요, 아직 안 먹었어요.","No, I haven't eaten yet.","yo"],
      ["지은 어머니","그럼 같이 먹어요.","Then eat with us."],
      ["지은","민수[야], 왔어?","Minsu, you're here?"],
      ["민수","[응], 왔어. 그런데 오늘 점심은 뭐[야]?","Yes, I'm here. So what's for lunch today?"],
      ["지은","점심은 김치찌개[야]. [너]는 김치찌개를 좋아해?","Lunch is kimchi stew. Do you like kimchi stew?"],
      ["민수","[응], [나]는 김치찌개를 정말 좋아해.","Yes, I really like kimchi stew."],
      ["지은","그럼 빨리 먹[자].","Then let's hurry up and eat."]
    ],
    q:[
      {q:"Has Minsu eaten yet?", c:["No, not yet","Yes, at home","Yes, just now","He doesn't say"], why:"밥이요? 어... 아직이요: food? Not yet.", cwhy:"아니요, 아직 안 먹었어요: no, I haven't eaten yet."},
      {q:"What's for lunch?", c:["Kimchi stew","Gimbap","Bibimbap","Chicken"], why:"김치찌개야: it's kimchi stew.", cwhy:"점심은 김치찌개야: lunch is kimchi stew."},
      {q:"Who does Minsu speak politely to?", c:["Only Jieun's mom","Only Jieun","Both of them","Neither of them"], why:"To her mom he says 안녕하세요 and 아직이요. To 지은 he says 응.", cwhy:"To her mom he says 안녕하세요 and 아직 안 먹었어요. To 지은 he says 응, 왔어."}
    ],
    note:"Watch the level change: 민수 is polite with 지은's mom, then drops the 요 the moment he turns to 지은."
  },
  plan:[
    ["3","Agree on it","Decide together that you'll use 반말 with each other for this lesson."],
    ["8","Teach","Slides 1 to 4. Take five 해요 sentences from earlier lessons and drop the 요."],
    ["7","Text chat","Slides 5 to 7. Text each other a short casual chat: call the other by name (지은아!), ask 뭐 해?, suggest something with -자 or -(으)ㄹ까?, and answer with 응 or 아니."],
    ["4","Switch","One person says a 반말 sentence; the other says it back in 해요. Then swap."],
    ["4","Check","Practice tab."],
    ["4","Say it","Say it tab with the 반말 switch on from the start, so the casual answer is the one you give. Then flip the switch and say the same sentence in 해요."],
    ["4","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: one of you is 민수, the other 지은, and the site plays her mom. Swap and go again."]
  ],
  talk:[["지금 뭐 해?","What are you doing now?"],["주말에 뭐 했어?","What did you do on the weekend?"],["오늘 저녁에 뭐 먹을까?","What should we eat tonight?"]],
  after:"HTSK Lesson 6 covers speech levels, including how casual forms are made."
});
