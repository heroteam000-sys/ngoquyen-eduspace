const COURSE_TOPICS = [
  "Em và những người bạn của em · Me and my friends",
  "Em và trường học của em · Me and my school",
  "Em và gia đình em · Me and my family",
  "Em và thế giới quanh em · Me and the world around me"
];
const COURSE_LESSONS = [
  {
    "unit": 1,
    "title": "All about me!",
    "vocab": [
      {
        "word": "city",
        "vi": "thành phố",
        "art": "city"
      },
      {
        "word": "class",
        "vi": "lớp học",
        "art": "class"
      },
      {
        "word": "countryside",
        "vi": "nông thôn",
        "art": "countryside"
      },
      {
        "word": "dolphin",
        "vi": "cá heo",
        "art": "dolphin"
      },
      {
        "word": "pink",
        "vi": "màu hồng",
        "art": "pink"
      },
      {
        "word": "sandwich",
        "vi": "bánh mì kẹp",
        "art": "sandwich"
      },
      {
        "word": "table tennis",
        "vi": "bóng bàn",
        "art": "table tennis"
      }
    ],
    "patterns": [
      {
        "q": "Can you tell me about yourself?",
        "a": "I'm in class 5A. I live in the city.",
        "qvi": "Bạn có thể giới thiệu về bản thân không?",
        "avi": "Mình học lớp 5A. Mình sống ở thành phố."
      },
      {
        "q": "What's your favourite food?",
        "a": "It's a sandwich.",
        "qvi": "Món ăn yêu thích của bạn là gì?",
        "avi": "Đó là bánh mì kẹp."
      }
    ],
    "vi": "Tất cả về em!",
    "topic": 1,
    "situation": "Em muốn nhờ bạn giới thiệu về bản thân.",
    "reading": "Can you tell me about yourself? I'm in class 5A. I live in the city.\nWhat's your favourite food? It's a sandwich.",
    "id": 1,
    "number": "1",
    "label": "Unit 1",
    "slug": "unit-1",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Tất cả về em!",
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
        "example": "Can you tell me about yourself?"
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
          "city",
          "class",
          "countryside",
          "dolphin"
        ],
        "answer": 0,
        "why": "“city” có nghĩa là thành phố.",
        "level": 1
      },
      {
        "q": "“class” có nghĩa là gì?",
        "options": [
          "thành phố",
          "nông thôn",
          "cá heo",
          "lớp học"
        ],
        "answer": 3,
        "why": "“class” nghĩa là lớp học.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình học lớp 5A. Mình sống ở thành phố.",
        "options": [
          "Yes, I do.",
          "It's 23 Green Street.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich."
        ],
        "answer": 2,
        "why": "Mẫu câu: I'm in class 5A. I live in the city.",
        "level": 2
      },
      {
        "q": "Câu “Can you tell me about yourself?” có nghĩa là gì?",
        "options": [
          "Địa chỉ của bạn là gì?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn có thể giới thiệu về bản thân không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Món ăn yêu thích của bạn là gì?",
        "options": [
          "What's your favourite food?",
          "Can you tell me about yourself?",
          "Do you live in this building?",
          "What's your address?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What's your favourite food?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “nông thôn”.",
        "options": [
          "city",
          "class",
          "dolphin",
          "countryside"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là nông thôn.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "in class 5A. I live in the city. I'm",
          "I'm class I in city. in 5A. live the",
          "I'm in class 5A. I live in the city.",
          "city. the in live I 5A. class in I'm"
        ],
        "answer": 2,
        "why": "Câu đúng là: I'm in class 5A. I live in the city.",
        "level": 3
      },
      {
        "q": "Em muốn nhờ bạn giới thiệu về bản thân. Em chọn câu nào?",
        "options": [
          "What's your address?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Can you tell me about yourself? để nhờ bạn giới thiệu về bản thân.",
        "level": 3
      },
      {
        "q": "“It's a sandwich.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Có, mình có.",
          "Là số 23 phố Green."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Đó là bánh mì kẹp.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình học lớp 5A. Mình sống ở thành phố.”: I'm in class 5A. I live in the ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "city"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: I'm in class 5A. I live in the city.",
        "level": 3
      }
    ]
  },
  {
    "unit": 2,
    "title": "Our homes",
    "vocab": [
      {
        "word": "building",
        "vi": "tòa nhà",
        "art": "building"
      },
      {
        "word": "flat",
        "vi": "căn hộ",
        "art": "flat"
      },
      {
        "word": "house",
        "vi": "ngôi nhà",
        "art": "house"
      },
      {
        "word": "tower",
        "vi": "tòa tháp",
        "art": "tower"
      },
      {
        "word": "twenty-three",
        "vi": "hai mươi ba",
        "art": "twenty-three"
      },
      {
        "word": "thirty-eight",
        "vi": "ba mươi tám",
        "art": "thirty-eight"
      },
      {
        "word": "ninety-three",
        "vi": "chín mươi ba",
        "art": "ninety-three"
      },
      {
        "word": "one hundred and sixteen",
        "vi": "một trăm mười sáu",
        "art": "one hundred and sixteen"
      }
    ],
    "patterns": [
      {
        "q": "Do you live in this building?",
        "a": "Yes, I do.",
        "qvi": "Bạn có sống trong tòa nhà này không?",
        "avi": "Có, mình có."
      },
      {
        "q": "What's your address?",
        "a": "It's 23 Green Street.",
        "qvi": "Địa chỉ của bạn là gì?",
        "avi": "Là số 23 phố Green."
      }
    ],
    "vi": "Nhà của chúng em",
    "topic": 1,
    "situation": "Em muốn hỏi bạn có sống trong tòa nhà này không.",
    "reading": "Do you live in this building? Yes, I do.\nWhat's your address? It's 23 Green Street.",
    "id": 2,
    "number": "2",
    "label": "Unit 2",
    "slug": "unit-2",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Nhà của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "building"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Do you live in this building?"
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
        "q": "Từ nào có nghĩa là “tòa nhà”?",
        "options": [
          "house",
          "tower",
          "building",
          "flat"
        ],
        "answer": 2,
        "why": "“building” có nghĩa là tòa nhà.",
        "level": 1
      },
      {
        "q": "“flat” có nghĩa là gì?",
        "options": [
          "tòa tháp",
          "căn hộ",
          "tòa nhà",
          "ngôi nhà"
        ],
        "answer": 1,
        "why": "“flat” nghĩa là căn hộ.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Có, mình có.",
        "options": [
          "Yes, I do.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "It's 23 Green Street."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, I do.",
        "level": 2
      },
      {
        "q": "Câu “Do you live in this building?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Địa chỉ của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn có sống trong tòa nhà này không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Địa chỉ của bạn là gì?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "What's your address?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What's your address?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “ngôi nhà”.",
        "options": [
          "tower",
          "house",
          "building",
          "flat"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là ngôi nhà.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Yes, I do.",
          "do. I Yes,",
          "I do. Yes,",
          "Yes, do. I"
        ],
        "answer": 0,
        "why": "Câu đúng là: Yes, I do.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn có sống trong tòa nhà này không. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "What's your address?",
          "Do you live in this building?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Do you live in this building? để hỏi bạn có sống trong tòa nhà này không.",
        "level": 3
      },
      {
        "q": "“It's 23 Green Street.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Là số 23 phố Green.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Là số 23 phố Green.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Có, mình có.”: Yes, I ____.",
        "options": [
          "rainy",
          "do",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: Yes, I do.",
        "level": 3
      }
    ]
  },
  {
    "unit": 3,
    "title": "My foreign friends",
    "vocab": [
      {
        "word": "American",
        "vi": "người Mỹ, thuộc nước Mỹ",
        "art": "American"
      },
      {
        "word": "Australian",
        "vi": "người Úc, thuộc nước Úc",
        "art": "Australian"
      },
      {
        "word": "Japanese",
        "vi": "người Nhật, thuộc Nhật Bản",
        "art": "Japanese"
      },
      {
        "word": "Malaysian",
        "vi": "người Ma-lai-xi-a, thuộc Ma-lai-xi-a",
        "art": "Malaysian"
      },
      {
        "word": "active",
        "vi": "năng động",
        "art": "active"
      },
      {
        "word": "clever",
        "vi": "thông minh",
        "art": "clever"
      },
      {
        "word": "friendly",
        "vi": "thân thiện",
        "art": "friendly"
      },
      {
        "word": "helpful",
        "vi": "hay giúp đỡ",
        "art": "helpful"
      }
    ],
    "patterns": [
      {
        "q": "What nationality is she?",
        "a": "She's Japanese.",
        "qvi": "Bạn nữ ấy mang quốc tịch gì?",
        "avi": "Bạn ấy là người Nhật."
      },
      {
        "q": "What's he like?",
        "a": "He's helpful.",
        "qvi": "Bạn nam ấy có tính cách như thế nào?",
        "avi": "Bạn ấy hay giúp đỡ."
      }
    ],
    "vi": "Những người bạn nước ngoài của em",
    "topic": 1,
    "situation": "Em muốn hỏi quốc tịch của bạn nữ.",
    "reading": "What nationality is she? She's Japanese.\nWhat's he like? He's helpful.",
    "id": 3,
    "number": "3",
    "label": "Unit 3",
    "slug": "unit-3",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Những người bạn nước ngoài của em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "American"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What nationality is she?"
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
        "q": "Từ nào có nghĩa là “người Mỹ, thuộc nước Mỹ”?",
        "options": [
          "American",
          "Australian",
          "Japanese",
          "Malaysian"
        ],
        "answer": 0,
        "why": "“American” có nghĩa là người Mỹ, thuộc nước Mỹ.",
        "level": 1
      },
      {
        "q": "“Australian” có nghĩa là gì?",
        "options": [
          "người Mỹ, thuộc nước Mỹ",
          "người Nhật, thuộc Nhật Bản",
          "người Ma-lai-xi-a, thuộc Ma-lai-xi-a",
          "người Úc, thuộc nước Úc"
        ],
        "answer": 3,
        "why": "“Australian” nghĩa là người Úc, thuộc nước Úc.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy là người Nhật.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "She's Japanese.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: She's Japanese.",
        "level": 2
      },
      {
        "q": "Câu “What nationality is she?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Bạn nữ ấy mang quốc tịch gì?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn nữ ấy mang quốc tịch gì?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn nam ấy có tính cách như thế nào?",
        "options": [
          "What's he like?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What's he like?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “người Nhật, thuộc Nhật Bản”.",
        "options": [
          "American",
          "Australian",
          "Malaysian",
          "Japanese"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là người Nhật, thuộc Nhật Bản.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Is She's Japanese.",
          "Are She's Japanese.",
          "She's Japanese.",
          "Japanese. She's"
        ],
        "answer": 2,
        "why": "Câu đúng là: She's Japanese.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi quốc tịch của bạn nữ. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What nationality is she?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What nationality is she? để hỏi quốc tịch của bạn nữ.",
        "level": 3
      },
      {
        "q": "“He's helpful.” có nghĩa là gì?",
        "options": [
          "Bạn ấy hay giúp đỡ.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bạn ấy hay giúp đỡ.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Bạn ấy là người Nhật.”: She's ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "Japanese"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: She's Japanese.",
        "level": 3
      }
    ]
  },
  {
    "unit": 4,
    "title": "Our free-time activities",
    "vocab": [
      {
        "word": "go for a walk",
        "vi": "đi dạo",
        "art": "go for a walk"
      },
      {
        "word": "play the violin",
        "vi": "chơi đàn vi-ô-lông",
        "art": "play the violin"
      },
      {
        "word": "surf the Internet",
        "vi": "lướt Internet",
        "art": "surf the Internet"
      },
      {
        "word": "water the flowers",
        "vi": "tưới hoa",
        "art": "water the flowers"
      },
      {
        "word": "always",
        "vi": "luôn luôn",
        "art": "always"
      },
      {
        "word": "often",
        "vi": "thường xuyên",
        "art": "often"
      },
      {
        "word": "sometimes",
        "vi": "thỉnh thoảng",
        "art": "sometimes"
      },
      {
        "word": "usually",
        "vi": "thông thường",
        "art": "usually"
      }
    ],
    "patterns": [
      {
        "q": "What do you like doing in your free time?",
        "a": "I like playing the violin.",
        "qvi": "Bạn thích làm gì lúc rảnh?",
        "avi": "Mình thích chơi đàn vi-ô-lông."
      },
      {
        "q": "What do you do at the weekend?",
        "a": "I usually water the flowers.",
        "qvi": "Bạn làm gì vào cuối tuần?",
        "avi": "Mình thường tưới hoa."
      }
    ],
    "vi": "Hoạt động lúc rảnh của chúng em",
    "topic": 1,
    "situation": "Em muốn hỏi bạn thích làm gì lúc rảnh.",
    "reading": "What do you like doing in your free time? I like playing the violin.\nWhat do you do at the weekend? I usually water the flowers.",
    "id": 4,
    "number": "4",
    "label": "Unit 4",
    "slug": "unit-4",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Hoạt động lúc rảnh của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "go for a walk"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What do you like doing in your free time?"
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
        "q": "Từ nào có nghĩa là “đi dạo”?",
        "options": [
          "surf the Internet",
          "water the flowers",
          "go for a walk",
          "play the violin"
        ],
        "answer": 2,
        "why": "“go for a walk” có nghĩa là đi dạo.",
        "level": 1
      },
      {
        "q": "“play the violin” có nghĩa là gì?",
        "options": [
          "tưới hoa",
          "chơi đàn vi-ô-lông",
          "đi dạo",
          "lướt Internet"
        ],
        "answer": 1,
        "why": "“play the violin” nghĩa là chơi đàn vi-ô-lông.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình thích chơi đàn vi-ô-lông.",
        "options": [
          "I like playing the violin.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: I like playing the violin.",
        "level": 2
      },
      {
        "q": "Câu “What do you like doing in your free time?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Bạn thích làm gì lúc rảnh?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn thích làm gì lúc rảnh?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn làm gì vào cuối tuần?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "What do you do at the weekend?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What do you do at the weekend?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “lướt Internet”.",
        "options": [
          "water the flowers",
          "surf the Internet",
          "go for a walk",
          "play the violin"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là lướt Internet.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "I like playing the violin.",
          "violin. the playing like I",
          "like playing the violin. I",
          "I playing violin. like the"
        ],
        "answer": 0,
        "why": "Câu đúng là: I like playing the violin.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn thích làm gì lúc rảnh. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "What do you like doing in your free time?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu What do you like doing in your free time? để hỏi bạn thích làm gì lúc rảnh.",
        "level": 3
      },
      {
        "q": "“I usually water the flowers.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Mình thường tưới hoa.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình thường tưới hoa.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình thích chơi đàn vi-ô-lông.”: I like playing the ____.",
        "options": [
          "rainy",
          "violin",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: I like playing the violin.",
        "level": 3
      }
    ]
  },
  {
    "unit": 5,
    "title": "My future job",
    "vocab": [
      {
        "word": "firefighter",
        "vi": "lính cứu hỏa",
        "art": "firefighter"
      },
      {
        "word": "gardener",
        "vi": "người làm vườn",
        "art": "gardener"
      },
      {
        "word": "reporter",
        "vi": "phóng viên",
        "art": "reporter"
      },
      {
        "word": "writer",
        "vi": "nhà văn",
        "art": "writer"
      },
      {
        "word": "grow flowers",
        "vi": "trồng hoa",
        "art": "grow flowers"
      },
      {
        "word": "report the news",
        "vi": "đưa tin",
        "art": "report the news"
      },
      {
        "word": "teach children",
        "vi": "dạy trẻ em",
        "art": "teach children"
      },
      {
        "word": "write stories",
        "vi": "viết truyện",
        "art": "write stories"
      }
    ],
    "patterns": [
      {
        "q": "What would you like to be in the future?",
        "a": "I'd like to be a writer.",
        "qvi": "Bạn muốn làm nghề gì trong tương lai?",
        "avi": "Mình muốn trở thành nhà văn."
      },
      {
        "q": "Why would you like to be a writer?",
        "a": "Because I'd like to write stories.",
        "qvi": "Tại sao bạn muốn trở thành nhà văn?",
        "avi": "Bởi vì mình muốn viết truyện."
      }
    ],
    "vi": "Nghề nghiệp tương lai của em",
    "topic": 1,
    "situation": "Em muốn hỏi nghề nghiệp bạn mong muốn trong tương lai.",
    "reading": "What would you like to be in the future? I'd like to be a writer.\nWhy would you like to be a writer? Because I'd like to write stories.",
    "id": 5,
    "number": "5",
    "label": "Unit 5",
    "slug": "unit-5",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Nghề nghiệp tương lai của em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "firefighter"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What would you like to be in the future?"
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
        "q": "Từ nào có nghĩa là “lính cứu hỏa”?",
        "options": [
          "firefighter",
          "gardener",
          "reporter",
          "writer"
        ],
        "answer": 0,
        "why": "“firefighter” có nghĩa là lính cứu hỏa.",
        "level": 1
      },
      {
        "q": "“gardener” có nghĩa là gì?",
        "options": [
          "lính cứu hỏa",
          "phóng viên",
          "nhà văn",
          "người làm vườn"
        ],
        "answer": 3,
        "why": "“gardener” nghĩa là người làm vườn.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình muốn trở thành nhà văn.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "I'd like to be a writer.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: I'd like to be a writer.",
        "level": 2
      },
      {
        "q": "Câu “What would you like to be in the future?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Bạn muốn làm nghề gì trong tương lai?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn muốn làm nghề gì trong tương lai?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Tại sao bạn muốn trở thành nhà văn?",
        "options": [
          "Why would you like to be a writer?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: Why would you like to be a writer?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “phóng viên”.",
        "options": [
          "firefighter",
          "gardener",
          "writer",
          "reporter"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là phóng viên.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "like to be a writer. I'd",
          "I'd to a like be writer.",
          "I'd like to be a writer.",
          "writer. a be to like I'd"
        ],
        "answer": 2,
        "why": "Câu đúng là: I'd like to be a writer.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi nghề nghiệp bạn mong muốn trong tương lai. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What would you like to be in the future?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What would you like to be in the future? để hỏi nghề nghiệp bạn mong muốn trong tương lai.",
        "level": 3
      },
      {
        "q": "“Because I'd like to write stories.” có nghĩa là gì?",
        "options": [
          "Bởi vì mình muốn viết truyện.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bởi vì mình muốn viết truyện.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình muốn trở thành nhà văn.”: I'd like to be a ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "writer"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: I'd like to be a writer.",
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
        "word": "city",
        "vi": "thành phố",
        "art": "city"
      },
      {
        "word": "building",
        "vi": "tòa nhà",
        "art": "building"
      },
      {
        "word": "American",
        "vi": "người Mỹ, thuộc nước Mỹ",
        "art": "American"
      },
      {
        "word": "go for a walk",
        "vi": "đi dạo",
        "art": "go for a walk"
      },
      {
        "word": "firefighter",
        "vi": "lính cứu hỏa",
        "art": "firefighter"
      },
      {
        "word": "class",
        "vi": "lớp học",
        "art": "class"
      },
      {
        "word": "flat",
        "vi": "căn hộ",
        "art": "flat"
      },
      {
        "word": "Australian",
        "vi": "người Úc, thuộc nước Úc",
        "art": "Australian"
      },
      {
        "word": "play the violin",
        "vi": "chơi đàn vi-ô-lông",
        "art": "play the violin"
      },
      {
        "word": "gardener",
        "vi": "người làm vườn",
        "art": "gardener"
      },
      {
        "word": "countryside",
        "vi": "nông thôn",
        "art": "countryside"
      },
      {
        "word": "house",
        "vi": "ngôi nhà",
        "art": "house"
      },
      {
        "word": "Japanese",
        "vi": "người Nhật, thuộc Nhật Bản",
        "art": "Japanese"
      },
      {
        "word": "surf the Internet",
        "vi": "lướt Internet",
        "art": "surf the Internet"
      },
      {
        "word": "reporter",
        "vi": "phóng viên",
        "art": "reporter"
      }
    ],
    "patterns": [
      {
        "q": "Can you tell me about yourself?",
        "a": "I'm in class 5A. I live in the city.",
        "qvi": "Bạn có thể giới thiệu về bản thân không?",
        "avi": "Mình học lớp 5A. Mình sống ở thành phố."
      },
      {
        "q": "What nationality is she?",
        "a": "She's Japanese.",
        "qvi": "Bạn nữ ấy mang quốc tịch gì?",
        "avi": "Bạn ấy là người Nhật."
      }
    ],
    "reading": "I'm in class 5A. I live in the city.\nYes, I do.\nShe's Japanese.\nI like playing the violin.\nI'd like to be a writer.",
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
        "example": "Can you tell me about yourself?"
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
          "city",
          "class",
          "countryside",
          "dolphin"
        ],
        "answer": 0,
        "why": "“city” có nghĩa là thành phố.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình học lớp 5A. Mình sống ở thành phố.",
        "options": [
          "Yes, I do.",
          "It's 23 Green Street.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich."
        ],
        "answer": 2,
        "why": "Mẫu câu: I'm in class 5A. I live in the city.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “tòa nhà”?",
        "options": [
          "house",
          "tower",
          "building",
          "flat"
        ],
        "answer": 2,
        "why": "“building” có nghĩa là tòa nhà.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Có, mình có.",
        "options": [
          "Yes, I do.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "It's 23 Green Street."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, I do.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “người Mỹ, thuộc nước Mỹ”?",
        "options": [
          "American",
          "Australian",
          "Japanese",
          "Malaysian"
        ],
        "answer": 0,
        "why": "“American” có nghĩa là người Mỹ, thuộc nước Mỹ.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy là người Nhật.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "She's Japanese.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: She's Japanese.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “đi dạo”?",
        "options": [
          "surf the Internet",
          "water the flowers",
          "go for a walk",
          "play the violin"
        ],
        "answer": 2,
        "why": "“go for a walk” có nghĩa là đi dạo.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình thích chơi đàn vi-ô-lông.",
        "options": [
          "I like playing the violin.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: I like playing the violin.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “lính cứu hỏa”?",
        "options": [
          "firefighter",
          "gardener",
          "reporter",
          "writer"
        ],
        "answer": 0,
        "why": "“firefighter” có nghĩa là lính cứu hỏa.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình muốn trở thành nhà văn.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "I'd like to be a writer.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: I'd like to be a writer.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Địa chỉ của bạn là gì?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "What's your address?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What's your address?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi nghề nghiệp bạn mong muốn trong tương lai. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What would you like to be in the future?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What would you like to be in the future? để hỏi nghề nghiệp bạn mong muốn trong tương lai.",
        "level": 3
      }
    ]
  },
  {
    "unit": 6,
    "title": "Our school rooms",
    "vocab": [
      {
        "word": "first floor",
        "vi": "tầng một, phía trên tầng trệt",
        "art": "first floor"
      },
      {
        "word": "ground floor",
        "vi": "tầng trệt",
        "art": "ground floor"
      },
      {
        "word": "second floor",
        "vi": "tầng hai",
        "art": "second floor"
      },
      {
        "word": "third floor",
        "vi": "tầng ba",
        "art": "third floor"
      },
      {
        "word": "go along",
        "vi": "đi dọc theo",
        "art": "go along"
      },
      {
        "word": "go downstairs",
        "vi": "đi xuống cầu thang",
        "art": "go downstairs"
      },
      {
        "word": "go past",
        "vi": "đi ngang qua",
        "art": "go past"
      },
      {
        "word": "go upstairs",
        "vi": "đi lên cầu thang",
        "art": "go upstairs"
      }
    ],
    "patterns": [
      {
        "q": "Where's the library?",
        "a": "It's on the first floor.",
        "qvi": "Thư viện ở đâu?",
        "avi": "Nó ở tầng một, phía trên tầng trệt."
      },
      {
        "q": "Could you tell me the way to the computer room, please?",
        "a": "Go upstairs and go along the corridor.",
        "qvi": "Bạn có thể chỉ đường đến phòng máy tính giúp mình không?",
        "avi": "Đi lên cầu thang và đi dọc hành lang."
      }
    ],
    "vi": "Các phòng trong trường em",
    "topic": 2,
    "situation": "Em muốn hỏi vị trí thư viện.",
    "reading": "Where's the library? It's on the first floor.\nCould you tell me the way to the computer room, please? Go upstairs and go along the corridor.",
    "id": 7,
    "number": "6",
    "label": "Unit 6",
    "slug": "unit-6",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Các phòng trong trường em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "first floor"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where's the library?"
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
        "q": "Từ nào có nghĩa là “tầng một, phía trên tầng trệt”?",
        "options": [
          "second floor",
          "third floor",
          "first floor",
          "ground floor"
        ],
        "answer": 2,
        "why": "“first floor” có nghĩa là tầng một, phía trên tầng trệt.",
        "level": 1
      },
      {
        "q": "“ground floor” có nghĩa là gì?",
        "options": [
          "tầng ba",
          "tầng trệt",
          "tầng một, phía trên tầng trệt",
          "tầng hai"
        ],
        "answer": 1,
        "why": "“ground floor” nghĩa là tầng trệt.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Nó ở tầng một, phía trên tầng trệt.",
        "options": [
          "It's on the first floor.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's on the first floor.",
        "level": 2
      },
      {
        "q": "Câu “Where's the library?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Thư viện ở đâu?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Thư viện ở đâu?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn có thể chỉ đường đến phòng máy tính giúp mình không?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "Could you tell me the way to the computer room, please?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Could you tell me the way to the computer room, please?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “tầng hai”.",
        "options": [
          "third floor",
          "second floor",
          "first floor",
          "ground floor"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là tầng hai.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It's on the first floor.",
          "floor. first the on It's",
          "on the first floor. It's",
          "It's the floor. on first"
        ],
        "answer": 0,
        "why": "Câu đúng là: It's on the first floor.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi vị trí thư viện. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Where's the library?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Where's the library? để hỏi vị trí thư viện.",
        "level": 3
      },
      {
        "q": "“Go upstairs and go along the corridor.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Đi lên cầu thang và đi dọc hành lang.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Đi lên cầu thang và đi dọc hành lang.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Nó ở tầng một, phía trên tầng trệt.”: It's on the first ____.",
        "options": [
          "rainy",
          "floor",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It's on the first floor.",
        "level": 3
      }
    ]
  },
  {
    "unit": 7,
    "title": "Our favourite school activities",
    "vocab": [
      {
        "word": "do projects",
        "vi": "làm dự án",
        "art": "do projects"
      },
      {
        "word": "play games",
        "vi": "chơi trò chơi",
        "art": "play games"
      },
      {
        "word": "read books",
        "vi": "đọc sách",
        "art": "read books"
      },
      {
        "word": "solve maths problems",
        "vi": "giải các bài toán",
        "art": "solve maths problems"
      },
      {
        "word": "difficult",
        "vi": "khó",
        "art": "difficult"
      },
      {
        "word": "easy",
        "vi": "dễ",
        "art": "easy"
      },
      {
        "word": "fun",
        "vi": "vui",
        "art": "fun"
      },
      {
        "word": "good for group work",
        "vi": "tốt cho làm việc nhóm",
        "art": "good for group work"
      },
      {
        "word": "useful",
        "vi": "hữu ích",
        "art": "useful"
      },
      {
        "word": "interesting",
        "vi": "thú vị",
        "art": "interesting"
      }
    ],
    "patterns": [
      {
        "q": "What school activity does she like?",
        "a": "She likes doing projects.",
        "qvi": "Bạn nữ ấy thích hoạt động nào ở trường?",
        "avi": "Bạn ấy thích làm dự án."
      },
      {
        "q": "Why does she like doing projects?",
        "a": "Because she thinks it's good for group work.",
        "qvi": "Tại sao bạn nữ ấy thích làm dự án?",
        "avi": "Bởi vì bạn ấy nghĩ hoạt động đó tốt cho làm việc nhóm."
      }
    ],
    "vi": "Hoạt động yêu thích ở trường",
    "topic": 2,
    "situation": "Em muốn hỏi hoạt động ở trường mà bạn nữ yêu thích.",
    "reading": "What school activity does she like? She likes doing projects.\nWhy does she like doing projects? Because she thinks it's good for group work.",
    "id": 8,
    "number": "7",
    "label": "Unit 7",
    "slug": "unit-7",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Hoạt động yêu thích ở trường",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "do projects"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What school activity does she like?"
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
        "q": "Từ nào có nghĩa là “làm dự án”?",
        "options": [
          "do projects",
          "play games",
          "read books",
          "solve maths problems"
        ],
        "answer": 0,
        "why": "“do projects” có nghĩa là làm dự án.",
        "level": 1
      },
      {
        "q": "“play games” có nghĩa là gì?",
        "options": [
          "làm dự án",
          "đọc sách",
          "giải các bài toán",
          "chơi trò chơi"
        ],
        "answer": 3,
        "why": "“play games” nghĩa là chơi trò chơi.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy thích làm dự án.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "She likes doing projects.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: She likes doing projects.",
        "level": 2
      },
      {
        "q": "Câu “What school activity does she like?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Bạn nữ ấy thích hoạt động nào ở trường?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn nữ ấy thích hoạt động nào ở trường?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Tại sao bạn nữ ấy thích làm dự án?",
        "options": [
          "Why does she like doing projects?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: Why does she like doing projects?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “đọc sách”.",
        "options": [
          "do projects",
          "play games",
          "solve maths problems",
          "read books"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là đọc sách.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "likes doing projects. She",
          "She doing likes projects.",
          "She likes doing projects.",
          "projects. doing likes She"
        ],
        "answer": 2,
        "why": "Câu đúng là: She likes doing projects.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi hoạt động ở trường mà bạn nữ yêu thích. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What school activity does she like?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What school activity does she like? để hỏi hoạt động ở trường mà bạn nữ yêu thích.",
        "level": 3
      },
      {
        "q": "“Because she thinks it's good for group work.” có nghĩa là gì?",
        "options": [
          "Bởi vì bạn ấy nghĩ hoạt động đó tốt cho làm việc nhóm.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bởi vì bạn ấy nghĩ hoạt động đó tốt cho làm việc nhóm.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Bạn ấy thích làm dự án.”: She likes doing ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "projects"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: She likes doing projects.",
        "level": 3
      }
    ]
  },
  {
    "unit": 8,
    "title": "In our classroom",
    "vocab": [
      {
        "word": "above",
        "vi": "ở phía trên",
        "art": "above"
      },
      {
        "word": "beside",
        "vi": "ở bên cạnh",
        "art": "beside"
      },
      {
        "word": "in front of",
        "vi": "ở phía trước",
        "art": "in front of"
      },
      {
        "word": "under",
        "vi": "ở phía dưới",
        "art": "under"
      },
      {
        "word": "crayon",
        "vi": "bút sáp màu",
        "art": "crayon"
      },
      {
        "word": "glue stick",
        "vi": "thỏi hồ dán",
        "art": "glue stick"
      },
      {
        "word": "pencil sharpener",
        "vi": "gọt bút chì",
        "art": "pencil sharpener"
      },
      {
        "word": "set square",
        "vi": "ê ke",
        "art": "set square"
      }
    ],
    "patterns": [
      {
        "q": "Where are the crayons?",
        "a": "They're under the desk.",
        "qvi": "Những chiếc bút sáp màu ở đâu?",
        "avi": "Chúng ở dưới bàn học."
      },
      {
        "q": "Whose glue stick is this?",
        "a": "It's Mai's.",
        "qvi": "Thỏi hồ dán này là của ai?",
        "avi": "Là của Mai."
      }
    ],
    "vi": "Trong lớp học của chúng em",
    "topic": 2,
    "situation": "Em muốn hỏi vị trí các bút sáp màu.",
    "reading": "Where are the crayons? They're under the desk.\nWhose glue stick is this? It's Mai's.",
    "id": 9,
    "number": "8",
    "label": "Unit 8",
    "slug": "unit-8",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Trong lớp học của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "above"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where are the crayons?"
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
        "q": "Từ nào có nghĩa là “ở phía trên”?",
        "options": [
          "in front of",
          "under",
          "above",
          "beside"
        ],
        "answer": 2,
        "why": "“above” có nghĩa là ở phía trên.",
        "level": 1
      },
      {
        "q": "“beside” có nghĩa là gì?",
        "options": [
          "ở phía dưới",
          "ở bên cạnh",
          "ở phía trên",
          "ở phía trước"
        ],
        "answer": 1,
        "why": "“beside” nghĩa là ở bên cạnh.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Chúng ở dưới bàn học.",
        "options": [
          "They're under the desk.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: They're under the desk.",
        "level": 2
      },
      {
        "q": "Câu “Where are the crayons?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Những chiếc bút sáp màu ở đâu?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Những chiếc bút sáp màu ở đâu?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Thỏi hồ dán này là của ai?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "Whose glue stick is this?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Whose glue stick is this?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “ở phía trước”.",
        "options": [
          "under",
          "in front of",
          "above",
          "beside"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là ở phía trước.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "They're under the desk.",
          "desk. the under They're",
          "under the desk. They're",
          "They're the under desk."
        ],
        "answer": 0,
        "why": "Câu đúng là: They're under the desk.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi vị trí các bút sáp màu. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Where are the crayons?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Where are the crayons? để hỏi vị trí các bút sáp màu.",
        "level": 3
      },
      {
        "q": "“It's Mai's.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Là của Mai.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Là của Mai.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Chúng ở dưới bàn học.”: They're under the ____.",
        "options": [
          "rainy",
          "desk",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: They're under the desk.",
        "level": 3
      }
    ]
  },
  {
    "unit": 9,
    "title": "Our outdoor activities",
    "vocab": [
      {
        "word": "aquarium",
        "vi": "thủy cung",
        "art": "aquarium"
      },
      {
        "word": "campsite",
        "vi": "khu cắm trại",
        "art": "campsite"
      },
      {
        "word": "funfair",
        "vi": "hội chợ vui chơi",
        "art": "funfair"
      },
      {
        "word": "theatre",
        "vi": "nhà hát",
        "art": "theatre"
      },
      {
        "word": "dance around the campfire",
        "vi": "nhảy múa quanh lửa trại",
        "art": "dance around the campfire"
      },
      {
        "word": "listen to music",
        "vi": "nghe nhạc",
        "art": "listen to music"
      },
      {
        "word": "play chess",
        "vi": "chơi cờ vua",
        "art": "play chess"
      },
      {
        "word": "watch the fish",
        "vi": "ngắm cá",
        "art": "watch the fish"
      }
    ],
    "patterns": [
      {
        "q": "Were you at the campsite yesterday?",
        "a": "Yes, we were.",
        "qvi": "Hôm qua các bạn đã ở khu cắm trại phải không?",
        "avi": "Đúng, chúng mình đã ở đó."
      },
      {
        "q": "What did you do yesterday?",
        "a": "We danced around the campfire.",
        "qvi": "Hôm qua các bạn đã làm gì?",
        "avi": "Chúng mình đã nhảy múa quanh lửa trại."
      }
    ],
    "vi": "Hoạt động ngoài trời của chúng em",
    "topic": 2,
    "situation": "Em muốn hỏi các bạn có ở khu cắm trại hôm qua không.",
    "reading": "Were you at the campsite yesterday? Yes, we were.\nWhat did you do yesterday? We danced around the campfire.",
    "id": 10,
    "number": "9",
    "label": "Unit 9",
    "slug": "unit-9",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Hoạt động ngoài trời của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "aquarium"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Were you at the campsite yesterday?"
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
        "q": "Từ nào có nghĩa là “thủy cung”?",
        "options": [
          "aquarium",
          "campsite",
          "funfair",
          "theatre"
        ],
        "answer": 0,
        "why": "“aquarium” có nghĩa là thủy cung.",
        "level": 1
      },
      {
        "q": "“campsite” có nghĩa là gì?",
        "options": [
          "thủy cung",
          "hội chợ vui chơi",
          "nhà hát",
          "khu cắm trại"
        ],
        "answer": 3,
        "why": "“campsite” nghĩa là khu cắm trại.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, chúng mình đã ở đó.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "Yes, we were.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: Yes, we were.",
        "level": 2
      },
      {
        "q": "Câu “Were you at the campsite yesterday?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Hôm qua các bạn đã ở khu cắm trại phải không?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Hôm qua các bạn đã ở khu cắm trại phải không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Hôm qua các bạn đã làm gì?",
        "options": [
          "What did you do yesterday?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What did you do yesterday?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “hội chợ vui chơi”.",
        "options": [
          "aquarium",
          "campsite",
          "theatre",
          "funfair"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là hội chợ vui chơi.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "we were. Yes,",
          "Yes, were. we",
          "Yes, we were.",
          "were. we Yes,"
        ],
        "answer": 2,
        "why": "Câu đúng là: Yes, we were.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi các bạn có ở khu cắm trại hôm qua không. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "Were you at the campsite yesterday?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Were you at the campsite yesterday? để hỏi các bạn có ở khu cắm trại hôm qua không.",
        "level": 3
      },
      {
        "q": "“We danced around the campfire.” có nghĩa là gì?",
        "options": [
          "Chúng mình đã nhảy múa quanh lửa trại.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Chúng mình đã nhảy múa quanh lửa trại.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Đúng, chúng mình đã ở đó.”: Yes, we ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "were"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: Yes, we were.",
        "level": 3
      }
    ]
  },
  {
    "unit": 10,
    "title": "Our school trip",
    "vocab": [
      {
        "word": "Ba Na Hills",
        "vi": "Bà Nà Hills",
        "art": "Ba Na Hills"
      },
      {
        "word": "Bai Dinh Pagoda",
        "vi": "chùa Bái Đính",
        "art": "Bai Dinh Pagoda"
      },
      {
        "word": "Hoan Kiem Lake",
        "vi": "Hồ Hoàn Kiếm",
        "art": "Hoan Kiem Lake"
      },
      {
        "word": "Suoi Tien Theme Park",
        "vi": "Khu du lịch Suối Tiên",
        "art": "Suoi Tien Theme Park"
      },
      {
        "word": "plant trees",
        "vi": "trồng cây",
        "art": "plant trees"
      },
      {
        "word": "play games",
        "vi": "chơi trò chơi",
        "art": "play games"
      },
      {
        "word": "visit the old buildings",
        "vi": "thăm những tòa nhà cổ",
        "art": "visit the old buildings"
      },
      {
        "word": "walk around the lake",
        "vi": "đi dạo quanh hồ",
        "art": "walk around the lake"
      }
    ],
    "patterns": [
      {
        "q": "Did they go to Ba Na Hills?",
        "a": "Yes, they did.",
        "qvi": "Họ đã đến Bà Nà Hills phải không?",
        "avi": "Đúng, họ đã đến đó."
      },
      {
        "q": "What did they do there?",
        "a": "They visited the old buildings.",
        "qvi": "Họ đã làm gì ở đó?",
        "avi": "Họ đã thăm những tòa nhà cổ."
      }
    ],
    "vi": "Chuyến tham quan của trường em",
    "topic": 2,
    "situation": "Em muốn hỏi họ có đến Bà Nà Hills không.",
    "reading": "Did they go to Ba Na Hills? Yes, they did.\nWhat did they do there? They visited the old buildings.",
    "id": 11,
    "number": "10",
    "label": "Unit 10",
    "slug": "unit-10",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Chuyến tham quan của trường em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "Ba Na Hills"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Did they go to Ba Na Hills?"
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
        "q": "Từ nào có nghĩa là “Bà Nà Hills”?",
        "options": [
          "Hoan Kiem Lake",
          "Suoi Tien Theme Park",
          "Ba Na Hills",
          "Bai Dinh Pagoda"
        ],
        "answer": 2,
        "why": "“Ba Na Hills” có nghĩa là Bà Nà Hills.",
        "level": 1
      },
      {
        "q": "“Bai Dinh Pagoda” có nghĩa là gì?",
        "options": [
          "Khu du lịch Suối Tiên",
          "chùa Bái Đính",
          "Bà Nà Hills",
          "Hồ Hoàn Kiếm"
        ],
        "answer": 1,
        "why": "“Bai Dinh Pagoda” nghĩa là chùa Bái Đính.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, họ đã đến đó.",
        "options": [
          "Yes, they did.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, they did.",
        "level": 2
      },
      {
        "q": "Câu “Did they go to Ba Na Hills?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Họ đã đến Bà Nà Hills phải không?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Họ đã đến Bà Nà Hills phải không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Họ đã làm gì ở đó?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "What did they do there?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What did they do there?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “Hồ Hoàn Kiếm”.",
        "options": [
          "Suoi Tien Theme Park",
          "Hoan Kiem Lake",
          "Ba Na Hills",
          "Bai Dinh Pagoda"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là Hồ Hoàn Kiếm.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Yes, they did.",
          "did. they Yes,",
          "they did. Yes,",
          "Yes, did. they"
        ],
        "answer": 0,
        "why": "Câu đúng là: Yes, they did.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi họ có đến Bà Nà Hills không. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Did they go to Ba Na Hills?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Did they go to Ba Na Hills? để hỏi họ có đến Bà Nà Hills không.",
        "level": 3
      },
      {
        "q": "“They visited the old buildings.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Họ đã thăm những tòa nhà cổ.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Họ đã thăm những tòa nhà cổ.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Đúng, họ đã đến đó.”: Yes, they ____.",
        "options": [
          "rainy",
          "did",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: Yes, they did.",
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
        "word": "first floor",
        "vi": "tầng một, phía trên tầng trệt",
        "art": "first floor"
      },
      {
        "word": "do projects",
        "vi": "làm dự án",
        "art": "do projects"
      },
      {
        "word": "above",
        "vi": "ở phía trên",
        "art": "above"
      },
      {
        "word": "aquarium",
        "vi": "thủy cung",
        "art": "aquarium"
      },
      {
        "word": "Ba Na Hills",
        "vi": "Bà Nà Hills",
        "art": "Ba Na Hills"
      },
      {
        "word": "ground floor",
        "vi": "tầng trệt",
        "art": "ground floor"
      },
      {
        "word": "play games",
        "vi": "chơi trò chơi",
        "art": "play games"
      },
      {
        "word": "beside",
        "vi": "ở bên cạnh",
        "art": "beside"
      },
      {
        "word": "campsite",
        "vi": "khu cắm trại",
        "art": "campsite"
      },
      {
        "word": "Bai Dinh Pagoda",
        "vi": "chùa Bái Đính",
        "art": "Bai Dinh Pagoda"
      },
      {
        "word": "second floor",
        "vi": "tầng hai",
        "art": "second floor"
      },
      {
        "word": "read books",
        "vi": "đọc sách",
        "art": "read books"
      },
      {
        "word": "in front of",
        "vi": "ở phía trước",
        "art": "in front of"
      },
      {
        "word": "funfair",
        "vi": "hội chợ vui chơi",
        "art": "funfair"
      },
      {
        "word": "Hoan Kiem Lake",
        "vi": "Hồ Hoàn Kiếm",
        "art": "Hoan Kiem Lake"
      }
    ],
    "patterns": [
      {
        "q": "Where's the library?",
        "a": "It's on the first floor.",
        "qvi": "Thư viện ở đâu?",
        "avi": "Nó ở tầng một, phía trên tầng trệt."
      },
      {
        "q": "Where are the crayons?",
        "a": "They're under the desk.",
        "qvi": "Những chiếc bút sáp màu ở đâu?",
        "avi": "Chúng ở dưới bàn học."
      }
    ],
    "reading": "It's on the first floor.\nShe likes doing projects.\nThey're under the desk.\nYes, we were.\nYes, they did.",
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
        "example": "first floor"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where's the library?"
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
        "q": "Từ nào có nghĩa là “tầng một, phía trên tầng trệt”?",
        "options": [
          "second floor",
          "third floor",
          "first floor",
          "ground floor"
        ],
        "answer": 2,
        "why": "“first floor” có nghĩa là tầng một, phía trên tầng trệt.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Nó ở tầng một, phía trên tầng trệt.",
        "options": [
          "It's on the first floor.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's on the first floor.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “làm dự án”?",
        "options": [
          "do projects",
          "play games",
          "read books",
          "solve maths problems"
        ],
        "answer": 0,
        "why": "“do projects” có nghĩa là làm dự án.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy thích làm dự án.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "She likes doing projects.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: She likes doing projects.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “ở phía trên”?",
        "options": [
          "in front of",
          "under",
          "above",
          "beside"
        ],
        "answer": 2,
        "why": "“above” có nghĩa là ở phía trên.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Chúng ở dưới bàn học.",
        "options": [
          "They're under the desk.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: They're under the desk.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “thủy cung”?",
        "options": [
          "aquarium",
          "campsite",
          "funfair",
          "theatre"
        ],
        "answer": 0,
        "why": "“aquarium” có nghĩa là thủy cung.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, chúng mình đã ở đó.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "Yes, we were.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: Yes, we were.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “Bà Nà Hills”?",
        "options": [
          "Hoan Kiem Lake",
          "Suoi Tien Theme Park",
          "Ba Na Hills",
          "Bai Dinh Pagoda"
        ],
        "answer": 2,
        "why": "“Ba Na Hills” có nghĩa là Bà Nà Hills.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, họ đã đến đó.",
        "options": [
          "Yes, they did.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, they did.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Tại sao bạn nữ ấy thích làm dự án?",
        "options": [
          "Why does she like doing projects?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: Why does she like doing projects?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi họ có đến Bà Nà Hills không. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Did they go to Ba Na Hills?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Did they go to Ba Na Hills? để hỏi họ có đến Bà Nà Hills không.",
        "level": 3
      }
    ]
  },
  {
    "unit": 11,
    "title": "Family time",
    "vocab": [
      {
        "word": "buy souvenirs",
        "vi": "mua quà lưu niệm",
        "art": "buy souvenirs"
      },
      {
        "word": "collect seashells",
        "vi": "nhặt vỏ sò",
        "art": "collect seashells"
      },
      {
        "word": "eat seafood",
        "vi": "ăn hải sản",
        "art": "eat seafood"
      },
      {
        "word": "see some interesting places",
        "vi": "tham quan những nơi thú vị",
        "art": "see some interesting places"
      },
      {
        "word": "take a boat trip around the bay",
        "vi": "đi thuyền quanh vịnh",
        "art": "take a boat trip around the bay"
      },
      {
        "word": "walk on the beach",
        "vi": "đi dạo trên bãi biển",
        "art": "walk on the beach"
      }
    ],
    "patterns": [
      {
        "q": "Did you collect seashells?",
        "a": "Yes, I did.",
        "qvi": "Bạn đã nhặt vỏ sò phải không?",
        "avi": "Đúng, mình đã làm vậy."
      },
      {
        "q": "What did your family do in Ha Long Bay?",
        "a": "We took a boat trip around the bay.",
        "qvi": "Gia đình bạn đã làm gì ở vịnh Hạ Long?",
        "avi": "Chúng mình đã đi thuyền quanh vịnh."
      }
    ],
    "vi": "Thời gian bên gia đình",
    "topic": 3,
    "situation": "Em muốn hỏi bạn đã nhặt vỏ sò hay chưa.",
    "reading": "Did you collect seashells? Yes, I did.\nWhat did your family do in Ha Long Bay? We took a boat trip around the bay.",
    "id": 13,
    "number": "11",
    "label": "Unit 11",
    "slug": "unit-11",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Thời gian bên gia đình",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "buy souvenirs"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Did you collect seashells?"
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
        "q": "Từ nào có nghĩa là “mua quà lưu niệm”?",
        "options": [
          "buy souvenirs",
          "collect seashells",
          "eat seafood",
          "see some interesting places"
        ],
        "answer": 0,
        "why": "“buy souvenirs” có nghĩa là mua quà lưu niệm.",
        "level": 1
      },
      {
        "q": "“collect seashells” có nghĩa là gì?",
        "options": [
          "mua quà lưu niệm",
          "ăn hải sản",
          "tham quan những nơi thú vị",
          "nhặt vỏ sò"
        ],
        "answer": 3,
        "why": "“collect seashells” nghĩa là nhặt vỏ sò.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, mình đã làm vậy.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "Yes, I did.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: Yes, I did.",
        "level": 2
      },
      {
        "q": "Câu “Did you collect seashells?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Bạn đã nhặt vỏ sò phải không?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn đã nhặt vỏ sò phải không?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Gia đình bạn đã làm gì ở vịnh Hạ Long?",
        "options": [
          "What did your family do in Ha Long Bay?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What did your family do in Ha Long Bay?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “ăn hải sản”.",
        "options": [
          "buy souvenirs",
          "collect seashells",
          "see some interesting places",
          "eat seafood"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là ăn hải sản.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "I did. Yes,",
          "Yes, did. I",
          "Yes, I did.",
          "did. I Yes,"
        ],
        "answer": 2,
        "why": "Câu đúng là: Yes, I did.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn đã nhặt vỏ sò hay chưa. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "Did you collect seashells?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Did you collect seashells? để hỏi bạn đã nhặt vỏ sò hay chưa.",
        "level": 3
      },
      {
        "q": "“We took a boat trip around the bay.” có nghĩa là gì?",
        "options": [
          "Chúng mình đã đi thuyền quanh vịnh.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Chúng mình đã đi thuyền quanh vịnh.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Đúng, mình đã làm vậy.”: Yes, I ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "did"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: Yes, I did.",
        "level": 3
      }
    ]
  },
  {
    "unit": 12,
    "title": "Our Tet holiday",
    "vocab": [
      {
        "word": "buy roses",
        "vi": "mua hoa hồng",
        "art": "buy roses"
      },
      {
        "word": "buy a branch of peach blossoms",
        "vi": "mua một cành hoa đào",
        "art": "buy a branch of peach blossoms"
      },
      {
        "word": "decorate the house",
        "vi": "trang trí nhà",
        "art": "decorate the house"
      },
      {
        "word": "do the shopping",
        "vi": "đi mua sắm",
        "art": "do the shopping"
      },
      {
        "word": "make banh chung",
        "vi": "làm bánh chưng",
        "art": "make banh chung"
      },
      {
        "word": "make spring rolls",
        "vi": "làm nem rán",
        "art": "make spring rolls"
      },
      {
        "word": "fireworks show",
        "vi": "buổi trình diễn pháo hoa",
        "art": "fireworks show"
      },
      {
        "word": "flower festival",
        "vi": "lễ hội hoa",
        "art": "flower festival"
      },
      {
        "word": "New Year party",
        "vi": "tiệc năm mới",
        "art": "New Year party"
      }
    ],
    "patterns": [
      {
        "q": "Will you make banh chung for Tet?",
        "a": "Yes, I will.",
        "qvi": "Bạn sẽ làm bánh chưng dịp Tết chứ?",
        "avi": "Có, mình sẽ làm."
      },
      {
        "q": "Where will you go at Tet?",
        "a": "I'll go to a flower festival.",
        "qvi": "Bạn sẽ đi đâu vào dịp Tết?",
        "avi": "Mình sẽ đến một lễ hội hoa."
      }
    ],
    "vi": "Kì nghỉ Tết của chúng em",
    "topic": 3,
    "situation": "Em muốn hỏi bạn sẽ làm bánh chưng dịp Tết không.",
    "reading": "Will you make banh chung for Tet? Yes, I will.\nWhere will you go at Tet? I'll go to a flower festival.",
    "id": 14,
    "number": "12",
    "label": "Unit 12",
    "slug": "unit-12",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Kì nghỉ Tết của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "buy roses"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Will you make banh chung for Tet?"
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
        "q": "Từ nào có nghĩa là “mua hoa hồng”?",
        "options": [
          "decorate the house",
          "do the shopping",
          "buy roses",
          "buy a branch of peach blossoms"
        ],
        "answer": 2,
        "why": "“buy roses” có nghĩa là mua hoa hồng.",
        "level": 1
      },
      {
        "q": "“buy a branch of peach blossoms” có nghĩa là gì?",
        "options": [
          "đi mua sắm",
          "mua một cành hoa đào",
          "mua hoa hồng",
          "trang trí nhà"
        ],
        "answer": 1,
        "why": "“buy a branch of peach blossoms” nghĩa là mua một cành hoa đào.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Có, mình sẽ làm.",
        "options": [
          "Yes, I will.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, I will.",
        "level": 2
      },
      {
        "q": "Câu “Will you make banh chung for Tet?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Bạn sẽ làm bánh chưng dịp Tết chứ?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn sẽ làm bánh chưng dịp Tết chứ?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn sẽ đi đâu vào dịp Tết?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "Where will you go at Tet?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Where will you go at Tet?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “trang trí nhà”.",
        "options": [
          "do the shopping",
          "decorate the house",
          "buy roses",
          "buy a branch of peach blossoms"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là trang trí nhà.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "Yes, I will.",
          "will. I Yes,",
          "I will. Yes,",
          "Yes, will. I"
        ],
        "answer": 0,
        "why": "Câu đúng là: Yes, I will.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn sẽ làm bánh chưng dịp Tết không. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Will you make banh chung for Tet?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Will you make banh chung for Tet? để hỏi bạn sẽ làm bánh chưng dịp Tết không.",
        "level": 3
      },
      {
        "q": "“I'll go to a flower festival.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Mình sẽ đến một lễ hội hoa.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình sẽ đến một lễ hội hoa.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Có, mình sẽ làm.”: Yes, I ____.",
        "options": [
          "rainy",
          "will",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: Yes, I will.",
        "level": 3
      }
    ]
  },
  {
    "unit": 13,
    "title": "Our special days",
    "vocab": [
      {
        "word": "at Mid-Autumn Festival",
        "vi": "vào dịp Tết Trung thu",
        "art": "at Mid-Autumn Festival"
      },
      {
        "word": "on Children's Day",
        "vi": "vào ngày Quốc tế Thiếu nhi",
        "art": "on Children's Day"
      },
      {
        "word": "on Sports Day",
        "vi": "vào Ngày hội Thể thao",
        "art": "on Sports Day"
      },
      {
        "word": "on Teachers' Day",
        "vi": "vào Ngày Nhà giáo",
        "art": "on Teachers' Day"
      },
      {
        "word": "apple juice",
        "vi": "nước ép táo",
        "art": "apple juice"
      },
      {
        "word": "burgers",
        "vi": "bánh hamburger",
        "art": "burgers"
      },
      {
        "word": "milk tea",
        "vi": "trà sữa",
        "art": "milk tea"
      },
      {
        "word": "pizza",
        "vi": "bánh pizza",
        "art": "pizza"
      }
    ],
    "patterns": [
      {
        "q": "What will you do on Children's Day?",
        "a": "We'll have a party.",
        "qvi": "Các bạn sẽ làm gì vào ngày Quốc tế Thiếu nhi?",
        "avi": "Chúng mình sẽ tổ chức một bữa tiệc."
      },
      {
        "q": "What food will you have at the party?",
        "a": "We'll have burgers and pizza.",
        "qvi": "Các bạn sẽ ăn món gì ở bữa tiệc?",
        "avi": "Chúng mình sẽ ăn bánh hamburger và pizza."
      }
    ],
    "vi": "Những ngày đặc biệt của chúng em",
    "topic": 3,
    "situation": "Em muốn hỏi các bạn sẽ làm gì vào ngày Quốc tế Thiếu nhi.",
    "reading": "What will you do on Children's Day? We'll have a party.\nWhat food will you have at the party? We'll have burgers and pizza.",
    "id": 15,
    "number": "13",
    "label": "Unit 13",
    "slug": "unit-13",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Những ngày đặc biệt của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "at Mid-Autumn Festival"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What will you do on Children's Day?"
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
        "q": "Từ nào có nghĩa là “vào dịp Tết Trung thu”?",
        "options": [
          "at Mid-Autumn Festival",
          "on Children's Day",
          "on Sports Day",
          "on Teachers' Day"
        ],
        "answer": 0,
        "why": "“at Mid-Autumn Festival” có nghĩa là vào dịp Tết Trung thu.",
        "level": 1
      },
      {
        "q": "“on Children's Day” có nghĩa là gì?",
        "options": [
          "vào dịp Tết Trung thu",
          "vào Ngày hội Thể thao",
          "vào Ngày Nhà giáo",
          "vào ngày Quốc tế Thiếu nhi"
        ],
        "answer": 3,
        "why": "“on Children's Day” nghĩa là vào ngày Quốc tế Thiếu nhi.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Chúng mình sẽ tổ chức một bữa tiệc.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "We'll have a party.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: We'll have a party.",
        "level": 2
      },
      {
        "q": "Câu “What will you do on Children's Day?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Các bạn sẽ làm gì vào ngày Quốc tế Thiếu nhi?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Các bạn sẽ làm gì vào ngày Quốc tế Thiếu nhi?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Các bạn sẽ ăn món gì ở bữa tiệc?",
        "options": [
          "What food will you have at the party?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: What food will you have at the party?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “vào Ngày hội Thể thao”.",
        "options": [
          "at Mid-Autumn Festival",
          "on Children's Day",
          "on Teachers' Day",
          "on Sports Day"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là vào Ngày hội Thể thao.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "have a party. We'll",
          "We'll a have party.",
          "We'll have a party.",
          "party. a have We'll"
        ],
        "answer": 2,
        "why": "Câu đúng là: We'll have a party.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi các bạn sẽ làm gì vào ngày Quốc tế Thiếu nhi. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What will you do on Children's Day?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What will you do on Children's Day? để hỏi các bạn sẽ làm gì vào ngày Quốc tế Thiếu nhi.",
        "level": 3
      },
      {
        "q": "“We'll have burgers and pizza.” có nghĩa là gì?",
        "options": [
          "Chúng mình sẽ ăn bánh hamburger và pizza.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Chúng mình sẽ ăn bánh hamburger và pizza.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Chúng mình sẽ tổ chức một bữa tiệc.”: We'll have a ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "party"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: We'll have a party.",
        "level": 3
      }
    ]
  },
  {
    "unit": 14,
    "title": "Staying healthy",
    "vocab": [
      {
        "word": "do morning exercise",
        "vi": "tập thể dục buổi sáng",
        "art": "do morning exercise"
      },
      {
        "word": "do yoga",
        "vi": "tập yoga",
        "art": "do yoga"
      },
      {
        "word": "drink fresh juice",
        "vi": "uống nước ép tươi",
        "art": "drink fresh juice"
      },
      {
        "word": "eat healthy food",
        "vi": "ăn thức ăn lành mạnh",
        "art": "eat healthy food"
      },
      {
        "word": "eat vegetables",
        "vi": "ăn rau",
        "art": "eat vegetables"
      },
      {
        "word": "play sports",
        "vi": "chơi thể thao",
        "art": "play sports"
      },
      {
        "word": "every day",
        "vi": "mỗi ngày",
        "art": "every day"
      },
      {
        "word": "once a week",
        "vi": "mỗi tuần một lần",
        "art": "once a week"
      },
      {
        "word": "three times a week",
        "vi": "mỗi tuần ba lần",
        "art": "three times a week"
      },
      {
        "word": "twice a week",
        "vi": "mỗi tuần hai lần",
        "art": "twice a week"
      }
    ],
    "patterns": [
      {
        "q": "How does she stay healthy?",
        "a": "She eats healthy food.",
        "qvi": "Bạn nữ ấy giữ sức khỏe bằng cách nào?",
        "avi": "Bạn ấy ăn thức ăn lành mạnh."
      },
      {
        "q": "How often does he play sports?",
        "a": "He plays sports every day.",
        "qvi": "Bạn nam ấy chơi thể thao thường xuyên thế nào?",
        "avi": "Bạn ấy chơi thể thao mỗi ngày."
      }
    ],
    "vi": "Giữ gìn sức khỏe",
    "topic": 3,
    "situation": "Em muốn hỏi cách bạn nữ giữ sức khỏe.",
    "reading": "How does she stay healthy? She eats healthy food.\nHow often does he play sports? He plays sports every day.",
    "id": 16,
    "number": "14",
    "label": "Unit 14",
    "slug": "unit-14",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Giữ gìn sức khỏe",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "do morning exercise"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "How does she stay healthy?"
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
        "q": "Từ nào có nghĩa là “tập thể dục buổi sáng”?",
        "options": [
          "drink fresh juice",
          "eat healthy food",
          "do morning exercise",
          "do yoga"
        ],
        "answer": 2,
        "why": "“do morning exercise” có nghĩa là tập thể dục buổi sáng.",
        "level": 1
      },
      {
        "q": "“do yoga” có nghĩa là gì?",
        "options": [
          "ăn thức ăn lành mạnh",
          "tập yoga",
          "tập thể dục buổi sáng",
          "uống nước ép tươi"
        ],
        "answer": 1,
        "why": "“do yoga” nghĩa là tập yoga.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy ăn thức ăn lành mạnh.",
        "options": [
          "She eats healthy food.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: She eats healthy food.",
        "level": 2
      },
      {
        "q": "Câu “How does she stay healthy?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Bạn nữ ấy giữ sức khỏe bằng cách nào?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn nữ ấy giữ sức khỏe bằng cách nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn nam ấy chơi thể thao thường xuyên thế nào?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "How often does he play sports?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: How often does he play sports?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “uống nước ép tươi”.",
        "options": [
          "eat healthy food",
          "drink fresh juice",
          "do morning exercise",
          "do yoga"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là uống nước ép tươi.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "She eats healthy food.",
          "food. healthy eats She",
          "eats healthy food. She",
          "She healthy eats food."
        ],
        "answer": 0,
        "why": "Câu đúng là: She eats healthy food.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi cách bạn nữ giữ sức khỏe. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "How does she stay healthy?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu How does she stay healthy? để hỏi cách bạn nữ giữ sức khỏe.",
        "level": 3
      },
      {
        "q": "“He plays sports every day.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Bạn ấy chơi thể thao mỗi ngày.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Bạn ấy chơi thể thao mỗi ngày.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Bạn ấy ăn thức ăn lành mạnh.”: She eats healthy ____.",
        "options": [
          "rainy",
          "food",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: She eats healthy food.",
        "level": 3
      }
    ]
  },
  {
    "unit": 15,
    "title": "Our health",
    "vocab": [
      {
        "word": "headache",
        "vi": "đau đầu",
        "art": "headache"
      },
      {
        "word": "sore throat",
        "vi": "đau họng",
        "art": "sore throat"
      },
      {
        "word": "stomach ache",
        "vi": "đau bụng",
        "art": "stomach ache"
      },
      {
        "word": "toothache",
        "vi": "đau răng",
        "art": "toothache"
      },
      {
        "word": "drink warm water",
        "vi": "uống nước ấm",
        "art": "drink warm water"
      },
      {
        "word": "go to the dentist",
        "vi": "đến nha sĩ",
        "art": "go to the dentist"
      },
      {
        "word": "have a rest",
        "vi": "nghỉ ngơi",
        "art": "have a rest"
      },
      {
        "word": "take some medicine",
        "vi": "uống một ít thuốc",
        "art": "take some medicine"
      }
    ],
    "patterns": [
      {
        "q": "What's the matter?",
        "a": "I have a toothache.",
        "qvi": "Bạn bị làm sao vậy?",
        "avi": "Mình bị đau răng."
      },
      {
        "q": "You should go to the dentist.",
        "a": "Thanks for your advice.",
        "qvi": "Bạn nên đến nha sĩ.",
        "avi": "Cảm ơn lời khuyên của bạn."
      }
    ],
    "vi": "Sức khỏe của chúng em",
    "topic": 3,
    "situation": "Em muốn hỏi bạn bị làm sao.",
    "reading": "What's the matter? I have a toothache.\nYou should go to the dentist. Thanks for your advice.",
    "id": 17,
    "number": "15",
    "label": "Unit 15",
    "slug": "unit-15",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Sức khỏe của chúng em",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "headache"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What's the matter?"
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
        "q": "Từ nào có nghĩa là “đau đầu”?",
        "options": [
          "headache",
          "sore throat",
          "stomach ache",
          "toothache"
        ],
        "answer": 0,
        "why": "“headache” có nghĩa là đau đầu.",
        "level": 1
      },
      {
        "q": "“sore throat” có nghĩa là gì?",
        "options": [
          "đau đầu",
          "đau bụng",
          "đau răng",
          "đau họng"
        ],
        "answer": 3,
        "why": "“sore throat” nghĩa là đau họng.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình bị đau răng.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "I have a toothache.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: I have a toothache.",
        "level": 2
      },
      {
        "q": "Câu “What's the matter?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Bạn bị làm sao vậy?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn bị làm sao vậy?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn nên đến nha sĩ.",
        "options": [
          "You should go to the dentist.",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: You should go to the dentist.",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “đau bụng”.",
        "options": [
          "headache",
          "sore throat",
          "toothache",
          "stomach ache"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là đau bụng.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "have a toothache. I",
          "I a have toothache.",
          "I have a toothache.",
          "toothache. a have I"
        ],
        "answer": 2,
        "why": "Câu đúng là: I have a toothache.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi bạn bị làm sao. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What's the matter?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What's the matter? để hỏi bạn bị làm sao.",
        "level": 3
      },
      {
        "q": "“Thanks for your advice.” có nghĩa là gì?",
        "options": [
          "Cảm ơn lời khuyên của bạn.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Cảm ơn lời khuyên của bạn.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình bị đau răng.”: I have a ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "toothache"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: I have a toothache.",
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
        "word": "buy souvenirs",
        "vi": "mua quà lưu niệm",
        "art": "buy souvenirs"
      },
      {
        "word": "buy roses",
        "vi": "mua hoa hồng",
        "art": "buy roses"
      },
      {
        "word": "at Mid-Autumn Festival",
        "vi": "vào dịp Tết Trung thu",
        "art": "at Mid-Autumn Festival"
      },
      {
        "word": "do morning exercise",
        "vi": "tập thể dục buổi sáng",
        "art": "do morning exercise"
      },
      {
        "word": "headache",
        "vi": "đau đầu",
        "art": "headache"
      },
      {
        "word": "collect seashells",
        "vi": "nhặt vỏ sò",
        "art": "collect seashells"
      },
      {
        "word": "buy a branch of peach blossoms",
        "vi": "mua một cành hoa đào",
        "art": "buy a branch of peach blossoms"
      },
      {
        "word": "on Children's Day",
        "vi": "vào ngày Quốc tế Thiếu nhi",
        "art": "on Children's Day"
      },
      {
        "word": "do yoga",
        "vi": "tập yoga",
        "art": "do yoga"
      },
      {
        "word": "sore throat",
        "vi": "đau họng",
        "art": "sore throat"
      },
      {
        "word": "eat seafood",
        "vi": "ăn hải sản",
        "art": "eat seafood"
      },
      {
        "word": "decorate the house",
        "vi": "trang trí nhà",
        "art": "decorate the house"
      },
      {
        "word": "on Sports Day",
        "vi": "vào Ngày hội Thể thao",
        "art": "on Sports Day"
      },
      {
        "word": "drink fresh juice",
        "vi": "uống nước ép tươi",
        "art": "drink fresh juice"
      },
      {
        "word": "stomach ache",
        "vi": "đau bụng",
        "art": "stomach ache"
      }
    ],
    "patterns": [
      {
        "q": "Did you collect seashells?",
        "a": "Yes, I did.",
        "qvi": "Bạn đã nhặt vỏ sò phải không?",
        "avi": "Đúng, mình đã làm vậy."
      },
      {
        "q": "What will you do on Children's Day?",
        "a": "We'll have a party.",
        "qvi": "Các bạn sẽ làm gì vào ngày Quốc tế Thiếu nhi?",
        "avi": "Chúng mình sẽ tổ chức một bữa tiệc."
      }
    ],
    "reading": "Yes, I did.\nYes, I will.\nWe'll have a party.\nShe eats healthy food.\nI have a toothache.",
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
        "example": "buy souvenirs"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Did you collect seashells?"
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
        "q": "Từ nào có nghĩa là “mua quà lưu niệm”?",
        "options": [
          "buy souvenirs",
          "collect seashells",
          "eat seafood",
          "see some interesting places"
        ],
        "answer": 0,
        "why": "“buy souvenirs” có nghĩa là mua quà lưu niệm.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đúng, mình đã làm vậy.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "Yes, I did.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: Yes, I did.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “mua hoa hồng”?",
        "options": [
          "decorate the house",
          "do the shopping",
          "buy roses",
          "buy a branch of peach blossoms"
        ],
        "answer": 2,
        "why": "“buy roses” có nghĩa là mua hoa hồng.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Có, mình sẽ làm.",
        "options": [
          "Yes, I will.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: Yes, I will.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “vào dịp Tết Trung thu”?",
        "options": [
          "at Mid-Autumn Festival",
          "on Children's Day",
          "on Sports Day",
          "on Teachers' Day"
        ],
        "answer": 0,
        "why": "“at Mid-Autumn Festival” có nghĩa là vào dịp Tết Trung thu.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Chúng mình sẽ tổ chức một bữa tiệc.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "We'll have a party.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: We'll have a party.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “tập thể dục buổi sáng”?",
        "options": [
          "drink fresh juice",
          "eat healthy food",
          "do morning exercise",
          "do yoga"
        ],
        "answer": 2,
        "why": "“do morning exercise” có nghĩa là tập thể dục buổi sáng.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn ấy ăn thức ăn lành mạnh.",
        "options": [
          "She eats healthy food.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: She eats healthy food.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “đau đầu”?",
        "options": [
          "headache",
          "sore throat",
          "stomach ache",
          "toothache"
        ],
        "answer": 0,
        "why": "“headache” có nghĩa là đau đầu.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình bị đau răng.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "I have a toothache.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: I have a toothache.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn sẽ đi đâu vào dịp Tết?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "Where will you go at Tet?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: Where will you go at Tet?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi bạn bị làm sao. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What's the matter?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What's the matter? để hỏi bạn bị làm sao.",
        "level": 3
      }
    ]
  },
  {
    "unit": 16,
    "title": "Seasons and the weather",
    "vocab": [
      {
        "word": "autumn",
        "vi": "mùa thu",
        "art": "autumn"
      },
      {
        "word": "spring",
        "vi": "mùa xuân",
        "art": "spring"
      },
      {
        "word": "summer",
        "vi": "mùa hè",
        "art": "summer"
      },
      {
        "word": "winter",
        "vi": "mùa đông",
        "art": "winter"
      },
      {
        "word": "cold",
        "vi": "lạnh",
        "art": "cold"
      },
      {
        "word": "cool",
        "vi": "mát mẻ",
        "art": "cool"
      },
      {
        "word": "hot",
        "vi": "nóng",
        "art": "hot"
      },
      {
        "word": "warm",
        "vi": "ấm áp",
        "art": "warm"
      },
      {
        "word": "blouse",
        "vi": "áo kiểu nữ",
        "art": "blouse"
      },
      {
        "word": "jeans",
        "vi": "quần bò",
        "art": "jeans"
      },
      {
        "word": "jumper",
        "vi": "áo len chui đầu",
        "art": "jumper"
      },
      {
        "word": "trousers",
        "vi": "quần dài",
        "art": "trousers"
      }
    ],
    "patterns": [
      {
        "q": "How's the weather in Ha Noi in summer?",
        "a": "It's hot.",
        "qvi": "Thời tiết ở Hà Nội vào mùa hè như thế nào?",
        "avi": "Trời nóng."
      },
      {
        "q": "What do you usually wear in winter?",
        "a": "I wear a jumper.",
        "qvi": "Bạn thường mặc gì vào mùa đông?",
        "avi": "Mình mặc áo len chui đầu."
      }
    ],
    "vi": "Các mùa và thời tiết",
    "topic": 4,
    "situation": "Em muốn hỏi thời tiết Hà Nội vào mùa hè.",
    "reading": "How's the weather in Ha Noi in summer? It's hot.\nWhat do you usually wear in winter? I wear a jumper.",
    "id": 19,
    "number": "16",
    "label": "Unit 16",
    "slug": "unit-16",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Các mùa và thời tiết",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "autumn"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "How's the weather in Ha Noi in summer?"
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
        "q": "Từ nào có nghĩa là “mùa thu”?",
        "options": [
          "summer",
          "winter",
          "autumn",
          "spring"
        ],
        "answer": 2,
        "why": "“autumn” có nghĩa là mùa thu.",
        "level": 1
      },
      {
        "q": "“spring” có nghĩa là gì?",
        "options": [
          "mùa đông",
          "mùa xuân",
          "mùa thu",
          "mùa hè"
        ],
        "answer": 1,
        "why": "“spring” nghĩa là mùa xuân.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Trời nóng.",
        "options": [
          "It's hot.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's hot.",
        "level": 2
      },
      {
        "q": "Câu “How's the weather in Ha Noi in summer?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Thời tiết ở Hà Nội vào mùa hè như thế nào?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Thời tiết ở Hà Nội vào mùa hè như thế nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Bạn thường mặc gì vào mùa đông?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "What do you usually wear in winter?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What do you usually wear in winter?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “mùa hè”.",
        "options": [
          "winter",
          "summer",
          "autumn",
          "spring"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là mùa hè.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "It's hot.",
          "hot. It's",
          "Is It's hot.",
          "Are It's hot."
        ],
        "answer": 0,
        "why": "Câu đúng là: It's hot.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi thời tiết Hà Nội vào mùa hè. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "How's the weather in Ha Noi in summer?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu How's the weather in Ha Noi in summer? để hỏi thời tiết Hà Nội vào mùa hè.",
        "level": 3
      },
      {
        "q": "“I wear a jumper.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Mình mặc áo len chui đầu.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình mặc áo len chui đầu.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Trời nóng.”: It's ____.",
        "options": [
          "rainy",
          "hot",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: It's hot.",
        "level": 3
      }
    ]
  },
  {
    "unit": 17,
    "title": "Stories for children",
    "vocab": [
      {
        "word": "ant",
        "vi": "kiến",
        "art": "ant"
      },
      {
        "word": "crow",
        "vi": "quạ",
        "art": "crow"
      },
      {
        "word": "dwarfs",
        "vi": "những chú lùn",
        "art": "dwarfs"
      },
      {
        "word": "fox",
        "vi": "cáo",
        "art": "fox"
      },
      {
        "word": "grasshopper",
        "vi": "châu chấu",
        "art": "grasshopper"
      },
      {
        "word": "hare",
        "vi": "thỏ rừng",
        "art": "hare"
      },
      {
        "word": "Snow White",
        "vi": "Bạch Tuyết",
        "art": "Snow White"
      },
      {
        "word": "tortoise",
        "vi": "rùa cạn",
        "art": "tortoise"
      },
      {
        "word": "cook well",
        "vi": "nấu ăn giỏi",
        "art": "cook well"
      },
      {
        "word": "run fast",
        "vi": "chạy nhanh",
        "art": "run fast"
      },
      {
        "word": "sing beautifully",
        "vi": "hát hay",
        "art": "sing beautifully"
      },
      {
        "word": "work hard",
        "vi": "làm việc chăm chỉ",
        "art": "work hard"
      }
    ],
    "patterns": [
      {
        "q": "Who are the main characters in the story?",
        "a": "They're the hare and the tortoise.",
        "qvi": "Những nhân vật chính trong truyện là ai?",
        "avi": "Đó là thỏ rừng và rùa."
      },
      {
        "q": "How did the hare run?",
        "a": "He ran fast.",
        "qvi": "Thỏ rừng đã chạy như thế nào?",
        "avi": "Bạn ấy đã chạy nhanh."
      }
    ],
    "vi": "Truyện dành cho thiếu nhi",
    "topic": 4,
    "situation": "Em muốn hỏi nhân vật chính trong truyện.",
    "reading": "Who are the main characters in the story? They're the hare and the tortoise.\nHow did the hare run? He ran fast.",
    "id": 20,
    "number": "17",
    "label": "Unit 17",
    "slug": "unit-17",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Truyện dành cho thiếu nhi",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "ant"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Who are the main characters in the story?"
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
        "q": "Từ nào có nghĩa là “kiến”?",
        "options": [
          "ant",
          "crow",
          "dwarfs",
          "fox"
        ],
        "answer": 0,
        "why": "“ant” có nghĩa là kiến.",
        "level": 1
      },
      {
        "q": "“crow” có nghĩa là gì?",
        "options": [
          "kiến",
          "những chú lùn",
          "cáo",
          "quạ"
        ],
        "answer": 3,
        "why": "“crow” nghĩa là quạ.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đó là thỏ rừng và rùa.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "They're the hare and the tortoise.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: They're the hare and the tortoise.",
        "level": 2
      },
      {
        "q": "Câu “Who are the main characters in the story?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Những nhân vật chính trong truyện là ai?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Những nhân vật chính trong truyện là ai?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Thỏ rừng đã chạy như thế nào?",
        "options": [
          "How did the hare run?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: How did the hare run?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “những chú lùn”.",
        "options": [
          "ant",
          "crow",
          "fox",
          "dwarfs"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là những chú lùn.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "the hare and the tortoise. They're",
          "They're hare the the and tortoise.",
          "They're the hare and the tortoise.",
          "tortoise. the and hare the They're"
        ],
        "answer": 2,
        "why": "Câu đúng là: They're the hare and the tortoise.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi nhân vật chính trong truyện. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "Who are the main characters in the story?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu Who are the main characters in the story? để hỏi nhân vật chính trong truyện.",
        "level": 3
      },
      {
        "q": "“He ran fast.” có nghĩa là gì?",
        "options": [
          "Bạn ấy đã chạy nhanh.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Bạn ấy đã chạy nhanh.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Đó là thỏ rừng và rùa.”: They're the hare and the ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "tortoise"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: They're the hare and the tortoise.",
        "level": 3
      }
    ]
  },
  {
    "unit": 18,
    "title": "Means of transport",
    "vocab": [
      {
        "word": "Dragon Bridge",
        "vi": "Cầu Rồng",
        "art": "Dragon Bridge"
      },
      {
        "word": "Ha Noi Opera House",
        "vi": "Nhà hát Lớn Hà Nội",
        "art": "Ha Noi Opera House"
      },
      {
        "word": "Ho Chi Minh City Museum",
        "vi": "Bảo tàng Thành phố Hồ Chí Minh",
        "art": "Ho Chi Minh City Museum"
      },
      {
        "word": "Ngo Mon Square",
        "vi": "Quảng trường Ngọ Môn",
        "art": "Ngo Mon Square"
      },
      {
        "word": "by bicycle",
        "vi": "bằng xe đạp",
        "art": "by bicycle"
      },
      {
        "word": "by bus",
        "vi": "bằng xe buýt",
        "art": "by bus"
      },
      {
        "word": "by taxi",
        "vi": "bằng taxi",
        "art": "by taxi"
      },
      {
        "word": "on foot",
        "vi": "đi bộ",
        "art": "on foot"
      }
    ],
    "patterns": [
      {
        "q": "Where do you want to visit?",
        "a": "I want to visit Dragon Bridge.",
        "qvi": "Bạn muốn tham quan nơi nào?",
        "avi": "Mình muốn tham quan Cầu Rồng."
      },
      {
        "q": "How can I get to Dragon Bridge?",
        "a": "You can get there by bus.",
        "qvi": "Mình có thể đến Cầu Rồng bằng cách nào?",
        "avi": "Bạn có thể đến đó bằng xe buýt."
      }
    ],
    "vi": "Phương tiện giao thông",
    "topic": 4,
    "situation": "Em muốn hỏi địa điểm bạn muốn tham quan.",
    "reading": "Where do you want to visit? I want to visit Dragon Bridge.\nHow can I get to Dragon Bridge? You can get there by bus.",
    "id": 21,
    "number": "18",
    "label": "Unit 18",
    "slug": "unit-18",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Phương tiện giao thông",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "Dragon Bridge"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where do you want to visit?"
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
        "q": "Từ nào có nghĩa là “Cầu Rồng”?",
        "options": [
          "Ho Chi Minh City Museum",
          "Ngo Mon Square",
          "Dragon Bridge",
          "Ha Noi Opera House"
        ],
        "answer": 2,
        "why": "“Dragon Bridge” có nghĩa là Cầu Rồng.",
        "level": 1
      },
      {
        "q": "“Ha Noi Opera House” có nghĩa là gì?",
        "options": [
          "Quảng trường Ngọ Môn",
          "Nhà hát Lớn Hà Nội",
          "Cầu Rồng",
          "Bảo tàng Thành phố Hồ Chí Minh"
        ],
        "answer": 1,
        "why": "“Ha Noi Opera House” nghĩa là Nhà hát Lớn Hà Nội.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình muốn tham quan Cầu Rồng.",
        "options": [
          "I want to visit Dragon Bridge.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: I want to visit Dragon Bridge.",
        "level": 2
      },
      {
        "q": "Câu “Where do you want to visit?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Bạn muốn tham quan nơi nào?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Bạn muốn tham quan nơi nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình có thể đến Cầu Rồng bằng cách nào?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "How can I get to Dragon Bridge?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: How can I get to Dragon Bridge?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “Bảo tàng Thành phố Hồ Chí Minh”.",
        "options": [
          "Ngo Mon Square",
          "Ho Chi Minh City Museum",
          "Dragon Bridge",
          "Ha Noi Opera House"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là Bảo tàng Thành phố Hồ Chí Minh.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "I want to visit Dragon Bridge.",
          "Bridge. Dragon visit to want I",
          "want to visit Dragon Bridge. I",
          "I to Dragon want visit Bridge."
        ],
        "answer": 0,
        "why": "Câu đúng là: I want to visit Dragon Bridge.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi địa điểm bạn muốn tham quan. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Where do you want to visit?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Where do you want to visit? để hỏi địa điểm bạn muốn tham quan.",
        "level": 3
      },
      {
        "q": "“You can get there by bus.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Bạn có thể đến đó bằng xe buýt.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Bạn có thể đến đó bằng xe buýt.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình muốn tham quan Cầu Rồng.”: I want to visit Dragon ____.",
        "options": [
          "rainy",
          "Bridge",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: I want to visit Dragon Bridge.",
        "level": 3
      }
    ]
  },
  {
    "unit": 19,
    "title": "Places of interest",
    "vocab": [
      {
        "word": "beautiful",
        "vi": "đẹp",
        "art": "beautiful"
      },
      {
        "word": "exciting",
        "vi": "hào hứng, thú vị",
        "art": "exciting"
      },
      {
        "word": "fantastic",
        "vi": "tuyệt vời",
        "art": "fantastic"
      },
      {
        "word": "peaceful",
        "vi": "yên bình",
        "art": "peaceful"
      },
      {
        "word": "twenty-nine",
        "vi": "hai mươi chín",
        "art": "twenty-nine"
      },
      {
        "word": "forty",
        "vi": "bốn mươi",
        "art": "forty"
      },
      {
        "word": "one hundred",
        "vi": "một trăm",
        "art": "one hundred"
      },
      {
        "word": "one hundred and twenty-nine",
        "vi": "một trăm hai mươi chín",
        "art": "one hundred and twenty-nine"
      }
    ],
    "patterns": [
      {
        "q": "What do you think of Hoi An Old Town?",
        "a": "I think it's peaceful.",
        "qvi": "Bạn nghĩ gì về phố cổ Hội An?",
        "avi": "Mình nghĩ nơi đó yên bình."
      },
      {
        "q": "How far is it from your home to your school?",
        "a": "It's about two kilometres.",
        "qvi": "Từ nhà bạn đến trường của bạn bao xa?",
        "avi": "Khoảng hai ki-lô-mét."
      }
    ],
    "vi": "Những địa điểm thú vị",
    "topic": 4,
    "situation": "Em muốn hỏi ý kiến của bạn về phố cổ Hội An.",
    "reading": "What do you think of Hoi An Old Town? I think it's peaceful.\nHow far is it from your home to your school? It's about two kilometres.",
    "id": 22,
    "number": "19",
    "label": "Unit 19",
    "slug": "unit-19",
    "kind": "unit",
    "optional": false,
    "branch": "",
    "lead": "Những địa điểm thú vị",
    "goals": [
      "Hiểu từ vựng và mẫu câu theo Unit",
      "Luyện nghe, đọc, viết và nói theo tình huống",
      "Tự sửa lỗi qua phản hồi và trò chơi"
    ],
    "cards": [
      {
        "title": "Vocabulary",
        "body": "Quan sát tranh và luyện từ.",
        "example": "beautiful"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "What do you think of Hoi An Old Town?"
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
        "q": "Từ nào có nghĩa là “đẹp”?",
        "options": [
          "beautiful",
          "exciting",
          "fantastic",
          "peaceful"
        ],
        "answer": 0,
        "why": "“beautiful” có nghĩa là đẹp.",
        "level": 1
      },
      {
        "q": "“exciting” có nghĩa là gì?",
        "options": [
          "đẹp",
          "tuyệt vời",
          "yên bình",
          "hào hứng, thú vị"
        ],
        "answer": 3,
        "why": "“exciting” nghĩa là hào hứng, thú vị.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình nghĩ nơi đó yên bình.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "I think it's peaceful.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: I think it's peaceful.",
        "level": 2
      },
      {
        "q": "Câu “What do you think of Hoi An Old Town?” có nghĩa là gì?",
        "options": [
          "Bạn có sống trong tòa nhà này không?",
          "Bạn nghĩ gì về phố cổ Hội An?",
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?"
        ],
        "answer": 1,
        "why": "Nghĩa của câu: Bạn nghĩ gì về phố cổ Hội An?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Từ nhà bạn đến trường của bạn bao xa?",
        "options": [
          "How far is it from your home to your school?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: How far is it from your home to your school?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “tuyệt vời”.",
        "options": [
          "beautiful",
          "exciting",
          "peaceful",
          "fantastic"
        ],
        "answer": 3,
        "why": "Nghĩa đúng là tuyệt vời.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "think it's peaceful. I",
          "I it's think peaceful.",
          "I think it's peaceful.",
          "peaceful. it's think I"
        ],
        "answer": 2,
        "why": "Câu đúng là: I think it's peaceful.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi ý kiến của bạn về phố cổ Hội An. Em chọn câu nào?",
        "options": [
          "Do you live in this building?",
          "What do you think of Hoi An Old Town?",
          "Can you tell me about yourself?",
          "What's your favourite food?"
        ],
        "answer": 1,
        "why": "Dùng mẫu câu What do you think of Hoi An Old Town? để hỏi ý kiến của bạn về phố cổ Hội An.",
        "level": 3
      },
      {
        "q": "“It's about two kilometres.” có nghĩa là gì?",
        "options": [
          "Khoảng hai ki-lô-mét.",
          "Mình học lớp 5A. Mình sống ở thành phố.",
          "Đó là bánh mì kẹp.",
          "Có, mình có."
        ],
        "answer": 0,
        "why": "Nghĩa của câu: Khoảng hai ki-lô-mét.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình nghĩ nơi đó yên bình.”: I think it's ____.",
        "options": [
          "school",
          "Tuesday",
          "rainy",
          "peaceful"
        ],
        "answer": 3,
        "why": "Câu đầy đủ: I think it's peaceful.",
        "level": 3
      }
    ]
  },
  {
    "unit": 20,
    "title": "Our summer holidays",
    "vocab": [
      {
        "word": "Dam Sen Aquarium",
        "vi": "Thủy cung Đầm Sen",
        "art": "Dam Sen Aquarium"
      },
      {
        "word": "Huong River",
        "vi": "sông Hương",
        "art": "Huong River"
      },
      {
        "word": "Phong Nha Cave",
        "vi": "động Phong Nha",
        "art": "Phong Nha Cave"
      },
      {
        "word": "Phu Quoc Island",
        "vi": "đảo Phú Quốc",
        "art": "Phu Quoc Island"
      },
      {
        "word": "go camping",
        "vi": "đi cắm trại",
        "art": "go camping"
      },
      {
        "word": "join a music club",
        "vi": "tham gia câu lạc bộ âm nhạc",
        "art": "join a music club"
      },
      {
        "word": "practise swimming",
        "vi": "luyện tập bơi",
        "art": "practise swimming"
      },
      {
        "word": "visit an eco-farm",
        "vi": "thăm trang trại sinh thái",
        "art": "visit an eco-farm"
      }
    ],
    "patterns": [
      {
        "q": "Where are you going to visit this summer?",
        "a": "I'm going to visit Phong Nha Cave.",
        "qvi": "Mùa hè này bạn dự định tham quan nơi nào?",
        "avi": "Mình dự định tham quan động Phong Nha."
      },
      {
        "q": "What are you going to do this summer?",
        "a": "I'm going to practise swimming.",
        "qvi": "Mùa hè này bạn dự định làm gì?",
        "avi": "Mình dự định luyện tập bơi."
      }
    ],
    "vi": "Kì nghỉ hè của chúng em",
    "topic": 4,
    "situation": "Em muốn hỏi nơi bạn dự định tham quan mùa hè này.",
    "reading": "Where are you going to visit this summer? I'm going to visit Phong Nha Cave.\nWhat are you going to do this summer? I'm going to practise swimming.",
    "id": 23,
    "number": "20",
    "label": "Unit 20",
    "slug": "unit-20",
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
        "example": "Dam Sen Aquarium"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "Where are you going to visit this summer?"
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
        "q": "Từ nào có nghĩa là “Thủy cung Đầm Sen”?",
        "options": [
          "Phong Nha Cave",
          "Phu Quoc Island",
          "Dam Sen Aquarium",
          "Huong River"
        ],
        "answer": 2,
        "why": "“Dam Sen Aquarium” có nghĩa là Thủy cung Đầm Sen.",
        "level": 1
      },
      {
        "q": "“Huong River” có nghĩa là gì?",
        "options": [
          "đảo Phú Quốc",
          "sông Hương",
          "Thủy cung Đầm Sen",
          "động Phong Nha"
        ],
        "answer": 1,
        "why": "“Huong River” nghĩa là sông Hương.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình dự định tham quan động Phong Nha.",
        "options": [
          "I'm going to visit Phong Nha Cave.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: I'm going to visit Phong Nha Cave.",
        "level": 2
      },
      {
        "q": "Câu “Where are you going to visit this summer?” có nghĩa là gì?",
        "options": [
          "Bạn có thể giới thiệu về bản thân không?",
          "Món ăn yêu thích của bạn là gì?",
          "Bạn có sống trong tòa nhà này không?",
          "Mùa hè này bạn dự định tham quan nơi nào?"
        ],
        "answer": 3,
        "why": "Nghĩa của câu: Mùa hè này bạn dự định tham quan nơi nào?",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mùa hè này bạn dự định làm gì?",
        "options": [
          "What's your favourite food?",
          "Do you live in this building?",
          "What are you going to do this summer?",
          "Can you tell me about yourself?"
        ],
        "answer": 2,
        "why": "Mẫu câu: What are you going to do this summer?",
        "level": 2
      },
      {
        "q": "Chọn từ/cụm từ có nghĩa là “động Phong Nha”.",
        "options": [
          "Phu Quoc Island",
          "Phong Nha Cave",
          "Dam Sen Aquarium",
          "Huong River"
        ],
        "answer": 1,
        "why": "Nghĩa đúng là động Phong Nha.",
        "level": 1
      },
      {
        "q": "Chọn câu có thứ tự từ đúng.",
        "options": [
          "I'm going to visit Phong Nha Cave.",
          "Cave. Nha Phong visit to going I'm",
          "going to visit Phong Nha Cave. I'm",
          "I'm to Phong Cave. going visit Nha"
        ],
        "answer": 0,
        "why": "Câu đúng là: I'm going to visit Phong Nha Cave.",
        "level": 3
      },
      {
        "q": "Em muốn hỏi nơi bạn dự định tham quan mùa hè này. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Where are you going to visit this summer?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Where are you going to visit this summer? để hỏi nơi bạn dự định tham quan mùa hè này.",
        "level": 3
      },
      {
        "q": "“I'm going to practise swimming.” có nghĩa là gì?",
        "options": [
          "Đó là bánh mì kẹp.",
          "Có, mình có.",
          "Mình dự định luyện tập bơi.",
          "Mình học lớp 5A. Mình sống ở thành phố."
        ],
        "answer": 2,
        "why": "Nghĩa của câu: Mình dự định luyện tập bơi.",
        "level": 2
      },
      {
        "q": "Điền từ để câu diễn đạt đúng ý “Mình dự định tham quan động Phong Nha.”: I'm going to visit Phong Nha ____.",
        "options": [
          "rainy",
          "Cave",
          "school",
          "Tuesday"
        ],
        "answer": 1,
        "why": "Câu đầy đủ: I'm going to visit Phong Nha Cave.",
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
        "word": "autumn",
        "vi": "mùa thu",
        "art": "autumn"
      },
      {
        "word": "ant",
        "vi": "kiến",
        "art": "ant"
      },
      {
        "word": "Dragon Bridge",
        "vi": "Cầu Rồng",
        "art": "Dragon Bridge"
      },
      {
        "word": "beautiful",
        "vi": "đẹp",
        "art": "beautiful"
      },
      {
        "word": "Dam Sen Aquarium",
        "vi": "Thủy cung Đầm Sen",
        "art": "Dam Sen Aquarium"
      },
      {
        "word": "spring",
        "vi": "mùa xuân",
        "art": "spring"
      },
      {
        "word": "crow",
        "vi": "quạ",
        "art": "crow"
      },
      {
        "word": "Ha Noi Opera House",
        "vi": "Nhà hát Lớn Hà Nội",
        "art": "Ha Noi Opera House"
      },
      {
        "word": "exciting",
        "vi": "hào hứng, thú vị",
        "art": "exciting"
      },
      {
        "word": "Huong River",
        "vi": "sông Hương",
        "art": "Huong River"
      },
      {
        "word": "summer",
        "vi": "mùa hè",
        "art": "summer"
      },
      {
        "word": "dwarfs",
        "vi": "những chú lùn",
        "art": "dwarfs"
      },
      {
        "word": "Ho Chi Minh City Museum",
        "vi": "Bảo tàng Thành phố Hồ Chí Minh",
        "art": "Ho Chi Minh City Museum"
      },
      {
        "word": "fantastic",
        "vi": "tuyệt vời",
        "art": "fantastic"
      },
      {
        "word": "Phong Nha Cave",
        "vi": "động Phong Nha",
        "art": "Phong Nha Cave"
      }
    ],
    "patterns": [
      {
        "q": "How's the weather in Ha Noi in summer?",
        "a": "It's hot.",
        "qvi": "Thời tiết ở Hà Nội vào mùa hè như thế nào?",
        "avi": "Trời nóng."
      },
      {
        "q": "Where do you want to visit?",
        "a": "I want to visit Dragon Bridge.",
        "qvi": "Bạn muốn tham quan nơi nào?",
        "avi": "Mình muốn tham quan Cầu Rồng."
      }
    ],
    "reading": "It's hot.\nThey're the hare and the tortoise.\nI want to visit Dragon Bridge.\nI think it's peaceful.\nI'm going to visit Phong Nha Cave.",
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
        "example": "autumn"
      },
      {
        "title": "Sentence",
        "body": "Luyện cả câu trong ngữ cảnh.",
        "example": "How's the weather in Ha Noi in summer?"
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
        "q": "Từ nào có nghĩa là “mùa thu”?",
        "options": [
          "summer",
          "winter",
          "autumn",
          "spring"
        ],
        "answer": 2,
        "why": "“autumn” có nghĩa là mùa thu.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Trời nóng.",
        "options": [
          "It's hot.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: It's hot.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “kiến”?",
        "options": [
          "ant",
          "crow",
          "dwarfs",
          "fox"
        ],
        "answer": 0,
        "why": "“ant” có nghĩa là kiến.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Đó là thỏ rừng và rùa.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "They're the hare and the tortoise.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: They're the hare and the tortoise.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “Cầu Rồng”?",
        "options": [
          "Ho Chi Minh City Museum",
          "Ngo Mon Square",
          "Dragon Bridge",
          "Ha Noi Opera House"
        ],
        "answer": 2,
        "why": "“Dragon Bridge” có nghĩa là Cầu Rồng.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình muốn tham quan Cầu Rồng.",
        "options": [
          "I want to visit Dragon Bridge.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: I want to visit Dragon Bridge.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “đẹp”?",
        "options": [
          "beautiful",
          "exciting",
          "fantastic",
          "peaceful"
        ],
        "answer": 0,
        "why": "“beautiful” có nghĩa là đẹp.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình nghĩ nơi đó yên bình.",
        "options": [
          "It's a sandwich.",
          "Yes, I do.",
          "I think it's peaceful.",
          "I'm in class 5A. I live in the city."
        ],
        "answer": 2,
        "why": "Mẫu câu: I think it's peaceful.",
        "level": 2
      },
      {
        "q": "Từ nào có nghĩa là “Thủy cung Đầm Sen”?",
        "options": [
          "Phong Nha Cave",
          "Phu Quoc Island",
          "Dam Sen Aquarium",
          "Huong River"
        ],
        "answer": 2,
        "why": "“Dam Sen Aquarium” có nghĩa là Thủy cung Đầm Sen.",
        "level": 1
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Mình dự định tham quan động Phong Nha.",
        "options": [
          "I'm going to visit Phong Nha Cave.",
          "I'm in class 5A. I live in the city.",
          "It's a sandwich.",
          "Yes, I do."
        ],
        "answer": 0,
        "why": "Mẫu câu: I'm going to visit Phong Nha Cave.",
        "level": 2
      },
      {
        "q": "Chọn câu tiếng Anh đúng với ý: Thỏ rừng đã chạy như thế nào?",
        "options": [
          "How did the hare run?",
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?"
        ],
        "answer": 0,
        "why": "Mẫu câu: How did the hare run?",
        "level": 2
      },
      {
        "q": "Em muốn hỏi nơi bạn dự định tham quan mùa hè này. Em chọn câu nào?",
        "options": [
          "Can you tell me about yourself?",
          "What's your favourite food?",
          "Do you live in this building?",
          "Where are you going to visit this summer?"
        ],
        "answer": 3,
        "why": "Dùng mẫu câu Where are you going to visit this summer? để hỏi nơi bạn dự định tham quan mùa hè này.",
        "level": 3
      }
    ]
  }
];
