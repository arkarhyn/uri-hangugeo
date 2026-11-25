"use strict";
/* ---- Unit 2: new material, past where the KSM class stopped ---- */
LESSONS.push({
  id:"past", unit:2, ko:"했어요", title:"Talking about the past",
  blurb:"Say what you did with -았어요/-었어요. It uses the same vowel rule you already know from 해요.",
  src:["L5"],
  goals:["Make the past tense of any regular verb or adjective","Use 했어요 for every 하다 verb","Say what something was with 이었어요/였어요","Say what you didn't or couldn't do with 안 and 못"],
  slides:[
    {h:"If you can say it now, you can say it in the past", p:"Take the 해요 form, drop 요, put ㅆ under the last syllable and add 어요. That's the whole trick.",
     t:[["Now","Past","Meaning"],["가요","갔어요","went"],["먹어요","먹었어요","ate"],["봐요","봤어요","saw, watched"],["마셔요","마셨어요","drank"],["해요","했어요","did"]],
     note:"Under the hood it's the vowel rule from Review 1 again: ㅏ or ㅗ takes 았, everything else takes 었."},
    {h:"Consonant stems: 았어요 or 었어요", p:"When the stem ends in a consonant, nothing merges. Look at the last vowel: ㅏ or ㅗ takes 았어요, anything else takes 었어요. Adjectives work exactly the same way.",
     ex:[["앉다 → 앉[았어요]","sat"],["받다 → 받[았어요]","received"],["먹다 → 먹[었어요]","ate"],["읽다 → 읽[었어요]","read"],["있다 → 있[었어요]","was there, had"],["재미있다 → 재미있[었어요]","was fun"]]},
    {h:"Vowel stems merge, just like the present", p:"If you know the 해요 form, the past is one step away.",
     t:[["Verb","Present","Past"],["오다","와요","왔어요"],["만나다","만나요","만났어요"],["배우다","배워요","배웠어요"],["기다리다","기다려요","기다렸어요"],["보내다","보내요","보냈어요"],["되다","돼요","됐어요"]]},
    {h:"하다 is always 했어요", p:"Every 하다 verb ends in 했어요, and there are hundreds of them. In formal speech it's 했습니다, and any past form takes 습니다: 갔습니다, 먹었습니다.",
     ex:[["어제 한국어를 공부[했어요].","I studied Korean yesterday."],["주말에 뭐 [했어요]?","What did you do on the weekend?"],["청소[했어요]. 그리고 요리[했어요].","I cleaned. And I cooked."],["너무 피곤[했어요].","I was so tired."]]},
    {h:"Nouns: 이었어요 / 였어요", p:"이에요 (after a consonant) becomes 이었어요, and 예요 (after a vowel) becomes 였어요. 아니에요 becomes 아니었어요.",
     ex:[["어제는 제 생일[이었어요].","Yesterday was my birthday. (생일 ends in a consonant)"],["어제는 휴가[였어요].","I was on leave yesterday. (휴가 ends in a vowel)"],["그건 농담[이었어요].","That was a joke."],["제 잘못이 [아니었어요].","It wasn't my fault."]]},
    {h:"Didn't and couldn't: 안 and 못", p:"안 and 못 work the same way in the past. Put them right before the verb. With noun + 하다 verbs, they go between the noun and 했어요.",
     ex:[["아침을 [안] 먹었어요.","I didn't eat breakfast."],["어젯밤에 [못] 잤어요.","I couldn't sleep last night."],["숙제를 [안] 했어요.","I didn't do the homework."],["운동 [안] 했어요.","I didn't work out. (not 안 운동했어요)"]]},
    {h:"When it happened", p:"Time words usually come first in the sentence.",
     t:[["Korean","Meaning"],["어제","yesterday"],["어젯밤","last night"],["그저께","the day before yesterday"],["지난주","last week"],["지난 주말","last weekend"],["작년","last year"],["아까","a little while ago"],["방금","just now"]],
     ex:[["지난 주말에 영화를 봤어요.","I saw a movie last weekend."],["아까 전화했어요.","I called a little while ago."]],
     note:"어제, 아까 and 방금 never take 에. 지난 주말에 and 작년에 usually do."},
    {h:"밥 먹었어요?", p:"\"Have you eaten?\" is a common way to check in on someone, a bit like \"how are you?\". It's a real question, but nobody minds if you haven't.",
     ex:[["밥 먹었어요?","Have you eaten?"],["네, 먹었어요.","Yes, I have."],["아직이요.","Not yet."]]},
    {h:"In 반말", p:"The past tense stays exactly as it is; only the 요 drops. 이었어요 / 였어요 drop the 요 the same way, and 제 becomes 내.",
     t:[["해요","반말","Meaning"],["먹었어요","먹었어[x:요]","ate"],["했어요","했어[x:요]","did"],["못 잤어요","못 잤어[x:요]","couldn't sleep"],["생일이었어요","생일이었어[x:요]","was a birthday"],["제 생일","[c:내] 생일","my birthday"]],
     ex:[["어제 뭐 했[어]?","What did you do yesterday?"],["밥 먹었[어]?","Did you eat?"],["어제는 [c:내] 생일이었어.","Yesterday was my birthday."]],
     note:"See also: the casual speech lesson (반말) covers 반말 in full."}
  ],
  vocab:[["어제","yesterday"],["어젯밤","last night"],["지난주","last week"],["주말","weekend"],["아까","a little while ago"],["방금","just now"],["작년","last year"],["자다","to sleep"],["일어나다","to get up"],["받다","to receive"],["청소하다","to clean"],["요리하다","to cook"],["운동하다","to work out"],["전화하다","to call"],["생일","birthday"],["피곤하다","to be tired"],["재미있다","to be fun"],["그리고","and, and then"]],
  ex:[
    {k:"mc",q:"가다 in the past (polite style)",c:["갔어요","가았어요","가었어요","갈어요"],why:"가 + ㅆ어요 merges into 갔어요."},
    {k:"mc",q:"먹다 in the past",c:["먹었어요","먹았어요","먹어었요","먹했어요"],why:"The last vowel is ㅓ, so it takes 었어요."},
    {k:"mc",q:"보다 in the past",c:["봤어요","보았요","봈어요","보었어요"],why:"ㅗ + 았 merges into 봤어요. (보았어요 is also correct in writing.)"},
    {k:"mc",q:"마시다 in the past",c:["마셨어요","마시었요","마싰어요","마셔어요"],why:"ㅣ + 었 merges into 셨: 마셨어요."},
    {k:"mc",q:"공부하다 in the past",c:["공부했어요","공부하았어요","공부해었어요","공부핬어요"],why:"Every 하다 verb becomes 했어요."},
    {k:"mc",q:"앉다 in the past",c:["앉았어요","앉었어요","앉아요","앉했어요"],why:"The last vowel is ㅏ, so it takes 았어요. 앉아요 is the present."},
    {k:"mc",q:"배우다 in the past",c:["배웠어요","배왔어요","배우았어요","배워요"],why:"ㅜ + 었 merges into ㅝ: 배웠어요. 배워요 is the present."},
    {k:"mc",q:"어제는 제 생일___.",c:["이었어요","였어요","이에요","했어요"],why:"생일 ends in a consonant, so it takes 이었어요."},
    {k:"mc",q:"어제는 휴가___.",c:["였어요","이었어요","예요","했어요"],why:"휴가 ends in a vowel, so it takes 였어요."},
    {k:"mc",q:"\"I didn't eat breakfast.\"",c:["아침을 안 먹었어요.","안 아침을 먹었어요.","아침을 먹었어요 안.","아침을 안 먹어요."],why:"안 goes right before the verb. The last one is present tense."},
    {k:"mc",q:"\"I didn't work out yesterday.\"",c:["어제 운동 안 했어요.","어제 안 운동했어요.","어제 운동했어요 안.","어제 운동 안 해요."],why:"With noun + 하다 verbs, 안 goes between the noun and 했어요."},
    {k:"mc",q:"\"I couldn't sleep last night.\"",c:["어젯밤에 못 잤어요.","어젯밤에 안 잤어요.","어젯밤에 못 자요.","어젯밤에 잤어요 못."],why:"못 says you were unable to; 안 just says you didn't."},
    {k:"mc",q:"\"What did you do on the weekend?\"",c:["주말에 뭐 했어요?","주말에 뭐 해요?","주말에 뭐 있었어요?","주말에 뭐 하세요?"],why:"했어요 is the past of 해요."},
    {k:"mc",q:"Someone greets you with 밥 먹었어요? What are they asking?",c:["Have you eaten?","Are you going to eat?","Do you like rice?","Shall we eat now?"],why:"It's a friendly check-in. 네, 먹었어요 or 아직이요 are both normal answers."},
    {k:"build",q:"I saw a movie last weekend.",ok:["지난 주말에 영화를 봤어요","영화를 지난 주말에 봤어요"],x:["봐요"]},
    {k:"build",q:"I studied Korean yesterday.",ok:["어제 한국어를 공부했어요","한국어를 어제 공부했어요"],x:["공부해요"]}
  ],
  pool:[
    {k:"mc",q:"만나다 in the past",c:["만났어요","만나었어요","만낫어요","만나았어요"],why:"ㅏ + 았 merges: 만났어요."},
    {k:"mc",q:"오다 in the past",c:["왔어요","오았요","옸어요","와어요"],why:"ㅗ + 았 merges into ㅘ: 왔어요."},
    {k:"mc",q:"기다리다 in the past",c:["기다렸어요","기다리었요","기다랐어요","기다려요"],why:"ㅣ + 었 merges into ㅕ: 기다렸어요."},
    {k:"mc",q:"읽다 in the past",c:["읽었어요","읽았어요","읽어요","일었어요"],why:"The last vowel is ㅣ, so it takes 었어요."},
    {k:"mc",q:"받다 in the past",c:["받았어요","받었어요","받아요","밨어요"],why:"The last vowel is ㅏ, so it takes 았어요."},
    {k:"mc",q:"보내다 in the past",c:["보냈어요","보내었요","보났어요","보내요"],why:"ㅐ + 었 merges into 냈."},
    {k:"mc",q:"있다 in the past",c:["있었어요","있았어요","있어요","있었요"],why:"The last vowel is ㅣ, so it takes 었어요."},
    {k:"mc",q:"피곤하다 in the past",c:["피곤했어요","피곤하았어요","피곤해요","피곤핬어요"],why:"하다 adjectives also become 했어요."},
    {k:"mc",q:"일어나다 in the past",c:["일어났어요","일어나었어요","일어나요","일어낫어요"],why:"ㅏ + 았 merges: 일어났어요."}
  ],
  poolN:4,
  say:[
    {en:"I ate breakfast.", ko:"아침을 [먹었어요].", ban:"아침을 [먹었어].", alt:["아침 먹었어요."], banAlt:["아침 먹었어."], hint:"먹다 + past"},
    {en:"What did you do yesterday?", ko:"어제 뭐 [했어요]?", ban:"어제 뭐 [했어]?", hint:"하다 always becomes 했-"},
    {en:"I was really tired.", ko:"너무 피곤[했어요].", ban:"너무 피곤[했어].", alt:["정말 피곤했어요."], banAlt:["진짜 피곤했어."]},
    {en:"Yesterday was my birthday.", ko:"어제는 제 생일[이었어요].", ban:"어제는 [c:내] 생일[이었어].", hint:"noun + 이었어요 / 였어요; in 반말, 제 becomes 내"},
    {en:"I couldn't sleep last night.", ko:"어젯밤에 [못] 잤어요.", ban:"어젯밤에 [못] 잤어.", alt:["어젯밤에 잠을 못 잤어요."], banAlt:["어젯밤에 잠을 못 잤어."], hint:"못 + past"},
    {en:"I didn't do my homework.", ko:"숙제를 [안] 했어요.", ban:"숙제를 [안] 했어.", alt:["숙제 안 했어요."], banAlt:["숙제 안 했어."], hint:"안 goes right before the verb"},
    {en:"I went to the market earlier.", ko:"아까 시장에 [갔어요].", ban:"아까 시장에 [갔어].", hint:"earlier = 아까, market = 시장"},
    {en:"Last weekend I watched a movie at home.", ko:"지난 주말에 집에서 영화를 [봤어요].", ban:"지난 주말에 집에서 영화를 [봤어].", alt:["지난 주말에 집에서 영화 봤어요."], banAlt:["지난 주말에 집에서 영화 봤어."], hint:"time first, then the place with 에서"}
  ],
  dlg:{
    scene:"Monday morning. 민수 and 지은 are friends the same age, so they talk in 반말.",
    cast:[["민수","ban"],["지은","ban"]],
    lines:[
      ["지은","민수야, 주말에 뭐 [했어]?","Minsu, what did you do on the weekend?"],
      ["민수","주말? 음... 토요일엔 그냥 집에서 영화 [봤어].","The weekend? Hmm... Saturday I just watched a movie at home."],
      ["지은","오, 재밌[었어]?","Oh, was it good?"],
      ["민수","응, 진짜 재밌[었어]. 근데 좀... 길[었어]. 너는?","Yeah, it was really good. But kind of... long. You?"],
      ["지은","나? 난 일요일에 시장 [갔어]. 그리고 운동도 하고.","Me? I went to the market on Sunday. And worked out, too."],
      ["민수","와. 나는 일요일엔 그냥 집에 있[었어]. 너무 피곤[했어].","Wow. I just stayed home on Sunday. I was so tired."],
      ["지은","아, 맞다. 아침은 [먹었어]?","Oh, right. Did you have breakfast?"],
      ["민수","아니, 아직. 너는?","No, not yet. You?"],
      ["지은","나도 아직.","Me neither."]
    ],
    q:[
      {q:"What did Minsu do on Saturday?", c:["Watched a movie at home","Went to the market","Worked out","Studied Korean"], why:"토요일엔 그냥 집에서 영화 봤어: Saturday I just watched a movie at home."},
      {q:"What did Jieun do on Sunday?", c:["Went to the market, then worked out","Watched a movie","Stayed home, tired","Studied Korean"], why:"시장 갔어. 그리고 운동도 하고."},
      {q:"Who has had breakfast?", c:["Neither of them","Only Minsu","Only Jieun","Both of them"], why:"아니, 아직 (no, not yet), then 나도 아직 (me neither)."}
    ],
    note:"See also: the 반말 lesson and Thinking out loud. Real speech drops what the listener already knows: 시장 갔어 (no 에), 아니, 아직 (no verb at all), 재밌었어 (short for 재미있었어). Asking a teacher, it would be 주말에 뭐 했어요?"
  },
  plan:[
    ["5","Warm-up","Ask each other 밥 먹었어요? and 어제 뭐 했어요? Answering in English is fine; the point is to hear the questions."],
    ["10","Teach","Slides 1 to 4. Take ten verbs from the Words tab: say the present (가요), then the past (갔어요)."],
    ["8","Yesterday story","Each person tells three things they did yesterday, joined with 그리고 (일어났어요. 그리고 운동했어요. 그리고…). The listener asks one question back."],
    ["5","Didn't and couldn't","Slide 6. Each person names one thing they didn't do (안) and one thing they couldn't do (못) this week."],
    ["5","Check","Practice tab."],
    ["5","Say it","Say it tab, polite first. Swap who reads the English halfway through, then try a few in 반말."],
    ["5","Dialogue","Dialogue tab. Listen first and answer the questions, then Role-play it: one of you is 민수, the other 지은. Swap and go again."]
  ],
  talk:[["어제 뭐 했어요?","What did you do yesterday?"],["주말에 어디에 갔어요?","Where did you go on the weekend?"],["아침 먹었어요?","Did you have breakfast?"]],
  after:"HTSK Lesson 5 covers past-tense conjugation in more depth."
});
