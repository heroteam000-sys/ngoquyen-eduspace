const COURSE_TOPICS = [
  "Em và những người bạn của em · Me and my friends",
  "Em và trường học của em · Me and my school",
  "Em và gia đình em · Me and my family",
  "Em và thế giới quanh em · Me and the world around me"
];
const COURSE_LESSONS = [
  {
    "unit": 1,
    "title": "My friends",
    "vocab": [
      {
        "word": "America",
        "vi": "Mỹ",
        "art": "America"
      },
      {
        "word": "Australia",
        "vi": "Úc",
        "art": "Australia"
      },
      {
        "word": "Britain",
        "vi": "Anh",
        "art": "Britain"
      },
      {
        "word": "Japan",
        "vi": "Nhật Bản",
        "art": "Japan"
      },
      {
        "word": "Malaysia",
        "vi": "Ma-lai-xi-a",
        "art": "Malaysia"
      },
      {
        "word": "Singapore",
        "vi": "Xin-ga-po",
        "art": "Singapore"
      },
      {
        "word": "Thailand",
        "vi": "Thái Lan",
        "art": "Thailand"
      },
      {
        "word": "Viet Nam",
        "vi": "Việt Nam",
        "art": "Viet Nam"
      }
    ],
    "patterns": [
      {
        "q": "Where are you from?",
        "a": "I'm from Viet Nam.",
        "qvi": "Bạn đến từ đâu?",
        "avi": "Mình đến từ Việt Nam."
      },
      {
        "q": "Where's she from?",
        "a": "She's from Japan.",
        "qvi": "Bạn nữ ấy đến từ đâu?",
        "avi": "Bạn ấy đến từ Nhật Bản."
      }
    ],
    "vi": "Những người bạn của em",
    "topic": 1,
    "reading": "Hello! I'm Mai. I'm from Viet Nam.\nThis is my friend Yumi. She's from Japan.",
    "situation": "Em muốn hỏi bạn đến từ đâu.",
    "id": 1,
    "number": "1",
    "label": "Unit 1",
    "slug": "unit-1",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Những người bạn của em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "America"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where are you from?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “Mỹ”?",
        "options": [
          "America",
          "Australia",
          "Britain",
          "Japan"
        ],
        "answer": 0,
        "why": "“America” có nghĩa là Mỹ.",
        "level": 1
      },
      {
        "q": "“Australia” có nghĩa là gì?",
        "options": [
          "Mỹ",
          "Anh",
          "Nhật Bản",
          "Úc"
        ],
        "answer": 3,
        "why": "“Australia” nghĩa là Úc.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình đến từ Việt Nam.",
        "options": [
          "It's seven o'clock.",
          "I get up at six o'clock.",
          "I'm from Viet Nam.",
          "She's from Japan."
        ],
        "answer": 2,
        "why": "Mẫu câu: I'm from Viet Nam.",
        "level": 2
      },
      {
        "q": "Câu “Where are you from?” có nghĩa là gì?",
        "options": [
          "Bạn thức dậy lúc mấy giờ?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn đến từ đâu?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn nữ ấy đến từ đâu?",
        "options": [
          "Where's she from?",
          "Where are you from?",
          "What time is it?",
          "What time do you get up?"
        ],
        "answer": 0,
        "why": "Mẫu câu: Where's she from?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “Anh”.",
        "options": [
          "America",
          "Australia",
          "Japan",
          "Britain"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là Anh.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "from Viet Nam. I'm",
          "I'm Viet from Nam.",
          "I'm from Viet Nam.",
          "Nam. Viet from I'm"
        ],
        "answer": 2,
        "why": "Câu đúng là: I'm from Viet Nam.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn đến từ đâu. Em chọn câu nào?",
        "options": [
          "What time do you get up?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Where are you from? để hỏi bạn đến từ đâu.",
        "level": 3
      },
      {
        "q": "“She's from Japan.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Mình đến từ Việt Nam.",
          "Bây giờ là bảy giờ.",
          "Mình thức dậy lúc sáu giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bạn ấy đến từ Nhật Bản.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình đến từ Việt Nam.”: I'm from Viet ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "Nam"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: I'm from Viet Nam.",
        "level": 3
      }
    ]
  },
  {
    "unit": 2,
    "title": "Time and daily routines",
    "vocab": [
      {
        "word": "fifteen",
        "vi": "mười lăm",
        "art": "fifteen"
      },
      {
        "word": "forty-five",
        "vi": "bốn mươi lăm",
        "art": "forty-five"
      },
      {
        "word": "o'clock",
        "vi": "giờ đúng",
        "art": "o'clock"
      },
      {
        "word": "thirty",
        "vi": "ba mươi",
        "art": "thirty"
      },
      {
        "word": "get up",
        "vi": "thức dậy",
        "art": "getup"
      },
      {
        "word": "go to bed",
        "vi": "đi ngủ",
        "art": "bed"
      },
      {
        "word": "go to school",
        "vi": "đi học",
        "art": "school"
      },
      {
        "word": "have breakfast",
        "vi": "ăn sáng",
        "art": "breakfast"
      }
    ],
    "patterns": [
      {
        "q": "What time is it?",
        "a": "It's seven o'clock.",
        "qvi": "Mấy giờ rồi?",
        "avi": "Bây giờ là bảy giờ."
      },
      {
        "q": "What time do you get up?",
        "a": "I get up at six o'clock.",
        "qvi": "Bạn thức dậy lúc mấy giờ?",
        "avi": "Mình thức dậy lúc sáu giờ."
      }
    ],
    "vi": "Thời gian và thói quen hằng ngày",
    "topic": 1,
    "reading": "It's seven o'clock. I have breakfast.\nI get up at six o'clock. I go to school at seven fifteen.",
    "situation": "Em muốn hỏi giờ hiện tại.",
    "id": 2,
    "number": "2",
    "label": "Unit 2",
    "slug": "unit-2",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Thời gian và thói quen hằng ngày",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "fifteen"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What time is it?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “mười lăm”?",
        "options": [
          "o'clock",
          "thirty",
          "fifteen",
          "forty-five"
        ],
        "answer": 2,
        "why": "“fifteen” có nghĩa là mười lăm.",
        "level": 1
      },
      {
        "q": "“forty-five” có nghĩa là gì?",
        "options": [
          "ba mươi",
          "bốn mươi lăm",
          "mười lăm",
          "giờ đúng"
        ],
        "answer": 1,
        "why": "“forty-five” nghĩa là bốn mươi lăm.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bây giờ là bảy giờ.",
        "options": [
          "It's seven o'clock.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "I get up at six o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's seven o'clock.",
        "level": 2
      },
      {
        "q": "Câu “What time is it?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Bạn thức dậy lúc mấy giờ?",
          "Mấy giờ rồi?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Mấy giờ rồi?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn thức dậy lúc mấy giờ?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "What time do you get up?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What time do you get up?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “giờ đúng”.",
        "options": [
          "thirty",
          "o'clock",
          "fifteen",
          "forty-five"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là giờ đúng.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It's seven o'clock.",
          "o'clock. seven It's",
          "seven o'clock. It's",
          "It's o'clock. seven"
        ],
        "answer": 0,
        "why": "Câu đúng là: It's seven o'clock.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi giờ hiện tại. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time do you get up?",
          "What time is it?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu What time is it? để hỏi giờ hiện tại.",
        "level": 3
      },
      {
        "q": "“I get up at six o'clock.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Mình thức dậy lúc sáu giờ.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình thức dậy lúc sáu giờ.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Bây giờ là bảy giờ.”: It's seven ____.",
        "options": [
          "rainy",
          "o'clock",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It's seven o'clock.",
        "level": 3
      }
    ]
  },
  {
    "unit": 3,
    "title": "My week",
    "vocab": [
      {
        "word": "Monday",
        "vi": "thứ Hai",
        "art": "Monday"
      },
      {
        "word": "Tuesday",
        "vi": "thứ Ba",
        "art": "Tuesday"
      },
      {
        "word": "Wednesday",
        "vi": "thứ Tư",
        "art": "Wednesday"
      },
      {
        "word": "Thursday",
        "vi": "thứ Năm",
        "art": "Thursday"
      },
      {
        "word": "Friday",
        "vi": "thứ Sáu",
        "art": "Friday"
      },
      {
        "word": "Saturday",
        "vi": "thứ Bảy",
        "art": "Saturday"
      },
      {
        "word": "Sunday",
        "vi": "Chủ nhật",
        "art": "Sunday"
      },
      {
        "word": "do housework",
        "vi": "làm việc nhà",
        "art": "do housework"
      },
      {
        "word": "listen to music",
        "vi": "nghe nhạc",
        "art": "listening"
      },
      {
        "word": "study at school",
        "vi": "học ở trường",
        "art": "study at school"
      }
    ],
    "patterns": [
      {
        "q": "What day is it today?",
        "a": "It's Monday.",
        "qvi": "Hôm nay là thứ mấy?",
        "avi": "Hôm nay là thứ Hai."
      },
      {
        "q": "What do you do on Sundays?",
        "a": "I do housework.",
        "qvi": "Bạn làm gì vào các ngày Chủ nhật?",
        "avi": "Mình làm việc nhà."
      }
    ],
    "vi": "Tuần của em",
    "topic": 1,
    "reading": "It's Monday. I study at school.\nOn Sundays, I do housework and listen to music.",
    "situation": "Em muốn hỏi hôm nay là thứ mấy.",
    "id": 3,
    "number": "3",
    "label": "Unit 3",
    "slug": "unit-3",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Tuần của em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "Monday"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What day is it today?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “thứ Hai”?",
        "options": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "answer": 0,
        "why": "“Monday” có nghĩa là thứ Hai.",
        "level": 1
      },
      {
        "q": "“Tuesday” có nghĩa là gì?",
        "options": [
          "thứ Hai",
          "thứ Tư",
          "thứ Năm",
          "thứ Ba"
        ],
        "answer": 3,
        "why": "“Tuesday” nghĩa là thứ Ba.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Hôm nay là thứ Hai.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "It's Monday.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: It's Monday.",
        "level": 2
      },
      {
        "q": "Câu “What day is it today?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Hôm nay là thứ mấy?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Hôm nay là thứ mấy?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn làm gì vào các ngày Chủ nhật?",
        "options": [
          "What do you do on Sundays?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What do you do on Sundays?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “thứ Tư”.",
        "options": [
          "Monday",
          "Tuesday",
          "Thursday",
          "Wednesday"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là thứ Tư.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Is It's Monday.",
          "Are It's Monday.",
          "It's Monday.",
          "Monday. It's"
        ],
        "answer": 2,
        "why": "Câu đúng là: It's Monday.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi hôm nay là thứ mấy. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "What day is it today?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What day is it today? để hỏi hôm nay là thứ mấy.",
        "level": 3
      },
      {
        "q": "“I do housework.” có nghĩa là gì?",
        "options": [
          "Mình làm việc nhà.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Mình làm việc nhà.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Hôm nay là thứ Hai.”: It's ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "Monday"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: It's Monday.",
        "level": 3
      }
    ]
  },
  {
    "unit": 4,
    "title": "My birthday party",
    "vocab": [
      {
        "word": "January",
        "vi": "tháng Một",
        "art": "January"
      },
      {
        "word": "February",
        "vi": "tháng Hai",
        "art": "February"
      },
      {
        "word": "March",
        "vi": "tháng Ba",
        "art": "March"
      },
      {
        "word": "April",
        "vi": "tháng Tư",
        "art": "April"
      },
      {
        "word": "May",
        "vi": "tháng Năm",
        "art": "May"
      },
      {
        "word": "birthday",
        "vi": "sinh nhật",
        "art": "birthday"
      },
      {
        "word": "chips",
        "vi": "khoai tây chiên",
        "art": "chips"
      },
      {
        "word": "grapes",
        "vi": "nho",
        "art": "grapes"
      },
      {
        "word": "jam",
        "vi": "mứt",
        "art": "jam"
      },
      {
        "word": "juice",
        "vi": "nước ép",
        "art": "juice"
      },
      {
        "word": "lemonade",
        "vi": "nước chanh",
        "art": "lemonade"
      },
      {
        "word": "party",
        "vi": "bữa tiệc",
        "art": "party"
      },
      {
        "word": "water",
        "vi": "nước",
        "art": "water"
      }
    ],
    "patterns": [
      {
        "q": "When's your birthday?",
        "a": "It's in May.",
        "qvi": "Sinh nhật của bạn vào khi nào?",
        "avi": "Vào tháng Năm."
      },
      {
        "q": "What do you want to drink?",
        "a": "I want some lemonade.",
        "qvi": "Bạn muốn uống gì?",
        "avi": "Mình muốn một ít nước chanh."
      }
    ],
    "vi": "Bữa tiệc sinh nhật của em",
    "topic": 1,
    "reading": "My birthday is in May. I have a birthday party.\nI want some grapes and some lemonade.",
    "situation": "Em muốn hỏi tháng sinh nhật của bạn.",
    "id": 4,
    "number": "4",
    "label": "Unit 4",
    "slug": "unit-4",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Bữa tiệc sinh nhật của em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "January"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "When's your birthday?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “tháng Một”?",
        "options": [
          "March",
          "April",
          "January",
          "February"
        ],
        "answer": 2,
        "why": "“January” có nghĩa là tháng Một.",
        "level": 1
      },
      {
        "q": "“February” có nghĩa là gì?",
        "options": [
          "tháng Tư",
          "tháng Hai",
          "tháng Một",
          "tháng Ba"
        ],
        "answer": 1,
        "why": "“February” nghĩa là tháng Hai.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Vào tháng Năm.",
        "options": [
          "It's in May.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's in May.",
        "level": 2
      },
      {
        "q": "Câu “When's your birthday?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Sinh nhật của bạn vào khi nào?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Sinh nhật của bạn vào khi nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn muốn uống gì?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "What do you want to drink?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What do you want to drink?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “tháng Ba”.",
        "options": [
          "April",
          "March",
          "January",
          "February"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là tháng Ba.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It's in May.",
          "May. in It's",
          "in May. It's",
          "It's May. in"
        ],
        "answer": 0,
        "why": "Câu đúng là: It's in May.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi tháng sinh nhật của bạn. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "When's your birthday?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu When's your birthday? để hỏi tháng sinh nhật của bạn.",
        "level": 3
      },
      {
        "q": "“I want some lemonade.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Mình muốn một ít nước chanh.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình muốn một ít nước chanh.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Vào tháng Năm.”: It's in ____.",
        "options": [
          "rainy",
          "May",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It's in May.",
        "level": 3
      }
    ]
  },
  {
    "unit": 5,
    "title": "Things we can do",
    "vocab": [
      {
        "word": "cook",
        "vi": "nấu ăn",
        "art": "cooking"
      },
      {
        "word": "draw",
        "vi": "vẽ",
        "art": "drawing"
      },
      {
        "word": "play the guitar",
        "vi": "chơi đàn ghi-ta",
        "art": "play the guitar"
      },
      {
        "word": "play the piano",
        "vi": "chơi đàn pi-a-nô",
        "art": "play the piano"
      },
      {
        "word": "ride a bike",
        "vi": "đi xe đạp",
        "art": "cycling"
      },
      {
        "word": "ride a horse",
        "vi": "cưỡi ngựa",
        "art": "horse"
      },
      {
        "word": "roller skate",
        "vi": "trượt pa-tanh",
        "art": "skating"
      },
      {
        "word": "swim",
        "vi": "bơi",
        "art": "swimming"
      }
    ],
    "patterns": [
      {
        "q": "Can you swim?",
        "a": "Yes, I can.",
        "qvi": "Bạn có thể bơi không?",
        "avi": "Có, mình có thể."
      },
      {
        "q": "Can she play the guitar?",
        "a": "No, she can't, but she can play the piano.",
        "qvi": "Bạn nữ ấy có thể chơi đàn ghi-ta không?",
        "avi": "Không, bạn ấy không thể, nhưng bạn ấy có thể chơi đàn pi-a-nô."
      }
    ],
    "vi": "Những việc chúng em có thể làm",
    "topic": 1,
    "reading": "I can swim. My friend can ride a bike.\nShe can't play the guitar, but she can play the piano.",
    "situation": "Em muốn hỏi bạn có thể bơi không.",
    "id": 5,
    "number": "5",
    "label": "Unit 5",
    "slug": "unit-5",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Những việc chúng em có thể làm",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "cook"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Can you swim?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “nấu ăn”?",
        "options": [
          "cook",
          "draw",
          "play the guitar",
          "play the piano"
        ],
        "answer": 0,
        "why": "“cook” có nghĩa là nấu ăn.",
        "level": 1
      },
      {
        "q": "“draw” có nghĩa là gì?",
        "options": [
          "nấu ăn",
          "chơi đàn ghi-ta",
          "chơi đàn pi-a-nô",
          "vẽ"
        ],
        "answer": 3,
        "why": "“draw” nghĩa là vẽ.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Có, mình có thể.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "Yes, I can.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: Yes, I can.",
        "level": 2
      },
      {
        "q": "Câu “Can you swim?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Bạn có thể bơi không?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn có thể bơi không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn nữ ấy có thể chơi đàn ghi-ta không?",
        "options": [
          "Can she play the guitar?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: Can she play the guitar?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “chơi đàn ghi-ta”.",
        "options": [
          "cook",
          "draw",
          "play the piano",
          "play the guitar"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là chơi đàn ghi-ta.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "I can. Yes,",
          "Yes, can. I",
          "Yes, I can.",
          "can. I Yes,"
        ],
        "answer": 2,
        "why": "Câu đúng là: Yes, I can.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn có thể bơi không. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "Can you swim?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Can you swim? để hỏi bạn có thể bơi không.",
        "level": 3
      },
      {
        "q": "“No, she can't, but she can play the piano.” có nghĩa là gì?",
        "options": [
          "Không, bạn ấy không thể, nhưng bạn ấy có thể chơi đàn pi-a-nô.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Không, bạn ấy không thể, nhưng bạn ấy có thể chơi đàn pi-a-nô.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Có, mình có thể.”: Yes, I ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "can"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: Yes, I can.",
        "level": 3
      }
    ]
  },
  {
    "id": 6,
    "unit": 0,
    "number": "R1",
    "label": "Review 1 & Extension activities",
    "title": "Review 1 & Extension activities",
    "vi": "Ôn tập Unit 1–5",
    "lead": "Ôn tập Unit 1–5",
    "slug": "review-1",
    "kind": "review",
    "topic": 1,
    "optional": false,
    "branch": "",
    "vocab": [
      {
        "word": "America",
        "vi": "Mỹ",
        "art": "America"
      },
      {
        "word": "fifteen",
        "vi": "mười lăm",
        "art": "fifteen"
      },
      {
        "word": "Monday",
        "vi": "thứ Hai",
        "art": "Monday"
      },
      {
        "word": "January",
        "vi": "tháng Một",
        "art": "January"
      },
      {
        "word": "cook",
        "vi": "nấu ăn",
        "art": "cooking"
      },
      {
        "word": "Australia",
        "vi": "Úc",
        "art": "Australia"
      },
      {
        "word": "forty-five",
        "vi": "bốn mươi lăm",
        "art": "forty-five"
      },
      {
        "word": "Tuesday",
        "vi": "thứ Ba",
        "art": "Tuesday"
      },
      {
        "word": "February",
        "vi": "tháng Hai",
        "art": "February"
      },
      {
        "word": "draw",
        "vi": "vẽ",
        "art": "drawing"
      },
      {
        "word": "Britain",
        "vi": "Anh",
        "art": "Britain"
      },
      {
        "word": "o'clock",
        "vi": "giờ đúng",
        "art": "o'clock"
      },
      {
        "word": "Wednesday",
        "vi": "thứ Tư",
        "art": "Wednesday"
      },
      {
        "word": "March",
        "vi": "tháng Ba",
        "art": "March"
      },
      {
        "word": "play the guitar",
        "vi": "chơi đàn ghi-ta",
        "art": "play the guitar"
      }
    ],
    "patterns": [
      {
        "q": "Where are you from?",
        "a": "I'm from Viet Nam.",
        "qvi": "Bạn đến từ đâu?",
        "avi": "Mình đến từ Việt Nam."
      },
      {
        "q": "What day is it today?",
        "a": "It's Monday.",
        "qvi": "Hôm nay là thứ mấy?",
        "avi": "Hôm nay là thứ Hai."
      }
    ],
    "reading": "I'm from Viet Nam.\nIt's seven o'clock.\nIt's Monday.\nIt's in May.\nYes, I can.",
    "situation": "Ôn tập và mở rộng.",
    "goals": [
      "Ôn từ vựng và mẫu câu năm Unit",
      "Luyện nghe và đọc trong ngữ cảnh",
      "Giao tiếp cùng bạn"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "America"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where are you from?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Chơi ít nhất ba dạng bài rồi làm thử thách 12 câu; luyện hỏi đáp cùng bạn.",
    "real": "Bài tập bổ trợ do ứng dụng biên soạn, không chép nguyên bài tập SGK.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “Mỹ”?",
        "options": [
          "America",
          "Australia",
          "Britain",
          "Japan"
        ],
        "answer": 0,
        "why": "“America” có nghĩa là Mỹ.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình đến từ Việt Nam.",
        "options": [
          "It's seven o'clock.",
          "I get up at six o'clock.",
          "I'm from Viet Nam.",
          "She's from Japan."
        ],
        "answer": 2,
        "why": "Mẫu câu: I'm from Viet Nam.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “mười lăm”?",
        "options": [
          "o'clock",
          "thirty",
          "fifteen",
          "forty-five"
        ],
        "answer": 2,
        "why": "“fifteen” có nghĩa là mười lăm.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bây giờ là bảy giờ.",
        "options": [
          "It's seven o'clock.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "I get up at six o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's seven o'clock.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “thứ Hai”?",
        "options": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "answer": 0,
        "why": "“Monday” có nghĩa là thứ Hai.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Hôm nay là thứ Hai.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "It's Monday.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: It's Monday.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “tháng Một”?",
        "options": [
          "March",
          "April",
          "January",
          "February"
        ],
        "answer": 2,
        "why": "“January” có nghĩa là tháng Một.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Vào tháng Năm.",
        "options": [
          "It's in May.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's in May.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “nấu ăn”?",
        "options": [
          "cook",
          "draw",
          "play the guitar",
          "play the piano"
        ],
        "answer": 0,
        "why": "“cook” có nghĩa là nấu ăn.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Có, mình có thể.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "Yes, I can.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: Yes, I can.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn thức dậy lúc mấy giờ?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "What time do you get up?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What time do you get up?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi bạn có thể bơi không. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "Can you swim?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Can you swim? để hỏi bạn có thể bơi không.",
        "level": 3
      }
    ]
  },
  {
    "unit": 6,
    "title": "Our school facilities",
    "vocab": [
      {
        "word": "city",
        "vi": "thành phố",
        "art": "city"
      },
      {
        "word": "mountains",
        "vi": "vùng núi",
        "art": "mountains"
      },
      {
        "word": "town",
        "vi": "thị trấn",
        "art": "town"
      },
      {
        "word": "village",
        "vi": "làng",
        "art": "village"
      },
      {
        "word": "building",
        "vi": "tòa nhà",
        "art": "building"
      },
      {
        "word": "computer room",
        "vi": "phòng máy tính",
        "art": "computerroom"
      },
      {
        "word": "garden",
        "vi": "khu vườn",
        "art": "garden"
      },
      {
        "word": "playground",
        "vi": "sân chơi",
        "art": "playground"
      }
    ],
    "patterns": [
      {
        "q": "Where's your school?",
        "a": "It's in the village.",
        "qvi": "Trường của bạn ở đâu?",
        "avi": "Trường ở trong làng."
      },
      {
        "q": "How many computer rooms are there at your school?",
        "a": "There are two.",
        "qvi": "Có bao nhiêu phòng máy tính ở trường bạn?",
        "avi": "Có hai phòng."
      }
    ],
    "vi": "Cơ sở vật chất của trường em",
    "topic": 2,
    "reading": "My school is in the village. There is a garden.\nThere are two computer rooms and a playground.",
    "situation": "Em muốn hỏi vị trí trường của bạn.",
    "id": 7,
    "number": "6",
    "label": "Unit 6",
    "slug": "unit-6",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Cơ sở vật chất của trường em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "city"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where's your school?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “thành phố”?",
        "options": [
          "town",
          "village",
          "city",
          "mountains"
        ],
        "answer": 2,
        "why": "“city” có nghĩa là thành phố.",
        "level": 1
      },
      {
        "q": "“mountains” có nghĩa là gì?",
        "options": [
          "làng",
          "vùng núi",
          "thành phố",
          "thị trấn"
        ],
        "answer": 1,
        "why": "“mountains” nghĩa là vùng núi.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Trường ở trong làng.",
        "options": [
          "It's in the village.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's in the village.",
        "level": 2
      },
      {
        "q": "Câu “Where's your school?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Trường của bạn ở đâu?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Trường của bạn ở đâu?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Có bao nhiêu phòng máy tính ở trường bạn?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "How many computer rooms are there at your school?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: How many computer rooms are there at your school?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “thị trấn”.",
        "options": [
          "village",
          "town",
          "city",
          "mountains"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là thị trấn.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It's in the village.",
          "village. the in It's",
          "in the village. It's",
          "It's the in village."
        ],
        "answer": 0,
        "why": "Câu đúng là: It's in the village.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi vị trí trường của bạn. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "Where's your school?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Where's your school? để hỏi vị trí trường của bạn.",
        "level": 3
      },
      {
        "q": "“There are two.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Có hai phòng.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Có hai phòng.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Trường ở trong làng.”: It's in the ____.",
        "options": [
          "rainy",
          "village",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It's in the village.",
        "level": 3
      }
    ]
  },
  {
    "unit": 7,
    "title": "Our timetables",
    "vocab": [
      {
        "word": "art",
        "vi": "mĩ thuật",
        "art": "art"
      },
      {
        "word": "English",
        "vi": "tiếng Anh",
        "art": "English"
      },
      {
        "word": "history and geography",
        "vi": "lịch sử và địa lí",
        "art": "history and geography"
      },
      {
        "word": "maths",
        "vi": "toán",
        "art": "maths"
      },
      {
        "word": "music",
        "vi": "âm nhạc",
        "art": "music"
      },
      {
        "word": "science",
        "vi": "khoa học",
        "art": "science"
      },
      {
        "word": "Vietnamese",
        "vi": "tiếng Việt",
        "art": "Vietnamese"
      }
    ],
    "patterns": [
      {
        "q": "What subjects do you have today?",
        "a": "I have English and maths.",
        "qvi": "Hôm nay bạn có những môn học nào?",
        "avi": "Mình có tiếng Anh và toán."
      },
      {
        "q": "When do you have science?",
        "a": "I have it on Tuesdays.",
        "qvi": "Bạn có môn khoa học khi nào?",
        "avi": "Mình có môn đó vào các ngày thứ Ba."
      }
    ],
    "vi": "Thời khóa biểu của chúng em",
    "topic": 2,
    "reading": "I have English and maths today.\nI have science on Tuesdays. I like art and music, too.",
    "situation": "Em muốn hỏi những môn học bạn có hôm nay.",
    "id": 8,
    "number": "7",
    "label": "Unit 7",
    "slug": "unit-7",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Thời khóa biểu của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "art"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What subjects do you have today?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “mĩ thuật”?",
        "options": [
          "art",
          "English",
          "history and geography",
          "maths"
        ],
        "answer": 0,
        "why": "“art” có nghĩa là mĩ thuật.",
        "level": 1
      },
      {
        "q": "“English” có nghĩa là gì?",
        "options": [
          "mĩ thuật",
          "lịch sử và địa lí",
          "toán",
          "tiếng Anh"
        ],
        "answer": 3,
        "why": "“English” nghĩa là tiếng Anh.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình có tiếng Anh và toán.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "I have English and maths.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: I have English and maths.",
        "level": 2
      },
      {
        "q": "Câu “What subjects do you have today?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Hôm nay bạn có những môn học nào?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Hôm nay bạn có những môn học nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn có môn khoa học khi nào?",
        "options": [
          "When do you have science?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: When do you have science?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “lịch sử và địa lí”.",
        "options": [
          "art",
          "English",
          "maths",
          "history and geography"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là lịch sử và địa lí.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "have English and maths. I",
          "I English maths. have and",
          "I have English and maths.",
          "maths. and English have I"
        ],
        "answer": 2,
        "why": "Câu đúng là: I have English and maths.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi những môn học bạn có hôm nay. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "What subjects do you have today?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What subjects do you have today? để hỏi những môn học bạn có hôm nay.",
        "level": 3
      },
      {
        "q": "“I have it on Tuesdays.” có nghĩa là gì?",
        "options": [
          "Mình có môn đó vào các ngày thứ Ba.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Mình có môn đó vào các ngày thứ Ba.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình có tiếng Anh và toán.”: I have English and ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "maths"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: I have English and maths.",
        "level": 3
      }
    ]
  },
  {
    "unit": 8,
    "title": "My favourite subjects",
    "vocab": [
      {
        "word": "IT",
        "vi": "tin học",
        "art": "IT"
      },
      {
        "word": "PE",
        "vi": "giáo dục thể chất",
        "art": "PE"
      },
      {
        "word": "English teacher",
        "vi": "giáo viên tiếng Anh",
        "art": "English teacher"
      },
      {
        "word": "painter",
        "vi": "họa sĩ",
        "art": "painter"
      },
      {
        "word": "maths teacher",
        "vi": "giáo viên toán",
        "art": "maths teacher"
      }
    ],
    "patterns": [
      {
        "q": "What's your favourite subject?",
        "a": "It's English.",
        "qvi": "Môn học yêu thích của bạn là gì?",
        "avi": "Đó là tiếng Anh."
      },
      {
        "q": "Why do you like English?",
        "a": "Because I want to be an English teacher.",
        "qvi": "Tại sao bạn thích tiếng Anh?",
        "avi": "Bởi vì mình muốn trở thành giáo viên tiếng Anh."
      }
    ],
    "vi": "Các môn học yêu thích của em",
    "topic": 2,
    "reading": "My favourite subject is English.\nI like English because I want to be an English teacher. My friend likes PE.",
    "situation": "Em muốn hỏi môn học yêu thích.",
    "id": 9,
    "number": "8",
    "label": "Unit 8",
    "slug": "unit-8",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Các môn học yêu thích của em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "IT"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What's your favourite subject?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “tin học”?",
        "options": [
          "English teacher",
          "painter",
          "IT",
          "PE"
        ],
        "answer": 2,
        "why": "“IT” có nghĩa là tin học.",
        "level": 1
      },
      {
        "q": "“PE” có nghĩa là gì?",
        "options": [
          "họa sĩ",
          "giáo dục thể chất",
          "tin học",
          "giáo viên tiếng Anh"
        ],
        "answer": 1,
        "why": "“PE” nghĩa là giáo dục thể chất.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đó là tiếng Anh.",
        "options": [
          "It's English.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's English.",
        "level": 2
      },
      {
        "q": "Câu “What's your favourite subject?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Môn học yêu thích của bạn là gì?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Môn học yêu thích của bạn là gì?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Tại sao bạn thích tiếng Anh?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "Why do you like English?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Why do you like English?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “giáo viên tiếng Anh”.",
        "options": [
          "painter",
          "English teacher",
          "IT",
          "PE"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là giáo viên tiếng Anh.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It's English.",
          "English. It's",
          "Is It's English.",
          "Are It's English."
        ],
        "answer": 0,
        "why": "Câu đúng là: It's English.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi môn học yêu thích. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "What's your favourite subject?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu What's your favourite subject? để hỏi môn học yêu thích.",
        "level": 3
      },
      {
        "q": "“Because I want to be an English teacher.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Bởi vì mình muốn trở thành giáo viên tiếng Anh.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Bởi vì mình muốn trở thành giáo viên tiếng Anh.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Đó là tiếng Anh.”: It's ____.",
        "options": [
          "rainy",
          "English",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It's English.",
        "level": 3
      }
    ]
  },
  {
    "unit": 9,
    "title": "Our sports day",
    "vocab": [
      {
        "word": "June",
        "vi": "tháng Sáu",
        "art": "June"
      },
      {
        "word": "July",
        "vi": "tháng Bảy",
        "art": "July"
      },
      {
        "word": "September",
        "vi": "tháng Chín",
        "art": "September"
      },
      {
        "word": "October",
        "vi": "tháng Mười",
        "art": "October"
      },
      {
        "word": "November",
        "vi": "tháng Mười một",
        "art": "November"
      },
      {
        "word": "December",
        "vi": "tháng Mười hai",
        "art": "December"
      },
      {
        "word": "sports day",
        "vi": "ngày hội thể thao",
        "art": "sports day"
      }
    ],
    "patterns": [
      {
        "q": "Is your sports day in June?",
        "a": "No, it isn't. It's in November.",
        "qvi": "Ngày hội thể thao của bạn vào tháng Sáu phải không?",
        "avi": "Không. Nó vào tháng Mười một."
      },
      {
        "q": "When's your sports day?",
        "a": "It's in November.",
        "qvi": "Ngày hội thể thao của bạn vào khi nào?",
        "avi": "Vào tháng Mười một."
      }
    ],
    "vi": "Ngày hội thể thao của chúng em",
    "topic": 2,
    "reading": "Our sports day is in November.\nIt isn't in June. We like our sports day.",
    "situation": "Em muốn xác nhận ngày hội thể thao có vào tháng Sáu không.",
    "id": 10,
    "number": "9",
    "label": "Unit 9",
    "slug": "unit-9",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Ngày hội thể thao của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "June"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Is your sports day in June?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “tháng Sáu”?",
        "options": [
          "June",
          "July",
          "September",
          "October"
        ],
        "answer": 0,
        "why": "“June” có nghĩa là tháng Sáu.",
        "level": 1
      },
      {
        "q": "“July” có nghĩa là gì?",
        "options": [
          "tháng Sáu",
          "tháng Chín",
          "tháng Mười",
          "tháng Bảy"
        ],
        "answer": 3,
        "why": "“July” nghĩa là tháng Bảy.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Không. Nó vào tháng Mười một.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "No, it isn't. It's in November.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: No, it isn't. It's in November.",
        "level": 2
      },
      {
        "q": "Câu “Is your sports day in June?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Ngày hội thể thao của bạn vào tháng Sáu phải không?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Ngày hội thể thao của bạn vào tháng Sáu phải không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Ngày hội thể thao của bạn vào khi nào?",
        "options": [
          "When's your sports day?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: When's your sports day?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “tháng Chín”.",
        "options": [
          "June",
          "July",
          "October",
          "September"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là tháng Chín.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "it isn't. It's in November. No,",
          "No, isn't. in it It's November.",
          "No, it isn't. It's in November.",
          "November. in It's isn't. it No,"
        ],
        "answer": 2,
        "why": "Câu đúng là: No, it isn't. It's in November.",
        "level": 3
      },
      {
        "q": "Em muốn xác nhận ngày hội thể thao có vào tháng Sáu không. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "Is your sports day in June?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Is your sports day in June? để xác nhận ngày hội thể thao có vào tháng Sáu không.",
        "level": 3
      },
      {
        "q": "“It's in November.” có nghĩa là gì?",
        "options": [
          "Vào tháng Mười một.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Vào tháng Mười một.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Không. Nó vào tháng Mười một.”: No, it isn't. It's in ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "November"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: No, it isn't. It's in November.",
        "level": 3
      }
    ]
  },
  {
    "unit": 10,
    "title": "Our summer holidays",
    "vocab": [
      {
        "word": "beach",
        "vi": "bãi biển",
        "art": "beach"
      },
      {
        "word": "campsite",
        "vi": "khu cắm trại",
        "art": "campsite"
      },
      {
        "word": "countryside",
        "vi": "nông thôn",
        "art": "countryside"
      },
      {
        "word": "Bangkok",
        "vi": "Băng Cốc",
        "art": "Bangkok"
      },
      {
        "word": "London",
        "vi": "Luân Đôn",
        "art": "London"
      },
      {
        "word": "Sydney",
        "vi": "Xít-ni",
        "art": "Sydney"
      },
      {
        "word": "Tokyo",
        "vi": "Tô-ki-ô",
        "art": "Tokyo"
      },
      {
        "word": "last",
        "vi": "trước, vừa qua",
        "art": "last"
      },
      {
        "word": "yesterday",
        "vi": "hôm qua",
        "art": "yesterday"
      }
    ],
    "patterns": [
      {
        "q": "Were you at the beach last weekend?",
        "a": "Yes, I was.",
        "qvi": "Bạn đã ở bãi biển cuối tuần trước phải không?",
        "avi": "Đúng, mình đã ở đó."
      },
      {
        "q": "Where were you last summer?",
        "a": "I was in Sydney.",
        "qvi": "Bạn đã ở đâu vào mùa hè năm ngoái?",
        "avi": "Mình đã ở Xít-ni."
      }
    ],
    "vi": "Kì nghỉ hè của chúng em",
    "topic": 2,
    "reading": "I was at the beach last weekend.\nLast summer, I was in Sydney. My friend was in Tokyo.",
    "situation": "Em muốn hỏi bạn có ở bãi biển cuối tuần trước không.",
    "id": 11,
    "number": "10",
    "label": "Unit 10",
    "slug": "unit-10",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Kì nghỉ hè của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "beach"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Were you at the beach last weekend?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “bãi biển”?",
        "options": [
          "countryside",
          "Bangkok",
          "beach",
          "campsite"
        ],
        "answer": 2,
        "why": "“beach” có nghĩa là bãi biển.",
        "level": 1
      },
      {
        "q": "“campsite” có nghĩa là gì?",
        "options": [
          "Băng Cốc",
          "khu cắm trại",
          "bãi biển",
          "nông thôn"
        ],
        "answer": 1,
        "why": "“campsite” nghĩa là khu cắm trại.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, mình đã ở đó.",
        "options": [
          "Yes, I was.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, I was.",
        "level": 2
      },
      {
        "q": "Câu “Were you at the beach last weekend?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Bạn đã ở bãi biển cuối tuần trước phải không?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn đã ở bãi biển cuối tuần trước phải không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn đã ở đâu vào mùa hè năm ngoái?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "Where were you last summer?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Where were you last summer?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “nông thôn”.",
        "options": [
          "Bangkok",
          "countryside",
          "beach",
          "campsite"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là nông thôn.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Yes, I was.",
          "was. I Yes,",
          "I was. Yes,",
          "Yes, was. I"
        ],
        "answer": 0,
        "why": "Câu đúng là: Yes, I was.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn có ở bãi biển cuối tuần trước không. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "Were you at the beach last weekend?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Were you at the beach last weekend? để hỏi bạn có ở bãi biển cuối tuần trước không.",
        "level": 3
      },
      {
        "q": "“I was in Sydney.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Mình đã ở Xít-ni.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình đã ở Xít-ni.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Đúng, mình đã ở đó.”: Yes, I ____.",
        "options": [
          "rainy",
          "was",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: Yes, I was.",
        "level": 3
      }
    ]
  },
  {
    "id": 12,
    "unit": 0,
    "number": "R2",
    "label": "Review 2 & Extension activities",
    "title": "Review 2 & Extension activities",
    "vi": "Ôn tập Unit 6–10",
    "lead": "Ôn tập Unit 6–10",
    "slug": "review-2",
    "kind": "review",
    "topic": 2,
    "optional": false,
    "branch": "",
    "vocab": [
      {
        "word": "city",
        "vi": "thành phố",
        "art": "city"
      },
      {
        "word": "art",
        "vi": "mĩ thuật",
        "art": "art"
      },
      {
        "word": "IT",
        "vi": "tin học",
        "art": "IT"
      },
      {
        "word": "June",
        "vi": "tháng Sáu",
        "art": "June"
      },
      {
        "word": "beach",
        "vi": "bãi biển",
        "art": "beach"
      },
      {
        "word": "mountains",
        "vi": "vùng núi",
        "art": "mountains"
      },
      {
        "word": "English",
        "vi": "tiếng Anh",
        "art": "English"
      },
      {
        "word": "PE",
        "vi": "giáo dục thể chất",
        "art": "PE"
      },
      {
        "word": "July",
        "vi": "tháng Bảy",
        "art": "July"
      },
      {
        "word": "campsite",
        "vi": "khu cắm trại",
        "art": "campsite"
      },
      {
        "word": "town",
        "vi": "thị trấn",
        "art": "town"
      },
      {
        "word": "history and geography",
        "vi": "lịch sử và địa lí",
        "art": "history and geography"
      },
      {
        "word": "English teacher",
        "vi": "giáo viên tiếng Anh",
        "art": "English teacher"
      },
      {
        "word": "September",
        "vi": "tháng Chín",
        "art": "September"
      },
      {
        "word": "countryside",
        "vi": "nông thôn",
        "art": "countryside"
      }
    ],
    "patterns": [
      {
        "q": "Where's your school?",
        "a": "It's in the village.",
        "qvi": "Trường của bạn ở đâu?",
        "avi": "Trường ở trong làng."
      },
      {
        "q": "What's your favourite subject?",
        "a": "It's English.",
        "qvi": "Môn học yêu thích của bạn là gì?",
        "avi": "Đó là tiếng Anh."
      }
    ],
    "reading": "It's in the village.\nI have English and maths.\nIt's English.\nNo, it isn't. It's in November.\nYes, I was.",
    "situation": "Ôn tập và mở rộng.",
    "goals": [
      "Ôn từ vựng và mẫu câu năm Unit",
      "Luyện nghe và đọc trong ngữ cảnh",
      "Giao tiếp cùng bạn"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "city"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where's your school?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Chơi ít nhất ba dạng bài rồi làm thử thách 12 câu; luyện hỏi đáp cùng bạn.",
    "real": "Bài tập bổ trợ do ứng dụng biên soạn, không chép nguyên bài tập SGK.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “thành phố”?",
        "options": [
          "town",
          "village",
          "city",
          "mountains"
        ],
        "answer": 2,
        "why": "“city” có nghĩa là thành phố.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Trường ở trong làng.",
        "options": [
          "It's in the village.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's in the village.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “mĩ thuật”?",
        "options": [
          "art",
          "English",
          "history and geography",
          "maths"
        ],
        "answer": 0,
        "why": "“art” có nghĩa là mĩ thuật.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình có tiếng Anh và toán.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "I have English and maths.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: I have English and maths.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “tin học”?",
        "options": [
          "English teacher",
          "painter",
          "IT",
          "PE"
        ],
        "answer": 2,
        "why": "“IT” có nghĩa là tin học.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đó là tiếng Anh.",
        "options": [
          "It's English.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's English.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “tháng Sáu”?",
        "options": [
          "June",
          "July",
          "September",
          "October"
        ],
        "answer": 0,
        "why": "“June” có nghĩa là tháng Sáu.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Không. Nó vào tháng Mười một.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "No, it isn't. It's in November.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: No, it isn't. It's in November.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “bãi biển”?",
        "options": [
          "countryside",
          "Bangkok",
          "beach",
          "campsite"
        ],
        "answer": 2,
        "why": "“beach” có nghĩa là bãi biển.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, mình đã ở đó.",
        "options": [
          "Yes, I was.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, I was.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn có môn khoa học khi nào?",
        "options": [
          "When do you have science?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: When do you have science?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi bạn có ở bãi biển cuối tuần trước không. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "Were you at the beach last weekend?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Were you at the beach last weekend? để hỏi bạn có ở bãi biển cuối tuần trước không.",
        "level": 3
      }
    ]
  },
  {
    "unit": 11,
    "title": "My home",
    "vocab": [
      {
        "word": "road",
        "vi": "con đường",
        "art": "road"
      },
      {
        "word": "street",
        "vi": "đường phố",
        "art": "street"
      },
      {
        "word": "big",
        "vi": "to, lớn",
        "art": "big"
      },
      {
        "word": "busy",
        "vi": "nhộn nhịp",
        "art": "busy"
      },
      {
        "word": "live",
        "vi": "sống",
        "art": "live"
      },
      {
        "word": "noisy",
        "vi": "ồn ào",
        "art": "noisy"
      },
      {
        "word": "quiet",
        "vi": "yên tĩnh",
        "art": "quiet"
      }
    ],
    "patterns": [
      {
        "q": "Where do you live?",
        "a": "I live in Green Street.",
        "qvi": "Bạn sống ở đâu?",
        "avi": "Mình sống ở phố Green."
      },
      {
        "q": "What's the street like?",
        "a": "It's a busy street.",
        "qvi": "Con phố như thế nào?",
        "avi": "Đó là một con phố nhộn nhịp."
      }
    ],
    "vi": "Nhà của em",
    "topic": 3,
    "reading": "I live in Green Street. It's a busy street.\nMy friend lives in a quiet street.",
    "situation": "Em muốn hỏi bạn sống ở đâu.",
    "id": 13,
    "number": "11",
    "label": "Unit 11",
    "slug": "unit-11",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Nhà của em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "road"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where do you live?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “con đường”?",
        "options": [
          "road",
          "street",
          "big",
          "busy"
        ],
        "answer": 0,
        "why": "“road” có nghĩa là con đường.",
        "level": 1
      },
      {
        "q": "“street” có nghĩa là gì?",
        "options": [
          "con đường",
          "to, lớn",
          "nhộn nhịp",
          "đường phố"
        ],
        "answer": 3,
        "why": "“street” nghĩa là đường phố.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình sống ở phố Green.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "I live in Green Street.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: I live in Green Street.",
        "level": 2
      },
      {
        "q": "Câu “Where do you live?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Bạn sống ở đâu?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn sống ở đâu?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Con phố như thế nào?",
        "options": [
          "What's the street like?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What's the street like?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “to, lớn”.",
        "options": [
          "road",
          "street",
          "busy",
          "big"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là to, lớn.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "live in Green Street. I",
          "I in Street. live Green",
          "I live in Green Street.",
          "Street. Green in live I"
        ],
        "answer": 2,
        "why": "Câu đúng là: I live in Green Street.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn sống ở đâu. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "Where do you live?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Where do you live? để hỏi bạn sống ở đâu.",
        "level": 3
      },
      {
        "q": "“It's a busy street.” có nghĩa là gì?",
        "options": [
          "Đó là một con phố nhộn nhịp.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Đó là một con phố nhộn nhịp.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình sống ở phố Green.”: I live in Green ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "Street"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: I live in Green Street.",
        "level": 3
      }
    ]
  },
  {
    "unit": 12,
    "title": "Jobs",
    "vocab": [
      {
        "word": "actor",
        "vi": "diễn viên",
        "art": "actor"
      },
      {
        "word": "farmer",
        "vi": "nông dân",
        "art": "farmer"
      },
      {
        "word": "nurse",
        "vi": "y tá, điều dưỡng",
        "art": "nurse"
      },
      {
        "word": "office worker",
        "vi": "nhân viên văn phòng",
        "art": "office worker"
      },
      {
        "word": "policeman",
        "vi": "cảnh sát nam",
        "art": "policeman"
      },
      {
        "word": "factory",
        "vi": "nhà máy",
        "art": "factory"
      },
      {
        "word": "farm",
        "vi": "nông trại",
        "art": "farm"
      },
      {
        "word": "hospital",
        "vi": "bệnh viện",
        "art": "hospital"
      },
      {
        "word": "nursing home",
        "vi": "viện dưỡng lão",
        "art": "nursing home"
      }
    ],
    "patterns": [
      {
        "q": "What does he do?",
        "a": "He's a farmer.",
        "qvi": "Ông ấy làm nghề gì?",
        "avi": "Ông ấy là nông dân."
      },
      {
        "q": "Where does he work?",
        "a": "He works on a farm.",
        "qvi": "Ông ấy làm việc ở đâu?",
        "avi": "Ông ấy làm việc ở một nông trại."
      }
    ],
    "vi": "Nghề nghiệp",
    "topic": 3,
    "reading": "My father is a farmer. He works on a farm.\nMy mother is a nurse. She works at a hospital.",
    "situation": "Em muốn hỏi nghề nghiệp một người đàn ông.",
    "id": 14,
    "number": "12",
    "label": "Unit 12",
    "slug": "unit-12",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Nghề nghiệp",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "actor"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What does he do?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “diễn viên”?",
        "options": [
          "nurse",
          "office worker",
          "actor",
          "farmer"
        ],
        "answer": 2,
        "why": "“actor” có nghĩa là diễn viên.",
        "level": 1
      },
      {
        "q": "“farmer” có nghĩa là gì?",
        "options": [
          "nhân viên văn phòng",
          "nông dân",
          "diễn viên",
          "y tá, điều dưỡng"
        ],
        "answer": 1,
        "why": "“farmer” nghĩa là nông dân.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Ông ấy là nông dân.",
        "options": [
          "He's a farmer.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: He's a farmer.",
        "level": 2
      },
      {
        "q": "Câu “What does he do?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Ông ấy làm nghề gì?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Ông ấy làm nghề gì?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Ông ấy làm việc ở đâu?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "Where does he work?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Where does he work?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “y tá, điều dưỡng”.",
        "options": [
          "office worker",
          "nurse",
          "actor",
          "farmer"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là y tá, điều dưỡng.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "He's a farmer.",
          "farmer. a He's",
          "a farmer. He's",
          "He's farmer. a"
        ],
        "answer": 0,
        "why": "Câu đúng là: He's a farmer.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi nghề nghiệp một người đàn ông. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "What does he do?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu What does he do? để hỏi nghề nghiệp một người đàn ông.",
        "level": 3
      },
      {
        "q": "“He works on a farm.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Ông ấy làm việc ở một nông trại.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Ông ấy làm việc ở một nông trại.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Ông ấy là nông dân.”: He's a ____.",
        "options": [
          "rainy",
          "farmer",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: He's a farmer.",
        "level": 3
      }
    ]
  },
  {
    "unit": 13,
    "title": "Appearance",
    "vocab": [
      {
        "word": "big",
        "vi": "to, lớn",
        "art": "big"
      },
      {
        "word": "short",
        "vi": "thấp, ngắn",
        "art": "short"
      },
      {
        "word": "slim",
        "vi": "mảnh mai",
        "art": "slim"
      },
      {
        "word": "tall",
        "vi": "cao",
        "art": "tall"
      },
      {
        "word": "eyes",
        "vi": "mắt",
        "art": "eye"
      },
      {
        "word": "face",
        "vi": "khuôn mặt",
        "art": "face"
      },
      {
        "word": "hair",
        "vi": "tóc",
        "art": "hair"
      },
      {
        "word": "long",
        "vi": "dài",
        "art": "long"
      },
      {
        "word": "round",
        "vi": "tròn",
        "art": "round"
      }
    ],
    "patterns": [
      {
        "q": "What does she look like?",
        "a": "She's tall.",
        "qvi": "Bạn nữ ấy trông như thế nào?",
        "avi": "Bạn ấy cao."
      },
      {
        "q": "What does he look like?",
        "a": "He has a round face.",
        "qvi": "Bạn nam ấy trông như thế nào?",
        "avi": "Bạn ấy có khuôn mặt tròn."
      }
    ],
    "vi": "Ngoại hình",
    "topic": 3,
    "reading": "This is my friend Mai. She's tall and slim.\nHer brother has a round face and short hair.",
    "situation": "Em muốn hỏi ngoại hình của bạn nữ.",
    "id": 15,
    "number": "13",
    "label": "Unit 13",
    "slug": "unit-13",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Ngoại hình",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "big"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What does she look like?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “to, lớn”?",
        "options": [
          "big",
          "short",
          "slim",
          "tall"
        ],
        "answer": 0,
        "why": "“big” có nghĩa là to, lớn.",
        "level": 1
      },
      {
        "q": "“short” có nghĩa là gì?",
        "options": [
          "to, lớn",
          "mảnh mai",
          "cao",
          "thấp, ngắn"
        ],
        "answer": 3,
        "why": "“short” nghĩa là thấp, ngắn.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy cao.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "She's tall.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: She's tall.",
        "level": 2
      },
      {
        "q": "Câu “What does she look like?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Bạn nữ ấy trông như thế nào?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn nữ ấy trông như thế nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn nam ấy trông như thế nào?",
        "options": [
          "What does he look like?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What does he look like?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “mảnh mai”.",
        "options": [
          "big",
          "short",
          "tall",
          "slim"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là mảnh mai.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Is She's tall.",
          "Are She's tall.",
          "She's tall.",
          "tall. She's"
        ],
        "answer": 2,
        "why": "Câu đúng là: She's tall.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi ngoại hình của bạn nữ. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "What does she look like?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What does she look like? để hỏi ngoại hình của bạn nữ.",
        "level": 3
      },
      {
        "q": "“He has a round face.” có nghĩa là gì?",
        "options": [
          "Bạn ấy có khuôn mặt tròn.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bạn ấy có khuôn mặt tròn.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Bạn ấy cao.”: She's ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "tall"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: She's tall.",
        "level": 3
      }
    ]
  },
  {
    "unit": 14,
    "title": "Daily activities",
    "vocab": [
      {
        "word": "at noon",
        "vi": "vào buổi trưa",
        "art": "at noon"
      },
      {
        "word": "in the afternoon",
        "vi": "vào buổi chiều",
        "art": "in the afternoon"
      },
      {
        "word": "in the evening",
        "vi": "vào buổi tối",
        "art": "in the evening"
      },
      {
        "word": "in the morning",
        "vi": "vào buổi sáng",
        "art": "in the morning"
      },
      {
        "word": "clean the floor",
        "vi": "lau sàn nhà",
        "art": "clean the floor"
      },
      {
        "word": "help with the cooking",
        "vi": "phụ giúp nấu ăn",
        "art": "help with the cooking"
      },
      {
        "word": "wash the clothes",
        "vi": "giặt quần áo",
        "art": "wash the clothes"
      },
      {
        "word": "wash the dishes",
        "vi": "rửa bát",
        "art": "wash the dishes"
      }
    ],
    "patterns": [
      {
        "q": "When do you watch TV?",
        "a": "I watch TV in the evening.",
        "qvi": "Bạn xem ti vi khi nào?",
        "avi": "Mình xem ti vi vào buổi tối."
      },
      {
        "q": "What do you do in the morning?",
        "a": "I wash the clothes.",
        "qvi": "Bạn làm gì vào buổi sáng?",
        "avi": "Mình giặt quần áo."
      }
    ],
    "vi": "Các hoạt động hằng ngày",
    "topic": 3,
    "reading": "I wash the clothes in the morning.\nI help with the cooking at noon. I watch TV in the evening.",
    "situation": "Em muốn hỏi bạn xem ti vi khi nào.",
    "id": 16,
    "number": "14",
    "label": "Unit 14",
    "slug": "unit-14",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Các hoạt động hằng ngày",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "at noon"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "When do you watch TV?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “vào buổi trưa”?",
        "options": [
          "in the evening",
          "in the morning",
          "at noon",
          "in the afternoon"
        ],
        "answer": 2,
        "why": "“at noon” có nghĩa là vào buổi trưa.",
        "level": 1
      },
      {
        "q": "“in the afternoon” có nghĩa là gì?",
        "options": [
          "vào buổi sáng",
          "vào buổi chiều",
          "vào buổi trưa",
          "vào buổi tối"
        ],
        "answer": 1,
        "why": "“in the afternoon” nghĩa là vào buổi chiều.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình xem ti vi vào buổi tối.",
        "options": [
          "I watch TV in the evening.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: I watch TV in the evening.",
        "level": 2
      },
      {
        "q": "Câu “When do you watch TV?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Bạn xem ti vi khi nào?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn xem ti vi khi nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn làm gì vào buổi sáng?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "What do you do in the morning?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What do you do in the morning?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “vào buổi tối”.",
        "options": [
          "in the morning",
          "in the evening",
          "at noon",
          "in the afternoon"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là vào buổi tối.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "I watch TV in the evening.",
          "evening. the in TV watch I",
          "watch TV in the evening. I",
          "I TV the watch in evening."
        ],
        "answer": 0,
        "why": "Câu đúng là: I watch TV in the evening.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn xem ti vi khi nào. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "When do you watch TV?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu When do you watch TV? để hỏi bạn xem ti vi khi nào.",
        "level": 3
      },
      {
        "q": "“I wash the clothes.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Mình giặt quần áo.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình giặt quần áo.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình xem ti vi vào buổi tối.”: I watch TV in the ____.",
        "options": [
          "rainy",
          "evening",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: I watch TV in the evening.",
        "level": 3
      }
    ]
  },
  {
    "unit": 15,
    "title": "My family's weekends",
    "vocab": [
      {
        "word": "cinema",
        "vi": "rạp chiếu phim",
        "art": "cinema"
      },
      {
        "word": "shopping centre",
        "vi": "trung tâm mua sắm",
        "art": "shopping centre"
      },
      {
        "word": "sports centre",
        "vi": "trung tâm thể thao",
        "art": "sports centre"
      },
      {
        "word": "swimming pool",
        "vi": "bể bơi",
        "art": "swimming pool"
      },
      {
        "word": "cook meals",
        "vi": "nấu các bữa ăn",
        "art": "cooking"
      },
      {
        "word": "do yoga",
        "vi": "tập yoga",
        "art": "do yoga"
      },
      {
        "word": "play tennis",
        "vi": "chơi quần vợt",
        "art": "tennis"
      },
      {
        "word": "watch films",
        "vi": "xem phim",
        "art": "watchingtv"
      }
    ],
    "patterns": [
      {
        "q": "Where does he go on Saturdays?",
        "a": "He goes to the sports centre.",
        "qvi": "Ông ấy đi đâu vào các ngày thứ Bảy?",
        "avi": "Ông ấy đến trung tâm thể thao."
      },
      {
        "q": "What does she do on Sundays?",
        "a": "She does yoga.",
        "qvi": "Bà ấy làm gì vào các ngày Chủ nhật?",
        "avi": "Bà ấy tập yoga."
      }
    ],
    "vi": "Cuối tuần của gia đình em",
    "topic": 3,
    "reading": "My father goes to the sports centre on Saturdays.\nMy mother does yoga on Sundays. I watch films with my family.",
    "situation": "Em muốn hỏi nơi ông ấy đi vào thứ Bảy.",
    "id": 17,
    "number": "15",
    "label": "Unit 15",
    "slug": "unit-15",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Cuối tuần của gia đình em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "cinema"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where does he go on Saturdays?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “rạp chiếu phim”?",
        "options": [
          "cinema",
          "shopping centre",
          "sports centre",
          "swimming pool"
        ],
        "answer": 0,
        "why": "“cinema” có nghĩa là rạp chiếu phim.",
        "level": 1
      },
      {
        "q": "“shopping centre” có nghĩa là gì?",
        "options": [
          "rạp chiếu phim",
          "trung tâm thể thao",
          "bể bơi",
          "trung tâm mua sắm"
        ],
        "answer": 3,
        "why": "“shopping centre” nghĩa là trung tâm mua sắm.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Ông ấy đến trung tâm thể thao.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "He goes to the sports centre.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: He goes to the sports centre.",
        "level": 2
      },
      {
        "q": "Câu “Where does he go on Saturdays?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Ông ấy đi đâu vào các ngày thứ Bảy?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Ông ấy đi đâu vào các ngày thứ Bảy?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bà ấy làm gì vào các ngày Chủ nhật?",
        "options": [
          "What does she do on Sundays?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What does she do on Sundays?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “trung tâm thể thao”.",
        "options": [
          "cinema",
          "shopping centre",
          "swimming pool",
          "sports centre"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là trung tâm thể thao.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "goes to the sports centre. He",
          "He to sports goes the centre.",
          "He goes to the sports centre.",
          "centre. sports the to goes He"
        ],
        "answer": 2,
        "why": "Câu đúng là: He goes to the sports centre.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi nơi ông ấy đi vào thứ Bảy. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "Where does he go on Saturdays?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Where does he go on Saturdays? để hỏi nơi ông ấy đi vào thứ Bảy.",
        "level": 3
      },
      {
        "q": "“She does yoga.” có nghĩa là gì?",
        "options": [
          "Bà ấy tập yoga.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bà ấy tập yoga.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Ông ấy đến trung tâm thể thao.”: He goes to the sports ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "centre"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: He goes to the sports centre.",
        "level": 3
      }
    ]
  },
  {
    "id": 18,
    "unit": 0,
    "number": "R3",
    "label": "Review 3 & Extension activities",
    "title": "Review 3 & Extension activities",
    "vi": "Ôn tập Unit 11–15",
    "lead": "Ôn tập Unit 11–15",
    "slug": "review-3",
    "kind": "review",
    "topic": 3,
    "optional": false,
    "branch": "",
    "vocab": [
      {
        "word": "road",
        "vi": "con đường",
        "art": "road"
      },
      {
        "word": "actor",
        "vi": "diễn viên",
        "art": "actor"
      },
      {
        "word": "big",
        "vi": "to, lớn",
        "art": "big"
      },
      {
        "word": "at noon",
        "vi": "vào buổi trưa",
        "art": "at noon"
      },
      {
        "word": "cinema",
        "vi": "rạp chiếu phim",
        "art": "cinema"
      },
      {
        "word": "street",
        "vi": "đường phố",
        "art": "street"
      },
      {
        "word": "farmer",
        "vi": "nông dân",
        "art": "farmer"
      },
      {
        "word": "short",
        "vi": "thấp, ngắn",
        "art": "short"
      },
      {
        "word": "in the afternoon",
        "vi": "vào buổi chiều",
        "art": "in the afternoon"
      },
      {
        "word": "shopping centre",
        "vi": "trung tâm mua sắm",
        "art": "shopping centre"
      },
      {
        "word": "nurse",
        "vi": "y tá, điều dưỡng",
        "art": "nurse"
      },
      {
        "word": "slim",
        "vi": "mảnh mai",
        "art": "slim"
      },
      {
        "word": "in the evening",
        "vi": "vào buổi tối",
        "art": "in the evening"
      },
      {
        "word": "sports centre",
        "vi": "trung tâm thể thao",
        "art": "sports centre"
      }
    ],
    "patterns": [
      {
        "q": "Where do you live?",
        "a": "I live in Green Street.",
        "qvi": "Bạn sống ở đâu?",
        "avi": "Mình sống ở phố Green."
      },
      {
        "q": "What does she look like?",
        "a": "She's tall.",
        "qvi": "Bạn nữ ấy trông như thế nào?",
        "avi": "Bạn ấy cao."
      }
    ],
    "reading": "I live in Green Street.\nHe's a farmer.\nShe's tall.\nI watch TV in the evening.\nHe goes to the sports centre.",
    "situation": "Ôn tập và mở rộng.",
    "goals": [
      "Ôn từ vựng và mẫu câu năm Unit",
      "Luyện nghe và đọc trong ngữ cảnh",
      "Giao tiếp cùng bạn"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "road"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where do you live?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Chơi ít nhất ba dạng bài rồi làm thử thách 12 câu; luyện hỏi đáp cùng bạn.",
    "real": "Bài tập bổ trợ do ứng dụng biên soạn, không chép nguyên bài tập SGK.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “con đường”?",
        "options": [
          "road",
          "street",
          "big",
          "busy"
        ],
        "answer": 0,
        "why": "“road” có nghĩa là con đường.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình sống ở phố Green.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "I live in Green Street.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: I live in Green Street.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “diễn viên”?",
        "options": [
          "nurse",
          "office worker",
          "actor",
          "farmer"
        ],
        "answer": 2,
        "why": "“actor” có nghĩa là diễn viên.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Ông ấy là nông dân.",
        "options": [
          "He's a farmer.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: He's a farmer.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “to, lớn”?",
        "options": [
          "big",
          "short",
          "slim",
          "tall"
        ],
        "answer": 0,
        "why": "“big” có nghĩa là to, lớn.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy cao.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "She's tall.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: She's tall.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “vào buổi trưa”?",
        "options": [
          "in the evening",
          "in the morning",
          "at noon",
          "in the afternoon"
        ],
        "answer": 2,
        "why": "“at noon” có nghĩa là vào buổi trưa.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình xem ti vi vào buổi tối.",
        "options": [
          "I watch TV in the evening.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: I watch TV in the evening.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “rạp chiếu phim”?",
        "options": [
          "cinema",
          "shopping centre",
          "sports centre",
          "swimming pool"
        ],
        "answer": 0,
        "why": "“cinema” có nghĩa là rạp chiếu phim.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Ông ấy đến trung tâm thể thao.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "He goes to the sports centre.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: He goes to the sports centre.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Ông ấy làm việc ở đâu?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "Where does he work?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Where does he work?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi nơi ông ấy đi vào thứ Bảy. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "Where does he go on Saturdays?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Where does he go on Saturdays? để hỏi nơi ông ấy đi vào thứ Bảy.",
        "level": 3
      }
    ]
  },
  {
    "unit": 16,
    "title": "Weather",
    "vocab": [
      {
        "word": "cloudy",
        "vi": "nhiều mây",
        "art": "cloudy"
      },
      {
        "word": "rainy",
        "vi": "có mưa",
        "art": "rainy"
      },
      {
        "word": "sunny",
        "vi": "có nắng",
        "art": "sunny"
      },
      {
        "word": "weather",
        "vi": "thời tiết",
        "art": "weather"
      },
      {
        "word": "windy",
        "vi": "có gió",
        "art": "windy"
      },
      {
        "word": "bakery",
        "vi": "tiệm bánh",
        "art": "bakery"
      },
      {
        "word": "bookshop",
        "vi": "hiệu sách",
        "art": "bookshop"
      },
      {
        "word": "food stall",
        "vi": "quầy đồ ăn",
        "art": "food stall"
      },
      {
        "word": "water park",
        "vi": "công viên nước",
        "art": "water park"
      }
    ],
    "patterns": [
      {
        "q": "What was the weather like last weekend?",
        "a": "It was sunny.",
        "qvi": "Thời tiết cuối tuần trước như thế nào?",
        "avi": "Trời đã có nắng."
      },
      {
        "q": "Do you want to go to the water park?",
        "a": "Great! Let's go.",
        "qvi": "Bạn có muốn đến công viên nước không?",
        "avi": "Tuyệt! Chúng ta đi thôi."
      }
    ],
    "vi": "Thời tiết",
    "topic": 4,
    "reading": "It was sunny last weekend.\nDo you want to go to the water park? Great! Let's go.",
    "situation": "Em muốn hỏi thời tiết cuối tuần trước.",
    "id": 19,
    "number": "16",
    "label": "Unit 16",
    "slug": "unit-16",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Thời tiết",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "cloudy"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What was the weather like last weekend?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “nhiều mây”?",
        "options": [
          "sunny",
          "weather",
          "cloudy",
          "rainy"
        ],
        "answer": 2,
        "why": "“cloudy” có nghĩa là nhiều mây.",
        "level": 1
      },
      {
        "q": "“rainy” có nghĩa là gì?",
        "options": [
          "thời tiết",
          "có mưa",
          "nhiều mây",
          "có nắng"
        ],
        "answer": 1,
        "why": "“rainy” nghĩa là có mưa.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Trời đã có nắng.",
        "options": [
          "It was sunny.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It was sunny.",
        "level": 2
      },
      {
        "q": "Câu “What was the weather like last weekend?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Thời tiết cuối tuần trước như thế nào?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Thời tiết cuối tuần trước như thế nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn có muốn đến công viên nước không?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "Do you want to go to the water park?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Do you want to go to the water park?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “có nắng”.",
        "options": [
          "weather",
          "sunny",
          "cloudy",
          "rainy"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là có nắng.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It was sunny.",
          "sunny. was It",
          "was sunny. It",
          "It sunny. was"
        ],
        "answer": 0,
        "why": "Câu đúng là: It was sunny.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi thời tiết cuối tuần trước. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "What was the weather like last weekend?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu What was the weather like last weekend? để hỏi thời tiết cuối tuần trước.",
        "level": 3
      },
      {
        "q": "“Great! Let's go.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Tuyệt! Chúng ta đi thôi.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Tuyệt! Chúng ta đi thôi.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Trời đã có nắng.”: It was ____.",
        "options": [
          "rainy",
          "sunny",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It was sunny.",
        "level": 3
      }
    ]
  },
  {
    "unit": 17,
    "title": "In the city",
    "vocab": [
      {
        "word": "go straight",
        "vi": "đi thẳng",
        "art": "go straight"
      },
      {
        "word": "left",
        "vi": "bên trái",
        "art": "left"
      },
      {
        "word": "right",
        "vi": "bên phải",
        "art": "right"
      },
      {
        "word": "stop",
        "vi": "dừng lại",
        "art": "stop"
      },
      {
        "word": "turn",
        "vi": "rẽ, quay",
        "art": "turn"
      },
      {
        "word": "turn left",
        "vi": "rẽ trái",
        "art": "turn left"
      },
      {
        "word": "turn right",
        "vi": "rẽ phải",
        "art": "turn right"
      },
      {
        "word": "turn round",
        "vi": "quay lại",
        "art": "turn round"
      }
    ],
    "patterns": [
      {
        "q": "What does it say?",
        "a": "It says 'Stop'.",
        "qvi": "Biển báo viết gì?",
        "avi": "Biển báo viết Dừng lại."
      },
      {
        "q": "How can I get to the bookshop?",
        "a": "Go straight and turn left.",
        "qvi": "Mình có thể đến hiệu sách bằng cách nào?",
        "avi": "Đi thẳng rồi rẽ trái."
      }
    ],
    "vi": "Trong thành phố",
    "topic": 4,
    "reading": "This sign says 'Stop'.\nHow can I get to the bookshop? Go straight and turn left.",
    "situation": "Em muốn hỏi biển báo viết gì.",
    "id": 20,
    "number": "17",
    "label": "Unit 17",
    "slug": "unit-17",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Trong thành phố",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "go straight"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What does it say?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “đi thẳng”?",
        "options": [
          "go straight",
          "left",
          "right",
          "stop"
        ],
        "answer": 0,
        "why": "“go straight” có nghĩa là đi thẳng.",
        "level": 1
      },
      {
        "q": "“left” có nghĩa là gì?",
        "options": [
          "đi thẳng",
          "bên phải",
          "dừng lại",
          "bên trái"
        ],
        "answer": 3,
        "why": "“left” nghĩa là bên trái.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Biển báo viết Dừng lại.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "It says 'Stop'.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: It says 'Stop'.",
        "level": 2
      },
      {
        "q": "Câu “What does it say?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Biển báo viết gì?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Biển báo viết gì?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình có thể đến hiệu sách bằng cách nào?",
        "options": [
          "How can I get to the bookshop?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: How can I get to the bookshop?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “bên phải”.",
        "options": [
          "go straight",
          "left",
          "stop",
          "right"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là bên phải.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "says 'Stop'. It",
          "It 'Stop'. says",
          "It says 'Stop'.",
          "'Stop'. says It"
        ],
        "answer": 2,
        "why": "Câu đúng là: It says 'Stop'.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi biển báo viết gì. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "What does it say?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What does it say? để hỏi biển báo viết gì.",
        "level": 3
      },
      {
        "q": "“Go straight and turn left.” có nghĩa là gì?",
        "options": [
          "Đi thẳng rồi rẽ trái.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Đi thẳng rồi rẽ trái.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Biển báo viết Dừng lại.”: It says '____'.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "Stop"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: It says 'Stop'.",
        "level": 3
      }
    ]
  },
  {
    "unit": 18,
    "title": "At the shopping centre",
    "vocab": [
      {
        "word": "behind",
        "vi": "ở phía sau",
        "art": "behind"
      },
      {
        "word": "between",
        "vi": "ở giữa hai vật",
        "art": "between"
      },
      {
        "word": "near",
        "vi": "ở gần",
        "art": "near"
      },
      {
        "word": "opposite",
        "vi": "ở đối diện",
        "art": "opposite"
      },
      {
        "word": "gift shop",
        "vi": "cửa hàng quà tặng",
        "art": "gift shop"
      },
      {
        "word": "skirt",
        "vi": "chân váy",
        "art": "skirt"
      },
      {
        "word": "T-shirt",
        "vi": "áo phông",
        "art": "T-shirt"
      },
      {
        "word": "dong",
        "vi": "đồng, đơn vị tiền Việt Nam",
        "art": "dong"
      },
      {
        "word": "thousand",
        "vi": "nghìn",
        "art": "thousand"
      }
    ],
    "patterns": [
      {
        "q": "Where's the bookshop?",
        "a": "It's opposite the gift shop.",
        "qvi": "Hiệu sách ở đâu?",
        "avi": "Nó ở đối diện cửa hàng quà tặng."
      },
      {
        "q": "How much is the T-shirt?",
        "a": "It's sixty thousand dong.",
        "qvi": "Chiếc áo phông giá bao nhiêu?",
        "avi": "Giá sáu mươi nghìn đồng."
      }
    ],
    "vi": "Ở trung tâm mua sắm",
    "topic": 4,
    "reading": "The bookshop is opposite the gift shop.\nThe T-shirt is sixty thousand dong. The skirt is fifty thousand dong.",
    "situation": "Em muốn hỏi vị trí hiệu sách.",
    "id": 21,
    "number": "18",
    "label": "Unit 18",
    "slug": "unit-18",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Ở trung tâm mua sắm",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "behind"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where's the bookshop?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “ở phía sau”?",
        "options": [
          "near",
          "opposite",
          "behind",
          "between"
        ],
        "answer": 2,
        "why": "“behind” có nghĩa là ở phía sau.",
        "level": 1
      },
      {
        "q": "“between” có nghĩa là gì?",
        "options": [
          "ở đối diện",
          "ở giữa hai vật",
          "ở phía sau",
          "ở gần"
        ],
        "answer": 1,
        "why": "“between” nghĩa là ở giữa hai vật.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Nó ở đối diện cửa hàng quà tặng.",
        "options": [
          "It's opposite the gift shop.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's opposite the gift shop.",
        "level": 2
      },
      {
        "q": "Câu “Where's the bookshop?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Hiệu sách ở đâu?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Hiệu sách ở đâu?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Chiếc áo phông giá bao nhiêu?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "How much is the T-shirt?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: How much is the T-shirt?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “ở gần”.",
        "options": [
          "opposite",
          "near",
          "behind",
          "between"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là ở gần.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It's opposite the gift shop.",
          "shop. gift the opposite It's",
          "opposite the gift shop. It's",
          "It's the shop. opposite gift"
        ],
        "answer": 0,
        "why": "Câu đúng là: It's opposite the gift shop.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi vị trí hiệu sách. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "Where's the bookshop?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Where's the bookshop? để hỏi vị trí hiệu sách.",
        "level": 3
      },
      {
        "q": "“It's sixty thousand dong.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Giá sáu mươi nghìn đồng.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Giá sáu mươi nghìn đồng.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Nó ở đối diện cửa hàng quà tặng.”: It's opposite the gift ____.",
        "options": [
          "rainy",
          "shop",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It's opposite the gift shop.",
        "level": 3
      }
    ]
  },
  {
    "unit": 19,
    "title": "The animal world",
    "vocab": [
      {
        "word": "crocodiles",
        "vi": "những con cá sấu",
        "art": "crocodiles"
      },
      {
        "word": "giraffes",
        "vi": "những con hươu cao cổ",
        "art": "giraffes"
      },
      {
        "word": "hippos",
        "vi": "những con hà mã",
        "art": "hippos"
      },
      {
        "word": "lions",
        "vi": "những con sư tử",
        "art": "lions"
      },
      {
        "word": "dance beautifully",
        "vi": "nhảy múa đẹp",
        "art": "dance beautifully"
      },
      {
        "word": "roar loudly",
        "vi": "gầm to",
        "art": "roar loudly"
      },
      {
        "word": "run quickly",
        "vi": "chạy nhanh",
        "art": "run quickly"
      },
      {
        "word": "sing merrily",
        "vi": "hót vui vẻ",
        "art": "sing merrily"
      }
    ],
    "patterns": [
      {
        "q": "What are these animals?",
        "a": "They're lions.",
        "qvi": "Đây là những con vật gì?",
        "avi": "Chúng là những con sư tử."
      },
      {
        "q": "Why do you like lions?",
        "a": "Because they roar loudly.",
        "qvi": "Tại sao bạn thích sư tử?",
        "avi": "Bởi vì chúng gầm to."
      }
    ],
    "vi": "Thế giới động vật",
    "topic": 4,
    "reading": "These animals are lions. They roar loudly.\nI like giraffes, too. The birds sing merrily.",
    "situation": "Em muốn hỏi tên những con vật trước mặt.",
    "id": 22,
    "number": "19",
    "label": "Unit 19",
    "slug": "unit-19",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Thế giới động vật",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "crocodiles"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What are these animals?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “những con cá sấu”?",
        "options": [
          "crocodiles",
          "giraffes",
          "hippos",
          "lions"
        ],
        "answer": 0,
        "why": "“crocodiles” có nghĩa là những con cá sấu.",
        "level": 1
      },
      {
        "q": "“giraffes” có nghĩa là gì?",
        "options": [
          "những con cá sấu",
          "những con hà mã",
          "những con sư tử",
          "những con hươu cao cổ"
        ],
        "answer": 3,
        "why": "“giraffes” nghĩa là những con hươu cao cổ.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Chúng là những con sư tử.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "They're lions.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: They're lions.",
        "level": 2
      },
      {
        "q": "Câu “What are these animals?” có nghĩa là gì?",
        "options": [
          "Mấy giờ rồi?",
          "Đây là những con vật gì?",
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Đây là những con vật gì?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Tại sao bạn thích sư tử?",
        "options": [
          "Why do you like lions?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: Why do you like lions?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “những con hà mã”.",
        "options": [
          "crocodiles",
          "giraffes",
          "lions",
          "hippos"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là những con hà mã.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Is They're lions.",
          "Are They're lions.",
          "They're lions.",
          "lions. They're"
        ],
        "answer": 2,
        "why": "Câu đúng là: They're lions.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi tên những con vật trước mặt. Em chọn câu nào?",
        "options": [
          "What time is it?",
          "What are these animals?",
          "Where are you from?",
          "Where's she from?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What are these animals? để hỏi tên những con vật trước mặt.",
        "level": 3
      },
      {
        "q": "“Because they roar loudly.” có nghĩa là gì?",
        "options": [
          "Bởi vì chúng gầm to.",
          "Mình đến từ Việt Nam.",
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bởi vì chúng gầm to.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Chúng là những con sư tử.”: They're ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "lions"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: They're lions.",
        "level": 3
      }
    ]
  },
  {
    "unit": 20,
    "title": "At summer camp",
    "vocab": [
      {
        "word": "building a campfire",
        "vi": "đang nhóm lửa trại",
        "art": "building a campfire"
      },
      {
        "word": "dancing around the campfire",
        "vi": "đang nhảy múa quanh lửa trại",
        "art": "dancing around the campfire"
      },
      {
        "word": "playing card games",
        "vi": "đang chơi bài",
        "art": "playing card games"
      },
      {
        "word": "playing tug of war",
        "vi": "đang chơi kéo co",
        "art": "playing tug of war"
      },
      {
        "word": "putting up a tent",
        "vi": "đang dựng lều",
        "art": "putting up a tent"
      },
      {
        "word": "singing songs",
        "vi": "đang hát những bài hát",
        "art": "singing songs"
      },
      {
        "word": "taking a photo",
        "vi": "đang chụp ảnh",
        "art": "taking a photo"
      },
      {
        "word": "telling a story",
        "vi": "đang kể chuyện",
        "art": "telling a story"
      }
    ],
    "patterns": [
      {
        "q": "What's she doing?",
        "a": "She's taking a photo.",
        "qvi": "Bạn nữ ấy đang làm gì?",
        "avi": "Bạn ấy đang chụp ảnh."
      },
      {
        "q": "What are they doing?",
        "a": "They're putting up a tent.",
        "qvi": "Họ đang làm gì?",
        "avi": "Họ đang dựng lều."
      }
    ],
    "vi": "Ở trại hè",
    "topic": 4,
    "reading": "We are at summer camp. Mai is taking a photo.\nBen and Nam are putting up a tent. Lucy is telling a story.",
    "situation": "Em muốn hỏi bạn nữ đang làm gì.",
    "id": 23,
    "number": "20",
    "label": "Unit 20",
    "slug": "unit-20",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Ở trại hè",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "building a campfire"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What's she doing?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Đạt ít nhất ba trò chơi khác nhau từ 60% để nhận dấu thực hành; luyện nói thêm cùng bạn và thầy cô.",
    "real": "Âm thanh tổng hợp tham khảo; ứng dụng không thu âm hoặc tự chấm phát âm.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “đang nhóm lửa trại”?",
        "options": [
          "playing card games",
          "playing tug of war",
          "building a campfire",
          "dancing around the campfire"
        ],
        "answer": 2,
        "why": "“building a campfire” có nghĩa là đang nhóm lửa trại.",
        "level": 1
      },
      {
        "q": "“dancing around the campfire” có nghĩa là gì?",
        "options": [
          "đang chơi kéo co",
          "đang nhảy múa quanh lửa trại",
          "đang nhóm lửa trại",
          "đang chơi bài"
        ],
        "answer": 1,
        "why": "“dancing around the campfire” nghĩa là đang nhảy múa quanh lửa trại.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy đang chụp ảnh.",
        "options": [
          "She's taking a photo.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: She's taking a photo.",
        "level": 2
      },
      {
        "q": "Câu “What's she doing?” có nghĩa là gì?",
        "options": [
          "Bạn đến từ đâu?",
          "Bạn nữ ấy đến từ đâu?",
          "Mấy giờ rồi?",
          "Bạn nữ ấy đang làm gì?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn nữ ấy đang làm gì?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Họ đang làm gì?",
        "options": [
          "Where's she from?",
          "What time is it?",
          "What are they doing?",
          "Where are you from?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What are they doing?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “đang chơi bài”.",
        "options": [
          "playing tug of war",
          "playing card games",
          "building a campfire",
          "dancing around the campfire"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là đang chơi bài.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "She's taking a photo.",
          "photo. a taking She's",
          "taking a photo. She's",
          "She's a taking photo."
        ],
        "answer": 0,
        "why": "Câu đúng là: She's taking a photo.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn nữ đang làm gì. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "What's she doing?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu What's she doing? để hỏi bạn nữ đang làm gì.",
        "level": 3
      },
      {
        "q": "“They're putting up a tent.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đến từ Nhật Bản.",
          "Bây giờ là bảy giờ.",
          "Họ đang dựng lều.",
          "Mình đến từ Việt Nam."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Họ đang dựng lều.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Bạn ấy đang chụp ảnh.”: She's taking a ____.",
        "options": [
          "rainy",
          "photo",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: She's taking a photo.",
        "level": 3
      }
    ]
  },
  {
    "id": 24,
    "unit": 0,
    "number": "R4",
    "label": "Review 4 & Extension activities",
    "title": "Review 4 & Extension activities",
    "vi": "Ôn tập Unit 16–20",
    "lead": "Ôn tập Unit 16–20",
    "slug": "review-4",
    "kind": "review",
    "topic": 4,
    "optional": false,
    "branch": "",
    "vocab": [
      {
        "word": "cloudy",
        "vi": "nhiều mây",
        "art": "cloudy"
      },
      {
        "word": "go straight",
        "vi": "đi thẳng",
        "art": "go straight"
      },
      {
        "word": "behind",
        "vi": "ở phía sau",
        "art": "behind"
      },
      {
        "word": "crocodiles",
        "vi": "những con cá sấu",
        "art": "crocodiles"
      },
      {
        "word": "building a campfire",
        "vi": "đang nhóm lửa trại",
        "art": "building a campfire"
      },
      {
        "word": "rainy",
        "vi": "có mưa",
        "art": "rainy"
      },
      {
        "word": "left",
        "vi": "bên trái",
        "art": "left"
      },
      {
        "word": "between",
        "vi": "ở giữa hai vật",
        "art": "between"
      },
      {
        "word": "giraffes",
        "vi": "những con hươu cao cổ",
        "art": "giraffes"
      },
      {
        "word": "dancing around the campfire",
        "vi": "đang nhảy múa quanh lửa trại",
        "art": "dancing around the campfire"
      },
      {
        "word": "sunny",
        "vi": "có nắng",
        "art": "sunny"
      },
      {
        "word": "right",
        "vi": "bên phải",
        "art": "right"
      },
      {
        "word": "near",
        "vi": "ở gần",
        "art": "near"
      },
      {
        "word": "hippos",
        "vi": "những con hà mã",
        "art": "hippos"
      },
      {
        "word": "playing card games",
        "vi": "đang chơi bài",
        "art": "playing card games"
      }
    ],
    "patterns": [
      {
        "q": "What was the weather like last weekend?",
        "a": "It was sunny.",
        "qvi": "Thời tiết cuối tuần trước như thế nào?",
        "avi": "Trời đã có nắng."
      },
      {
        "q": "Where's the bookshop?",
        "a": "It's opposite the gift shop.",
        "qvi": "Hiệu sách ở đâu?",
        "avi": "Nó ở đối diện cửa hàng quà tặng."
      }
    ],
    "reading": "It was sunny.\nIt says 'Stop'.\nIt's opposite the gift shop.\nThey're lions.\nShe's taking a photo.",
    "situation": "Ôn tập và mở rộng.",
    "goals": [
      "Ôn từ vựng và mẫu câu năm Unit",
      "Luyện nghe và đọc trong ngữ cảnh",
      "Giao tiếp cùng bạn"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "cloudy"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What was the weather like last weekend?"
      },
      {
        "title": "Practise",
        "body": "Thực hành qua trò chơi và hỏi đáp.",
        "example": "Luyện cùng bạn và thầy cô."
      }
    ],
    "task": "Chơi ít nhất ba dạng bài rồi làm thử thách 12 câu; luyện hỏi đáp cùng bạn.",
    "real": "Bài tập bổ trợ do ứng dụng biên soạn, không chép nguyên bài tập SGK.",
    "quiz": [
      {
        "q": "Từ nào có nghĩa là “nhiều mây”?",
        "options": [
          "sunny",
          "weather",
          "cloudy",
          "rainy"
        ],
        "answer": 2,
        "why": "“cloudy” có nghĩa là nhiều mây.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Trời đã có nắng.",
        "options": [
          "It was sunny.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It was sunny.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “đi thẳng”?",
        "options": [
          "go straight",
          "left",
          "right",
          "stop"
        ],
        "answer": 0,
        "why": "“go straight” có nghĩa là đi thẳng.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Biển báo viết Dừng lại.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "It says 'Stop'.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: It says 'Stop'.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “ở phía sau”?",
        "options": [
          "near",
          "opposite",
          "behind",
          "between"
        ],
        "answer": 2,
        "why": "“behind” có nghĩa là ở phía sau.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Nó ở đối diện cửa hàng quà tặng.",
        "options": [
          "It's opposite the gift shop.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's opposite the gift shop.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “những con cá sấu”?",
        "options": [
          "crocodiles",
          "giraffes",
          "hippos",
          "lions"
        ],
        "answer": 0,
        "why": "“crocodiles” có nghĩa là những con cá sấu.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Chúng là những con sư tử.",
        "options": [
          "She's from Japan.",
          "It's seven o'clock.",
          "They're lions.",
          "I'm from Viet Nam."
        ],
        "answer": 2,
        "why": "Mẫu câu: They're lions.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “đang nhóm lửa trại”?",
        "options": [
          "playing card games",
          "playing tug of war",
          "building a campfire",
          "dancing around the campfire"
        ],
        "answer": 2,
        "why": "“building a campfire” có nghĩa là đang nhóm lửa trại.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy đang chụp ảnh.",
        "options": [
          "She's taking a photo.",
          "I'm from Viet Nam.",
          "She's from Japan.",
          "It's seven o'clock."
        ],
        "answer": 0,
        "why": "Mẫu câu: She's taking a photo.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình có thể đến hiệu sách bằng cách nào?",
        "options": [
          "How can I get to the bookshop?",
          "Where are you from?",
          "Where's she from?",
          "What time is it?"
        ],
        "answer": 0,
        "why": "Mẫu câu: How can I get to the bookshop?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi bạn nữ đang làm gì. Em chọn câu nào?",
        "options": [
          "Where are you from?",
          "Where's she from?",
          "What time is it?",
          "What's she doing?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu What's she doing? để hỏi bạn nữ đang làm gì.",
        "level": 3
      }
    ]
  }
];
