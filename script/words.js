const WORDS = {
    "1": {
        "word": "create",
        "mean": "を創り出す；を引き起こす"
    },
    "2": {
        "word": "increase",
        "mean": "増加する（⇔ decrease ⇒ 223）；を増やす"
    },
    "3": {
        "word": "improve",
        "mean": "を向上させる；よくなる"
    },
    "4": {
        "word": "mean",
        "mean": "を意味する；（...する）つもりである（to do）"
    },
    "5": {
        "word": "own",
        "mean": "を所有している；（事実・罪など）を認める"
    },
    "6": {
        "word": "include",
        "mean": "を含む（⇔ exclude ⇒ 1009）"
    },
    "7": {
        "word": "consider",
        "mean": "を見なす；について考える"
    },
    "8": {
        "word": "allow",
        "mean": "を許す；を与える；（～を）考慮に入れる（for）"
    },
    "9": {
        "word": "suggest",
        "mean": "を提案する；を暗示する"
    },
    "10": {
        "word": "produce",
        "mean": "を生産する；を取り出す"
    },
    "11": {
        "word": "decide",
        "mean": "を決める；に決着をつける"
    },
    "12": {
        "word": "offer",
        "mean": "を提供する，申し出る"
    },
    "13": {
        "word": "require",
        "mean": "を要求する；を必要とする"
    },
    "14": {
        "word": "share",
        "mean": "を共有する；を分担する"
    },
    "15": {
        "word": "store",
        "mean": "を保存する；を蓄える"
    },
    "16": {
        "word": "tend",
        "mean": "傾向がある；を世話する"
    },
    "17": {
        "word": "concern",
        "mean": "〔受身形で〕心配している；〔受身形で〕（～に）関係する（with）；に関連する"
    },
    "18": {
        "word": "describe",
        "mean": "について述べる，を説明する"
    },
    "19": {
        "word": "involve",
        "mean": "を関与させる；を伴う"
    },
    "20": {
        "word": "reduce",
        "mean": "を減らす；を（～に）変える（to）"
    },
    "21": {
        "word": "design",
        "mean": "を設計する；を計画する"
    },
    "22": {
        "word": "force",
        "mean": "に強いる；を強要する"
    },
    "23": {
        "word": "limit",
        "mean": "を制限［規制］する"
    },
    "24": {
        "word": "bear",
        "mean": "に耐える（≒ endure ⇒ 824）；を負う；を産む；を（心に）抱く"
    },
    "25": {
        "word": "affect",
        "mean": "に影響を及ぼす（≒ influence ⇒ 49）；を感動させる"
    },
    "26": {
        "word": "deal",
        "mean": "〔deal withで〕を処理する；〔deal inで〕を商う；を分配する"
    },
    "27": {
        "word": "avoid",
        "mean": "を避ける"
    },
    "28": {
        "word": "relate",
        "mean": "を関連づける；（～に）関連する（to）"
    },
    "29": {
        "word": "realize",
        "mean": "に気づく；を実現する"
    },
    "30": {
        "word": "encourage",
        "mean": "を奨励する；を励ます（⇔ discourage ⇒ 706）"
    },
    "31": {
        "word": "compare",
        "mean": "を比較する；を（～に）たとえる（to）"
    },
    "32": {
        "word": "measure",
        "mean": "を測る；を（比較して）評価する"
    },
    "33": {
        "word": "exist",
        "mean": "存在する；生存する"
    },
    "34": {
        "word": "mark",
        "mean": "に印をつける；を（記号で）示す；に汚れをつける"
    },
    "35": {
        "word": "challenge",
        "mean": "に異議を唱える；（人）に挑む"
    },
    "36": {
        "word": "depend",
        "mean": "頼る；～次第である"
    },
    "37": {
        "word": "object",
        "mean": "反対する；（...）と言って反対する（that節）"
    },
    "38": {
        "word": "demand",
        "mean": "を要求する"
    },
    "39": {
        "word": "found",
        "mean": "を設立する；（理論など）を（～に基づいて）築く（on）"
    },
    "40": {
        "word": "complete",
        "mean": "を完成させる，仕上げる"
    },
    "41": {
        "word": "idea",
        "mean": "考え，思いつき；理解；見解；概念"
    },
    "42": {
        "word": "accord",
        "mean": "一致；合意，協定"
    },
    "43": {
        "word": "company",
        "mean": "会社；〔集合的に〕仲間；（仲間と）一緒にいること；一座"
    },
    "44": {
        "word": "interest",
        "mean": "興味；利子；利害"
    },
    "45": {
        "word": "research",
        "mean": "（～についての）研究，調査（into / on / in）"
    },
    "46": {
        "word": "cause",
        "mean": "原因（⇔ effect ⇒ 48）；理由；大義"
    },
    "47": {
        "word": "reason",
        "mean": "理由；（...する）根拠（to do）；理性；分別"
    },
    "48": {
        "word": "effect",
        "mean": "影響，効果；結果"
    },
    "49": {
        "word": "influence",
        "mean": "影響（力）"
    },
    "50": {
        "word": "situation",
        "mean": "状況；（人の置かれた）立場"
    },
    "51": {
        "word": "environment",
        "mean": "環境（≒ surroundings）"
    },
    "52": {
        "word": "skill",
        "mean": "技能；熟練"
    },
    "53": {
        "word": "matter",
        "mean": "事柄；問題；〔～s〕事態；〔the ～〕困難；物質"
    },
    "54": {
        "word": "view",
        "mean": "（～についての）見解（on / about）；（～に対する）（特定の）見方（of）；眺め"
    },
    "55": {
        "word": "value",
        "mean": "価値；価格；評価；〔～s〕価値観"
    },
    "56": {
        "word": "species",
        "mean": "（生物の）種；種類"
    },
    "57": {
        "word": "thought",
        "mean": "考え；思考"
    },
    "58": {
        "word": "knowledge",
        "mean": "知識；知っていること；認識"
    },
    "59": {
        "word": "memory",
        "mean": "記憶（力）；（～の）思い出（of）"
    },
    "60": {
        "word": "practice",
        "mean": "実践，実行；（社会の）慣習；練習"
    },
    "61": {
        "word": "benefit",
        "mean": "利益，恩恵；給付金"
    },
    "62": {
        "word": "theory",
        "mean": "学説；理論；原理；推測"
    },
    "63": {
        "word": "issue",
        "mean": "問題（点）；発行（物）；発表"
    },
    "64": {
        "word": "experiment",
        "mean": "（～を対象とする）実験（on）"
    },
    "65": {
        "word": "article",
        "mean": "記事；条項；品物"
    },
    "66": {
        "word": "focus",
        "mean": "焦点；関心の的"
    },
    "67": {
        "word": "subject",
        "mean": "話題；科目；主題；被験者"
    },
    "68": {
        "word": "project",
        "mean": "計画；事業；研究計画"
    },
    "69": {
        "word": "quality",
        "mean": "質（⇔ quantity ⇒ 471）；特質"
    },
    "70": {
        "word": "role",
        "mean": "役割；（俳優などの）役"
    },
    "71": {
        "word": "term",
        "mean": "（専門）用語；〔～s〕条件；〔～s〕間柄；学期"
    },
    "72": {
        "word": "statement",
        "mean": "声明；主張；明細書"
    },
    "73": {
        "word": "material",
        "mean": "材料，素材；資料；生地"
    },
    "74": {
        "word": "evidence",
        "mean": "証拠"
    },
    "75": {
        "word": "source",
        "mean": "（～の）源，根源（of）；出所，情報源"
    },
    "76": {
        "word": "community",
        "mean": "（共同）社会，～界；地域社会；地域住民"
    },
    "77": {
        "word": "technology",
        "mean": "科学技術；応用技術"
    },
    "78": {
        "word": "culture",
        "mean": "文化；教養；耕作；養殖；培養"
    },
    "79": {
        "word": "appropriate",
        "mean": "（～に）適切な（for / to）"
    },
    "80": {
        "word": "likely",
        "mean": "ありそうな（⇔ unlikely ありそうもない）"
    },
    "81": {
        "word": "possible",
        "mean": "可能な；可能性のある"
    },
    "82": {
        "word": "individual",
        "mean": "個々の；個人の"
    },
    "83": {
        "word": "public",
        "mean": "公の（⇔ private 私的な）；公衆の；公開の"
    },
    "84": {
        "word": "common",
        "mean": "共通の；普通の；一般の"
    },
    "85": {
        "word": "certain",
        "mean": "確信して；確かな；ある；一定の"
    },
    "86": {
        "word": "similar",
        "mean": "似ている，類似した；同様の"
    },
    "87": {
        "word": "recent",
        "mean": "最近の"
    },
    "88": {
        "word": "major",
        "mean": "主要な；大きい（ほうの）；長調の"
    },
    "89": {
        "word": "patient",
        "mean": "忍耐強い；勤勉な"
    },
    "90": {
        "word": "particular",
        "mean": "特定の；特別の；（～について）やかましい（about）"
    },
    "91": {
        "word": "physical",
        "mean": "身体の（⇔ mental ⇒ 183）；物質的な；物理学の"
    },
    "92": {
        "word": "various",
        "mean": "さまざまな；いくつかの"
    },
    "93": {
        "word": "available",
        "mean": "手に入る；利用できる；手が空いている"
    },
    "94": {
        "word": "native",
        "mean": "出生地の；原産の；生得の"
    },
    "95": {
        "word": "political",
        "mean": "政治（上）の"
    },
    "96": {
        "word": "due",
        "mean": "予定された；（支払）期日で；しかるべき"
    },
    "97": {
        "word": "blank",
        "mean": "空白の；無表情な；がらんとした"
    },
    "98": {
        "word": "ancient",
        "mean": "古代の；昔からの"
    },
    "99": {
        "word": "correct",
        "mean": "正しい；適切な"
    },
    "100": {
        "word": "despite",
        "mean": "～にもかかわらず（≒ in spite of）"
    },
    "101": {
        "word": "notice",
        "mean": "に気づく"
    },
    "102": {
        "word": "refer",
        "mean": "言及する，関連する；参照する"
    },
    "103": {
        "word": "approach",
        "mean": "に近づく；に取り組む"
    },
    "104": {
        "word": "wonder",
        "mean": "かなと思う；（に）驚く（at）"
    },
    "105": {
        "word": "imagine",
        "mean": "（を）想像する；（を）推測する"
    },
    "106": {
        "word": "recognize",
        "mean": "を識別できる；を認める"
    },
    "107": {
        "word": "solve",
        "mean": "を解く，解明する；（困難など）を解決する"
    },
    "108": {
        "word": "occur",
        "mean": "起こる；心に浮かぶ；現れる"
    },
    "109": {
        "word": "argue",
        "mean": "と主張する（≒ claim ⇒ 110, maintain ⇒ 206）；議論する"
    },
    "110": {
        "word": "claim",
        "mean": "と主張する；を（自分のものとして）要求する"
    },
    "111": {
        "word": "express",
        "mean": "を表す，述べる"
    },
    "112": {
        "word": "draw",
        "mean": "を引き出す；を引く；を描く；近づく"
    },
    "113": {
        "word": "waste",
        "mean": "を浪費する，無駄にする"
    },
    "114": {
        "word": "advance",
        "mean": "を進歩させる；を進める；進歩する；進む"
    },
    "115": {
        "word": "spread",
        "mean": "を広める；広がる"
    },
    "116": {
        "word": "prepare",
        "mean": "を準備する；を調理する；（～のために）準備をする（for）"
    },
    "117": {
        "word": "gain",
        "mean": "を獲得する；（を）増す"
    },
    "118": {
        "word": "achieve",
        "mean": "を達成する；を成し遂げる"
    },
    "119": {
        "word": "establish",
        "mean": "を確立する；を設立する"
    },
    "120": {
        "word": "supply",
        "mean": "を供給する"
    },
    "121": {
        "word": "suppose",
        "mean": "と思う；と仮定する"
    },
    "122": {
        "word": "perform",
        "mean": "（を）行う；（を）演じる，（を）演奏する"
    },
    "123": {
        "word": "prefer",
        "mean": "のほうを好む"
    },
    "124": {
        "word": "determine",
        "mean": "を決定する；を正確に知る"
    },
    "125": {
        "word": "treat",
        "mean": "を扱う；を治療する"
    },
    "126": {
        "word": "prove",
        "mean": "を証明する；判明する，わかる"
    },
    "127": {
        "word": "apply",
        "mean": "を適用［応用］する；申し込む；（～に）適用される（to / in）"
    },
    "128": {
        "word": "mention",
        "mean": "に言及する；と言う"
    },
    "129": {
        "word": "communicate",
        "mean": "（～と）情報交換をする（with）；を伝達する"
    },
    "130": {
        "word": "contain",
        "mean": "を含む；を収容する；（感情など）を抑える"
    },
    "131": {
        "word": "contact",
        "mean": "と連絡を取る；接触する"
    },
    "132": {
        "word": "regard",
        "mean": "を見なす；を見る；を評価する"
    },
    "133": {
        "word": "respect",
        "mean": "を尊敬する；を尊重する"
    },
    "134": {
        "word": "search",
        "mean": "捜す；を捜索する；を詳しく調べる"
    },
    "135": {
        "word": "connect",
        "mean": "をつなぐ；を関連づける"
    },
    "136": {
        "word": "decline",
        "mean": "減少する；衰退する；を断る"
    },
    "137": {
        "word": "prevent",
        "mean": "を妨げる；を防ぐ"
    },
    "138": {
        "word": "suffer",
        "mean": "苦しむ；患う；（苦痛など）を経験する"
    },
    "139": {
        "word": "survive",
        "mean": "を切り抜けて生き残る；より長生きする；生き延びる"
    },
    "140": {
        "word": "publish",
        "mean": "を出版する；を公表する"
    },
    "141": {
        "word": "opportunity",
        "mean": "機会（≒ chance）"
    },
    "142": {
        "word": "task",
        "mean": "（課せられた）仕事，作業；課題；タスク"
    },
    "143": {
        "word": "industry",
        "mean": "産業；勤勉（≒ diligence）"
    },
    "144": {
        "word": "medium",
        "mean": "（情報伝達の）媒体；手段"
    },
    "145": {
        "word": "economy",
        "mean": "経済（状態）；経済圏；節約"
    },
    "146": {
        "word": "policy",
        "mean": "政策，方針；（個人の）主義"
    },
    "147": {
        "word": "account",
        "mean": "説明；勘定；口座"
    },
    "148": {
        "word": "trade",
        "mean": "貿易；商売，取引"
    },
    "149": {
        "word": "model",
        "mean": "模範；モデル；模型；型"
    },
    "150": {
        "word": "figure",
        "mean": "数字；姿；人物；図表"
    },
    "151": {
        "word": "cell",
        "mean": "細胞；独房；電池"
    },
    "152": {
        "word": "image",
        "mean": "印象，イメージ；画像；像"
    },
    "153": {
        "word": "emotion",
        "mean": "感情，情動；感動"
    },
    "154": {
        "word": "stress",
        "mean": "ストレス；圧力；強調"
    },
    "155": {
        "word": "decade",
        "mean": "10年間"
    },
    "156": {
        "word": "range",
        "mean": "範囲；射程距離；（同類の）組"
    },
    "157": {
        "word": "character",
        "mean": "性格，個性；特徴；登場人物；文字"
    },
    "158": {
        "word": "advantage",
        "mean": "利点；優勢；有利"
    },
    "159": {
        "word": "phrase",
        "mean": "句；成句；言葉遣い"
    },
    "160": {
        "word": "damage",
        "mean": "損害，損傷；〔～s〕損害賠償金"
    },
    "161": {
        "word": "impact",
        "mean": "影響；（激しい）衝突；衝撃（力）"
    },
    "162": {
        "word": "method",
        "mean": "方法；体系；秩序"
    },
    "163": {
        "word": "resource",
        "mean": "〔通例～s〕資源；〔通例～s〕資金；才覚"
    },
    "164": {
        "word": "region",
        "mean": "地域；領域；部位"
    },
    "165": {
        "word": "medicine",
        "mean": "薬；医学"
    },
    "166": {
        "word": "detail",
        "mean": "〔～s〕詳細（な情報），細部"
    },
    "167": {
        "word": "feature",
        "mean": "特徴；〔通例～s〕顔つき；特集記事［番組］"
    },
    "168": {
        "word": "function",
        "mean": "機能；関数"
    },
    "169": {
        "word": "access",
        "mean": "利用，入手；接近（の機会・方法・権利）"
    },
    "170": {
        "word": "item",
        "mean": "品目，項目；（同種の中の）～個；（短い）記事"
    },
    "171": {
        "word": "income",
        "mean": "収入；所得"
    },
    "172": {
        "word": "attitude",
        "mean": "態度；考え方，心構え"
    },
    "173": {
        "word": "site",
        "mean": "用地，場所；跡地；（ウェブ）サイト"
    },
    "174": {
        "word": "aspect",
        "mean": "（物事の）側面；観点；様相"
    },
    "175": {
        "word": "structure",
        "mean": "構造；体系；構造物"
    },
    "176": {
        "word": "habit",
        "mean": "習慣，癖"
    },
    "177": {
        "word": "link",
        "mean": "関連，つながり；（2地点を結ぶ）交通手段；リンク"
    },
    "178": {
        "word": "instance",
        "mean": "（具体的な）例，実例；（特定の）場合"
    },
    "179": {
        "word": "positive",
        "mean": "肯定的な；積極的な；確信して；（検査結果が）陽性の"
    },
    "180": {
        "word": "negative",
        "mean": "否定的な；消極的な；（検査結果が）陰性の"
    },
    "181": {
        "word": "complex",
        "mean": "複雑な；複合（体）の"
    },
    "182": {
        "word": "current",
        "mean": "現在の；現代の；通用している"
    },
    "183": {
        "word": "mental",
        "mean": "精神の；知能の；頭の中で行う"
    },
    "184": {
        "word": "specific",
        "mean": "特定の；明確な，具体的な；（～に）特有の（to）"
    },
    "185": {
        "word": "significant",
        "mean": "重要な，重大な；意義深い"
    },
    "186": {
        "word": "essential",
        "mean": "（～に）必要不可欠な（to / for）；本質的な"
    },
    "187": {
        "word": "official",
        "mean": "公用の；公式の；役所の"
    },
    "188": {
        "word": "financial",
        "mean": "財政（上）の；財界の"
    },
    "189": {
        "word": "academic",
        "mean": "学問の；大学の"
    },
    "190": {
        "word": "aware",
        "mean": "気づいて，知って"
    },
    "191": {
        "word": "worth",
        "mean": "（...する）に値する（doing）；の価値がある"
    },
    "192": {
        "word": "potential",
        "mean": "潜在的な；可能性を秘めた"
    },
    "193": {
        "word": "active",
        "mean": "積極的な；活動的な；効力のある"
    },
    "194": {
        "word": "digital",
        "mean": "デジタル方式の；デジタル［数字］表示の"
    },
    "195": {
        "word": "mobile",
        "mean": "可動［移動］式の；流動性のある"
    },
    "196": {
        "word": "novel",
        "mean": "斬新な，目新しい"
    },
    "197": {
        "word": "plastic",
        "mean": "柔軟な；プラスチックの，ビニールの"
    },
    "198": {
        "word": "chemical",
        "mean": "化学の，化学的な"
    },
    "199": {
        "word": "necessary",
        "mean": "必要な（≒ essential ⇒ 186）"
    },
    "200": {
        "word": "eventually",
        "mean": "結局（は）"
    },
    "201": {
        "word": "identify",
        "mean": "を特定する；を（～と）同一視する（with）"
    },
    "202": {
        "word": "represent",
        "mean": "を表す；を代表する；に相当する"
    },
    "203": {
        "word": "indicate",
        "mean": "を指し示す；を述べる"
    },
    "204": {
        "word": "manage",
        "mean": "をなんとか成し遂げる；を管理する"
    },
    "205": {
        "word": "attend",
        "mean": "に出席する；（を）世話する；（～に）対処［対応］する（to）"
    },
    "206": {
        "word": "maintain",
        "mean": "を維持する；と主張する；を養う"
    },
    "207": {
        "word": "survey",
        "mean": "を調査する；をじろじろ見る；を概観する"
    },
    "208": {
        "word": "replace",
        "mean": "に取って代わる；を取り替える"
    },
    "209": {
        "word": "sort",
        "mean": "を（～に）分類する（into）；を（～から）えり分ける（from）"
    },
    "210": {
        "word": "conduct",
        "mean": "（調査・実験など）を実施する；を導く"
    },
    "211": {
        "word": "associate",
        "mean": "を結び付けて考える；（～と）交際する（with）"
    },
    "212": {
        "word": "attempt",
        "mean": "を試みる，企てる"
    },
    "213": {
        "word": "promote",
        "mean": "を促進する；〔通例受身形で〕昇進する"
    },
    "214": {
        "word": "earn",
        "mean": "を稼ぐ；を得る；をもたらす"
    },
    "215": {
        "word": "unite",
        "mean": "を団結させる；（を）結合する；団結する"
    },
    "216": {
        "word": "feed",
        "mean": "に食べ物［乳］を与える；に（～を）供給［補給］する（with）；餌を食べる"
    },
    "217": {
        "word": "seek",
        "mean": "を追い求める；（助けなど）を要請する"
    },
    "218": {
        "word": "observe",
        "mean": "に気づく；を観察する；を遵守する"
    },
    "219": {
        "word": "reveal",
        "mean": "を明らかにする；を見せる"
    },
    "220": {
        "word": "estimate",
        "mean": "と推定する；を見積もる；を評価する"
    },
    "221": {
        "word": "reflect",
        "mean": "を反映する；（を）反射する；（を）熟考する"
    },
    "222": {
        "word": "attract",
        "mean": "を引きつける"
    },
    "223": {
        "word": "decrease",
        "mean": "減少する（⇔ increase ⇒ 2）；を減らす"
    },
    "224": {
        "word": "ignore",
        "mean": "を無視する"
    },
    "225": {
        "word": "match",
        "mean": "（と）合う；に匹敵する；一致する"
    },
    "226": {
        "word": "define",
        "mean": "を定義する；を明確にする"
    },
    "227": {
        "word": "adapt",
        "mean": "適応する；を（～に）適合させる（to）"
    },
    "228": {
        "word": "contribute",
        "mean": "貢献する，一因となる；（を）寄付する；（を）寄稿する"
    },
    "229": {
        "word": "exchange",
        "mean": "（を）交換する；両替する"
    },
    "230": {
        "word": "display",
        "mean": "を示す；を発揮する；を展示［陳列］する"
    },
    "231": {
        "word": "respond",
        "mean": "反応する；答える"
    },
    "232": {
        "word": "hide",
        "mean": "を隠す（≒ conceal ⇒ 1116）；隠れる"
    },
    "233": {
        "word": "doubt",
        "mean": "ではないと思う；を疑う"
    },
    "234": {
        "word": "remove",
        "mean": "を取り除く；を解雇する"
    },
    "235": {
        "word": "wind",
        "mean": "（ねじなど）を巻く；（道などが）曲がりくねる；巻きつく"
    },
    "236": {
        "word": "assume",
        "mean": "を当然のことと思う，と仮定する；（権力など）を手に入れる；（責任など）を引き受ける"
    },
    "237": {
        "word": "relax",
        "mean": "くつろぐ；緩む；をくつろがせる；を緩める"
    },
    "238": {
        "word": "satisfy",
        "mean": "を満足させる；（条件など）を満たす"
    },
    "239": {
        "word": "desire",
        "mean": "を強く望む"
    },
    "240": {
        "word": "succeed",
        "mean": "（～に）成功する（in）；（～を）継承する（to）"
    },
    "241": {
        "word": "concept",
        "mean": "概念；考え；（商品・販売の）コンセプト"
    },
    "242": {
        "word": "fashion",
        "mean": "流行，ファッション；方法，流儀"
    },
    "243": {
        "word": "device",
        "mean": "装置，機器；方策；デバイス"
    },
    "244": {
        "word": "charge",
        "mean": "料金；世話；管理；告発"
    },
    "245": {
        "word": "contrast",
        "mean": "（～との）対照（with / to）"
    },
    "246": {
        "word": "colleague",
        "mean": "（職場の）同僚"
    },
    "247": {
        "word": "pain",
        "mean": "苦痛，痛み；苦悩；〔～s〕骨折り"
    },
    "248": {
        "word": "bill",
        "mean": "請求書；【英】勘定書（≒ 【米】check）；法案"
    },
    "249": {
        "word": "content",
        "mean": "内容，中身；コンテンツ"
    },
    "250": {
        "word": "section",
        "mean": "部門；部分；地区；欄"
    },
    "251": {
        "word": "audience",
        "mean": "〔集合的に〕聴衆，観客；視聴者"
    },
    "252": {
        "word": "surface",
        "mean": "表面；〔the ～〕外見"
    },
    "253": {
        "word": "crop",
        "mean": "〔しばしば～s〕作物；収穫高"
    },
    "254": {
        "word": "topic",
        "mean": "話題，トピック；主題"
    },
    "255": {
        "word": "technique",
        "mean": "技術；技巧；手法"
    },
    "256": {
        "word": "status",
        "mean": "地位；状態"
    },
    "257": {
        "word": "option",
        "mean": "選択（の自由）；選択肢"
    },
    "258": {
        "word": "reward",
        "mean": "報酬；報い"
    },
    "259": {
        "word": "race",
        "mean": "人種；民族；競争"
    },
    "260": {
        "word": "crime",
        "mean": "罪，犯罪；違法行為"
    },
    "261": {
        "word": "conflict",
        "mean": "争い；論争；不一致"
    },
    "262": {
        "word": "struggle",
        "mean": "闘い；懸命の努力"
    },
    "263": {
        "word": "context",
        "mean": "状況，背景；文脈"
    },
    "264": {
        "word": "debate",
        "mean": "討論，論争；討論会"
    },
    "265": {
        "word": "fuel",
        "mean": "燃料；勢いを増加させるもの"
    },
    "266": {
        "word": "pollution",
        "mean": "汚染，公害"
    },
    "267": {
        "word": "trend",
        "mean": "（～への）傾向（toward）；流行"
    },
    "268": {
        "word": "balance",
        "mean": "均衡，バランス；（体の）平衡；残高"
    },
    "269": {
        "word": "traffic",
        "mean": "交通；通行；交通［輸送］量；（不正）取引"
    },
    "270": {
        "word": "strategy",
        "mean": "戦略"
    },
    "271": {
        "word": "basis",
        "mean": "基礎；根拠；基準"
    },
    "272": {
        "word": "consequence",
        "mean": "〔通例～s〕結果；重大性"
    },
    "273": {
        "word": "aim",
        "mean": "目的，目標；狙い"
    },
    "274": {
        "word": "ancestor",
        "mean": "祖先（⇔ descendant 子孫）；原型"
    },
    "275": {
        "word": "gene",
        "mean": "遺伝子"
    },
    "276": {
        "word": "track",
        "mean": "跡；軌道；【米】（鉄道の）番線；走路"
    },
    "277": {
        "word": "revolution",
        "mean": "革命；回転；（天体の）公転（⇔ rotation 自転）"
    },
    "278": {
        "word": "progress",
        "mean": "進歩；前進"
    },
    "279": {
        "word": "cognitive",
        "mean": "認知の"
    },
    "280": {
        "word": "ideal",
        "mean": "理想的な；観念的な"
    },
    "281": {
        "word": "efficient",
        "mean": "効率的な；有能な"
    },
    "282": {
        "word": "universal",
        "mean": "普遍的な；宇宙の；万能の"
    },
    "283": {
        "word": "vast",
        "mean": "莫大な；広大な"
    },
    "284": {
        "word": "extra",
        "mean": "追加の，余分の；別勘定の"
    },
    "285": {
        "word": "entire",
        "mean": "全体の，全部の（≒ whole）；完全な"
    },
    "286": {
        "word": "familiar",
        "mean": "精通している；よく知られている"
    },
    "287": {
        "word": "obvious",
        "mean": "明らかな（≒ clear）"
    },
    "288": {
        "word": "moral",
        "mean": "道徳（上）の，倫理的な；道徳的な"
    },
    "289": {
        "word": "ordinary",
        "mean": "一般の，普通の；並の"
    },
    "290": {
        "word": "equal",
        "mean": "（～に）等しい（to）；匹敵する；平等な"
    },
    "291": {
        "word": "previous",
        "mean": "以前の，前の"
    },
    "292": {
        "word": "FALSE",
        "mean": "間違った；虚偽の；偽の"
    },
    "293": {
        "word": "rare",
        "mean": "まれな，珍しい；希少な"
    },
    "294": {
        "word": "legal",
        "mean": "法律の；合法の（⇔ illegal 違法の）"
    },
    "295": {
        "word": "independent",
        "mean": "（～から）独立した（of / from）"
    },
    "296": {
        "word": "extreme",
        "mean": "極端な；極度の，過激な"
    },
    "297": {
        "word": "actual",
        "mean": "実際の，現実の"
    },
    "298": {
        "word": "willing",
        "mean": "いとわない，かまわないと思う"
    },
    "299": {
        "word": "urban",
        "mean": "都市の；都会的な（⇔ rural ⇒ 387）"
    },
    "300": {
        "word": "whereas",
        "mean": "～するのに（対し），～する一方"
    },
    "301": {
        "word": "predict",
        "mean": "を予言［予測］する"
    },
    "302": {
        "word": "examine",
        "mean": "を調べる；を診察する；を尋問する"
    },
    "303": {
        "word": "trust",
        "mean": "を信頼する；を（信頼して）託す"
    },
    "304": {
        "word": "stick",
        "mean": "を動けなくする；を突き刺す；（～に）くっつく（to / on）"
    },
    "305": {
        "word": "emerge",
        "mean": "現れる；明らかになる；台頭する"
    },
    "306": {
        "word": "vary",
        "mean": "さまざまである；変わる；を変える"
    },
    "307": {
        "word": "release",
        "mean": "を放出する；を解放する；を発表する"
    },
    "308": {
        "word": "divide",
        "mean": "を分ける；分かれる"
    },
    "309": {
        "word": "enable",
        "mean": "（人）が...できるようにする；を可能にする"
    },
    "310": {
        "word": "judge",
        "mean": "（を）判断する；に判決を下す"
    },
    "311": {
        "word": "rely",
        "mean": "頼る（≒ depend ⇒ 36）"
    },
    "312": {
        "word": "engage",
        "mean": "を従事させる；を（～として）雇う（as）；（～に）従事する（in / with）"
    },
    "313": {
        "word": "shift",
        "mean": "を変える，移す；変わる；移動する"
    },
    "314": {
        "word": "adopt",
        "mean": "を採用する；（態度など）をとる；を養子にする"
    },
    "315": {
        "word": "acquire",
        "mean": "を得る；を習得する"
    },
    "316": {
        "word": "expand",
        "mean": "（を）拡大する；（を）詳説する"
    },
    "317": {
        "word": "refuse",
        "mean": "を拒む；を断る；拒絶する"
    },
    "318": {
        "word": "strike",
        "mean": "の心を打つ；を襲う；を打つ；（に）ぶつかる"
    },
    "319": {
        "word": "repeat",
        "mean": "（を）繰り返す；を復唱する"
    },
    "320": {
        "word": "consume",
        "mean": "を消費する；を食べる，飲む"
    },
    "321": {
        "word": "confuse",
        "mean": "を混同する；を当惑させる"
    },
    "322": {
        "word": "select",
        "mean": "を選ぶ，えり抜く"
    },
    "323": {
        "word": "evolve",
        "mean": "（徐々に）発展する；進化する"
    },
    "324": {
        "word": "convince",
        "mean": "を納得［確信］させる"
    },
    "325": {
        "word": "recall",
        "mean": "を思い出す；を呼び戻す"
    },
    "326": {
        "word": "destroy",
        "mean": "を破壊する；（人）を破滅させる"
    },
    "327": {
        "word": "preserve",
        "mean": "を保存する；を保持する；を保護する"
    },
    "328": {
        "word": "organize",
        "mean": "を準備する；を組織する"
    },
    "329": {
        "word": "warn",
        "mean": "（人）に（～を）警告［注意］する（of / against）"
    },
    "330": {
        "word": "address",
        "mean": "（問題など）に対処する；に演説する；（手紙など）を（～宛てに）出す（to）"
    },
    "331": {
        "word": "operate",
        "mean": "を操作する；機能する；手術する"
    },
    "332": {
        "word": "participate",
        "mean": "参加する"
    },
    "333": {
        "word": "surround",
        "mean": "を取り巻く；にまつわる"
    },
    "334": {
        "word": "flow",
        "mean": "流れる；（～から）生じる（from）"
    },
    "335": {
        "word": "bore",
        "mean": "（人）を退屈させる，うんざりさせる"
    },
    "336": {
        "word": "complain",
        "mean": "（と）不平［苦情］を言う；訴える"
    },
    "337": {
        "word": "host",
        "mean": "を主催する；のホスト役を務める"
    },
    "338": {
        "word": "combine",
        "mean": "を（～と）結び付ける（with）；（～と）結び付く（with）"
    },
    "339": {
        "word": "extend",
        "mean": "を伸［延］ばす；伸びる；及ぶ"
    },
    "340": {
        "word": "appreciate",
        "mean": "を正当に評価する；を鑑賞する；を感謝する"
    },
    "341": {
        "word": "target",
        "mean": "（到達・攻撃）目標；的"
    },
    "342": {
        "word": "element",
        "mean": "要素，成分；元素；〔an / ofで〕少しの"
    },
    "343": {
        "word": "principle",
        "mean": "原則，原理；主義，信条"
    },
    "344": {
        "word": "phenomenon",
        "mean": "現象"
    },
    "345": {
        "word": "atmosphere",
        "mean": "〔the ～〕大気；雰囲気"
    },
    "346": {
        "word": "origin",
        "mean": "起源；源"
    },
    "347": {
        "word": "personality",
        "mean": "個性，性格"
    },
    "348": {
        "word": "capacity",
        "mean": "（最大）容量，収容能力；（潜在）能力"
    },
    "349": {
        "word": "profit",
        "mean": "利益；収益（率）；得"
    },
    "350": {
        "word": "circumstance",
        "mean": "〔通例～s〕状況，事情；境遇"
    },
    "351": {
        "word": "manner",
        "mean": "〔～s〕作法；方法；物腰"
    },
    "352": {
        "word": "threat",
        "mean": "脅威；（悪い）兆し；脅迫"
    },
    "353": {
        "word": "resident",
        "mean": "居住者；滞在者"
    },
    "354": {
        "word": "wealth",
        "mean": "富；資源；富裕"
    },
    "355": {
        "word": "institution",
        "mean": "機関；協会；施設；制度"
    },
    "356": {
        "word": "authority",
        "mean": "〔通例 the ～ties〕（関係）当局；権威；権限"
    },
    "357": {
        "word": "vote",
        "mean": "投票；投票結果；〔the ～〕選挙権"
    },
    "358": {
        "word": "sight",
        "mean": "光景；〔the ～s〕名所；見（え）ること；視野；視力"
    },
    "359": {
        "word": "campaign",
        "mean": "運動；軍事行動"
    },
    "360": {
        "word": "fund",
        "mean": "〔しばしば～s〕基金，資金"
    },
    "361": {
        "word": "web",
        "mean": "〔the W-〕ウェブ；（クモの）巣"
    },
    "362": {
        "word": "symbol",
        "mean": "象徴，シンボル；記号；標章"
    },
    "363": {
        "word": "analysis",
        "mean": "分析（結果）（⇔ synthesis ⇒ 1868）"
    },
    "364": {
        "word": "version",
        "mean": "（本・製品などの）版；解釈"
    },
    "365": {
        "word": "perspective",
        "mean": "観点，見方；大局観；遠近法"
    },
    "366": {
        "word": "crisis",
        "mean": "危機"
    },
    "367": {
        "word": "disaster",
        "mean": "災害；惨事"
    },
    "368": {
        "word": "lecture",
        "mean": "講義，講演；説教"
    },
    "369": {
        "word": "psychology",
        "mean": "心理学；心理（状態）"
    },
    "370": {
        "word": "gender",
        "mean": "（社会的・文化的）性，性別"
    },
    "371": {
        "word": "custom",
        "mean": "（社会的な）慣習；〔～s〕税関；〔～s〕関税"
    },
    "372": {
        "word": "court",
        "mean": "裁判所，法廷；裁判；宮廷；中庭"
    },
    "373": {
        "word": "desert",
        "mean": "砂漠；不毛の地"
    },
    "374": {
        "word": "soil",
        "mean": "土地，土壌；（悪事などの）温床"
    },
    "375": {
        "word": "agriculture",
        "mean": "農業；農学，畜産"
    },
    "376": {
        "word": "fossil",
        "mean": "化石；時代遅れの人［物］"
    },
    "377": {
        "word": "document",
        "mean": "（公）文書，書類；記録，資料"
    },
    "378": {
        "word": "vocabulary",
        "mean": "語彙"
    },
    "379": {
        "word": "intelligent",
        "mean": "聡明な；知能を有する"
    },
    "380": {
        "word": "conscious",
        "mean": "意識して，気づいて（≒ aware）"
    },
    "381": {
        "word": "capable",
        "mean": "能力がある；有能な"
    },
    "382": {
        "word": "accurate",
        "mean": "正確な；精密な"
    },
    "383": {
        "word": "fundamental",
        "mean": "基本的な；必須の"
    },
    "384": {
        "word": "artificial",
        "mean": "人工の（⇔ natural 自然の）；不自然な"
    },
    "385": {
        "word": "firm",
        "mean": "確固たる；堅固な；安定した"
    },
    "386": {
        "word": "overall",
        "mean": "総合的な；全体的な"
    },
    "387": {
        "word": "rural",
        "mean": "田舎の（⇔ urban ⇒ 299），田園の"
    },
    "388": {
        "word": "military",
        "mean": "軍の，軍事（用）の"
    },
    "389": {
        "word": "nuclear",
        "mean": "核の，原子力の"
    },
    "390": {
        "word": "biological",
        "mean": "生物学（上）の"
    },
    "391": {
        "word": "constant",
        "mean": "絶え間ない；一定の"
    },
    "392": {
        "word": "severe",
        "mean": "（人・規律・事態・天気などが）厳しい；猛烈な"
    },
    "393": {
        "word": "visual",
        "mean": "視覚の；目に見える"
    },
    "394": {
        "word": "enormous",
        "mean": "莫大な，巨大な"
    },
    "395": {
        "word": "convenient",
        "mean": "便利な，都合のいい"
    },
    "396": {
        "word": "domestic",
        "mean": "家庭の；国内の；（動物が）飼いならされた"
    },
    "397": {
        "word": "mass",
        "mean": "大規模な，大量の；大衆（向け）の"
    },
    "398": {
        "word": "typical",
        "mean": "典型的な；（～に）特有の（of）"
    },
    "399": {
        "word": "overseas",
        "mean": "海外へ［に，で］（≒ abroad）"
    },
    "400": {
        "word": "nevertheless",
        "mean": "それにもかかわらず（≒ nonetheless ⇒ 1000）"
    },
    "401": {
        "word": "demonstrate",
        "mean": "を論証［証明］する；デモをする"
    },
    "402": {
        "word": "behave",
        "mean": "振る舞う；作動する"
    },
    "403": {
        "word": "educate",
        "mean": "を教育する；に教える；（能力など）を養う"
    },
    "404": {
        "word": "purchase",
        "mean": "を購入する"
    },
    "405": {
        "word": "recommend",
        "mean": "を勧める"
    },
    "406": {
        "word": "admit",
        "mean": "（を）（しぶしぶ）認める；に（～への）入場［入学など］を認める（to / into）"
    },
    "407": {
        "word": "generate",
        "mean": "を生み出す；（電気など）を発生させる"
    },
    "408": {
        "word": "explore",
        "mean": "（を）調査［探究］する；（を）探検［探査］する"
    },
    "409": {
        "word": "amaze",
        "mean": "をびっくりさせる"
    },
    "410": {
        "word": "tear",
        "mean": "を引き裂く；裂ける"
    },
    "411": {
        "word": "settle",
        "mean": "を解決する；（に）移り住む；を落ち着かせる"
    },
    "412": {
        "word": "afford",
        "mean": "を持つ［する］余裕がある；を与える"
    },
    "413": {
        "word": "conclude",
        "mean": "と結論づける；を締めくくる；を締結する"
    },
    "414": {
        "word": "advertise",
        "mean": "を宣伝する；（～を求める）広告を出す（for）"
    },
    "415": {
        "word": "encounter",
        "mean": "に遭遇する；に（思いがけず）出会う"
    },
    "416": {
        "word": "remind",
        "mean": "に思い出させる"
    },
    "417": {
        "word": "locate",
        "mean": "〔受身形で〕位置する；の位置を探し当てる"
    },
    "418": {
        "word": "aid",
        "mean": "を援助する，助ける（≒ help）"
    },
    "419": {
        "word": "bite",
        "mean": "（を）かむ，（に）かみつく；（を）刺す"
    },
    "420": {
        "word": "deliver",
        "mean": "を配達する；（演説・講義）をする；子を産む"
    },
    "421": {
        "word": "perceive",
        "mean": "に気づく；を知覚する；を理解する"
    },
    "422": {
        "word": "distinguish",
        "mean": "を区別する"
    },
    "423": {
        "word": "imply",
        "mean": "を暗に意味する；を必然的に伴う"
    },
    "424": {
        "word": "handle",
        "mean": "を処理する，扱う；を論じる；を商う"
    },
    "425": {
        "word": "praise",
        "mean": "を（～のことで）賞賛する（for）；賛美する"
    },
    "426": {
        "word": "appeal",
        "mean": "訴える；抗議する；（上級審に）上訴する"
    },
    "427": {
        "word": "insist",
        "mean": "（を）強く主張する；要求する"
    },
    "428": {
        "word": "compete",
        "mean": "競う；〔通例否定文で〕（～に）匹敵する（with）"
    },
    "429": {
        "word": "rank",
        "mean": "を位置づける，評価する；（ある地位に）位置する"
    },
    "430": {
        "word": "deny",
        "mean": "を否定する；を拒む"
    },
    "431": {
        "word": "reject",
        "mean": "を拒否する"
    },
    "432": {
        "word": "intend",
        "mean": "を意図する"
    },
    "433": {
        "word": "expose",
        "mean": "をさらす；を暴露する；を露出する"
    },
    "434": {
        "word": "favor",
        "mean": "に賛成する；を好む；をひいきする"
    },
    "435": {
        "word": "inspire",
        "mean": "（人）を奮起させる；を喚起する"
    },
    "436": {
        "word": "propose",
        "mean": "を提案する；をもくろむ；結婚を申し込む"
    },
    "437": {
        "word": "spell",
        "mean": "（語）をつづる；という語になる"
    },
    "438": {
        "word": "breathe",
        "mean": "呼吸する；を吸う"
    },
    "439": {
        "word": "repair",
        "mean": "を修理する（≒ fix）；を修復する"
    },
    "440": {
        "word": "consist",
        "mean": "（～から）成る（of）；（～に）ある（in）"
    },
    "441": {
        "word": "comment",
        "mean": "意見，コメント；批判"
    },
    "442": {
        "word": "instruction",
        "mean": "〔通例～s〕指示；〔～s〕（製品の）使用書"
    },
    "443": {
        "word": "religion",
        "mean": "宗教；信条；信仰（心）"
    },
    "444": {
        "word": "neighborhood",
        "mean": "地域；近所"
    },
    "445": {
        "word": "laboratory",
        "mean": "実験室，研究室"
    },
    "446": {
        "word": "presence",
        "mean": "存在；出席；面前"
    },
    "447": {
        "word": "confidence",
        "mean": "自信；信頼；秘密"
    },
    "448": {
        "word": "harm",
        "mean": "害，損害"
    },
    "449": {
        "word": "instrument",
        "mean": "器具；楽器（≒ musical instrument）"
    },
    "450": {
        "word": "category",
        "mean": "部類，区分；範疇"
    },
    "451": {
        "word": "capital",
        "mean": "資本；首都；大文字（≒ capital letter）"
    },
    "452": {
        "word": "outcome",
        "mean": "結果（≒ result）；成果"
    },
    "453": {
        "word": "notion",
        "mean": "概念，観念；見解；意向"
    },
    "454": {
        "word": "review",
        "mean": "（書物などの）論評；再調査；【米】復習"
    },
    "455": {
        "word": "trait",
        "mean": "特性（≒ feature）"
    },
    "456": {
        "word": "diversity",
        "mean": "多様性；相違点"
    },
    "457": {
        "word": "victim",
        "mean": "犠牲（者），被害者"
    },
    "458": {
        "word": "occasion",
        "mean": "場合，時；行事；機会"
    },
    "459": {
        "word": "facility",
        "mean": "施設，設備；機能；才能"
    },
    "460": {
        "word": "stock",
        "mean": "在庫品；蓄え；株"
    },
    "461": {
        "word": "conference",
        "mean": "会議；協議"
    },
    "462": {
        "word": "humanity",
        "mean": "人類；人間性；人情；〔（the） ～ties〕人文科学"
    },
    "463": {
        "word": "dialect",
        "mean": "方言"
    },
    "464": {
        "word": "proportion",
        "mean": "割合；部分；釣り合い"
    },
    "465": {
        "word": "tip",
        "mean": "助言，秘訣；チップ；先端"
    },
    "466": {
        "word": "lawyer",
        "mean": "弁護士"
    },
    "467": {
        "word": "stuff",
        "mean": "（漠然と）物；素材；素質"
    },
    "468": {
        "word": "comfort",
        "mean": "快適さ；慰め"
    },
    "469": {
        "word": "philosophy",
        "mean": "哲学；原理；人生観"
    },
    "470": {
        "word": "mammal",
        "mean": "哺乳動物"
    },
    "471": {
        "word": "quantity",
        "mean": "量（⇔ quality ⇒ 69）；分量"
    },
    "472": {
        "word": "landscape",
        "mean": "風景；領域；状況"
    },
    "473": {
        "word": "tribe",
        "mean": "部族；仲間"
    },
    "474": {
        "word": "organ",
        "mean": "器官，臓器；組織；（パイプ）オルガン"
    },
    "475": {
        "word": "trial",
        "mean": "試み，（品質・性能などの）試験；裁判；試用期間"
    },
    "476": {
        "word": "norm",
        "mean": "規範；標準"
    },
    "477": {
        "word": "code",
        "mean": "規範；暗号；法典"
    },
    "478": {
        "word": "substance",
        "mean": "物質；実体；趣旨"
    },
    "479": {
        "word": "multiple",
        "mean": "多様な；種々雑多な"
    },
    "480": {
        "word": "numerous",
        "mean": "非常に数の多い"
    },
    "481": {
        "word": "narrow",
        "mean": "狭い；細い；限られた"
    },
    "482": {
        "word": "widespread",
        "mean": "広範囲にわたる；広く普及した"
    },
    "483": {
        "word": "sufficient",
        "mean": "（～に；...するのに）十分な（for；to do）"
    },
    "484": {
        "word": "proper",
        "mean": "適切な；正式の；〔名詞の後ろで〕主要な；（～に）固有の（to）"
    },
    "485": {
        "word": "linguistic",
        "mean": "言語の，言語学の"
    },
    "486": {
        "word": "annual",
        "mean": "年1回の，例年の；1年間の"
    },
    "487": {
        "word": "contemporary",
        "mean": "現代の；同時代の；同年輩の"
    },
    "488": {
        "word": "contrary",
        "mean": "（～と）反対の（to）"
    },
    "489": {
        "word": "strict",
        "mean": "（規則などが）厳しい；厳格な"
    },
    "490": {
        "word": "civil",
        "mean": "市民の；民間の；民事の（⇔ criminal 刑事の）"
    },
    "491": {
        "word": "odd",
        "mean": "奇妙な（≒ strange）；奇数の"
    },
    "492": {
        "word": "unknown",
        "mean": "不明の；（～に）知られていない（to），無名の"
    },
    "493": {
        "word": "superior",
        "mean": "よりすぐれた（⇔ inferior ⇒ 1092）"
    },
    "494": {
        "word": "sensitive",
        "mean": "敏感な；神経質な；微妙な"
    },
    "495": {
        "word": "violent",
        "mean": "（人・気質などが）激しい；暴力的な"
    },
    "496": {
        "word": "virtual",
        "mean": "仮想の；事実上の"
    },
    "497": {
        "word": "regardless",
        "mean": "（～に）かまわない，無頓着な（of）"
    },
    "498": {
        "word": "immediate",
        "mean": "即座の；当面の；すぐそばの；直接の"
    },
    "499": {
        "word": "crucial",
        "mean": "重要な"
    },
    "500": {
        "word": "somewhat",
        "mean": "いくぶん，多少"
    },
    "501": {
        "word": "interpret",
        "mean": "を解釈する；（を）通訳する"
    },
    "502": {
        "word": "translate",
        "mean": "を翻訳する；を（～に）変える（into）"
    },
    "503": {
        "word": "concentrate",
        "mean": "（を）集中する"
    },
    "504": {
        "word": "request",
        "mean": "に（...するように）頼む（to do）；を要請する"
    },
    "505": {
        "word": "criticize",
        "mean": "を批判する；を批評する"
    },
    "506": {
        "word": "overcome",
        "mean": "を克服する"
    },
    "507": {
        "word": "obtain",
        "mean": "を得る"
    },
    "508": {
        "word": "inform",
        "mean": "に知らせる；情報を提供する"
    },
    "509": {
        "word": "ensure",
        "mean": "を確実にする（≒ make sure）；を守る"
    },
    "510": {
        "word": "announce",
        "mean": "を発表［公表］する，知らせる；（物事が）を告げる"
    },
    "511": {
        "word": "grant",
        "mean": "（人）に（許可・権利など）を与える；を認める"
    },
    "512": {
        "word": "freeze",
        "mean": "凍る；を凍らせる；（計画・資金など）を凍結する"
    },
    "513": {
        "word": "oppose",
        "mean": "に反対する；を対抗［対比］させる"
    },
    "514": {
        "word": "differ",
        "mean": "異なる"
    },
    "515": {
        "word": "hate",
        "mean": "をひどく嫌う；を残念に思う"
    },
    "516": {
        "word": "emphasize",
        "mean": "を強調する；を重視する"
    },
    "517": {
        "word": "employ",
        "mean": "を雇う（≒ give ～ a job）；を使う（≒ use）"
    },
    "518": {
        "word": "credit",
        "mean": "（功績など）を（～に）帰する（to）；を信じる"
    },
    "519": {
        "word": "transform",
        "mean": "を変える；変わる"
    },
    "520": {
        "word": "construct",
        "mean": "を建設する（＝ build）；を構成する"
    },
    "521": {
        "word": "arise",
        "mean": "生じる"
    },
    "522": {
        "word": "beat",
        "mean": "を打ち負かす；（を）打つ，たたく"
    },
    "523": {
        "word": "regret",
        "mean": "を後悔する"
    },
    "524": {
        "word": "alter",
        "mean": "を変える；変わる（≒ change）"
    },
    "525": {
        "word": "absorb",
        "mean": "を吸収する；を併合する；を夢中にさせる"
    },
    "526": {
        "word": "disappoint",
        "mean": "を失望させる；（希望など）をくじく"
    },
    "527": {
        "word": "cure",
        "mean": "を治す；を取り除く；（病気が）治る"
    },
    "528": {
        "word": "transport",
        "mean": "を輸送する；を運ぶ"
    },
    "529": {
        "word": "rush",
        "mean": "急いで行く；性急に行動する；をせき立てる"
    },
    "530": {
        "word": "hang",
        "mean": "を掛ける；を絞首刑にする；垂れ（下が）る"
    },
    "531": {
        "word": "blame",
        "mean": "を責める；の責任を負わせる"
    },
    "532": {
        "word": "ban",
        "mean": "を（法的に）禁止する；を締め出す"
    },
    "533": {
        "word": "fascinate",
        "mean": "を魅了する"
    },
    "534": {
        "word": "recover",
        "mean": "回復する；を取り戻す"
    },
    "535": {
        "word": "celebrate",
        "mean": "を祝う；を挙行する"
    },
    "536": {
        "word": "manufacture",
        "mean": "を製造する；をでっち上げる"
    },
    "537": {
        "word": "interact",
        "mean": "影響し合う；相互に作用する"
    },
    "538": {
        "word": "arrange",
        "mean": "の段取りをつける；を手配する；を配置する"
    },
    "539": {
        "word": "adjust",
        "mean": "を調整する；を適合させる；順応する"
    },
    "540": {
        "word": "confirm",
        "mean": "を確認する；を裏づける"
    },
    "541": {
        "word": "insight",
        "mean": "見識，理解（力）；洞察力"
    },
    "542": {
        "word": "innovation",
        "mean": "革新；新機軸"
    },
    "543": {
        "word": "budget",
        "mean": "予算；経費"
    },
    "544": {
        "word": "fee",
        "mean": "料金；謝礼"
    },
    "545": {
        "word": "expense",
        "mean": "〔～s〕経費；費用；犠牲"
    },
    "546": {
        "word": "debt",
        "mean": "借金，負債；恩義"
    },
    "547": {
        "word": "loan",
        "mean": "貸付金，融資；貸すこと"
    },
    "548": {
        "word": "duty",
        "mean": "義務；〔しばしば～ties〕職務；関税"
    },
    "549": {
        "word": "alarm",
        "mean": "不安，恐れ；警報装置"
    },
    "550": {
        "word": "emergency",
        "mean": "緊急（事態）"
    },
    "551": {
        "word": "democracy",
        "mean": "民主主義，民主政治；民主国家"
    },
    "552": {
        "word": "minister",
        "mean": "大臣；（プロテスタント系の）聖職者"
    },
    "553": {
        "word": "fellow",
        "mean": "仲間，同僚；同級生；男"
    },
    "554": {
        "word": "candidate",
        "mean": "（～の）候補（者）（for）；志願者"
    },
    "555": {
        "word": "corporation",
        "mean": "（大）企業；法人"
    },
    "556": {
        "word": "stereotype",
        "mean": "固定観念；決まり文句"
    },
    "557": {
        "word": "route",
        "mean": "道（筋）；路線，ルート；（～の）手段（to）"
    },
    "558": {
        "word": "disorder",
        "mean": "障害，（心身の）不調；混乱"
    },
    "559": {
        "word": "depression",
        "mean": "憂うつ；うつ病；不況；低気圧"
    },
    "560": {
        "word": "weapon",
        "mean": "兵器，武器（≒ arms）"
    },
    "561": {
        "word": "immigration",
        "mean": "（他国からの）移民，移住；入国管理"
    },
    "562": {
        "word": "barrier",
        "mean": "（～に対する）障壁（against / to）；防壁"
    },
    "563": {
        "word": "disadvantage",
        "mean": "不利（な点）；障害；（信用などの）損失"
    },
    "564": {
        "word": "mood",
        "mean": "気分；機嫌；雰囲気"
    },
    "565": {
        "word": "motion",
        "mean": "動き，動作；運動；動議"
    },
    "566": {
        "word": "routine",
        "mean": "決まり切った仕事；いつもの手順"
    },
    "567": {
        "word": "discipline",
        "mean": "規律，しつけ；訓練；懲戒；学問分野"
    },
    "568": {
        "word": "myth",
        "mean": "作り話；神話"
    },
    "569": {
        "word": "hypothesis",
        "mean": "仮説；憶測"
    },
    "570": {
        "word": "physician",
        "mean": "【主に米】 医師（≒ doctor）；内科医"
    },
    "571": {
        "word": "client",
        "mean": "顧客（≒ customer）；（弁護士などの）依頼人"
    },
    "572": {
        "word": "colony",
        "mean": "植民地；集団居住地；（動植物の）コロニー"
    },
    "573": {
        "word": "statistics",
        "mean": "統計；統計学"
    },
    "574": {
        "word": "grain",
        "mean": "穀物；粒；きめ"
    },
    "575": {
        "word": "ingredient",
        "mean": "材料，成分；（成功の）要因"
    },
    "576": {
        "word": "treasure",
        "mean": "宝物，財宝；財産"
    },
    "577": {
        "word": "contract",
        "mean": "契約（書）；協定"
    },
    "578": {
        "word": "welfare",
        "mean": "福祉，幸福"
    },
    "579": {
        "word": "prime",
        "mean": "主要な，最も重要な；最適な；極上の"
    },
    "580": {
        "word": "curious",
        "mean": "好奇心の強い；奇妙な"
    },
    "581": {
        "word": "dramatic",
        "mean": "劇的な；演劇の"
    },
    "582": {
        "word": "distinct",
        "mean": "明らかに異なる；明瞭な"
    },
    "583": {
        "word": "anxious",
        "mean": "心配して；切望して"
    },
    "584": {
        "word": "vital",
        "mean": "必要不可欠な；活気のある；生命にかかわる"
    },
    "585": {
        "word": "conventional",
        "mean": "従来の；月並みな"
    },
    "586": {
        "word": "abstract",
        "mean": "抽象的な（⇔ concrete ⇒ 783）"
    },
    "587": {
        "word": "minor",
        "mean": "重要でない；小さい（⇔ major ⇒ 88）"
    },
    "588": {
        "word": "extraordinary",
        "mean": "並はずれた；異常な，驚くべき"
    },
    "589": {
        "word": "stable",
        "mean": "安定した（⇔ unstable 不安定な）；動じない"
    },
    "590": {
        "word": "flexible",
        "mean": "融通の利く，柔軟な"
    },
    "591": {
        "word": "brief",
        "mean": "簡潔な；短い"
    },
    "592": {
        "word": "aggressive",
        "mean": "攻撃的な；意欲的な"
    },
    "593": {
        "word": "visible",
        "mean": "（目に）見える（⇔ invisible 見えない）；明白な"
    },
    "594": {
        "word": "unexpected",
        "mean": "思いがけない，不意の"
    },
    "595": {
        "word": "ethnic",
        "mean": "民族の，人種の；民族特有の"
    },
    "596": {
        "word": "alien",
        "mean": "（～にとって）異質の（to）；外国の；宇宙人の"
    },
    "597": {
        "word": "initial",
        "mean": "初めの"
    },
    "598": {
        "word": "exact",
        "mean": "正確な；まさにその"
    },
    "599": {
        "word": "precise",
        "mean": "正確な（≒ exact）；精密な；まさにその"
    },
    "600": {
        "word": "latter",
        "mean": "後者の（⇔ former 前者の），後半の"
    },
    "601": {
        "word": "commit",
        "mean": "〔commit oneselfまたは受身形で〕献身する；（罪など）を犯す；を投入する"
    },
    "602": {
        "word": "stimulate",
        "mean": "を刺激する"
    },
    "603": {
        "word": "enhance",
        "mean": "（価値など）を高める，増す"
    },
    "604": {
        "word": "pursue",
        "mean": "を追求する；に従事する"
    },
    "605": {
        "word": "react",
        "mean": "反応する；化学反応を起こす"
    },
    "606": {
        "word": "disagree",
        "mean": "不賛成である；意見が食い違う"
    },
    "607": {
        "word": "stare",
        "mean": "じっと見る；を見つめる"
    },
    "608": {
        "word": "abandon",
        "mean": "を捨てる；を放棄する，断念する"
    },
    "609": {
        "word": "quit",
        "mean": "をやめる；（場所）を去る"
    },
    "610": {
        "word": "capture",
        "mean": "をとらえる；をとりこにする"
    },
    "611": {
        "word": "transfer",
        "mean": "を移す；を伝える；移る；乗り換える"
    },
    "612": {
        "word": "bother",
        "mean": "を悩ます；（～を）気にかける（about / with）"
    },
    "613": {
        "word": "persuade",
        "mean": "を説得する；に確信させる"
    },
    "614": {
        "word": "rent",
        "mean": "を賃借りする；を賃貸しする"
    },
    "615": {
        "word": "breed",
        "mean": "を繁殖させる，育てる；繁殖する"
    },
    "616": {
        "word": "invest",
        "mean": "（を）投資する；に（～を）与える（with）"
    },
    "617": {
        "word": "reserve",
        "mean": "を予約する；を取っておく；（判断など）を保留する"
    },
    "618": {
        "word": "trace",
        "mean": "（足跡・起源など）をたどる；を捜し出す"
    },
    "619": {
        "word": "illustrate",
        "mean": "を説明する；に挿絵を入れる"
    },
    "620": {
        "word": "advise",
        "mean": "に忠告［助言］する；（を）助言する"
    },
    "621": {
        "word": "convey",
        "mean": "を伝える；を運ぶ，運搬する"
    },
    "622": {
        "word": "attach",
        "mean": "を（取り）付ける；を付与する"
    },
    "623": {
        "word": "stretch",
        "mean": "を伸ばす；を広げる；伸びる；及ぶ"
    },
    "624": {
        "word": "puzzle",
        "mean": "を当惑させる"
    },
    "625": {
        "word": "disturb",
        "mean": "をかき乱す；を妨害する；を動揺させる"
    },
    "626": {
        "word": "crash",
        "mean": "衝突する，墜落する；をぶつけて壊す"
    },
    "627": {
        "word": "cope",
        "mean": "うまく処理する"
    },
    "628": {
        "word": "permit",
        "mean": "を許可する（≒ allow）（⇔ forbid ⇒ 1013）"
    },
    "629": {
        "word": "impress",
        "mean": "を感動させる；に印象を与える"
    },
    "630": {
        "word": "suspect",
        "mean": "ではないかと思う；（人）を疑う"
    },
    "631": {
        "word": "upset",
        "mean": "を動揺させる；をだめにする"
    },
    "632": {
        "word": "frighten",
        "mean": "（人）を怖がらせる"
    },
    "633": {
        "word": "import",
        "mean": "を輸入する（⇔ export （を）輸出する）；を取り込む"
    },
    "634": {
        "word": "export",
        "mean": "（を）輸出する（⇔ import を輸入する）"
    },
    "635": {
        "word": "investigate",
        "mean": "を調査する；を究明する；（～を）調査する（into）"
    },
    "636": {
        "word": "monitor",
        "mean": "を監視する；を傍受する"
    },
    "637": {
        "word": "calculate",
        "mean": "を計算する；を予測する"
    },
    "638": {
        "word": "eliminate",
        "mean": "を取り除く"
    },
    "639": {
        "word": "ease",
        "mean": "を軽減する；和らぐ；緩む"
    },
    "640": {
        "word": "launch",
        "mean": "を開始する；を売り出す；を発射する"
    },
    "641": {
        "word": "sequence",
        "mean": "連続；一連（のもの）"
    },
    "642": {
        "word": "therapy",
        "mean": "療法；心理療法"
    },
    "643": {
        "word": "symptom",
        "mean": "症状；兆候（≒ sign）"
    },
    "644": {
        "word": "incident",
        "mean": "出来事，事件；紛争"
    },
    "645": {
        "word": "witness",
        "mean": "目撃者（≒ eyewitness）；証人；証拠，証言"
    },
    "646": {
        "word": "sum",
        "mean": "（金）額；合計；要点"
    },
    "647": {
        "word": "burden",
        "mean": "負担；（重い）義務；積み荷"
    },
    "648": {
        "word": "tone",
        "mean": "口調；音色；雰囲気；色調"
    },
    "649": {
        "word": "honor",
        "mean": "光栄；名誉（⇔ dishonor 不名誉）；敬意"
    },
    "650": {
        "word": "award",
        "mean": "（～の）賞（for）；（証書などの）授与"
    },
    "651": {
        "word": "priority",
        "mean": "優先（事項）"
    },
    "652": {
        "word": "logic",
        "mean": "論理；道理；論理学"
    },
    "653": {
        "word": "minimum",
        "mean": "最小限度（⇔ maximum ⇒ 965）"
    },
    "654": {
        "word": "exception",
        "mean": "（～の）例外（to）"
    },
    "655": {
        "word": "clue",
        "mean": "（～の）手がかり（to / about）；（パズルの）ヒント"
    },
    "656": {
        "word": "bond",
        "mean": "絆；債券；束縛；接着剤"
    },
    "657": {
        "word": "virus",
        "mean": "ウイルス；（感染症の）病原体"
    },
    "658": {
        "word": "surgery",
        "mean": "（外科）手術；外科，外科医学"
    },
    "659": {
        "word": "insurance",
        "mean": "保険；保険料；保険金"
    },
    "660": {
        "word": "frame",
        "mean": "枠，（額）縁；骨組み；体格"
    },
    "661": {
        "word": "shelter",
        "mean": "避難（所），保護"
    },
    "662": {
        "word": "territory",
        "mean": "領土；（活動の）領域；（動物の）テリトリー"
    },
    "663": {
        "word": "boundary",
        "mean": "境界（線）；〔通例～ries〕限界"
    },
    "664": {
        "word": "habitat",
        "mean": "生息地；（人の）居住地"
    },
    "665": {
        "word": "district",
        "mean": "地区；行政区"
    },
    "666": {
        "word": "conservation",
        "mean": "（動植物などの）保護；保存"
    },
    "667": {
        "word": "harvest",
        "mean": "収穫（物）；収穫期；漁獲高"
    },
    "668": {
        "word": "predator",
        "mean": "捕食動物；略奪者"
    },
    "669": {
        "word": "trap",
        "mean": "わな；苦境"
    },
    "670": {
        "word": "trick",
        "mean": "こつ；策略；いたずら；芸当"
    },
    "671": {
        "word": "fault",
        "mean": "〔通例one's ～〕責任；欠点；誤り"
    },
    "672": {
        "word": "discount",
        "mean": "割引"
    },
    "673": {
        "word": "bias",
        "mean": "偏見；傾向"
    },
    "674": {
        "word": "cooperation",
        "mean": "協力，共同"
    },
    "675": {
        "word": "patent",
        "mean": "特許（権）；特許品"
    },
    "676": {
        "word": "dialogue",
        "mean": "対話，会話；意見の交換"
    },
    "677": {
        "word": "component",
        "mean": "構成要素；部品"
    },
    "678": {
        "word": "reputation",
        "mean": "評判；名声"
    },
    "679": {
        "word": "verbal",
        "mean": "言葉の；口頭での；動詞の"
    },
    "680": {
        "word": "internal",
        "mean": "内部の（⇔ external ⇒ 989）；国内の；内面的な"
    },
    "681": {
        "word": "solid",
        "mean": "しっかりした；硬い；固体の"
    },
    "682": {
        "word": "remote",
        "mean": "（～から）遠く離れた（from）；かけ離れた"
    },
    "683": {
        "word": "principal",
        "mean": "主要な；資本金の"
    },
    "684": {
        "word": "sophisticated",
        "mean": "高性能の，精巧な；洗練された"
    },
    "685": {
        "word": "equivalent",
        "mean": "等しい，相当する"
    },
    "686": {
        "word": "rational",
        "mean": "理性的な；合理的な"
    },
    "687": {
        "word": "relevant",
        "mean": "関係がある；適切な"
    },
    "688": {
        "word": "absolute",
        "mean": "絶対的な（⇔ relative 相対的な）"
    },
    "689": {
        "word": "frequent",
        "mean": "頻繁な"
    },
    "690": {
        "word": "permanent",
        "mean": "永続的な（⇔ temporary ⇒ 793）"
    },
    "691": {
        "word": "intense",
        "mean": "強烈な；熱烈な"
    },
    "692": {
        "word": "meaningful",
        "mean": "意味のある"
    },
    "693": {
        "word": "evil",
        "mean": "邪悪な；有害な"
    },
    "694": {
        "word": "extinct",
        "mean": "絶滅した；廃止された"
    },
    "695": {
        "word": "random",
        "mean": "無作為の；手当たり次第の"
    },
    "696": {
        "word": "raw",
        "mean": "生の；未加工の"
    },
    "697": {
        "word": "rude",
        "mean": "無礼な（⇔ polite 礼儀正しい）；粗野な"
    },
    "698": {
        "word": "mere",
        "mean": "単なる，ほんの"
    },
    "699": {
        "word": "tropical",
        "mean": "熱帯の"
    },
    "700": {
        "word": "forth",
        "mean": "前へ，先へ；それ以降"
    },
    "701": {
        "word": "possess",
        "mean": "を所有している；の心をとらえる"
    },
    "702": {
        "word": "dominate",
        "mean": "を支配する；（～より）優勢である（over）"
    },
    "703": {
        "word": "guarantee",
        "mean": "を保証する"
    },
    "704": {
        "word": "melt",
        "mean": "溶ける；なごむ；を溶かす"
    },
    "705": {
        "word": "embarrass",
        "mean": "に恥ずかしい思いをさせる"
    },
    "706": {
        "word": "discourage",
        "mean": "（人）にやる気をなくさせる；を落胆させる（⇔ encourage ⇒ 30）"
    },
    "707": {
        "word": "detect",
        "mean": "を感知する；を見つけ出す；に気づく"
    },
    "708": {
        "word": "devote",
        "mean": "をささげる"
    },
    "709": {
        "word": "urge",
        "mean": "に（強く）促す；を強く主張する；を駆り立てる"
    },
    "710": {
        "word": "lend",
        "mean": "を貸す（⇔ borrow を借りる）；（人）に（助言・援助など）を与える"
    },
    "711": {
        "word": "restrict",
        "mean": "を制限する"
    },
    "712": {
        "word": "isolate",
        "mean": "を孤立させる"
    },
    "713": {
        "word": "accompany",
        "mean": "に同行する；に付随する"
    },
    "714": {
        "word": "exhaust",
        "mean": "を疲れ果てさせる；を使い尽くす；排気する"
    },
    "715": {
        "word": "annoy",
        "mean": "を悩ます；〔受身形で〕腹が立つ"
    },
    "716": {
        "word": "endanger",
        "mean": "を危険にさらす"
    },
    "717": {
        "word": "acknowledge",
        "mean": "（事実など）を認める（≒ admit ⇒ 406）；に謝意を表す"
    },
    "718": {
        "word": "admire",
        "mean": "に（～のことで）敬服［感心］する（for）"
    },
    "719": {
        "word": "evaluate",
        "mean": "を評価する；を査定する"
    },
    "720": {
        "word": "declare",
        "mean": "を宣言する；を申告する"
    },
    "721": {
        "word": "secure",
        "mean": "を確保する；を守る"
    },
    "722": {
        "word": "specialize",
        "mean": "専門とする；【英】（～を）専攻する（in）（≒ 【米】major）"
    },
    "723": {
        "word": "attribute",
        "mean": "（結果など）を（～に）帰する（to）"
    },
    "724": {
        "word": "pretend",
        "mean": "（の）ふりをする"
    },
    "725": {
        "word": "bury",
        "mean": "を埋める；を埋葬する；を隠す"
    },
    "726": {
        "word": "reverse",
        "mean": "を逆転させる；を反対にする"
    },
    "727": {
        "word": "resist",
        "mean": "に抵抗する；〔通例否定文で〕を我慢する"
    },
    "728": {
        "word": "scare",
        "mean": "をおびえさせる；を脅す"
    },
    "729": {
        "word": "imitate",
        "mean": "をまねる；を模造する"
    },
    "730": {
        "word": "assist",
        "mean": "（を）援助する；を手伝う"
    },
    "731": {
        "word": "resemble",
        "mean": "に似ている"
    },
    "732": {
        "word": "retire",
        "mean": "（～から）引退する，退職する（from）；退く"
    },
    "733": {
        "word": "neglect",
        "mean": "をおろそかにする，怠る；を無視する"
    },
    "734": {
        "word": "collapse",
        "mean": "崩壊する；（人が）倒れる；を折り畳む"
    },
    "735": {
        "word": "reform",
        "mean": "を改革する；を改心させる"
    },
    "736": {
        "word": "protest",
        "mean": "（に）抗議する；を主張する"
    },
    "737": {
        "word": "owe",
        "mean": "に借りがある；のおかげである"
    },
    "738": {
        "word": "sustain",
        "mean": "を持続させる；を支える"
    },
    "739": {
        "word": "assign",
        "mean": "を割り当てる；を（～に）配属する（to）"
    },
    "740": {
        "word": "accomplish",
        "mean": "を成し遂げる"
    },
    "741": {
        "word": "wisdom",
        "mean": "知恵；賢明さ；学識"
    },
    "742": {
        "word": "literacy",
        "mean": "読み書きの能力；（特定分野の）知識"
    },
    "743": {
        "word": "heritage",
        "mean": "遺産"
    },
    "744": {
        "word": "mission",
        "mean": "使命；（外交）使節団；布教"
    },
    "745": {
        "word": "license",
        "mean": "免許（証）；許可"
    },
    "746": {
        "word": "elite",
        "mean": "〔通例the ～〕〔集合的に〕エリート"
    },
    "747": {
        "word": "layer",
        "mean": "層"
    },
    "748": {
        "word": "motor",
        "mean": "モーター；原動力"
    },
    "749": {
        "word": "protein",
        "mean": "たんぱく質"
    },
    "750": {
        "word": "profession",
        "mean": "職業；専門職；同業者仲間"
    },
    "751": {
        "word": "editor",
        "mean": "編集者；編集長"
    },
    "752": {
        "word": "agent",
        "mean": "仲介者，代理人；薬剤"
    },
    "753": {
        "word": "globe",
        "mean": "地球（≒ earth）；世界；球"
    },
    "754": {
        "word": "haven",
        "mean": "避難所，保護区；港"
    },
    "755": {
        "word": "row",
        "mean": "列；（建物が並ぶ）通り"
    },
    "756": {
        "word": "sacrifice",
        "mean": "犠牲；いけにえ"
    },
    "757": {
        "word": "means",
        "mean": "〔単数・複数扱い〕手段；〔複数扱い〕資力，収入"
    },
    "758": {
        "word": "session",
        "mean": "集まり；（議会の）会期；（開会中の）議会"
    },
    "759": {
        "word": "league",
        "mean": "（競技）連盟；同盟"
    },
    "760": {
        "word": "contest",
        "mean": "コンテスト，競技（会）；争い"
    },
    "761": {
        "word": "guard",
        "mean": "警備員；警備隊；監視，警戒"
    },
    "762": {
        "word": "opponent",
        "mean": "（試合・論争などの）相手；反対者"
    },
    "763": {
        "word": "glance",
        "mean": "（～を）ちらっと見ること（at）"
    },
    "764": {
        "word": "divorce",
        "mean": "離婚；分離"
    },
    "765": {
        "word": "tissue",
        "mean": "（生物の）組織；ティッシュペーパー"
    },
    "766": {
        "word": "liquid",
        "mean": "液体"
    },
    "767": {
        "word": "inequality",
        "mean": "不平等；不公平な事柄"
    },
    "768": {
        "word": "prejudice",
        "mean": "（～に対する）偏見（against）（≒ bias）"
    },
    "769": {
        "word": "justice",
        "mean": "公正，正義；司法"
    },
    "770": {
        "word": "guideline",
        "mean": "指針，ガイドライン；指導基準"
    },
    "771": {
        "word": "platform",
        "mean": "プラットフォーム；演壇；舞台"
    },
    "772": {
        "word": "sector",
        "mean": "（社会・経済などの）部門，セクター；（都市内の）地域"
    },
    "773": {
        "word": "channel",
        "mean": "チャンネル；伝達経路；海峡"
    },
    "774": {
        "word": "glacier",
        "mean": "氷河"
    },
    "775": {
        "word": "primate",
        "mean": "霊長目の動物"
    },
    "776": {
        "word": "usage",
        "mean": "（使）用法；語法；習慣"
    },
    "777": {
        "word": "fortune",
        "mean": "財産；幸運（≒ luck）；運命"
    },
    "778": {
        "word": "correlation",
        "mean": "相互関係，相関（関係）"
    },
    "779": {
        "word": "artistic",
        "mean": "芸術的な"
    },
    "780": {
        "word": "literary",
        "mean": "文学の；文語の（⇔ colloquial 口語体の）"
    },
    "781": {
        "word": "classic",
        "mean": "第一級の；典型的な；定番の"
    },
    "782": {
        "word": "liberal",
        "mean": "自由主義の；寛大な；一般教養の"
    },
    "783": {
        "word": "concrete",
        "mean": "具体的な（⇔ abstract ⇒ 586）；有形の"
    },
    "784": {
        "word": "slight",
        "mean": "わずかな；取るに足らない"
    },
    "785": {
        "word": "federal",
        "mean": "連邦（政府）の"
    },
    "786": {
        "word": "primitive",
        "mean": "原始的な；未開の"
    },
    "787": {
        "word": "unfamiliar",
        "mean": "（～に）不慣れな（with）；（～に）（よく）知られていない（to）"
    },
    "788": {
        "word": "subtle",
        "mean": "微妙な；（気体などが）希薄な"
    },
    "789": {
        "word": "plain",
        "mean": "明らかな；平易な；飾りのない；率直な"
    },
    "790": {
        "word": "marine",
        "mean": "海の；船舶の"
    },
    "791": {
        "word": "apparent",
        "mean": "明白な；一見～らしい"
    },
    "792": {
        "word": "reluctant",
        "mean": "気が進まない，嫌がる（⇔ willing ⇒ 298）"
    },
    "793": {
        "word": "temporary",
        "mean": "一時的な（⇔ permanent ⇒ 690）"
    },
    "794": {
        "word": "guilty",
        "mean": "罪悪感のある；（～について）有罪の（of）"
    },
    "795": {
        "word": "royal",
        "mean": "王の"
    },
    "796": {
        "word": "pure",
        "mean": "純粋な；潔白な；まったくの"
    },
    "797": {
        "word": "incredible",
        "mean": "信じられない；すばらしい"
    },
    "798": {
        "word": "eager",
        "mean": "（～を）熱望して（for）；熱心な"
    },
    "799": {
        "word": "adequate",
        "mean": "十分な；適切な（⇔ inadequate 不適切な）"
    },
    "800": {
        "word": "via",
        "mean": "～経由で；～の媒介で"
    },
    "801": {
        "word": "assess",
        "mean": "を評価する；を査定する"
    },
    "802": {
        "word": "approve",
        "mean": "賛成する；を承認する"
    },
    "803": {
        "word": "remark",
        "mean": "と述べる；（～について）意見を述べる（on / upon）"
    },
    "804": {
        "word": "pose",
        "mean": "（危険）を引き起こす；（問題など）を提起する；ポーズをとる；（～を）装う（as）"
    },
    "805": {
        "word": "yield",
        "mean": "をもたらす；を（～に）譲る（to）；（～に）屈する（to）"
    },
    "806": {
        "word": "exhibit",
        "mean": "を示す，見せる；を展示する"
    },
    "807": {
        "word": "distribute",
        "mean": "を（～に）分配する（to）；〔受身形で〕分布する"
    },
    "808": {
        "word": "command",
        "mean": "を命じる；を指揮する；（景色）を見渡せる"
    },
    "809": {
        "word": "occupy",
        "mean": "（空間・時間）を占める；を占領する"
    },
    "810": {
        "word": "pop",
        "mean": "ひょいと動く；不意に現れる；ポンとはじける"
    },
    "811": {
        "word": "pile",
        "mean": "を積み重ねる；積み重なる"
    },
    "812": {
        "word": "greet",
        "mean": "に挨拶する；を迎える"
    },
    "813": {
        "word": "apologize",
        "mean": "（～に；～のことで）謝る（to；for）；弁明する"
    },
    "814": {
        "word": "frustrate",
        "mean": "をいら立たせる；（計画・希望など）を挫折させる"
    },
    "815": {
        "word": "relieve",
        "mean": "を和らげる；〔受身形で〕（...して）安心する（to do）；を解放する"
    },
    "816": {
        "word": "derive",
        "mean": "由来する；を引き出す；を推論する"
    },
    "817": {
        "word": "deserve",
        "mean": "に値する"
    },
    "818": {
        "word": "peer",
        "mean": "（～を）じっと見る（at / into）"
    },
    "819": {
        "word": "defeat",
        "mean": "を負かす（≒ beat）；を失敗させる"
    },
    "820": {
        "word": "convert",
        "mean": "を変える；を改宗［転向］させる；を交換する"
    },
    "821": {
        "word": "wed",
        "mean": "と結婚する；を（～と）結婚させる（to）"
    },
    "822": {
        "word": "delight",
        "mean": "を喜ばせる；（～を）大いに喜ぶ（in）"
    },
    "823": {
        "word": "boost",
        "mean": "を押し上げる；を増加させる"
    },
    "824": {
        "word": "endure",
        "mean": "に耐える（≒ put up with）；（に）持ちこたえる"
    },
    "825": {
        "word": "correspond",
        "mean": "一致する；（～に）相当する（to）；文通する"
    },
    "826": {
        "word": "impose",
        "mean": "を課す；を押しつける"
    },
    "827": {
        "word": "rescue",
        "mean": "を救う"
    },
    "828": {
        "word": "resolve",
        "mean": "を解決する；を決意する；を議決する"
    },
    "829": {
        "word": "register",
        "mean": "を記録する，登録する；（～に）登録する（for）"
    },
    "830": {
        "word": "interrupt",
        "mean": "を中断させる；（の）邪魔をする"
    },
    "831": {
        "word": "rid",
        "mean": "から（～を）取り除く，除去する（of）"
    },
    "832": {
        "word": "prohibit",
        "mean": "を禁止する"
    },
    "833": {
        "word": "compose",
        "mean": "を構成する；を創作する；を鎮静する"
    },
    "834": {
        "word": "misunderstand",
        "mean": "（を）誤解する"
    },
    "835": {
        "word": "punish",
        "mean": "を罰する；に損傷を与える"
    },
    "836": {
        "word": "ruin",
        "mean": "をだめにする；を破滅させる；破滅する"
    },
    "837": {
        "word": "defend",
        "mean": "を防御する；を弁護する"
    },
    "838": {
        "word": "embrace",
        "mean": "を受け入れる；（を）抱擁する；を包含する"
    },
    "839": {
        "word": "modify",
        "mean": "を修正する；を緩和する"
    },
    "840": {
        "word": "qualify",
        "mean": "（人）に資格を与える；資格がある"
    },
    "841": {
        "word": "passion",
        "mean": "情熱；熱中；激怒"
    },
    "842": {
        "word": "enthusiasm",
        "mean": "（～への）熱情，熱意（for）"
    },
    "843": {
        "word": "phase",
        "mean": "段階，局面；側面"
    },
    "844": {
        "word": "mode",
        "mean": "方式；気分；形態；流行"
    },
    "845": {
        "word": "span",
        "mean": "期間；範囲"
    },
    "846": {
        "word": "gravity",
        "mean": "重力，引力；重量；重大さ"
    },
    "847": {
        "word": "orbit",
        "mean": "軌道；（活動・勢力などの）範囲"
    },
    "848": {
        "word": "asteroid",
        "mean": "小惑星（≒ minor planet）；ヒトデ（＝ starfish）"
    },
    "849": {
        "word": "core",
        "mean": "核心；芯"
    },
    "850": {
        "word": "soul",
        "mean": "精神；魂，霊魂；生気"
    },
    "851": {
        "word": "nerve",
        "mean": "神経；〔～s〕神経過敏；（...する）度胸（to do）"
    },
    "852": {
        "word": "infection",
        "mean": "感染（症）"
    },
    "853": {
        "word": "mall",
        "mean": "【主に米】 モール，ショッピングセンター"
    },
    "854": {
        "word": "grocery",
        "mean": "〔～ies〕食料雑貨；食料雑貨店"
    },
    "855": {
        "word": "humor",
        "mean": "ユーモア；気分，機嫌；気質"
    },
    "856": {
        "word": "instinct",
        "mean": "本能；勘，直感；（自然に起こる）衝動"
    },
    "857": {
        "word": "faith",
        "mean": "（～への）信頼（in）；信仰（心）"
    },
    "858": {
        "word": "courage",
        "mean": "勇気"
    },
    "859": {
        "word": "incentive",
        "mean": "動機（づけ）；報奨金"
    },
    "860": {
        "word": "prospect",
        "mean": "見込み；〔～s〕（未来への）展望；有望な人"
    },
    "861": {
        "word": "obstacle",
        "mean": "（～に対する）障害（物）（to）"
    },
    "862": {
        "word": "architecture",
        "mean": "建築；建築様式；構造"
    },
    "863": {
        "word": "stem",
        "mean": "（草木の）茎，幹"
    },
    "864": {
        "word": "illusion",
        "mean": "錯覚，思い違い；幻想"
    },
    "865": {
        "word": "discrimination",
        "mean": "（～に対する）差別（against）；区別"
    },
    "866": {
        "word": "shame",
        "mean": "恥；残念なこと"
    },
    "867": {
        "word": "drought",
        "mean": "干ばつ；（慢性的な）不足"
    },
    "868": {
        "word": "flavor",
        "mean": "風味；特色"
    },
    "869": {
        "word": "portion",
        "mean": "部分；1人前；割り当て"
    },
    "870": {
        "word": "recipe",
        "mean": "調理法，レシピ；手順；秘訣"
    },
    "871": {
        "word": "luxury",
        "mean": "ぜいたく（品）；〔形容詞的に〕豪華な"
    },
    "872": {
        "word": "chip",
        "mean": "小片，破片；欠けた箇所；集積回路"
    },
    "873": {
        "word": "ritual",
        "mean": "儀式；（日常の）習慣的行為"
    },
    "874": {
        "word": "sake",
        "mean": "〔for the ～ ofで〕のために，の目的で；に免じて"
    },
    "875": {
        "word": "prefecture",
        "mean": "（日本の）県，府；（フランスなどの）県"
    },
    "876": {
        "word": "council",
        "mean": "（地方）議会；評議会；（公の）会議"
    },
    "877": {
        "word": "administration",
        "mean": "管理（部）；行政；政府（機関）"
    },
    "878": {
        "word": "curriculum",
        "mean": "教育課程，カリキュラム"
    },
    "879": {
        "word": "precious",
        "mean": "貴重な；高価な（≒ valuable）"
    },
    "880": {
        "word": "generous",
        "mean": "寛大な；気前のよい（⇔ stingy けちな）；豊富な"
    },
    "881": {
        "word": "casual",
        "mean": "何気ない；形式ばらない"
    },
    "882": {
        "word": "optimistic",
        "mean": "楽観的な（⇔ pessimistic ⇒ 1593）"
    },
    "883": {
        "word": "rough",
        "mean": "粗い；大まかな；乱暴な"
    },
    "884": {
        "word": "unpleasant",
        "mean": "不愉快な；不親切な，無礼な"
    },
    "885": {
        "word": "Arctic",
        "mean": "北極の（⇔ Antarctic 南極の）"
    },
    "886": {
        "word": "ultimate",
        "mean": "究極の"
    },
    "887": {
        "word": "deaf",
        "mean": "耳が聞こえない（≒ hard of hearing）"
    },
    "888": {
        "word": "genuine",
        "mean": "本物の（≒ authentic ⇒ 1580, real）；偽りのない"
    },
    "889": {
        "word": "manual",
        "mean": "体［手］を使う；手の；手動式の"
    },
    "890": {
        "word": "mechanical",
        "mean": "機械の；機械的な"
    },
    "891": {
        "word": "instant",
        "mean": "即時の，すぐの；即席の"
    },
    "892": {
        "word": "spare",
        "mean": "余分の，予備の"
    },
    "893": {
        "word": "immune",
        "mean": "（～に対して）免疫を持つ（to）；（～を）免れた（from）"
    },
    "894": {
        "word": "harsh",
        "mean": "厳しい；（光・色・味などが）不快な"
    },
    "895": {
        "word": "collective",
        "mean": "集団の，共同の"
    },
    "896": {
        "word": "inevitable",
        "mean": "避けられない"
    },
    "897": {
        "word": "profound",
        "mean": "重大な；深い；難解な"
    },
    "898": {
        "word": "steady",
        "mean": "着実な，一定の；安定した"
    },
    "899": {
        "word": "mature",
        "mean": "成熟した（⇔ immature 未熟な）；熟した"
    },
    "900": {
        "word": "likewise",
        "mean": "同様に（≒ in the same way）"
    },
    "901": {
        "word": "chase",
        "mean": "（を）追跡する；（を）追求する"
    },
    "902": {
        "word": "sue",
        "mean": "を告訴する；（～を求めて）訴訟を起こす（for）"
    },
    "903": {
        "word": "gaze",
        "mean": "じっと見る"
    },
    "904": {
        "word": "slip",
        "mean": "滑る；滑り落ちる；そっと動く"
    },
    "905": {
        "word": "load",
        "mean": "に積む；に負わせる"
    },
    "906": {
        "word": "overwhelm",
        "mean": "を圧倒する；を（精神的に）打ちのめす"
    },
    "907": {
        "word": "wander",
        "mean": "歩き回る；それる；はぐれる"
    },
    "908": {
        "word": "float",
        "mean": "漂う，浮かぶ；を浮かべる"
    },
    "909": {
        "word": "pour",
        "mean": "を注ぐ；激しく降る；押し寄せる"
    },
    "910": {
        "word": "substitute",
        "mean": "を代わりに使う；（～の）代理をする（for）"
    },
    "911": {
        "word": "pronounce",
        "mean": "を発音する；を宣言する"
    },
    "912": {
        "word": "shrink",
        "mean": "縮む，縮小する；減少する；ひるむ"
    },
    "913": {
        "word": "restore",
        "mean": "を回復させる；を修復する"
    },
    "914": {
        "word": "trigger",
        "mean": "を引き起こす；のきっかけとなる"
    },
    "915": {
        "word": "grab",
        "mean": "をつかむ；を横取りする；を急いで食べる"
    },
    "916": {
        "word": "retain",
        "mean": "を保持する；を覚えている"
    },
    "917": {
        "word": "reproduce",
        "mean": "を複製する；を繁殖させる；繁殖する"
    },
    "918": {
        "word": "bob",
        "mean": "上下に動く；急に動く；を上下に動かす"
    },
    "919": {
        "word": "entertain",
        "mean": "を楽しませる；をもてなす"
    },
    "920": {
        "word": "interfere",
        "mean": "干渉する，介入する；邪魔する"
    },
    "921": {
        "word": "cultivate",
        "mean": "を養う；を耕す；を栽培する"
    },
    "922": {
        "word": "underlie",
        "mean": "の根底にある"
    },
    "923": {
        "word": "anticipate",
        "mean": "を予期する；楽しみに待つ"
    },
    "924": {
        "word": "justify",
        "mean": "を正当化する"
    },
    "925": {
        "word": "regulate",
        "mean": "を規制する；を調整する"
    },
    "926": {
        "word": "scan",
        "mean": "を走査［スキャン］する；をざっと見る；を注意深く調べる"
    },
    "927": {
        "word": "classify",
        "mean": "を分類する；を機密扱いにする"
    },
    "928": {
        "word": "submit",
        "mean": "を提出する；〔submit oneselfで〕（～に）従う（to）"
    },
    "929": {
        "word": "pause",
        "mean": "（一時的に）中止する；（一瞬）立ち止まる"
    },
    "930": {
        "word": "lean",
        "mean": "傾く；寄りかかる；をもたせかける"
    },
    "931": {
        "word": "bump",
        "mean": "ぶつかる；をぶつける"
    },
    "932": {
        "word": "fold",
        "mean": "を折り畳む；（両腕）を組む；（折り）畳める"
    },
    "933": {
        "word": "hesitate",
        "mean": "躊躇する，ためらう"
    },
    "934": {
        "word": "pump",
        "mean": "（液体・気体）をポンプで送り込む；をくみ出す；を注ぎ込む"
    },
    "935": {
        "word": "mount",
        "mean": "を据えつける；に着手する；（自転車など）に乗る；増える"
    },
    "936": {
        "word": "exceed",
        "mean": "を超える；に勝る"
    },
    "937": {
        "word": "undergo",
        "mean": "を経験する；（手術など）を受ける；に耐える"
    },
    "938": {
        "word": "confront",
        "mean": "に立ち向かう；（困難などが）に立ちはだかる"
    },
    "939": {
        "word": "consult",
        "mean": "（に）相談する；を参照する"
    },
    "940": {
        "word": "fulfill",
        "mean": "を実現させる；を果たす；を満たす"
    },
    "941": {
        "word": "privilege",
        "mean": "特権，特典"
    },
    "942": {
        "word": "formation",
        "mean": "形成；構成（物）；隊列"
    },
    "943": {
        "word": "dimension",
        "mean": "側面，局面；次元；寸法"
    },
    "944": {
        "word": "neuron",
        "mean": "ニューロン，神経単位"
    },
    "945": {
        "word": "sensation",
        "mean": "感覚；大評判"
    },
    "946": {
        "word": "chart",
        "mean": "図，グラフ；海図；ヒットチャート"
    },
    "947": {
        "word": "geography",
        "mean": "〔the ～〕地理；地理学"
    },
    "948": {
        "word": "panel",
        "mean": "（専門家の）一団；討論者一同；羽目板"
    },
    "949": {
        "word": "semester",
        "mean": "【主に米】 （2学期制の）学期"
    },
    "950": {
        "word": "workforce",
        "mean": "労働人口，総労働力；全従業員（数）"
    },
    "951": {
        "word": "mill",
        "mean": "製造工場；製粉所；粉ひき機"
    },
    "952": {
        "word": "abuse",
        "mean": "乱用；虐待"
    },
    "953": {
        "word": "vice",
        "mean": "（道徳上の）悪（⇔ virtue ⇒ 1078）；欠点"
    },
    "954": {
        "word": "fate",
        "mean": "運命；結末；最期"
    },
    "955": {
        "word": "tragedy",
        "mean": "悲劇（的な事態）（⇔ comedy 喜劇）"
    },
    "956": {
        "word": "scenario",
        "mean": "（予想される）筋書き，事態；脚本"
    },
    "957": {
        "word": "allergy",
        "mean": "アレルギー"
    },
    "958": {
        "word": "wound",
        "mean": "（銃弾・刃物などによる）傷；痛手"
    },
    "959": {
        "word": "antibiotic",
        "mean": "〔通例～s〕抗生物質"
    },
    "960": {
        "word": "vaccine",
        "mean": "ワクチン"
    },
    "961": {
        "word": "metaphor",
        "mean": "隠喩；比喩"
    },
    "962": {
        "word": "folk",
        "mean": "人々；〔～s〕皆さん；〔one's ～s〕家族"
    },
    "963": {
        "word": "fare",
        "mean": "（乗り物の）料金"
    },
    "964": {
        "word": "transition",
        "mean": "移り変わり；過渡期"
    },
    "965": {
        "word": "maximum",
        "mean": "最大限（⇔ minimum ⇒ 653）"
    },
    "966": {
        "word": "galaxy",
        "mean": "星雲，銀河；〔the G～〕銀河系"
    },
    "967": {
        "word": "mineral",
        "mean": "鉱物；ミネラル"
    },
    "968": {
        "word": "skeleton",
        "mean": "骨格；骨組み；概略"
    },
    "969": {
        "word": "counterpart",
        "mean": "相当する物［人］"
    },
    "970": {
        "word": "stroke",
        "mean": "脳卒中；（ボールを）打つこと；（雷などの）一撃"
    },
    "971": {
        "word": "pedestrian",
        "mean": "歩行者"
    },
    "972": {
        "word": "trail",
        "mean": "（野山などの）小道；跡；手がかり"
    },
    "973": {
        "word": "ecology",
        "mean": "生態学；生態系；環境保護"
    },
    "974": {
        "word": "sibling",
        "mean": "きょうだい（の1人）"
    },
    "975": {
        "word": "ratio",
        "mean": "比率"
    },
    "976": {
        "word": "mixture",
        "mean": "混合（物）"
    },
    "977": {
        "word": "charm",
        "mean": "魅力；お守り"
    },
    "978": {
        "word": "ambition",
        "mean": "（～に対する）願望，野望（for）；野心"
    },
    "979": {
        "word": "prominent",
        "mean": "卓越した；目立つ"
    },
    "980": {
        "word": "radical",
        "mean": "急進的な；根本的な"
    },
    "981": {
        "word": "prompt",
        "mean": "即座の，迅速な"
    },
    "982": {
        "word": "informal",
        "mean": "形式ばらない，略式の（⇔ formal 正式の）；（言葉が）くだけた"
    },
    "983": {
        "word": "mutual",
        "mean": "相互の；共通の"
    },
    "984": {
        "word": "neutral",
        "mean": "中立の；（特徴・表情などが）はっきりしない"
    },
    "985": {
        "word": "alert",
        "mean": "警戒して；敏速な"
    },
    "986": {
        "word": "magnetic",
        "mean": "磁気の；磁石の；人を引きつける"
    },
    "987": {
        "word": "polar",
        "mean": "極地の；電極の"
    },
    "988": {
        "word": "fluent",
        "mean": "流ちょうな"
    },
    "989": {
        "word": "external",
        "mean": "外部の（⇔ internal ⇒ 680）；対外的な"
    },
    "990": {
        "word": "passive",
        "mean": "受動的な；消極的な"
    },
    "991": {
        "word": "awful",
        "mean": "ひどい；嫌な；ものすごい"
    },
    "992": {
        "word": "unrelated",
        "mean": "無関係の；血縁関係がない"
    },
    "993": {
        "word": "cruel",
        "mean": "残酷な；むごい"
    },
    "994": {
        "word": "fake",
        "mean": "偽の；見せかけだけの"
    },
    "995": {
        "word": "vulnerable",
        "mean": "（攻撃などに）弱い，もろい；傷つきやすい"
    },
    "996": {
        "word": "urgent",
        "mean": "緊急の"
    },
    "997": {
        "word": "spiritual",
        "mean": "精神の（⇔ material ⇒ 73）；霊的な"
    },
    "998": {
        "word": "modest",
        "mean": "謙虚な（≒ humble）；適度な；質素な"
    },
    "999": {
        "word": "keen",
        "mean": "熱心な；鋭敏な；（感情・関心などが）強い"
    },
    "1000": {
        "word": "nonetheless",
        "mean": "それにもかかわらず，それでもなお（≒ nevertheless）"
    },
    "1001": {
        "word": "negotiate",
        "mean": "交渉する；を（交渉して）取り決める"
    },
    "1002": {
        "word": "grasp",
        "mean": "を把握［理解］する；をしっかり握る"
    },
    "1003": {
        "word": "donate",
        "mean": "を寄付する；（臓器・血液）を提供する"
    },
    "1004": {
        "word": "arrest",
        "mean": "を逮捕する；を止める；（注意）を引く"
    },
    "1005": {
        "word": "crack",
        "mean": "ひびが入る；にひびを入れる"
    },
    "1006": {
        "word": "tap",
        "mean": "を軽くたたく；（液体）を出す；を盗聴する"
    },
    "1007": {
        "word": "split",
        "mean": "を分割する；を分担する；分裂する"
    },
    "1008": {
        "word": "forecast",
        "mean": "を予想［予測］する"
    },
    "1009": {
        "word": "exclude",
        "mean": "を除外する（⇔include を含む）"
    },
    "1010": {
        "word": "overlook",
        "mean": "を見落とす；を大目に見る；を見渡す"
    },
    "1011": {
        "word": "burst",
        "mean": "破裂する；（～を）突然始める（into）"
    },
    "1012": {
        "word": "heal",
        "mean": "（人・傷など）を治す；治る"
    },
    "1013": {
        "word": "forbid",
        "mean": "を禁じる（⇔permit 許可する）"
    },
    "1014": {
        "word": "install",
        "mean": "をインストールする；を設置する；を就任させる"
    },
    "1015": {
        "word": "diminish",
        "mean": "を減らす；減少する（≒decrease）"
    },
    "1016": {
        "word": "cite",
        "mean": "を引き合いに出す；を引用する"
    },
    "1017": {
        "word": "quote",
        "mean": "を引用する；を引き合いに出す"
    },
    "1018": {
        "word": "dispute",
        "mean": "に異議を唱える；（を）議論する"
    },
    "1019": {
        "word": "highlight",
        "mean": "を目立たせる、強調する"
    },
    "1020": {
        "word": "distract",
        "mean": "（注意など）をそらす"
    },
    "1021": {
        "word": "cheat",
        "mean": "をだます；不正をする"
    },
    "1022": {
        "word": "foster",
        "mean": "をはぐくむ；を養育する；を心に抱く"
    },
    "1023": {
        "word": "obey",
        "mean": "に従う；に服従する"
    },
    "1024": {
        "word": "bend",
        "mean": "を曲げる；を屈服させる；曲がる"
    },
    "1025": {
        "word": "deprive",
        "mean": "から（権利などを）奪う"
    },
    "1026": {
        "word": "govern",
        "mean": "（を）統治する、支配する"
    },
    "1027": {
        "word": "log",
        "mean": "〔log onで〕ログオンする；を記録する"
    },
    "1028": {
        "word": "transmit",
        "mean": "を伝える；（電波・信号など）を送る"
    },
    "1029": {
        "word": "bully",
        "mean": "をいじめる；を脅す"
    },
    "1030": {
        "word": "leap",
        "mean": "跳ぶ；さっと動く；急上昇する"
    },
    "1031": {
        "word": "astonish",
        "mean": "を驚かす"
    },
    "1032": {
        "word": "thrill",
        "mean": "をぞくぞくさせる；わくわくする"
    },
    "1033": {
        "word": "nod",
        "mean": "うなずく；会釈する；うとうとする"
    },
    "1034": {
        "word": "bow",
        "mean": "おじぎする；屈服する"
    },
    "1035": {
        "word": "blend",
        "mean": "を混ぜる；を調和させる；（～に）溶け込む（into）"
    },
    "1036": {
        "word": "complicate",
        "mean": "を複雑にする"
    },
    "1037": {
        "word": "pitch",
        "mean": "を投げる；倒れる；縦揺れする"
    },
    "1038": {
        "word": "persist",
        "mean": "続く；固執する"
    },
    "1039": {
        "word": "dedicate",
        "mean": "をささげる；を献呈する"
    },
    "1040": {
        "word": "equip",
        "mean": "に備えつける"
    },
    "1041": {
        "word": "premise",
        "mean": "前提；〔～s〕（建物を含めた）構内、敷地"
    },
    "1042": {
        "word": "input",
        "mean": "入力（情報）、投入；（情報・時間などの）提供"
    },
    "1043": {
        "word": "merit",
        "mean": "利点（⇔demerit 欠点）；功績；真価"
    },
    "1044": {
        "word": "sympathy",
        "mean": "同情；（～に対する）共感（with/for）"
    },
    "1045": {
        "word": "compliment",
        "mean": "賛辞；表敬"
    },
    "1046": {
        "word": "infrastructure",
        "mean": "インフラ、基本的施設；（経済）基盤"
    },
    "1047": {
        "word": "ray",
        "mean": "光線；ひらめき、一筋の光明"
    },
    "1048": {
        "word": "distress",
        "mean": "苦悩；苦痛；困窮"
    },
    "1049": {
        "word": "joint",
        "mean": "関節；接合（部）"
    },
    "1050": {
        "word": "expedition",
        "mean": "遠征（隊）、探検（隊）"
    },
    "1051": {
        "word": "adolescent",
        "mean": "青年；青年期の"
    },
    "1052": {
        "word": "shade",
        "mean": "（日）陰；色合い；日よけ；微妙な相違"
    },
    "1053": {
        "word": "jury",
        "mean": "陪審（員団）；審査員団"
    },
    "1054": {
        "word": "ethic",
        "mean": "倫理、道徳；〔～s〕倫理［道徳］規範"
    },
    "1055": {
        "word": "penalty",
        "mean": "（刑）罰；罰金；ペナルティー"
    },
    "1056": {
        "word": "faculty",
        "mean": "能力、機能；学部；教授陣"
    },
    "1057": {
        "word": "scheme",
        "mean": "計画（≒plan）；体系；陰謀"
    },
    "1058": {
        "word": "nutrition",
        "mean": "栄養（の摂取）"
    },
    "1059": {
        "word": "particle",
        "mean": "（微）粒子；ほんのわずか"
    },
    "1060": {
        "word": "molecule",
        "mean": "分子；微粒子"
    },
    "1061": {
        "word": "nationality",
        "mean": "国籍；国民；国民性"
    },
    "1062": {
        "word": "poll",
        "mean": "世論調査；投票（数）"
    },
    "1063": {
        "word": "clinic",
        "mean": "診療所、クリニック；（病院内の）～科"
    },
    "1064": {
        "word": "dementia",
        "mean": "認知症"
    },
    "1065": {
        "word": "fatigue",
        "mean": "疲労（≒exhaustion）"
    },
    "1066": {
        "word": "dilemma",
        "mean": "ジレンマ、板ばさみ"
    },
    "1067": {
        "word": "queue",
        "mean": "【英】（順番を待つ）列"
    },
    "1068": {
        "word": "curve",
        "mean": "（道路などの）カーブ；曲線"
    },
    "1069": {
        "word": "narrative",
        "mean": "物語、話；（小説の）叙述部分、地の文"
    },
    "1070": {
        "word": "fingerprint",
        "mean": "指紋"
    },
    "1071": {
        "word": "file",
        "mean": "ファイル；（書類の）とじ込み"
    },
    "1072": {
        "word": "wilderness",
        "mean": "荒野；（庭・町などの）放置された部分"
    },
    "1073": {
        "word": "pesticide",
        "mean": "殺虫剤；除草剤（≒herbicide）"
    },
    "1074": {
        "word": "panic",
        "mean": "パニック（状態）；狼狽"
    },
    "1075": {
        "word": "fabric",
        "mean": "織物、布（地）；構造"
    },
    "1076": {
        "word": "fantasy",
        "mean": "空想；幻想；幻想的作品"
    },
    "1077": {
        "word": "fancy",
        "mean": "（気まぐれな）好み；空想；思いつき"
    },
    "1078": {
        "word": "virtue",
        "mean": "美徳（⇔vice 悪）；長所；効能"
    },
    "1079": {
        "word": "grateful",
        "mean": "感謝している"
    },
    "1080": {
        "word": "valid",
        "mean": "妥当な；有効な"
    },
    "1081": {
        "word": "elaborate",
        "mean": "入念な；凝った"
    },
    "1082": {
        "word": "moderate",
        "mean": "適度な；穏健な"
    },
    "1083": {
        "word": "dynamic",
        "mean": "活動的な、精力的な；動的な（⇔static 静的な）"
    },
    "1084": {
        "word": "brave",
        "mean": "勇敢な（⇔cowardly 臆病な）；見事な"
    },
    "1085": {
        "word": "brilliant",
        "mean": "すばらしい；才能にあふれた；きらめく"
    },
    "1086": {
        "word": "tremendous",
        "mean": "途方もない、莫大な；すばらしい"
    },
    "1087": {
        "word": "oral",
        "mean": "口頭の"
    },
    "1088": {
        "word": "innocent",
        "mean": "無罪の（⇔guilty 有罪の）；無邪気な；無知の"
    },
    "1089": {
        "word": "subsequent",
        "mean": "その後の"
    },
    "1090": {
        "word": "shallow",
        "mean": "浅い（⇔deep 深い）；浅薄な"
    },
    "1091": {
        "word": "indifferent",
        "mean": "無関心な（≒uninterested）"
    },
    "1092": {
        "word": "inferior",
        "mean": "より劣った（⇔superior よりすぐれた）"
    },
    "1093": {
        "word": "awkward",
        "mean": "気まずい；ぎこちない；厄介な"
    },
    "1094": {
        "word": "obese",
        "mean": "肥満した"
    },
    "1095": {
        "word": "pregnant",
        "mean": "妊娠した；（～で）満ちている（with）"
    },
    "1096": {
        "word": "intimate",
        "mean": "親密な；密接な"
    },
    "1097": {
        "word": "medieval",
        "mean": "中世の；時代遅れの"
    },
    "1098": {
        "word": "sacred",
        "mean": "神聖な（≒holy）；宗教的な；厳粛な"
    },
    "1099": {
        "word": "simultaneously",
        "mean": "（～と）同時に（with）；一斉に"
    },
    "1100": {
        "word": "versus",
        "mean": "〔A ～ Bで〕A対B；AかBか"
    },
    "1101": {
        "word": "proceed",
        "mean": "進む，進行する；（～を）続行する（with）"
    },
    "1102": {
        "word": "orient",
        "mean": "（人）を（環境などに）慣らす（to）；〔受身形で〕（関心などが）（～に）向いている（to / toward）"
    },
    "1103": {
        "word": "surf",
        "mean": "（インターネット上の情報など）を見て回る；サーフィンをする"
    },
    "1104": {
        "word": "filter",
        "mean": "をろ過する；を取り除く"
    },
    "1105": {
        "word": "bind",
        "mean": "を縛る；を束縛する；を結び付ける"
    },
    "1106": {
        "word": "resort",
        "mean": "（好ましくない手段に）訴える，頼る（to）"
    },
    "1107": {
        "word": "reinforce",
        "mean": "を強化する；を補強する"
    },
    "1108": {
        "word": "accumulate",
        "mean": "を蓄積する，集める；積もる"
    },
    "1109": {
        "word": "bet",
        "mean": "と確信する，断言する；（金などを）かける"
    },
    "1110": {
        "word": "advocate",
        "mean": "を主張する；を擁護する"
    },
    "1111": {
        "word": "constitute",
        "mean": "を構成する；になる，に等しい"
    },
    "1112": {
        "word": "undertake",
        "mean": "を引き受ける；を保証する；に着手する"
    },
    "1113": {
        "word": "grip",
        "mean": "を握る；をとらえる"
    },
    "1114": {
        "word": "dismiss",
        "mean": "（意見など）を退ける；を解雇する"
    },
    "1115": {
        "word": "fade",
        "mean": "薄れる；衰える"
    },
    "1116": {
        "word": "conceal",
        "mean": "を隠す（≒ hide）；を秘密にする（⇔uncover ⇒ 1236）"
    },
    "1117": {
        "word": "chew",
        "mean": "（を）かむ；をかみ砕く"
    },
    "1118": {
        "word": "swallow",
        "mean": "（を）飲み込む；をうのみにする；に耐える"
    },
    "1119": {
        "word": "seal",
        "mean": "を密閉する；に封をする"
    },
    "1120": {
        "word": "migrate",
        "mean": "移住する；（鳥などが）渡る"
    },
    "1121": {
        "word": "exaggerate",
        "mean": "（を）誇張する；を強調する"
    },
    "1122": {
        "word": "accuse",
        "mean": "を非難する；を告訴する"
    },
    "1123": {
        "word": "vanish",
        "mean": "消える（≒ disappear）"
    },
    "1124": {
        "word": "polish",
        "mean": "を磨く；を洗練させる"
    },
    "1125": {
        "word": "wipe",
        "mean": "を拭く；を拭き取る；を消し去る"
    },
    "1126": {
        "word": "sweep",
        "mean": "（を）掃く；を一掃する；さっと通過する"
    },
    "1127": {
        "word": "mislead",
        "mean": "を誤解させる，欺く；（人）を間違った方向に導く"
    },
    "1128": {
        "word": "spoil",
        "mean": "を台無しにする；を甘やかす；だめになる"
    },
    "1129": {
        "word": "compound",
        "mean": "を悪化させる；を合成する；を混合する"
    },
    "1130": {
        "word": "explode",
        "mean": "爆発する；急増する；を論破する"
    },
    "1131": {
        "word": "disgust",
        "mean": "をむかつかせる；に愛想を尽かせる"
    },
    "1132": {
        "word": "commute",
        "mean": "通勤［通学］する"
    },
    "1133": {
        "word": "decorate",
        "mean": "を装飾する"
    },
    "1134": {
        "word": "postpone",
        "mean": "を延期する（≒ put off）"
    },
    "1135": {
        "word": "cease",
        "mean": "をやめる；終わる"
    },
    "1136": {
        "word": "compromise",
        "mean": "妥協する；を危うくする"
    },
    "1137": {
        "word": "elect",
        "mean": "を選出する"
    },
    "1138": {
        "word": "extract",
        "mean": "を取り［搾り］出す；を抜粋する"
    },
    "1139": {
        "word": "inherit",
        "mean": "を受け継ぐ；を相続する"
    },
    "1140": {
        "word": "rear",
        "mean": "（人・動物・植物）を育てる（≒ raise）"
    },
    "1141": {
        "word": "empathy",
        "mean": "感情移入，共感"
    },
    "1142": {
        "word": "cue",
        "mean": "合図；手がかり；（次の演技の）キュー"
    },
    "1143": {
        "word": "enterprise",
        "mean": "企業，事業；企画；進取の気性"
    },
    "1144": {
        "word": "output",
        "mean": "生産（高）；出力；排出（量）"
    },
    "1145": {
        "word": "congress",
        "mean": "（米国などの）議会；会議"
    },
    "1146": {
        "word": "millennium",
        "mean": "千年間，千年紀"
    },
    "1147": {
        "word": "mankind",
        "mean": "人類"
    },
    "1148": {
        "word": "Muslim",
        "mean": "イスラム教徒"
    },
    "1149": {
        "word": "estate",
        "mean": "（動産・不動産などの）財産；私有地"
    },
    "1150": {
        "word": "landmine",
        "mean": "地雷"
    },
    "1151": {
        "word": "caution",
        "mean": "用心；警告"
    },
    "1152": {
        "word": "controversy",
        "mean": "論争"
    },
    "1153": {
        "word": "consensus",
        "mean": "総意；（意見の）一致"
    },
    "1154": {
        "word": "retail",
        "mean": "小売り（⇔ wholesale 卸売り）"
    },
    "1155": {
        "word": "fiber",
        "mean": "繊維（質）；本質；精神力"
    },
    "1156": {
        "word": "scent",
        "mean": "（よい）香り；香水"
    },
    "1157": {
        "word": "beverage",
        "mean": "（水以外の）飲み物，飲料"
    },
    "1158": {
        "word": "supplement",
        "mean": "栄養補助剤，サプリメント；補足"
    },
    "1159": {
        "word": "diabetes",
        "mean": "糖尿病"
    },
    "1160": {
        "word": "province",
        "mean": "州，省；〔the ～s〕地方；分野"
    },
    "1161": {
        "word": "reef",
        "mean": "（岩や砂の）礁；暗礁"
    },
    "1162": {
        "word": "microbe",
        "mean": "微生物；細菌"
    },
    "1163": {
        "word": "excess",
        "mean": "過剰，超過"
    },
    "1164": {
        "word": "gallery",
        "mean": "美術館，画廊；観客，ギャラリー；回廊"
    },
    "1165": {
        "word": "fame",
        "mean": "名声"
    },
    "1166": {
        "word": "deadline",
        "mean": "締め切り"
    },
    "1167": {
        "word": "undergraduate",
        "mean": "学部学生"
    },
    "1168": {
        "word": "slavery",
        "mean": "奴隷制度；苦役"
    },
    "1169": {
        "word": "prey",
        "mean": "獲物；犠牲者"
    },
    "1170": {
        "word": "mess",
        "mean": "散らかった状態［物］；混乱状態"
    },
    "1171": {
        "word": "recession",
        "mean": "不況；後退"
    },
    "1172": {
        "word": "retreat",
        "mean": "後退，退却；（計画・決定などの）撤回"
    },
    "1173": {
        "word": "grave",
        "mean": "墓；〔通例the ～〕死"
    },
    "1174": {
        "word": "column",
        "mean": "コラム；（新聞などの）欄；円柱；（縦）列"
    },
    "1175": {
        "word": "scenery",
        "mean": "〔集合的に〕景色；背景"
    },
    "1176": {
        "word": "plot",
        "mean": "（小説などの）筋；陰謀"
    },
    "1177": {
        "word": "sculpture",
        "mean": "彫刻（作品）"
    },
    "1178": {
        "word": "tablet",
        "mean": "タブレット（型情報端末）；錠剤；平板"
    },
    "1179": {
        "word": "dense",
        "mean": "密集した，密度の高い；（霧などが）濃い"
    },
    "1180": {
        "word": "exotic",
        "mean": "外来の；異国風の"
    },
    "1181": {
        "word": "acid",
        "mean": "酸性の；酸っぱい；辛辣な"
    },
    "1182": {
        "word": "bitter",
        "mean": "苦い，つらい；辛辣な；怒りっぽい"
    },
    "1183": {
        "word": "sensible",
        "mean": "賢明な；実用的な；顕著な"
    },
    "1184": {
        "word": "noble",
        "mean": "高貴な；堂々とした；高潔な"
    },
    "1185": {
        "word": "vague",
        "mean": "漠然とした，あいまいな；おぼろげな"
    },
    "1186": {
        "word": "parallel",
        "mean": "（～と）平行［並行］の（to）；類似した"
    },
    "1187": {
        "word": "tense",
        "mean": "張り詰めた，緊張した"
    },
    "1188": {
        "word": "vertical",
        "mean": "垂直の（⇔ horizontal 水平な）；縦方向の"
    },
    "1189": {
        "word": "indigenous",
        "mean": "原産の，先住の；（その土地に）固有の"
    },
    "1190": {
        "word": "aboriginal",
        "mean": "〔通例A～〕アボリジニの；原生の，先住の"
    },
    "1191": {
        "word": "seasonal",
        "mean": "季節の，季節的な"
    },
    "1192": {
        "word": "abundant",
        "mean": "豊富な；（～に）富む（in）"
    },
    "1193": {
        "word": "hybrid",
        "mean": "ハイブリッドの；雑種の；混成の"
    },
    "1194": {
        "word": "irrelevant",
        "mean": "（～にとって）無関係の（to）；見当違いの"
    },
    "1195": {
        "word": "ridiculous",
        "mean": "ばかげた；法外な"
    },
    "1196": {
        "word": "fairy",
        "mean": "妖精の（ような）"
    },
    "1197": {
        "word": "sensory",
        "mean": "感覚の"
    },
    "1198": {
        "word": "chronic",
        "mean": "慢性の（⇔ acute ⇒ 1486）；長引く；常習の"
    },
    "1199": {
        "word": "voluntary",
        "mean": "自発的な（⇔ compulsory ⇒ 1384）；無償の"
    },
    "1200": {
        "word": "inclined",
        "mean": "傾向がある；傾いた"
    },
    "1201": {
        "word": "infer",
        "mean": "を推論する，推測する"
    },
    "1202": {
        "word": "esteem",
        "mean": "を尊敬する；を見なす"
    },
    "1203": {
        "word": "tackle",
        "mean": "に取り組む；と（～のことで）話をつける（about / on）"
    },
    "1204": {
        "word": "venture",
        "mean": "危険を冒して進む；を思い切ってする"
    },
    "1205": {
        "word": "accelerate",
        "mean": "を加速させる，促進する；加速する"
    },
    "1206": {
        "word": "accustom",
        "mean": "（人）を慣れさせる"
    },
    "1207": {
        "word": "amuse",
        "mean": "をおもしろがらせる，楽しませる"
    },
    "1208": {
        "word": "flourish",
        "mean": "繁栄する；繁茂する；を振りかざす"
    },
    "1209": {
        "word": "thrive",
        "mean": "繁栄する，うまくいく；繁茂する"
    },
    "1210": {
        "word": "nurture",
        "mean": "をはぐくむ；を養成する"
    },
    "1211": {
        "word": "click",
        "mean": "（を）クリックする；をカチッと鳴らす；カチッと音がする"
    },
    "1212": {
        "word": "spin",
        "mean": "回転する；を回転させる；（糸）を紡ぐ"
    },
    "1213": {
        "word": "clip",
        "mean": "を切り抜く；を（はさみで）切り取る；をクリップで留める"
    },
    "1214": {
        "word": "drag",
        "mean": "を引きずる；ぐずぐずする"
    },
    "1215": {
        "word": "cast",
        "mean": "を投じる；に役を当てる"
    },
    "1216": {
        "word": "scatter",
        "mean": "をまき散らす；分散する"
    },
    "1217": {
        "word": "tempt",
        "mean": "を（...する）気にさせる（to do）；を引きつける"
    },
    "1218": {
        "word": "withdraw",
        "mean": "を引き出す；を撤回する；撤退する"
    },
    "1219": {
        "word": "yawn",
        "mean": "あくびをする"
    },
    "1220": {
        "word": "blink",
        "mean": "まばたきする；点滅する；（目）をまたたく"
    },
    "1221": {
        "word": "dye",
        "mean": "を染める；染まる"
    },
    "1222": {
        "word": "spill",
        "mean": "をこぼす；こぼれる"
    },
    "1223": {
        "word": "irritate",
        "mean": "をいらいらさせる；をひりひりさせる"
    },
    "1224": {
        "word": "insult",
        "mean": "を侮辱する（≒ affront）"
    },
    "1225": {
        "word": "enforce",
        "mean": "を施行［実施］する；を（～に）強制する（on / upon）"
    },
    "1226": {
        "word": "rob",
        "mean": "から（金品を）奪う"
    },
    "1227": {
        "word": "drain",
        "mean": "（液体）を流出させる；（液体が）流れ出る"
    },
    "1228": {
        "word": "suspend",
        "mean": "を停職［停学，出場停止］にする；を一時的に中断する"
    },
    "1229": {
        "word": "drift",
        "mean": "漂う；さまよう；を押し流す"
    },
    "1230": {
        "word": "forgive",
        "mean": "を許す；を免除する"
    },
    "1231": {
        "word": "revise",
        "mean": "を修正する；を改訂する"
    },
    "1232": {
        "word": "recruit",
        "mean": "を募る；に新人を補充する"
    },
    "1233": {
        "word": "twist",
        "mean": "をねじる，ひねる；を歪曲する"
    },
    "1234": {
        "word": "crush",
        "mean": "を押しつぶす；を弾圧する；を絞り出す"
    },
    "1235": {
        "word": "pin",
        "mean": "をピンで留める；を突き刺す"
    },
    "1236": {
        "word": "uncover",
        "mean": "を暴く（⇔ conceal ⇒ 1116）；を 発掘する"
    },
    "1237": {
        "word": "exploit",
        "mean": "を活用する；を搾取する，につけ込む"
    },
    "1238": {
        "word": "implement",
        "mean": "を実行［実施］する"
    },
    "1239": {
        "word": "integrate",
        "mean": "を統合する；融合する"
    },
    "1240": {
        "word": "incorporate",
        "mean": "を取り入れる；を法人にする；合併する"
    },
    "1241": {
        "word": "profile",
        "mean": "人物の紹介；横顔；輪郭"
    },
    "1242": {
        "word": "appetite",
        "mean": "食欲；欲求"
    },
    "1243": {
        "word": "impulse",
        "mean": "衝動；刺激"
    },
    "1244": {
        "word": "script",
        "mean": "台本；筆跡"
    },
    "1245": {
        "word": "anniversary",
        "mean": "（～周年）記念日"
    },
    "1246": {
        "word": "pension",
        "mean": "年金"
    },
    "1247": {
        "word": "temper",
        "mean": "気質，気性；機嫌；かんしゃく"
    },
    "1248": {
        "word": "cortex",
        "mean": "皮質；樹皮"
    },
    "1249": {
        "word": "syndrome",
        "mean": "症候群；～現象"
    },
    "1250": {
        "word": "chamber",
        "mean": "（特定の目的の）部屋；議場；〔the ～〕議院"
    },
    "1251": {
        "word": "utility",
        "mean": "公共事業；公共料金；実用性"
    },
    "1252": {
        "word": "cattle",
        "mean": "〔集合的に〕牛"
    },
    "1253": {
        "word": "herd",
        "mean": "（牛などの）群れ；群衆"
    },
    "1254": {
        "word": "fluid",
        "mean": "流動体，液体"
    },
    "1255": {
        "word": "pity",
        "mean": "残念なこと；哀れみ"
    },
    "1256": {
        "word": "priest",
        "mean": "聖職者"
    },
    "1257": {
        "word": "acquaintance",
        "mean": "知人；面識；知識"
    },
    "1258": {
        "word": "offspring",
        "mean": "子孫，子；成果"
    },
    "1259": {
        "word": "famine",
        "mean": "飢饉；（食糧・物資の）ひどい不足"
    },
    "1260": {
        "word": "deforestation",
        "mean": "森林伐採"
    },
    "1261": {
        "word": "jail",
        "mean": "刑務所，拘置所（≒ prison）"
    },
    "1262": {
        "word": "commodity",
        "mean": "商品；有用なもの"
    },
    "1263": {
        "word": "format",
        "mean": "書式，形式；（本などの）型"
    },
    "1264": {
        "word": "recipient",
        "mean": "受け取る人；（臓器などの）被提供者"
    },
    "1265": {
        "word": "drill",
        "mean": "訓練；（反復）練習；ドリル，錐"
    },
    "1266": {
        "word": "inability",
        "mean": "無能，無力"
    },
    "1267": {
        "word": "republic",
        "mean": "共和国；共和制"
    },
    "1268": {
        "word": "combat",
        "mean": "戦闘；対立"
    },
    "1269": {
        "word": "debris",
        "mean": "（破壊された後の）残骸，瓦礫；がらくた"
    },
    "1270": {
        "word": "bug",
        "mean": "病原菌（が起こす病気）；虫；盗聴器；（機械・プログラムの）欠陥"
    },
    "1271": {
        "word": "fraction",
        "mean": "わずか（≒ bit），一部；分数"
    },
    "1272": {
        "word": "index",
        "mean": "指標；索引；指数"
    },
    "1273": {
        "word": "intuition",
        "mean": "直観（力），直感"
    },
    "1274": {
        "word": "motive",
        "mean": "動機"
    },
    "1275": {
        "word": "consent",
        "mean": "同意，承諾"
    },
    "1276": {
        "word": "hierarchy",
        "mean": "（社会の）階層制；〔the ～〕支配層"
    },
    "1277": {
        "word": "monument",
        "mean": "記念碑，遺跡；金字塔"
    },
    "1278": {
        "word": "asset",
        "mean": "〔通例～s〕資産；価値のあるもの；利点"
    },
    "1279": {
        "word": "decent",
        "mean": "まずまずの；きちんとした；上品な"
    },
    "1280": {
        "word": "competent",
        "mean": "有能な；適任の；満足できる"
    },
    "1281": {
        "word": "straightforward",
        "mean": "単純な；率直な"
    },
    "1282": {
        "word": "cosmetic",
        "mean": "化粧の，美容の；うわべの"
    },
    "1283": {
        "word": "delicate",
        "mean": "繊細な；扱いにくい；もろい"
    },
    "1284": {
        "word": "interior",
        "mean": "室内の；内部の（⇔ exterior 外部の）"
    },
    "1285": {
        "word": "transparent",
        "mean": "透明な；明快な"
    },
    "1286": {
        "word": "aesthetic",
        "mean": "美的な；美学の"
    },
    "1287": {
        "word": "deliberate",
        "mean": "故意の；慎重な"
    },
    "1288": {
        "word": "demographic",
        "mean": "人口統計学の"
    },
    "1289": {
        "word": "prehistoric",
        "mean": "有史以前の；旧式な"
    },
    "1290": {
        "word": "innate",
        "mean": "生まれながらの；固有の"
    },
    "1291": {
        "word": "mild",
        "mean": "穏やかな；（程度が）軽い"
    },
    "1292": {
        "word": "toxic",
        "mean": "有毒な；中毒性の"
    },
    "1293": {
        "word": "ashamed",
        "mean": "恥じて"
    },
    "1294": {
        "word": "humble",
        "mean": "謙虚な；質素な；身分が低い"
    },
    "1295": {
        "word": "peculiar",
        "mean": "特有の；特異な"
    },
    "1296": {
        "word": "steep",
        "mean": "（傾斜が）急な；急激な；法外な"
    },
    "1297": {
        "word": "trivial",
        "mean": "ささいな，取るに足りない"
    },
    "1298": {
        "word": "magnificent",
        "mean": "壮大な；見事な"
    },
    "1299": {
        "word": "wireless",
        "mean": "無線（電信）の，ラジオの"
    },
    "1300": {
        "word": "ongoing",
        "mean": "継続している，進行中の"
    },
    "1301": {
        "word": "assure",
        "mean": "に自信を持って言う；を保証する"
    },
    "1302": {
        "word": "precede",
        "mean": "に先行する；に優先する"
    },
    "1303": {
        "word": "revive",
        "mean": "を復活させる；復活する"
    },
    "1304": {
        "word": "compel",
        "mean": "に強いる"
    },
    "1305": {
        "word": "blossom",
        "mean": "花が咲く（≒ bloom）；発展する"
    },
    "1306": {
        "word": "terrify",
        "mean": "を怖がらせる；を脅かす"
    },
    "1307": {
        "word": "violate",
        "mean": "（法律・規則など）に違反する；を侵害する"
    },
    "1308": {
        "word": "suppress",
        "mean": "を抑える；を抑圧する"
    },
    "1309": {
        "word": "deceive",
        "mean": "をだます（≒ take in）"
    },
    "1310": {
        "word": "manipulate",
        "mean": "を（巧みに）操る；を改ざんする"
    },
    "1311": {
        "word": "starve",
        "mean": "飢える；（～を）渇望する（for）；を飢えさせる"
    },
    "1312": {
        "word": "flee",
        "mean": "（から）逃げる"
    },
    "1313": {
        "word": "whisper",
        "mean": "（を）ささやく"
    },
    "1314": {
        "word": "yell",
        "mean": "叫ぶ，どなる"
    },
    "1315": {
        "word": "deposit",
        "mean": "を置く；を預ける；を堆積させる"
    },
    "1316": {
        "word": "confine",
        "mean": "を限定する；〔通例受身形で〕閉じ込められる"
    },
    "1317": {
        "word": "swing",
        "mean": "を揺らす，振る；揺れる；（行動に）さっと移る"
    },
    "1318": {
        "word": "prolong",
        "mean": "を長引かせる"
    },
    "1319": {
        "word": "depict",
        "mean": "を描く"
    },
    "1320": {
        "word": "outline",
        "mean": "の要点を述べる；の輪郭を描く"
    },
    "1321": {
        "word": "shed",
        "mean": "を捨て去る；（光など）を放つ；（涙・血）を流す"
    },
    "1322": {
        "word": "emit",
        "mean": "（光・熱など）を出す，排出する；（信号）を送る"
    },
    "1323": {
        "word": "renew",
        "mean": "を更新する；（資源）を再生する"
    },
    "1324": {
        "word": "utilize",
        "mean": "を利用する（≒ make use of）"
    },
    "1325": {
        "word": "assert",
        "mean": "を主張する"
    },
    "1326": {
        "word": "strain",
        "mean": "に負担をかける；を緊張させる；を漉す"
    },
    "1327": {
        "word": "strive",
        "mean": "努力する；争う"
    },
    "1328": {
        "word": "dare",
        "mean": "あえて［思い切って］...する"
    },
    "1329": {
        "word": "boast",
        "mean": "を誇る；（を）自慢する"
    },
    "1330": {
        "word": "startle",
        "mean": "をびっくりさせる（≒ surprise）"
    },
    "1331": {
        "word": "offend",
        "mean": "の気分を害する；（に）違反する"
    },
    "1332": {
        "word": "compute",
        "mean": "（を）計算する；コンピューターを使う"
    },
    "1333": {
        "word": "assemble",
        "mean": "を集める；を組み立てる；集まる"
    },
    "1334": {
        "word": "worsen",
        "mean": "を悪化させる；悪化する（≒ deteriorate）"
    },
    "1335": {
        "word": "flip",
        "mean": "を（ぱっと）裏返す；を軽くはじく"
    },
    "1336": {
        "word": "rub",
        "mean": "（を）こする；（～に）を塗る（on / over）"
    },
    "1337": {
        "word": "descend",
        "mean": "（を）降りる（⇔ ascend ⇒ 1839）；受け継がれる"
    },
    "1338": {
        "word": "compensate",
        "mean": "補償する（≒ make up）；に償う"
    },
    "1339": {
        "word": "comprise",
        "mean": "から成る；を構成する"
    },
    "1340": {
        "word": "prevail",
        "mean": "普及している；支配的である；（～に）打ち勝つ（over）"
    },
    "1341": {
        "word": "quest",
        "mean": "探究"
    },
    "1342": {
        "word": "dignity",
        "mean": "尊厳；威厳"
    },
    "1343": {
        "word": "criterion",
        "mean": "（判断・評価の）基準"
    },
    "1344": {
        "word": "paradox",
        "mean": "逆説；矛盾"
    },
    "1345": {
        "word": "parliament",
        "mean": "（英国などの）議会；国会議員（団）"
    },
    "1346": {
        "word": "legislation",
        "mean": "法律；立法"
    },
    "1347": {
        "word": "agenda",
        "mean": "協議事項（リスト）；議事日程（表）；（政治上の）課題"
    },
    "1348": {
        "word": "mainstream",
        "mean": "（活動・思潮などの）主流；大勢"
    },
    "1349": {
        "word": "troop",
        "mean": "〔～s〕軍隊；集団"
    },
    "1350": {
        "word": "epidemic",
        "mean": "流行（病）；蔓延"
    },
    "1351": {
        "word": "outbreak",
        "mean": "発生，勃発"
    },
    "1352": {
        "word": "chaos",
        "mean": "混沌，大混乱"
    },
    "1353": {
        "word": "nightmare",
        "mean": "悪夢（のような状況）；不安感"
    },
    "1354": {
        "word": "horror",
        "mean": "恐怖；強い嫌悪；嫌な物［人］"
    },
    "1355": {
        "word": "cluster",
        "mean": "集団；（植物の）房，束"
    },
    "1356": {
        "word": "pollen",
        "mean": "花粉"
    },
    "1357": {
        "word": "hive",
        "mean": "ミツバチの巣（箱）；人の集まる所"
    },
    "1358": {
        "word": "irrigation",
        "mean": "灌漑"
    },
    "1359": {
        "word": "dose",
        "mean": "（薬の1回分の）服用量；放射線の1回の照射量"
    },
    "1360": {
        "word": "suicide",
        "mean": "自殺；自殺的行為"
    },
    "1361": {
        "word": "feast",
        "mean": "祝宴；大ごちそう；楽しみ"
    },
    "1362": {
        "word": "cuisine",
        "mean": "（独特の）料理，料理法"
    },
    "1363": {
        "word": "rumor",
        "mean": "うわさ"
    },
    "1364": {
        "word": "proverb",
        "mean": "ことわざ（≒ saying）"
    },
    "1365": {
        "word": "signature",
        "mean": "署名；特徴"
    },
    "1366": {
        "word": "formula",
        "mean": "方法，解決策；公式"
    },
    "1367": {
        "word": "tuition",
        "mean": "【主に米】 授業料（＝ 【英】tuition fees）；（個人）指導"
    },
    "1368": {
        "word": "intake",
        "mean": "摂取量；受け入れ数；取り入れること"
    },
    "1369": {
        "word": "spectrum",
        "mean": "スペクトル；（波動・変動の）範囲"
    },
    "1370": {
        "word": "kidney",
        "mean": "腎臓"
    },
    "1371": {
        "word": "gear",
        "mean": "用具（一式），器具；歯車；ギア"
    },
    "1372": {
        "word": "aisle",
        "mean": "（座席間などの）通路"
    },
    "1373": {
        "word": "grief",
        "mean": "深い悲しみ"
    },
    "1374": {
        "word": "destiny",
        "mean": "運命"
    },
    "1375": {
        "word": "skull",
        "mean": "頭骨，頭蓋骨；頭脳"
    },
    "1376": {
        "word": "tomb",
        "mean": "墓"
    },
    "1377": {
        "word": "monk",
        "mean": "修道士，僧（⇔ nun 修道女，尼）"
    },
    "1378": {
        "word": "worship",
        "mean": "崇拝，礼拝（式）；賛美"
    },
    "1379": {
        "word": "outstanding",
        "mean": "際立った；未払いの；未解決の"
    },
    "1380": {
        "word": "unprecedented",
        "mean": "前例のない；空前の"
    },
    "1381": {
        "word": "infinite",
        "mean": "無限の（⇔ finite 有限の）；無数の"
    },
    "1382": {
        "word": "worthwhile",
        "mean": "価値がある；立派な"
    },
    "1383": {
        "word": "indispensable",
        "mean": "不可欠な（⇔ dispensable なくてもすむ）"
    },
    "1384": {
        "word": "compulsory",
        "mean": "義務的な，強制的な（⇔ voluntary ⇒ 1199）"
    },
    "1385": {
        "word": "probable",
        "mean": "十分にありそうな"
    },
    "1386": {
        "word": "ambiguous",
        "mean": "あいまいな；多義的な"
    },
    "1387": {
        "word": "obscure",
        "mean": "（世に）知られていない；不明瞭な"
    },
    "1388": {
        "word": "skeptical",
        "mean": "（～に）懐疑的な（of ⇒ about）"
    },
    "1389": {
        "word": "fragile",
        "mean": "壊れやすい；虚弱な"
    },
    "1390": {
        "word": "static",
        "mean": "静的な（⇔ dynamic ⇒ 1083）；動きのない"
    },
    "1391": {
        "word": "gradual",
        "mean": "徐々の，緩やかな"
    },
    "1392": {
        "word": "vocal",
        "mean": "声の，発声の；はっきりものを言う"
    },
    "1393": {
        "word": "vivid",
        "mean": "鮮やかな；生き生きとした"
    },
    "1394": {
        "word": "imperial",
        "mean": "帝国の；皇帝の"
    },
    "1395": {
        "word": "hostile",
        "mean": "敵意のある（⇔friendly 友好的な）"
    },
    "1396": {
        "word": "superficial",
        "mean": "表面的な"
    },
    "1397": {
        "word": "scarce",
        "mean": "乏しい；珍しい"
    },
    "1398": {
        "word": "gross",
        "mean": "総計の；甚だしい；粗野な"
    },
    "1399": {
        "word": "inherent",
        "mean": "生来の，本来的に備わっている"
    },
    "1400": {
        "word": "notable",
        "mean": "注目に値する；著名な"
    },
    "1401": {
        "word": "update",
        "mean": "を最新のものにする；をアップデートする"
    },
    "1402": {
        "word": "refresh",
        "mean": "（気分）をさわやかにする；（記憶など）を新たにする；を最新のものにする"
    },
    "1403": {
        "word": "bloom",
        "mean": "花が咲く；栄える"
    },
    "1404": {
        "word": "conquer",
        "mean": "を征服する；を克服する"
    },
    "1405": {
        "word": "induce",
        "mean": "を引き起こす；を説得する"
    },
    "1406": {
        "word": "attain",
        "mean": "を獲得する，達成する；に達する"
    },
    "1407": {
        "word": "spray",
        "mean": "を吹きかける，に吹きつける"
    },
    "1408": {
        "word": "retrieve",
        "mean": "（情報）を検索する；を取り戻す；を回復する"
    },
    "1409": {
        "word": "portray",
        "mean": "を描く；（の役）を演じる"
    },
    "1410": {
        "word": "scratch",
        "mean": "を引っかく；を取り消す，削除する"
    },
    "1411": {
        "word": "designate",
        "mean": "を指定する；を任命する"
    },
    "1412": {
        "word": "contradict",
        "mean": "と矛盾する；に反対意見を言う"
    },
    "1413": {
        "word": "sigh",
        "mean": "ため息をつく"
    },
    "1414": {
        "word": "disrupt",
        "mean": "を混乱させる；を分裂させる"
    },
    "1415": {
        "word": "depart",
        "mean": "出発する；（～から）それる（from）"
    },
    "1416": {
        "word": "navigate",
        "mean": "（を）誘導する；（を）操縦する；（を）航行する"
    },
    "1417": {
        "word": "beg",
        "mean": "に（～を）切に頼む（for）；（を）懇願する"
    },
    "1418": {
        "word": "inhabit",
        "mean": "に住んでいる；に宿る，存する"
    },
    "1419": {
        "word": "diagnose",
        "mean": "（を）診断する"
    },
    "1420": {
        "word": "comprehend",
        "mean": "を理解する"
    },
    "1421": {
        "word": "oblige",
        "mean": "に義務づける；に恩恵を施す"
    },
    "1422": {
        "word": "cram",
        "mean": "に詰め込む；詰め込み勉強をする"
    },
    "1423": {
        "word": "flock",
        "mean": "群がる，集まる"
    },
    "1424": {
        "word": "underestimate",
        "mean": "（を）過小評価する（⇔ overestimate （を）過大評価する）；（を）軽く見る；を少なく見積もる"
    },
    "1425": {
        "word": "clarify",
        "mean": "を明確にする"
    },
    "1426": {
        "word": "spark",
        "mean": "を引き起こす；を刺激する；スパークする"
    },
    "1427": {
        "word": "seize",
        "mean": "をつかむ；を奪い取る；を没収する"
    },
    "1428": {
        "word": "soar",
        "mean": "急上昇する；空高く飛ぶ"
    },
    "1429": {
        "word": "glow",
        "mean": "光り［照り］輝く；赤く燃える；紅潮する"
    },
    "1430": {
        "word": "disguise",
        "mean": "を（～に）変装させる（as）；を偽る"
    },
    "1431": {
        "word": "distort",
        "mean": "を歪める；歪む"
    },
    "1432": {
        "word": "undermine",
        "mean": "を徐々にむしばむ；を侵食する"
    },
    "1433": {
        "word": "abolish",
        "mean": "を廃止する（≒ do away with）"
    },
    "1434": {
        "word": "strip",
        "mean": "を［から］取り去る；を裸にする"
    },
    "1435": {
        "word": "dispose",
        "mean": "〔dispose ofで〕を処分する；を（...する）気にさせる（to do）；を配置する"
    },
    "1436": {
        "word": "dump",
        "mean": "を投棄する；をどさっと落とす"
    },
    "1437": {
        "word": "weave",
        "mean": "を織る；（計画・物語など）を作り上げる"
    },
    "1438": {
        "word": "refine",
        "mean": "を洗練する；を精製する"
    },
    "1439": {
        "word": "enrich",
        "mean": "を豊かにする；（物質）を濃縮化する"
    },
    "1440": {
        "word": "coordinate",
        "mean": "を調整する；を組織する；（服など）をコーディネートする"
    },
    "1441": {
        "word": "headline",
        "mean": "（新聞などの）見出し"
    },
    "1442": {
        "word": "internship",
        "mean": "【米】 実務［医学］研修；研修期間"
    },
    "1443": {
        "word": "outlet",
        "mean": "直売店，特売店；はけ口；【米】（電気の）コンセント（≒ 【英】socket）"
    },
    "1444": {
        "word": "remedy",
        "mean": "治療（法）；治療薬；解決法"
    },
    "1445": {
        "word": "pill",
        "mean": "錠剤，丸薬；〔the ～〕ピル，経口避妊薬"
    },
    "1446": {
        "word": "reception",
        "mean": "反応；宴会；受付；受信（状態）"
    },
    "1447": {
        "word": "transaction",
        "mean": "（商）取引；（人と人との）交流"
    },
    "1448": {
        "word": "mutation",
        "mean": "突然変異（体）；変化"
    },
    "1449": {
        "word": "dairy",
        "mean": "〔集合的に〕乳製品；乳製品加工所［販売者］"
    },
    "1450": {
        "word": "compassion",
        "mean": "同情"
    },
    "1451": {
        "word": "posture",
        "mean": "姿勢；心構え"
    },
    "1452": {
        "word": "curse",
        "mean": "悪態，ののしりの言葉；呪い；〔通例a ～〕災い"
    },
    "1453": {
        "word": "funeral",
        "mean": "葬式"
    },
    "1454": {
        "word": "census",
        "mean": "国勢調査；交通調査"
    },
    "1455": {
        "word": "encyclopedia",
        "mean": "百科事典"
    },
    "1456": {
        "word": "cereal",
        "mean": "〔通例～s〕穀物；シリアル（穀物加工食品）"
    },
    "1457": {
        "word": "fragment",
        "mean": "断片"
    },
    "1458": {
        "word": "patch",
        "mean": "（～の）部分，斑点；継ぎ；貼り薬"
    },
    "1459": {
        "word": "rubbish",
        "mean": "【英】 ごみ（≒ 【米】garbage）；つまらないもの"
    },
    "1460": {
        "word": "maze",
        "mean": "迷路（≒ labyrinth）；複雑に込み入ったもの"
    },
    "1461": {
        "word": "outlook",
        "mean": "見解；見通し；眺め"
    },
    "1462": {
        "word": "breakthrough",
        "mean": "大発見，飛躍的進歩"
    },
    "1463": {
        "word": "triumph",
        "mean": "勝利；勝利の喜び；偉業"
    },
    "1464": {
        "word": "ally",
        "mean": "同盟国；提携者；援助者；盟友"
    },
    "1465": {
        "word": "spectator",
        "mean": "（試合などの）観客"
    },
    "1466": {
        "word": "sphere",
        "mean": "領域；球体；天体"
    },
    "1467": {
        "word": "county",
        "mean": "【米】 郡；【英】州"
    },
    "1468": {
        "word": "behalf",
        "mean": "利益，味方"
    },
    "1469": {
        "word": "interval",
        "mean": "（時間の）間隔；合間；隔たり；小休止"
    },
    "1470": {
        "word": "circulation",
        "mean": "循環；流通；（新聞・雑誌の）発行部数"
    },
    "1471": {
        "word": "blade",
        "mean": "刃；（プロペラなどの）羽根；（草などの）葉"
    },
    "1472": {
        "word": "theft",
        "mean": "窃盗（罪）"
    },
    "1473": {
        "word": "vacuum",
        "mean": "真空；空虚"
    },
    "1474": {
        "word": "collision",
        "mean": "衝突；対立"
    },
    "1475": {
        "word": "bargain",
        "mean": "買い得品；取引；契約"
    },
    "1476": {
        "word": "landmark",
        "mean": "（ある場所の）目印；画期的な出来事"
    },
    "1477": {
        "word": "revenue",
        "mean": "歳入（⇔ expenditure 歳出）；収益"
    },
    "1478": {
        "word": "treaty",
        "mean": "（国家間の）条約；協定"
    },
    "1479": {
        "word": "supreme",
        "mean": "最高の"
    },
    "1480": {
        "word": "thorough",
        "mean": "徹底的な；まったくの"
    },
    "1481": {
        "word": "naked",
        "mean": "裸の"
    },
    "1482": {
        "word": "sincere",
        "mean": "心からの；誠実な"
    },
    "1483": {
        "word": "tame",
        "mean": "飼いならされた，人に慣れた；退屈な"
    },
    "1484": {
        "word": "insufficient",
        "mean": "不十分な；不適当な"
    },
    "1485": {
        "word": "dim",
        "mean": "薄暗い；ぼんやりした"
    },
    "1486": {
        "word": "acute",
        "mean": "（痛み・感情などが）激しい；（知覚などが）鋭い；急性の（⇔ chronic ⇒ 1198）"
    },
    "1487": {
        "word": "disabled",
        "mean": "障害のある；障害者用の"
    },
    "1488": {
        "word": "metropolitan",
        "mean": "大都市の，首都圏の"
    },
    "1489": {
        "word": "monetary",
        "mean": "金銭的な；金融の"
    },
    "1490": {
        "word": "alternate",
        "mean": "代わりの（≒ alternative）；交互の"
    },
    "1491": {
        "word": "partial",
        "mean": "部分的な；不公平な（⇔impartial 公平な）"
    },
    "1492": {
        "word": "divine",
        "mean": "神の；神にささげる"
    },
    "1493": {
        "word": "drastic",
        "mean": "徹底的な，抜本的な；極端な"
    },
    "1494": {
        "word": "fierce",
        "mean": "猛烈な；どう猛な"
    },
    "1495": {
        "word": "sole",
        "mean": "唯一の；単独の；独占的な"
    },
    "1496": {
        "word": "spontaneous",
        "mean": "自然発生的な；自発的な"
    },
    "1497": {
        "word": "spatial",
        "mean": "空間の"
    },
    "1498": {
        "word": "neat",
        "mean": "きちんとした；見事な"
    },
    "1499": {
        "word": "tidy",
        "mean": "きちんとした，整頓された；相当の"
    },
    "1500": {
        "word": "loyal",
        "mean": "（～に）忠実な（to）；誠実な"
    },
    "1501": {
        "word": "bless",
        "mean": "に恩恵を与える；に感謝する"
    },
    "1502": {
        "word": "regain",
        "mean": "を取り戻す"
    },
    "1503": {
        "word": "conform",
        "mean": "順応する；一致する"
    },
    "1504": {
        "word": "enroll",
        "mean": "登録する，入会する；を登録させる"
    },
    "1505": {
        "word": "entitle",
        "mean": "に権利を与える；に題名をつける"
    },
    "1506": {
        "word": "halt",
        "mean": "を止める；止まる"
    },
    "1507": {
        "word": "provoke",
        "mean": "（感情・行動など）を引き起こす；を挑発する"
    },
    "1508": {
        "word": "invade",
        "mean": "を侵略する；を侵害する；（場所）に殺到する"
    },
    "1509": {
        "word": "squeeze",
        "mean": "押し入る；を押し込む；（を）搾る；（を）強く押す"
    },
    "1510": {
        "word": "crawl",
        "mean": "はう；ゆっくり進む"
    },
    "1511": {
        "word": "digest",
        "mean": "を消化する；を理解する；を要約する"
    },
    "1512": {
        "word": "utter",
        "mean": "（声）を発する；（考えなど）を述べる"
    },
    "1513": {
        "word": "refrain",
        "mean": "控える"
    },
    "1514": {
        "word": "populate",
        "mean": "に住む，の住民である；に人を住まわせる"
    },
    "1515": {
        "word": "accommodate",
        "mean": "を収容する；を（～に）適応させる（to）"
    },
    "1516": {
        "word": "steer",
        "mean": "（を）操縦する；を（～へ）向ける（to）"
    },
    "1517": {
        "word": "drown",
        "mean": "溺死する；を水浸しにする"
    },
    "1518": {
        "word": "dip",
        "mean": "を浸す；（手など）を（～に）突っ込む（into / in）；下がる"
    },
    "1519": {
        "word": "soak",
        "mean": "を浸す；をずぶぬれにする；浸る"
    },
    "1520": {
        "word": "stir",
        "mean": "をかき回す；を揺り動かす"
    },
    "1521": {
        "word": "transplant",
        "mean": "を移植する；を移住させる"
    },
    "1522": {
        "word": "reassure",
        "mean": "を安心させる"
    },
    "1523": {
        "word": "resume",
        "mean": "（を）再開する；を取り戻す"
    },
    "1524": {
        "word": "speculate",
        "mean": "（と）推測する；投機する"
    },
    "1525": {
        "word": "surpass",
        "mean": "を上回る"
    },
    "1526": {
        "word": "appoint",
        "mean": "を任命する；（日時・場所など）を指定する"
    },
    "1527": {
        "word": "intrigue",
        "mean": "に興味を持たせる；陰謀を企てる"
    },
    "1528": {
        "word": "decay",
        "mean": "腐敗する（≒ rot）；（徐々に）衰える"
    },
    "1529": {
        "word": "contaminate",
        "mean": "を汚染する；を堕落させる"
    },
    "1530": {
        "word": "swell",
        "mean": "膨張する，腫れる；を膨らませる"
    },
    "1531": {
        "word": "delete",
        "mean": "を削除する，消す"
    },
    "1532": {
        "word": "tolerate",
        "mean": "を許容する，我慢する（≒ put up with）"
    },
    "1533": {
        "word": "envy",
        "mean": "をうらやむ"
    },
    "1534": {
        "word": "pray",
        "mean": "（を）祈る"
    },
    "1535": {
        "word": "confess",
        "mean": "（を）告白する"
    },
    "1536": {
        "word": "resign",
        "mean": "（を）辞任する；を放棄する"
    },
    "1537": {
        "word": "dissolve",
        "mean": "（を）溶かす；（議会など）を解散する；（契約など）を解消する；溶ける"
    },
    "1538": {
        "word": "unfold",
        "mean": "（閉じたもの）を開く；を明らかにする；開く；明らかになる"
    },
    "1539": {
        "word": "awaken",
        "mean": "を目覚めさせる；（～から）覚める（from）"
    },
    "1540": {
        "word": "conceive",
        "mean": "（を）思いつく；と想像する；（を）妊娠する"
    },
    "1541": {
        "word": "entrepreneur",
        "mean": "起業家，事業家"
    },
    "1542": {
        "word": "stake",
        "mean": "利害関係；〔通例～s〕賭け金；杭"
    },
    "1543": {
        "word": "surplus",
        "mean": "余剰（⇔ shortage 不足），過剰；黒字"
    },
    "1544": {
        "word": "inflation",
        "mean": "インフレ（ーション）；（物価の）高騰"
    },
    "1545": {
        "word": "sweatshop",
        "mean": "搾取工場"
    },
    "1546": {
        "word": "clash",
        "mean": "衝突；対立；かち合うこと；ガチャンという音"
    },
    "1547": {
        "word": "sociology",
        "mean": "社会学"
    },
    "1548": {
        "word": "ideology",
        "mean": "イデオロギー，思想傾向"
    },
    "1549": {
        "word": "margin",
        "mean": "余白；差；利ざや"
    },
    "1550": {
        "word": "realm",
        "mean": "領域；領土"
    },
    "1551": {
        "word": "domain",
        "mean": "分野；領域；ドメイン（＝ domain name）"
    },
    "1552": {
        "word": "algorithm",
        "mean": "アルゴリズム；問題解決の手順"
    },
    "1553": {
        "word": "prairie",
        "mean": "大草原"
    },
    "1554": {
        "word": "frontier",
        "mean": "〔通例the ～s〕最先端；〔the ～〕 【米】辺境地；国境"
    },
    "1555": {
        "word": "bullet",
        "mean": "銃弾"
    },
    "1556": {
        "word": "shield",
        "mean": "盾，防御物"
    },
    "1557": {
        "word": "despair",
        "mean": "絶望"
    },
    "1558": {
        "word": "radiation",
        "mean": "放射能，放射線"
    },
    "1559": {
        "word": "placebo",
        "mean": "偽薬，プラシーボ；気休め"
    },
    "1560": {
        "word": "nursery",
        "mean": "託児所；苗床"
    },
    "1561": {
        "word": "spouse",
        "mean": "配偶者"
    },
    "1562": {
        "word": "makeup",
        "mean": "化粧；化粧品；構成；性質"
    },
    "1563": {
        "word": "mummy",
        "mean": "ミイラ；【英】ママ，お母さん（＝ 【米】mommy）"
    },
    "1564": {
        "word": "flesh",
        "mean": "（人・動物の）肉；果肉"
    },
    "1565": {
        "word": "limb",
        "mean": "手足"
    },
    "1566": {
        "word": "odor",
        "mean": "におい；気配"
    },
    "1567": {
        "word": "laundry",
        "mean": "洗濯（物）；クリーニング店"
    },
    "1568": {
        "word": "tide",
        "mean": "潮（の干満）；動向"
    },
    "1569": {
        "word": "questionnaire",
        "mean": "アンケート"
    },
    "1570": {
        "word": "nonsense",
        "mean": "ばかげた物［話，考え］；無意味な言葉"
    },
    "1571": {
        "word": "revenge",
        "mean": "復讐"
    },
    "1572": {
        "word": "intellect",
        "mean": "知性；〔the ～（s）〕知識人"
    },
    "1573": {
        "word": "hospitality",
        "mean": "親切なもてなし，歓待；受容性"
    },
    "1574": {
        "word": "librarian",
        "mean": "司書，図書館員"
    },
    "1575": {
        "word": "manuscript",
        "mean": "（手書きの）原稿；写本"
    },
    "1576": {
        "word": "obsession",
        "mean": "（考えなどに）取りつかれること；妄想；強迫観念"
    },
    "1577": {
        "word": "hygiene",
        "mean": "衛生（状態）；健康法"
    },
    "1578": {
        "word": "paradigm",
        "mean": "理論的枠組み，パラダイム；模範"
    },
    "1579": {
        "word": "legitimate",
        "mean": "合法的な；妥当な"
    },
    "1580": {
        "word": "authentic",
        "mean": "本物の；信頼できる"
    },
    "1581": {
        "word": "empirical",
        "mean": "経験的な；経験主義の"
    },
    "1582": {
        "word": "immense",
        "mean": "膨大な"
    },
    "1583": {
        "word": "absurd",
        "mean": "ばかげた；不合理な"
    },
    "1584": {
        "word": "weird",
        "mean": "異様な（≒ bizarre），奇妙な"
    },
    "1585": {
        "word": "accidental",
        "mean": "偶然の；過失による"
    },
    "1586": {
        "word": "uneasy",
        "mean": "不安な；落ち着かない；ぎこちない"
    },
    "1587": {
        "word": "jealous",
        "mean": "嫉妬深い；用心深い"
    },
    "1588": {
        "word": "feminine",
        "mean": "女らしい（⇔ masculine ⇒ 1681）"
    },
    "1589": {
        "word": "swift",
        "mean": "素早い"
    },
    "1590": {
        "word": "hollow",
        "mean": "空洞の；空虚な；うわべだけの"
    },
    "1591": {
        "word": "crude",
        "mean": "大まかな；粗野な；未精製の"
    },
    "1592": {
        "word": "sore",
        "mean": "痛い；腹が立って"
    },
    "1593": {
        "word": "pessimistic",
        "mean": "悲観的な（⇔ optimistic ⇒ 882）"
    },
    "1594": {
        "word": "vain",
        "mean": "無駄な；うぬぼれた"
    },
    "1595": {
        "word": "susceptible",
        "mean": "（～の）影響を受けやすい（to）；感染しやすい"
    },
    "1596": {
        "word": "edible",
        "mean": "食用の，食べられる"
    },
    "1597": {
        "word": "sheer",
        "mean": "純然たる，真の；すごい；（布が）薄地の"
    },
    "1598": {
        "word": "explicit",
        "mean": "明白な（⇔ implicit ⇒ 1795）；率直な"
    },
    "1599": {
        "word": "prone",
        "mean": "（～に）なりやすい（to）；（...する）傾向がある（to do）"
    },
    "1600": {
        "word": "affluent",
        "mean": "裕福な；豊富な"
    },
    "1601": {
        "word": "collaborate",
        "mean": "共同して働く；（～に）協力する（with）"
    },
    "1602": {
        "word": "exert",
        "mean": "を及ぼす；（力など）を行使する"
    },
    "1603": {
        "word": "excel",
        "mean": "（～で）秀でている（in / at）；に勝る"
    },
    "1604": {
        "word": "prosper",
        "mean": "栄える，成功する；繁殖する"
    },
    "1605": {
        "word": "surge",
        "mean": "殺到する；（感情が）こみ上げる；急騰する"
    },
    "1606": {
        "word": "intervene",
        "mean": "（～に）介入する（in）；介在する"
    },
    "1607": {
        "word": "insert",
        "mean": "を挿入する"
    },
    "1608": {
        "word": "overtake",
        "mean": "を追い抜く；に追いつく（≒ catch up with）；（災難・強い感情などが）を襲う"
    },
    "1609": {
        "word": "snap",
        "mean": "をパチンと鳴らす；をポキッと折る；ポキッと折れる；パチンと音を立てる"
    },
    "1610": {
        "word": "carve",
        "mean": "を彫る；を切り開く；（肉）を切り分ける"
    },
    "1611": {
        "word": "addict",
        "mean": "〔受身形で〕（～の）中毒になる（to）；（～に）凝る"
    },
    "1612": {
        "word": "condemn",
        "mean": "を非難する；〔受身形で〕（～の刑を）宣告される（to）"
    },
    "1613": {
        "word": "convict",
        "mean": "に有罪を宣告する"
    },
    "1614": {
        "word": "dictate",
        "mean": "を指図する；を書き取らせる；を規定する"
    },
    "1615": {
        "word": "prescribe",
        "mean": "（薬など）を処方する；を規定する"
    },
    "1616": {
        "word": "inhibit",
        "mean": "を抑制する；を妨げる"
    },
    "1617": {
        "word": "stray",
        "mean": "はぐれる，（道に）迷う"
    },
    "1618": {
        "word": "roam",
        "mean": "（を）歩き回る；放浪する"
    },
    "1619": {
        "word": "enclose",
        "mean": "を同封する；を取り囲む"
    },
    "1620": {
        "word": "execute",
        "mean": "を実行する；を処刑する"
    },
    "1621": {
        "word": "coincide",
        "mean": "同時に起こる；一致する"
    },
    "1622": {
        "word": "lag",
        "mean": "遅れる；徐々に弱まる"
    },
    "1623": {
        "word": "cling",
        "mean": "しがみつく；くっつく"
    },
    "1624": {
        "word": "erase",
        "mean": "を消す"
    },
    "1625": {
        "word": "grind",
        "mean": "（穀物など）をひく"
    },
    "1626": {
        "word": "knit",
        "mean": "を編む；を結合する；編み物をする"
    },
    "1627": {
        "word": "inquire",
        "mean": "（を）尋ねる"
    },
    "1628": {
        "word": "betray",
        "mean": "をうっかり表す；を裏切る"
    },
    "1629": {
        "word": "leak",
        "mean": "漏れる；を漏らす"
    },
    "1630": {
        "word": "smash",
        "mean": "を粉砕する；を強打する；粉々に壊れる；激突する"
    },
    "1631": {
        "word": "bounce",
        "mean": "跳ねる；反射する；を弾ませる；（Ｅメールが）（宛先不明で）返送される"
    },
    "1632": {
        "word": "sprawl",
        "mean": "（都市などが）不規則に広がる；だらしなく手足を伸ばす"
    },
    "1633": {
        "word": "converse",
        "mean": "（～と）会話をする（with）"
    },
    "1634": {
        "word": "recite",
        "mean": "を暗唱する；を詳述する"
    },
    "1635": {
        "word": "disregard",
        "mean": "を無視する；を軽視する"
    },
    "1636": {
        "word": "frown",
        "mean": "眉をひそめる"
    },
    "1637": {
        "word": "evoke",
        "mean": "を呼び起こす"
    },
    "1638": {
        "word": "pledge",
        "mean": "を誓う，約束する；を与えることを約束する"
    },
    "1639": {
        "word": "aspire",
        "mean": "（～を）熱望する（to）"
    },
    "1640": {
        "word": "contemplate",
        "mean": "（を）熟考する；を予想する"
    },
    "1641": {
        "word": "grace",
        "mean": "優美，優雅；分別；（神の）恩寵"
    },
    "1642": {
        "word": "enlightenment",
        "mean": "啓蒙，啓発"
    },
    "1643": {
        "word": "commerce",
        "mean": "商業；貿易"
    },
    "1644": {
        "word": "draft",
        "mean": "下書き；為替手形；隙間風"
    },
    "1645": {
        "word": "barrel",
        "mean": "バレル（液量の単位）；たる"
    },
    "1646": {
        "word": "timber",
        "mean": "【英】 木材（≒ 【米】lumber）；樹木"
    },
    "1647": {
        "word": "garment",
        "mean": "衣服"
    },
    "1648": {
        "word": "thread",
        "mean": "糸；（議論などの）筋道"
    },
    "1649": {
        "word": "cabinet",
        "mean": "〔しばしばthe C-〕内閣；戸棚"
    },
    "1650": {
        "word": "bureau",
        "mean": "（官庁の）局；事務局；案内所"
    },
    "1651": {
        "word": "autonomy",
        "mean": "（個人の）自律；自治（権）；自治体"
    },
    "1652": {
        "word": "toll",
        "mean": "損害（の程度）；死傷者数；通行料"
    },
    "1653": {
        "word": "discourse",
        "mean": "話し合い，会話；講演；論説"
    },
    "1654": {
        "word": "superstition",
        "mean": "迷信"
    },
    "1655": {
        "word": "glimpse",
        "mean": "ちらりと見えること"
    },
    "1656": {
        "word": "arithmetic",
        "mean": "計算；算数"
    },
    "1657": {
        "word": "glossary",
        "mean": "用語小辞典；用語集"
    },
    "1658": {
        "word": "archive",
        "mean": "〔しばしば～s〕記録文書，公文書；公文書保管所；（コンピューターの）アーカイブ"
    },
    "1659": {
        "word": "legacy",
        "mean": "遺産"
    },
    "1660": {
        "word": "anthropology",
        "mean": "人類学"
    },
    "1661": {
        "word": "rage",
        "mean": "激怒；猛威"
    },
    "1662": {
        "word": "sorrow",
        "mean": "悲しみ"
    },
    "1663": {
        "word": "psychiatrist",
        "mean": "精神科医"
    },
    "1664": {
        "word": "ward",
        "mean": "行政区；病棟"
    },
    "1665": {
        "word": "stall",
        "mean": "露店；エンスト；失速"
    },
    "1666": {
        "word": "flame",
        "mean": "炎；情熱"
    },
    "1667": {
        "word": "moisture",
        "mean": "水分；湿気"
    },
    "1668": {
        "word": "irony",
        "mean": "皮肉"
    },
    "1669": {
        "word": "warrior",
        "mean": "戦士"
    },
    "1670": {
        "word": "astronomy",
        "mean": "天文学"
    },
    "1671": {
        "word": "probe",
        "mean": "（無人）宇宙探査機；（～の）精査（into）；探り針"
    },
    "1672": {
        "word": "altitude",
        "mean": "高度，標高"
    },
    "1673": {
        "word": "tumor",
        "mean": "腫瘍；腫れ物"
    },
    "1674": {
        "word": "defect",
        "mean": "欠陥；不足"
    },
    "1675": {
        "word": "sanitation",
        "mean": "公衆衛生（学）；下水［衛生］設備"
    },
    "1676": {
        "word": "longevity",
        "mean": "長寿；寿命；長年勤続"
    },
    "1677": {
        "word": "scope",
        "mean": "（活動・能力などの）範囲；余地"
    },
    "1678": {
        "word": "sentiment",
        "mean": "感情；感想；感傷"
    },
    "1679": {
        "word": "plausible",
        "mean": "もっともらしい"
    },
    "1680": {
        "word": "vigorous",
        "mean": "精力的な；激しい；活力のある"
    },
    "1681": {
        "word": "masculine",
        "mean": "男らしい（⇔ feminine ⇒ 1588）"
    },
    "1682": {
        "word": "rigid",
        "mean": "厳しい；硬直した"
    },
    "1683": {
        "word": "adverse",
        "mean": "不都合な；逆の"
    },
    "1684": {
        "word": "coherent",
        "mean": "一貫した，筋の通った；結束した"
    },
    "1685": {
        "word": "literal",
        "mean": "文字どおりの；逐語的な；散文的な"
    },
    "1686": {
        "word": "arbitrary",
        "mean": "恣意的な；独断的な"
    },
    "1687": {
        "word": "anonymous",
        "mean": "匿名の"
    },
    "1688": {
        "word": "antique",
        "mean": "骨董の，アンティークの；古風な"
    },
    "1689": {
        "word": "eternal",
        "mean": "永遠の；不変の"
    },
    "1690": {
        "word": "intermediate",
        "mean": "中級の；中間の"
    },
    "1691": {
        "word": "subordinate",
        "mean": "（～より）下位の（to）；副次的な"
    },
    "1692": {
        "word": "gloomy",
        "mean": "陰気な；薄暗い；悲観的な"
    },
    "1693": {
        "word": "thermal",
        "mean": "熱の，熱による；保温用の"
    },
    "1694": {
        "word": "faint",
        "mean": "かすかな；めまいがする；弱々しい"
    },
    "1695": {
        "word": "naive",
        "mean": "お人よしの，愚直な；純朴な"
    },
    "1696": {
        "word": "apt",
        "mean": "（...する）傾向がある（to do）；適切な；利発な"
    },
    "1697": {
        "word": "arrogant",
        "mean": "横柄な，傲慢な"
    },
    "1698": {
        "word": "extrovert",
        "mean": "外向的な；社交的な"
    },
    "1699": {
        "word": "conspicuous",
        "mean": "目立つ"
    },
    "1700": {
        "word": "intact",
        "mean": "損なわれていない，手つかずの"
    },
    "1701": {
        "word": "embody",
        "mean": "を具現する；を包含する"
    },
    "1702": {
        "word": "illuminate",
        "mean": "を照らす；を解明する"
    },
    "1703": {
        "word": "console",
        "mean": "を慰める"
    },
    "1704": {
        "word": "verify",
        "mean": "の正しさを証明［確認］する"
    },
    "1705": {
        "word": "disclose",
        "mean": "を公表する，暴く"
    },
    "1706": {
        "word": "stack",
        "mean": "を積む，積み重ねる；〔～ upで〕（車が）渋滞する"
    },
    "1707": {
        "word": "rotate",
        "mean": "回転する；循環する；を回転させる"
    },
    "1708": {
        "word": "constrain",
        "mean": "に（...することを）強いる（to do）；を抑える"
    },
    "1709": {
        "word": "hinder",
        "mean": "を妨げる"
    },
    "1710": {
        "word": "withstand",
        "mean": "に耐える"
    },
    "1711": {
        "word": "tweet",
        "mean": "（を）ツイートする，つぶやく"
    },
    "1712": {
        "word": "sneeze",
        "mean": "くしゃみをする"
    },
    "1713": {
        "word": "erupt",
        "mean": "（火山が）噴火する；勃発する"
    },
    "1714": {
        "word": "blur",
        "mean": "をぼかす；を曇らせる；をあいまいにする"
    },
    "1715": {
        "word": "overlap",
        "mean": "（一部）重なる；（と）重複［共通］する"
    },
    "1716": {
        "word": "embed",
        "mean": "〔通例受身形で〕埋め込まれる，はめ込まれる"
    },
    "1717": {
        "word": "displace",
        "mean": "に取って代わる（≒ replace）；を移動させる"
    },
    "1718": {
        "word": "render",
        "mean": "を（ある状態に）する；（援助など）を与える"
    },
    "1719": {
        "word": "plunge",
        "mean": "（～に）（を）突っ込む（into）；没頭する；陥る"
    },
    "1720": {
        "word": "surrender",
        "mean": "を放棄する，引き渡す；（～に）屈する（to）"
    },
    "1721": {
        "word": "plug",
        "mean": "〔plug inで〕のプラグを電源に差し込む；を（～で）ふさぐ（with）"
    },
    "1722": {
        "word": "suck",
        "mean": "（を）吸う；（を）しゃぶる"
    },
    "1723": {
        "word": "mock",
        "mean": "をばかにする（≒ make fun of）；のまねをしてからかう"
    },
    "1724": {
        "word": "tease",
        "mean": "（を）からかう；をいじめる"
    },
    "1725": {
        "word": "soothe",
        "mean": "をなだめる；を和らげる"
    },
    "1726": {
        "word": "stain",
        "mean": "を汚す；に着色する"
    },
    "1727": {
        "word": "shun",
        "mean": "を避ける"
    },
    "1728": {
        "word": "stumble",
        "mean": "よろけながら歩く；（～に）つまずく（on / over）"
    },
    "1729": {
        "word": "flush",
        "mean": "を紅潮させる；を水で流す；紅潮する"
    },
    "1730": {
        "word": "impair",
        "mean": "を損なう"
    },
    "1731": {
        "word": "presume",
        "mean": "と思う；と推定する；を前提とする"
    },
    "1732": {
        "word": "contend",
        "mean": "と主張する；競う"
    },
    "1733": {
        "word": "roar",
        "mean": "うなる，ほえる；大笑いする"
    },
    "1734": {
        "word": "haunt",
        "mean": "（記憶・考えなどが）につきまとう；（幽霊などが）に出る；によく行く"
    },
    "1735": {
        "word": "divert",
        "mean": "（注意など）をそらす；を迂回させる；（資金など）を転用する"
    },
    "1736": {
        "word": "await",
        "mean": "を待つ（≒ wait for）"
    },
    "1737": {
        "word": "fetch",
        "mean": "を（行って）持って［連れて］くる"
    },
    "1738": {
        "word": "unify",
        "mean": "を統合［統一］する；統一される"
    },
    "1739": {
        "word": "inspect",
        "mean": "を点検する；を視察する"
    },
    "1740": {
        "word": "entail",
        "mean": "を伴う，引き起こす；（...すること）を含む（doing）"
    },
    "1741": {
        "word": "tactics",
        "mean": "作戦，方策；戦術，戦法"
    },
    "1742": {
        "word": "feat",
        "mean": "偉業，功績；妙技"
    },
    "1743": {
        "word": "prestige",
        "mean": "名声；〔形容詞的に〕名声のある"
    },
    "1744": {
        "word": "analogy",
        "mean": "類推；類似"
    },
    "1745": {
        "word": "conscience",
        "mean": "良心；分別"
    },
    "1746": {
        "word": "textile",
        "mean": "織物；繊維（産業）"
    },
    "1747": {
        "word": "deficit",
        "mean": "赤字，不足；欠陥"
    },
    "1748": {
        "word": "plague",
        "mean": "疫病；（害虫などの）異常発生"
    },
    "1749": {
        "word": "hazard",
        "mean": "危険（要素）；偶然"
    },
    "1750": {
        "word": "metabolism",
        "mean": "（新陳）代謝，代謝作用"
    },
    "1751": {
        "word": "paralysis",
        "mean": "麻痺；〔比喩的に〕麻痺（状態）"
    },
    "1752": {
        "word": "grid",
        "mean": "（電気などの）供給網；格子（模様）；碁盤目"
    },
    "1753": {
        "word": "carriage",
        "mean": "馬車；車両（＝ 【米】car）；立ち居振舞い；【英】輸送"
    },
    "1754": {
        "word": "friction",
        "mean": "不和；摩擦"
    },
    "1755": {
        "word": "rebel",
        "mean": "反逆者"
    },
    "1756": {
        "word": "regime",
        "mean": "政権，政体；体制"
    },
    "1757": {
        "word": "monopoly",
        "mean": "独占（権）"
    },
    "1758": {
        "word": "staple",
        "mean": "必需食品；主要産物"
    },
    "1759": {
        "word": "merchandise",
        "mean": "商品"
    },
    "1760": {
        "word": "vendor",
        "mean": "物売り，行商人；自動販売機"
    },
    "1761": {
        "word": "supervisor",
        "mean": "監督者；指導教員"
    },
    "1762": {
        "word": "predecessor",
        "mean": "前任者（⇔ successor 後継者）；前のもの"
    },
    "1763": {
        "word": "personnel",
        "mean": "〔集合的に〕職員，社員"
    },
    "1764": {
        "word": "vessel",
        "mean": "船舶；容器；（体液が通る）脈管"
    },
    "1765": {
        "word": "liver",
        "mean": "肝臓"
    },
    "1766": {
        "word": "duration",
        "mean": "（時間の）継続，持続（時間）"
    },
    "1767": {
        "word": "certificate",
        "mean": "証明書；免許状"
    },
    "1768": {
        "word": "geometry",
        "mean": "幾何学"
    },
    "1769": {
        "word": "symmetry",
        "mean": "（左右）対称（⇔ asymmetry 非対称）；調和"
    },
    "1770": {
        "word": "biography",
        "mean": "伝記"
    },
    "1771": {
        "word": "masterpiece",
        "mean": "傑作"
    },
    "1772": {
        "word": "rhyme",
        "mean": "押韻詩；韻；〔通例～s〕詩歌"
    },
    "1773": {
        "word": "premium",
        "mean": "保険料；プレミア；景品"
    },
    "1774": {
        "word": "breakdown",
        "mean": "崩壊；（神経）衰弱；故障；内訳"
    },
    "1775": {
        "word": "courtesy",
        "mean": "礼儀正しさ；好意；優遇"
    },
    "1776": {
        "word": "protocol",
        "mean": "（条約）議定書；外交儀礼；プロトコル"
    },
    "1777": {
        "word": "specimen",
        "mean": "標本；実例"
    },
    "1778": {
        "word": "thesis",
        "mean": "論文；命題，テーゼ"
    },
    "1779": {
        "word": "eligible",
        "mean": "適格の，資格のある；（結婚相手として）望ましい"
    },
    "1780": {
        "word": "intrinsic",
        "mean": "固有の，本質的な（⇔ extrinsic 非本質的な）"
    },
    "1781": {
        "word": "diligent",
        "mean": "勤勉な；入念な"
    },
    "1782": {
        "word": "vocational",
        "mean": "職業の，職業訓練の（ための）"
    },
    "1783": {
        "word": "bankrupt",
        "mean": "破産宣告を受けた；破綻している"
    },
    "1784": {
        "word": "stern",
        "mean": "厳しい；いかめしい"
    },
    "1785": {
        "word": "stubborn",
        "mean": "頑固な，強情な（≒ obstinate）；手に負えない"
    },
    "1786": {
        "word": "maternal",
        "mean": "母の，母親らしい（⇔ paternal 父の）；妊婦の"
    },
    "1787": {
        "word": "fertile",
        "mean": "肥沃な（⇔ barren 不毛の）；多産の"
    },
    "1788": {
        "word": "ripe",
        "mean": "熟した；成熟した"
    },
    "1789": {
        "word": "stiff",
        "mean": "硬直した，凝った；堅い"
    },
    "1790": {
        "word": "obsolete",
        "mean": "廃れた，使われなくなった；古くなった"
    },
    "1791": {
        "word": "vacant",
        "mean": "空いている"
    },
    "1792": {
        "word": "acoustic",
        "mean": "音響の；聴覚の；（楽器が）アコースティックの"
    },
    "1793": {
        "word": "preliminary",
        "mean": "予備の，準備の"
    },
    "1794": {
        "word": "approximate",
        "mean": "おおよその"
    },
    "1795": {
        "word": "implicit",
        "mean": "暗黙の（⇔ explicit ⇒ 1598）；内在する"
    },
    "1796": {
        "word": "punctual",
        "mean": "時間を守る"
    },
    "1797": {
        "word": "compatible",
        "mean": "矛盾しない；互換性のある；気が合う"
    },
    "1798": {
        "word": "ample",
        "mean": "十分すぎるほどの；広い"
    },
    "1799": {
        "word": "pervasive",
        "mean": "隅々に広がった；浸透する；充満する"
    },
    "1800": {
        "word": "ubiquitous",
        "mean": "至る所にある"
    },
    "1801": {
        "word": "deduce",
        "mean": "を推測する，演繹する"
    },
    "1802": {
        "word": "simulate",
        "mean": "を模擬実験する；を装う；をまねる"
    },
    "1803": {
        "word": "merge",
        "mean": "（を）合併する；を融合させる；溶け込む"
    },
    "1804": {
        "word": "penetrate",
        "mean": "（に）浸透する；（に）進出する；（を）貫く；（を）見抜く"
    },
    "1805": {
        "word": "cater",
        "mean": "（の）料理をまかなう；（要望などに）応える"
    },
    "1806": {
        "word": "assault",
        "mean": "に暴行する；を攻撃する"
    },
    "1807": {
        "word": "torture",
        "mean": "を拷問にかける；を苦しめる"
    },
    "1808": {
        "word": "bleed",
        "mean": "出血する"
    },
    "1809": {
        "word": "erect",
        "mean": "を建てる；を直立させる"
    },
    "1810": {
        "word": "cherish",
        "mean": "を大切にする；を心に抱く"
    },
    "1811": {
        "word": "arouse",
        "mean": "（感情など）を引き起こす；を目覚めさせる"
    },
    "1812": {
        "word": "doom",
        "mean": "〔通例受身形で〕運命にある"
    },
    "1813": {
        "word": "mourn",
        "mean": "（を）悼む（≒ grieve）；（を）嘆く"
    },
    "1814": {
        "word": "dread",
        "mean": "をひどく恐れる"
    },
    "1815": {
        "word": "nourish",
        "mean": "に栄養を与える；をはぐくむ"
    },
    "1816": {
        "word": "inject",
        "mean": "（人）に注射する，を注入する；を導入する"
    },
    "1817": {
        "word": "swear",
        "mean": "（～を）ののしる（at）；（を）誓う（≒ vow）"
    },
    "1818": {
        "word": "bid",
        "mean": "（～に）の値をつける（for ⇒ on）；（挨拶）を述べる"
    },
    "1819": {
        "word": "corrupt",
        "mean": "を堕落させる；を買収する；堕落する"
    },
    "1820": {
        "word": "preoccupy",
        "mean": "の心を奪う，を夢中にさせる"
    },
    "1821": {
        "word": "browse",
        "mean": "（を）拾い読みする；（を）閲覧する；（商品など）を見て歩く"
    },
    "1822": {
        "word": "compile",
        "mean": "を編集する；（資料など）をまとめる"
    },
    "1823": {
        "word": "allocate",
        "mean": "を割り当てる，分配する"
    },
    "1824": {
        "word": "offset",
        "mean": "を相殺する，埋め合わせる；をオフセット印刷にする"
    },
    "1825": {
        "word": "restrain",
        "mean": "を制止する；を規制する"
    },
    "1826": {
        "word": "comply",
        "mean": "従う，応じる"
    },
    "1827": {
        "word": "expire",
        "mean": "期限が切れる"
    },
    "1828": {
        "word": "embark",
        "mean": "（～に）乗り出す（on）；乗船［搭乗］する"
    },
    "1829": {
        "word": "flap",
        "mean": "パタパタ動く；羽ばたく（≒ flutter）；をパタパタ動かす"
    },
    "1830": {
        "word": "furnish",
        "mean": "に（～を）備えつける（with）"
    },
    "1831": {
        "word": "forge",
        "mean": "を偽造する；（関係など）を築く；を鍛造する"
    },
    "1832": {
        "word": "thrust",
        "mean": "を押しつける；を突き刺す；押し進む"
    },
    "1833": {
        "word": "dispatch",
        "mean": "を派遣する；を発送する；を処理する"
    },
    "1834": {
        "word": "resent",
        "mean": "に憤慨する"
    },
    "1835": {
        "word": "reconcile",
        "mean": "を（～と）一致させる（with）；を和解させる"
    },
    "1836": {
        "word": "allege",
        "mean": "を主張する"
    },
    "1837": {
        "word": "oppress",
        "mean": "を抑圧［迫害］する；を悩ませる"
    },
    "1838": {
        "word": "expel",
        "mean": "を追放する；を吐き出す"
    },
    "1839": {
        "word": "ascend",
        "mean": "（を）上がる（⇔ descend ⇒ 1337）"
    },
    "1840": {
        "word": "commence",
        "mean": "始まる；を開始する；...し始める（to do / doing）⇒ commence work 仕事［作業］を始める"
    },
    "1841": {
        "word": "advent",
        "mean": "〔the ～〕出現，到来"
    },
    "1842": {
        "word": "reign",
        "mean": "治世；統治"
    },
    "1843": {
        "word": "diplomacy",
        "mean": "外交（的手腕）"
    },
    "1844": {
        "word": "embassy",
        "mean": "大使館；大使一行"
    },
    "1845": {
        "word": "exile",
        "mean": "亡命（者）；（国外）追放"
    },
    "1846": {
        "word": "refuge",
        "mean": "避難（所）；保護"
    },
    "1847": {
        "word": "plight",
        "mean": "窮状（＝ predicament）；（悪い）状態"
    },
    "1848": {
        "word": "solitude",
        "mean": "ひとりでいること；孤独"
    },
    "1849": {
        "word": "fallacy",
        "mean": "誤った考え，誤信；錯誤"
    },
    "1850": {
        "word": "latitude",
        "mean": "緯度；（行動・思想などの）許容範囲"
    },
    "1851": {
        "word": "eclipse",
        "mean": "（日食・月食などの）食；（名声などの）失墜"
    },
    "1852": {
        "word": "basin",
        "mean": "流域；盆地，海盆；洗面器［台］"
    },
    "1853": {
        "word": "erosion",
        "mean": "浸食；衰退"
    },
    "1854": {
        "word": "archaeology",
        "mean": "考古学"
    },
    "1855": {
        "word": "errand",
        "mean": "（人の）使い，使い走り；用件"
    },
    "1856": {
        "word": "mercy",
        "mean": "慈悲；〔通例a ～〕幸運"
    },
    "1857": {
        "word": "rhetoric",
        "mean": "修辞（法）；美辞麗句"
    },
    "1858": {
        "word": "verse",
        "mean": "韻文（⇔ prose 散文）；詩"
    },
    "1859": {
        "word": "congestion",
        "mean": "混雑"
    },
    "1860": {
        "word": "sewage",
        "mean": "下水"
    },
    "1861": {
        "word": "complement",
        "mean": "（～の）補完物，補足（to）；（文法の）補語"
    },
    "1862": {
        "word": "subsidy",
        "mean": "補助金；報奨金"
    },
    "1863": {
        "word": "mortgage",
        "mean": "住宅ローン；抵当（権）"
    },
    "1864": {
        "word": "attorney",
        "mean": "【米】 弁護士；代理人"
    },
    "1865": {
        "word": "outfit",
        "mean": "衣装一式；装備［道具］一式；組織"
    },
    "1866": {
        "word": "bulk",
        "mean": "〔the ～〕（～の）大半（of）；大きさ；大量"
    },
    "1867": {
        "word": "reunion",
        "mean": "再会（の集い）；再結合"
    },
    "1868": {
        "word": "synthesis",
        "mean": "合成；総合（⇔ analysis ⇒ 363）"
    },
    "1869": {
        "word": "mold",
        "mean": "鋳型；鋳物；性格；かび"
    },
    "1870": {
        "word": "thirst",
        "mean": "（のどの）渇き；（～に対する）渇望（for）"
    },
    "1871": {
        "word": "greed",
        "mean": "強欲"
    },
    "1872": {
        "word": "bribe",
        "mean": "賄賂"
    },
    "1873": {
        "word": "contempt",
        "mean": "軽蔑；恥辱"
    },
    "1874": {
        "word": "texture",
        "mean": "感触，手触り；本質；質感"
    },
    "1875": {
        "word": "orphan",
        "mean": "孤児"
    },
    "1876": {
        "word": "harassment",
        "mean": "嫌がらせ，ハラスメント"
    },
    "1877": {
        "word": "hay",
        "mean": "干し草"
    },
    "1878": {
        "word": "doctrine",
        "mean": "教義；【米】（政策上の）主義"
    },
    "1879": {
        "word": "holistic",
        "mean": "全体論の；（医療が）ホリスティックの"
    },
    "1880": {
        "word": "liable",
        "mean": "しがちな；（～を）受けやすい（to）；責任がある"
    },
    "1881": {
        "word": "earnest",
        "mean": "まじめな，熱心な"
    },
    "1882": {
        "word": "intelligible",
        "mean": "（簡単に）理解できる"
    },
    "1883": {
        "word": "abrupt",
        "mean": "突然の（≒ sudden）"
    },
    "1884": {
        "word": "reckless",
        "mean": "無謀な；（～を）顧みない（of）"
    },
    "1885": {
        "word": "furious",
        "mean": "激怒した；猛烈な"
    },
    "1886": {
        "word": "eloquent",
        "mean": "雄弁な；説得力のある"
    },
    "1887": {
        "word": "juvenile",
        "mean": "青少年の"
    },
    "1888": {
        "word": "notorious",
        "mean": "悪名高い（≒ infamous）"
    },
    "1889": {
        "word": "timid",
        "mean": "臆病な；内気な"
    },
    "1890": {
        "word": "humid",
        "mean": "湿気のある（≒ muggy 蒸し暑い）"
    },
    "1891": {
        "word": "contagious",
        "mean": "感染（性）の；病気を伝染する"
    },
    "1892": {
        "word": "cynical",
        "mean": "冷笑的な，皮肉な"
    },
    "1893": {
        "word": "dumb",
        "mean": "ばかげた；口のきけない；無言の"
    },
    "1894": {
        "word": "monotonous",
        "mean": "単調な"
    },
    "1895": {
        "word": "perpetual",
        "mean": "永続的な；ひっきりなしの"
    },
    "1896": {
        "word": "dizzy",
        "mean": "目まいがする；当惑した"
    },
    "1897": {
        "word": "weary",
        "mean": "疲れ果てた；（～に）うんざりした（of）"
    },
    "1898": {
        "word": "numb",
        "mean": "麻痺した，無感覚な；ぼう然とした"
    },
    "1899": {
        "word": "mortal",
        "mean": "致命的な（≒ fatal）；死すべき（運命の）（⇔ immortal 不死の）"
    },
    "1900": {
        "word": "zealous",
        "mean": "熱心な；熱狂的な"
    }

}