"use strict";
LESSONS.push({
  id:"endings", ko:"해요 합니다", title:"Polite and formal endings",
  blurb:"Turn any verb into -아요/-어요 and -ㅂ니다/-습니다, and know when each one fits.",
  src:["L5","L6"],
  goals:["Find the stem of any verb","Add -아요/-어요 correctly, including merged forms like 와요 and 마셔요","Switch to formal -ㅂ니다/-습니다","Choose the right level for the situation"],
  slides:[
    {h:"Two endings you'll use most", p:"Korean shows how formal a situation is through the end of the verb. Right now two levels matter. Casual speech (반말) comes later.",
     t:[["Level","Example","Who you use it with"],["합니다체 (formal)","갑니다","Presentations, news, the military, customer service, formal introductions"],["해요체 (polite)","가요","Most adults you meet day to day: shop staff, coworkers, a friend's parents"],["반말 (casual)","가","Close friends and younger family. Not yet."]],
     ex:[["저는 학생[입니다].","I am a student. (formal)"],["저는 학생[이에요].","I am a student. (polite)"]]},
    {h:"Step 1: find the stem", p:"Every verb and adjective in the dictionary ends in 다. Take off 다 and you have the stem. Every ending attaches to the stem.",
     t:[["Dictionary form","Stem"],["먹다 (eat)","먹"],["가다 (go)","가"],["공부하다 (study)","공부하"],["마시다 (drink)","마시"]]},
    {h:"Step 2: ㅏ or ㅗ takes 아요, everything else takes 어요", p:"Look at the <b>last vowel</b> of the stem. If it is ㅏ or ㅗ, add 아요. Any other vowel, add 어요. 하다 verbs are their own case: 하 always becomes 해요.",
     ex:[["앉다 → 앉[아요]","sit (last vowel ㅏ)"],["놀다 → 놀[아요]","play (last vowel ㅗ)"],["먹다 → 먹[어요]","eat (last vowel ㅓ)"],["읽다 → 읽[어요]","read (last vowel ㅣ)"],["공부하다 → 공부[해요]","study (하다 → 해요)"]]},
    {h:"When the stem ends in a vowel, the vowels merge", p:"If the stem has no final consonant, the stem vowel and the ending squeeze into one syllable.",
     t:[["Verb","Merge","Polite form"],["가다","ㅏ + 아 → ㅏ","가요"],["오다","ㅗ + 아 → ㅘ","와요"],["보다","ㅗ + 아 → ㅘ","봐요"],["배우다","ㅜ + 어 → ㅝ","배워요"],["마시다","ㅣ + 어 → ㅕ","마셔요"],["기다리다","ㅣ + 어 → ㅕ","기다려요"],["보내다","ㅐ + 어 → ㅐ","보내요"],["되다","ㅚ + 어 → ㅙ","돼요"]]},
    {h:"Nouns: 이에요 / 예요", p:"To say \"A is B\", attach 이다 to the noun. In polite speech it becomes 이에요 after a consonant and 예요 after a vowel. The negative is 아니에요, with 이/가 on the noun.",
     ex:[["저는 학생[이에요].","I'm a student. (학생 ends in a consonant)"],["이거는 커피[예요].","This is coffee. (커피 ends in a vowel)"],["저는 의사가 [아니에요].","I'm not a doctor."]]},
    {h:"Formal: -ㅂ니다 / -습니다", p:"Vowel stem: add ㅂ니다 under the last syllable. Consonant stem: add 습니다. A stem ending in ㄹ drops the ㄹ first. Questions end in -ㅂ니까? / -습니까? Nouns take 입니다.",
     t:[["Verb","Formal statement","Formal question"],["가다","갑니다","갑니까?"],["하다","합니다","합니까?"],["먹다","먹습니다","먹습니까?"],["살다 (ㄹ drops)","삽니다","삽니까?"],["학생이다","학생입니다","학생입니까?"]],
     ex:[["감사[합니다].","Thank you."],["어디에 [갑니까]?","Where are you going? (formal)"]]},
    {h:"Questions use the same words", p:"In 해요체 a question is the same form with your voice rising at the end. The answer can repeat it with falling intonation.",
     ex:[["커피를 마셔요?","Do you drink coffee? ↗"],["네, 마셔요.","Yes, I do. ↘"],["지금 공부해요?","Are you studying now?"]],
     note:"Quick check: say 먹다, 오다, 마시다, 일하다 in 해요 and 합니다 before moving on."}
  ],
  vocab:[["가다","to go"],["오다","to come"],["먹다","to eat"],["마시다","to drink"],["보다","to see, watch"],["하다","to do"],["공부하다","to study"],["배우다","to learn"],["만나다","to meet"],["읽다","to read"],["기다리다","to wait"],["앉다","to sit"],["일하다","to work"],["살다","to live"],["만들다","to make"]],
  ex:[
    {k:"mc",q:"먹다 in polite form (해요)",c:["먹어요","먹아요","먹요","먹해요"],why:"The last vowel is ㅓ, so it takes 어요."},
    {k:"mc",q:"오다 in polite form",c:["와요","오아요","와어요","오요"],why:"ㅗ + 아요 merges into ㅘ: 와요."},
    {k:"mc",q:"마시다 in polite form",c:["마셔요","마사요","마시아요","마셔어요"],why:"ㅣ + 어 merges into ㅕ: 마셔요."},
    {k:"mc",q:"공부하다 in polite form",c:["공부해요","공부하아요","공부하어요","공부하요"],why:"Every 하다 verb ends in 해요."},
    {k:"mc",q:"배우다 in polite form",c:["배워요","배와요","배우아요","배요"],why:"ㅜ + 어 merges into ㅝ: 배워요."},
    {k:"mc",q:"기다리다 in polite form",c:["기다려요","기다리아요","기다라요","기다리요"],why:"ㅣ + 어 merges into ㅕ."},
    {k:"mc",q:"먹다 in formal form (합니다)",c:["먹습니다","먹합니다","먹입니다","먹니다"],why:"A consonant stem takes 습니다."},
    {k:"mc",q:"가다 in formal form",c:["갑니다","가습니다","가입니다","가니다"],why:"A vowel stem takes ㅂ under the last syllable: 갑니다."},
    {k:"mc",q:"살다 in formal form",c:["삽니다","살습니다","사습니다","살입니다"],why:"ㄹ stems drop the ㄹ, then add ㅂ니다."},
    {k:"mc",q:"저는 학생___. (polite)",c:["이에요","예요","입니까","이요"],why:"학생 ends in a consonant, so it takes 이에요."},
    {k:"mc",q:"이거는 커피___. (polite)",c:["예요","이에요","이예요","요"],why:"커피 ends in a vowel, so it takes 예요."},
    {k:"mc",q:"You're introducing yourself at a formal briefing. Which fits?",c:["저는 김민수입니다.","저는 김민수예요.","나는 김민수야.","저는 김민수입니까?"],why:"A formal setting calls for 합니다체: 입니다."},
    {k:"build",q:"I eat bread. (polite)",ok:["저는 빵을 먹어요"],x:["먹습니까"]},
    {k:"build",q:"Do you drink coffee? (polite)",ok:["커피를 마셔요?"],x:["마시요?"]}
  ],
  plan:[
    ["5","Warm-up","Greet each other twice: once like a news anchor (안녕하십니까?), once like coworkers (안녕하세요?). Talk about what felt different."],
    ["10","Teach","Slides 1 to 5. Write five verbs on paper and find each stem together before adding any ending."],
    ["8","Ping-pong drill","One person says a dictionary form (먹다). The other answers in 해요 (먹어요), then 합니다 (먹습니다). Switch every five verbs. The Words tab has the list."],
    ["5","Formal switch","Slide 6. Re-say three of your 해요 sentences in 합니다체 as if giving a briefing."],
    ["5","Check","Do the Practice tab together. Read every explanation out loud, even for right answers."]
  ],
  talk:[["오늘 뭐 해요?","What are you doing today?"],["커피를 마셔요?","Do you drink coffee?"],["어디에 살아요?","Where do you live?"]],
  after:"Read HTSK Lesson 5 for more conjugation detail, then do the Practice tab once on your own."
});
