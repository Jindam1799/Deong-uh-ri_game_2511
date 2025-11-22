const sentenceData = {
  day1: [
    // 1번
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '환경이 깨끗하다.',
      chinese: {
        hanzi: ['环境', '干净'],
        pinyin: ['huánjìng', 'gānjìng'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '환경이 점점 깨끗해지다.',
      chinese: {
        hanzi: ['环境', '越来越', '干净'],
        pinyin: ['huánjìng', 'yuèláiyuè', 'gānjìng'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: '이곳의 환경이 점점 깨끗해지고 있다.',
      chinese: {
        hanzi: ['这里', '的', '环境', '越来越', '干净'],
        pinyin: ['zhèlǐ', 'de', 'huánjìng', 'yuèláiyuè', 'gānjìng'],
      },
    },

    // 2번
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '생수가 있다.',
      chinese: {
        hanzi: ['有', '矿泉水'],
        pinyin: ['yǒu', 'kuàngquánshuǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '생수 다섯 병이 있다.',
      chinese: {
        hanzi: ['有', '五', '瓶', '矿泉水'],
        pinyin: ['yǒu', 'wǔ', 'píng', 'kuàngquánshuǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '비닐봉지 안에 생수 다섯 병이 있다.',
      chinese: {
        hanzi: ['塑料袋里', '有', '五', '瓶', '矿泉水'],
        pinyin: ['sùliàodài lǐ', 'yǒu', 'wǔ', 'píng', 'kuàngquánshuǐ'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: '이 비닐봉지 안에 생수 다섯 병이 있다.',
      chinese: {
        hanzi: ['这个', '塑料袋', '里', '有', '五', '瓶', '矿泉水'],
        pinyin: [
          'zhège',
          'sùliàodài',
          'lǐ',
          'yǒu',
          'wǔ',
          'píng',
          'kuàngquánshuǐ',
        ],
      },
    },

    // 3번
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '좋은 습관.',
      chinese: {
        hanzi: ['好', '习惯'],
        pinyin: ['hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '일찍 일어나는 좋은 습관.',
      chinese: {
        hanzi: ['早起', '的', '好', '习惯'],
        pinyin: ['zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '매일 일찍 일어나는 좋은 습관.',
      chinese: {
        hanzi: ['每天', '早起', '的', '好', '习惯'],
        pinyin: ['měitiān', 'zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: false,
      korean: '매일 일찍 일어나는 좋은 습관을 기르다.',
      chinese: {
        hanzi: ['养成', '每天', '早起', '的', '好', '习惯'],
        pinyin: ['xíngchéng', 'měitiān', 'zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: false,
      korean: '매일 일찍 일어나는 좋은 습관을 길렀다.',
      chinese: {
        hanzi: ['养成', '了', '每天', '早起', '的', '好', '习惯'],
        pinyin: ['xíngchéng', 'le', 'měitiān', 'zǎo qǐ', 'de', 'hǎo', 'xíguàn'],
      },
    },
    {
      id: 'sentence3',
      level: 6,
      isFinal: true,
      korean: '그는 매일 일찍 일어나는 좋은 습관을 길렀다.',
      chinese: {
        hanzi: ['他', '养成', '了', '每天', '早起', '的', '好', '习惯'],
        pinyin: [
          'tā',
          'xíngchéng',
          'le',
          'měitiān',
          'zǎo qǐ',
          'de',
          'hǎo',
          'xíguàn',
        ],
      },
    },

    // 4번
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '서로 돕다.',
      chinese: {
        hanzi: ['互相', '帮助'],
        pinyin: ['xiānghù', 'bāngzhù'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '서로 도와야 한다.',
      chinese: {
        hanzi: ['要', '互相', '帮助'],
        pinyin: ['yào', 'xiānghù', 'bāngzhù'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '친구 사이.',
      chinese: {
        hanzi: ['朋友', '之间'],
        pinyin: ['péngyou', 'zhījiān'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: '친구 사이에는 서로 도와야 한다.',
      chinese: {
        hanzi: ['朋友', '之间', '要', '互相', '帮助'],
        pinyin: ['péngyou', 'zhījiān', 'yào', 'xiānghù', 'bāngzhù'],
      },
    },

    // 5번
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '환경을 보호하다.',
      chinese: {
        hanzi: ['保护', '环境'],
        pinyin: ['bǎohù', 'huánjìng'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '환경 보호는 임무이다.',
      chinese: {
        hanzi: ['保护', '环境', '是', '任务'],
        pinyin: ['bǎohù', 'huánjìng', 'shì', 'rènwu'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: false,
      korean: '모든 사람의 임무.',
      chinese: {
        hanzi: ['每', '个', '人', '的', '任务'],
        pinyin: ['měi', 'ge', 'rén', 'de', 'rènwu'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: true,
      korean: '환경을 보호하는 것은 모든 사람의 임무이다.',
      chinese: {
        hanzi: ['保护', '环境', '是', '每', '个', '人', '的', '任务'],
        pinyin: ['bǎohù', 'huánjìng', 'shì', 'měi', 'ge', 'rén', 'de', 'rènwu'],
      },
    },
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '감기가 심하다.',
      chinese: {
        hanzi: ['感冒', '得', '严重'],
        pinyin: ['gǎnmào', 'de', 'yánzhòng'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '감기가 너무 심하다.',
      chinese: {
        hanzi: ['感冒', '得', '太', '严重'],
        pinyin: ['gǎnmào', 'de', 'tài', 'yánzhòng'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: false,
      korean: '요즘 감기가 너무 심하다.',
      chinese: {
        hanzi: ['最近', '感冒', '得', '太', '严重', '了'],
        pinyin: ['zuìjìn', 'gǎnmào', 'de', 'tài', 'yánzhòng', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: true,
      korean: '너 요즘 감기가 너무 심하네.',
      chinese: {
        hanzi: ['你', '最近', '感冒', '得', '太', '严重', '了'],
        pinyin: ['nǐ', 'zuìjìn', 'gǎnmào', 'de', 'tài', 'yánzhòng', 'le'],
      },
    },
    // 7번
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '문자를 보내다.',
      chinese: {
        hanzi: ['发', '短信'],
        pinyin: ['fā', 'duǎnxìn'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '문자를 보냈다.',
      chinese: {
        hanzi: ['发', '短信', '了'],
        pinyin: ['fā', 'duǎnxìn', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '엄마에게 문자를 보냈다.',
      chinese: {
        hanzi: ['给', '妈妈', '发', '短信', '了'],
        pinyin: ['gěi', 'māma', 'fā', 'duǎnxìn', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: false,
      korean: '엄마에게 문자를 보냈니?',
      chinese: {
        hanzi: ['给', '妈妈', '发', '短信', '了', '吗'],
        pinyin: ['gěi', 'māma', 'fā', 'duǎnxìn', 'le', 'ma'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: true,
      korean: '너 엄마에게 문자를 보냈니?',
      chinese: {
        hanzi: ['你', '给', '妈妈', '发', '短信', '了', '吗'],
        pinyin: ['nǐ', 'gěi', 'māma', 'fā', 'duǎnxìn', 'le', 'ma'],
      },
    },

    // 8번
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '평소보다 많다.',
      chinese: {
        hanzi: ['比', '平时', '多'],
        pinyin: ['bǐ', 'píngshí', 'duō'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '평소보다 많아졌다.',
      chinese: {
        hanzi: ['比', '平时', '多', '了'],
        pinyin: ['bǐ', 'píngshí', 'duō', 'le'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '평소보다 두 배 많아졌다.',
      chinese: {
        hanzi: ['比', '平时', '多', '了', '一', '倍'],
        pinyin: ['bǐ', 'píngshí', 'duō', 'le', 'yī', 'bèi'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '공원에 가다.',
      chinese: {
        hanzi: ['去', '公园'],
        pinyin: ['qù', 'gōngyuán'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '공원에 가는 사람.',
      chinese: {
        hanzi: ['去', '公园', '的人'],
        pinyin: ['qù', 'gōngyuán', 'de', 'rén'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: true,
      korean: '공원에 가는 사람이 평소보다 두 배 많아졌다..',
      chinese: {
        hanzi: ['去', '公园', '的', '人', '比', '平时', '多', '了', '一', '倍'],
        pinyin: [
          'qù',
          'gōngyuán',
          'de',
          'rén',
          'bǐ',
          'píngshí',
          'duō',
          'le',
          'yī',
          'bèi',
        ],
      },
    },
    // 9번
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '꺼내다.',
      chinese: {
        hanzi: ['拿', '出来'],
        pinyin: ['ná', 'chūlai'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '여권을 꺼내다.',
      chinese: {
        hanzi: ['把', '护照', '拿', '出来'],
        pinyin: ['bǎ', 'hùzhào', 'ná', 'chūlai'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: false,
      korean: '당신은 여권을 꺼내세요.',
      chinese: {
        hanzi: ['你', '把', '护照', '拿', '出来'],
        pinyin: ['nǐ', 'bǎ', 'hùzhào', 'ná', 'chūlai'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: true,
      korean: '번거로우시겠지만 (당신은) 여권을 꺼내 주세요.',
      chinese: {
        hanzi: ['麻烦', '您', '把', '护照', '拿', '出来'],
        pinyin: ['mánfàn', 'nín', 'bǎ', 'hùzhào', 'ná', 'chūlai'],
      },
    },
    // 10번
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '양식을 작성하다.',
      chinese: {
        hanzi: ['填写', '表格'],
        pinyin: ['tiánxiě', 'biǎogé'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '연필로 양식을 작성하다.',
      chinese: {
        hanzi: ['用', '铅笔', '填写', '表格'],
        pinyin: ['yòng', 'qiānbǐ', 'tiánxiě', 'biǎogé'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: false,
      korean: '먼저 연필로 양식을 작성하다.',
      chinese: {
        hanzi: ['先', '用', '铅笔', '填写', '表格'],
        pinyin: ['xiān', 'yòng', 'qiānbǐ', 'tiánxiě', 'biǎogé'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: true,
      korean: '먼저 연필로 양식을 작성해 주세요.',
      chinese: {
        hanzi: ['请', '先', '用', '铅笔', '填写', '表格'],
        pinyin: ['qǐng', 'xiān', 'yòng', 'qiānbǐ', 'tiánxiě', 'biǎogé'],
      },
    },
  ],
  day2: [
    // 6번
    {
      id: 'sentence11',
      level: 1,
      isFinal: false,
      korean: '전화하다.',
      chinese: {
        hanzi: ['打', '电话'],
        pinyin: ['dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence11',
      level: 2,
      isFinal: false,
      korean: '전화하는 것을 금지하다.',
      chinese: {
        hanzi: ['禁止', '打', '电话'],
        pinyin: ['jìnzhǐ', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence11',
      level: 3,
      isFinal: true,
      korean: '박물관 안에서는 전화하는 것이 금지되어 있다.',
      chinese: {
        hanzi: ['博物馆', '里', '禁止', '打', '电话'],
        pinyin: ['bówùguǎn', 'lǐ', 'jìnzhǐ', 'dǎ', 'diànhuà'],
      },
    },
    // 7번
    {
      id: 'sentence12',
      level: 1,
      isFinal: false,
      korean: '좋은 점이 있다.',
      chinese: {
        hanzi: ['有', '好处'],
        pinyin: ['yǒu', 'hǎochu'],
      },
    },
    {
      id: 'sentence12',
      level: 2,
      isFinal: false,
      korean: '어느 정도의 좋은 점이 있다.',
      chinese: {
        hanzi: ['有', '一定', '的', '好处'],
        pinyin: ['yǒu', 'yídìng', 'de', 'hǎochu'],
      },
    },
    {
      id: 'sentence12',
      level: 3,
      isFinal: false,
      korean: '몸에 어느 정도 좋은 점이 있다.',
      chinese: {
        hanzi: ['对', '身体', '有', '一定', '的', '好处'],
        pinyin: ['duì', 'shēntǐ', 'yǒu', 'yídìng', 'de', 'hǎochu'],
      },
    },
    {
      id: 'sentence12',
      level: 4,
      isFinal: true,
      korean: '운동은 몸에 어느 정도 좋은 점이 있다.',
      chinese: {
        hanzi: ['锻炼', '对', '身体', '有', '一定', '的', '好处'],
        pinyin: ['duànliàn', 'duì', 'shēntǐ', 'yǒu', 'yídìng', 'de', 'hǎochu'],
      },
    },

    // 8번
    {
      id: 'sentence13',
      level: 1,
      isFinal: false,
      korean: '(노래를) 잘 부르다.',
      chinese: {
        hanzi: ['唱', '得', '棒'],
        pinyin: ['chàng', 'de', 'bàng'],
      },
    },
    {
      id: 'sentence13',
      level: 2,
      isFinal: false,
      korean: '(노래를) 아주 잘 부르다.',
      chinese: {
        hanzi: ['唱', '得', '棒', '极', '了'],
        pinyin: ['chàng', 'de', 'bàng', 'jí', 'le'],
      },
    },
    {
      id: 'sentence13',
      level: 3,
      isFinal: false,
      korean: '그는 노래를 부르다.',
      chinese: {
        hanzi: ['他', '唱', '歌'],
        pinyin: ['tā', 'chàng', 'gē'],
      },
    },
    {
      id: 'sentence13',
      level: 4,
      isFinal: true,
      korean: '그는 노래를 정말 잘 부른다.',
      chinese: {
        hanzi: ['他', '唱', '歌', '唱', '得', '棒', '极', '了'],
        pinyin: ['tā', 'chàng', 'gē', 'chàng', 'de', 'bàng', 'jí', 'le'],
      },
    },

    // 9번
    {
      id: 'sentence14',
      level: 1,
      isFinal: false,
      korean: '이 커피.',
      chinese: {
        hanzi: ['这', '杯', '咖啡'],
        pinyin: ['zhè', 'bēi', 'kāfēi'],
      },
    },
    {
      id: 'sentence14',
      level: 2,
      isFinal: false,
      korean: '무슨 맛.',
      chinese: {
        hanzi: ['什么', '味道'],
        pinyin: ['shénme', 'wèidào'],
      },
    },
    {
      id: 'sentence14',
      level: 3,
      isFinal: false,
      korean: '무슨 맛의 (커피)',
      chinese: {
        hanzi: ['什么', '味道', '的'],
        pinyin: ['shénme', 'wèidào', 'de'],
      },
    },
    {
      id: 'sentence14',
      level: 4,
      isFinal: true,
      korean: '이 커피는 무슨 맛이에요?',
      chinese: {
        hanzi: ['这', '杯', '咖啡', '是', '什么', '味道', '的'],
        pinyin: ['zhè', 'bēi', 'kāfēi', 'shì', 'shénme', 'wèidào', 'de'],
      },
    },
    // 15번
    {
      id: 'sentence15',
      level: 1,
      isFinal: false,
      korean: '걸려 있다.',
      chinese: {
        hanzi: ['挂着'],
        pinyin: ['guà', 'zhe'],
      },
    },
    {
      id: 'sentence15',
      level: 2,
      isFinal: false,
      korean: '옷 한 벌이 걸려 있다.',
      chinese: {
        hanzi: ['挂', '着', '一', '件', '衣服'],
        pinyin: ['guà', 'zhe', 'yí', 'jiàn', 'yīfu'],
      },
    },
    {
      id: 'sentence15',
      level: 3,
      isFinal: true,
      korean: '문에 옷 한 벌이 걸려 있다.',
      chinese: {
        hanzi: ['门', '上', '挂', '着', '一', '件', '衣服'],
        pinyin: ['mén', 'shàng', 'guà', 'zhe', 'yí', 'jiàn', 'yīfu'],
      },
    },
    // 16번
    {
      id: 'sentence16',
      level: 1,
      isFinal: false,
      korean: '인상을 남기다.',
      chinese: {
        hanzi: ['留下', '印象'],
        pinyin: ['liúxià', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence16',
      level: 2,
      isFinal: false,
      korean: '깊은 인상을 남기다.',
      chinese: {
        hanzi: ['留下', '很', '深', '的', '印象'],
        pinyin: ['liúxià', 'hěn', 'shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence16',
      level: 3,
      isFinal: false,
      korean: '나에게 깊은 인상을 남기다.',
      chinese: {
        hanzi: ['给', '我', '留下', '很', '深', '的', '印象'],
        pinyin: ['gěi', 'wǒ', 'liúxià', 'hěn', 'shēn', 'de', 'yìnxiàng'],
      },
    },
    {
      id: 'sentence16',
      level: 4,
      isFinal: true,
      korean: '그 영화는 나에게 깊은 인상을 남긴다.',
      chinese: {
        hanzi: [
          '那',
          '部',
          '电影',
          '给',
          '我',
          '留下',
          '很',
          '深',
          '的',
          '印象',
        ],
        pinyin: [
          'nà',
          'bù',
          'diànyǐng',
          'gěi',
          'wǒ',
          'liúxià',
          'hěn',
          'shēn',
          'de',
          'yìnxiàng',
        ],
      },
    },
    // 17번
    {
      id: 'sentence17',
      level: 1,
      isFinal: false,
      korean: '업무 수준, 일의 실력',
      chinese: {
        hanzi: ['工作', '水平'],
        pinyin: ['gōngzuò', 'shuǐpíng'],
      },
    },
    {
      id: 'sentence17',
      level: 2,
      isFinal: false,
      korean: '업무 수준이 이상적이다.',
      chinese: {
        hanzi: ['工作', '水平', '理想'],
        pinyin: ['gōngzuò', 'shuǐpíng', 'lǐxiǎng'],
      },
    },
    {
      id: 'sentence17',
      level: 3,
      isFinal: false,
      korean: '업무 수준이 충분히 이상적이지 않다(그다지 이상적이지 않다).',
      chinese: {
        hanzi: ['工作', '水平', '不', '够', '理想'],
        pinyin: ['gōngzuò', 'shuǐpíng', 'bú', 'gòu', 'lǐxiǎng'],
      },
    },
    {
      id: 'sentence17',
      level: 4,
      isFinal: true,
      korean: '그의 업무 수준은 그다지 이상적이지 않다.',
      chinese: {
        hanzi: ['他', '的', '工作', '水平', '不', '够', '理想'],
        pinyin: ['Tā', 'de', 'gōngzuò', 'shuǐpíng', 'bú', 'gòu', 'lǐxiǎng'],
      },
    },
    // 18번
    {
      id: 'sentence18',
      level: 1,
      isFinal: false,
      korean: '다 먹었다.',
      chinese: {
        hanzi: ['吃', '完', '了'],
        pinyin: ['chī', 'wán', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 2,
      isFinal: false,
      korean: '언니에게 다 먹혔다(언니가 다 먹어버렸다).',
      chinese: {
        hanzi: ['被', '姐姐', '吃', '完', '了'],
        pinyin: ['bèi', 'jiějie', 'chī', 'wán', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 3,
      isFinal: false,
      korean: '책상 위의 케이크',
      chinese: {
        hanzi: ['桌子', '上', '的', '蛋糕'],
        pinyin: ['zhuōzi', 'shàng', 'de', 'dàngāo'],
      },
    },
    {
      id: 'sentence18',
      level: 4,
      isFinal: true,
      korean:
        '책상 위의 케이크를 언니가 다 먹어버렸다. (=책상 위의 케이크가 언니에게 다 먹혔다.)',
      chinese: {
        hanzi: ['桌子', '上', '的', '蛋糕', '被', '姐姐', '吃', '完', '了'],
        pinyin: [
          'zhuōzi',
          'shàng',
          'de',
          'dàngāo',
          'bèi',
          'jiějie',
          'chī',
          'wán',
          'le',
        ],
      },
    },
    {
      id: 'sentence19',
      level: 1,
      isFinal: false,
      korean: '캐리어 안에.',
      chinese: {
        hanzi: ['行李箱', '里'],
        pinyin: ['xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence19',
      level: 2,
      isFinal: false,
      korean: '캐리어 안에 넣다.',
      chinese: {
        hanzi: ['放进', '行李箱', '里'],
        pinyin: ['fàngjìn', 'xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence19',
      level: 3,
      isFinal: false,
      korean: '노트북을 캐리어 안에 넣다.',
      chinese: {
        hanzi: ['把', '电脑', '放进', '行李箱', '里'],
        pinyin: ['bǎ', 'diànnǎo', 'fàngjìn', 'xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence19',
      level: 4,
      isFinal: true,
      korean: '노트북을 캐리어 안에 넣어주세요.',
      chinese: {
        hanzi: ['请', '把', '电脑', '放进', '行李箱', '里'],
        pinyin: ['qǐng', 'bǎ', 'diànnǎo', 'fàngjìn', 'xínglǐxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence20',
      level: 1,
      isFinal: false,
      korean: '인사하다.',
      chinese: {
        hanzi: ['打', '招呼'],
        pinyin: ['dǎ', 'zhāohu'],
      },
    },
    {
      id: 'sentence20',
      level: 2,
      isFinal: false,
      korean: '누구에게 인사해?',
      chinese: {
        hanzi: ['跟', '谁', '打', '招呼'],
        pinyin: ['gēn', 'shéi', 'dǎ', 'zhāohu'],
      },
    },
    {
      id: 'sentence20',
      level: 3,
      isFinal: false,
      korean: '누구에게 인사하고 있는 거야?',
      chinese: {
        hanzi: ['在', '跟', '谁', '打', '招呼'],
        pinyin: ['zài', 'gēn', 'shéi', 'dǎ', 'zhāohu'],
      },
    },
    {
      id: 'sentence20',
      level: 4,
      isFinal: true,
      korean: '저 배우는 누구에게 인사하고 있는 거야?',
      chinese: {
        hanzi: ['那', '个', '演员', '在', '跟', '谁', '打', '招呼'],
        pinyin: ['nà', 'ge', 'yǎnyuán', 'zài', 'gēn', 'shéi', 'dǎ', 'zhāohu'],
      },
    },
  ],
  day3: [
    // 21번
    {
      id: 'sentence21',
      level: 1,
      isFinal: false,
      korean: '언니는 사람이다.',
      chinese: {
        hanzi: ['姐姐', '是', '人'],
        pinyin: ['jiějie', 'shì', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 2,
      isFinal: false,
      korean: '유머러스한 사람.',
      chinese: {
        hanzi: ['幽默', '的', '人'],
        pinyin: ['yōumò', 'de', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 3,
      isFinal: false,
      korean: '가장 유머러스한 사람',
      chinese: {
        hanzi: ['最', '幽默', '的', '人'],
        pinyin: ['zuì', 'yōumò', 'de', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 4,
      isFinal: false,
      korean: '세상에서 가장 유머러스한 사람',
      chinese: {
        hanzi: ['世界', '上', '最', '幽默', '的', '人'],
        pinyin: ['shìjiè', 'shàng', 'zuì', 'yōumò', 'de', 'rén'],
      },
    },
    {
      id: 'sentence21',
      level: 5,
      isFinal: true,
      korean: '세상에서 가장 유머러스한 사람',
      chinese: {
        hanzi: ['姐姐', '是', '世界', '上', '最', '幽默', '的', '人'],
        pinyin: [
          'jiějie',
          'shì',
          'shìjiè',
          'shàng',
          'zuì',
          'yōumò',
          'de',
          'rén',
        ],
      },
    },
    // 22번
    {
      id: 'sentence22',
      level: 1,
      isFinal: false,
      korean: '식었다.',
      chinese: {
        hanzi: ['凉了'],
        pinyin: ['liáng le'],
      },
    },
    {
      id: 'sentence22',
      level: 2,
      isFinal: false,
      korean: '밥이 식었다.',
      chinese: {
        hanzi: ['饭', '凉', '了'],
        pinyin: ['fàn', 'liáng', 'le'],
      },
    },
    {
      id: 'sentence22',
      level: 3,
      isFinal: true,
      korean: '그릇 속의 밥이 식었다.',
      chinese: {
        hanzi: ['碗', '里', '的', '饭', '凉', '了'],
        pinyin: ['wǎn', 'lǐ', 'de', 'fàn', 'liáng', 'le'],
      },
    },
    // 13번
    {
      id: 'sentence23',
      level: 1,
      isFinal: false,
      korean: '주목을 끌다.',
      chinese: {
        hanzi: ['引起', '重视'],
        pinyin: ['yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 2,
      isFinal: false,
      korean: '주목을 끌었다.',
      chinese: {
        hanzi: ['引起', '了', '重视'],
        pinyin: ['yǐnqǐ', 'le', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 3,
      isFinal: false,
      korean: '모두의 주목을 끌었다.',
      chinese: {
        hanzi: ['引起', '了', '大家', '的', '重视'],
        pinyin: ['yǐnqǐ', 'le', 'dàjiā', 'de', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 4,
      isFinal: false,
      korean: '발언은 모두의 주목을 끌었다.',
      chinese: {
        hanzi: ['发言', '引起', '了', '大家', '的', '重视'],
        pinyin: ['fāyán', 'yǐnqǐ', 'le', 'dàjiā', 'de', 'zhòngshì'],
      },
    },
    {
      id: 'sentence23',
      level: 5,
      isFinal: true,
      korean: '그의 발언은 모두의 주목을 끌었다.',
      chinese: {
        hanzi: ['他', '的', '发言', '引起', '了', '大家', '的', '重视'],
        pinyin: ['tā', 'de', 'fāyán', 'yǐnqǐ', 'le', 'dàjiā', 'de', 'zhòngshì'],
      },
    },
    // 24번
    {
      id: 'sentence24',
      level: 1,
      isFinal: false,
      korean: '내용이 특별하다.',
      chinese: {
        hanzi: ['内容', '特别'],
        pinyin: ['nèiróng', 'tèbié'],
      },
    },
    {
      id: 'sentence24',
      level: 2,
      isFinal: false,
      korean: '내용이 약간 특별하다.',
      chinese: {
        hanzi: ['内容', '有点儿', '特别'],
        pinyin: ['nèiróng', 'yǒudiǎnr', 'tèbié'],
      },
    },
    {
      id: 'sentence24',
      level: 3,
      isFinal: false,
      korean: '이 내용이 약간 특별하다.',
      chinese: {
        hanzi: ['这个', '内容', '有点儿', '特别'],
        pinyin: ['zhège', 'nèiróng', 'yǒudiǎnr', 'tèbié'],
      },
    },
    {
      id: 'sentence24',
      level: 4,
      isFinal: true,
      korean: '잡지의 이 내용이 약간 특별하다.',
      chinese: {
        hanzi: ['杂志', '上', '的', '这个', '内容', '有点儿', '特别'],
        pinyin: [
          'zázhì',
          'shàng',
          'de',
          'zhège',
          'nèiróng',
          'yǒudiǎnr',
          'tèbié',
        ],
      },
    },
    // 25번
    {
      id: 'sentence25',
      level: 1,
      isFinal: false,
      korean: '건배하다.',
      chinese: {
        hanzi: ['干杯'],
        pinyin: ['gānbēi'],
      },
    },
    {
      id: 'sentence25',
      level: 2,
      isFinal: false,
      korean: '미래를 위해 건배하다.',
      chinese: {
        hanzi: ['为', '未来', '干杯'],
        pinyin: ['wèi', 'wèilái', 'gānbēi'],
      },
    },
    {
      id: 'sentence25',
      level: 3,
      isFinal: true,
      korean: '우리 미래를 위해 건배합시다.',
      chinese: {
        hanzi: ['让', '我们', '为', '未来', '干杯'],
        pinyin: ['ràng', 'wǒmen', 'wèi', 'wèilái', 'gānbēi'],
      },
    },
    // 26번
    {
      id: 'sentence26',
      level: 1,
      isFinal: false,
      korean: '이유를 믿다.',
      chinese: {
        hanzi: ['相信', '理由'],
        pinyin: ['xiāngxìn', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 2,
      isFinal: false,
      korean: '어떤 이유든 믿다.',
      chinese: {
        hanzi: ['相信', '任何', '理由'],
        pinyin: ['xiāngxìn', 'rènhé', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 3,
      isFinal: false,
      korean: '그의 어떤 이유든 믿다.',
      chinese: {
        hanzi: ['相信', '他', '的', '任何', '理由'],
        pinyin: ['xiāngxìn', 'tā', 'de', 'rènhé', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 4,
      isFinal: false,
      korean: '더 이상 그의 어떤 이유도 믿지 않는다.',
      chinese: {
        hanzi: ['不', '再', '相信', '他', '的', '任何', '理由'],
        pinyin: ['bú', 'zài', 'xiāngxìn', 'tā', 'de', 'rènhé', 'lǐyóu'],
      },
    },
    {
      id: 'sentence26',
      level: 5,
      isFinal: true,
      korean: '우리는 더 이상 그의 어떤 이유도 믿지 않는다.',
      chinese: {
        hanzi: ['我们', '不', '再', '相信', '他', '的', '任何', '理由'],
        pinyin: [
          'wǒmen',
          'bú',
          'zài',
          'xiāngxìn',
          'tā',
          'de',
          'rènhé',
          'lǐyóu',
        ],
      },
    },
    // 27번
    {
      id: 'sentence27',
      level: 1,
      isFinal: false,
      korean: '과제가 많다.',
      chinese: {
        hanzi: ['任务', '重'],
        pinyin: ['rènwu', 'zhòng'],
      },
    },
    {
      id: 'sentence27',
      level: 2,
      isFinal: false,
      korean: '과제가 매우 많다.',
      chinese: {
        hanzi: ['任务', '非常', '重'],
        pinyin: ['rènwu', 'fēicháng', 'zhòng'],
      },
    },
    {
      id: 'sentence27',
      level: 3,
      isFinal: false,
      korean: '학습 과제가 매우 많다.',
      chinese: {
        hanzi: ['学习', '任务', '非常', '重'],
        pinyin: ['xuéxí', 'rènwu', 'fēicháng', 'zhòng'],
      },
    },
    {
      id: 'sentence27',
      level: 4,
      isFinal: true,
      korean: '이 수업의 학습 과제는 매우 많다.',
      chinese: {
        hanzi: ['这', '门', '课', '的', '学习', '任务', '非常', '重'],
        pinyin: [
          'zhè',
          'mén',
          'kè',
          'de',
          'xuéxí',
          'rènwu',
          'fēicháng',
          'zhòng',
        ],
      },
    },
    {
      id: 'sentence28',
      level: 1,
      isFinal: false,
      korean: '뛰어난 사람',
      chinese: {
        hanzi: ['出色', '的', '人'],
        pinyin: ['chūsè', 'de', 'rén'],
      },
    },
    {
      id: 'sentence28',
      level: 2,
      isFinal: false,
      korean: '뛰어난 사람이 되다.',
      chinese: {
        hanzi: ['成为', '出色', '的', '人'],
        pinyin: ['chéngwéi', 'chūsè', 'de', 'rén'],
      },
    },
    {
      id: 'sentence28',
      level: 3,
      isFinal: false,
      korean: '너가 ......한 것을 축하한다.',
      chinese: {
        hanzi: ['祝贺你……'],
        pinyin: ['zhùhè nǐ'],
      },
    },
    {
      id: 'sentence28',
      level: 4,
      isFinal: true,
      korean: '(너가) 뛰어난 사람이 된 것을 축하해.',
      chinese: {
        hanzi: ['祝贺', '你', '成为', '出色', '的', '人'],
        pinyin: ['zhùhè', 'nǐ', 'chéngwéi', 'chūsè', 'de', 'rén'],
      },
    },
    {
      id: 'sentence29',
      level: 1,
      isFinal: false,
      korean: '택배를 부치다.',
      chinese: {
        hanzi: ['寄', '快递'],
        pinyin: ['jì', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 2,
      isFinal: false,
      korean: '택배 하나를 부치다.',
      chinese: {
        hanzi: ['寄', '个', '快递'],
        pinyin: ['jì', 'ge', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 3,
      isFinal: false,
      korean: '나를 도와 택배 하나를 부쳐줘.',
      chinese: {
        hanzi: ['帮', '我', '寄', '个', '快递'],
        pinyin: ['bāng', 'wǒ', 'jì', 'ge', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 4,
      isFinal: false,
      korean: '겸사겸사 나 대신 택배 하나를 부쳐줘.',
      chinese: {
        hanzi: ['顺便', '帮', '我', '寄', '个', '快递'],
        pinyin: ['shùnbiàn', 'bāng', 'wǒ', 'jì', 'ge', 'kuàidì'],
      },
    },
    {
      id: 'sentence29',
      level: 5,
      isFinal: false,
      korean: '겸사겸사 나 대신 택배 하나를 부쳐줄 수 있나요?',
      chinese: {
        hanzi: ['可以', '顺便', '帮', '我', '寄', '个', '快递', '吗'],
        pinyin: ['kěyǐ', 'shùnbiàn', 'bāng', 'wǒ', 'jì', 'ge', 'kuàidì', 'ma'],
      },
    },
    {
      id: 'sentence29',
      level: 6,
      isFinal: true,
      korean: '너는 나 대신 택배 하나를 부쳐줄 수 있니?',
      chinese: {
        hanzi: ['你', '可以', '顺便', '帮', '我', '寄', '个', '快递', '吗'],
        pinyin: [
          'nǐ',
          'kěyǐ',
          'shùnbiàn',
          'bāng',
          'wǒ',
          'jì',
          'ge',
          'kuàidì',
          'ma',
        ],
      },
    },
    {
      id: 'sentence30',
      level: 1,
      isFinal: false,
      korean: '일이 번거롭다.',
      chinese: {
        hanzi: ['事情', '麻烦'],
        pinyin: ['shìqing', 'máfan'],
      },
    },
    {
      id: 'sentence30',
      level: 2,
      isFinal: false,
      korean: '일이 더 번거롭다.',
      chinese: {
        hanzi: ['事情', '更', '麻烦'],
        pinyin: ['shìqing', 'gèng', 'máfan'],
      },
    },
    {
      id: 'sentence30',
      level: 3,
      isFinal: false,
      korean: '일이 더 번거로워질 것이다.',
      chinese: {
        hanzi: ['事情', '会', '更', '麻烦'],
        pinyin: ['shìqing', 'huì', 'gèng', 'máfan'],
      },
    },
    {
      id: 'sentence30',
      level: 4,
      isFinal: true,
      korean:
        '일이 가끔 더 번거로워질 수 있다. (=일이 가끔 더 번거로워질 것이다.)',
      chinese: {
        hanzi: ['事情', '有时', '会', '更', '麻烦'],
        pinyin: ['shìqing', 'yǒushí', 'huì', 'gèng', 'máfan'],
      },
    },
  ],
  day4: [
    // 31번
    {
      id: 'sentence31',
      level: 1,
      isFinal: false,
      korean: '매우 중요하다.',
      chinese: {
        hanzi: ['非常', '重要'],
        pinyin: ['fēicháng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence31',
      level: 2,
      isFinal: false,
      korean: '지지는 매우 중요하다.',
      chinese: {
        hanzi: ['支持', '非常', '重要'],
        pinyin: ['zhīchí', 'fēicháng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence31',
      level: 3,
      isFinal: true,
      korean: '부모님의 지지는 매우 중요하다.',
      chinese: {
        hanzi: ['父母', '的', '支持', '非常', '重要'],
        pinyin: ['fùmǔ', 'de', 'zhīchí', 'fēicháng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence32',
      level: 1,
      isFinal: false,
      korean: '다른 도시.',
      chinese: {
        hanzi: ['不同', '的', '城市'],
        pinyin: ['bùtóng', 'de', 'chéngshì'],
      },
    },
    {
      id: 'sentence32',
      level: 2,
      isFinal: false,
      korean: '다른 도시에서 왔다.',
      chinese: {
        hanzi: ['来自', '不同', '的', '城市'],
        pinyin: ['láizì', 'bùtóng', 'de', 'chéngshì'],
      },
    },
    {
      id: 'sentence32',
      level: 3,
      isFinal: true,
      korean: '참가자들은 다른 도시에서 왔다.',
      chinese: {
        hanzi: ['参加者', '来自', '不同', '的', '城市'],
        pinyin: ['cānjiāzhě', 'láizì', 'bùtóng', 'de', 'chéngshì'],
      },
    },
    // 33번
    {
      id: 'sentence33',
      level: 1,
      isFinal: false,
      korean: '가장 성실하다.',
      chinese: {
        hanzi: ['最', '认真'],
        pinyin: ['zuì', 'rènzhēn'],
      },
    },
    {
      id: 'sentence33',
      level: 2,
      isFinal: false,
      korean: '가장 성실한 (사람)',
      chinese: {
        hanzi: ['最', '认真', '的'],
        pinyin: ['zuì', 'rènzhēn', 'de'],
      },
    },
    {
      id: 'sentence33',
      level: 3,
      isFinal: false,
      korean: '모든 사람 중에서 가장 성실한 (사람)',
      chinese: {
        hanzi: ['所有', '人', '中', '最', '认真', '的'],
        pinyin: ['suǒyǒu', 'rén', 'zhōng', 'zuì', 'rènzhēn', 'de'],
      },
    },
    {
      id: 'sentence33',
      level: 4,
      isFinal: true,
      korean: '그는 모든 사람 중에서 가장 성실한 사람이다.',
      chinese: {
        hanzi: ['他', '是', '所有', '人', '中', '最', '认真', '的'],
        pinyin: ['tā', 'shì', 'suǒyǒu', 'rén', 'zhōng', 'zuì', 'rènzhēn', 'de'],
      },
    },
    //34
    {
      id: 'sentence34',
      level: 1,
      isFinal: false,
      korean: '문서를 인쇄하다.',
      chinese: {
        hanzi: ['打印', '文件'],
        pinyin: ['dǎyìn', 'wénjiàn'],
      },
    },
    {
      id: 'sentence34',
      level: 2,
      isFinal: false,
      korean: '문서를 인쇄하는 중이다.',
      chinese: {
        hanzi: ['正在', '打印', '文件'],
        pinyin: ['zhèngzài', 'dǎyìn', 'wénjiàn.'],
      },
    },
    {
      id: 'sentence34',
      level: 3,
      isFinal: true,
      korean: '선생님은 문서를 인쇄하는 중이다.',
      chinese: {
        hanzi: ['老师', '正在', '打印', '文件'],
        pinyin: ['lǎoshī', 'zhèngzài', 'dǎyìn', 'wénjiàn'],
      },
    },

    // 35번
    {
      id: 'sentence35',
      level: 1,
      isFinal: false,
      korean: '아주 유창하다.',
      chinese: {
        hanzi: ['非常', '流利'],
        pinyin: ['fēicháng', 'liúlì'],
      },
    },
    {
      id: 'sentence35',
      level: 2,
      isFinal: false,
      korean: '말을 아주 유창하게 하다. (= 말하는 정도가 매우 유창하다.)',
      chinese: {
        hanzi: ['说', '得', '非常', '流利'],
        pinyin: ['shuō', 'de', 'fēicháng', 'liúlì'],
      },
    },
    {
      id: 'sentence35',
      level: 3,
      isFinal: true,
      korean:
        '그의 영어는 매우 유창하다. (= 그의 영어는 말하는 정도가 매우 유창하다.)',
      chinese: {
        hanzi: ['他', '的', '英语', '说', '得', '非常', '流利'],
        pinyin: ['tā', 'de', 'yīngyǔ', 'shuō', 'de', 'fēicháng', 'liúlì'],
      },
    },

    // 36번
    {
      id: 'sentence36',
      level: 1,
      isFinal: false,
      korean: '500미터 정도 된다.',
      chinese: {
        hanzi: ['有', '五百', '米'],
        pinyin: ['yǒu', 'wǔbǎi', 'mǐ'],
      },
    },
    {
      id: 'sentence36',
      level: 2,
      isFinal: false,
      korean: '대략 500미터 정도 된다.',
      chinese: {
        hanzi: ['大约', '有', '五百', '米'],
        pinyin: ['dàyuē', 'yǒu', 'wǔbǎi', 'mǐ'],
      },
    },
    {
      id: 'sentence36',
      level: 3,
      isFinal: false,
      korean: '학교에서 서점까지',
      chinese: {
        hanzi: ['从', '学校', '到', '书店'],
        pinyin: ['cóng', 'xuéxiào', 'dào', 'shūdiàn'],
      },
    },
    {
      id: 'sentence36',
      level: 4,
      isFinal: true,
      korean: '학교에서 서점까지는 대략 500미터 정도 된다.',
      chinese: {
        hanzi: ['从', '学校', '到', '书店', '大约', '有', '五百', '米'],
        pinyin: [
          'cóng',
          'xuéxiào',
          'dào',
          'shūdiàn',
          'dàyuē',
          'yǒu',
          'wǔbǎi',
          'mǐ',
        ],
      },
    },
    // 37번
    {
      id: 'sentence37',
      level: 1,
      isFinal: false,
      korean: '다른 사람에게 주다.',
      chinese: {
        hanzi: ['给', '别人'],
        pinyin: ['gěi', 'biérén'],
      },
    },
    {
      id: 'sentence37',
      level: 2,
      isFinal: false,
      korean: '지갑을 다른 사람에게 주다.',
      chinese: {
        hanzi: ['把', '钱包', '给', '别人'],
        pinyin: ['bǎ', 'qiánbāo', 'gěi', 'biérén'],
      },
    },
    {
      id: 'sentence37',
      level: 3,
      isFinal: false,
      korean: '지갑을 다른 사람에게 주지 마라.',
      chinese: {
        hanzi: ['不', '要', '把', '钱包', '给', '别人'],
        pinyin: ['bú', 'yào', 'bǎ', 'qiánbāo', 'gěi', 'biérén'],
      },
    },
    {
      id: 'sentence37',
      level: 4,
      isFinal: true,
      korean: '절대 지갑을 다른 사람에게 주지 마라.',
      chinese: {
        hanzi: ['千万', '不', '要', '把', '钱包', '给', '别人'],
        pinyin: ['qiānwàn', 'bú', 'yào', 'bǎ', 'qiánbāo', 'gěi', 'biérén'],
      },
    },

    // 38번
    {
      id: 'sentence38',
      level: 1,
      isFinal: false,
      korean: '누가 말해?',
      chinese: {
        hanzi: ['谁', '说', '话'],
        pinyin: ['shéi', 'shuō', 'huà'],
      },
    },
    {
      id: 'sentence38',
      level: 2,
      isFinal: false,
      korean: '누가 멈추지 않고 말해?',
      chinese: {
        hanzi: ['谁', '不停', '地', '说', '话'],
        pinyin: ['shéi', 'bùtíng', 'de', 'shuō', 'huà'],
      },
    },
    {
      id: 'sentence38',
      level: 3,
      isFinal: false,
      korean: '누가 계속 말하고 있어? (= 누가 멈추지 않고 말하고 있어?)',
      chinese: {
        hanzi: ['谁', '在', '不停', '地', '说话'],
        pinyin: ['shéi', 'zài', 'bùtíng', 'de', 'shuō', 'huà'],
      },
    },
    {
      id: 'sentence38',
      level: 4,
      isFinal: true,
      korean:
        '도대체 누가 계속 말하고 있는 거야? (= 도대체 누가 멈추지 않고 말하고 있는 거야?)',
      chinese: {
        hanzi: ['到底', '是', '谁', '在', '不停', '地', '说', '话'],
        pinyin: ['dàodǐ', 'shì', 'shéi', 'zài', 'bùtíng', 'de', 'shuō', 'huà'],
      },
    },
    // 39번
    {
      id: 'sentence39',
      level: 1,
      isFinal: false,
      korean: '나에게 결제하게 하다.',
      chinese: {
        hanzi: ['让', '我', '付', '款'],
        pinyin: ['ràng', 'wǒ', 'fù', 'kuǎn'],
      },
    },
    {
      id: 'sentence39',
      level: 2,
      isFinal: false,
      korean: '나에게 현금으로 결제하게 하다.',
      chinese: {
        hanzi: ['让', '我', '用', '现金', '付', '款'],
        pinyin: ['ràng', 'wǒ', 'yòng', 'xiànjīn', 'fù', 'kuǎn'],
      },
    },
    {
      id: 'sentence39',
      level: 3,
      isFinal: true,
      korean: '사장님이 나에게 현금으로 결제하라고 한다. ',
      chinese: {
        hanzi: ['老板', '让', '我', '用', '现金', '付', '款'],
        pinyin: ['lǎobǎn', 'ràng', 'wǒ', 'yòng', 'xiànjīn', 'fù', 'kuǎn'],
      },
    },
    // 40번
    {
      id: 'sentence40',
      level: 1,
      isFinal: false,
      korean: '찢었다, 망가뜨렸다',
      chinese: {
        hanzi: ['弄', '破', '了'],
        pinyin: ['nòng', 'pò', 'le'],
      },
    },
    {
      id: 'sentence40',
      level: 2,
      isFinal: false,
      korean: '내가 찢었다. (= 나에 의해 찢어졌다.)',
      chinese: {
        hanzi: ['被', '我', '弄', '破', '了'],
        pinyin: ['bèi', 'wǒ', 'nòng', 'pò', 'le'],
      },
    },
    {
      id: 'sentence40',
      level: 3,
      isFinal: true,
      korean: '옷을 내가 찢어버렸다. (= 옷은 나에 의해 찢어졌다.)',
      chinese: {
        hanzi: ['衣服', '被', '我', '弄', '破', '了'],
        pinyin: ['yīfu', 'bèi', 'wǒ', 'nòng', 'pò', 'le'],
      },
    },
  ],
  day5: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '흡연을 금지하다.',
      chinese: {
        hanzi: ['禁止', '吸', '烟'],
        pinyin: ['jìnzhǐ', 'xī', 'yān'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: true,
      korean: '문 앞에서 흡연을 금지한다.',
      chinese: {
        hanzi: ['门', '前', '禁止', '吸', '烟'],
        pinyin: ['mén', 'qián', 'jìnzhǐ', 'xī', 'yān'],
      },
    },
    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '식당 한 곳이 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '餐厅'],
        pinyin: ['yǒu', 'yì', 'jiā', 'cāntīng'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean: '옆에 식당 한 곳이 있다.',
      chinese: {
        hanzi: ['旁边', '有', '一', '家', '餐厅'],
        pinyin: ['pángbiān', 'yǒu', 'yì', 'jiā', 'cāntīng'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: true,
      korean: '공원 옆에 식당 한 곳이 있다.',
      chinese: {
        hanzi: ['公园', '旁边', '有', '一', '家', '餐厅'],
        pinyin: ['gōngyuán', 'pángbiān', 'yǒu', 'yì', 'jiā', 'cāntīng'],
      },
    },
    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '아주 훌륭하다.',
      chinese: {
        hanzi: ['精彩', '极', '了'],
        pinyin: ['jīngcǎi', 'jí', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean: '공연이 아주 훌륭하다.',
      chinese: {
        hanzi: ['表演', '精彩', '极', '了'],
        pinyin: ['biǎoyǎn', 'jīngcǎi', 'jí', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: true,
      korean: '이번 공연이 아주 훌륭하다.',
      chinese: {
        hanzi: ['这次', '表演', '精彩', '极', '了'],
        pinyin: ['zhècì', 'biǎoyǎn', 'jīngcǎi', 'jí', 'le'],
      },
    },
    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '소파 위에 던지다.',
      chinese: {
        hanzi: ['扔', '在', '沙发', '上'],
        pinyin: ['rēng', 'zài', 'shāfā', 'shàng'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '책을 소파 위에 던지다.',
      chinese: {
        hanzi: ['把', '书', '扔', '在', '沙发', '上'],
        pinyin: ['bǎ', 'shū', 'rēng', 'zài', 'shāfā', 'shàng'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: true,
      korean: '책을 소파 위에 던지지 마라.',
      chinese: {
        hanzi: ['别把书扔在沙发上'],
        pinyin: ['bié', 'bǎ', 'shū', 'rēng', 'zài', 'shāfā', 'shàng'],
      },
    },
    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '큰 용기를 주고 자신감을 불어넣는다. (= 매우 고무적이다).',
      chinese: {
        hanzi: ['十分', '鼓舞'],
        pinyin: ['shífēn', 'gǔwǔ'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean:
        '사람에게 큰 용기를 주고 자신감을 불어넣는다. (= 사람을 매우 고무시킨다.)',
      chinese: {
        hanzi: ['让', '人', '十分', '鼓舞'],
        pinyin: ['ràng', 'rén', 'shífēn', 'gǔwǔ'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: false,
      korean: '성공 경험은 사람들에게 큰 용기를 주고 자신감을 불어넣는다.',
      chinese: {
        hanzi: ['成功', '经历', '让', '人', '十分', '鼓舞'],
        pinyin: ['chénggōng', 'jīnglì', 'ràng', 'rén', 'shífēn', 'gǔwǔ'],
      },
    },
    {
      id: 'sentence45',
      level: 4,
      isFinal: true,
      korean: '그의 성공 경험은 사람들에게 큰 용기를 주고 자신감을 불어넣는다.',
      chinese: {
        hanzi: ['他', '的', '成功', '经历', '让', '人', '十分', '鼓舞'],
        pinyin: [
          'tā',
          'de',
          'chénggōng',
          'jīnglì',
          'ràng',
          'rén',
          'shífēn',
          'gǔwǔ',
        ],
      },
    },
    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '(일 처리 방식이) 체계적이다, (말, 글이) 조리가 있다(논리적이다)',
      chinese: {
        hanzi: ['有', '条理'],
        pinyin: ['yǒu', 'tiáolǐ'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '매우 체계적이다.',
      chinese: {
        hanzi: ['很', '有', '条理'],
        pinyin: ['hěn', 'yǒu', 'tiáolǐ'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: '매우 체계적으로 진행된다. (= 진행되는 정도가 매우 체계적이다.)',
      chinese: {
        hanzi: ['进行得', '很', '有', '条理'],
        pinyin: ['jìnxíng', 'de', 'hěn', 'yǒu', 'tiáolǐ'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: true,
      korean:
        '일이 전반적으로 매우 체계적으로 진행된다. (= 일이 전반적으로 진행되는 정도가 매우 체계적이다.)',
      chinese: {
        hanzi: ['工作', '都', '进行', '得', '很', '有', '条理'],
        pinyin: ['gōngzuò', 'dōu', 'jìnxíng', 'de', 'hěn', 'yǒu', 'tiáolǐ'],
      },
    },
    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '증가했다.',
      chinese: {
        hanzi: ['提高', '了'],
        pinyin: ['tígāo', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '지난 몇 년보다 증가했다.',
      chinese: {
        hanzi: ['比', '前', '几', '年', '提高', '了'],
        pinyin: ['bǐ', 'qián', 'jǐ', 'nián', 'tígāo', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '지난 몇 년보다 세 배 증가했다.',
      chinese: {
        hanzi: ['比', '前', '几', '年', '提高', '了', '三倍'],
        pinyin: ['bǐ', 'qián', 'jǐ', 'nián', 'tígāo', 'le', 'sān bèi'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: false,
      korean: '생산량이 세 배 증가했다.',
      chinese: {
        hanzi: ['产量', '比', '前', '几', '年', '提高', '了', '三倍'],
        pinyin: [
          'chǎnliàng',
          'bǐ',
          'qián',
          'jǐ',
          'nián',
          'tígāo',
          'le',
          'sān bèi',
        ],
      },
    },
    {
      id: 'sentence47',
      level: 5,
      isFinal: true,
      korean: '회사의 생산량이 지난 몇 년보다 세 배 증가했다.',
      chinese: {
        hanzi: [
          '公司',
          '的',
          '产量',
          '比',
          '前',
          '几',
          '年',
          '提高',
          '了',
          '三倍',
        ],
        pinyin: [
          'gōngsī',
          'de',
          'chǎnliàng',
          'bǐ',
          'qián',
          'jǐ',
          'nián',
          'tígāo',
          'le',
          'sān bèi',
        ],
      },
    },
    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '~로 번역되었다.',
      chinese: {
        hanzi: ['翻译成了~'],
        pinyin: ['fānyì chéng le'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '(…에게) ~로 번역되었다.',
      chinese: {
        hanzi: ['被', '翻译', '成', '了'],
        pinyin: ['bèi fānyì chéng le.'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '(…에게) 프랑스어로 번역되었다.',
      chinese: {
        hanzi: ['被', '翻译', '成', '了', '法文'],
        pinyin: ['bèi', 'fānyì', 'chéng', 'le', 'fǎwén'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: true,
      korean: '이 글은 (…에게) 프랑스어로 번역되었다.',
      chinese: {
        hanzi: ['这', '篇', '文章', '被', '翻译', '成', '了', '法文'],
        pinyin: [
          'zhè',
          'piān',
          'wénzhāng',
          'bèi',
          'fānyì',
          'chéng',
          'le',
          'fǎwén',
        ],
      },
    },
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '점점 번화하다.',
      chinese: {
        hanzi: ['越来越', '繁华'],
        pinyin: ['yuèláiyuè', 'fánhuá'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '점점 번화해지다.',
      chinese: {
        hanzi: ['变得', '越来越', '繁华'],
        pinyin: ['biànde', 'yuèláiyuè', 'fánhuá'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '점점 번화해질 것이다.',
      chinese: {
        hanzi: ['会', '变得', '越来越', '繁华'],
        pinyin: ['huì', 'biànde', 'yuèláiyuè', 'fánhuá'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: true,
      korean: '이 도시는 점점 번화해질 것이다.',
      chinese: {
        hanzi: ['这个', '城市', '会', '变得', '越来越', '繁华'],
        pinyin: ['zhège', 'chéngshì', 'huì', 'biànde', 'yuèláiyuè', 'fánhuá'],
      },
    },
    //50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean: '숙제를 끝내다.',
      chinese: {
        hanzi: ['完成', '作业'],
        pinyin: ['wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '제시간에 숙제를 끝내다.',
      chinese: {
        hanzi: ['按时', '完成', '作业'],
        pinyin: ['ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '제시간에 숙제를 끝낼 것이다.',
      chinese: {
        hanzi: ['会', '按时', '完成', '作业'],
        pinyin: ['huì', 'ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: false,
      korean: '앞으로 제시간에 숙제를 끝낼 것이다.',
      chinese: {
        hanzi: ['以后', '会', '按时', '完成', '作业'],
        pinyin: ['yǐhòu', 'huì', 'ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 5,
      isFinal: false,
      korean: '앞으로 제시간에 숙제를 끝내겠다고 약속하다.',
      chinese: {
        hanzi: ['保证', '以后', '会', '按时', '完成', '作业'],
        pinyin: ['bǎozhèng', 'yǐhòu', 'huì', 'ànshí', 'wánchéng', 'zuòyè'],
      },
    },
    {
      id: 'sentence50',
      level: 6,
      isFinal: false,
      korean: '앞으로 제시간에 숙제를 끝낼 것이다.',
      chinese: {
        hanzi: ['向', '老师', '保证', '以后', '会', '按时', '完成', '作业'],
        pinyin: [
          'xiàng',
          'lǎoshī',
          'bǎozhèng',
          'yǐhòu',
          'huì',
          'ànshí',
          'wánchéng',
          'zuòyè',
        ],
      },
    },
    {
      id: 'sentence50',
      level: 7,
      isFinal: true,
      korean: '그녀는 앞으로 숙제를 제시간에 끝내겠다고 선생님께 약속했다.',
      chinese: {
        hanzi: [
          '她',
          '向',
          '老师',
          '保证',
          '以后',
          '会',
          '按时',
          '完成',
          '作业',
        ],
        pinyin: [
          'tā',
          'xiàng',
          'lǎoshī',
          'bǎozhèng',
          'yǐhòu',
          'huì',
          'ànshí',
          'wánchéng',
          'zuòyè',
        ],
      },
    },
  ],
  day6: [
    // 51번
    {
      id: 'sentence51',
      level: 1,
      isFinal: false,
      korean: '수량이 증가하다.',
      chinese: {
        hanzi: ['数量', '增加'],
        pinyin: ['shùliàng', 'zēngjiā'],
      },
    },
    {
      id: 'sentence51',
      level: 2,
      isFinal: false,
      korean: '상품 수량이 증가하다.',
      chinese: {
        hanzi: ['商品', '数量', '增加'],
        pinyin: ['shāngpǐn', 'shùliàng', 'zēngjiā'],
      },
    },
    {
      id: 'sentence51',
      level: 3,
      isFinal: false,
      korean: '상품 수량이 증가했다.',
      chinese: {
        hanzi: ['商品', '数量', '增加', '了'],
        pinyin: ['shāngpǐn', 'shùliàng', 'zēngjiā', 'le'],
      },
    },
    {
      id: 'sentence51',
      level: 4,
      isFinal: true,
      korean: '이 슈퍼마켓의 상품 수량이 증가했다.',
      chinese: {
        hanzi: ['这', '家', '超市', '的', '商品', '数量', '增加', '了'],
        pinyin: [
          'zhè',
          'jiā',
          'chāoshì',
          'de',
          'shāngpǐn',
          'shùliàng',
          'zēngjiā',
          'le',
        ],
      },
    },
    // 52번
    {
      id: 'sentence52',
      level: 1,
      isFinal: false,
      korean: '매우 익숙하다.',
      chinese: {
        hanzi: ['非常', '熟悉'],
        pinyin: ['fēicháng', 'shúxī'],
      },
    },
    {
      id: 'sentence52',
      level: 2,
      isFinal: false,
      korean: '국제 무역 규칙에 매우 익숙하다.',
      chinese: {
        hanzi: ['对', '国际', '贸易', '规则', '非常', '熟悉'],
        pinyin: ['duì', 'guójì', 'màoyì', 'guīzé', 'fēicháng', 'shúxī'],
      },
    },
    {
      id: 'sentence52',
      level: 3,
      isFinal: true,
      korean: '이 전문가는 국제 무역 규칙에 매우 익숙하다.',
      chinese: {
        hanzi: [
          '这',
          '位',
          '专家',
          '对',
          '国际',
          '贸易',
          '规则',
          '非常',
          '熟悉',
        ],
        pinyin: [
          'zhè',
          'wèi',
          'zhuānjiā',
          'duì',
          'guójì',
          'màoyì',
          'guīzé',
          'fēicháng',
          'shúxī',
        ],
      },
    },
    // 28번
    {
      id: 'sentence53',
      level: 1,
      isFinal: false,
      korean: '땀을 닦다.',
      chinese: {
        hanzi: ['擦', '汗'],
        pinyin: ['cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 2,
      isFinal: false,
      korean: '땀을 한번 닦다.',
      chinese: {
        hanzi: ['擦', '一', '擦', '汗'],
        pinyin: ['cā', 'yi', 'cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 3,
      isFinal: false,
      korean: '수건으로 땀을 닦다.',
      chinese: {
        hanzi: ['用', '毛巾', '擦', '一', '擦', '汗'],
        pinyin: ['yòng', 'máojīn', 'cā', 'yi', 'cā', 'hàn'],
      },
    },
    {
      id: 'sentence53',
      level: 4,
      isFinal: true,
      korean: '빨리 수건으로 땀 좀 닦아라.',
      chinese: {
        hanzi: ['快', '用', '毛巾', '擦', '一', '擦', '汗'],
        pinyin: ['kuài', 'yòng', 'máojīn', 'cā', 'yi', 'cā', 'hàn'],
      },
    },
    // 54번
    {
      id: 'sentence54',
      level: 1,
      isFinal: false,
      korean: '예의가 있다.',
      chinese: {
        hanzi: ['有', '礼貌'],
        pinyin: ['yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 2,
      isFinal: false,
      korean: '특히 예의가 있다.',
      chinese: {
        hanzi: ['特别', '有', '礼貌'],
        pinyin: ['tèbié', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 3,
      isFinal: false,
      korean: '아이가 특히 예의가 있다.',
      chinese: {
        hanzi: ['孩子', '特别', '有', '礼貌'],
        pinyin: ['háizi', 'tèbié', 'yǒu', 'lǐmào'],
      },
    },
    {
      id: 'sentence54',
      level: 4,
      isFinal: true,
      korean: '이웃집 아이는 특히 예의가 있다.',
      chinese: {
        hanzi: ['邻居', '家', '的', '孩子', '特别', '有', '礼貌'],
        pinyin: ['línjū', 'jiā', 'de', 'háizi', 'tèbié', 'yǒu', 'lǐmào'],
      },
    },

    // 55번
    {
      id: 'sentence55',
      level: 1,
      isFinal: false,
      korean: '생기가 없다.',
      chinese: {
        hanzi: ['没有', '精神'],
        pinyin: ['méiyǒu', 'jīngshen'],
      },
    },
    {
      id: 'sentence55',
      level: 2,
      isFinal: false,
      korean: '정말 생기가 없다.',
      chinese: {
        hanzi: ['实在', '没有', '精神'],
        pinyin: ['shízài', 'méiyǒu', 'jīngshen'],
      },
    },
    {
      id: 'sentence55',
      level: 3,
      isFinal: false,
      korean: '정말 생기가 없어졌다.',
      chinese: {
        hanzi: ['实在', '没有', '精神', '了'],
        pinyin: ['shízài', 'méiyǒu', 'jīngshen', 'le'],
      },
    },
    {
      id: 'sentence55',
      level: 4,
      isFinal: true,
      korean: '그의 눈에는 정말 생기가 없다.',
      chinese: {
        hanzi: ['他', '的', '眼睛', '实在', '没有', '精神', '了'],
        pinyin: ['tā', 'de', 'yǎnjing', 'shízài', 'méiyǒu', 'jīngshen', 'le'],
      },
    },
    // 56번
    {
      id: 'sentence56',
      level: 1,
      isFinal: false,
      korean: '쓰레기를 함부로 버리다.',
      chinese: {
        hanzi: ['乱', '扔', '垃圾'],
        pinyin: ['luàn', 'rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 2,
      isFinal: false,
      korean: '쓰레기를 함부로 버리지 마라.',
      chinese: {
        hanzi: ['不要', '乱', '扔', '垃圾'],
        pinyin: ['búyào', 'luàn', 'rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 3,
      isFinal: false,
      korean: '제발 쓰레기를 함부로 버리지 마세요.',
      chinese: {
        hanzi: ['请', '不要', '乱', '扔', '垃圾'],
        pinyin: ['qǐng', 'búyào', 'luàn', 'rēng', 'lājī'],
      },
    },
    {
      id: 'sentence56',
      level: 4,
      isFinal: true,
      korean: '여행객 여러분 쓰레기를 함부로 버리지 말아주세요.',
      chinese: {
        hanzi: ['各位', '游客', '请', '不要', '乱', '扔', '垃圾'],
        pinyin: ['gèwèi', 'yóukè', 'qǐng', 'búyào', 'luàn', 'rēng', 'lājī'],
      },
    },
    // 57번
    {
      id: 'sentence57',
      level: 1,
      isFinal: false,
      korean: '서랍 안에 넣었다.',
      chinese: {
        hanzi: ['放', '进', '了', '抽屉', '里'],
        pinyin: ['fàng', 'jìn', 'le', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 2,
      isFinal: false,
      korean: '책상의 서랍에 넣었다.',
      chinese: {
        hanzi: ['放', '进', '了', '桌子', '的', '抽屉', '里'],
        pinyin: ['fàng', 'jìn', 'le', 'zhuōzi', 'de', 'chōuti', 'lǐ'],
      },
    },
    {
      id: 'sentence57',
      level: 3,
      isFinal: false,
      korean: '계약서를 책상 서랍에 넣었다.',
      chinese: {
        hanzi: ['把', '合同', '放', '进', '了', '桌子', '的', '抽屉', '里'],
        pinyin: [
          'bǎ',
          'hétóng',
          'fàng',
          'jìn',
          'le',
          'zhuōzi',
          'de',
          'chōuti',
          'lǐ',
        ],
      },
    },
    {
      id: 'sentence57',
      level: 4,
      isFinal: true,
      korean: '비서가 계약서를 책상 서랍에 넣었다.',
      chinese: {
        hanzi: [
          '秘书',
          '把',
          '合同',
          '放',
          '进',
          '了',
          '桌子',
          '的',
          '抽屉',
          '里',
        ],
        pinyin: [
          'mìshū',
          'bǎ',
          'hétóng',
          'fàng',
          'jìn',
          'le',
          'zhuōzi',
          'de',
          'chōuti',
          'lǐ',
        ],
      },
    },
    // 58번
    {
      id: 'sentence58',
      level: 1,
      isFinal: false,
      korean: '잃어버렸다.',
      chinese: {
        hanzi: ['弄', '丢', '了'],
        pinyin: ['nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence58',
      level: 2,
      isFinal: false,
      korean: '샤오리에게 잃어버려졌다.',
      chinese: {
        hanzi: ['被', '小李', '弄', '丢', '了'],
        pinyin: ['bèi', 'Xiǎo Lǐ', 'nòng', 'diū', 'le'],
      },
    },
    {
      id: 'sentence58',
      level: 3,
      isFinal: true,
      korean: '자료를 샤오리가 잃어버렸다. (= 자료가 샤오리에게 잃어버려졌다.)',
      chinese: {
        hanzi: ['材料', '被', '小李', '弄', '丢', '了'],
        pinyin: ['cáiliào', 'bèi', 'Xiǎo Lǐ', 'nòng', 'diū', 'le'],
      },
    },
    // 59번
    {
      id: 'sentence59',
      level: 1,
      isFinal: false,
      korean: '저는 분명히 말했어요.',
      chinese: {
        hanzi: ['我', '说', '得', '清楚'],
        pinyin: ['wǒ', 'shuō', 'de', 'qīngchu'],
      },
    },
    {
      id: 'sentence59',
      level: 2,
      isFinal: false,
      korean: '제가 분명히 말했나요?',
      chinese: {
        hanzi: ['我', '说', '得', '清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 3,
      isFinal: false,
      korean: '제가 충분히 분명하게 말하지 않았나요?',
      chinese: {
        hanzi: ['我', '说', '得', '不够', '清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'búgòu', 'qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 4,
      isFinal: false,
      korean: '제가 아직 충분히 분명하게 말하지 않은 건가요?',
      chinese: {
        hanzi: ['我', '说', '得', '还', '不够', '清楚', '吗'],
        pinyin: ['wǒ', 'shuō', 'de', 'hái', 'búgòu', 'qīngchu', 'ma'],
      },
    },
    {
      id: 'sentence59',
      level: 5,
      isFinal: true,
      korean: '도대체 제가 아직도 충분히 분명하게 말하지 않은 건가요?',
      chinese: {
        hanzi: ['难道', '我', '说', '得', '还', '不够', '清楚', '吗'],
        pinyin: ['nándào', 'wǒ', 'shuō', 'de', 'hái', 'búgòu', 'qīngchu', 'ma'],
      },
    },
    //60번
    {
      id: 'sentence60',
      level: 1,
      isFinal: false,
      korean: '중요하게 여겨지다, 주목을 끌다',
      chinese: {
        hanzi: ['引起', '重视'],
        pinyin: ['yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 2,
      isFinal: false,
      korean: '중시되다.',
      chinese: {
        hanzi: ['被', '引起', '重视'],
        pinyin: ['bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 3,
      isFinal: false,
      korean: '중시되지 않았다.',
      chinese: {
        hanzi: ['没有', '被', '引起', '重视'],
        pinyin: ['méiyǒu', 'bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 4,
      isFinal: false,
      korean: '전혀 중시되지 않았다.',
      chinese: {
        hanzi: ['并', '没有', '被', '引起', '重视'],
        pinyin: ['bìng', 'méiyǒu', 'bèi', 'yǐnqǐ', 'zhòngshì'],
      },
    },
    {
      id: 'sentence60',
      level: 5,
      isFinal: true,
      korean: '이러한 위험들은 전혀 중시되지 않았다.',
      chinese: {
        hanzi: ['这', '些', '风险', '并', '没有', '被', '引起', '重视'],
        pinyin: [
          'zhè',
          'xiē',
          'fēngxiǎn',
          'bìng',
          'méiyǒu',
          'bèi',
          'yǐnqǐ',
          'zhòngshì',
        ],
      },
    },
  ],
  day7: [
    // 61번
    {
      id: 'sentence61',
      level: 1,
      isFinal: false,
      korean: '8위안 3마오에 팔다.',
      chinese: {
        hanzi: ['卖', '八', '块', '三', '毛', '钱'],
        pinyin: ['mài', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 2,
      isFinal: false,
      korean: '8위안 3마오에 팔렸다.',
      chinese: {
        hanzi: ['卖', '了', '八', '块', '三', '毛', '钱'],
        pinyin: ['mài', 'le', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 3,
      isFinal: false,
      korean: '헌 책을 8위안 3마오에 팔았다.',
      chinese: {
        hanzi: ['旧书', '卖', '了', '八', '块', '三', '毛', '钱'],
        pinyin: ['jiùshū', 'mài', 'le', 'bā', 'kuài', 'sān', 'máo', 'qián'],
      },
    },
    {
      id: 'sentence61',
      level: 4,
      isFinal: true,
      korean: '집에 있던 헌 책을 8위안 3마오에 팔았다.',
      chinese: {
        hanzi: ['家里', '的', '旧书', '卖', '了', '八', '块', '三', '毛', '钱'],
        pinyin: [
          'jiālǐ',
          'de',
          'jiùshū',
          'mài',
          'le',
          'bā',
          'kuài',
          'sān',
          'máo',
          'qián',
        ],
      },
    },
    // 62번
    {
      id: 'sentence62',
      level: 1,
      isFinal: false,
      korean: '작년의 두 배',
      chinese: {
        hanzi: ['去年', '的', '两', '倍'],
        pinyin: ['qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 2,
      isFinal: false,
      korean: '작년의 두 배이다.',
      chinese: {
        hanzi: ['是', '去年', '的', '两', '倍'],
        pinyin: ['shì', 'qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 3,
      isFinal: false,
      korean: '급여가 작년의 두 배이다.',
      chinese: {
        hanzi: ['工资', '是', '去年', '的', '两', '倍'],
        pinyin: ['gōngzī', 'shì', 'qùnián', 'de', 'liǎng', 'bèi'],
      },
    },
    {
      id: 'sentence62',
      level: 4,
      isFinal: true,
      korean: '이 직위의 급여는 작년의 두 배이다.',
      chinese: {
        hanzi: ['这个', '岗位', '的', '工资', '是', '去年', '的', '两', '倍'],
        pinyin: [
          'zhège',
          'gǎngwèi',
          'de',
          'gōngzī',
          'shì',
          'qùnián',
          'de',
          'liǎng',
          'bèi',
        ],
      },
    },
    // 73번
    {
      id: 'sentence63',
      level: 1,
      isFinal: false,
      korean: '도움이 된다.',
      chinese: {
        hanzi: ['有', '帮助'],
        pinyin: ['yǒu', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 2,
      isFinal: false,
      korean: '휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['有', '很', '大', '帮助'],
        pinyin: ['yǒu', 'hěn', 'dà', 'bāngzhù'],
      },
    },
    {
      id: 'sentence63',
      level: 3,
      isFinal: false,
      korean: '회사 관리에 큰 도움이 된다.',
      chinese: {
        hanzi: ['对', '公司', '的', '管理', '有', '很', '大', '帮助'],
        pinyin: [
          'duì',
          'gōngsī',
          'de',
          'guǎnlǐ',
          'yǒu',
          'hěn',
          'dà',
          'bāngzhù',
        ],
      },
    },
    {
      id: 'sentence63',
      level: 4,
      isFinal: true,
      korean: '이 제도는 회사 관리에 큰 도움이 된다.',
      chinese: {
        hanzi: [
          '这个',
          '制度',
          '对',
          '公司',
          '的',
          '管理',
          '有',
          '很',
          '大',
          '帮助',
        ],
        pinyin: [
          'zhège',
          'zhìdù',
          'duì',
          'gōngsī',
          'de',
          'guǎnlǐ',
          'yǒu',
          'hěn',
          'dà',
          'bāngzhù',
        ],
      },
    },
    // 74번
    {
      id: 'sentence64',
      level: 1,
      isFinal: false,
      korean: '너무 자세하다.',
      chinese: {
        hanzi: ['太', '详细', '了'],
        pinyin: ['tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 2,
      isFinal: false,
      korean: '보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['报告', '也', '太', '详细', '了'],
        pinyin: ['bàogào', 'yě', 'tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 3,
      isFinal: false,
      korean: '그가 쓴 보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['他', '写', '的', '报告', '也', '太', '详细', '了'],
        pinyin: ['tā', 'xiě', 'de', 'bàogào', 'yě', 'tài', 'xiángxì', 'le'],
      },
    },
    {
      id: 'sentence64',
      level: 4,
      isFinal: true,
      korean: '그가 새로 쓴 보고서도 너무 자세하다.',
      chinese: {
        hanzi: ['他', '新', '写', '的', '报告', '也', '太', '详细', '了'],
        pinyin: [
          'tā',
          'xīn',
          'xiě',
          'de',
          'bàogào',
          'yě',
          'tài',
          'xiángxì',
          'le',
        ],
      },
    },
    // 75번
    {
      id: 'sentence65',
      level: 1,
      isFinal: false,
      korean: '더 중요하다.',
      chinese: {
        hanzi: ['更', '重要'],
        pinyin: ['gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 2,
      isFinal: false,
      korean: '시간보다 더 중요하다.',
      chinese: {
        hanzi: ['比', '时间', '更', '重要'],
        pinyin: ['bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 3,
      isFinal: false,
      korean: '효율이 시간보다 더 중요하다.',
      chinese: {
        hanzi: ['效率', '比', '时间', '更', '重要'],
        pinyin: ['xiàolǜ', 'bǐ', 'shíjiān', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence65',
      level: 4,
      isFinal: true,
      korean: '업무 효율이 시간보다 더 중요하다.',
      chinese: {
        hanzi: ['工作', '的', '效率', '比', '时间', '更', '重要'],
        pinyin: [
          'gōngzuò',
          'de',
          'xiàolǜ',
          'bǐ',
          'shíjiān',
          'gèng',
          'zhòngyào',
        ],
      },
    },
    // 76번
    {
      id: 'sentence66',
      level: 1,
      isFinal: false,
      korean: '활동에 참여하다.',
      chinese: {
        hanzi: ['参加', '活动'],
        pinyin: ['cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 2,
      isFinal: false,
      korean: '활동에 참여하고 싶다.',
      chinese: {
        hanzi: ['想', '参加', '活动'],
        pinyin: ['xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 3,
      isFinal: false,
      korean: '활동에 참여하고 싶지 않다.',
      chinese: {
        hanzi: ['不', '想', '参加', '活动'],
        pinyin: ['bù', 'xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 4,
      isFinal: false,
      korean: '조금도 활동에 참여하고 싶지 않다.',
      chinese: {
        hanzi: ['一点儿', '也', '不', '想', '参加', '活动'],
        pinyin: ['yìdiǎnr', 'yě', 'bù', 'xiǎng', 'cānjiā', 'huódòng'],
      },
    },
    {
      id: 'sentence66',
      level: 5,
      isFinal: true,
      korean: '내 동료는 활동에 조금도 참여하고 싶어 하지 않는다.',
      chinese: {
        hanzi: ['我', '同事', '一点儿', '也', '不', '想', '参加', '活动'],
        pinyin: [
          'wǒ',
          'tóngshì',
          'yìdiǎnr',
          'yě',
          'bù',
          'xiǎng',
          'cānjiā',
          'huódòng',
        ],
      },
    },
    // 77번
    {
      id: 'sentence67',
      level: 1,
      isFinal: false,
      korean: '편의점 한 곳',
      chinese: {
        hanzi: ['一', '家', '便利店'],
        pinyin: ['yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 2,
      isFinal: false,
      korean: '편의점이 한 곳 있다.',
      chinese: {
        hanzi: ['有', '一', '家', '便利店'],
        pinyin: ['yǒu', 'yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 3,
      isFinal: false,
      korean: '......하면, 바로 편의점이 있다.',
      chinese: {
        hanzi: ['就', '有', '一', '家', '便利店'],
        pinyin: ['jiù', 'yǒu', 'yì', 'jiā', 'biànlìdiàn'],
      },
    },
    {
      id: 'sentence67',
      level: 4,
      isFinal: false,
      korean: '10분 걷다.',
      chinese: {
        hanzi: ['走', '十', '分钟'],
        pinyin: ['zǒu', 'shí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence67',
      level: 5,
      isFinal: false,
      korean: '10분 더 걷다.',
      chinese: {
        hanzi: ['再', '走', '十', '分钟'],
        pinyin: ['zài', 'zǒu', 'shí', 'fēnzhōng'],
      },
    },
    {
      id: 'sentence67',
      level: 6,
      isFinal: true,
      korean: '10분 더 걸으면 바로 편의점이 있다.',
      chinese: {
        hanzi: ['再', '走', '十', '分钟', '就', '有', '一', '家', '便利店'],
        pinyin: [
          'zài',
          'zǒu',
          'shí',
          'fēnzhōng',
          'jiù',
          'yǒu',
          'yì',
          'jiā',
          'biànlìdiàn',
        ],
      },
    },
    // 78번
    {
      id: 'sentence68',
      level: 1,
      isFinal: false,
      korean: '한번 번역해봐요.',
      chinese: {
        hanzi: ['翻译', '一下'],
        pinyin: ['fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 2,
      isFinal: false,
      korean: '내용을 한번 번역해봐요.',
      chinese: {
        hanzi: ['把', '内容', '翻译', '一下'],
        pinyin: ['bǎ', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 3,
      isFinal: false,
      korean: '이 단락 내용을 한번 번역해봐요.',
      chinese: {
        hanzi: ['把', '这', '段', '内容', '翻译', '一下'],
        pinyin: ['bǎ', 'zhè', 'duàn', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    {
      id: 'sentence68',
      level: 4,
      isFinal: true,
      korean: '이 단락 내용을 한번 번역해보세요.',
      chinese: {
        hanzi: ['请', '把', '这', '段', '内容', '翻译', '一下'],
        pinyin: ['qǐng', 'bǎ', 'zhè', 'duàn', 'nèiróng', 'fānyì', 'yíxià'],
      },
    },
    // 79번
    {
      id: 'sentence69',
      level: 1,
      isFinal: false,
      korean: '잘 정리되었다.',
      chinese: {
        hanzi: ['整理', '好', '了'],
        pinyin: ['zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 2,
      isFinal: false,
      korean: '분류하여 잘 정리되었다.',
      chinese: {
        hanzi: ['分类', '整理', '好', '了'],
        pinyin: ['fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 3,
      isFinal: false,
      korean: '그가 분류하여 잘 정리했다. (= 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['被', '他', '分类', '整理', '好', '了'],
        pinyin: ['bèi', 'tā', 'fēnlèi', 'zhěnglǐ', 'hǎo', 'le'],
      },
    },
    {
      id: 'sentence69',
      level: 4,
      isFinal: false,
      korean:
        '다 그가 분류해서 정리했다. (= 다 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['都', '被', '他', '分类', '整理', '好', '了'],
        pinyin: [
          'dōu',
          'qǐng',
          'bǎ',
          'zhè',
          'duàn',
          'nèiróng',
          'fānyì',
          'yíxià',
        ],
      },
    },
    {
      id: 'sentence69',
      level: 5,
      isFinal: true,
      korean:
        '모든 파일은 다 그가 분류·정리했다. (= 모든 파일은 다 그에 의해 분류되어 잘 정리됐다.)',
      chinese: {
        hanzi: ['所有', '文件', '都', '被', '他', '分类', '整理', '好', '了'],
        pinyin: [
          'suǒyǒu',
          'wénjiàn',
          'dōu',
          'bèi',
          'tā',
          'fēnlèi',
          'zhěnglǐ',
          'hǎo',
          'le',
        ],
      },
    },
    // 80번
    {
      id: 'sentence70',
      level: 1,
      isFinal: false,
      korean: '더 효율적이다.',
      chinese: {
        hanzi: ['更', '高效'],
        pinyin: ['gèng', 'gāoxiào'],
      },
    },
    {
      id: 'sentence70',
      level: 2,
      isFinal: false,
      korean: '더 효율적으로 변했다.',
      chinese: {
        hanzi: ['变得', '更', '高效', '了'],
        pinyin: ['biànde', 'gèng', 'gāoxiào', 'le'],
      },
    },
    {
      id: 'sentence70',
      level: 3,
      isFinal: false,
      korean: '일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: ['让', '工作', '变得', '更', '高效', '了'],
        pinyin: ['ràng', 'gōngzuò', 'biànde', 'gèng', 'gāoxiào', 'le'],
      },
    },
    {
      id: 'sentence70',
      level: 4,
      isFinal: false,
      korean: '우리의 일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: ['让', '我们', '的', '工作', '变得', '更', '高效', '了'],
        pinyin: [
          'ràng',
          'wǒmen',
          'de',
          'gōngzuò',
          'biànde',
          'gèng',
          'gāoxiào',
          'le',
        ],
      },
    },
    {
      id: 'sentence70',
      level: 5,
      isFinal: true,
      korean: '새 기술이 우리의 일을 더 효율적으로 변하도록 했다.',
      chinese: {
        hanzi: [
          '新',
          '技术',
          '让',
          '我们',
          '的',
          '工作',
          '变得',
          '更',
          '高效',
          '了',
        ],
        pinyin: [
          'xīn',
          'jìshù',
          'ràng',
          'wǒmen',
          'de',
          'gōngzuò',
          'biànde',
          'gèng',
          'gāoxiào',
          'le',
        ],
      },
    },
  ],
  day8: [
    // 71번
    {
      id: 'sentence71',
      level: 1,
      isFinal: false,
      korean: '공동의 책임',
      chinese: {
        hanzi: ['共同', '的', '责任'],
        pinyin: ['gòngtóng', 'de', 'zérèn'],
      },
    },
    {
      id: 'sentence71',
      level: 2,
      isFinal: false,
      korean: '인류 공동의 책임',
      chinese: {
        hanzi: ['人类', '共同', '的', '责任'],
        pinyin: ['rénlèi', 'gòngtóng', 'de', 'zérèn'],
      },
    },
    {
      id: 'sentence71',
      level: 3,
      isFinal: true,
      korean: '교육은 인류 공동의 책임이다.',
      chinese: {
        hanzi: ['教育', '是', '人类', '共同', '的', '责任'],
        pinyin: ['jiàoyù', 'shì', 'rénlèi', 'gòngtóng', 'de', 'zérèn'],
      },
    },

    // 72번
    {
      id: 'sentence72',
      level: 1,
      isFinal: false,
      korean: '감동적으로 친다. (= 치는 정도가 감동적이다.)',
      chinese: {
        hanzi: ['弹', '得', '动人'],
        pinyin: ['tán', 'de', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 2,
      isFinal: false,
      korean: '매우 감동적으로 친다. (= 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['弹', '得', '十分', '动人'],
        pinyin: ['tán', 'de', 'shífēn', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 3,
      isFinal: false,
      korean: '저는 반드시 성공할 거예요.',
      chinese: {
        hanzi: ['钢琴', '弹', '得', '十分', '动人'],
        pinyin: ['gāngqín', 'tán', 'de', 'shífēn', 'dòngrén'],
      },
    },
    {
      id: 'sentence72',
      level: 4,
      isFinal: true,
      korean:
        '그는 피아노를 매우 감동적으로 친다. (= 그는 피아노를 치는 정도가 매우 감동적이다.)',
      chinese: {
        hanzi: ['他', '钢琴', '弹', '得', '十分', '动人'],
        pinyin: ['tā', 'gāngqín', 'tán', 'de', 'shífēn', 'dòngrén'],
      },
    },

    // 73번
    {
      id: 'sentence73',
      level: 1,
      isFinal: false,
      korean: '방법은 매우 간단하다.',
      chinese: {
        hanzi: ['方法', '很', '简单'],
        pinyin: ['fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 2,
      isFinal: false,
      korean: '조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['操作', '方法', '很', '简单'],
        pinyin: ['cāozuò', 'fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 3,
      isFinal: false,
      korean: '소프트웨어의 조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['软件', '的', '操作', '方法', '很', '简单'],
        pinyin: ['ruǎnjiàn', 'de', 'cāozuò', 'fāngfǎ', 'hěn', 'jiǎndān'],
      },
    },
    {
      id: 'sentence73',
      level: 4,
      isFinal: true,
      korean: '이 소프트웨어의 조작 방법은 매우 간단하다.',
      chinese: {
        hanzi: ['这个', '软件', '的', '操作', '方法', '很', '简单'],
        pinyin: [
          'zhège',
          'ruǎnjiàn',
          'de',
          'cāozuò',
          'fāngfǎ',
          'hěn',
          'jiǎndān',
        ],
      },
    },
    // 74번
    {
      id: 'sentence74',
      level: 1,
      isFinal: false,
      korean: '냉장고에 넣다.',
      chinese: {
        hanzi: ['放进', '冰箱', '里'],
        pinyin: ['fàngjìn', 'bīngxiāng', 'lǐ'],
      },
    },
    {
      id: 'sentence74',
      level: 2,
      isFinal: false,
      korean: '냉장고에 넣자(넣어라).',
      chinese: {
        hanzi: ['放进', '冰箱', '里', '吧'],
        pinyin: ['fàngjìn', 'bīngxiāng', 'lǐ', 'ba'],
      },
    },
    {
      id: 'sentence74',
      level: 3,
      isFinal: false,
      korean: '다 마시지 않은 우유',
      chinese: {
        hanzi: ['没', '喝', '完', '的', '牛奶'],
        pinyin: ['méi', 'hē', 'wán', 'de', 'niúnǎi'],
      },
    },
    {
      id: 'sentence74',
      level: 4,
      isFinal: true,
      korean: '다 마시지 않은 우유를 냉장고에 넣어라.',
      chinese: {
        hanzi: [
          '把',
          '没',
          '喝',
          '完',
          '的',
          '牛奶',
          '放进',
          '冰箱',
          '里',
          '吧',
        ],
        pinyin: [
          'bǎ',
          'méi',
          'hē',
          'wán',
          'de',
          'niúnǎi',
          'fàngjìn',
          'bīngxiāng',
          'lǐ',
          'ba',
        ],
      },
    },
    // 75번
    {
      id: 'sentence75',
      level: 1,
      isFinal: false,
      korean: '기침이 심하다. (=기침하는 정도가 심하다)',
      chinese: {
        hanzi: ['咳嗽', '得', '严重'],
        pinyin: ['késou', 'de', 'yánzhòng'],
      },
    },
    {
      id: 'sentence75',
      level: 2,
      isFinal: false,
      korean: '점점 심하게 기침한다. (=기침하는 정도가 점점 심하다)',
      chinese: {
        hanzi: ['咳嗽', '得', '越来越', '严重'],
        pinyin: ['késou', 'de', 'yuèláiyuè', 'yánzhòng'],
      },
    },
    {
      id: 'sentence75',
      level: 3,
      isFinal: true,
      korean:
        '아이가 점점 심하게 기침한다. (=아이가 기침하는 정도가 점점 심하다)',
      chinese: {
        hanzi: ['孩子', '咳嗽', '得', '越来越', '严重'],
        pinyin: ['háizi', 'késou', 'de', 'yuèláiyuè', 'yánzhòng'],
      },
    },
    // 76번
    {
      id: 'sentence76',
      level: 1,
      isFinal: false,
      korean: '내용은 훌륭하다.',
      chinese: {
        hanzi: ['内容', '精彩'],
        pinyin: ['nèiróng', 'jīngcǎi'],
      },
    },
    {
      id: 'sentence76',
      level: 2,
      isFinal: false,
      korean: '영화 내용은 훌륭하다.',
      chinese: {
        hanzi: ['电影', '内容', '精彩'],
        pinyin: ['diànyǐng', 'nèiróng', 'jīngcǎi'],
      },
    },
    {
      id: 'sentence76',
      level: 3,
      isFinal: false,
      korean: '영화 내용은 훌륭해?',
      chinese: {
        hanzi: ['电影', '内容', '精彩', '吗'],
        pinyin: ['diànyǐng', 'nèiróng', 'jīngcǎi', 'ma'],
      },
    },
    {
      id: 'sentence76',
      level: 4,
      isFinal: true,
      korean: '지난주 영화 내용은 훌륭했어?',
      chinese: {
        hanzi: ['上周', '的', '电影', '内容', '精彩', '吗'],
        pinyin: ['shàngzhōu', 'de', 'diànyǐng', 'nèiróng', 'jīngcǎi', 'ma'],
      },
    },
    // 77번
    {
      id: 'sentence77',
      level: 1,
      isFinal: false,
      korean: '의견이 있다.',
      chinese: {
        hanzi: ['有', '看法'],
        pinyin: ['yǒu', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 2,
      isFinal: false,
      korean: '이 일에 대해 의견이 있다.',
      chinese: {
        hanzi: ['对', '这', '件', '事', '有', '看法'],
        pinyin: ['duì', 'zhè', 'jiàn', 'shì', 'yǒu', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 3,
      isFinal: false,
      korean: '이 일에 대해 같은 의견이 있다.',
      chinese: {
        hanzi: ['对', '这', '件', '事', '有', '相同', '看法'],
        pinyin: ['duì', 'zhè', 'jiàn', 'shì', 'yǒu', 'xiāngtóng', 'kànfǎ'],
      },
    },
    {
      id: 'sentence77',
      level: 4,
      isFinal: true,
      korean: '그들은 이 일에 대해 같은 의견이 있다.',
      chinese: {
        hanzi: ['他们', '对', '这', '件', '事', '有', '相同', '看法'],
        pinyin: [
          'tāmen',
          'duì',
          'zhè',
          'jiàn',
          'shì',
          'yǒu',
          'xiāngtóng',
          'kànfǎ',
        ],
      },
    },
    // 78번
    {
      id: 'sentence78',
      level: 1,
      isFinal: false,
      korean: '(나쁜 습관 등을) 기르지 마라(들이지 마라)',
      chinese: {
        hanzi: ['不要', '养成'],
        pinyin: ['búyào', 'yǎngchéng'],
      },
    },
    {
      id: 'sentence78',
      level: 2,
      isFinal: false,
      korean: '나쁜 습관을 들이지 마라.',
      chinese: {
        hanzi: ['不要', '养成', '坏', '习惯'],
        pinyin: ['búyào', 'yǎngchéng', 'huài', 'xíguàn'],
      },
    },
    {
      id: 'sentence78',
      level: 3,
      isFinal: true,
      korean: '지각하는 나쁜 습관을 들이지 마라.',
      chinese: {
        hanzi: ['不要', '养成', '迟到', '的', '坏', '习惯'],
        pinyin: ['búyào', 'yǎngchéng', 'chídào', 'de', 'huài', 'xíguàn'],
      },
    },
    // 79번
    {
      id: 'sentence79',
      level: 1,
      isFinal: false,
      korean: '눈물을 흘렸다.',
      chinese: {
        hanzi: ['流泪', '了'],
        pinyin: ['liúlèi', 'le'],
      },
    },
    {
      id: 'sentence79',
      level: 2,
      isFinal: false,
      korean: '눈물을 흘릴 정도로 감동했다.',
      chinese: {
        hanzi: ['感动', '得', '流泪', '了'],
        pinyin: ['gǎndòng', 'de', 'liúlèi', 'le'],
      },
    },
    {
      id: 'sentence79',
      level: 3,
      isFinal: true,
      korean: '그녀는 눈물을 흘릴 정도로 감동했다.',
      chinese: {
        hanzi: ['她', '感动', '得', '流泪', '了'],
        pinyin: ['tā', 'gǎndòng', 'de', 'liúlèi', 'le'],
      },
    },
    // 80번
    {
      id: 'sentence80',
      level: 1,
      isFinal: false,
      korean: '그는 ……을 증명했다.',
      chinese: {
        hanzi: ['他', '证明'],
        pinyin: ['tā', 'zhèngmíng'],
      },
    },
    {
      id: 'sentence80',
      level: 2,
      isFinal: false,
      korean: '그는 ……을 증명하고 싶어 한다.',
      chinese: {
        hanzi: ['他', '想', '证明'],
        pinyin: ['tā', 'xiǎng', 'zhèngmíng'],
      },
    },
    {
      id: 'sentence80',
      level: 3,
      isFinal: false,
      korean: '선택은 옳다. (= 선택은 옳은 것이다.)',
      chinese: {
        hanzi: ['选择', '是', '正确', '的'],
        pinyin: ['xuǎnzé', 'shì', 'zhèngquè', 'de'],
      },
    },
    {
      id: 'sentence80',
      level: 4,
      isFinal: false,
      korean: '자신의 선택은 옳다. (= 자신의 선택은 옳은 것이다.)',
      chinese: {
        hanzi: ['自己', '的', '选择', '是', '正确', '的'],
        pinyin: ['zìjǐ', 'de', 'xuǎnzé', 'shì', 'zhèngquè', 'de'],
      },
    },
    {
      id: 'sentence80',
      level: 5,
      isFinal: true,
      korean: '그는 자신의 선택이 옳다는 것을 증명하고 싶어 한다.',
      chinese: {
        hanzi: ['他', '想', '证明', '自己', '的', '选择', '是', '正确', '的'],
        pinyin: [
          'tā',
          'xiǎng',
          'zhèngmíng',
          'zìjǐ',
          'de',
          'xuǎnzé',
          'shì',
          'zhèngquè',
          'de',
        ],
      },
    },
  ],
  day9: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '푹 쉬어요.',
      chinese: {
        hanzi: ['多休息'],
        pinyin: ['duō xiūxi'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: false,
      korean: '푹 쉬어야 해요.',
      chinese: {
        hanzi: ['应该', '多', '休息'],
        pinyin: ['yīnggāi', 'duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence41',
      level: 3,
      isFinal: false,
      korean: '당신은 푹 쉬어야 해요.',
      chinese: {
        hanzi: ['你', '应该', '多', '休息'],
        pinyin: ['nǐ', 'yīnggāi', 'duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence41',
      level: 4,
      isFinal: false,
      korean: '더 중요해요.',
      chinese: {
        hanzi: ['更', '重要'],
        pinyin: ['gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence41',
      level: 5,
      isFinal: false,
      korean: '일보다 더 중요해요.',
      chinese: {
        hanzi: ['比', '工作', '更', '重要'],
        pinyin: ['bǐ', 'gōngzuò', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence41',
      level: 6,
      isFinal: false,
      korean: '몸이 일보다 더 중요해요.',
      chinese: {
        hanzi: ['身体', '比', '工作', '更', '重要'],
        pinyin: ['shēntǐ', 'bǐ', 'gōngzuò', 'gèng', 'zhòngyào'],
      },
    },
    {
      id: 'sentence41',
      level: 7,
      isFinal: true,
      korean: 'A: 당신은 푹 쉬어야 해요, 몸이 일보다 더 중요해요.',
      chinese: {
        hanzi: ['你', '应该', '多', '休息', '身体', '比', '工作', '更', '重要'],
        pinyin: [
          'nǐ',
          'yīnggāi',
          'duō',
          'xiūxi',
          'shēntǐ',
          'bǐ',
          'gōngzuò',
          'gèng',
          'zhòngyào',
        ],
      },
    },
    {
      id: 'sentence41',
      level: 8,
      isFinal: false,
      korean: '일이 많아요.',
      chinese: {
        hanzi: ['事情', '多'],
        pinyin: ['shìqing', 'duō'],
      },
    },
    {
      id: 'sentence41',
      level: 9,
      isFinal: false,
      korean: '일이 너무 많아요.',
      chinese: {
        hanzi: ['事情', '太', '多', '了'],
        pinyin: ['shìqing', 'tài', 'duō', 'le'],
      },
    },
    {
      id: 'sentence41',
      level: 10,
      isFinal: false,
      korean: '하지만 일이 너무 많아요.',
      chinese: {
        hanzi: ['可是', '事情', '太', '多', '了'],
        pinyin: ['kěshì', 'shìqing', 'tài', 'duō', 'le'],
      },
    },
    {
      id: 'sentence41',
      level: 11,
      isFinal: true,
      korean: 'B: 저는 알아요(저도 알아요), 하지만 일이 너무 많아요.',
      chinese: {
        hanzi: ['我', '知道', '可是', '事情', '太', '多', '了'],
        pinyin: ['wǒ', 'zhīdao', 'kěshì', 'shìqing', 'tài', 'duō', 'le'],
      },
    },

    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '밤을 새요.',
      chinese: {
        hanzi: ['熬夜'],
        pinyin: ['áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean: '자꾸 밤을 새요.',
      chinese: {
        hanzi: ['总是', '熬夜'],
        pinyin: ['zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: false,
      korean: '자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['不应该', '总是', '熬夜'],
        pinyin: ['bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 4,
      isFinal: false,
      korean: '당신은 자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['你', '不应该', '总是', '熬夜'],
        pinyin: ['nǐ', 'bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence42',
      level: 5,
      isFinal: false,
      korean: '좋지 않아요.',
      chinese: {
        hanzi: ['不好'],
        pinyin: ['bù hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 6,
      isFinal: false,
      korean: '건강에 안 좋아요.',
      chinese: {
        hanzi: ['对', '身体', '不好'],
        pinyin: ['duì', 'shēntǐ', 'bù hǎo'],
      },
    },
    {
      id: 'sentence42',
      level: 7,
      isFinal: true,
      korean: 'A: 당신은 자꾸 밤새면 안 돼요, 건강에 안 좋아요.',
      chinese: {
        hanzi: ['你', '不应该', '总是', '熬夜', '对', '身体', '不好'],
        pinyin: [
          'nǐ',
          'bù yīnggāi',
          'zǒngshì',
          'áoyè',
          'duì',
          'shēntǐ',
          'bù hǎo',
        ],
      },
    },
    {
      id: 'sentence42',
      level: 8,
      isFinal: false,
      korean: '너무 바빠요.',
      chinese: {
        hanzi: ['太', '忙', '了'],
        pinyin: ['tài', 'máng', 'le'],
      },
    },
    {
      id: 'sentence42',
      level: 9,
      isFinal: false,
      korean: '낮에는 너무 바빠요.',
      chinese: {
        hanzi: ['白天', '太', '忙', '了'],
        pinyin: ['báitiān', 'tài', 'máng', 'le'],
      },
    },
    {
      id: 'sentence42',
      level: 10,
      isFinal: false,
      korean: '어쩔 수 없어요.(방법이 없어요).',
      chinese: {
        hanzi: ['没办法'],
        pinyin: ['méi bànfǎ'],
      },
    },
    {
      id: 'sentence42',
      level: 11,
      isFinal: true,
      korean: 'B: 어쩔 수 없어요, 낮에는 너무 바쁘거든요.',
      chinese: {
        hanzi: ['没', '办法', '白天', '太', '忙', '了'],
        pinyin: ['méi', 'bànfǎ', 'báitiān', 'tài', 'máng', 'le'],
      },
    },

    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '가야 해요.',
      chinese: {
        hanzi: ['得走'],
        pinyin: ['děi zǒu'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean: '[상황의 변화] 이제 가야 해요.',
      chinese: {
        hanzi: ['得', '走', '了'],
        pinyin: ['děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: false,
      korean: '저는 이제 가야 해요.',
      chinese: {
        hanzi: ['我', '得', '走', '了'],
        pinyin: ['wǒ', 'děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 4,
      isFinal: false,
      korean: '일이 있어요.',
      chinese: {
        hanzi: ['有', '事'],
        pinyin: ['yǒu', 'shì'],
      },
    },
    {
      id: 'sentence43',
      level: 5,
      isFinal: false,
      korean: '아직 일이 있어요.',
      chinese: {
        hanzi: ['还', '有', '事'],
        pinyin: ['hái', 'yǒu', 'shì'],
      },
    },
    {
      id: 'sentence43',
      level: 6,
      isFinal: true,
      korean: 'A: 저는 가야 해요, 집에 아직 일이 있어요.',
      chinese: {
        hanzi: ['我', '得', '走', '了', '家里', '还', '有', '事'],
        pinyin: ['wǒ', 'děi', 'zǒu', 'le', 'jiā lǐ', 'hái', 'yǒu', 'shì'],
      },
    },
    {
      id: 'sentence43',
      level: 7,
      isFinal: false,
      korean: '가는 길 조심해요.',
      chinese: {
        hanzi: ['路上', '小心'],
        pinyin: ['lùshang', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence43',
      level: 8,
      isFinal: false,
      korean: '당신은 가는 길 조심해요.',
      chinese: {
        hanzi: ['你', '路上', '小心'],
        pinyin: ['nǐ', 'lùshang', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence43',
      level: 9,
      isFinal: false,
      korean: '그럼 당신은 가는 길 조심해요.',
      chinese: {
        hanzi: ['那', '你', '路上', '小心'],
        pinyin: ['nà', 'nǐ', 'lùshang', 'xiǎoxīn'],
      },
    },
    {
      id: 'sentence43',
      level: 10,
      isFinal: true,
      korean: 'B: 알겠어요, 그럼 당신은 가는 길 조심해요.',
      chinese: {
        hanzi: ['好的', '那', '你', '路上', '小心'],
        pinyin: ['hǎo de', 'nà', 'nǐ', 'lùshang', 'xiǎoxīn'],
      },
    },

    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '나에게 시집 와.',
      chinese: {
        hanzi: ['嫁给我'],
        pinyin: ['jià gěi wǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '너는 나에게 시집 와.',
      chinese: {
        hanzi: ['你', '嫁给', '我'],
        pinyin: ['nǐ', 'jià gěi', 'wǒ'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: false,
      korean: '너는 나에게 시집 올래(결혼할래)?',
      chinese: {
        hanzi: ['你', '嫁给', '我', '吗'],
        pinyin: ['nǐ', 'jià gěi', 'wǒ', 'ma'],
      },
    },
    {
      id: 'sentence44',
      level: 4,
      isFinal: false,
      korean: '너는 나에게 시집 와 줄래? (결혼해 줄래?)',
      chinese: {
        hanzi: ['你', '愿意', '嫁给', '我', '吗'],
        pinyin: ['nǐ', 'yuànyì', 'jià gěi', 'wǒ', 'ma'],
      },
    },
    {
      id: 'sentence44',
      level: 5,
      isFinal: false,
      korean: '너를 사랑해.',
      chinese: {
        hanzi: ['爱', '你'],
        pinyin: ['ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 6,
      isFinal: false,
      korean: '너를 정말 사랑해.',
      chinese: {
        hanzi: ['很', '爱', '你'],
        pinyin: ['hěn', 'ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 7,
      isFinal: false,
      korean: '진짜 정말 너를 사랑해.',
      chinese: {
        hanzi: ['真的', '很', '爱', '你'],
        pinyin: ['zhēnde', 'hěn', 'ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 8,
      isFinal: false,
      korean: '나는 진짜 정말 너를 사랑해.',
      chinese: {
        hanzi: ['我', '真的', '很', '爱', '你'],
        pinyin: ['wǒ', 'zhēnde', 'hěn', 'ài', 'nǐ'],
      },
    },
    {
      id: 'sentence44',
      level: 9,
      isFinal: true,
      korean:
        'A: 너는 나에게 시집 와 줄래(결혼해 줄래)? 나는 진짜 정말 너를 사랑해.',
      chinese: {
        hanzi: [
          '你',
          '愿意',
          '嫁给',
          '我',
          '吗',
          '我',
          '真的',
          '很',
          '爱',
          '你',
        ],
        pinyin: [
          'nǐ',
          'yuànyì',
          'jià gěi',
          'wǒ',
          'ma',
          'wǒ',
          'zhēnde',
          'hěn',
          'ài',
          'nǐ',
        ],
      },
    },
    {
      id: 'sentence44',
      level: 10,
      isFinal: false,
      korean: '당연히 원해.',
      chinese: {
        hanzi: ['当然', '愿意'],
        pinyin: ['dāngrán', 'yuànyì'],
      },
    },
    {
      id: 'sentence44',
      level: 11,
      isFinal: false,
      korean: '나는 당연히 원해.',
      chinese: {
        hanzi: ['我', '当然', '愿意'],
        pinyin: ['wǒ', 'dāngrán', 'yuànyì'],
      },
    },
    {
      id: 'sentence44',
      level: 12,
      isFinal: true,
      korean: 'B: 나는 당연히 원하지!',
      chinese: {
        hanzi: ['我', '当然', '愿意', '啊'],
        pinyin: ['wǒ', 'dāngrán', 'yuànyì', 'a'],
      },
    },

    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '想法'],
        pinyin: ['gǎibiàn', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean: '자신의 생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '自己', ' 的', '想法'],
        pinyin: ['gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: false,
      korean: '자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['不愿意', '改变', '自己', ' 的', '想法'],
        pinyin: ['bú yuànyì', 'gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 4,
      isFinal: false,
      korean: '어떤 사람들은 자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['有些人', '不愿意', '改变', '自己', ' 的', '想法'],
        pinyin: ['yǒuxiē rén', 'bú yuànyì', 'gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence45',
      level: 5,
      isFinal: false,
      korean: '그 사람들은 ......라고 생각해.',
      chinese: {
        hanzi: ['他们', '觉得......'],
        pinyin: ['tāmen', 'juéde'],
      },
    },
    {
      id: 'sentence45',
      level: 6,
      isFinal: false,
      korean: '그 사람들은 항상 ......라고 생각해.',
      chinese: {
        hanzi: ['他们', '总', '觉得......'],
        pinyin: ['tāmen', 'zǒng', 'juéde'],
      },
    },
    {
      id: 'sentence45',
      level: 7,
      isFinal: false,
      korean: '자신이 옳다(맞다).',
      chinese: {
        hanzi: ['自己', '是', '对', '的'],
        pinyin: ['zìjǐ', 'shì', 'duì', 'de'],
      },
    },
    {
      id: 'sentence45',
      level: 8,
      isFinal: false,
      korean: '그 사람들은 항상 자신이 옳다고 생각해.',
      chinese: {
        hanzi: ['他们', '总', '觉得', '自己', '是', '对', '的'],
        pinyin: ['tāmen', 'zǒng', 'juéde', 'zìjǐ', 'shì', 'duì', 'de'],
      },
    },
    {
      id: 'sentence45',
      level: 9,
      isFinal: true,
      korean:
        'A: 어떤 사람들은 자신의 생각을 바꾸길 원하지 않아. 그 사람들은 항상 자신이 옳다고 생각해.',
      chinese: {
        hanzi: [
          '有些人',
          '不愿意',
          '改变',
          '自己的',
          '想法',
          '他们',
          '总',
          '觉得',
          '自己',
          '是',
          '对',
          '的',
        ],
        pinyin: [
          'yǒuxiē rén',
          'bú yuànyì',
          'gǎibiàn',
          'zìjǐ de',
          'xiǎngfǎ',
          'tāmen',
          'zǒng',
          'juéde',
          'zìjǐ',
          'shì',
          'duì',
          'de',
        ],
      },
    },
    {
      id: 'sentence45',
      level: 10,
      isFinal: false,
      korean: '다 있어요.',
      chinese: {
        hanzi: ['都', '有'],
        pinyin: ['dōu', 'yǒu'],
      },
    },
    {
      id: 'sentence45',
      level: 11,
      isFinal: false,
      korean: '어디에나 다 있어요.',
      chinese: {
        hanzi: ['哪里', '都', '有'],
        pinyin: ['nǎlǐ', 'dōu', 'yǒu'],
      },
    },
    {
      id: 'sentence45',
      level: 12,
      isFinal: true,
      korean: 'B: 이런 사람은 어디에나 다 있지.',
      chinese: {
        hanzi: ['这', '种', '人', '哪里', '都', '有'],
        pinyin: ['zhè', 'zhǒng', 'rén', 'nǎlǐ', 'dōu', 'yǒu'],
      },
    },
  ],
  day10: [
    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '스카이다이빙하다.',
      chinese: {
        hanzi: ['跳伞'],
        pinyin: ['tiàosǎn'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '스카이다이빙 할 수 있겠다(해볼 용기 있다).',
      chinese: {
        hanzi: ['敢', '跳伞'],
        pinyin: ['gǎn', 'tiàosǎn'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: '너는 스카이다이빙 할 수 있겠어(해볼 용기 있어)?',
      chinese: {
        hanzi: ['你', '敢', '跳伞', '吗'],
        pinyin: ['nǐ', 'gǎn', 'tiàosǎn', 'ma'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: false,
      korean: '되게 짜릿하다(아주 짜릿하다).',
      chinese: {
        hanzi: ['很', '刺激'],
        pinyin: ['hěn', 'cìjī'],
      },
    },
    {
      id: 'sentence46',
      level: 5,
      isFinal: false,
      korean: '듣자 하니 짜릿하대.',
      chinese: {
        hanzi: ['听说', '很', '刺激'],
        pinyin: ['tīngshuō', 'hěn', 'cìjī'],
      },
    },
    {
      id: 'sentence46',
      level: 6,
      isFinal: true,
      korean:
        'A: 너는 스카이다이빙 할 수 있겠어(해볼 용기 있어)? 되게 짜릿하다(아주 짜릿하다).',
      chinese: {
        hanzi: ['你', '敢', '跳伞', '吗', '听说', '很', '刺激'],
        pinyin: ['nǐ', 'gǎn', 'tiàosǎn', 'ma', 'tīngshuō', 'hěn', 'cìjī'],
      },
    },
    {
      id: 'sentence46',
      level: 7,
      isFinal: false,
      korean: '[자신 있게 대답] 할 수 있지!',
      chinese: {
        hanzi: ['敢', '啊'],
        pinyin: ['gǎn', 'a'],
      },
    },
    {
      id: 'sentence46',
      level: 8,
      isFinal: false,
      korean: '한번 해보다.',
      chinese: {
        hanzi: ['试试'],
        pinyin: ['shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 9,
      isFinal: false,
      korean: '한 번 해보고 싶어.',
      chinese: {
        hanzi: ['想', '试试'],
        pinyin: ['xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 10,
      isFinal: false,
      korean: '계속 한 번 해보고 싶었어.',
      chinese: {
        hanzi: ['一直', '想', '试试'],
        pinyin: ['yìzhí', 'xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 11,
      isFinal: false,
      korean: '나는 계속 한 번 해보고 싶었어.',
      chinese: {
        hanzi: ['我', '一直', '想', '试试'],
        pinyin: ['wǒ', 'yìzhí', 'xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence46',
      level: 12,
      isFinal: true,
      korean: 'B: 할 수 있지! 나는 계속 한 번 해보고 싶었어.',
      chinese: {
        hanzi: ['敢', '啊', '我', '一直', '想', '试试'],
        pinyin: ['gǎn', 'a', 'wǒ', 'yìzhí', 'xiǎng', 'shìshi'],
      },
    },

    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '밤길을 걸어요.',
      chinese: {
        hanzi: ['走夜路'],
        pinyin: ['zǒu yèlù'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '혼자 밤길을 걸어요.',
      chinese: {
        hanzi: ['一个人', '走', '夜路'],
        pinyin: ['yí ge rén', 'zǒu', 'yèlù'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '나는 혼자 밤길을 걷지 못하겠어.',
      chinese: {
        hanzi: ['我', '不敢', '一个人', '走', '夜路'],
        pinyin: ['wǒ', 'bù gǎn', 'yí ge rén', 'zǒu', 'yèlù'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: false,
      korean: '집에 가요.',
      chinese: {
        hanzi: ['回家'],
        pinyin: ['huí jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 5,
      isFinal: false,
      korean: '택시를 타고 집에 가.',
      chinese: {
        hanzi: ['叫', '车', '回', '家'],
        pinyin: ['jiào', 'chē', 'huí', 'jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 6,
      isFinal: false,
      korean: '자주 택시를 타고 집에 가.',
      chinese: {
        hanzi: ['常常', '叫', '车', '回', '家'],
        pinyin: ['chángcháng', 'jiào', 'chē', 'huí', 'jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 7,
      isFinal: false,
      korean: '……, 그래서 자주 택시를 타고 집에 가.',
      chinese: {
        hanzi: ['……, 所以', '常常', '叫', '车', '回', '家'],
        pinyin: ['suǒyǐ', 'chángcháng', 'jiào', 'chē', 'huí', 'jiā'],
      },
    },
    {
      id: 'sentence47',
      level: 8,
      isFinal: true,
      korean:
        'A: 저는 혼자 밤길을 걷지 못하겠어요. 그래서 자주 택시를 타고 집에 가요.',
      chinese: {
        hanzi: [
          '我',
          '不敢',
          '一个人',
          '走',
          '夜路',
          '所以',
          '常常',
          '叫',
          '车',
          '回',
          '家',
        ],
        pinyin: [
          'wǒ',
          'bù gǎn',
          'yí ge rén',
          'zǒu',
          'yèlù',
          'suǒyǐ',
          'chángcháng',
          'jiào',
          'chē',
          'huí',
          'jiā',
        ],
      },
    },
    {
      id: 'sentence47',
      level: 9,
      isFinal: false,
      korean: '너무 무서워.',
      chinese: {
        hanzi: ['太', '可怕', '了'],
        pinyin: ['tài', 'kěpà', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 10,
      isFinal: false,
      korean: '혼자 다니는 건 너무 무서워.',
      chinese: {
        hanzi: ['一个人', '走', '太', '可怕', '了'],
        pinyin: ['yí ge rén', 'zǒu', 'tài', 'kěpà', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 11,
      isFinal: false,
      korean: '밤에 혼자 다니는 건 너무 무서워요.',
      chinese: {
        hanzi: ['晚上', '一个人', '走', '太', '可怕', '了'],
        pinyin: ['wǎnshang', 'yí ge rén', 'zǒu', 'tài', 'kěpà', 'le'],
      },
    },
    {
      id: 'sentence47',
      level: 12,
      isFinal: true,
      korean: 'B: 나도 그래, 밤에 혼자 다니는 건 너무 무서워.',
      chinese: {
        hanzi: ['我也是', '晚上', '一个人', '走', '太', '可怕', '了'],
        pinyin: [
          'wǒ yě shì',
          'wǎnshang',
          'yí ge rén',
          'zǒu',
          'tài',
          'kěpà',
          'le',
        ],
      },
    },

    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '후회해.',
      chinese: {
        hanzi: ['后悔'],
        pinyin: ['hòuhuǐ'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '후회할 거야.',
      chinese: {
        hanzi: ['会', '后悔', '的'],
        pinyin: ['huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '나중에 후회할 거야.',
      chinese: {
        hanzi: ['以后', '会', '后悔', '的'],
        pinyin: ['yǐhòu', 'huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: false,
      korean: '그렇지 않으면 나중에 후회할 거야.',
      chinese: {
        hanzi: ['不然', '以后', '会', '后悔', '的'],
        pinyin: ['bùrán', 'yǐhòu', 'huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 5,
      isFinal: false,
      korean: '반드시 와야 해.',
      chinese: {
        hanzi: ['必须', '来'],
        pinyin: ['bìxū', 'lái'],
      },
    },
    {
      id: 'sentence48',
      level: 6,
      isFinal: false,
      korean: '너는 반드시 와야 해.',
      chinese: {
        hanzi: ['你', '必须', '来'],
        pinyin: ['nǐ', 'bìxū', 'lái'],
      },
    },
    {
      id: 'sentence48',
      level: 7,
      isFinal: true,
      korean: 'A: 너는 반드시 와야 해. 그렇지 않으면 나중에 후회할 거야.',
      chinese: {
        hanzi: ['你', '必须', '来', '不然', '以后', '会', '后悔', '的'],
        pinyin: ['nǐ', 'bìxū', 'lái', 'bùrán', 'yǐhòu', 'huì', 'hòuhuǐ', 'de'],
      },
    },
    {
      id: 'sentence48',
      level: 8,
      isFinal: false,
      korean: '꼭 갈게.',
      chinese: {
        hanzi: ['一定', '去'],
        pinyin: ['yídìng', 'qù'],
      },
    },
    {
      id: 'sentence48',
      level: 9,
      isFinal: false,
      korean: '나 꼭 갈게.',
      chinese: {
        hanzi: ['我', '一定', '去'],
        pinyin: ['wǒ', 'yídìng', 'qù'],
      },
    },
    {
      id: 'sentence48',
      level: 10,
      isFinal: false,
      korean: '그럼 나 꼭 갈게.',
      chinese: {
        hanzi: ['那', '我', '一定', '去'],
        pinyin: ['nà', 'wǒ', 'yídìng', 'qù'],
      },
    },
    {
      id: 'sentence48',
      level: 11,
      isFinal: true,
      korean: 'B: 알겠어, 그럼 나 꼭 갈게.',
      chinese: {
        hanzi: ['好吧', '那', '我', '一定', '去'],
        pinyin: ['hǎo ba', 'nà', 'wǒ', 'yídìng', 'qù'],
      },
    },

    // 49번
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['值得', '看'],
        pinyin: ['zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '이 책은 읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['这本书', '值得', '看'],
        pinyin: ['zhè běn shū', 'zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '무언가를 배웠어요.',
      chinese: {
        hanzi: ['学到', '东西'],
        pinyin: ['xuédào', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: false,
      korean: '많은 것',
      chinese: {
        hanzi: ['很多', '东西'],
        pinyin: ['hěn duō', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 5,
      isFinal: false,
      korean: '많은 걸 배웠어요.',
      chinese: {
        hanzi: ['学到', '很多', '东西'],
        pinyin: ['xuédào', 'hěn duō', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 6,
      isFinal: false,
      korean: '많은 걸 배울 수 있어요.',
      chinese: {
        hanzi: ['能', '学到', '很多', '东西'],
        pinyin: ['néng', 'xuédào', 'hěn duō', 'dōngxi'],
      },
    },
    {
      id: 'sentence49',
      level: 7,
      isFinal: true,
      korean:
        'A: 이 책은 읽을 만해요(읽어 볼 가치가 있어요), 많은 걸 배울 수 있어요.',
      chinese: {
        hanzi: ['这', '本', '书', '值得', '看', '能', '学到', '很多', '东西'],
        pinyin: [
          'zhè',
          'běn',
          'shū',
          'zhídé',
          'kàn',
          'néng',
          'xuédào',
          'hěn duō',
          'dōngxi',
        ],
      },
    },
    {
      id: 'sentence49',
      level: 8,
      isFinal: false,
      korean: '한번 봐요.',
      chinese: {
        hanzi: ['看看'],
        pinyin: ['kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 9,
      isFinal: false,
      korean: '한번 보러 가요.',
      chinese: {
        hanzi: ['去', '看看'],
        pinyin: ['qù', 'kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 10,
      isFinal: false,
      korean: '저도 한번 보러 가야겠어요.',
      chinese: {
        hanzi: ['我', '也', '去', '看看'],
        pinyin: ['wǒ', 'yě', 'qù', 'kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 11,
      isFinal: false,
      korean: '그럼 저도 한번 보러 가야겠어요.',
      chinese: {
        hanzi: ['那', '我', '也', '去', '看看'],
        pinyin: ['nà', 'wǒ', 'yě', 'qù', 'kànkan'],
      },
    },
    {
      id: 'sentence49',
      level: 12,
      isFinal: true,
      korean: 'B: 그래요? 그럼 저도 한번 보러 가야겠어요.',
      chinese: {
        hanzi: ['是吗', '那', '我', '也', '去', '看看'],
        pinyin: ['shì ma', 'nà', 'wǒ', 'yě', 'qù', 'kànkan'],
      },
    },

    // 50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean: '화낼 만해.',
      chinese: {
        hanzi: ['值得', '生气'],
        pinyin: ['zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '화낼 만한 게 아니야.',
      chinese: {
        hanzi: ['不值得', '生气'],
        pinyin: ['bù zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '전혀 화낼 만한 게 아니야.',
      chinese: {
        hanzi: ['根本', '不值得', '生气'],
        pinyin: ['gēnběn', 'bù zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: false,
      korean: '이런 사소한 일.',
      chinese: {
        hanzi: ['这种小事'],
        pinyin: ['zhè zhǒng xiǎoshì'],
      },
    },
    {
      id: 'sentence50',
      level: 5,
      isFinal: false,
      korean: '이런 사소한 일은 전혀 화낼 만한 게 아니야.',
      chinese: {
        hanzi: ['这', '种', '小事', '根本', '不值得', '生气'],
        pinyin: ['zhè', 'zhǒng', 'xiǎoshì', 'gēnběn', 'bù zhídé', 'shēngqì'],
      },
    },
    {
      id: 'sentence50',
      level: 6,
      isFinal: false,
      korean: '지나갔어.',
      chinese: {
        hanzi: ['过去了'],
        pinyin: ['guòqù le'],
      },
    },
    {
      id: 'sentence50',
      level: 7,
      isFinal: false,
      korean: '한번 웃어봐.',
      chinese: {
        hanzi: ['笑一笑'],
        pinyin: ['xiào yi xiào'],
      },
    },
    {
      id: 'sentence50',
      level: 8,
      isFinal: false,
      korean: '한번 웃어넘기면 돼.',
      chinese: {
        hanzi: ['笑一笑', '就', '过去', '了'],
        pinyin: ['xiào yi xiào', 'jiù', 'guòqù', 'le'],
      },
    },
    {
      id: 'sentence50',
      level: 9,
      isFinal: true,
      korean:
        'A: 이런 사소한 일은 전혀 화낼 만한 게 아니야, 한번 웃어넘기면 돼.',
      chinese: {
        hanzi: [
          '这',
          '种',
          '小事',
          '根本',
          '不值得',
          '生气',
          '笑一笑',
          '就',
          '过去',
          '了',
        ],
        pinyin: [
          'zhè',
          'zhǒng',
          'xiǎoshì',
          'gēnběn',
          'bù zhídé',
          'shēngqì',
          'xiào yi xiào',
          'jiù',
          'guòqù',
          'le',
        ],
      },
    },
    {
      id: 'sentence50',
      level: 10,
      isFinal: false,
      korean: '말이 맞아.',
      chinese: {
        hanzi: ['说得对'],
        pinyin: ['shuō de duì'],
      },
    },
    {
      id: 'sentence50',
      level: 11,
      isFinal: false,
      korean: '너 말이 맞아.',
      chinese: {
        hanzi: ['你', '说', '得', '对'],
        pinyin: ['nǐ', 'shuō', 'de', 'duì'],
      },
    },
    {
      id: 'sentence50',
      level: 12,
      isFinal: true,
      korean: 'B: 그래, 너 말이 맞아.',
      chinese: {
        hanzi: ['好吧', '你', '说', '得', '对'],
        pinyin: ['hǎo ba', 'nǐ', 'shuō', 'de', 'duì'],
      },
    },
  ],
};

// 전역 변수로 내보내기
window.sentenceData = sentenceData;
