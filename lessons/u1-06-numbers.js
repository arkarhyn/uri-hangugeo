"use strict";
LESSONS.push({
  id:"numbers", ko:"일 이 삼 하나 둘 셋", title:"Two number systems",
  blurb:"Sino-Korean and native Korean numbers, how to build big numbers, and which system each situation uses.",
  src:["L10","L11"],
  goals:["Count 1 to 99 in native Korean","Read large numbers in Sino-Korean, grouped by 만","Know which system goes with which situation","Say dates, months and phone numbers"],
  slides:[
    {h:"Korean has two sets of numbers", p:"Native Korean numbers (하나, 둘, 셋…) and Sino-Korean numbers, borrowed from Chinese (일, 이, 삼…). You need both every day. The situation decides which one you use.",
     ex:[["[세] 시","three o'clock (native)"],["[삼] 층","third floor (Sino)"]]},
    {h:"Sino-Korean: 0 to 10, then build", p:"Build bigger numbers like a calculator reads them: 25 is 이십오 (two-ten-five). For 100, 1,000 and 10,000, don't say 일 in front.",
     t:[["0","1","2","3","4","5","6","7","8","9","10"],["영 / 공","일","이","삼","사","오","육","칠","팔","구","십"]],
     ex:[["십일 · 이십 · 이십오 · 구십구","11 · 20 · 25 · 99"],["백 · 천 · 만","100 · 1,000 · 10,000"],["천오백","1,500 (not 일천오백)"]]},
    {h:"Big numbers go in fours", p:"English groups digits in threes (thousand, million). Korean groups them in fours, around 만 (10,000).",
     t:[["Number","Korean"],["10,000","만"],["50,000","오만"],["100,000","십만"],["1,000,000","백만"],["15,000원","만 오천 원"],["32,500원","삼만 이천오백 원"]]},
    {h:"Native Korean: 1 to 10, then tens", p:"Native numbers have their own word for each ten. They stop at 99. Above that, Koreans use Sino numbers.",
     t:[["1","2","3","4","5","6","7","8","9","10"],["하나","둘","셋","넷","다섯","여섯","일곱","여덟","아홉","열"]],
     ex:[["스물 · 서른 · 마흔 · 쉰","20 · 30 · 40 · 50"],["예순 · 일흔 · 여든 · 아흔","60 · 70 · 80 · 90"],["열하나 · 스물셋 · 마흔다섯","11 · 23 · 45"]]},
    {h:"Which system when?", p:"Make this chart and keep it beside you for a week.",
     t:[["Sino-Korean","Native Korean"],["Dates: 년, 월, 일","Counting things with counters"],["Money: 원","Hours on the clock: 시"],["Minutes and seconds: 분, 초","Age: 살"],["Phone numbers","How many times: 번"],["Floors: 층","Duration in hours: 시간"],["Numbers like bus 50 or room 302: 번, 호","Counting out loud: 하나, 둘, 셋"]]},
    {h:"Months and dates", p:"Months are Sino number + 월. Two are irregular: June is 유월 and October is 시월. Dates read year, month, day.",
     ex:[["일월, 이월, 삼월 … [유월] … [시월], 십일월, 십이월","January … June … October … December"],["이천이십육 년 십일월 이십일 일","21 November 2026"]]},
    {h:"Phone numbers", p:"Read phone numbers digit by digit with Sino numbers. Zero is 공, and the dash is read as 에.",
     ex:[["공일공에 일이삼사에 오육칠팔","010-1234-5678"],["전화번호가 뭐예요?","What's your phone number?"]]},
    {h:"In 반말", p:"Numbers don't change in 반말. Only the ending does: 이에요 becomes 이야, and 예요 becomes 야.",
     ex:[["지금 세 시[c:야].","It's three o'clock now."],["삼 층[c:이야].","It's the third floor."]],
     note:"See also: the casual speech lesson (반말) covers 반말 in full."}
  ],
  vocab:[["하나","one (native)"],["둘","two (native)"],["셋","three (native)"],["넷","four (native)"],["다섯","five (native)"],["열","ten (native)"],["스물","twenty (native)"],["일","one (Sino)"],["이","two (Sino)"],["삼","three (Sino)"],["십","ten (Sino)"],["백","hundred"],["천","thousand"],["만","ten thousand"],["공","zero (phone numbers)"],["층","floor"],["전화번호","phone number"],["몇","how many, what number"]],
  ex:[
    {k:"mc",q:"27 in Sino-Korean",c:["이십칠","스물일곱","이칠","이십일곱"],why:"이 (2) + 십 (10) + 칠 (7)."},
    {k:"mc",q:"34 in native Korean",c:["서른넷","삼십사","서른사","마흔넷"],why:"서른 (30) + 넷 (4)."},
    {k:"mc",q:"100, as you'd normally say it",c:["백","일백","십십","천"],why:"Leave off 일 before 백, 천 and 만."},
    {k:"mc",q:"15,000원",c:["만 오천 원","십오천 원","천오백 원","십오만 원"],why:"Korean groups by 만: 1 만 + 5 천."},
    {k:"mc",q:"Which system do you use for age (살)?",c:["Native Korean","Sino-Korean"],why:"Age with 살 takes native numbers: 스무 살."},
    {k:"mc",q:"Which system do you use for minutes (분)?",c:["Sino-Korean","Native Korean"],why:"Minutes are Sino: 삼십 분."},
    {k:"mc",q:"June",c:["유월","육월","여섯월","유얼"],why:"June is irregular: 유월."},
    {k:"mc",q:"October",c:["시월","십월","열월","시얼"],why:"October is irregular: 시월."},
    {k:"mc",q:"50 in native Korean",c:["쉰","오십","다섯십","쉬운"],why:"Each native ten has its own word. 50 is 쉰."},
    {k:"mc",q:"3rd floor",c:["삼 층","세 층","셋 층","삼 번"],why:"Floors use Sino numbers."},
    {k:"mc",q:"The phone digits 2580",c:["이오팔공","둘다섯여덟공","이천오백팔십","이십오팔십"],why:"Phone numbers are read digit by digit in Sino, and 0 is 공."},
    {k:"mc",q:"80,000",c:["팔만","팔십천","팔천","팔십만"],why:"8 × 만 = 팔만."}
  ],
  say:[
    {en:"It's three o'clock.", ko:"지금 [세] 시예요.", ban:"지금 [세] 시야.", hint:"o'clock takes native numbers"},
    {en:"It's the third floor.", ko:"[삼] 층이에요.", ban:"[삼] 층이야.", hint:"floors take Sino numbers"},
    {en:"It's bus number 50.", ko:"[오십] 번 버스예요.", ban:"[오십] 번 버스야.", hint:"numbered things take Sino numbers"},
    {en:"It's 15,000 won.", ko:"[만 오천] 원이에요.", ban:"[만 오천] 원이야.", hint:"big numbers are grouped around 만"},
    {en:"Today is November 21.", ko:"오늘은 [십일월 이십일 일]이에요.", ban:"오늘은 [십일월 이십일 일]이야.", hint:"Sino number + 월, then Sino number + 일"},
    {en:"I go to the library at ten o'clock.", ko:"[열] 시에 도서관에 가요.", ban:"[열] 시에 도서관에 가.", hint:"o'clock takes native numbers"},
    {en:"My phone number is 010-1234-5678.", ko:"제 전화번호는 [공일공에 일이삼사에 오육칠팔]이에요.", ban:"[c:내] 전화번호는 [공일공에 일이삼사에 오육칠팔]이야.", hint:"digit by digit; 0 is 공 and the dash is 에"},
    {en:"I eat dinner at six o'clock at the café on the second floor.", ko:"[이] 층 카페에서 [여섯] 시에 저녁을 먹어요.", ban:"[이] 층 카페에서 [여섯] 시에 저녁을 먹어.", hint:"floor = Sino, o'clock = native"}
  ],
  plan:[
    ["5","Warm-up","Count 1 to 10 together in both systems, then backward."],
    ["10","Teach","Slides 1 to 5. Make the \"which system?\" chart on paper and keep it out for the rest of the session."],
    ["8","Number Gym","Open Number Gym, Sino mode then Native mode. Race to a streak of 5."],
    ["5","Dates and phones","Slides 6 and 7. Say your birthdays and phone numbers to each other."],
    ["4","Check","Practice tab."],
    ["5","Say it","Say it tab, polite first. Say each number out loud before you reveal the answer, then try a few in 반말."]
  ],
  talk:[["생일이 언제예요?","When is your birthday?"],["전화번호가 뭐예요?","What is your phone number?"],["몇 층에 살아요?","Which floor do you live on?"]],
  after:"HTSK Lesson 10 (numbers) and Lesson 11 (time words, and which system goes with each)."
});
