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
     note:"키가 커요 means \"tall\": literally, the height is big. 키가 작아요 means short."}
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
  plan:[
    ["5","Warm-up","Compare two things in the room: 이 컵이 저 컵보다 커요."],
    ["10","Teach","Slides 1 to 4. Make five 보다 sentences about food, cities and weather, then swap the winner and the loser."],
    ["8","Rankings","Slides 5 to 7. Rank three foods, three cities and three people you both know with 중에서 … 제일."],
    ["5","This or that","Ask each other A하고 B 중에서 뭐가 더 좋아요? and answer with a reason using -아서."],
    ["5","Check","Practice tab."]
  ],
  talk:[["커피하고 차 중에서 뭐가 더 좋아요?","Which do you prefer, coffee or tea?"],["한국 음식 중에서 뭐가 제일 맛있어요?","What's the tastiest Korean food?"],["한국어가 영어보다 어려워요?","Is Korean harder than English?"]],
  after:"HTSK Lesson 19 covers 더, 보다, 덜, and 가장/제일."
});
