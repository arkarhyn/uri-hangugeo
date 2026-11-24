"use strict";
LESSONS.push({
  id:"counting", ko:"몇 개예요", title:"Counting things",
  blurb:"Native numbers with counters, the shortened forms 한, 두, 세, 네, 스무, plus time and age.",
  src:["L10","L11"],
  goals:["Put noun, number and counter in the right order","Use the shortened native forms","Pick the right counter","Tell the time and say ages"],
  slides:[
    {h:"Noun + number + counter", p:"Korean counts with a counter word after the number. The noun comes first.",
     ex:[["사과 [세 개]","three apples"],["학생 [두 명]","two students"],["고양이 [한 마리]","one cat"]]},
    {h:"Native numbers shrink before a counter", p:"Only five numbers change: 1, 2, 3, 4 and 20. In bigger numbers, only the last part changes.",
     t:[["Number","Counting","Before a counter"],["1","하나","한"],["2","둘","두"],["3","셋","세"],["4","넷","네"],["20","스물","스무"]],
     ex:[["[스무] 살","20 years old"],["스물[한] 살","21 years old"],["열[두] 명","12 people"]]},
    {h:"Counters that take native numbers", p:"These are the ones you'll hear daily.",
     t:[["Counter","For","Example"],["개","things in general","가방 두 개"],["명","people","친구 세 명"],["분","people (honorific)","손님 네 분"],["마리","animals","강아지 한 마리"],["권","books","책 다섯 권"],["잔","cups, glasses","커피 두 잔"],["병","bottles","물 한 병"],["장","flat things: paper, tickets, photos","표 세 장"],["대","cars, machines","차 한 대"],["살","age","서른 살"],["번","times","두 번"]]},
    {h:"Counters that take Sino numbers", p:"Money, minutes, floors, numbered things and dates use Sino numbers.",
     t:[["Counter","For","Example"],["원","won","오천 원"],["분","minutes","삼십 분"],["층","floors","이 층"],["번","number #","삼 번 버스"],["년 · 월 · 일","year · month · day","이천이십육 년"],["인분","servings","삼겹살 이 인분"]],
     note:"분 has two meanings. 세 분 (native) is three people, said politely. 삼 분 (Sino) is three minutes."},
    {h:"Asking how many: 몇", p:"몇 + counter asks \"how many\" or \"what number\".",
     ex:[["[몇 개]예요?","How many (things)?"],["[몇 살]이에요?","How old are you?"],["[몇 시]예요?","What time is it?"],["[몇 분]이세요? — 두 명이에요.","How many in your party? — Two."]]},
    {h:"Telling time", p:"Hours use native numbers with 시. Minutes use Sino numbers with 분. 반 means half past. 오전 is a.m., 오후 is p.m. For duration, use 시간.",
     ex:[["세 시 십오 분","3:15"],["열두 시 [반]","12:30"],["오후 두 시","2 p.m."],["두 [시간]","two hours (duration)"]]},
    {h:"At the café or shop", p:"Item + number + counter + 주세요 is all you need to order.",
     ex:[["아메리카노 두 잔 주세요.","Two Americanos, please."],["물 한 병 주세요.","A bottle of water, please."],["표 세 장 주세요.","Three tickets, please."],["이거 얼마예요? — 오천 원이에요.","How much is this? — It's 5,000 won."]]}
  ],
  vocab:[["개","counter: things"],["명","counter: people"],["분","counter: people (honorific)"],["마리","counter: animals"],["권","counter: books"],["잔","counter: cups"],["병","counter: bottles"],["장","counter: flat things"],["대","counter: vehicles, machines"],["살","years old"],["번","times"],["시","o'clock"],["시간","hours (duration)"],["반","half"],["주세요","please give me"],["얼마예요?","how much is it?"]],
  ex:[
    {k:"mc",q:"\"three cats\"",c:["고양이 세 마리","고양이 셋 마리","고양이 삼 마리","세 고양이 마리"],why:"Noun, then the shortened native number (세), then the counter (마리)."},
    {k:"mc",q:"\"Two cups of coffee, please.\"",c:["커피 두 잔 주세요.","커피 둘 잔 주세요.","커피 이 잔 주세요.","커피 두 병 주세요."],why:"둘 shortens to 두 before a counter, and cups are 잔."},
    {k:"mc",q:"\"I'm 20 years old.\"",c:["스무 살이에요.","스물 살이에요.","이십 살이에요.","스무 세예요."],why:"스물 shortens to 스무 before a counter."},
    {k:"mc",q:"21 years old",c:["스물한 살","스무한 살","스물하나 살","이십일 살"],why:"Only the last part shortens: 스물 + 한."},
    {k:"mc",q:"4:30",c:["네 시 삼십 분","사 시 삼십 분","네 시 서른 분","넷 시 삼십 분"],why:"Native hours (네 시), Sino minutes (삼십 분). 네 시 반 also works."},
    {k:"mc",q:"\"two hours\" (how long)",c:["두 시간","두 시","이 시간","둘 시간"],why:"Duration is 시간. 두 시 means two o'clock."},
    {k:"mc",q:"The counter for books",c:["권","장","마리","대"],why:"Books are 권."},
    {k:"mc",q:"The counter for cars",c:["대","개","권","병"],why:"Vehicles and machines are 대."},
    {k:"mc",q:"A restaurant host asks how many are in your party:",c:["몇 분이세요?","몇 개예요?","몇 살이세요?","몇 시예요?"],why:"분 is the polite counter for people."},
    {k:"mc",q:"What does 세 분 mean?",c:["three people (polite)","three minutes","three o'clock","three times"],why:"Native 세 + 분 counts people politely. Three minutes would be 삼 분."},
    {k:"mc",q:"\"Three tickets, please.\"",c:["표 세 장 주세요.","표 세 권 주세요.","표 삼 장 주세요.","표 셋 장 주세요."],why:"Tickets are flat, so 장, with native 세."},
    {k:"mc",q:"\"five students\"",c:["학생 다섯 명","학생 오 명","다섯 학생 명","학생 다섯 마리"],why:"People take 명 with native numbers."},
    {k:"build",q:"Two bottles of water, please.",ok:["물 두 병 주세요"],x:["둘"]}
  ],
  plan:[
    ["5","Warm-up","Count things in the room in native numbers: 의자 하나, 둘, 셋…"],
    ["10","Teach","Slides 1 to 4. Drill the shortened forms (한, 두, 세, 네, 스무) until they come without thinking."],
    ["8","Café role-play","Slide 7. One person runs a café; the other orders for a group (아메리카노 두 잔, 케이크 한 개 주세요). The café asks 몇 분이세요? first."],
    ["5","Clock drill","Number Gym, Time mode. Say each answer out loud before tapping."],
    ["4","Check","Practice tab."]
  ],
  talk:[["몇 살이에요?","How old are you?"],["지금 몇 시예요?","What time is it now?"],["고양이가 몇 마리 있어요?","How many cats do you have?"]],
  after:"HTSK Lesson 10 lists the common counters, and Lesson 11 covers time."
});
