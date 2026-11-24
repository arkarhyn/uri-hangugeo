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
     ex:[["같이 가요!","Let's go together!"],["집에 언제 와요?","When are you coming home?"],["버스가 와요.","The bus is coming."]]}
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
  plan:[
    ["5","Warm-up","Ask 내일 어디에 가요? Answer with a real place."],
    ["8","Teach","Slides 1 to 3. Practise the 로 / 으로 rule on ten nouns, including some ending in ㄹ."],
    ["8","Taxi role-play","One person is the driver. The passenger gives a destination (서울역으로 가 주세요) and turns (오른쪽으로 가세요). Swap roles."],
    ["6","How do you get there?","Slides 4 and 5. Describe your commute: 집에서 ___까지 ___로 가요."],
    ["5","Check","Practice tab."]
  ],
  talk:[["집에서 회사까지 뭐로 가요?","How do you get from home to work?"],["이번 주말에 어디에 가요?","Where are you going this weekend?"],["한국어로 말해 주세요.","Please say it in Korean."]],
  after:"HTSK Lesson 12, the section on (으)로."
});
