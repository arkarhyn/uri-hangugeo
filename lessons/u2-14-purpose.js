"use strict";
LESSONS.push({
  id:"purpose", unit:2, ko:"먹으러 가요", title:"Going somewhere to do something",
  blurb:"Say why you're going or coming with -(으)러 가요 and -(으)러 와요: 밥 먹으러 가요.",
  src:["L32"],
  goals:["Attach -(으)러 to a verb, including ㄹ and ㄷ stems","Say where you're going and why in one sentence","Invite someone over with 놀러 오세요","Tell -(으)러 가요 apart from -고 가요"],
  slides:[
    {h:"Making the form", p:"Stem + 러 after a vowel or ㄹ, stem + 으러 after any other consonant. Then add a verb of going or coming.",
     t:[["Verb","-(으)러 가요"],["사다","[s:사][e:러] 가요"],["공부하다","[s:공부하][e:러] 가요"],["먹다","[s:먹][e:으러] 가요"],["놀다","[s:놀][e:러] 가요"],["듣다","[c:들][e:으러] 가요"]],
     note:"Same pattern as -(으)면: ㄹ stems take no 으 (놀러), and ㄷ verbs change before 으 (들으러)."},
    {h:"Where, and what for", p:"The place takes 에. It can go before or after the -(으)러 verb.",
     ex:[["도서관에 공부하[러] 가요.","I'm going to the library to study."],["공부하[러] 도서관에 가요.","I'm going to the library to study."],["백화점에 옷 사[러] 갔어요.","I went to the department store to buy clothes."],["친구 만나[러] 카페에 가요.","I'm going to a café to meet a friend."]]},
    {h:"Only with verbs of moving", p:"-(으)러 needs a verb of movement after it: 가다, 오다, 다니다, 나가다. For other verbs, Korean uses -(으)려고, which comes in a later lesson.",
     ex:[["한국어 배우[러] 학원에 다녀요.","I go to an academy to learn Korean."],["점심 먹[으러] 나갔어요.","I went out to get lunch."],["✗ 돈을 모으러 일해요.","✗ 일해요 isn't a verb of moving."]]},
    {h:"Coming over: -(으)러 와요", p:"Use 오다 when the person is coming toward you.",
     ex:[["우리 집에 놀[러] 오세요!","Come over to my place!"],["한국에 뭐 하[러] 왔어요?","What did you come to Korea for?"],["일하[러] 왔어요.","I came to work."],["친구가 영화 보[러] 왔어요.","A friend came over to watch a movie."]]},
    {h:"Let's go do it", p:"Add a plain 가요, the plans lesson's -(으)ㄹ까요, or casual -자 to invite someone.",
     ex:[["밥 먹[으러] 가요!","Let's go eat!"],["커피 마시[러] 갈까요?","Shall we go get coffee?"],["주말에 사진 찍[으러] 갈까요?","Shall we go take pictures this weekend?"],["노래방에 노래 부르[러] 가자!","Let's go sing at karaoke! (casual)"]]},
    {h:"-(으)러 vs -고", p:"-(으)러 says why you're going. -고 says what you do first, before you go.",
     ex:[["밥 먹[으러] 가요.","I'm going (somewhere) to eat."],["밥 먹[고] 가요.","I'll eat, and then go."]],
     note:"뭐 하러? on its own asks \"What for?\""}
  ],
  vocab:[["도서관","library"],["백화점","department store"],["카페","café"],["학원","private academy"],["다니다","to attend, to go regularly"],["나가다","to go out"],["오다","to come"],["점심","lunch"],["옷","clothes"],["만나다","to meet"],["배우다","to learn"],["모으다","to save up, to collect"],["영화","movie"],["사진","photo"],["장 보다","to grocery shop"],["뭐 하러?","what for?"]],
  ex:[
    {k:"mc",q:"사다 + -(으)러 가요",c:["사러 가요","사으러 가요","살러 가요","사서러 가요"],why:"Vowel stem, so just 러."},
    {k:"mc",q:"먹다 + -(으)러 가요",c:["먹으러 가요","먹러 가요","먹어러 가요","먹을러 가요"],why:"Consonant stem, so 으러."},
    {k:"mc",q:"놀다 + -(으)러 가요",c:["놀러 가요","놀으러 가요","노러 가요","노으러 가요"],why:"ㄹ stems take no 으, and the ㄹ stays before ㄹ."},
    {k:"mc",q:"듣다 + -(으)러 가요",c:["들으러 가요","듣으러 가요","드러 가요","듣러 가요"],why:"ㄷ → ㄹ before 으."},
    {k:"mc",q:"\"I'm going to the library to study.\"",c:["도서관에 공부하러 가요.","도서관에 공부하고 가요.","도서관에 공부하러 해요.","도서관에 공부하면 가요."],why:"-(으)러 plus a verb of going. 공부하고 가요 means study first, then go."},
    {k:"mc",q:"\"Come over to my place!\"",c:["우리 집에 놀러 오세요!","우리 집에 놀으러 오세요!","우리 집에 놀러 오지 마세요!","우리 집에서 놀러 오세요!"],why:"놀러 (no 으) + 오세요. 집에서 would mean \"from my place\"."},
    {k:"mc",q:"\"What did you come to Korea for?\" (you're both in Korea)",c:["한국에 뭐 하러 왔어요?","한국에 뭐 하고 왔어요?","한국에서 뭐 하러 왔어요?","한국에 뭐 하러 갔어요?"],why:"뭐 하러 = what for; 왔어요 because they came here."},
    {k:"mc",q:"\"Let's go eat!\"",c:["밥 먹으러 가요!","밥 먹고 가요!","밥 먹으러 와요!","밥 먹러 가요!"],why:"먹으러 가요. 먹고 가요 means eat first, then go."},
    {k:"mc",q:"\"Shall we go get coffee?\"",c:["커피 마시러 갈까요?","커피 마시러 갈 거예요?","커피 마시고 갈까요?","커피 마셔러 갈까요?"],why:"-(으)러 + 갈까요 for a suggestion."},
    {k:"mc",q:"\"I went to the department store to buy clothes.\"",c:["백화점에 옷 사러 갔어요.","백화점에 옷 사러 가요.","백화점에 옷 샀으러 갔어요.","백화점에 옷 사고 갔어요."],why:"The past goes on 가다 only: 사러 갔어요."},
    {k:"mc",q:"Which verb can come right after -(으)러?",c:["나가다","일하다","좋아하다","먹다"],why:"-(으)러 needs a verb of moving: 가다, 오다, 다니다, 나가다."},
    {k:"mc",q:"밥 먹고 가요 means…",c:["I'll eat, and then go.","I'm going to go eat.","I'm not going to eat.","I went to eat."],why:"-고 = first this, then that."},
    {k:"build",q:"I'm going to a café to meet a friend.",ok:["친구 만나러 카페에 가요","카페에 친구 만나러 가요"],x:["만나고"]},
    {k:"build",q:"I go to an academy to learn Korean.",ok:["한국어 배우러 학원에 다녀요","학원에 한국어 배우러 다녀요"],x:["배우고"]}
  ],
  pool:[
    {k:"mc",q:"뭐 하러? on its own means…",c:["What for?","What are you doing?","What did you eat?","Where are you going?"],why:"Literally \"to do what?\""},
    {k:"mc",q:"\"Let's go sing at karaoke!\" (casual)",c:["노래방에 노래 부르러 가자!","노래방에 노래 불러러 가자!","노래방에 노래 부르으러 가자!","노래방에 노래 부르고 가자!"],why:"부르다 ends in a vowel before 러, so 부르러."},
    {k:"mc",q:"찍다 + -(으)러 가요",c:["찍으러 가요","찍러 가요","찍어러 가요","찍을러 가요"],why:"Consonant stem, so 으러."},
    {k:"mc",q:"\"A friend came over to watch a movie.\"",c:["친구가 영화 보러 왔어요.","친구가 영화 보으러 왔어요.","친구가 영화 보러 갔어요.","친구가 영화 보고 왔어요."],why:"보러 + 왔어요, because the friend came here."},
    {k:"mc",q:"\"I went out to get lunch.\"",c:["점심 먹으러 나갔어요.","점심 먹고 나갔어요.","점심 먹으러 나와요.","점심 먹러 나갔어요."],why:"먹으러 + 나갔어요."},
    {k:"mc",q:"만들다 + -(으)러",c:["만들러","만들으러","만드러","만드으러"],why:"ㄹ stems take no 으, and the ㄹ stays."},
    {k:"mc",q:"Why is 돈을 모으러 일해요 wrong?",c:["일하다 isn't a verb of moving","모으다 is irregular","It needs 에","러 should be 으러"],why:"-(으)러 only works before 가다, 오다 and other verbs of moving."}
  ],
  poolN:3,
  plan:[
    ["5","Warm-up","Each person lists three places they went this week."],
    ["10","Teach","Slides 1 to 3. Turn each place from the warm-up into a full sentence with a reason: 마트에 장 보러 갔어요."],
    ["8","Invitations","Slides 4 and 5. Invite each other to do something this weekend with -(으)러 갈까요?, and accept or decline (미안해요, 바빠요)."],
    ["5","Why go there?","One person names a place (공항, 병원, 도서관); the other says why people go there, with -(으)러 가요."],
    ["5","Check","Practice tab."]
  ],
  talk:[["주말에 어디에 놀러 가고 싶어요?","Where do you want to go this weekend for fun?"],["오늘 점심 뭐 먹으러 갈까요?","What shall we go eat for lunch today?"],["한국에 뭐 하러 가고 싶어요?","What would you want to go to Korea for?"]],
  after:"HTSK Lesson 32 covers -(으)러 together with -(으)려고 and -아/어 보다."
});
