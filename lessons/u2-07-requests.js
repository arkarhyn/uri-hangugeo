"use strict";
LESSONS.push({
  id:"requests", unit:2, ko:"하세요 하지 마세요", title:"Do this, don't do that",
  blurb:"Ask people to do things with -(으)세요 and -아/어 주세요, and tell them not to with -지 마세요.",
  src:["L40","L41"],
  goals:["Make -(으)세요 from any regular verb","Choose between -(으)세요 and -아/어 주세요","Say \"don't\" with -지 마세요","Give casual instructions with -아/어 and -지 마"],
  slides:[
    {h:"Please do: -(으)세요", p:"You met this in Review 2. Vowel stem + 세요, consonant stem + 으세요. It's polite and gentle, the way you'd talk to a guest.",
     t:[["Verb","Stem","Request"],["가다","가","가세요"],["오다","오","오세요"],["기다리다","기다리","기다리세요"],["앉다","앉","앉으세요"],["읽다","읽","읽으세요"],["하다","하","하세요"]],
     note:"Some verbs use their honorific word: 드세요 (eat, drink), 주무세요 (sleep), 계세요 (stay). The two goodbyes use both kinds: 안녕히 가세요 (go well) to the person leaving, and 안녕히 계세요 (stay well, from 계시다) to the person staying."},
    {h:"-(으)세요 or -아/어 주세요?", p:"-(으)세요 is the usual way to invite or instruct. -아/어 주세요, from the shopping lesson, asks them to do it for you, so it sounds more like asking a favor.",
     ex:[["여기 앉으세요.","Have a seat here. (an offer)"],["잠깐만 기다려 주세요.","Please wait a moment (for me)."],["천천히 말해 주세요.","Please speak slowly (for me)."],["많이 드세요.","Help yourself. (to a guest)"]]},
    {h:"Don't: -지 마세요", p:"Stem + 지 마세요. There's no vowel rule and no batchim rule, just like -고 and -지만.",
     t:[["Verb","Don't"],["가다","가지 마세요"],["먹다","먹지 마세요"],["걱정하다","걱정하지 마세요"],["늦다","늦지 마세요"],["말하다","말하지 마세요"]],
     ex:[["걱정하[지 마세요].","Don't worry."],["늦[지 마세요].","Don't be late."],["아직 가[지 마세요].","Don't go yet."]]},
    {h:"Not 안 + -세요", p:"안 가세요 isn't a request. It's an honorific statement: \"(someone you respect) isn't going\". To tell someone not to go, you need -지 마세요.",
     ex:[["가[지 마세요].","Don't go. ✓"],["안 가세요.","She isn't going. (a statement, not a request)"],["선생님은 오늘 안 오세요.","The teacher isn't coming today."]]},
    {h:"On signs", p:"Signs use -지 마세요, or a stiffer written form, -지 마십시오.",
     ex:[["사진 찍[지 마세요].","No photos."],["만지[지 마세요].","Do not touch."],["들어가[지 마세요].","Do not enter."],["뛰[지 마세요].","No running."]]},
    {h:"Softer: -지 말아 주세요", p:"To make a \"don't\" sound like a favor, combine the two: -지 말아 주세요.",
     ex:[["여기에 주차하[지 말아 주세요].","Please don't park here."],["너무 늦게 전화하[지 말아 주세요].","Please don't call too late."],["잊[지 말아 주세요].","Please don't forget."]]},
    {h:"Casual: -아/어 and -지 마", p:"In 반말, the casual form on its own works as an instruction, and -지 마세요 becomes -지 마. Use these only with people you'd use 반말 with.",
     ex:[["빨리 와!","Come quickly!"],["이거 먹어 봐.","Try this."],["걱정하[지 마].","Don't worry."],["가[지 마].","Don't go."]],
     note:"먹어 봐 uses -아/어 보다, \"try doing\". You'll hear it in shops too: 입어 보세요 (try it on)."},
    {h:"In 반말", p:"-(으)세요 becomes the plain -아/어 form, and -지 마세요 just loses 세요.",
     t:[["Polite","반말"],["앉으세요","앉[c:아]"],["오세요","[c:와]"],["기다리세요","기다[c:려]"],["가지 마세요","가지 마[x:세요]"]],
     ex:[["여기 앉[c:아].","Sit here."],["빨리 [c:와]!","Come quickly!"],["걱정하지 마.","Don't worry."]],
     note:"See also: the casual speech lesson (반말)."}
  ],
  vocab:[["앉다","to sit"],["기다리다","to wait"],["잠깐만","just a moment"],["천천히","slowly"],["빨리","quickly"],["걱정하다","to worry"],["늦다","to be late"],["아직","yet, still"],["사진","photo"],["찍다","to take (a photo)"],["만지다","to touch"],["들어가다","to go in"],["뛰다","to run"],["주차하다","to park"],["잊다","to forget"],["많이","a lot"]],
  ex:[
    {k:"mc",q:"가다 as a polite request",c:["가세요","가으세요","갔세요","가요세요"],why:"Vowel stem + 세요."},
    {k:"mc",q:"읽다 as a polite request",c:["읽으세요","읽세요","읽어세요","읽어요세요"],why:"Consonant stem + 으세요."},
    {k:"mc",q:"앉다 as a polite request",c:["앉으세요","앉세요","앉아세요","앉어세요"],why:"Consonant stem + 으세요."},
    {k:"mc",q:"\"Don't worry.\"",c:["걱정하지 마세요.","걱정 안 하세요.","걱정하지 않세요.","걱정해지 마세요."],why:"Stem + 지 마세요."},
    {k:"mc",q:"\"Don't be late.\"",c:["늦지 마세요.","안 늦으세요.","늦어지 마세요.","늦지 말세요."],why:"늦 + 지 마세요."},
    {k:"mc",q:"What does 안 가세요 mean?",c:["(Someone you respect) isn't going.","Don't go.","Please go.","Let's not go."],why:"안 + -세요 is an honorific statement. \"Don't go\" is 가지 마세요."},
    {k:"mc",q:"A guest arrives at your home. What's the most natural \"Have a seat here\"?",c:["여기 앉으세요.","여기 앉지 마세요.","여기 앉아요세요.","여기 앉어요."],why:"앉으세요 is the usual invitation. (앉아 주세요 is also polite, but it sounds more like a request.)"},
    {k:"mc",q:"\"Please speak slowly.\" (a favor to you)",c:["천천히 말해 주세요.","천천히 말하지 마세요.","천천히 말하 주세요.","천천히 말해 마세요."],why:"A favor for you: -아/어 주세요."},
    {k:"mc",q:"A museum sign says 사진 찍지 마세요. It means…",c:["No photos.","Take photos here.","Photos for sale.","Please take my photo."],why:"찍다 (take a photo) + 지 마세요 = don't."},
    {k:"mc",q:"\"Don't go.\" to your partner (casual)",c:["가지 마.","가지 마요요.","안 가.","가 마."],why:"Casual -지 마. 안 가 means \"I'm not going\"."},
    {k:"mc",q:"\"Come quickly!\" to a close friend",c:["빨리 와!","빨리 오지 마!","빨리 와자!","빨리 오세요요!"],why:"In 반말, 와 (와요 minus 요) works as an instruction."},
    {k:"mc",q:"\"Please don't park here.\" (softly)",c:["여기에 주차하지 말아 주세요.","여기에 주차해 주세요.","여기에 주차 안 주세요.","여기에 주차하지 주세요."],why:"-지 말아 주세요 is a softer \"don't\"."},
    {k:"build",q:"Please wait a moment.",ok:["잠깐만 기다려 주세요"],x:["기다리지"]},
    {k:"build",q:"Don't go yet.",ok:["아직 가지 마세요"],x:["안"]}
  ],
  pool:[
    {k:"mc",q:"오다 as a polite request",c:["오세요","오으세요","와세요","왔세요"],why:"Vowel stem + 세요."},
    {k:"mc",q:"기다리다 as a polite request",c:["기다리세요","기다리으세요","기다려세요","기다렸세요"],why:"Vowel stem + 세요."},
    {k:"mc",q:"먹다 + \"don't\"",c:["먹지 마세요","먹으지 마세요","먹어지 마세요","안 먹으세요"],why:"Stem + 지 마세요."},
    {k:"mc",q:"Someone is leaving your house. You say…",c:["안녕히 가세요.","안녕히 계세요.","안녕히 주무세요.","안녕히 오세요."],why:"가세요 (go well) to the person leaving."},
    {k:"mc",q:"You're leaving a shop. You say…",c:["안녕히 계세요.","안녕히 가세요.","안녕히 드세요.","안녕히 마세요."],why:"계세요 (stay well) to the person staying."},
    {k:"mc",q:"만지지 마세요 means…",c:["Do not touch.","Please touch it.","No photos.","No running."],why:"만지다 = to touch."},
    {k:"mc",q:"\"Don't forget.\" (casual)",c:["잊지 마.","잊어 마.","안 잊어.","잊지 마요요."],why:"Casual -지 마."}
  ],
  poolN:4,
  say:[
    {en:"Please sit here.", ko:"여기 [앉으세요].", ban:"여기 [앉아].", hint:"consonant stem + 으세요; in 반말 it's the plain 해요 form without 요"},
    {en:"Please come.", ko:"[오세요].", ban:"[와].", hint:"vowel stem + 세요"},
    {en:"Don't worry.", ko:"걱정하[지 마세요].", ban:"걱정하[지 마].", hint:"stem + 지 마세요"},
    {en:"Don't be late.", ko:"늦[지 마세요].", ban:"늦[지 마]."},
    {en:"Wait a moment.", ko:"잠깐만 [기다려 주세요].", ban:"잠깐만 [기다려].", banAlt:["잠깐만 기다려 줘."], hint:"잠깐만 = just a moment; asking a favor, so -아/어 주세요", note:"잠깐만 기다리세요 is what a clerk says to a customer. Asking someone to wait for you, add 주세요."},
    {en:"Please eat a lot. (to a guest)", ko:"많이 [드세요].", ban:"많이 [먹어].", hint:"for a guest, 먹다 has its own honorific word", note:"The 반말 version is for a friend at your place. A guest or anyone older gets 드세요."},
    {en:"Don't go yet.", ko:"아직 가[지 마세요].", ban:"아직 가[지 마].", hint:"안 + -세요 would not work here"},
    {en:"Come quickly. Don't be late.", ko:"빨리 [오세요]. 늦[지 마세요].", ban:"빨리 [와]. 늦[지 마].", hint:"two requests, one do and one don't"}
  ],
  dlg:{
    scene:"In a museum. 민수 and 지은 talk to each other in 반말, and switch to polite speech with the museum staff.",
    cast:[["민수","ban"],["지은","ban"],["직원","yo","museum staff"]],
    lines:[
      ["직원","저기요, 여기서 사진 찍[지 마세요].","Excuse me, no photos here, please."],
      ["민수","네? 아, 사진이요? 죄송합니다.","Sorry? Oh, photos? I'm sorry.","yo"],
      ["지은","민수야, 그거 만지[지 마]!","Minsu, don't touch that!"],
      ["민수","어? 아, 미안, 미안.","Huh? Oh, sorry, sorry."],
      ["지은","저... 화장실 어디에 있어요?","Um... where's the restroom?","yo"],
      ["직원","화장실이요? 저쪽으로 [가세요].","The restroom? Go that way."],
      ["지은","감사합니다.","Thank you.","yo"],
      ["지은","민수야, 여기서 잠깐만 [기다려].","Minsu, wait here a moment."],
      ["민수","응. 빨리 [와]!","Okay. Come back quickly!"]
    ],
    clean:[
      ["직원","저기요, 여기에서 사진을 찍[지 마세요].","Excuse me, please don't take photos here."],
      ["민수","네, 죄송합니다.","Yes, I'm sorry.","yo"],
      ["지은","민수야, 그것을 만지[지 마].","Minsu, don't touch that."],
      ["민수","응, 미안해.","Okay, I'm sorry."],
      ["지은","저기요, 화장실이 어디에 있어요?","Excuse me, where is the restroom?","yo"],
      ["직원","화장실은 저쪽에 있어요. 저쪽으로 [가세요].","The restroom is over there. Go that way."],
      ["지은","감사합니다.","Thank you.","yo"],
      ["지은","민수야, 여기에서 잠깐만 [기다려].","Minsu, wait here a moment."],
      ["민수","응. 빨리 [와].","Okay. Come back quickly."]
    ],
    q:[
      {q:"What does the staff member ask them not to do?", c:["Take photos","Touch anything","Run","Talk loudly"], why:"여기서 사진 찍지 마세요: no photos here.", cwhy:"여기에서 사진을 찍지 마세요: please don't take photos here."},
      {q:"What does Jieun tell Minsu not to do?", c:["Touch something","Take photos","Go to the restroom","Worry"], why:"그거 만지지 마: don't touch that.", cwhy:"그것을 만지지 마: don't touch that."},
      {q:"What does Jieun ask Minsu to do while she's gone?", c:["Wait there a moment","Come with her","Go that way","Take a photo"], why:"여기서 잠깐만 기다려: wait here a moment.", cwhy:"여기에서 잠깐만 기다려: wait here a moment."}
    ],
    note:"The staff use -지 마세요 and -(으)세요. Between friends, the same requests shrink to -지 마 and the plain form: 만지지 마, 기다려, 빨리 와."
  },
  plan:[
    ["3","Warm-up","Recap from Review 2: say 안녕히 가세요 and 안녕히 계세요, and explain which one goes to whom."],
    ["9","Teach","Slides 1 to 4. One person names a verb from the Words tab; the other gives the -(으)세요 and the -지 마세요 forms."],
    ["6","Simon says","Take turns giving each other instructions. -(으)세요 means do it, -지 마세요 means don't (앉으세요, 일어나세요, 웃지 마세요). Try to catch the other person out."],
    ["4","Sign makers","Slide 5. Each person writes two signs for your home (냉장고 열지 마세요!) and reads them out."],
    ["4","Check","Practice tab."],
    ["4","Say it","Say it tab. Give each answer as a short order to your partner, who has to act it out (앉아! 늦지 마!). Then try the polite version."],
    ["4","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: one of you is 민수, the other 지은, and the site plays the staff. Swap and go again."]
  ],
  talk:[["한국어로 천천히 말해 주세요.","Please speak slowly in Korean."],["걱정하지 마세요. 괜찮아요.","Don't worry. It's fine."],["다시 한번 말해 주세요.","Please say that one more time."]],
  after:"HTSK Lesson 40 covers commands, including negative ones, and Lesson 41 covers -아/어 주다."
});
