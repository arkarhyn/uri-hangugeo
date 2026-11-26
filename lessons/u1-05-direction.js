"use strict";
LESSONS.push({
  id:"direction", ko:"에 가요 로 가요", title:"Going places",
  blurb:"Destinations with 에, direction and means with (으)로, and from-to with 에서…까지.",
  src:["L12"],
  goals:["Say where you're going with 에","Pick 로 or 으로 correctly","Say how you travel with (으)로","Say from where to where with 에서…까지"],
  slides:[
    {h:"Destination: place + 에 + 가다 / 오다", p:"에 marks where you end up.",
     ex:[["학교[에] 가요.","I go to school."],["내일 한국[에] 가요.","I'm going to Korea tomorrow."],["친구가 우리 집[에] 와요.","My friend is coming to our house."],["어디[에] 가요?","Where are you going? (often just 어디 가요?)"]]},
    {h:"Direction: (으)로", p:"(으)로 points toward a direction or destination. After a vowel <b>or ㄹ</b>, use 로. After any other consonant, use 으로.",
     t:[["Noun","Ends in","With (으)로"],["학교","vowel","학교로"],["서울","ㄹ","서울로"],["지하철","ㄹ","지하철로"],["집","ㅂ","집으로"],["오른쪽","ㄱ","오른쪽으로"]],
     ex:[["집[으로] 가요.","I'm heading home."],["이쪽[으로] 오세요.","Please come this way."],["오른쪽[으로] 가세요.","Go to the right."]]},
    {h:"에 or (으)로?", p:"With 가다 and 오다, both often work: 학교에 가요 and 학교로 가요 mean nearly the same thing. 에 focuses on arriving; (으)로 on the direction you're heading. For directions like 오른쪽, 왼쪽, 위, 이쪽, use (으)로.",
     ex:[["서울역[으로] 가 주세요.","To Seoul Station, please. (to a taxi driver; 가 주세요 is a set phrase for now)"],["위[로] 올라가세요.","Please go up."]]},
    {h:"By what means: (으)로", p:"The same particle marks how you do something: the vehicle, the tool, or the language. Walking is the exception: 걸어서 가요.",
     ex:[["버스[로] 가요.","I go by bus."],["지하철[로] 와요.","I come by subway."],["비행기[로] 가요.","I go by plane."],["한국어[로] 말해요.","I speak in Korean."],["걸어서 가요.","I go on foot."]]},
    {h:"From … to: 에서 … 까지", p:"에서 marks the start point and 까지 the end point. Add the means in the middle.",
     ex:[["집[에서] 학교[까지] 버스로 가요.","I take the bus from home to school."],["서울[에서] 부산[까지] 기차로 두 시간 반 걸려요.","Seoul to Busan takes two and a half hours by train."]],
     note:"걸리다 means \"to take (time)\". The number words come up in Lessons 6 and 7."},
    {h:"가다 and 오다", p:"가다 is movement away from where the speaker is; 오다 is movement toward the speaker.",
     ex:[["같이 가요!","Let's go together!"],["집에 언제 와요?","When are you coming home?"],["버스가 와요.","The bus is coming."]]},
    {h:"In 반말", p:"에 and (으)로 don't change in 반말. Only the ending drops 요, and 저 becomes 나.",
     t:[["Polite","반말","Meaning"],["학교에 가요","학교에 가[x:요]","go to school"],["어디에 가요?","어디에 가[x:요]?","where are you going?"],["집으로 와요","집으로 와[x:요]","come home"],["버스로 가요","버스로 가[x:요]","go by bus"],["[c:저]는 걸어서 가요","[c:나]는 걸어서 가[x:요]","I go on foot"]],
     ex:[["학교[에] 가.","I go to school."],["집[으로] 가.","I'm heading home."],["[c:나]는 버스[로] 가.","I go by bus."]],
     note:"See also: the casual speech lesson (반말) covers 반말 in full."}
  ],
  vocab:[["버스","bus"],["지하철","subway"],["택시","taxi"],["비행기","airplane"],["기차","train"],["걸어서","on foot"],["오른쪽","right"],["왼쪽","left"],["이쪽","this way"],["역","station"],["공항","airport"],["까지","to, until"],["걸리다","to take (time)"],["같이","together"]],
  ex:[
    {k:"mc",q:"집___ 가요. (heading home)",c:["으로","로"],why:"집 ends in ㅂ, so it takes 으로."},
    {k:"mc",q:"학교___ 가요.",c:["로","으로"],why:"학교 ends in a vowel, so it takes 로."},
    {k:"mc",q:"서울___ 가요.",c:["로","으로"],why:"Words ending in ㄹ take 로, not 으로."},
    {k:"mc",q:"지하철___ 와요.",c:["로","으로"],why:"지하철 ends in ㄹ, so 로."},
    {k:"mc",q:"오른쪽___ 가세요.",c:["으로","로"],why:"오른쪽 ends in ㄱ, so 으로."},
    {k:"mc",q:"\"I go by bus.\"",c:["버스로 가요.","버스에 가요.","버스에서 가요.","버스으로 가요."],why:"(으)로 marks the means of travel, and 버스 ends in a vowel."},
    {k:"mc",q:"\"Please speak in Korean.\"",c:["한국어로 말하세요.","한국어에 말하세요.","한국어으로 말하세요.","한국어에서 말하세요."],why:"A language is the means, so (으)로. 한국어 ends in a vowel."},
    {k:"mc",q:"\"I walk from home to the station.\"",c:["집에서 역까지 걸어서 가요.","집에 역까지 걸어서 가요.","집에서 역에서 걸어서 가요.","집까지 역에서 걸어서 가요."],why:"Start with 에서, end with 까지. The last option says from the station to home."},
    {k:"mc",q:"\"Where are you going?\"",c:["어디에 가요?","어디에서 가요?","어디를 있어요?","어디로 있어요?"],why:"가다 takes 에 for the destination."},
    {k:"mc",q:"\"Come this way, please.\"",c:["이쪽으로 오세요.","이쪽에서 오세요.","이쪽을 오세요.","이쪽로 오세요."],why:"A direction takes (으)로, and 이쪽 ends in ㄱ. 이쪽에서 오세요 would mean \"come from this side\"."},
    {k:"build",q:"I go to the airport by taxi.",ok:["저는 택시로 공항에 가요","저는 공항에 택시로 가요"],x:["택시에"]},
    {k:"build",q:"Please go to the right.",ok:["오른쪽으로 가세요"],x:["오른쪽에서"]}
  ],
  say:[
    {en:"I go to school.", ko:"학교[에] 가요.", ban:"학교[에] 가.", hint:"place + 에 + 가다"},
    {en:"Where are you going?", ko:"어디[에] 가세요?", ban:"어디[에] 가?", alt:["어디 가세요?","어디 가요?"], banAlt:["어디 가?"], note:"To someone older, 가세요 (from the honorifics lesson) is the polite way to ask. 가요 is fine with someone your age."},
    {en:"I'm heading home.", ko:"집[으로] 가요.", ban:"집[으로] 가.", hint:"집 ends in a consonant"},
    {en:"I'm going to Seoul tomorrow.", ko:"내일 서울[로] 가요.", ban:"내일 서울[로] 가.", alt:["내일 서울에 가요."], banAlt:["내일 서울에 가."], hint:"서울 ends in ㄹ"},
    {en:"I go by bus.", ko:"버스[로] 가요.", ban:"버스[로] 가.", hint:"means of travel"},
    {en:"I speak in Korean.", ko:"한국어[로] 말해요.", ban:"한국어[로] 말해.", hint:"a language is also a means"},
    {en:"I go to the airport by taxi.", ko:"공항[에] 택시[로] 가요.", ban:"공항[에] 택시[로] 가.", alt:["택시로 공항에 가요."], banAlt:["택시로 공항에 가."]},
    {en:"I go from home to work by subway.", ko:"집[에서] 회사[까지] 지하철[로] 가요.", ban:"집[에서] 회사[까지] 지하철[로] 가.", hint:"start 에서, end 까지, then the means"}
  ],
  dlg:{
    scene:"In a taxi. 지은 is taking a trip to Busan, and 민수 rides with her to Seoul Station. The friends use 반말 with each other and polite speech with the driver.",
    cast:[["기사님","yo","taxi driver"],["지은","ban"],["민수","ban"]],
    lines:[
      ["기사님","어서 오세요. 어디[로] 가세요?","Welcome. Where are you headed?"],
      ["지은","서울역[으로] 가 주세요.","To Seoul Station, please.","yo"],
      ["지은","저... 여기[서] 서울역[까지] 많이 걸려요?","Um... does it take long from here to Seoul Station?","yo"],
      ["기사님","아니요, 이십 분 걸려요.","No, it takes twenty minutes."],
      ["민수","근데 서울역[에서] 부산[까지] 얼마나 걸려?","So how long is it from Seoul Station to Busan?"],
      ["지은","부산? 기차[로] 세 시간 걸려. 너는 집[에] 가?","To Busan? Three hours by train. Are you going home?"],
      ["민수","응, 지하철[로] 가.","Yeah, I'm going by subway."],
      ["기사님","자, 서울역이에요.","Here we are, Seoul Station."],
      ["지은","아, 네, 감사합니다.","Oh, okay, thank you.","yo"]
    ],
    clean:[
      ["기사님","어서 오세요. 어디[로] 가세요?","Welcome. Where are you going?"],
      ["지은","서울역[으로] 가 주세요.","Please go to Seoul Station.","yo"],
      ["지은","여기[에서] 서울역[까지] 시간이 많이 걸려요?","Does it take a long time from here to Seoul Station?","yo"],
      ["기사님","아니요, 이십 분 걸려요.","No, it takes twenty minutes."],
      ["민수","그런데 서울역[에서] 부산[까지] 얼마나 걸려?","By the way, how long does it take from Seoul Station to Busan?"],
      ["지은","기차[로] 세 시간 걸려. 너는 집[에] 가?","It takes three hours by train. Are you going home?"],
      ["민수","응, 나는 지하철[로] 집[에] 가.","Yes, I'm going home by subway."],
      ["기사님","여기가 서울역이에요.","This is Seoul Station."],
      ["지은","네, 감사합니다.","Okay, thank you.","yo"]
    ],
    q:[
      {q:"How long does the taxi ride take?", c:["20 minutes","10 minutes","30 minutes","2 hours"], why:"아니요, 이십 분 걸려요: no, it takes twenty minutes."},
      {q:"How is Jieun getting to Busan?", c:["By train","By bus","By plane","By taxi"], why:"부산? 기차로 세 시간 걸려: three hours by train.", cwhy:"기차로 세 시간 걸려: it takes three hours by train."},
      {q:"How is Minsu getting home?", c:["By subway","By taxi","On foot","By train"], why:"응, 지하철로 가: yes, by subway.", cwhy:"나는 지하철로 집에 가: I'm going home by subway."}
    ],
    note:"서울역으로 가 주세요 is the set phrase for any taxi: swap in your own destination. 기사님 is what you call a driver."
  },
  plan:[
    ["3","Warm-up","Ask 내일 어디에 가요? Answer with a real place."],
    ["8","Teach","Slides 1 to 3. Practise the 로 / 으로 rule on ten nouns, including some ending in ㄹ."],
    ["6","Taxi role-play","One person is the driver. The passenger gives a destination (서울역으로 가 주세요) and turns (오른쪽으로 가세요). Swap roles."],
    ["5","How do you get there?","Slides 4 and 5. Describe your commute: 집에서 ___까지 ___로 가요."],
    ["4","Check","Practice tab."],
    ["5","Say it","Say it tab, polite first. For each one, decide between 에, (으)로 and 에서…까지 before you reveal."],
    ["5","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: take 지은 in one run and the driver and 민수 in the other. Swap and go again."]
  ],
  talk:[["집에서 회사까지 뭐로 가요?","How do you get from home to work?"],["이번 주말에 어디에 가요?","Where are you going this weekend?"],["한국어로 말해 주세요.","Please say it in Korean."]],
  after:"HTSK Lesson 12, the section on (으)로."
});
