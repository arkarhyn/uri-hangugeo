"use strict";
// Source links (HTSK) and the LESSONS array. Each lesson file after this one adds itself with LESSONS.push({...}).
const HT = "https://www.howtostudykorean.com";
const SRC = {
  L2:{n:"Lesson 2",t:"이/가 and 있다",u:HT+"/?page_id=281"},
  L5:{n:"Lesson 5",t:"Conjugation",u:HT+"/?page_id=289"},
  L6:{n:"Lesson 6",t:"Speech levels and honorifics",u:HT+"/?page_id=291"},
  L10:{n:"Lesson 10",t:"Korean numbers",u:HT+"/?page_id=693"},
  L11:{n:"Lesson 11",t:"Time words",u:HT+"/unit1/unit-1-lessons-9-16/lesson-11/"},
  L12:{n:"Lesson 12",t:"에서, 까지, (으)로",u:HT+"/?page_id=943"},
  L13:{n:"Lesson 13",t:"에게, 한테, 께",u:HT+"/?page_id=965"},
  L9:{n:"Lesson 9",t:"Future tense",u:HT+"/?page_id=502"},
  L17:{n:"Lesson 17",t:"~고 and ~고 싶다",u:HT+"/?page_id=1255"},
  L37:{n:"Lesson 37",t:"~아/어서",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-34-41/lesson-37/"},
  L40:{n:"Lesson 40",t:"~세요 requests",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-34-41/lesson-40/"},
  L41:{n:"Lesson 41",t:"주다 and -아/어 주다",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-34-41/lesson-41/"},
  L44:{n:"Lesson 44",t:"Suggestions",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-42-50/lesson-44/"},
  L47:{n:"Lesson 47",t:"~지만",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-42-50/lesson-47/"},
  L18:{n:"Lesson 18",t:"~고 있다",u:HT+"/?page_id=1261"},
  L46:{n:"Lesson 46",t:"~아/어야 하다",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-42-50/lesson-46/"},
  L49:{n:"Lesson 49",t:"~아/어도 되다",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-42-50/lesson-49/"},
  L39:{n:"Lesson 39",t:"-시- and honorific words",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-34-41/lesson-39/"},
  L7:{n:"Lesson 7",t:"Irregulars",u:HT+"/?page_id=294"},
  L19:{n:"Lesson 19",t:"더, 보다, 가장/제일",u:HT+"/?page_id=1357"},
  L43:{n:"Lesson 43",t:"~(으)면",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-42-50/lesson-43/"},
  L32:{n:"Lesson 32",t:"~(으)려고 and ~(으)러",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-26-33/lesson-32/"},
  L24:{n:"Lesson 24",t:"전 and 후",u:HT+"/unit1/unit-1-lessons-17-25-2/lesson-24/"},
  L26:{n:"Lesson 26",t:"Describing nouns with -는 것",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-26-33/lesson-26/"},
  L45:{n:"Lesson 45",t:"~(으)ㄹ 수 있다/없다",u:HT+"/unit-2-lower-intermediate-korean-grammar/unit-2-lessons-42-50/lesson-45/"},
  L76:{n:"Lesson 76",t:"~는데",u:HT+"/upper-intermediate-korean-grammar/unit-4-lessons-76-83/lesson-76/"},
  L81:{n:"Lesson 81",t:"~(으)니까",u:HT+"/upper-intermediate-korean-grammar/unit-4-lessons-76-83/lesson-81/"}
};

const LESSONS = [];
