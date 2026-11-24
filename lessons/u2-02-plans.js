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
     note:"With weather and other things nobody controls, 까요? means \"do you think…?\""}
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
  plan:[
    ["5","Warm-up","Ask 어제 뭐 했어요? (last lesson), then 내일 뭐 할 거예요? Notice how the ending changes."],
    ["8","Teach","Slides 1 to 3. Take turns: one says a verb, the other says it with 거예요. Throw in ㄹ stems (만들다, 놀다, 살다)."],
    ["10","Plan a date","Slides 4 and 5. Plan a real weekend together using only 까요? questions: 어디에 갈까요? 뭐 먹을까요? 몇 시에 만날까요? Answer with 좋아요 or a soft no."],
    ["5","Plan or suggestion?","Slide 6. One person says a sentence with 거예요 or 까요?; the other says whether it's a plan or a suggestion."],
    ["5","Check","Practice tab."]
  ],
  talk:[["이번 주말에 뭐 할 거예요?","What are you going to do this weekend?"],["저녁에 뭐 먹을까요?","What shall we have for dinner?"],["다음 휴가에 어디에 갈 거예요?","Where are you going on your next vacation?"]],
  after:"HTSK Lesson 9 covers the future tense, and Lesson 44 covers more ways to suggest things."
});
