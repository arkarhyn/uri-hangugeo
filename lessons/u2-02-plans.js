"use strict";
LESSONS.push({
  id:"plans", unit:2, ko:"할 거예요", title:"Plans and suggestions",
  blurb:"Say what you're going to do with -(으)ㄹ 거예요, and suggest doing things together with -(으)ㄹ까요?",
  src:["L9","L44"],
  goals:["Say what you're going to do with -(으)ㄹ 거예요","Pick ㄹ or 을 correctly, including stems that end in ㄹ","Suggest something with -(으)ㄹ까요?","Say yes, or a soft no, to a suggestion"],
  slides:[
    {h:"Future: -(으)ㄹ 거예요", p:"Attach it to the stem. A vowel stem gets ㄹ under the last syllable, then 거예요. A consonant stem gets 을 거예요.",
     t:[["Verb","Stem","Future"],["가다","가","갈 거예요"],["하다","하","할 거예요"],["보다","보","볼 거예요"],["먹다","먹","먹을 거예요"],["읽다","읽","읽을 거예요"]],
     ex:[["내일 영화를 [볼 거예요].","I'm going to watch a movie tomorrow."]],
     note:"It's spelled 거예요, never 거에요. In formal speech it's 갈 겁니다."},
    {h:"Stems ending in ㄹ just add 거예요", p:"If the stem already ends in ㄹ, don't add another ㄹ or 을.",
     ex:[["만들다 → 만들 [거예요]","will make"],["놀다 → 놀 [거예요]","will hang out"],["열다 → 열 [거예요]","will open"],["살다 → 살 [거예요]","will live"]],
     note:"사다 (to buy) also becomes 살 거예요. Context tells you whether it's buying or living."},
    {h:"Asking and answering about plans", p:"Future time words: 내일 (tomorrow), 모레 (the day after), 이따가 (later today), 이번 주말 (this weekend), 다음 주 (next week). 안 goes before the verb as usual.",
     ex:[["주말에 뭐 [할 거예요]?","What are you going to do on the weekend?"],["집에서 [쉴 거예요].","I'm going to rest at home."],["친구를 [만날 거예요].","I'm going to meet a friend."],["내일은 일 안 [할 거예요].","I'm not going to work tomorrow."]]},
    {h:"Shall we? -(으)ㄹ까요?", p:"Same ㄹ / 을 rule, then 까요? It suggests doing something together, or offers to do something for the other person.",
     ex:[["같이 [갈까요]?","Shall we go together?"],["뭐 [먹을까요]?","What shall we eat?"],["몇 시에 [만날까요]?","What time shall we meet?"],["제가 [할까요]?","Shall I do it?"],["창문을 [열까요]?","Shall I open the window? (ㄹ stem: 열까요)"]]},
    {h:"Saying yes, or a soft no", p:"The plain 해요 form can also mean \"let's\": 같이 가요! means \"Let's go together!\"",
     ex:[["좋아요!","Sounds good!"],["네, 그래요.","Yes, let's."],["치킨 먹을까요? 좋아요, 치킨 먹어요!","Shall we have chicken? Sounds good, let's have chicken!"],["미안해요, 내일은 바빠요.","Sorry, I'm busy tomorrow."],["다음에 해요.","Let's do it another time."]]},
    {h:"거예요 or 까요?", p:"거예요 says what's going to happen. 까요? asks what the other person thinks.",
     t:[["Sentence","Meaning"],["주말에 등산할 거예요.","I'm going hiking on the weekend."],["주말에 등산할까요?","Shall we go hiking on the weekend?"],["내일 비가 올 거예요.","It's going to rain tomorrow."],["내일 비가 올까요?","Do you think it'll rain tomorrow?"]],
     note:"With weather and other things nobody controls, 까요? means \"do you think…?\""},
    {h:"In 반말", p:"Future 거예요 becomes 거야, and -(으)ㄹ까요 drops its 요. For \"let's\", use -자.",
     t:[["해요","반말","Meaning"],["갈 거예요","갈 거[c:야]","I'll go"],["내일 뭐 할 거예요?","내일 뭐 할 거[c:야]?","what will you do tomorrow?"],["같이 갈까요?","같이 갈까[x:요]?","shall we go together?"],["같이 가요!","같이 [c:가자]!","let's go together"],["좋아요!","좋아[x:요]!","sounds good"]],
     ex:[["내일 뭐 할 거야?","What are you going to do tomorrow?"],["같이 먹[자]!","Let's eat together."],["뭐 먹을[까]?","What shall we eat?"]],
     note:"See also: the casual speech lesson (반말) covers 반말 in full."}
  ],
  vocab:[["내일","tomorrow"],["모레","the day after tomorrow"],["이따가","later (today)"],["이번 주말","this weekend"],["다음 주","next week"],["쉬다","to rest"],["놀다","to hang out, play"],["만들다","to make"],["사다","to buy"],["열다","to open"],["등산하다","to go hiking"],["같이","together"],["좋아요","sounds good"],["다음에","next time"],["비가 오다","to rain"]],
  ex:[
    {k:"mc",q:"가다 in the future (-(으)ㄹ 거예요)",c:["갈 거예요","가을 거예요","갈 거에요","가 거예요"],why:"A vowel stem takes ㄹ under 가. It's spelled 거예요, not 거에요."},
    {k:"mc",q:"먹다 in the future",c:["먹을 거예요","먹을 거에요","먹일 거예요","먹 거예요"],why:"A consonant stem takes 을 거예요."},
    {k:"mc",q:"만들다 in the future",c:["만들 거예요","만들을 거예요","만드를 거예요","만들 거에요"],why:"The stem already ends in ㄹ, so just add 거예요."},
    {k:"mc",q:"하다 in the future",c:["할 거예요","하을 거예요","해 거예요","핼 거예요"],why:"A vowel stem takes ㄹ: 할 거예요."},
    {k:"mc",q:"\"What are you going to do this weekend?\"",c:["이번 주말에 뭐 할 거예요?","이번 주말에 뭐 했어요?","이번 주말에 뭐 할까요?","지난 주말에 뭐 할 거예요?"],why:"할 거예요 asks about plans. 했어요 is past, and 할까요 would mean \"what shall we do?\""},
    {k:"mc",q:"\"Shall we go together?\"",c:["같이 갈까요?","같이 갈 거예요?","같이 갔어요?","같이 가을까요?"],why:"-(으)ㄹ까요? makes a suggestion. 갈 거예요? asks about someone's plan."},
    {k:"mc",q:"\"What shall we eat?\"",c:["뭐 먹을까요?","뭐 먹을 거예요?","뭐 먹까요?","뭐 먹었어요?"],why:"A consonant stem takes 을까요."},
    {k:"mc",q:"\"Shall I open the window?\"",c:["창문을 열까요?","창문을 열을까요?","창문을 여을까요?","창문을 열 거예요?"],why:"열다 is an ㄹ stem, so just add 까요."},
    {k:"mc",q:"Someone asks 커피 마실까요? You want to say yes.",c:["좋아요!","아니요, 안 마셔요.","마실 거예요?","다음에 해요."],why:"좋아요 accepts. 다음에 해요 is a soft no."},
    {k:"mc",q:"A friend suggests a movie tonight, but you're busy. Which is the kindest no?",c:["미안해요, 오늘은 바빠요. 다음에 해요.","싫어요.","안 볼 거예요.","바빠요."],why:"Apologize, give the reason, and offer another time. 싫어요 is blunt."},
    {k:"mc",q:"내일 비가 올까요? means…",c:["Do you think it'll rain tomorrow?","Shall we go out in the rain tomorrow?","It rained yesterday.","It will definitely rain tomorrow."],why:"With weather, 까요? asks what the other person thinks."},
    {k:"mc",q:"\"I'm going to rest at home tomorrow.\"",c:["내일 집에서 쉴 거예요.","내일 집에 쉴 거예요.","내일 집에서 쉬을 거예요.","내일 집에서 쉬었어요."],why:"에서 marks where you do something (Review 3), and 쉬다 has a vowel stem: 쉴."},
    {k:"mc",q:"\"I'm not going to work tomorrow.\"",c:["내일 일 안 할 거예요.","내일 안 일할 거예요.","내일 일 할 안 거예요.","내일 일 안 했어요."],why:"With 일하다, 안 goes between 일 and 하다."},
    {k:"build",q:"Shall we eat together?",ok:["같이 먹을까요?"],x:["먹었어요?"]},
    {k:"build",q:"I'm going to meet a friend tomorrow.",ok:["내일 친구를 만날 거예요","친구를 내일 만날 거예요"],x:["만났어요"]}
  ],
  pool:[
    {k:"mc",q:"보다 in the future",c:["볼 거예요","보을 거예요","봘 거예요","볼 거에요"],why:"A vowel stem takes ㄹ: 볼."},
    {k:"mc",q:"읽다 in the future",c:["읽을 거예요","읽 거예요","읽울 거예요","읽을 거에요"],why:"A consonant stem takes 을 거예요."},
    {k:"mc",q:"놀다 in the future",c:["놀 거예요","놀을 거예요","노를 거예요","놀 거에요"],why:"An ㄹ stem just adds 거예요."},
    {k:"mc",q:"만나다 in the future",c:["만날 거예요","만나을 거예요","만낫 거예요","만날 거에요"],why:"A vowel stem takes ㄹ: 만날."},
    {k:"mc",q:"앉다 in the future",c:["앉을 거예요","앉 거예요","안즐 거예요","앉을 거에요"],why:"A consonant stem takes 을 거예요."},
    {k:"mc",q:"마시다 in the future",c:["마실 거예요","마시을 거예요","마셔 거예요","마실 거에요"],why:"A vowel stem takes ㄹ: 마실."},
    {k:"mc",q:"놀다 as a suggestion: \"Shall we hang out?\"",c:["같이 놀까요?","같이 놀을까요?","같이 노까요?","같이 놀을 거예요?"],why:"An ㄹ stem just adds 까요."},
    {k:"mc",q:"만나다 as a suggestion: \"Shall we meet?\"",c:["만날까요?","만나을까요?","만나까요?","만날 거예요?"],why:"A vowel stem takes ㄹ까요."}
  ],
  poolN:4,
  say:[
    {en:"I'm going to rest.", ko:"[쉴 거예요].", ban:"[쉴 거야].", hint:"vowel stem: add ㄹ, then 거예요"},
    {en:"I'm going to make dinner.", ko:"저녁을 [만들 거예요].", ban:"저녁을 [만들 거야].", alt:["저녁 만들 거예요."], banAlt:["저녁 만들 거야."], hint:"the stem already ends in ㄹ"},
    {en:"What are you going to do tomorrow?", ko:"내일 뭐 [할 거예요]?", ban:"내일 뭐 [할 거야]?"},
    {en:"Shall we go together?", ko:"같이 [갈까요]?", ban:"같이 [갈까]?", banAlt:["같이 가자."], hint:"suggestion with the verb"},
    {en:"What shall we eat?", ko:"뭐 [먹을까요]?", ban:"뭐 [먹을까]?", hint:"consonant stem: 을 + 까요"},
    {en:"I'm not going to work tomorrow.", ko:"내일은 일 안 [할 거예요].", ban:"내일은 일 안 [할 거야].", hint:"안 goes between the noun and the verb"},
    {en:"Shall we meet at three?", ko:"세 시에 [만날까요]?", ban:"세 시에 [만날까]?", banAlt:["세 시에 만나자."], hint:"3 o'clock = native number + 시"},
    {en:"This weekend I'm going to meet a friend at home.", ko:"이번 주말에 집에서 친구를 [만날 거예요].", ban:"이번 주말에 집에서 친구를 [만날 거야].", alt:["이번 주말에 친구를 집에서 만날 거예요."], banAlt:["이번 주말에 친구를 집에서 만날 거야."], hint:"time first, then where with 에서"}
  ],
  dlg:{
    scene:"Friday evening, on the way home. 민수 and 지은 are friends the same age, so they talk in 반말.",
    cast:[["민수","ban"],["지은","ban"]],
    lines:[
      ["민수","내일 토요일이야! 지은아, 뭐 [할 거야]?","It's Saturday tomorrow! Jieun, what are you going to do?"],
      ["지은","내일? 음... 그냥 집에서 [쉴 거야]. 너는?","Tomorrow? Hmm... I'm just going to rest at home. You?"],
      ["민수","나는 등산 [갈 거야]. 같이 [갈까]?","I'm going hiking. Shall we go together?"],
      ["지은","등산? 어... 근데 내일 비 [올 거야].","Hiking? Uh... but it's going to rain tomorrow."],
      ["민수","아, 진짜? 그럼... 영화 [볼까]?","Oh, really? Then... shall we see a movie?"],
      ["지은","영화 좋아! 몇 시에 [만날까]?","A movie sounds good! What time shall we meet?"],
      ["민수","음... 두 시?","Hmm... two?"],
      ["지은","좋아. 점심도 같이 [먹을까]?","Okay. Shall we have lunch together, too?"],
      ["민수","오, 좋아! 그럼 한 시에 [만나자].","Oh, sounds good! Then let's meet at one."]
    ],
    clean:[
      ["민수","내일은 토요일이야. 지은아, 너는 내일 뭐 [할 거야]?","Tomorrow is Saturday. Jieun, what are you going to do tomorrow?"],
      ["지은","나는 집에서 [쉴 거야]. 너는 뭐 [할 거야]?","I'm going to rest at home. What are you going to do?"],
      ["민수","나는 등산을 [갈 거야]. 같이 [갈까]?","I'm going hiking. Shall we go together?"],
      ["지은","그런데 내일은 비가 [올 거야].","But it's going to rain tomorrow."],
      ["민수","그럼 같이 영화를 [볼까]?","Then shall we see a movie together?"],
      ["지은","응, 영화 좋아. 몇 시에 [만날까]?","Yes, a movie sounds good. What time shall we meet?"],
      ["민수","두 시에 [만날까]?","Shall we meet at two?"],
      ["지은","좋아. 점심도 같이 [먹을까]?","Okay. Shall we have lunch together, too?"],
      ["민수","좋아. 그럼 한 시에 [만나자].","Sounds good. Then let's meet at one."]
    ],
    q:[
      {q:"What was Jieun going to do tomorrow?", c:["Rest at home","Go hiking","See a movie","Study"], why:"내일? 음... 그냥 집에서 쉴 거야: I'm just going to rest at home.", cwhy:"나는 집에서 쉴 거야: I'm going to rest at home."},
      {q:"What's the problem with hiking?", c:["It's going to rain","Jieun is tired","It's too far","Minsu has to work"], why:"근데 내일 비 올 거야: but it's going to rain tomorrow.", cwhy:"그런데 내일은 비가 올 거야: but it's going to rain tomorrow."},
      {q:"What time do they end up meeting?", c:["1:00","2:00","12:00","3:00"], why:"두 시 comes up first, but after lunch is added it's 한 시에 만나자: let's meet at one."}
    ],
    note:"거야 says what's going to happen (your plan, or the rain), and -(으)ㄹ까? asks what the other person thinks. As spoken, a suggestion can shrink to just 두 시? To someone older it would be 내일 뭐 할 거예요?"
  },
  plan:[
    ["3","Warm-up","Ask 어제 뭐 했어요? (last lesson), then 내일 뭐 할 거예요? Notice how the ending changes."],
    ["8","Teach","Slides 1 to 3. Take turns: one says a verb, the other says it with 거예요. Throw in ㄹ stems (만들다, 놀다, 살다)."],
    ["7","Plan a date","Slides 4 and 5. Plan a real weekend together using only 까요? questions: 어디에 갈까요? 뭐 먹을까요? 몇 시에 만날까요? Answer with 좋아요 or a soft no."],
    ["3","Plan or suggestion?","Slide 6. One person says a sentence with 거예요 or 까요?; the other says whether it's a plan or a suggestion."],
    ["4","Check","Practice tab."],
    ["4","Say it","Say it tab, polite first. Notice whether each sentence is a plan or a suggestion, then try a few in 반말."],
    ["4","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: one of you is 민수, the other 지은. Swap and go again."]
  ],
  talk:[["이번 주말에 뭐 할 거예요?","What are you going to do this weekend?"],["저녁에 뭐 먹을까요?","What shall we have for dinner?"],["다음 휴가에 어디에 갈 거예요?","Where are you going on your next vacation?"]],
  after:"HTSK Lesson 9 covers the future tense, and Lesson 44 covers more ways to suggest things."
});
