"use strict";
LESSONS.push({
  id:"eseo", ko:"에서", title:"Doing something at a place",
  blurb:"Say where an action happens with 에서, and stop mixing it up with 에.",
  src:["L12"],
  goals:["Use 에서 to mark where an action happens","Choose between 에 and 에서","Use 에서 to mean \"from\"","Recognise the short forms 여기서 and 어디서"],
  slides:[
    {h:"Place + 에서 + action", p:"에서 marks the place where an action happens. It attaches straight to the place, whether the word ends in a vowel or a consonant.",
     ex:[["도서관[에서] 공부해요.","I study at the library."],["카페[에서] 커피를 마셔요.","I drink coffee at a café."],["회사[에서] 일해요.","I work at a company."],["집[에서] 영화를 봐요.","I watch a movie at home."]]},
    {h:"Where it goes in the sentence", p:"The usual order is who, when, where, what, verb. The place can move around, but time words usually come first.",
     ex:[["저는 공원[에서] 친구를 만나요.","I meet a friend at the park."],["오늘 학교[에서] 시험을 봐요.","I take a test at school today."]]},
    {h:"에 or 에서?", p:"에 marks a point: where something <b>is</b> (있다, 없다) or where you <b>go</b> (가다, 오다). 에서 marks the stage where something <b>is done</b>.",
     t:[["With 에","With 에서"],["집[에] 있어요. (I'm at home.)","집[에서] 쉬어요. (I rest at home.)"],["학교[에] 가요. (I go to school.)","학교[에서] 공부해요. (I study at school.)"],["식당[에] 사람이 많아요. (There are lots of people in the restaurant.)","식당[에서] 밥을 먹어요. (I eat at the restaurant.)"]]},
    {h:"Action verbs that still take 에", p:"Some verbs look like actions but take 에 because the place is where you end up.",
     ex:[["의자[에] 앉아요.","I sit on the chair."],["공항[에] 도착해요.","I arrive at the airport."],["방[에] 들어가요.","I go into the room."],["서울[에] 살아요. / 서울[에서] 살아요.","I live in Seoul. (살다 accepts both)"]]},
    {h:"에서 can also mean \"from\"", p:"With movement away from a place, 에서 means \"from\". These two are fixed phrases worth memorising now, even though 왔어요 and 오셨어요 are past tense.",
     ex:[["미국[에서] 왔어요.","I came from America."],["어디[에서] 오셨어요?","Where are you from? (respectful)"]]},
    {h:"Short forms", p:"In speech, 에서 often shrinks to 서 after these words.",
     t:[["Full","Short","Meaning"],["어디에서","어디서","where (at)"],["여기에서","여기서","here"],["거기에서","거기서","there"],["저기에서","저기서","over there"]],
     ex:[["어디서 일해요?","Where do you work?"],["여기서 기다리세요.","Please wait here."]]},
    {h:"In 반말", p:"에서 doesn't change in 반말. Only the ending drops 요, and 저 becomes 나.",
     t:[["Polite","반말","Meaning"],["도서관에서 공부해요","도서관에서 공부해[x:요]","study at the library"],["카페에서 마셔요","카페에서 마셔[x:요]","drink at a café"],["어디서 일해요?","어디서 일해[x:요]?","where do you work?"],["[c:저]는 집에서 쉬어요","[c:나]는 집에서 쉬어[x:요]","I rest at home"]],
     ex:[["도서관[에서] 공부해.","I study at the library."],["어디[서] 일해?","Where do you work?"],["[c:나]는 집[에서] 쉬어.","I rest at home."]],
     note:"See also: the casual speech lesson (반말) covers 반말 in full."}
  ],
  vocab:[["도서관","library"],["카페","café"],["회사","company, office"],["공원","park"],["식당","restaurant"],["학교","school"],["집","home, house"],["시장","market"],["체육관","gym"],["영화관","movie theater"],["쉬다","to rest"],["운동하다","to exercise"],["사다","to buy"],["요리하다","to cook"],["어디서","where (at)"]],
  ex:[
    {k:"mc",q:"도서관___ 책을 읽어요.",c:["에서","에"],why:"Reading is an action done at the library."},
    {k:"mc",q:"화장실이 어디___ 있어요?",c:["에","에서"],why:"있다 tells where something is, so it takes 에."},
    {k:"mc",q:"저는 지금 학교___ 가요.",c:["에","에서"],why:"가다 takes 에 for the destination."},
    {k:"mc",q:"식당___ 비빔밥을 먹어요.",c:["에서","에"],why:"Eating is an action done at the restaurant."},
    {k:"mc",q:"친구가 집___ 없어요.",c:["에","에서"],why:"없다 is about where something is (or isn't): 에."},
    {k:"mc",q:"체육관___ 운동해요.",c:["에서","에"],why:"Exercising is an action at the gym."},
    {k:"mc",q:"의자___ 앉으세요.",c:["에","에서"],why:"앉다 takes 에: the chair is where you end up."},
    {k:"mc",q:"시장___ 과일을 사요.",c:["에서","에"],why:"Buying is an action done at the market."},
    {k:"mc",q:"미국___ 왔어요. (I came from America.)",c:["에서","에"],why:"With movement away from a place, 에서 means \"from\"."},
    {k:"mc",q:"공원___ 친구를 만나요.",c:["에서","에"],why:"Meeting a friend happens at the park."},
    {k:"mc",q:"Which sentence is natural?",c:["카페에서 커피를 마셔요.","카페에 커피를 마셔요.","카페에서 있어요.","카페를 커피에서 마셔요."],why:"Drinking is an action, so the café takes 에서. 있다 would need 에."},
    {k:"build",q:"I cook at home.",ok:["저는 집에서 요리해요"],x:["집에"]},
    {k:"build",q:"Where do you work?",ok:["어디서 일해요?"],x:["어디에"]}
  ],
  say:[
    {en:"I study at the library.", ko:"도서관[에서] 공부해요.", ban:"도서관[에서] 공부해.", hint:"place + 에서 + action"},
    {en:"I drink coffee at a café.", ko:"카페[에서] 커피를 마셔요.", ban:"카페[에서] 커피를 마셔.", alt:["카페에서 커피 마셔요."], banAlt:["카페에서 커피 마셔."]},
    {en:"I work at a company.", ko:"회사[에서] 일해요.", ban:"회사[에서] 일해."},
    {en:"Where do you work?", ko:"어디[서] 일해요?", ban:"어디[서] 일해?", alt:["어디에서 일해요?"], banAlt:["어디에서 일해?"], hint:"where + 에서, shortened"},
    {en:"I buy fruit at the market.", ko:"시장[에서] 과일을 사요.", ban:"시장[에서] 과일을 사.", alt:["시장에서 과일 사요."], banAlt:["시장에서 과일 사."]},
    {en:"I meet a friend at the park.", ko:"공원[에서] 친구를 만나요.", ban:"공원[에서] 친구를 만나.", alt:["공원에서 친구 만나요."], banAlt:["공원에서 친구 만나."]},
    {en:"Where do you usually meet friends?", ko:"보통 어디[서] 친구를 만나요?", ban:"보통 어디[서] 친구를 만나?", alt:["보통 어디에서 친구를 만나요?"], banAlt:["보통 어디에서 친구를 만나?"], hint:"time word first"},
    {en:"Jieun is at the library. I study at the library.", ko:"지은이는 도서관[에] 있어요. [c:저]는 도서관[에서] 공부해요.", ban:"지은이는 도서관[에] 있어. [c:나]는 도서관[에서] 공부해.", hint:"being somewhere takes 에; doing something takes 에서"}
  ],
  dlg:{
    scene:"A Saturday phone call. 민수 wants to know where 지은 is. They're friends the same age, so it's 반말 the whole way.",
    cast:[["민수","ban"],["지은","ban"]],
    lines:[
      ["민수","지은아, 지금 집[에] 있어?","Jieun, are you home right now?"],
      ["지은","집? 아니, 카페[에] 있어.","Home? No, I'm at a café."],
      ["민수","카페? 거기[서] 뭐 해?","A café? What are you doing there?"],
      ["지은","음... 그냥 공부해. 너는?","Hmm... just studying. You?"],
      ["민수","나? 체육관[에서] 운동해. 근데 점심 어디[서] 먹어?","Me? I'm working out at the gym. Where are you having lunch, though?"],
      ["지은","점심? 음... 시장[에서] 먹어. 너도 와.","Lunch? Hmm... I'm eating at the market. You come too."],
      ["민수","시장? 좋아! 나도 지금 시장[에] 가.","The market? Great! I'm heading to the market now too."],
      ["지은","응, 빨리 와.","Okay, come quick."]
    ],
    clean:[
      ["민수","지은아, 지금 집[에] 있어?","Jieun, are you at home now?"],
      ["지은","아니, 지금 카페[에] 있어.","No, I'm at a café now."],
      ["민수","거기[에서] 뭐 해?","What are you doing there?"],
      ["지은","나는 카페[에서] 공부해. 너는 지금 뭐 해?","I'm studying at the café. What are you doing now?"],
      ["민수","나는 체육관[에서] 운동해. 너는 어디[에서] 점심을 먹어?","I'm working out at the gym. Where are you having lunch?"],
      ["지은","나는 시장[에서] 점심을 먹어. 너도 시장[에] 와.","I'm having lunch at the market. You come to the market too."],
      ["민수","좋아! 나도 지금 시장[에] 가.","Great! I'm going to the market now too."],
      ["지은","응, 빨리 와.","Okay, come quickly."]
    ],
    q:[
      {q:"Where is Jieun when Minsu calls?", c:["At a café","At home","At the gym","At the market"], why:"아니, 카페에 있어: no, I'm at a café.", cwhy:"아니, 지금 카페에 있어: no, I'm at a café now."},
      {q:"What is Minsu doing?", c:["Working out at the gym","Studying at a café","Resting at home","Shopping at the market"], why:"체육관에서 운동해: I'm working out at the gym."},
      {q:"Where is Jieun having lunch?", c:["At the market","At the café","At home","At the gym"], why:"시장에서 먹어: I'm eating at the market.", cwhy:"나는 시장에서 점심을 먹어: I'm having lunch at the market."}
    ],
    note:"Listen for the pair: 카페에 있어 and 시장에 가 (being and going) against 체육관에서 운동해 and 시장에서 먹어 (doing). In speech, 거기에서 often shrinks to 거기서."
  },
  plan:[
    ["3","Warm-up","Name five places in your town in Korean (도서관, 카페, 체육관 and so on)."],
    ["8","Teach","Slides 1 to 3. Draw two columns on paper: 에 (be, go) and 에서 (do)."],
    ["6","Where do you…?","Take turns asking 어디에서 ___해요? (공부해요, 운동해요, 커피를 마셔요) and answering with a real place."],
    ["4","Edge cases","Slides 4 to 6: 앉다 and 도착하다 take 에, and 에서 can also mean \"from\"."],
    ["4","Check","Practice tab. Say each finished sentence out loud before moving on."],
    ["5","Say it","Say it tab, polite first. Before revealing each one, say out loud whether it needs 에 or 에서."],
    ["5","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: one of you is 민수, the other 지은. Swap and go again."]
  ],
  talk:[["보통 어디에서 공부해요?","Where do you usually study?"],["주말에 어디에서 친구를 만나요?","Where do you meet friends on weekends?"],["어디에서 오셨어요?","Where are you from?"]],
  after:"HTSK Lesson 12 has a section on 에서, along with 부터, 까지 and (으)로."
});
