"use strict";
LESSONS.push({
  id:"itda", ko:"있어요 없어요", title:"Where things are",
  blurb:"Say what's there and what isn't, and place things with 위, 아래, 앞, 뒤, 옆, 안, 밖.",
  src:["L2"],
  goals:["Use 있다 and 없다 for \"be there\" and \"have\"","Place things with position words","Ask where something is","Use 계세요 for people you respect"],
  slides:[
    {h:"있다 has two meanings", p:"있다 means \"to be (somewhere)\" and also \"to have\". Its opposite is 없다. Both conjugate the regular way: 있어요, 없어요.",
     ex:[["고양이가 집에 [있어요].","The cat is at home."],["저는 차가 [있어요].","I have a car."],["시간이 [있어요]?","Do you have time?"],["돈이 [없어요].","I don't have money."]]},
    {h:"The pattern", p:"The thing takes 이/가. The place takes 에. Then 있어요 or 없어요.",
     ex:[["가방[이] 의자[에] 있어요.","The bag is on the chair."],["은행[이] 어디[에] 있어요?","Where is the bank?"]]},
    {h:"Position words", p:"These are nouns. Put the reference object first, then the position word, then 에: 책상 위에 = on the desk.",
     t:[["Word","Meaning"],["위","on, above"],["아래 / 밑","under, below"],["앞","in front of"],["뒤","behind"],["옆","next to"],["안","inside"],["밖","outside"],["사이","between"],["근처","near"],["오른쪽 / 왼쪽","right side / left side"]]},
    {h:"Using them", p:"Notice that the reference object always comes before the position word, the opposite of English.",
     ex:[["책이 책상 [위에] 있어요.","The book is on the desk."],["고양이가 의자 [밑에] 있어요.","The cat is under the chair."],["편의점이 은행 [옆에] 있어요.","The convenience store is next to the bank."],["지갑이 가방 [안에] 있어요.","The wallet is in the bag."],["학교는 은행하고 공원 [사이에] 있어요.","The school is between the bank and the park."]]},
    {h:"Here, there, over there", p:"여기 is near the speaker, 거기 is near the listener (or somewhere already mentioned), and 저기 is far from both.",
     ex:[["화장실은 [저기에] 있어요.","The restroom is over there."],["[여기] 있어요.","Here it is. (handing something over)"],["[거기] 누가 있어요?","Who is there?"]]},
    {h:"Asking and answering", p:"Answer with 네, 있어요 or 아니요, 없어요. Use 은/는 for something already being talked about, or to contrast two things.",
     ex:[["화장실[은] 어디에 있어요?","Where is the restroom?"],["물 있어요? — 네, 있어요.","Is there water? — Yes, there is."],["고양이[는] 있어요. 강아지[는] 없어요.","I have a cat. I don't have a dog."]]},
    {h:"Respected people: 계세요", p:"For a person you'd use honorifics with, 있다 meaning \"be somewhere\" becomes 계시다.",
     ex:[["선생님이 교실에 [계세요].","The teacher is in the classroom."],["사장님 [계세요]?","Is the boss in?"]]},
    {h:"In 반말", p:"있어요 and 없어요 simply lose their 요. Position words and particles stay the same.",
     t:[["Polite","반말","Meaning"],["있어요","있어[x:요]","is, have"],["없어요","없어[x:요]","isn't, don't have"],["어디에 있어요?","어디에 있어[x:요]?","where is it?"],["[c:저]는 차가 있어요","[c:나]는 차가 있어[x:요]","I have a car"],["선생님이 계세요","선생님이 계[c:셔]","the teacher is in"]],
     ex:[["책이 책상 [위에] 있어.","The book is on the desk."],["화장실 어디에 [있어]?","Where is the restroom?"],["돈이 [없어].","I don't have money."]],
     note:"See also: the casual speech lesson (반말) covers 반말 in full."}
  ],
  vocab:[["위","on, above"],["아래","under, below"],["밑","under, beneath"],["앞","in front of"],["뒤","behind"],["옆","next to"],["안","inside"],["밖","outside"],["사이","between"],["근처","near"],["책상","desk"],["의자","chair"],["가방","bag"],["지갑","wallet"],["화장실","restroom"],["은행","bank"],["편의점","convenience store"]],
  scenes:5,
  ex:[
    {k:"mc",q:"\"The wallet is in the bag.\"",c:["지갑이 가방 안에 있어요.","지갑이 안 가방에 있어요.","가방이 지갑 안에 있어요.","지갑이 가방 안에서 있어요."],why:"Reference object first (가방), then the position word (안), then 에."},
    {k:"mc",q:"\"I don't have time.\"",c:["시간이 없어요.","시간이 있어요.","시간을 없어요.","시간에 없어요."],why:"The thing you have or lack takes 이/가."},
    {k:"mc",q:"\"Where is the restroom?\"",c:["화장실이 어디에 있어요?","화장실이 어디에서 있어요?","화장실을 어디에 있어요?","화장실이 어디에 가요?"],why:"있다 takes 에, and the restroom is the subject, so it takes 이."},
    {k:"mc",q:"What does 뒤 mean?",c:["behind","in front of","next to","under"],why:"앞 is in front, 뒤 is behind."},
    {k:"mc",q:"\"The store is between the bank and the school.\"",c:["가게가 은행하고 학교 사이에 있어요.","가게가 사이 은행하고 학교에 있어요.","은행하고 학교가 가게 사이에 있어요.","가게가 은행하고 학교 옆에 있어요."],why:"A하고 B 사이에 = between A and B."},
    {k:"mc",q:"\"Is the teacher in the classroom?\" (respectfully)",c:["선생님이 교실에 계세요?","선생님이 교실에 있어요?","선생님께 교실에 계세요?","선생님이 교실에서 계세요?"],why:"계시다 is the honorific of 있다 for people, and it takes 에."},
    {k:"build",q:"The cat is under the chair.",ok:["고양이가 의자 밑에 있어요","고양이가 의자 아래에 있어요"],x:["위에","아래에"]},
    {k:"build",q:"I have a car.",ok:["저는 차가 있어요"],x:["차를"]}
  ],
  say:[
    {en:"I have a car.", ko:"[c:저]는 차가 [있어요].", ban:"[c:나]는 차가 [있어].", alt:["차가 있어요."], banAlt:["차가 있어."], hint:"the thing you have takes 이/가"},
    {en:"I don't have money.", ko:"돈이 [없어요].", ban:"돈이 [없어].", alt:["저는 돈이 없어요."], banAlt:["나는 돈이 없어."]},
    {en:"Do you have time?", ko:"시간 [있어요]?", ban:"시간 [있어]?", alt:["시간이 있어요?"], banAlt:["시간이 있어?"]},
    {en:"The book is on the desk.", ko:"책이 책상 [위에] 있어요.", ban:"책이 책상 [위에] 있어.", hint:"the reference object comes first: desk + on"},
    {en:"The wallet is in the bag.", ko:"지갑이 가방 [안에] 있어요.", ban:"지갑이 가방 [안에] 있어.", alt:["지갑은 가방 안에 있어요."], banAlt:["지갑은 가방 안에 있어."]},
    {en:"Where is the bank?", ko:"은행이 어디에 [있어요]?", ban:"은행이 어디에 [있어]?", alt:["은행 어디에 있어요?"], banAlt:["은행 어디에 있어?"]},
    {en:"The teacher is in the classroom.", ko:"선생님이 교실에 [계세요].", ban:"선생님이 교실에 [계셔].", hint:"있다 for a respected person"},
    {en:"The cat is under the chair. The dog isn't there.", ko:"고양이는 의자 [밑에] 있어요. 강아지는 거기에 [없어요].", ban:"고양이는 의자 [밑에] 있어. 강아지는 거기에 [없어].", alt:["고양이는 의자 아래에 있어요. 강아지는 거기에 없어요."], banAlt:["고양이는 의자 아래에 있어. 강아지는 거기에 없어."]}
  ],
  plan:[
    ["5","Warm-up","Ask about things you own: 차가 있어요? 고양이가 있어요? Answer with 있어요 or 없어요."],
    ["10","Teach","Slides 1 to 4. Put a real object on, under and next to a real table while you say each sentence."],
    ["8","Hide and find","One person hides an object in the room. The other asks yes/no questions (책상 위에 있어요?) until they find it."],
    ["4","Here and there","Slides 5 to 7: 여기, 거기, 저기 and 계세요."],
    ["5","Check","Practice tab. The picture questions change each time, so run it twice."],
    ["5","Say it","Say it tab, polite first. Look around the room and say where three real things are before you reveal."]
  ],
  talk:[["집 근처에 뭐가 있어요?","What is near your house?"],["가방 안에 뭐가 있어요?","What is in your bag?"],["지금 어디에 있어요?","Where are you right now?"]],
  after:"HTSK Lesson 2 covers 있다 as \"be at\" and \"have\", with the position words."
});
