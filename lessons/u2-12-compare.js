"use strict";
LESSONS.push({
  id:"compare", unit:2, ko:"보다 더 제일", title:"Bigger, faster, the best",
  blurb:"Compare two things with 보다 and 더, and pick out the most with 제일.",
  src:["L19"],
  goals:["Say A is more … than B with 보다 and 더","Put 보다 on the right noun","Say something is the most with 제일 or 가장","Name the group with 중에서"],
  slides:[
    {h:"More: 더", p:"Put 더 in front of an adjective or verb to mean \"more\".",
     ex:[["[더] 싸요.","It's cheaper."],["[더] 커요.","It's bigger."],["[더] 주세요.","More, please."],["조금 [더] 기다려 주세요.","Please wait a little longer."]]},
    {h:"Than: 보다", p:"보다 goes on the thing you're comparing against, not the winner. The winner takes 이/가.",
     ex:[["지하철이 버스[보다] 빨라요.","The subway is faster than the bus."],["오늘이 어제[보다] 더 추워요.","Today is colder than yesterday."],["커피가 차[보다] 더 비싸요.","Coffee is more expensive than tea."]],
     note:"With 보다, 더 is optional: 지하철이 버스보다 빨라요 already says \"faster\". Adding 더 just leans on it."},
    {h:"Order is flexible", p:"The 보다 phrase can come first or second. The particles carry the meaning, so it doesn't change.",
     ex:[["서울이 부산[보다] 커요.","Seoul is bigger than Busan."],["부산[보다] 서울이 커요.","Seoul is bigger than Busan."]],
     note:"Same spelling, different job: 보다 is also the verb \"to see\". Attached straight to a noun, it means \"than\"."},
    {h:"Liking one more", p:"With 좋아하다, the thing you like takes 을/를, as usual.",
     ex:[["저는 커피[보다] 차를 더 좋아해요.","I like tea more than coffee."],["고양이[보다] 강아지를 더 좋아해요?","Do you like dogs more than cats?"]]},
    {h:"Less, and much more: 덜, 훨씬", p:"덜 is the opposite of 더. 훨씬 makes the gap bigger: much more.",
     ex:[["오늘은 어제보다 [덜] 추워요.","Today is less cold than yesterday."],["이건 [덜] 매워요.","This one is less spicy."],["지하철이 [훨씬] 빨라요.","The subway is much faster."],["한국어가 영어보다 [훨씬] 어려워요?","Is Korean much harder than English?"]]},
    {h:"The most: 제일 / 가장", p:"제일 and 가장 both mean \"the most\". 제일 is more common in speech, and 가장 shows up more in writing.",
     ex:[["이게 [제일] 싸요.","This one is the cheapest."],["뭐가 [제일] 맛있어요?","What's the best thing here?"],["누가 [가장] 빨라요?","Who's the fastest?"]]},
    {h:"Among: 중에서", p:"Name the group with noun + 중에서 (\"among\"). With two choices, ask with 더. With three or more, use 제일.",
     ex:[["커피하고 차 [중에서] 뭐가 더 좋아요?","Which do you prefer, coffee or tea?"],["과일 [중에서] 딸기를 제일 좋아해요.","Of all fruits, I like strawberries most."],["우리 가족 [중에서] 제가 제일 키가 커요.","I'm the tallest in my family."],["이 세 개 [중에서] 뭐가 제일 좋아요?","Which of these three is best?"]],
     note:"키가 커요 means \"tall\": literally, the height is big. 키가 작아요 means short."},
    {h:"In 반말", p:"보다, 더, 덜 and 제일 don't change in 반말. Just drop the 요, and use 나 for 저.",
     t:[["Polite","반말","Meaning"],["더 싸[e:요]","더 싸[x:요]","cheaper"],["버스보다 빨라[e:요]","버스보다 빨라[x:요]","faster than the bus"],["제일 맛있어[e:요]","제일 맛있어[x:요]","the tastiest"],["[c:저]는 차를 더 좋아해[e:요]","[c:나]는 차를 더 좋아해[x:요]","I like tea more"],["더 [c:주세요]","더 [c:줘]","more, please"]],
     ex:[["지하철이 버스보다 빨라.","The subway is faster than the bus."],["이게 제일 싸.","This one is the cheapest."],["[c:나]는 차를 더 좋아해.","I like tea more."]]}
  ],
  vocab:[["더","more"],["덜","less"],["보다","than"],["제일","the most"],["가장","the most (more written)"],["중에서","among, out of"],["훨씬","much (more)"],["조금","a little"],["느리다","to be slow"],["비싸다","to be expensive"],["싸다","to be cheap"],["키","height"],["작다","to be small, short"],["과일","fruit"],["딸기","strawberry"],["강아지","puppy, dog"],["고양이","cat"],["기다리다","to wait"]],
  ex:[
    {k:"mc",q:"\"The subway is faster than the bus.\"",c:["지하철이 버스보다 빨라요.","버스가 지하철보다 빨라요.","지하철보다 버스가 빨라요.","지하철이 버스보다 느려요."],why:"보다 goes on the bus, the thing being beaten."},
    {k:"mc",q:"\"Coffee is more expensive than tea.\"",c:["커피가 차보다 더 비싸요.","차가 커피보다 더 비싸요.","커피보다 차가 더 비싸요.","커피가 차보다 더 싸요."],why:"The winner (coffee) takes 이/가; the one compared against (tea) takes 보다."},
    {k:"mc",q:"\"Today is colder than yesterday.\"",c:["오늘이 어제보다 더 추워요.","오늘이 어제보다 더 춥어요.","어제가 오늘보다 더 추워요.","오늘보다 어제가 더 추워요."],why:"어제보다 = than yesterday. 춥다 → 추워요."},
    {k:"mc",q:"\"I like tea more than coffee.\"",c:["저는 커피보다 차를 더 좋아해요.","저는 차보다 커피를 더 좋아해요.","저는 커피보다 차를 더 싫어해요.","저는 커피를 더 좋아해요."],why:"보다 on coffee, 를 on tea, the thing you like."},
    {k:"mc",q:"\"This one is the cheapest.\"",c:["이게 제일 싸요.","이게 더 싸요.","이게 덜 싸요.","이게 제일 비싸요."],why:"The most = 제일. 더 싸요 is just \"cheaper\"."},
    {k:"mc",q:"\"What's the best thing here?\" (asking what's most delicious)",c:["뭐가 제일 맛있어요?","뭐가 더 맛있어요?","누가 제일 맛있어요?","뭐가 제일 맛없어요?"],why:"뭐가 for things, 제일 for the most."},
    {k:"mc",q:"\"Today is less cold than yesterday.\"",c:["오늘은 어제보다 덜 추워요.","오늘은 어제보다 더 추워요.","오늘은 어제보다 제일 추워요.","어제는 오늘보다 덜 추워요."],why:"덜 = less."},
    {k:"mc",q:"제일 means the same as…",c:["가장","더","덜","훨씬"],why:"Both mean \"the most\"; 가장 is a little more formal."},
    {k:"mc",q:"\"I'm the tallest in my family.\"",c:["우리 가족 중에서 제가 제일 키가 커요.","우리 가족보다 제가 제일 키가 커요.","우리 가족 중에서 제가 제일 키가 작아요.","우리 가족 중에서 제가 키가 커요."],why:"중에서 names the group, and 제일 makes it \"the most\"."},
    {k:"mc",q:"\"The subway is much faster.\"",c:["지하철이 훨씬 빨라요.","지하철이 덜 빨라요.","지하철이 제일 빨라요.","지하철이 훨씬 느려요."],why:"훨씬 = much more. 제일 빨라요 would be \"the fastest\"."},
    {k:"mc",q:"In 지하철이 버스보다 빨라요, which one is faster?",c:["The subway","The bus","They're the same","It doesn't say"],why:"보다 marks the one being beaten: the bus."},
    {k:"mc",q:"\"More, please.\"",c:["더 주세요.","덜 주세요.","제일 주세요.","보다 주세요."],why:"더 = more."},
    {k:"build",q:"Seoul is bigger than Busan.",ok:["서울이 부산보다 더 커요","부산보다 서울이 더 커요","서울이 부산보다 커요","부산보다 서울이 커요"],x:["제일"]},
    {k:"build",q:"Of all fruits, I like strawberries the most.",ok:["과일 중에서 딸기를 제일 좋아해요"],x:["더"]}
  ],
  pool:[
    {k:"mc",q:"\"Is Korean harder than English?\"",c:["한국어가 영어보다 더 어려워요?","영어가 한국어보다 더 어려워요?","한국어보다 영어가 더 어려워요?","한국어가 영어보다 더 쉬워요?"],why:"보다 goes on English, the thing compared against."},
    {k:"mc",q:"\"Who's the fastest?\"",c:["누가 제일 빨라요?","누가 더 빨라요?","뭐가 제일 빨라요?","누가 제일 느려요?"],why:"누가 for people, 제일 for the most."},
    {k:"mc",q:"\"Please wait a little longer.\"",c:["조금 더 기다려 주세요.","조금 덜 기다려 주세요.","조금 제일 기다려 주세요.","조금 더 기다리지 마세요."],why:"조금 더 = a little more."},
    {k:"mc",q:"\"Which of these three is best?\"",c:["이 세 개 중에서 뭐가 제일 좋아요?","이 세 개보다 뭐가 제일 좋아요?","이 세 개 중에서 누가 제일 좋아요?","이 세 개 중에서 뭐가 제일 싫어요?"],why:"중에서 names the group; 뭐가 for things."},
    {k:"mc",q:"키가 커요 means…",c:["tall","big-headed","old","heavy"],why:"Literally \"the height is big\"."},
    {k:"mc",q:"\"This one is less spicy.\"",c:["이건 덜 매워요.","이건 더 매워요.","이건 제일 매워요.","이건 덜 맵어요."],why:"덜 = less, and 맵다 → 매워요."},
    {k:"mc",q:"\"Do you like dogs more than cats?\"",c:["고양이보다 강아지를 더 좋아해요?","강아지보다 고양이를 더 좋아해요?","고양이를 강아지보다 더 좋아해요?","고양이보다 강아지를 더 싫어해요?"],why:"보다 on cats; 를 on dogs, the one you like."}
  ],
  poolN:3,
  say:[
    {en:"This one is cheaper.", ko:"이게 [더] 싸요.", ban:"이게 [더] 싸.", hint:"더 goes in front of the adjective"},
    {en:"More, please.", ko:"[더] 주세요.", ban:"[더] 줘.", hint:"주세요 → 줘 in 반말"},
    {en:"The subway is faster than the bus.", ko:"지하철이 버스[보다] 빨라요.", ban:"지하철이 버스[보다] 빨라.", alt:["버스보다 지하철이 빨라요."], banAlt:["버스보다 지하철이 빨라."], hint:"보다 goes on the thing you're beating"},
    {en:"Today is colder than yesterday.", ko:"오늘이 어제[보다] 더 추워요.", ban:"오늘이 어제[보다] 더 추워.", alt:["오늘이 어제보다 추워요."], banAlt:["오늘이 어제보다 추워."], hint:"더 is optional with 보다"},
    {en:"This one is the cheapest.", ko:"이게 [제일] 싸요.", ban:"이게 [제일] 싸.", alt:["이게 가장 싸요."], banAlt:["이게 가장 싸."]},
    {en:"I like tea more than coffee.", ko:"[c:저]는 커피[보다] 차를 [더] 좋아해요.", ban:"[c:나]는 커피[보다] 차를 [더] 좋아해.", alt:["커피보다 차를 더 좋아해요."], banAlt:["커피보다 차를 더 좋아해."], hint:"보다 goes on coffee; the thing you like takes 를"},
    {en:"Of all fruits, I like strawberries the most.", ko:"과일 [중에서] 딸기를 [제일] 좋아해요.", ban:"과일 [중에서] 딸기를 [제일] 좋아해.", hint:"among = 중에서"},
    {en:"Which do you like better, coffee or tea?", ko:"커피하고 차 [중에서] 뭐가 [더] 좋아요?", ban:"커피하고 차 [중에서] 뭐가 [더] 좋아?", alt:["커피하고 차 중에 뭐가 더 좋아요?"], banAlt:["커피하고 차 중에 뭐가 더 좋아?"], hint:"two choices: 중에서 and 더"}
  ],
  dlg:{
    scene:"At a shoe store. 지은 can't decide between two pairs. 민수 and 지은 talk to each other in 반말, and she speaks politely to the clerk.",
    cast:[["민수","ban"],["지은","ban"],["직원","yo","store clerk"]],
    lines:[
      ["지은","민수야, 이거하고 저거 [중에서] 뭐가 [더] 예뻐?","Minsu, which is prettier, this one or that one?"],
      ["민수","음... 저거? 저게 [더] 예뻐.","Hmm... that one? That one's prettier."],
      ["지은","저기요, 이거하고 저거, 뭐가 [더] 싸요?","Excuse me, this one or that one, which is cheaper?","yo"],
      ["직원","이게 [더] 싸요. 저건 이거[보다] 만 원 [더] 비싸요.","This one's cheaper. That one costs 10,000 won more than this one."],
      ["지은","아... 만 원이요? 그럼 뭐가 [제일] 인기가 많아요?","Ah... 10,000 won? Then which one's the most popular?","yo"],
      ["직원","이게 [제일] 인기가 많아요. [훨씬] 가벼워요.","This one's the most popular. It's much lighter."],
      ["지은","민수야, 너는?","Minsu, what about you?"],
      ["민수","음... 나는 이게 [더] 좋아. [덜] 비싸고.","Hmm... I like this one better. It's less expensive, too."],
      ["지은","저기요, 이걸로 할게요.","Excuse me, I'll take this one.","yo"]
    ],
    clean:[
      ["지은","민수야, 이거하고 저거 [중에서] 뭐가 [더] 예뻐?","Minsu, which is prettier, this one or that one?"],
      ["민수","저게 [더] 예뻐.","That one is prettier."],
      ["지은","이거하고 저거 [중에서] 뭐가 [더] 싸요?","Which is cheaper, this one or that one?","yo"],
      ["직원","이게 [더] 싸요. 저 신발은 이 신발[보다] 만 원 [더] 비싸요.","This one is cheaper. Those shoes cost 10,000 won more than these shoes."],
      ["지은","그럼 뭐가 [제일] 인기가 많아요?","Then which one is the most popular?","yo"],
      ["직원","이 신발이 [제일] 인기가 많아요. 그리고 [훨씬] 가벼워요.","These shoes are the most popular. And they are much lighter."],
      ["지은","민수야, 너는 뭐가 [더] 좋아?","Minsu, which do you like better?"],
      ["민수","나는 이게 [더] 좋아. 그리고 [덜] 비싸.","I like this one better. And it's less expensive."],
      ["지은","이걸로 할게요.","I'll take this one.","yo"]
    ],
    q:[
      {q:"Which pair does Minsu think is prettier?",c:["That one","This one","Both the same","Neither"],why:"저게 더 예뻐: that one's prettier."},
      {q:"How do the prices compare?",c:["That one costs 10,000 won more","This one costs 10,000 won more","They cost the same","That one costs 1,000 won more"],why:"저건 이거보다 만 원 더 비싸요: that one is 10,000 won more than this one.",cwhy:"저 신발은 이 신발보다 만 원 더 비싸요."},
      {q:"Which does Jieun buy, and why might it be a good choice?",c:["This one: it's cheaper and more popular","That one: it's prettier","This one: it's prettier and bigger","That one: it's lighter"],why:"이게 더 싸요, 이게 제일 인기가 많아요, then 이걸로 할게요.",cwhy:"이게 더 싸요, 이 신발이 제일 인기가 많아요, then 이걸로 할게요."}
    ],
    note:"저건 is short for 저것은. In the last line, 지은 turns from 민수 back to the clerk, so she goes back to polite speech with 이걸로 할게요."
  },
  plan:[
    ["4","Warm-up","Compare two things in the room: 이 컵이 저 컵보다 커요."],
    ["9","Teach","Slides 1 to 4. Make five 보다 sentences about food, cities and weather, then swap the winner and the loser."],
    ["7","Rankings","Slides 5 to 7. Rank three foods, three cities and three people you both know with 중에서 … 제일."],
    ["3","This or that","Ask each other A하고 B 중에서 뭐가 더 좋아요? and answer with a reason using -아서."],
    ["5","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: one of you is 지은, the other takes 민수 and the clerk. Swap."],
    ["5","Check","Practice tab."],
    ["5","Say it","Say it tab, polite first. Check that 보다 lands on the thing being beaten, then try a few in 반말."]
  ],
  talk:[["커피하고 차 중에서 뭐가 더 좋아요?","Which do you prefer, coffee or tea?"],["한국 음식 중에서 뭐가 제일 맛있어요?","What's the tastiest Korean food?"],["한국어가 영어보다 어려워요?","Is Korean harder than English?"]],
  after:"HTSK Lesson 19 covers 더, 보다, 덜, and 가장/제일."
});
