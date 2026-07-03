// ══════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════

const LEVELS = {
  A1: {
    color: "#22d37a",
    name: "Beginner",
    vocab: {
      "Числа": [
        { en: "one", ru: "один", tr: "/wʌn/", ex: "I have one cat." },
        { en: "two", ru: "два", tr: "/tuː/", ex: "Two plus two is four." },
        { en: "three", ru: "три", tr: "/θriː/", ex: "She has three books." },
        { en: "four", ru: "четыре", tr: "/fɔːr/", ex: "There are four seasons." },
        { en: "five", ru: "пять", tr: "/faɪv/", ex: "Five fingers on a hand." },
        { en: "six", ru: "шесть", tr: "/sɪks/", ex: "Six apples in the basket." },
        { en: "seven", ru: "семь", tr: "/ˈsevən/", ex: "Seven days in a week." },
        { en: "eight", ru: "восемь", tr: "/eɪt/", ex: "I wake up at eight." },
        { en: "nine", ru: "девять", tr: "/naɪn/", ex: "Nine cats in the yard." },
        { en: "ten", ru: "десять", tr: "/ten/", ex: "Count to ten." },
        { en: "eleven", ru: "одиннадцать", tr: "/ɪˈlevn/", ex: "Eleven months in a year." },
        { en: "twelve", ru: "двенадцать", tr: "/twelv/", ex: "Twelve inches in a foot." },
        { en: "thirteen", ru: "тринадцать", tr: "/ˌθɜːrˈtiːn/", ex: "Thirteen people are here." },
        { en: "fourteen", ru: "четырнадцать", tr: "/ˌfɔːrˈtiːn/", ex: "Fourteen days in two weeks." },
        { en: "fifteen", ru: "пятнадцать", tr: "/ˌfɪfˈtiːn/", ex: "Fifteen minutes past three." },
        { en: "sixteen", ru: "шестнадцать", tr: "/ˌsɪksˈtiːn/", ex: "Sixteen candles on the cake." },
        { en: "seventeen", ru: "семнадцать", tr: "/ˌsevənˈtiːn/", ex: "Seventeen years old." },
        { en: "eighteen", ru: "восемнадцать", tr: "/ˌeɪˈtiːn/", ex: "Eighteen is legal age." },
        { en: "nineteen", ru: "девятнадцать", tr: "/ˌnaɪnˈtiːn/", ex: "Nineteen steps to the door." },
        { en: "twenty", ru: "двадцать", tr: "/ˈtwenti/", ex: "I am twenty years old." },
        { en: "thirty", ru: "тридцать", tr: "/ˈθɜːrti/", ex: "Thirty days in September." },
        { en: "forty", ru: "сорок", tr: "/ˈfɔːrti/", ex: "Forty winks is a nap." },
        { en: "fifty", ru: "пятьдесят", tr: "/ˈfɪfti/", ex: "Fifty states in America." },
        { en: "sixty", ru: "шестьдесят", tr: "/ˈsɪksti/", ex: "Sixty seconds in a minute." },
        { en: "seventy", ru: "семьдесят", tr: "/ˈsevənti/", ex: "Seventy years of life." },
        { en: "eighty", ru: "восемьдесят", tr: "/ˈeɪti/", ex: "Eighty miles per hour." },
        { en: "ninety", ru: "девяносто", tr: "/ˈnaɪnti/", ex: "Ninety percent sure." },
        { en: "hundred", ru: "сто", tr: "/ˈhʌndrəd/", ex: "One hundred students." },
      ],
      "Семья": [
        { en: "mother", ru: "мама", tr: "/ˈmʌðər/", ex: "My mother is a teacher." },
        { en: "father", ru: "папа", tr: "/ˈfɑːðər/", ex: "My father works here." },
        { en: "sister", ru: "сестра", tr: "/ˈsɪstər/", ex: "I have two sisters." },
        { en: "brother", ru: "брат", tr: "/ˈbrʌðər/", ex: "My brother is tall." },
        { en: "grandmother", ru: "бабушка", tr: "/ˈɡrænmʌðər/", ex: "My grandmother is kind." },
        { en: "grandfather", ru: "дедушка", tr: "/ˈɡrænfɑːðər/", ex: "My grandfather tells stories." },
        { en: "child", ru: "ребёнок", tr: "/tʃaɪld/", ex: "Every child is special." },
        { en: "husband", ru: "муж", tr: "/ˈhʌzbənd/", ex: "Her husband is a doctor." },
        { en: "wife", ru: "жена", tr: "/waɪf/", ex: "His wife is very kind." },
        { en: "friend", ru: "друг", tr: "/frend/", ex: "She is my best friend." },
        { en: "baby", ru: "малыш", tr: "/ˈbeɪbi/", ex: "The baby is sleeping." },
        { en: "parents", ru: "родители", tr: "/ˈpeərənts/", ex: "My parents are at home." },
        { en: "family", ru: "семья", tr: "/ˈfæməli/", ex: "I love my family." },
        { en: "son", ru: "сын", tr: "/sʌn/", ex: "He is my son." },
        { en: "daughter", ru: "дочь", tr: "/ˈdɔːtər/", ex: "She is my daughter." },
        { en: "uncle", ru: "дядя", tr: "/ˈʌŋkl/", ex: "My uncle is funny." },
        { en: "aunt", ru: "тётя", tr: "/ænt/", ex: "My aunt is beautiful." },
        { en: "cousin", ru: "двоюродный брат/сестра", tr: "/ˈkʌzn/", ex: "My cousin lives abroad." },
        { en: "nephew", ru: "племянник", tr: "/ˈnefjuː/", ex: "Her nephew is cute." },
        { en: "niece", ru: "племянница", tr: "/niːs/", ex: "His niece is smart." },
        { en: "grandchildren", ru: "внуки", tr: "/ˈɡræntʃɪldrən/", ex: "They have three grandchildren." },
        { en: "twin", ru: "близнец", tr: "/twɪn/", ex: "They are twins." },
        { en: "single", ru: "не женат/не замужем", tr: "/ˈsɪŋɡl/", ex: "I am single." },
        { en: "married", ru: "женат/замужем", tr: "/ˈmærid/", ex: "They are married." },
      ],
      "Цвета": [
        { en: "red", ru: "красный", tr: "/red/", ex: "The apple is red." },
        { en: "blue", ru: "синий", tr: "/bluː/", ex: "The sky is blue." },
        { en: "green", ru: "зелёный", tr: "/ɡriːn/", ex: "Grass is green." },
        { en: "yellow", ru: "жёлтый", tr: "/ˈjeloʊ/", ex: "The sun is yellow." },
        { en: "white", ru: "белый", tr: "/waɪt/", ex: "Snow is white." },
        { en: "black", ru: "чёрный", tr: "/blæk/", ex: "The cat is black." },
        { en: "orange", ru: "оранжевый", tr: "/ˈɔːrɪndʒ/", ex: "The fruit is orange." },
        { en: "pink", ru: "розовый", tr: "/pɪŋk/", ex: "She loves pink flowers." },
        { en: "brown", ru: "коричневый", tr: "/braʊn/", ex: "The dog is brown." },
        { en: "purple", ru: "фиолетовый", tr: "/ˈpɜːrpl/", ex: "Purple is my favorite color." },
        { en: "gray", ru: "серый", tr: "/ɡreɪ/", ex: "The elephant is gray." },
        { en: "gold", ru: "золотой", tr: "/ɡoʊld/", ex: "Gold is expensive." },
        { en: "silver", ru: "серебряный", tr: "/ˈsɪlvər/", ex: "Silver is shiny." },
      ],
      "Еда": [
        { en: "bread", ru: "хлеб", tr: "/bred/", ex: "I eat bread every day." },
        { en: "water", ru: "вода", tr: "/ˈwɔːtər/", ex: "Drink more water." },
        { en: "milk", ru: "молоко", tr: "/mɪlk/", ex: "I drink milk in the morning." },
        { en: "apple", ru: "яблоко", tr: "/ˈæpəl/", ex: "An apple a day is healthy." },
        { en: "egg", ru: "яйцо", tr: "/eɡ/", ex: "I eat two eggs for breakfast." },
        { en: "meat", ru: "мясо", tr: "/miːt/", ex: "He likes to eat meat." },
        { en: "coffee", ru: "кофе", tr: "/ˈkɒfi/", ex: "I drink coffee every morning." },
        { en: "tea", ru: "чай", tr: "/tiː/", ex: "Would you like some tea?" },
        { en: "rice", ru: "рис", tr: "/raɪs/", ex: "We eat rice for lunch." },
        { en: "fish", ru: "рыба", tr: "/fɪʃ/", ex: "I like fish very much." },
        { en: "soup", ru: "суп", tr: "/suːp/", ex: "The soup is hot." },
        { en: "cake", ru: "торт", tr: "/keɪk/", ex: "She made a birthday cake." },
        { en: "chicken", ru: "курица", tr: "/ˈtʃɪkɪn/", ex: "Chicken is tasty." },
        { en: "cheese", ru: "сыр", tr: "/tʃiːz/", ex: "I love cheese." },
        { en: "butter", ru: "масло", tr: "/ˈbʌtər/", ex: "Butter is on the bread." },
        { en: "sugar", ru: "сахар", tr: "/ˈʃʊɡər/", ex: "Don't eat too much sugar." },
        { en: "salt", ru: "соль", tr: "/sɔːlt/", ex: "Add some salt." },
        { en: "pepper", ru: "перец", tr: "/ˈpepər/", ex: "Pepper is spicy." },
        { en: "potato", ru: "картофель", tr: "/pəˈteɪtoʊ/", ex: "Potatoes are cheap." },
        { en: "tomato", ru: "помидор", tr: "/təˈmeɪtoʊ/", ex: "Tomatoes are red." },
        { en: "carrot", ru: "морковь", tr: "/ˈkærət/", ex: "Carrots are good for eyes." },
        { en: "onion", ru: "лук", tr: "/ˈʌnjən/", ex: "Onions make you cry." },
        { en: "banana", ru: "банан", tr: "/bəˈnænə/", ex: "Bananas are sweet." },
        { en: "orange", ru: "апельсин", tr: "/ˈɔːrɪndʒ/", ex: "Oranges have vitamin C." },
        { en: "grape", ru: "виноград", tr: "/ɡreɪp/", ex: "Grapes are small and round." },
        { en: "juice", ru: "сок", tr: "/dʒuːs/", ex: "Orange juice is good." },
        { en: "salad", ru: "салат", tr: "/ˈsæləd/", ex: "I eat salad for dinner." },
        { en: "pizza", ru: "пицца", tr: "/ˈpiːtsə/", ex: "Pizza is popular." },
        { en: "hamburger", ru: "гамбургер", tr: "/ˈhæmbɜːrɡər/", ex: "Hamburgers are fast food." },
        { en: "sandwich", ru: "сэндвич", tr: "/ˈsænwɪtʃ/", ex: "I made a sandwich." },
        { en: "ice cream", ru: "мороженое", tr: "/aɪs kriːm/", ex: "Ice cream is cold." },
      ],
      "Тело": [
        { en: "head", ru: "голова", tr: "/hed/", ex: "My head hurts." },
        { en: "eye", ru: "глаз", tr: "/aɪ/", ex: "She has green eyes." },
        { en: "ear", ru: "ухо", tr: "/ɪər/", ex: "He has big ears." },
        { en: "nose", ru: "нос", tr: "/noʊz/", ex: "My nose is cold." },
        { en: "mouth", ru: "рот", tr: "/maʊθ/", ex: "Open your mouth." },
        { en: "hand", ru: "рука", tr: "/hænd/", ex: "Wash your hands." },
        { en: "leg", ru: "нога", tr: "/leɡ/", ex: "My leg is tired." },
        { en: "hair", ru: "волосы", tr: "/her/", ex: "She has long hair." },
        { en: "face", ru: "лицо", tr: "/feɪs/", ex: "Wash your face." },
        { en: "arm", ru: "рука", tr: "/ɑːrm/", ex: "My arm is strong." },
        { en: "foot", ru: "стопа", tr: "/fʊt/", ex: "My foot hurts." },
        { en: "tooth", ru: "зуб", tr: "/tuːθ/", ex: "Brush your teeth." },
        { en: "finger", ru: "палец", tr: "/ˈfɪŋɡər/", ex: "I have ten fingers." },
        { en: "toe", ru: "палец ноги", tr: "/toʊ/", ex: "Toes are on feet." },
        { en: "shoulder", ru: "плечо", tr: "/ˈʃoʊldər/", ex: "My shoulder is sore." },
        { en: "back", ru: "спина", tr: "/bæk/", ex: "My back hurts." },
        { en: "knee", ru: "колено", tr: "/niː/", ex: "Knee is a joint." },
        { en: "elbow", ru: "локоть", tr: "/ˈelboʊ/", ex: "Elbow is on arm." },
        { en: "neck", ru: "шея", tr: "/nek/", ex: "Neck connects head and body." },
        { en: "stomach", ru: "живот", tr: "/ˈstʌmək/", ex: "Stomach digests food." },
        { en: "heart", ru: "сердце", tr: "/hɑːrt/", ex: "Heart beats fast." },
        { en: "skin", ru: "кожа", tr: "/skɪn/", ex: "Skin is soft." },
        { en: "bone", ru: "кость", tr: "/boʊn/", ex: "Bones are hard." },
        { en: "muscle", ru: "мускул", tr: "/ˈmʌsl/", ex: "Muscles help move." },
      ],
      "Дом": [
        { en: "house", ru: "дом", tr: "/haʊs/", ex: "We live in a big house." },
        { en: "room", ru: "комната", tr: "/ruːm/", ex: "My room is small." },
        { en: "kitchen", ru: "кухня", tr: "/ˈkɪtʃɪn/", ex: "She is in the kitchen." },
        { en: "bedroom", ru: "спальня", tr: "/ˈbedruːm/", ex: "I sleep in my bedroom." },
        { en: "door", ru: "дверь", tr: "/dɔːr/", ex: "Please close the door." },
        { en: "window", ru: "окно", tr: "/ˈwɪndoʊ/", ex: "Open the window please." },
        { en: "table", ru: "стол", tr: "/ˈteɪbəl/", ex: "Sit at the table." },
        { en: "chair", ru: "стул", tr: "/tʃer/", ex: "Take a chair." },
        { en: "bed", ru: "кровать", tr: "/bed/", ex: "The bed is comfortable." },
        { en: "bathroom", ru: "ванная комната", tr: "/ˈbæθruːm/", ex: "Bathroom has a shower." },
        { en: "living room", ru: "гостиная", tr: "/ˈlɪvɪŋ ruːm/", ex: "Living room is for guests." },
        { en: "garden", ru: "сад", tr: "/ˈɡɑːrdn/", ex: "We have a garden." },
        { en: "yard", ru: "двор", tr: "/jɑːrd/", ex: "Kids play in the yard." },
        { en: "roof", ru: "крыша", tr: "/ruːf/", ex: "Roof protects from rain." },
        { en: "wall", ru: "стена", tr: "/wɔːl/", ex: "Walls are white." },
        { en: "floor", ru: "пол", tr: "/flɔːr/", ex: "Floor is clean." },
        { en: "ceiling", ru: "потолок", tr: "/ˈsiːlɪŋ/", ex: "Ceiling is high." },
        { en: "lamp", ru: "лампа", tr: "/læmp/", ex: "Turn on the lamp." },
        { en: "clock", ru: "часы", tr: "/klɑːk/", ex: "Clock shows time." },
        { en: "tv", ru: "телевизор", tr: "/ˌtiːˈviː/", ex: "Watch TV in evening." },
        { en: "book", ru: "книга", tr: "/bʊk/", ex: "Read a good book." },
        { en: "phone", ru: "телефон", tr: "/foʊn/", ex: "Call me on phone." },
        { en: "computer", ru: "компьютер", tr: "/kəmˈpjuːtər/", ex: "I use computer for work." },
      ],
      "Город": [
        { en: "city", ru: "город", tr: "/ˈsɪti/", ex: "I live in a big city." },
        { en: "street", ru: "улица", tr: "/striːt/", ex: "What street do you live on?" },
        { en: "shop", ru: "магазин", tr: "/ʃɒp/", ex: "I go to the shop." },
        { en: "bus", ru: "автобус", tr: "/bʌs/", ex: "I take the bus." },
        { en: "car", ru: "машина", tr: "/kɑːr/", ex: "He drives a car." },
        { en: "park", ru: "парк", tr: "/pɑːrk/", ex: "We walk in the park." },
        { en: "school", ru: "школа", tr: "/skuːl/", ex: "I go to school every day." },
        { en: "hospital", ru: "больница", tr: "/ˈhɑːspɪtl/", ex: "The hospital is near here." },
        { en: "bank", ru: "банк", tr: "/bæŋk/", ex: "Bank keeps money safe." },
        { en: "store", ru: "магазин", tr: "/stɔːr/", ex: "Store sells food." },
        { en: "market", ru: "рынок", tr: "/ˈmɑːrkɪt/", ex: "Market has fresh food." },
        { en: "library", ru: "библиотека", tr: "/ˈlaɪbreri/", ex: "Library has many books." },
        { en: "cinema", ru: "кинотеатр", tr: "/ˈsɪnəmə/", ex: "Let's go to cinema." },
        { en: "theater", ru: "театр", tr: "/ˈθiːətər/", ex: "Theater has plays." },
        { en: "museum", ru: "музей", tr: "/mjuˈziːəm/", ex: "Museum has history." },
        { en: "police", ru: "полиция", tr: "/pəˈliːs/", ex: "Call police if danger." },
        { en: "fire station", ru: "пожарная станция", tr: "/ˈfaɪər ˈsteɪʃn/", ex: "Fire station is red." },
        { en: "train station", ru: "вокзал", tr: "/treɪn ˈsteɪʃn/", ex: "Train station is busy." },
        { en: "airport", ru: "аэропорт", tr: "/ˈerpɔːrt/", ex: "Airport has planes." },
        { en: "bridge", ru: "мост", tr: "/brɪdʒ/", ex: "Bridge crosses the river." },
        { en: "river", ru: "река", tr: "/ˈrɪvər/", ex: "River flows to sea." },
        { en: "lake", ru: "озеро", tr: "/leɪk/", ex: "Lake is calm water." },
        { en: "sea", ru: "море", tr: "/siː/", ex: "Sea has waves." },
        { en: "mountain", ru: "гора", tr: "/ˈmaʊntn/", ex: "Mountain is high." },
        { en: "forest", ru: "лес", tr: "/ˈfɔːrɪst/", ex: "Forest has many trees." },
        { en: "tree", ru: "дерево", tr: "/triː/", ex: "Tree has green leaves." },
        { en: "flower", ru: "цветок", tr: "/ˈflaʊər/", ex: "Flower is beautiful." },
        { en: "grass", ru: "трава", tr: "/ɡræs/", ex: "Grass is green." },
        { en: "sun", ru: "солнце", tr: "/sʌn/", ex: "Sun is bright." },
        { en: "moon", ru: "луна", tr: "/muːn/", ex: "Moon is at night." },
        { en: "star", ru: "звезда", tr: "/stɑːr/", ex: "Stars twinkle at night." },
        { en: "sky", ru: "небо", tr: "/skaɪ/", ex: "Sky is blue." },
        { en: "cloud", ru: "облако", tr: "/klaʊd/", ex: "Cloud is white." },
        { en: "rain", ru: "дождь", tr: "/reɪn/", ex: "Rain makes wet." },
        { en: "snow", ru: "снег", tr: "/snoʊ/", ex: "Snow is cold." },
        { en: "wind", ru: "ветер", tr: "/wɪnd/", ex: "Wind blows trees." },
      ],
      "Прилагательные": [
        { en: "big", ru: "большой", tr: "/bɪɡ/", ex: "This is a big dog." },
        { en: "small", ru: "маленький", tr: "/smɔːl/", ex: "She has a small cat." },
        { en: "good", ru: "хороший", tr: "/ɡʊd/", ex: "This is good food." },
        { en: "bad", ru: "плохой", tr: "/bæd/", ex: "The weather is bad." },
        { en: "hot", ru: "горячий", tr: "/hɑːt/", ex: "The soup is hot." },
        { en: "cold", ru: "холодный", tr: "/koʊld/", ex: "The water is cold." },
        { en: "happy", ru: "счастливый", tr: "/ˈhæpi/", ex: "I am very happy." },
        { en: "tired", ru: "усталый", tr: "/ˈtaɪərd/", ex: "I am very tired." },
        { en: "old", ru: "старый", tr: "/oʊld/", ex: "This house is old." },
        { en: "new", ru: "новый", tr: "/njuː/", ex: "I have a new phone." },
        { en: "tall", ru: "высокий", tr: "/tɔːl/", ex: "He is very tall." },
        { en: "short", ru: "низкий", tr: "/ʃɔːrt/", ex: "She is short." },
        { en: "fast", ru: "быстрый", tr: "/fæst/", ex: "He runs fast." },
        { en: "slow", ru: "медленный", tr: "/sloʊ/", ex: "He is slow." },
        { en: "strong", ru: "сильный", tr: "/strɔːŋ/", ex: "He is strong." },
        { en: "weak", ru: "слабый", tr: "/wiːk/", ex: "I feel weak." },
        { en: "clean", ru: "чистый", tr: "/kliːn/", ex: "The room is clean." },
        { en: "dirty", ru: "грязный", tr: "/ˈdɜːrti/", ex: "The shoes are dirty." },
        { en: "beautiful", ru: "красивый", tr: "/ˈbjuːtɪfl/", ex: "She is beautiful." },
        { en: "ugly", ru: "некрасивый", tr: "/ˈʌɡli/", ex: "That is ugly." },
        { en: "funny", ru: "смешной", tr: "/ˈfʌni/", ex: "He is funny." },
        { en: "sad", ru: "грустный", tr: "/sæd/", ex: "She feels sad." },
        { en: "angry", ru: "злой", tr: "/ˈæŋɡri/", ex: "He is angry." },
        { en: "hungry", ru: "голодный", tr: "/ˈhʌŋɡri/", ex: "I am hungry." },
        { en: "thirsty", ru: "жаждающий", tr: "/ˈθɜːrsti/", ex: "I am thirsty." },
        { en: "full", ru: "сытый", tr: "/fʊl/", ex: "I am full." },
        { en: "empty", ru: "пустой", tr: "/ˈempti/", ex: "The glass is empty." },
        { en: "heavy", ru: "тяжелый", tr: "/ˈhevi/", ex: "The bag is heavy." },
        { en: "light", ru: "лёгкий", tr: "/laɪt/", ex: "This is light." },
        { en: "warm", ru: "тёплый", tr: "/wɔːrm/", ex: "The room is warm." },
        { en: "cool", ru: "прохладный", tr: "/kuːl/", ex: "That's cool!" },
      ],
      "Время": [
        { en: "Monday", ru: "понедельник", tr: "/ˈmʌndeɪ/", ex: "I start work on Monday." },
        { en: "Tuesday", ru: "вторник", tr: "/ˈtjuːzdeɪ/", ex: "Tuesday is my busy day." },
        { en: "Wednesday", ru: "среда", tr: "/ˈwenzdeɪ/", ex: "Wednesday is the middle of the week." },
        { en: "Thursday", ru: "четверг", tr: "/ˈθɜːrzdeɪ/", ex: "We meet on Thursday." },
        { en: "Friday", ru: "пятница", tr: "/ˈfraɪdeɪ/", ex: "Friday is my favourite day." },
        { en: "Saturday", ru: "суббота", tr: "/ˈsætərdeɪ/", ex: "I rest on Saturday." },
        { en: "Sunday", ru: "воскресенье", tr: "/ˈsʌndeɪ/", ex: "We relax on Sunday." },
        { en: "morning", ru: "утро", tr: "/ˈmɔːrnɪŋ/", ex: "Good morning!" },
        { en: "today", ru: "сегодня", tr: "/təˈdeɪ/", ex: "What do you do today?" },
        { en: "tomorrow", ru: "завтра", tr: "/təˈmɔːroʊ/", ex: "See you tomorrow!" },
        { en: "yesterday", ru: "вчера", tr: "/ˈjestərdeɪ/", ex: "I was sick yesterday." },
        { en: "day", ru: "день", tr: "/deɪ/", ex: "Day is light." },
        { en: "night", ru: "ночь", tr: "/naɪt/", ex: "Night is dark." },
        { en: "week", ru: "неделя", tr: "/wiːk/", ex: "Seven days in a week." },
        { en: "month", ru: "месяц", tr: "/mʌnθ/", ex: "Twelve months in a year." },
        { en: "year", ru: "год", tr: "/jɪər/", ex: "Happy new year!" },
        { en: "January", ru: "январь", tr: "/ˈdʒænjuəri/", ex: "January is first month." },
        { en: "February", ru: "февраль", tr: "/ˈfebruəri/", ex: "February has 28 days." },
        { en: "March", ru: "март", tr: "/mɑːrtʃ/", ex: "March is spring." },
        { en: "April", ru: "апрель", tr: "/ˈeɪprəl/", ex: "April showers." },
        { en: "May", ru: "май", tr: "/meɪ/", ex: "May flowers bloom." },
        { en: "June", ru: "июнь", tr: "/dʒuːn/", ex: "June is summer start." },
        { en: "July", ru: "июль", tr: "/dʒuˈlaɪ/", ex: "July is hot." },
        { en: "August", ru: "август", tr: "/ˈɔːɡəst/", ex: "August is sunny." },
        { en: "September", ru: "сентябрь", tr: "/sepˈtembər/", ex: "September is school time." },
        { en: "October", ru: "октябрь", tr: "/ɑːkˈtoʊbər/", ex: "October leaves fall." },
        { en: "November", ru: "ноябрь", tr: "/noʊˈvembər/", ex: "November is cold." },
        { en: "December", ru: "декабрь", tr: "/dɪˈsembər/", ex: "December has Christmas." },
        { en: "hour", ru: "час", tr: "/aʊər/", ex: "Sixty minutes in an hour." },
        { en: "minute", ru: "минута", tr: "/ˈmɪnɪt/", ex: "Wait a minute." },
        { en: "second", ru: "секунда", tr: "/ˈsekənd/", ex: "Be there in a second." },
        { en: "now", ru: "сейчас", tr: "/naʊ/", ex: "Do it now!" },
        { en: "later", ru: "позже", tr: "/ˈleɪtər/", ex: "See you later." },
        { en: "soon", ru: "скоро", tr: "/suːn/", ex: "Come back soon." },
        { en: "before", ru: "до", tr: "/bɪˈfɔːr/", ex: "Before I eat." },
        { en: "after", ru: "после", tr: "/ˈæftər/", ex: "After I sleep." },
      ],
      "Животные": [
        { en: "cat", ru: "кошка", tr: "/kæt/", ex: "The cat is sleeping." },
        { en: "dog", ru: "собака", tr: "/dɔːɡ/", ex: "The dog is playing." },
        { en: "bird", ru: "птица", tr: "/bɜːrd/", ex: "The bird is singing." },
        { en: "fish", ru: "рыба", tr: "/fɪʃ/", ex: "The fish is swimming." },
        { en: "rabbit", ru: "кролик", tr: "/ˈræbɪt/", ex: "The rabbit is white." },
        { en: "mouse", ru: "мышь", tr: "/maʊs/", ex: "The mouse is small." },
        { en: "horse", ru: "лошадь", tr: "/hɔːrs/", ex: "The horse is big." },
        { en: "cow", ru: "корова", tr: "/kaʊ/", ex: "The cow gives milk." },
        { en: "pig", ru: "свинья", tr: "/pɪɡ/", ex: "The pig is pink." },
        { en: "sheep", ru: "овца", tr: "/ʃiːp/", ex: "The sheep has wool." },
        { en: "chicken", ru: "курица", tr: "/ˈtʃɪkɪn/", ex: "The chicken lays eggs." },
        { en: "duck", ru: "утка", tr: "/dʌk/", ex: "The duck is in the pond." },
        { en: "elephant", ru: "слон", tr: "/ˈelɪfənt/", ex: "The elephant is huge." },
        { en: "lion", ru: "лев", tr: "/ˈlaɪən/", ex: "The lion is the king." },
        { en: "tiger", ru: "тигр", tr: "/ˈtaɪɡər/", ex: "The tiger has stripes." },
        { en: "monkey", ru: "обезьяна", tr: "/ˈmʌŋki/", ex: "The monkey is funny." },
      ],
      "Одежда": [
        { en: "shirt", ru: "рубашка", tr: "/ʃɜːrt/", ex: "This is my new shirt." },
        { en: "t-shirt", ru: "футболка", tr: "/ˈtiː ʃɜːrt/", ex: "I wear a t-shirt in summer." },
        { en: "dress", ru: "платье", tr: "/dres/", ex: "She is wearing a dress." },
        { en: "skirt", ru: "юбка", tr: "/skɜːrt/", ex: "The skirt is short." },
        { en: "pants", ru: "брюки", tr: "/pænts/", ex: "I like wearing pants." },
        { en: "shorts", ru: "шорты", tr: "/ʃɔːrts/", ex: "Shorts are for summer." },
        { en: "shoes", ru: "туфли", tr: "/ʃuːz/", ex: "These shoes are comfortable." },
        { en: "socks", ru: "носки", tr: "/sɑːks/", ex: "I need new socks." },
        { en: "jacket", ru: "куртка", tr: "/ˈdʒækɪt/", ex: "Wear a jacket, it's cold." },
        { en: "coat", ru: "пальто", tr: "/koʊt/", ex: "Winter coat is warm." },
        { en: "hat", ru: "шапка", tr: "/hæt/", ex: "Put on your hat." },
        { en: "cap", ru: "кепка", tr: "/kæp/", ex: "He wears a cap." },
        { en: "glasses", ru: "очки", tr: "/ˈɡlæsɪz/", ex: "I wear glasses." },
        { en: "watch", ru: "часы", tr: "/wɑːtʃ/", ex: "This watch is nice." },
      ],
      "Школьные принадлежности": [
        { en: "pen", ru: "ручка", tr: "/pen/", ex: "Write with a pen." },
        { en: "pencil", ru: "карандаш", tr: "/ˈpensl/", ex: "Draw with a pencil." },
        { en: "eraser", ru: "ластик", tr: "/ɪˈreɪsər/", ex: "Use the eraser." },
        { en: "book", ru: "книга", tr: "/bʊk/", ex: "Read a book." },
        { en: "notebook", ru: "тетрадь", tr: "/ˈnoʊtbʊk/", ex: "Write in your notebook." },
        { en: "bag", ru: "сумка", tr: "/bæɡ/", ex: "Put things in your bag." },
        { en: "backpack", ru: "рюкзак", tr: "/ˈbækpæk/", ex: "Carry a backpack." },
        { en: "ruler", ru: "линейка", tr: "/ˈruːlər/", ex: "Measure with a ruler." },
        { en: "scissors", ru: "ножницы", tr: "/ˈsɪzərz/", ex: "Cut with scissors." },
        { en: "glue", ru: "клей", tr: "/ɡluː/", ex: "Use glue to stick." },
        { en: "paper", ru: "бумага", tr: "/ˈpeɪpər/", ex: "Write on the paper." },
        { en: "desk", ru: "парта", tr: "/desk/", ex: "Sit at your desk." },
        { en: "blackboard", ru: "доска", tr: "/ˈblækbɔːrd/", ex: "Write on the blackboard." },
        { en: "chalk", ru: "мел", tr: "/tʃɔːk/", ex: "Use chalk on the board." },
        { en: "teacher", ru: "учитель", tr: "/ˈtiːtʃər/", ex: "The teacher is nice." },
        { en: "student", ru: "ученик", tr: "/ˈstuːdnt/", ex: "I am a student." },
        { en: "classroom", ru: "класс", tr: "/ˈklæsruːm/", ex: "This is our classroom." },
        { en: "lesson", ru: "урок", tr: "/ˈlesn/", ex: "The lesson is interesting." },
        { en: "homework", ru: "домашнее задание", tr: "/ˈhoʊmwɜːrk/", ex: "Do your homework." },
      ],
    },
    verbs: [
      { en: "be", ru: "быть", tr: "/biː/", ex: "I am a student. She is happy." },
      { en: "have", ru: "иметь", tr: "/hæv/", ex: "I have a cat. He has a car." },
      { en: "go", ru: "идти", tr: "/ɡoʊ/", ex: "I go to school. We go by bus." },
      { en: "eat", ru: "есть", tr: "/iːt/", ex: "I eat bread every day." },
      { en: "drink", ru: "пить", tr: "/drɪŋk/", ex: "I drink water. He drinks tea." },
      { en: "like", ru: "нравиться", tr: "/laɪk/", ex: "I like music. Do you like tea?" },
      { en: "want", ru: "хотеть", tr: "/wɑːnt/", ex: "I want a coffee. What do you want?" },
      { en: "see", ru: "видеть", tr: "/siː/", ex: "I see the sea. Can you see me?" },
      { en: "read", ru: "читать", tr: "/riːd/", ex: "I read a book every day." },
      { en: "write", ru: "писать", tr: "/raɪt/", ex: "I write a letter to my friend." },
      { en: "speak", ru: "говорить", tr: "/spiːk/", ex: "I speak English a little." },
      { en: "walk", ru: "ходить", tr: "/wɔːk/", ex: "I walk to school every morning." },
      { en: "sleep", ru: "спать", tr: "/sliːp/", ex: "I sleep eight hours every night." },
      { en: "work", ru: "работать", tr: "/wɜːrk/", ex: "My father works in an office." },
      { en: "live", ru: "жить", tr: "/lɪv/", ex: "I live in Samarkand." },
      { en: "love", ru: "любить", tr: "/lʌv/", ex: "I love my family." },
      { en: "help", ru: "помогать", tr: "/help/", ex: "Can you help me please?" },
      { en: "open", ru: "открывать", tr: "/ˈoʊpən/", ex: "Please open the door." },
      { en: "close", ru: "закрывать", tr: "/kloʊz/", ex: "Close your books." },
      { en: "sit", ru: "сидеть", tr: "/sɪt/", ex: "Sit down please." },
      { en: "stand", ru: "стоять", tr: "/stænd/", ex: "Stand up please." },
      { en: "look", ru: "смотреть", tr: "/lʊk/", ex: "Look at this!" },
      { en: "listen", ru: "слушать", tr: "/ˈlɪsən/", ex: "Listen carefully." },
      { en: "say", ru: "сказать", tr: "/seɪ/", ex: "Say hello!" },
      { en: "tell", ru: "рассказать", tr: "/tel/", ex: "Tell me a story." },
      { en: "ask", ru: "спрашивать", tr: "/æsk/", ex: "Ask a question." },
      { en: "answer", ru: "ответить", tr: "/ˈænsər/", ex: "Answer the phone." },
      { en: "give", ru: "дать", tr: "/ɡɪv/", ex: "Give me the pen." },
      { en: "take", ru: "взять", tr: "/teɪk/", ex: "Take this book." },
      { en: "buy", ru: "купить", tr: "/baɪ/", ex: "Buy some milk." },
      { en: "sell", ru: "продать", tr: "/sel/", ex: "Sell your old bike." },
      { en: "make", ru: "сделать", tr: "/meɪk/", ex: "Make a cake." },
      { en: "do", ru: "делать", tr: "/duː/", ex: "Do your homework." },
      { en: "clean", ru: "чистить", tr: "/kliːn/", ex: "Clean your room." },
      { en: "wash", ru: "мыть", tr: "/wɑːʃ/", ex: "Wash your hands." },
      { en: "cook", ru: "готовить", tr: "/kʊk/", ex: "Cook dinner." },
    ],
    grammar: [
      {
        title: "To Be — глагол быть",
        rule: "Используем <strong>am / is / are</strong> чтобы описать кого-то или что-то.\n<em>I am</em> — Я есть\n<em>You / We / They are</em> — Вы / Мы / Они\n<em>He / She / It is</em> — Он / Она / Оно",
        tip: "❓ Вопрос: Are you a student? — Да: Yes, I am. Нет: No, I am not.",
        examples: [
          ["I am a student.", "Я студент."],
          ["She is very kind.", "Она очень добрая."],
          ["They are from Uzbekistan.", "Они из Узбекистана."],
          ["Is he your brother?", "Он твой брат?"],
          ["We are not tired.", "Мы не устали."],
        ],
      },
      {
        title: "Present Simple — настоящее время",
        rule: "Используем для <strong>регулярных действий</strong> и фактов.\nФорма: <em>I / You / We / They + глагол</em>\nДля He / She / It добавляем <strong>-s</strong> или <strong>-es</strong>",
        tip: "⏰ Слова-маркеры: always, never, sometimes, every day, often",
        examples: [
          ["I eat breakfast every morning.", "Я ем завтрак каждое утро."],
          ["She works in a hospital.", "Она работает в больнице."],
          ["He plays football on Friday.", "Он играет в футбол в пятницу."],
          ["They don't like cold weather.", "Им не нравится холодная погода."],
          ["Does she speak English?", "Она говорит по-английски?"],
        ],
      },
      {
        title: "Местоимения — Pronouns",
        rule: "<em>I</em> — я | <em>You</em> — ты/вы | <em>He</em> — он | <em>She</em> — она\n<em>It</em> — оно | <em>We</em> — мы | <em>They</em> — они\n\nПритяжательные: <strong>my, your, his, her, its, our, their</strong>",
        tip: "💡 It используется для предметов и животных: The cat — it is black.",
        examples: [
          ["This is my book.", "Это моя книга."],
          ["His name is Ali.", "Его зовут Али."],
          ["Her mother is a teacher.", "Её мама — учитель."],
          ["Their house is big.", "Их дом большой."],
          ["Our class is interesting.", "Наш урок интересный."],
        ],
      },
      {
        title: "Артикли A / AN / THE",
        rule: "<strong>A / AN</strong> — неопределённый артикль (впервые упоминаем)\n<em>A</em> перед согласными: a cat, a book\n<em>AN</em> перед гласными: an apple, an egg\n<strong>THE</strong> — определённый артикль (знаем о чём говорим)",
        tip: "🔑 A/AN = какой-то один. THE = именно этот, конкретный.",
        examples: [
          ["I have a cat.", "У меня есть кот. (любой кот)"],
          ["The cat is black.", "Кот чёрный. (тот самый)"],
          ["She is an engineer.", "Она инженер."],
          ["Can you open the door?", "Ты можешь открыть дверь?"],
          ["I want an apple please.", "Я хочу яблоко, пожалуйста."],
        ],
      },
    ],
    dialogues: [
      {
        title: "Знакомство",
        desc: "Познакомься с новым человеком",
        msgs: [
          { s: "left", av: "👨", en: "Hello! My name is Ali.", ru: "Привет! Меня зовут Али." },
          { s: "right", av: "👩", en: "Hi Ali! I am Sara. Nice to meet you!", ru: "Привет Али! Я Сара. Приятно познакомиться!" },
          { s: "left", av: "👨", en: "Nice to meet you too! Where are you from?", ru: "Мне тоже приятно! Откуда ты?" },
          { s: "right", av: "👩", en: "I am from Samarkand. And you?", ru: "Я из Самарканда. А ты?" },
          { s: "left", av: "👨", en: "Me too! See you tomorrow!", ru: "Я тоже! До завтра!" },
        ],
      },
      {
        title: "В кафе",
        desc: "Заказываешь кофе и еду",
        msgs: [
          { s: "left", av: "☕", en: "Good morning! What do you want?", ru: "Доброе утро! Что вы хотите?" },
          { s: "right", av: "👤", en: "I want a coffee and a cake please.", ru: "Я хочу кофе и торт, пожалуйста." },
          { s: "left", av: "☕", en: "Big or small coffee?", ru: "Большой или маленький кофе?" },
          { s: "right", av: "👤", en: "Small please. How much is it?", ru: "Маленький пожалуйста. Сколько стоит?" },
          { s: "left", av: "☕", en: "Ten thousand sum. Thank you!", ru: "Десять тысяч сум. Спасибо!" },
        ],
      },
    ],
    fillEx: [
      { s: "My ___ is Ali.", b: "name", h: "Как тебя зовут? → My ___" },
      { s: "She ___ two sisters.", b: "has", h: "иметь (she) → has" },
      { s: "I ___ coffee every morning.", b: "drink", h: "пить → drink" },
      { s: "The sky ___ blue.", b: "is", h: "быть (it) → is" },
      { s: "We ___ to school by bus.", b: "go", h: "идти → go" },
      { s: "I ___ English every day.", b: "study", h: "учить → study" },
    ],
    schedule: [
      { day: "Пн", title: "Приветствия и числа", lessons: ["Числа 1–20", "Hello / Hi / Good morning!", "My name is... / I am...", "Глагол to be: am / is / are", "Диалог: знакомство"], topics: ["основы общения"] },
      { day: "Вт", title: "Семья и местоимения", lessons: ["mother, father, sister, brother...", "I / You / He / She / We / They", "my, your, his, her", "This is my mother.", "Практика: описание семьи"], topics: ["личные местоимения"] },
      { day: "Ср", title: "Цвета и прилагательные", lessons: ["red, blue, green, yellow...", "big, small, old, new", "The car is red. She is tall.", "Артикли: a, an, the", "Описание предметов"], topics: ["описания"] },
      { day: "Чт", title: "Еда и числа 20–100", lessons: ["bread, milk, apple, meat...", "I like / I don't like...", "Числа 20–100", "Глаголы: eat, drink", "Диалог: в кафе"], topics: ["покупки"] },
      { day: "Пт", title: "Глаголы действия", lessons: ["go, work, study, sleep, walk", "Present Simple правила", "I go to school every day.", "He works in an office.", "Рассказ о своём дне"], topics: ["рутина"] },
      { day: "Сб", title: "Дом и город", lessons: ["kitchen, bedroom, bathroom...", "city, street, shop, park...", "bus, car, train", "Глаголы: live, take, go", "Описание города"], topics: ["окружение"] },
      { day: "Вс", title: "Повторение и тест", lessons: ["Повторяем все темы недели", "Грамматика: to be, Present Simple", "Мини-тест", "Разговорная практика", "Подготовка к A2"], topics: ["итог"] },
    ],
  },

  A2: {
    color: "#22d3c8",
    name: "Elementary",
    vocab: {
      "Транспорт": [
        { en: "train", ru: "поезд", tr: "/treɪn/", ex: "The train is fast." },
        { en: "plane", ru: "самолёт", tr: "/pleɪn/", ex: "We fly by plane." },
        { en: "taxi", ru: "такси", tr: "/ˈtæksi/", ex: "Take a taxi home." },
        { en: "bicycle", ru: "велосипед", tr: "/ˈbaɪsɪkl/", ex: "I ride a bicycle." },
        { en: "metro", ru: "метро", tr: "/ˈmetroʊ/", ex: "The metro is underground." },
        { en: "ticket", ru: "билет", tr: "/ˈtɪkɪt/", ex: "Buy a ticket please." },
        { en: "station", ru: "станция", tr: "/ˈsteɪʃn/", ex: "Meet me at the station." },
        { en: "airport", ru: "аэропорт", tr: "/ˈerpɔːrt/", ex: "We are at the airport." },
        { en: "subway", ru: "метро", tr: "/ˈsʌbweɪ/", ex: "Subway is quick." },
        { en: "truck", ru: "грузовик", tr: "/trʌk/", ex: "Truck carries goods." },
        { en: "boat", ru: "лодка", tr: "/boʊt/", ex: "Boat is on water." },
        { en: "ship", ru: "корабль", tr: "/ʃɪp/", ex: "Ship crosses ocean." },
        { en: "helicopter", ru: "вертолёт", tr: "/ˈhelɪkɑːptər/", ex: "Helicopter is loud." },
        { en: "scooter", ru: "скутер", tr: "/ˈskuːtər/", ex: "Scooter is fun." },
        { en: "motorbike", ru: "мотоцикл", tr: "/ˈmoʊtərbaɪk/", ex: "Motorbike is fast." },
        { en: "driver", ru: "водитель", tr: "/ˈdraɪvər/", ex: "Driver drives car." },
        { en: "passenger", ru: "пассажир", tr: "/ˈpæsɪndʒər/", ex: "Passenger sits in car." },
        { en: "road", ru: "дорога", tr: "/roʊd/", ex: "Road has cars." },
        { en: "traffic", ru: "движение", tr: "/ˈtræfɪk/", ex: "Traffic is heavy." },
        { en: "map", ru: "карта", tr: "/mæp/", ex: "Use a map." },
        { en: "direction", ru: "направление", tr: "/daɪˈrekʃn/", ex: "Which direction?" },
        { en: "left", ru: "лево", tr: "/left/", ex: "Turn left." },
        { en: "right", ru: "право", tr: "/raɪt/", ex: "Turn right." },
        { en: "straight", ru: "прямо", tr: "/streɪt/", ex: "Go straight." },
        { en: "stop", ru: "остановка", tr: "/stɑːp/", ex: "Bus stop is there." },
        { en: "parking", ru: "парковка", tr: "/ˈpɑːrkɪŋ/", ex: "Parking is full." },
      ],
      "Магазины": [
        { en: "supermarket", ru: "супермаркет", tr: "/ˈsuːpərmɑːrkɪt/", ex: "Buy food at the supermarket." },
        { en: "pharmacy", ru: "аптека", tr: "/ˈfɑːrməsi/", ex: "Get medicine at the pharmacy." },
        { en: "bakery", ru: "пекарня", tr: "/ˈbeɪkəri/", ex: "Buy bread at the bakery." },
        { en: "bookstore", ru: "книжный магазин", tr: "/ˈbʊkstɔːr/", ex: "Buy books at the bookstore." },
        { en: "clothes shop", ru: "магазин одежды", tr: "/ˈkloʊðz ʃɒp/", ex: "Buy clothes there." },
        { en: "price", ru: "цена", tr: "/praɪs/", ex: "What is the price?" },
        { en: "cheap", ru: "дешёвый", tr: "/tʃiːp/", ex: "This is cheap." },
        { en: "expensive", ru: "дорогой", tr: "/ɪkˈspensɪv/", ex: "That is expensive." },
        { en: "sale", ru: "распродажа", tr: "/seɪl/", ex: "There is a sale today." },
        { en: "discount", ru: "скидка", tr: "/ˈdɪskaʊnt/", ex: "I got a discount." },
        { en: "pay", ru: "платить", tr: "/peɪ/", ex: "How will you pay?" },
        { en: "cash", ru: "наличные", tr: "/kæʃ/", ex: "Pay in cash." },
        { en: "card", ru: "карта", tr: "/kɑːrd/", ex: "Pay by card." },
        { en: "change", ru: "сдача", tr: "/tʃeɪndʒ/", ex: "Here is your change." },
        { en: "receipt", ru: "чек", tr: "/rɪˈsiːt/", ex: "Keep the receipt." },
        { en: "size", ru: "размер", tr: "/saɪz/", ex: "What size do you wear?" },
        { en: "small", ru: "маленький", tr: "/smɔːl/", ex: "Size small." },
        { en: "medium", ru: "средний", tr: "/ˈmiːdiəm/", ex: "Size medium." },
        { en: "large", ru: "большой", tr: "/lɑːrdʒ/", ex: "Size large." },
        { en: "fit", ru: "подходить (о размере)", tr: "/fɪt/", ex: "This fits well." },
        { en: "try on", ru: "примерять", tr: "/traɪ ɑːn/", ex: "Can I try it on?" },
      ],
      "Путешествия": [
        { en: "travel", ru: "путешествовать", tr: "/ˈtrævl/", ex: "I love to travel." },
        { en: "trip", ru: "поездка", tr: "/trɪp/", ex: "It was a nice trip." },
        { en: "journey", ru: "путешествие", tr: "/ˈdʒɜːrni/", ex: "The journey was long." },
        { en: "vacation", ru: "отпуск", tr: "/veɪˈkeɪʃn/", ex: "I am on vacation." },
        { en: "holiday", ru: "праздник", tr: "/ˈhɑːlədeɪ/", ex: "Summer holidays." },
        { en: "hotel", ru: "отель", tr: "/hoʊˈtel/", ex: "Stay at a hotel." },
        { en: "hostel", ru: "хостел", tr: "/ˈhɑːstl/", ex: "Hostel is cheaper." },
        { en: "room", ru: "комната", tr: "/ruːm/", ex: "I booked a room." },
        { en: "book", ru: "бронировать", tr: "/bʊk/", ex: "Book a ticket online." },
        { en: "reservation", ru: "резерв", tr: "/ˌrezərˈveɪʃn/", ex: "I have a reservation." },
        { en: "check in", ru: "регистрироваться", tr: "/tʃek ɪn/", ex: "Check in at 2 pm." },
        { en: "check out", ru: "выселяться", tr: "/tʃek aʊt/", ex: "Check out by 12." },
        { en: "luggage", ru: "багаж", tr: "/ˈlʌɡɪdʒ/", ex: "I have two pieces of luggage." },
        { en: "suitcase", ru: "чемодан", tr: "/ˈsuːtkeɪs/", ex: "Pack your suitcase." },
        { en: "backpack", ru: "рюкзак", tr: "/ˈbækpæk/", ex: "Carry a backpack." },
        { en: "passport", ru: "паспорт", tr: "/ˈpæspɔːrt/", ex: "Don't forget your passport." },
        { en: "visa", ru: "виза", tr: "/ˈviːzə/", ex: "Do I need a visa?" },
        { en: "camera", ru: "камера", tr: "/ˈkæmərə/", ex: "Take photos with a camera." },
        { en: "photo", ru: "фотография", tr: "/ˈfoʊtoʊ/", ex: "Take a photo!" },
        { en: "souvenir", ru: "сувенир", tr: "/ˌsuːvəˈnɪr/", ex: "Buy a souvenir." },
        { en: "guidebook", ru: "путеводитель", tr: "/ˈɡaɪdbʊk/", ex: "Use a guidebook." },
        { en: "map", ru: "карта", tr: "/mæp/", ex: "I need a map." },
        { en: "beach", ru: "пляж", tr: "/biːtʃ/", ex: "Let's go to the beach." },
        { en: "mountain", ru: "гора", tr: "/ˈmaʊntn/", ex: "Climb a mountain." },
        { en: "forest", ru: "лес", tr: "/ˈfɔːrɪst/", ex: "Walk in the forest." },
        { en: "river", ru: "река", tr: "/ˈrɪvər/", ex: "Swim in the river." },
        { en: "lake", ru: "озеро", tr: "/leɪk/", ex: "Fish in the lake." },
        { en: "sea", ru: "море", tr: "/siː/", ex: "The sea is beautiful." },
        { en: "ocean", ru: "океан", tr: "/ˈoʊʃn/", ex: "Pacific Ocean." },
        { en: "island", ru: "остров", tr: "/ˈaɪlənd/", ex: "Desert island." },
        { en: "desert", ru: "пустыня", tr: "/ˈdezərt/", ex: "Sahara Desert." },
        { en: "jungle", ru: "джунгли", tr: "/ˈdʒʌŋɡl/", ex: "Amazon jungle." },
        { en: "waterfall", ru: "водопад", tr: "/ˈwɔːtərfɔːl/", ex: "Beautiful waterfall." },
      ],
      "Работа": [
        { en: "job", ru: "работа", tr: "/dʒɑːb/", ex: "I have a good job." },
        { en: "work", ru: "работать", tr: "/wɜːrk/", ex: "I work in an office." },
        { en: "office", ru: "офис", tr: "/ˈɔːfɪs/", ex: "My office is big." },
        { en: "company", ru: "компания", tr: "/ˈkʌmpəni/", ex: "She works for a big company." },
        { en: "boss", ru: "начальник", tr: "/bɔːs/", ex: "My boss is kind." },
        { en: "colleague", ru: "коллега", tr: "/ˈkɑːliːɡ/", ex: "He is my colleague." },
        { en: "employee", ru: "сотрудник", tr: "/ɪmˈplɔɪiː/", ex: "He is an employee." },
        { en: "employer", ru: "работодатель", tr: "/ɪmˈplɔɪər/", ex: "The employer pays well." },
        { en: "interview", ru: "интервью", tr: "/ˈɪntərvjuː/", ex: "I have a job interview." },
        { en: "resume", ru: "резюме", tr: "/ˈrezəmeɪ/", ex: "Send your resume." },
        { en: "application", ru: "заявление", tr: "/ˌæplɪˈkeɪʃn/", ex: "Fill out the application." },
        { en: "hire", ru: "нанимать", tr: "/ˈhaɪər/", ex: "They hired me!" },
        { en: "fire", ru: "увольнять", tr: "/ˈfaɪər/", ex: "Don't fire me!" },
        { en: "quit", ru: "увольняться", tr: "/kwɪt/", ex: "I quit my job." },
        { en: "retire", ru: "уходить на пенсию", tr: "/rɪˈtaɪər/", ex: "He retired last year." },
        { en: "salary", ru: "зарплата", tr: "/ˈsæləri/", ex: "Good salary." },
        { en: "wage", ru: "заработная плата", tr: "/weɪdʒ/", ex: "Hourly wage." },
        { en: "bonus", ru: "бонус", tr: "/ˈboʊnəs/", ex: "I got a bonus." },
        { en: "promotion", ru: "повышение", tr: "/prəˈmoʊʃn/", ex: "She got a promotion." },
        { en: "meeting", ru: "собрание", tr: "/ˈmiːtɪŋ/", ex: "We have a meeting." },
        { en: "deadline", ru: "крайний срок", tr: "/ˈdedlaɪn/", ex: "The deadline is tomorrow." },
        { en: "project", ru: "проект", tr: "/ˈprɑːdʒekt/", ex: "Finish the project." },
        { en: "task", ru: "задача", tr: "/tæsk/", ex: "Complete the task." },
        { en: "email", ru: "электронная почта", tr: "/ˈiːmeɪl/", ex: "Send an email." },
        { en: "phone call", ru: "телефонный звонок", tr: "/foʊn kɔːl/", ex: "Make a phone call." },
        { en: "computer", ru: "компьютер", tr: "/kəmˈpjuːtər/", ex: "Use a computer." },
        { en: "printer", ru: "принтер", tr: "/ˈprɪntər/", ex: "Use the printer." },
        { en: "scanner", ru: "сканер", tr: "/ˈskænər/", ex: "Use the scanner." },
        { en: "internet", ru: "интернет", tr: "/ˈɪntərnet/", ex: "Surf the internet." },
        { en: "website", ru: "веб-сайт", tr: "/ˈwebsaɪt/", ex: "Visit our website." },
        { en: "app", ru: "приложение", tr: "/æp/", ex: "Download the app." },
        { en: "file", ru: "файл", tr: "/faɪl/", ex: "Save the file." },
        { en: "folder", ru: "папка", tr: "/ˈfoʊldər/", ex: "Put it in the folder." },
        { en: "document", ru: "документ", tr: "/ˈdɑːkjumənt/", ex: "Open the document." },
        { en: "spreadsheet", ru: "электронная таблица", tr: "/ˈspredʃiːt/", ex: "Use a spreadsheet." },
        { en: "presentation", ru: "презентация", tr: "/ˌpriːzenˈteɪʃn/", ex: "Give a presentation." },
      ],
      "Здоровье": [
        { en: "health", ru: "здоровье", tr: "/helθ/", ex: "Health is important." },
        { en: "healthy", ru: "здоровый", tr: "/ˈhelθi/", ex: "Eat healthy food." },
        { en: "sick", ru: "больной", tr: "/sɪk/", ex: "I feel sick." },
        { en: "ill", ru: "больной", tr: "/ɪl/", ex: "She is ill." },
        { en: "disease", ru: "болезнь", tr: "/dɪˈziːz/", ex: "Heart disease." },
        { en: "illness", ru: "болезнь", tr: "/ˈɪlnəs/", ex: "Serious illness." },
        { en: "medicine", ru: "лекарство", tr: "/ˈmedsn/", ex: "Take this medicine." },
        { en: "pill", ru: "таблетка", tr: "/pɪl/", ex: "Take a pill." },
        { en: "drug", ru: "лекарство", tr: "/drʌɡ/", ex: "Prescription drug." },
        { en: "doctor", ru: "врач", tr: "/ˈdɑːktər/", ex: "See a doctor." },
        { en: "nurse", ru: "медсестра", tr: "/nɜːrs/", ex: "The nurse helped me." },
        { en: "hospital", ru: "больница", tr: "/ˈhɑːspɪtl/", ex: "Go to hospital." },
        { en: "clinic", ru: "клиника", tr: "/ˈklɪnɪk/", ex: "Visit the clinic." },
        { en: "appointment", ru: "запись на приём", tr: "/əˈpɔɪntmənt/", ex: "Make an appointment." },
        { en: "symptom", ru: "симптом", tr: "/ˈsɪmptəm/", ex: "What are your symptoms?" },
        { en: "pain", ru: "боль", tr: "/peɪn/", ex: "I have a pain here." },
        { en: "headache", ru: "головная боль", tr: "/ˈhedeɪk/", ex: "I have a headache." },
        { en: "toothache", ru: "зубная боль", tr: "/ˈtuːθeɪk/", ex: "Toothache is bad." },
        { en: "stomachache", ru: "боль в животе", tr: "/ˈstʌməkeɪk/", ex: "Stomachache after eating." },
        { en: "backache", ru: "боль в спине", tr: "/ˈbækeɪk/", ex: "Backache from lifting." },
        { en: "cold", ru: "простуда", tr: "/koʊld/", ex: "I have a cold." },
        { en: "flu", ru: "грип", tr: "/fluː/", ex: "I have the flu." },
        { en: "fever", ru: "температура", tr: "/ˈfiːvər/", ex: "She has a fever." },
        { en: "cough", ru: "кашель", tr: "/kɔːf/", ex: "I have a cough." },
        { en: "sneeze", ru: "чихать", tr: "/sniːz/", ex: "Sneeze into your elbow." },
        { en: "runny nose", ru: "насморк", tr: "/ˈrʌni noʊz/", ex: "Runny nose and sore throat." },
        { en: "sore throat", ru: "больное горло", tr: "/sɔːr θroʊt/", ex: "Sore throat hurts." },
        { en: "allergy", ru: "аллергия", tr: "/ˈælərdʒi/", ex: "I have an allergy." },
        { en: "diet", ru: "диета", tr: "/ˈdaɪət/", ex: "Eat a balanced diet." },
        { en: "exercise", ru: "упражнение", tr: "/ˈeksərsaɪz/", ex: "Exercise every day." },
        { en: "sport", ru: "спорт", tr: "/spɔːrt/", ex: "Play sports." },
        { en: "gym", ru: "спортивный зал", tr: "/dʒɪm/", ex: "Go to the gym." },
        { en: "run", ru: "бегать", tr: "/rʌn/", ex: "Run in the morning." },
        { en: "swim", ru: "плавать", tr: "/swɪm/", ex: "Swim in the pool." },
        { en: "walk", ru: "ходить", tr: "/wɔːk/", ex: "Walk in the park." },
      ],
      "Прошедшее время": [
        { en: "was", ru: "был/была (ед.ч.)", tr: "/wʌz/", ex: "I was tired yesterday." },
        { en: "were", ru: "были (мн.ч.)", tr: "/wɜːr/", ex: "They were at home." },
        { en: "had", ru: "имел/имела", tr: "/hæd/", ex: "She had a cat." },
        { en: "went", ru: "шёл/шла", tr: "/went/", ex: "I went to school." },
        { en: "ate", ru: "ел/ела", tr: "/eɪt/", ex: "He ate an apple." },
        { en: "drank", ru: "пил/пила", tr: "/dræŋk/", ex: "She drank water." },
        { en: "saw", ru: "видел/видела", tr: "/sɔː/", ex: "We saw a movie." },
        { en: "read", ru: "читал/читала", tr: "/rɛd/", ex: "I read a book." },
        { en: "wrote", ru: "писал/писала", tr: "/roʊt/", ex: "She wrote a letter." },
        { en: "spoke", ru: "говорил/говорила", tr: "/spoʊk/", ex: "He spoke English." },
        { en: "made", ru: "делал/делала", tr: "/meɪd/", ex: "I made a cake." },
        { en: "did", ru: "делал/делала", tr: "/dɪd/", ex: "She did her homework." },
        { en: "got", ru: "получал/получала", tr: "/ɡɑːt/", ex: "I got a gift." },
        { en: "gave", ru: "давал/давала", tr: "/ɡeɪv/", ex: "He gave me a pen." },
        { en: "took", ru: "брал/брала", tr: "/tʊk/", ex: "She took a taxi." },
        { en: "came", ru: "приходил/приходила", tr: "/keɪm/", ex: "They came early." },
        { en: "said", ru: "сказал/сказала", tr: "/sed/", ex: "He said hello." },
        { en: "told", ru: "рассказал/рассказала", tr: "/toʊld/", ex: "She told a story." },
        { en: "knew", ru: "знал/знала", tr: "/nuː/", ex: "I knew the answer." },
        { en: "thought", ru: "думал/думала", tr: "/θɔːt/", ex: "He thought about it." },
        { en: "felt", ru: "чувствовал/чувствовала", tr: "/fɛlt/", ex: "She felt happy." },
        { en: "left", ru: "оставлял/оставляла", tr: "/lɛft/", ex: "I left my phone." },
        { en: "found", ru: "находил/находила", tr: "/faʊnd/", ex: "He found his keys." },
      ],
    },
    verbs: [
      { en: "can", ru: "мочь", tr: "/kæn/", ex: "I can swim. Can you speak English?" },
      { en: "could", ru: "мог (прош.)", tr: "/kʊd/", ex: "When I was young, I could run fast." },
      { en: "should", ru: "следует", tr: "/ʃʊd/", ex: "You should study more." },
      { en: "would", ru: "бы (усл.)", tr: "/wʊd/", ex: "I would like a coffee." },
      { en: "need", ru: "нуждаться", tr: "/niːd/", ex: "I need to sleep." },
      { en: "have to", ru: "должен", tr: "/hæv tuː/", ex: "I have to go to work." },
      { en: "must", ru: "обязан", tr: "/mʌst/", ex: "You must wear a seatbelt." },
      { en: "ask", ru: "спрашивать", tr: "/æsk/", ex: "Ask the teacher a question." },
      { en: "answer", ru: "ответить", tr: "/ˈænsər/", ex: "Answer the question." },
      { en: "call", ru: "звонить", tr: "/kɔːl/", ex: "Call me later." },
      { en: "visit", ru: "посещать", tr: "/ˈvɪzɪt/", ex: "Visit your grandparents." },
      { en: "invite", ru: "приглашать", tr: "/ɪnˈvaɪt/", ex: "Invite them to the party." },
      { en: "play", ru: "играть", tr: "/pleɪ/", ex: "Play football with friends." },
      { en: "watch", ru: "смотреть", tr: "/wɑːtʃ/", ex: "Watch TV in the evening." },
      { en: "listen", ru: "слушать", tr: "/ˈlɪsən/", ex: "Listen to music." },
      { en: "hear", ru: "слышать", tr: "/hɪr/", ex: "I hear a sound." },
      { en: "smell", ru: "пахнуть", tr: "/smel/", ex: "It smells good." },
      { en: "taste", ru: "пробовать на вкус", tr: "/teɪst/", ex: "Taste this cake." },
      { en: "touch", ru: "трогать", tr: "/tʌtʃ/", ex: "Don't touch that!" },
      { en: "feel", ru: "чувствовать", tr: "/fiːl/", ex: "How do you feel?" },
      { en: "seem", ru: "казаться", tr: "/siːm/", ex: "He seems nice." },
      { en: "look", ru: "выглядеть", tr: "/lʊk/", ex: "You look tired." },
      { en: "sound", ru: "звучать", tr: "/saʊnd/", ex: "That sounds good." },
      { en: "change", ru: "менять", tr: "/tʃeɪndʒ/", ex: "Change your clothes." },
      { en: "turn", ru: "поворачивать", tr: "/tɜːrn/", ex: "Turn left here." },
      { en: "open", ru: "открывать", tr: "/ˈoʊpən/", ex: "Open the door." },
      { en: "close", ru: "закрывать", tr: "/kloʊz/", ex: "Close the window." },
      { en: "clean", ru: "чистить", tr: "/kliːn/", ex: "Clean your room." },
      { en: "wash", ru: "мыть", tr: "/wɑːʃ/", ex: "Wash your hands." },
      { en: "cook", ru: "готовить", tr: "/kʊk/", ex: "Cook dinner tonight." },
      { en: "cut", ru: "резать", tr: "/kʌt/", ex: "Cut the bread." },
      { en: "break", ru: "ломать", tr: "/breɪk/", ex: "Don't break the glass." },
      { en: "fix", ru: "чинить", tr: "/fɪks/", ex: "Fix the broken chair." },
      { en: "build", ru: "строить", tr: "/bɪld/", ex: "Build a house." },
      { en: "grow", ru: "расти", tr: "/ɡroʊ/", ex: "Plants grow in the garden." },
      { en: "plant", ru: "сажать", tr: "/plænt/", ex: "Plant flowers in spring." },
      { en: "water", ru: "поливать", tr: "/ˈwɔːtər/", ex: "Water the plants every day." },
      { en: "rain", ru: "идти (о дожде)", tr: "/reɪn/", ex: "It's raining outside." },
      { en: "snow", ru: "идти (о снеге)", tr: "/snoʊ/", ex: "It snowed yesterday." },
    ],
    grammar: [
      {
        title: "Past Simple — прошедшее время",
        rule: "Используем для <strong>действий, которые произошли и закончились</strong> в прошлом.\nДля правильных глаголов: +ed\nДля неправильных: 2-я форма (из таблицы)",
        tip: "⏰ Слова-маркеры: yesterday, last week, ago, in 2020",
        examples: [
          ["I watched TV yesterday.", "Я смотрел телевизор вчера."],
          ["She visited her parents last week.", "Она навестила родителей на прошлой неделе."],
          ["He played football yesterday.", "Он играл в футбол вчера."],
          ["We ate pizza for dinner.", "Мы ели пиццу на ужин."],
          ["Did you go to the party?", "Ты ходил на вечеринку?"],
        ],
      },
      {
        title: "There is / There are — есть",
        rule: "Используем, чтобы сказать, что <strong>что-то существует</strong>.\nThere is (ед.ч.) + a/an\nThere are (мн.ч.) + some/any",
        tip: "❓ Вопрос: Is there...? / Are there...?",
        examples: [
          ["There is a cat in the garden.", "В саду есть кошка."],
          ["There are some apples on the table.", "На столе есть несколько яблок."],
          ["Is there a bank near here?", "Здесь рядом есть банк?"],
          ["There isn't any milk in the fridge.", "В холодильнике нет молока."],
          ["Are there any good restaurants?", "Здесь есть хорошие рестораны?"],
        ],
      },
      {
        title: "Comparatives — сравнительная степень",
        rule: "Сравниваем два человека/предмета.\nКороткие прилагательные: +er\nДлинные (2+ слога): more + прилагательное\nНеправильные: good → better, bad → worse",
        tip: "🔑 Слово than — чем",
        examples: [
          ["My house is bigger than yours.", "Мой дом больше твоего."],
          ["This book is more interesting than that one.", "Эта книга интереснее той."],
          ["He is taller than his brother.", "Он выше своего брата."],
          ["English is easier than Chinese.", "Английский проще китайского."],
          ["Coffee is better than tea.", "Кофе лучше чая."],
        ],
      },
      {
        title: "Superlatives — превосходная степень",
        rule: "Говорим о самом лучшем/большом и т.д.\nКороткие прилагательные: +est\nДлинные: the most + прилагательное\nНеправильные: good → the best, bad → the worst",
        tip: "👑 Всегда используем the перед превосходной степенью!",
        examples: [
          ["This is the best book I've ever read.", "Это лучшая книга, которую я когда-либо читал."],
          ["He is the tallest person in the class.", "Он самый высокий человек в классе."],
          ["It's the most expensive restaurant in town.", "Это самый дорогой ресторан в городе."],
          ["That was the worst movie ever.", "Это был худший фильм в жизни."],
          ["She is the smartest student.", "Она самая умная ученица."],
        ],
      },
    ],
    dialogues: [
      {
        title: "В больнице",
        desc: "Приём у врача",
        msgs: [
          { s: "left", av: "👨‍⚕️", en: "Good morning! How can I help you?", ru: "Доброе утро! Чем могу помочь?" },
          { s: "right", av: "👤", en: "Good morning! I have a headache and a sore throat.", ru: "Доброе утро! У меня головная боль и больное горло." },
          { s: "left", av: "👨‍⚕️", en: "How long have you had these symptoms?", ru: "Как давно у вас эти симптомы?" },
          { s: "right", av: "👤", en: "Since yesterday. I also have a fever.", ru: "Со вчерашнего дня. У меня ещё температура." },
          { s: "left", av: "👨‍⚕️", en: "Okay, let me check you. You have a cold. Take this medicine and rest.", ru: "Хорошо, давайте осмотрю. У вас простуда. Принимайте это лекарство и отдыхайте." },
        ],
      },
      {
        title: "На собеседовании",
        desc: "Первое интервью",
        msgs: [
          { s: "left", av: "👨‍💼", en: "Tell me about yourself.", ru: "Расскажите о себе." },
          { s: "right", av: "👤", en: "I studied business and worked in sales for two years.", ru: "Я учился бизнесу и два года работал в продажах." },
          { s: "left", av: "👨‍💼", en: "Why do you want this job?", ru: "Почему вы хотите эту работу?" },
          { s: "right", av: "👤", en: "Because I want to grow and develop my skills.", ru: "Потому что хочу расти и развивать свои навыки." },
        ],
      },
    ],
    fillEx: [
      { s: "I ___ to the cinema yesterday.", b: "went", h: "go → went (прош. время)" },
      { s: "She ___ a cake for my birthday.", b: "made", h: "make → made" },
      { s: "There ___ a dog in the yard.", b: "is", h: "ед.ч. → is" },
      { s: "You ___ study for the test.", b: "should", h: "следует → should" },
      { s: "My brother is ___ than me.", b: "taller", h: "сравнительная степень tall" },
    ],
    schedule: [
      { day: "Пн", title: "Past Simple (правильные)", lessons: ["Правила Past Simple", "Правильные глаголы +ed", "Слова-маркеры (yesterday, last...)", "Утверждения", "Практика"], topics: ["прошедшее время"] },
      { day: "Вт", title: "Past Simple (неправильные)", lessons: ["Неправильные глаголы", "Таблица неправильных", "Вопросы и отрицания", "Диалог: рассказ о прошлом", "Практика"], topics: ["неправильные глаголы"] },
      { day: "Ср", title: "There is / There are", lessons: ["Конструкция there is/are", "Вопросы и отрицания", "Some и any", "Описание комнаты/города", "Практика"], topics: ["существование"] },
      { day: "Чт", title: "Сравнительная степень", lessons: ["Comparatives: er/more", "Слово than", "Неправильные сравнения", "Сравниваем людей/вещи", "Практика"], topics: ["сравнения"] },
      { day: "Пт", title: "Превосходная степень", lessons: ["Superlatives: est/most", "Определённый артикль the", "Неправильные превосходные", "Описания", "Практика"], topics: ["сравнения"] },
      { day: "Сб", title: "Лексика: путешествия", lessons: ["Транспорт", "Отель, багаж", "Направления: left/right/straight", "Спрашиваем дорогу", "Диалог в аэропорту"], topics: ["путешествия"] },
      { day: "Вс", title: "Повторение и тест", lessons: ["Грамматика Past Simple", "There is/are", "Сравнительные/превосходные", "Лексика путешествий", "Мини-тест"], topics: ["итог A2"] },
    ],
  },

  B1: {
    color: "#5b8dee",
    name: "Intermediate",
    vocab: {
      "Чувства": [
        { en: "excited", ru: "взволнованный", tr: "/ɪkˈsaɪtɪd/", ex: "I'm excited about the trip!" },
        { en: "nervous", ru: "нервный", tr: "/ˈnɜːrvəs/", ex: "I'm nervous before the exam." },
        { en: "worried", ru: "обеспокоенный", tr: "/ˈwɜːrid/", ex: "I'm worried about my friend." },
        { en: "anxious", ru: "тревожный", tr: "/ˈæŋkʃəs/", ex: "I feel anxious about the future." },
        { en: "proud", ru: "гордый", tr: "/praʊd/", ex: "I'm proud of my work." },
        { en: "jealous", ru: "ревни́вый", tr: "/ˈdʒeləs/", ex: "Don't be jealous of others." },
        { en: "grateful", ru: "благодарный", tr: "/ˈɡreɪtfl/", ex: "I'm grateful for your help." },
        { en: "thankful", ru: "благодарный", tr: "/ˈθæŋkfl/", ex: "I'm thankful for everything." },
        { en: "hopeful", ru: "надеющийся", tr: "/ˈhoʊpfl/", ex: "I'm hopeful about the future." },
        { en: "disappointed", ru: "разочарованный", tr: "/ˌdɪsəˈpɔɪntɪd/", ex: "I'm disappointed in the result." },
        { en: "surprised", ru: "удивлённый", tr: "/sərˈpraɪzd/", ex: "I'm surprised to see you here!" },
        { en: "shocked", ru: "шокированный", tr: "/ʃɑːkt/", ex: "I was shocked by the news." },
        { en: "amazed", ru: "изумлённый", tr: "/əˈmeɪzd/", ex: "I'm amazed by your talent!" },
        { en: "bored", ru: "скучающий", tr: "/bɔːrd/", ex: "I'm bored of this movie." },
        { en: "tired", ru: "усталый", tr: "/ˈtaɪərd/", ex: "I'm tired after work." },
        { en: "exhausted", ru: "измотанный", tr: "/ɪɡˈzɔːstɪd/", ex: "I'm exhausted today." },
        { en: "energetic", ru: "энергичный", tr: "/ˌenərˈdʒetɪk/", ex: "I feel energetic today!" },
        { en: "lazy", ru: "ленивый", tr: "/ˈleɪzi/", ex: "I feel lazy on Sundays." },
        { en: "confident", ru: "уверенный", tr: "/ˈkɑːnfɪdənt/", ex: "I'm confident in my abilities." },
        { en: "shy", ru: "застенчивый", tr: "/ʃaɪ/", ex: "I'm shy around new people." },
        { en: "friendly", ru: "дружелюбный", tr: "/ˈfrendli/", ex: "She's very friendly." },
        { en: "kind", ru: "добрый", tr: "/kaɪnd/", ex: "Thank you, that's kind." },
        { en: "generous", ru: "щедрый", tr: "/ˈdʒenərəs/", ex: "He's very generous." },
        { en: "mean", ru: "жадный/злой", tr: "/miːn/", ex: "Don't be so mean!" },
        { en: "honest", ru: "честный", tr: "/ˈɑːnɪst/", ex: "She's an honest person." },
        { en: "dishonest", ru: "нечестный", tr: "/dɪsˈɑːnɪst/", ex: "He was dishonest about it." },
        { en: "polite", ru: "вежливый", tr: "/pəˈlaɪt/", ex: "Be polite to everyone." },
        { en: "rude", ru: "грубый", tr: "/ruːd/", ex: "That was very rude." },
      ],
      "Характер": [
        { en: "extrovert", ru: "экстраверт", tr: "/ˈekstrəvɜːrt/", ex: "I'm an extrovert. I love parties!" },
        { en: "introvert", ru: "интроверт", tr: "/ˈɪntrəvɜːrt/", ex: "I'm an introvert. I like quiet evenings." },
        { en: "ambitious", ru: "амбициозный", tr: "/æmˈbɪʃəs/", ex: "He's ambitious and hardworking." },
        { en: "hardworking", ru: "трудолюбивый", tr: "/ˈhɑːrdˈwɜːrkɪŋ/", ex: "She's a hardworking student." },
        { en: "lazy", ru: "ленивый", tr: "/ˈleɪzi/", ex: "He's so lazy, he never helps!" },
        { en: "organized", ru: "организованный", tr: "/ˈɔːrɡənaɪzd/", ex: "She's very organized." },
        { en: "messy", ru: "неопрятный", tr: "/ˈmesi/", ex: "His room is always messy." },
        { en: "tidy", ru: "опрятный", tr: "/ˈtaɪdi/", ex: "I like to keep my house tidy." },
        { en: "creative", ru: "творческий", tr: "/kriˈeɪtɪv/", ex: "She's a creative artist." },
        { en: "artistic", ru: "художественный", tr: "/ɑːrˈtɪstɪk/", ex: "He has artistic talent." },
        { en: "practical", ru: "практичный", tr: "/ˈpræktɪkl/", ex: "Let's be practical about this." },
        { en: "sensitive", ru: "чувствительный", tr: "/ˈsensətɪv/", ex: "She's very sensitive." },
        { en: "tough", ru: "крепкий/стойкий", tr: "/tʌf/", ex: "He's a tough guy." },
        { en: "flexible", ru: "гибкий", tr: "/ˈfleksəbl/", ex: "I'm flexible with the schedule." },
        { en: "stubborn", ru: "упрямый", tr: "/ˈstʌbərn/", ex: "He's so stubborn!" },
        { en: "patient", ru: "терпеливый", tr: "/ˈpeɪʃnt/", ex: "Be patient, it will happen." },
        { en: "impatient", ru: "нетерпеливый", tr: "/ɪmˈpeɪʃnt/", ex: "Don't be so impatient!" },
        { en: "curious", ru: "любопытный", tr: "/ˈkjʊriəs/", ex: "I'm curious about everything." },
        { en: "careful", ru: "осторожный", tr: "/ˈkerfl/", ex: "Be careful with the glass." },
        { en: "careless", ru: "неосторожный", tr: "/ˈkerləs/", ex: "He made a careless mistake." },
        { en: "brave", ru: "храбрый", tr: "/breɪv/", ex: "It was brave of you to help." },
        { en: "cowardly", ru: "трусливый", tr: "/ˈkaʊərdli/", ex: "That was cowardly of him." },
        { en: "wise", ru: "мудрый", tr: "/waɪz/", ex: "My grandmother is very wise." },
        { en: "smart", ru: "умный", tr: "/smɑːrt/", ex: "He's a smart kid." },
        { en: "intelligent", ru: "интеллигентный", tr: "/ɪnˈtelɪdʒənt/", ex: "She's highly intelligent." },
        { en: "clever", ru: "сметливый", tr: "/ˈklevər/", ex: "That's a clever idea!" },
        { en: "stupid", ru: "глупый", tr: "/ˈstjuːpɪd/", ex: "That was a stupid thing to do." },
        { en: "funny", ru: "смешной", tr: "/ˈfʌni/", ex: "He's so funny!" },
        { en: "serious", ru: "серьёзный", tr: "/ˈsɪriəs/", ex: "He's a very serious person." },
      ],
      "Связь": [
        { en: "although", ru: "хотя", tr: "/ɔːlˈðoʊ/", ex: "Although it was raining, we went out." },
        { en: "even though", ru: "даже несмотря на то что", tr: "/ˈiːvən ðoʊ/", ex: "Even though he's rich, he's not happy." },
        { en: "however", ru: "однако", tr: "/haʊˈevər/", ex: "It's expensive. However, it's very good." },
        { en: "nevertheless", ru: "тем не менее", tr: "/ˌnevərðəˈles/", ex: "She was very tired; nevertheless, she finished her work." },
        { en: "therefore", ru: "следовательно", tr: "/ˈðerfɔːr/", ex: "He was late; therefore, he missed the meeting." },
        { en: "so", ru: "поэтому", tr: "/soʊ/", ex: "I was tired, so I went to bed early." },
        { en: "because", ru: "потому что", tr: "/bɪˈkɔːz/", ex: "I did it because I wanted to." },
        { en: "since", ru: "поскольку", tr: "/sɪns/", ex: "Since you're here, let's start." },
        { en: "as", ru: "так как", tr: "/æz/", ex: "As it's late, let's go home." },
        { en: "if", ru: "если", tr: "/ɪf/", ex: "If you study, you'll pass." },
        { en: "unless", ru: "если не", tr: "/ənˈles/", ex: "We won't go unless it stops raining." },
        { en: "as soon as", ru: "как только", tr: "/æz suːn æz/", ex: "Call me as soon as you arrive." },
        { en: "while", ru: "пока", tr: "/waɪl/", ex: "I'll cook while you watch TV." },
        { en: "when", ru: "когда", tr: "/wen/", ex: "When I was young, I played football." },
        { en: "before", ru: "до того как", tr: "/bɪˈfɔːr/", ex: "Think before you speak!" },
        { en: "after", ru: "после того как", tr: "/ˈæftər/", ex: "Let's meet after work." },
        { en: "until", ru: "до тех пор пока", tr: "/ənˈtɪl/", ex: "Wait here until I come back." },
        { en: "during", ru: "в течение", tr: "/ˈdʊrɪŋ/", ex: "Don't talk during the movie." },
        { en: "while", ru: "в то время как", tr: "/waɪl/", ex: "She's reading while he's sleeping." },
        { en: "both", ru: "оба", tr: "/boʊθ/", ex: "Both my brother and sister are students." },
        { en: "either", ru: "любой из двух", tr: "/ˈaɪðər/", ex: "You can either stay or go." },
        { en: "neither", ru: "ни один из двух", tr: "/ˈnaɪðər/", ex: "Neither answer is correct." },
        { en: "not only", ru: "не только", tr: "/nɑːt ˈoʊnli/", ex: "She's not only smart but also kind." },
        { en: "but also", ru: "но и", tr: "/bʌt ˈɔːlsoʊ/", ex: "He's not only rich but also generous." },
        { en: "despite", ru: "несмотря на", tr: "/dɪˈspaɪt/", ex: "Despite the rain, we went out." },
        { en: "in spite of", ru: "несмотря на", tr: "/ɪn spaɪt əv/", ex: "In spite of the cold, we walked." },
        { en: "because of", ru: "из-за", tr: "/bɪˈkɔːz əv/", ex: "We stayed home because of the rain." },
        { en: "due to", ru: "из-за", tr: "/duː tuː/", ex: "The flight was cancelled due to weather." },
      ],
      "Степени сравнения": [
        { en: "much", ru: "много (неисч.)", tr: "/mʌtʃ/", ex: "I don't have much money." },
        { en: "many", ru: "много (исч.)", tr: "/ˈmeni/", ex: "I have many friends." },
        { en: "more", ru: "больше", tr: "/mɔːr/", ex: "I need more time." },
        { en: "less", ru: "меньше", tr: "/les/", ex: "Eat less sugar." },
        { en: "fewer", ru: "меньше (исч.)", tr: "/ˈfjuːər/", ex: "Fewer people came." },
        { en: "most", ru: "большинство", tr: "/moʊst/", ex: "Most people like it." },
        { en: "least", ru: "наименее", tr: "/liːst/", ex: "That's the least important thing." },
        { en: "fewest", ru: "наименьшее число", tr: "/ˈfjuːəst/", ex: "He made the fewest mistakes." },
        { en: "enough", ru: "достаточно", tr: "/ɪˈnʌf/", ex: "I have enough money." },
        { en: "too", ru: "слишком", tr: "/tuː/", ex: "It's too expensive." },
        { en: "very", ru: "очень", tr: "/ˈveri/", ex: "She's very nice." },
        { en: "really", ru: "действительно", tr: "/ˈriːəli/", ex: "I'm really happy." },
        { en: "quite", ru: "довольно", tr: "/kwaɪt/", ex: "It's quite good." },
        { en: "rather", ru: "скорее", tr: "/ˈræðər/", ex: "It's rather cold today." },
        { en: "pretty", ru: "довольно", tr: "/ˈprɪti/", ex: "That's pretty good!" },
        { en: "extremely", ru: "чрезвычайно", tr: "/ɪkˈstriːmli/", ex: "It's extremely hot today." },
        { en: "absolutely", ru: "абсолютно", tr: "/ˈæbsəluːtli/", ex: "I'm absolutely exhausted!" },
        { en: "completely", ru: "полностью", tr: "/kəmˈpliːtli/", ex: "I completely forgot!" },
        { en: "totally", ru: "полностью", tr: "/ˈtoʊtəli/", ex: "I totally agree!" },
        { en: "hardly", ru: "едва ли", tr: "/ˈhɑːrdli/", ex: "I hardly ever go out." },
        { en: "rarely", ru: "редко", tr: "/ˈrerli/", ex: "I rarely eat meat." },
        { en: "occasionally", ru: "иногда", tr: "/əˈkeɪʒnəli/", ex: "I occasionally visit my grandparents." },
        { en: "frequently", ru: "часто", tr: "/ˈfriːkwəntli/", ex: "He frequently travels." },
        { en: "constantly", ru: "постоянно", tr: "/ˈkɑːnstəntli/", ex: "She's constantly talking." },
      ],
      "Привычки": [
        { en: "used to", ru: "раньше (привычка)", tr: "/juːst tuː/", ex: "I used to smoke, but not anymore." },
        { en: "would", ru: "бы (привычка)", tr: "/wʊd/", ex: "When I was young, I would play in the park every day." },
        { en: "get used to", ru: "привыкать к", tr: "/ɡet juːst tuː/", ex: "I'm getting used to the new job." },
        { en: "be used to", ru: "привык к", tr: "/biː juːst tuː/", ex: "I'm used to waking up early." },
        { en: "habit", ru: "привычка", tr: "/ˈhæbɪt/", ex: "Smoking is a bad habit." },
        { en: "routine", ru: "рутина", tr: "/ruːˈtiːn/", ex: "I have a daily routine." },
        { en: "schedule", ru: "расписание", tr: "/ˈskedʒuːl/", ex: "What's your schedule today?" },
        { en: "timetable", ru: "расписание", tr: "/ˈtaɪmteɪbl/", ex: "Check the timetable." },
        { en: "plan", ru: "план", tr: "/plæn/", ex: "Do you have a plan?" },
        { en: "goal", ru: "цель", tr: "/ɡoʊl/", ex: "My goal is to learn English." },
        { en: "aim", ru: "цель", tr: "/eɪm/", ex: "What's your aim in life?" },
        { en: "purpose", ru: "цель", tr: "/ˈpɜːrpəs/", ex: "What's the purpose of this?" },
        { en: "achievement", ru: "достижение", tr: "/əˈtʃiːvmənt/", ex: "Graduation was a big achievement." },
        { en: "success", ru: "успех", tr: "/səkˈses/", ex: "Failure is the key to success." },
        { en: "failure", ru: "неудача", tr: "/ˈfeɪljər/", ex: "Don't be afraid of failure." },
        { en: "improve", ru: "улучшать", tr: "/ɪmˈpruːv/", ex: "I want to improve my English." },
        { en: "progress", ru: "прогресс", tr: "/ˈproʊɡres/", ex: "You're making good progress!" },
        { en: "practice", ru: "практика", tr: "/ˈpræktɪs/", ex: "Practice makes perfect!" },
        { en: "exercise", ru: "упражнение", tr: "/ˈeksərsaɪz/", ex: "Do grammar exercises." },
        { en: "homework", ru: "домашнее задание", tr: "/ˈhoʊmwɜːrk/", ex: "Did you do your homework?" },
        { en: "lesson", ru: "урок", tr: "/ˈlesn/", ex: "We have a lesson at 3." },
        { en: "class", ru: "класс", tr: "/klæs/", ex: "Don't be late for class!" },
        { en: "course", ru: "курс", tr: "/kɔːrs/", ex: "I'm taking an English course." },
        { en: "university", ru: "университет", tr: "/ˌjuːnɪˈvɜːrsəti/", ex: "She's at university." },
        { en: "college", ru: "колледж", tr: "/ˈkɑːlɪdʒ/", ex: "He's in college." },
      ],
    },
    verbs: [
      { en: "present perfect", ru: "наст. завершенное", tr: "/ˈprezənt ˈpɜːrfɪkt/", ex: "I have finished my homework." },
      { en: "have eaten", ru: "ел (опыт)", tr: "/hæv ˈiːtən/", ex: "I have eaten sushi." },
      { en: "have gone", ru: "шёл (результат)", tr: "/hæv ɡɔːn/", ex: "She has gone to the shop." },
      { en: "have been", ru: "был (посещал)", tr: "/hæv bɪn/", ex: "I have been to Paris." },
      { en: "have seen", ru: "видел", tr: "/hæv siːn/", ex: "I have seen that movie." },
      { en: "have read", ru: "читал", tr: "/hæv rɛd/", ex: "I have read this book before." },
      { en: "have written", ru: "написал", tr: "/hæv ˈrɪtən/", ex: "I have written a letter." },
      { en: "have spoken", ru: "говорил", tr: "/hæv ˈspoʊkən/", ex: "I have spoken to him." },
      { en: "have made", ru: "сделал", tr: "/hæv meɪd/", ex: "I have made a cake." },
      { en: "have done", ru: "сделал", tr: "/hæv dʌn/", ex: "I have done my homework." },
      { en: "have had", ru: "имел", tr: "/hæv hæd/", ex: "I have had a good day." },
      { en: "have got", ru: "получил", tr: "/hæv ɡɑːt/", ex: "I have got your message." },
      { en: "have bought", ru: "купил", tr: "/hæv bɔːt/", ex: "I have bought a new phone." },
      { en: "have seen", ru: "видел", tr: "/hæv siːn/", ex: "I have seen that film twice." },
      { en: "have been waiting", ru: "ждал (длится)", tr: "/hæv bɪn ˈweɪtɪŋ/", ex: "I have been waiting for an hour." },
      { en: "have been working", ru: "работал (длится)", tr: "/hæv bɪn ˈwɜːrkɪŋ/", ex: "I have been working all day." },
      { en: "have been studying", ru: "учился (длится)", tr: "/hæv bɪn ˈstʌdiɪŋ/", ex: "I have been studying for 3 hours." },
      { en: "would like", ru: "хотел бы", tr: "/wʊd laɪk/", ex: "I would like a coffee." },
      { en: "would rather", ru: "предпочёл бы", tr: "/wʊd ˈræðər/", ex: "I would rather stay at home." },
      { en: "used to", ru: "раньше", tr: "/juːst tuː/", ex: "I used to play football." },
      { en: "get used to", ru: "привыкать", tr: "/ɡet juːst tuː/", ex: "I'm getting used to the food." },
      { en: "be used to", ru: "привык", tr: "/biː juːst tuː/", ex: "I'm used to waking up early." },
      { en: "ought to", ru: "следует", tr: "/ɔːt tuː/", ex: "You ought to apologize." },
      { en: "had better", ru: "лучше бы", tr: "/hæd ˈbetər/", ex: "You had better hurry!" },
      { en: "might", ru: "мог бы", tr: "/maɪt/", ex: "I might go out tonight." },
      { en: "may", ru: "мог бы", tr: "/meɪ/", ex: "It may rain later." },
      { en: "could", ru: "мог бы", tr: "/kʊd/", ex: "I could help you." },
      { en: "must have", ru: "должно быть", tr: "/mʌst hæv/", ex: "You must have been tired." },
      { en: "can't have", ru: "не могло быть", tr: "/kænt hæv/", ex: "He can't have done that." },
      { en: "should have", ru: "следовало бы", tr: "/ʃʊd hæv/", ex: "You should have studied more." },
      { en: "would have", ru: "бы бы", tr: "/wʊd hæv/", ex: "I would have helped you." },
      { en: "might have", ru: "мог бы и", tr: "/maɪt hæv/", ex: "I might have made a mistake." },
    ],
    grammar: [
      {
        title: "Present Perfect — опыт и результат",
        rule: "Используем, когда <strong>действие связано с настоящим</strong>:\n1. Опыт в жизни (ever/never)\n2. Результат в настоящем (already/yet)\n3. Действие началось в прошлом и продолжается (since/for)",
        tip: "✅ Слова-маркеры: ever, never, already, yet, just, since, for, recently, lately",
        examples: [
          ["I have been to London.", "Я был в Лондоне (опыт)."],
          ["She has already finished her work.", "Она уже закончила работу (результат)."],
          ["We have lived here for 5 years.", "Мы живём здесь уже 5 лет (продолжается)."],
          ["Have you ever eaten sushi?", "Ты когда-нибудь ел суши?"],
          ["I haven't seen him lately.", "Я не видел его lately."],
        ],
      },
      {
        title: "Past Continuous — действие в моменте",
        rule: "Используем для <strong>действия, которое происходило в конкретный момент в прошлом</strong>.\nФорма: was/were + V-ing\nOften with when (когда прервали другое действие)",
        tip: "⏰ Важно: два действия — одно длинное (Continuous), одно короткое (Simple)",
        examples: [
          ["I was watching TV when you called.", "Я смотрел телевизор, когда ты позвонил."],
          ["What were you doing at 8 pm last night?", "Что ты делал в 8 вечера вчера?"],
          ["They were sleeping when the fire started.", "Они спали, когда начался пожар."],
          ["While I was studying, my sister was listening to music.", "Пока я учился, сестра слушала музыку."],
          ["He was driving when it started to rain.", "Он ехал, когда начался дождь."],
        ],
      },
      {
        title: "Степени сравнения (подробно)",
        rule: "Повторяем и углубляем:\n1. 1 слог: +er/+est (small → smaller → smallest)\n2. 2 слога на -y: y → ier/iest (happy → happier → happiest)\n3. 2+ слогов: more/most (beautiful → more beautiful → most beautiful)\n4. Неправильные: good → better → best, bad → worse → worst",
        tip: "🔥 Упражняемся с both, either, neither, not only...but also",
        examples: [
          ["He is taller than his brother.", "Он выше своего брата."],
          ["This is the best book I've ever read.", "Это лучшая книга, которую я когда-либо читал."],
          ["She is not only smart but also kind.", "Она не только умна, но и добра."],
          ["Both options are good.", "Оба варианта хороши."],
          ["Neither answer is correct.", "Ни один ответ не правильный."],
        ],
      },
      {
        title: "Used to / Get used to / Be used to",
        rule: "Отличие:\n1. Used to + V — привычка в прошлом (больше не делю)\n2. Be used to + V-ing — привык к чему-то (сейчас привык)\n3. Get used to + V-ing — привыкаю к чему-то (в процессе)",
        tip: "✅ Important: after used to/be used to/get used to we use -ing (not infinitive)!",
        examples: [
          ["I used to smoke.", "Я раньше курил (но больше не курю)."],
          ["I am used to waking up early.", "Я привык рано вставать."],
          ["I am getting used to the food here.", "Я привыкаю к еде здесь."],
          ["Did you use to play football?", "Ты раньше играл в футбол?"],
          ["She didn't use to like coffee.", "Она раньше не любила кофе."],
        ],
      },
    ],
    dialogues: [
      {
        title: "Обсуждаем опыт",
        desc: "Рассказываем о путешествиях",
        msgs: [
          { s: "left", av: "🌍", en: "Have you ever been to Japan?", ru: "Ты когда-нибудь был в Японии?" },
          { s: "right", av: "👤", en: "Yes, I have! I went there in 2019.", ru: "Да, был! Я ездил туда в 2019 году." },
          { s: "left", av: "🌍", en: "Wow! What was it like?", ru: "Ого! Как это было?" },
          { s: "right", av: "👤", en: "It was amazing! The food was great and the people were friendly.", ru: "Было потрясающе! Еда отличная, люди дружелюбные." },
          { s: "left", av: "🌍", en: "I've always wanted to go there. Maybe next year!", ru: "Я всегда хотел туда поехать. Может, в следующем году!" },
        ],
      },
      {
        title: "Обсуждаем привычки",
        desc: "Поговорим о старых привычках",
        msgs: [
          { s: "left", av: "🗣️", en: "Did you use to have any bad habits?", ru: "У тебя раньше были плохие привычки?" },
          { s: "right", av: "👤", en: "Yes, I used to smoke. But I quit 5 years ago.", ru: "Да, раньше курил. Но бросил 5 лет назад." },
          { s: "left", av: "🗣️", en: "Good for you! I'm getting used to going to the gym regularly now.", ru: "Здорово! А я сейчас привыкаю регулярно ходить в спортзал." },
          { s: "right", av: "👤", en: "That's great! I'm used to waking up early now, too.", ru: "Замечательно! Я тоже уже привык рано вставать." },
        ],
      },
    ],
    fillEx: [
      { s: "I ___ finished my homework.", b: "have", h: "Present Perfect: have + V3" },
      { s: "I ___ to Paris twice.", b: "have been", h: "был (посещал) → have been" },
      { s: "What ___ you doing at 5 pm?", b: "were", h: "Past Continuous: were + V-ing" },
      { s: "This is ___ than that.", b: "better", h: "good → better" },
      { s: "I ___ smoke when I was younger.", b: "used to", h: "привычка в прошлом → used to" },
    ],
    schedule: [
      { day: "Пн", title: "Present Perfect (опыт)", lessons: ["Ever/never", "Been/gone разница", "Говорим об опыте", "Вопросы Have you ever...?", "Практика"], topics: ["опыт в жизни"] },
      { day: "Вт", title: "Present Perfect (результат)", lessons: ["Already/yet/just", "Результат в настоящем", "Отличие от Past Simple", "Практика диалогов", "Упражнения"], topics: ["результат сейчас"] },
      { day: "Ср", title: "Past Continuous", lessons: ["Форма was/were + V-ing", "When/while", "Два действия одновременно", "Сценарии (в это время я делал...)", "Практика"], topics: ["действие в моменте"] },
      { day: "Чт", title: "Союзы и связь", lessons: ["Although/however/therefore", "Because/since/as", "If/unless/as soon as", "Both/either/neither", "Практика сложных предложений"], topics: ["связываем идеи"] },
      { day: "Пт", title: "Used to / Be used to", lessons: ["Used to (прошлая привычка)", "Be used to (привык сейчас)", "Get used to (привыкаю)", "Упражнения на различие", "Практика"], topics: ["привычки"] },
      { day: "Сб", title: "Лексика: чувства и характер", lessons: ["Чувства (excited, nervous...)", "Характер (ambitious, lazy...)", "Описываем людей", "Сочетаемость слов", "Практика"], topics: ["описания людей"] },
      { day: "Вс", title: "Повторение и тест", lessons: ["Present Perfect vs Past", "Past Continuous", "Союзы", "Used to", "Мини-тест B1"], topics: ["итог B1"] },
    ],
  },

  B2: {
    color: "#9d6ef5",
    name: "Upper-Intermediate",
    vocab: {
      "Сложные идеи": [
        { en: "assume", ru: "предполагать", tr: "/əˈsuːm/", ex: "I assume you're tired." },
        { en: "consider", ru: "считать/рассматривать", tr: "/kənˈsɪdər/", ex: "I consider him a friend. / I'm considering changing jobs." },
        { en: "claim", ru: "утверждать", tr: "/kleɪm/", ex: "He claims to know the truth." },
        { en: "suggest", ru: "предлагать", tr: "/səˈdʒest/", ex: "I suggest we leave early." },
        { en: "recommend", ru: "рекомендовать", tr: "/ˌrekəˈmend/", ex: "I recommend this restaurant." },
        { en: "demand", ru: "требовать", tr: "/dɪˈmænd/", ex: "I demand an explanation." },
        { en: "insist", ru: "настаивать", tr: "/ɪnˈsɪst/", ex: "She insisted on paying." },
        { en: "deny", ru: "отрицать", tr: "/dɪˈnaɪ/", ex: "He denied stealing the money." },
        { en: "admit", ru: "признавать", tr: "/ədˈmɪt/", ex: "He admitted making a mistake." },
        { en: "regret", ru: "сожалеть", tr: "/rɪˈɡret/", ex: "I regret what I said." },
        { en: "tend", ru: "иметь тенденцию", tr: "/tend/", ex: "I tend to agree with you." },
        { en: "happen", ru: "случаться", tr: "/ˈhæpən/", ex: "What happened next?" },
        { en: "appear", ru: "казаться/появляться", tr: "/əˈpɪr/", ex: "He appears to be happy. / A car appeared." },
        { en: "seem", ru: "казаться", tr: "/siːm/", ex: "You seem tired." },
        { en: "suppose", ru: "предполагать", tr: "/səˈpoʊz/", ex: "I suppose so." },
        { en: "expect", ru: "ожидать", tr: "/ɪkˈspekt/", ex: "I expect you to be on time." },
        { en: "anticipate", ru: "предвидеть", tr: "/ænˈtɪsɪpeɪt/", ex: "We anticipated the problem." },
        { en: "involve", ru: "включать", tr: "/ɪnˈvɑːlv/", ex: "The job involves a lot of travel." },
        { en: "require", ru: "требовать", tr: "/rɪˈkwaɪər/", ex: "This requires careful planning." },
        { en: "avoid", ru: "избегать", tr: "/əˈvɔɪd/", ex: "Try to avoid mistakes." },
        { en: "prevent", ru: "предотвращать", tr: "/prɪˈvent/", ex: "We must prevent this from happening." },
        { en: "delay", ru: "задерживать", tr: "/dɪˈleɪ/", ex: "The flight was delayed." },
        { en: "postpone", ru: "откладывать", tr: "/poʊstˈpoʊn/", ex: "Let's postpone the meeting." },
        { en: "cancel", ru: "отменять", tr: "/ˈkænsl/", ex: "They cancelled the game." },
        { en: "arrange", ru: "организовывать", tr: "/əˈreɪndʒ/", ex: "I'll arrange a meeting." },
        { en: "organize", ru: "организовывать", tr: "/ˈɔːrɡənaɪz/", ex: "She organized the event." },
        { en: "manage", ru: "справляться/управлять", tr: "/ˈmænɪdʒ/", ex: "I managed to finish on time. / He manages the team." },
        { en: "fail", ru: "терпеть неудачу", tr: "/feɪl/", ex: "He failed the exam." }
      ],
      "Гипотезы": [
        { en: "if", ru: "если", tr: "/ɪf/", ex: "If I had money...", type: "condition" },
        { en: "unless", ru: "если не", tr: "/ənˈles/", ex: "Unless you come...", type: "condition" },
        { en: "wish", ru: "хотел бы", tr: "/wɪʃ/", ex: "I wish I knew.", type: "subjunctive" },
        { en: "if only", ru: "если бы только", tr: "/ɪf ˈoʊnli/", ex: "If only I had time.", type: "subjunctive" },
        { en: "would rather", ru: "предпочёл бы", tr: "/wʊd ˈræðər/", ex: "I'd rather stay.", type: "preference" },
        { en: "it's time", ru: "пора", tr: "/ɪts taɪm/", ex: "It's time we left.", type: "subjunctive" },
        { en: "as if", ru: "как будто", tr: "/æz ɪf/", ex: "He looks as if he's seen a ghost.", type: "subjunctive" },
        { en: "as though", ru: "как будто", tr: "/æz ðoʊ/", ex: "It seems as though it's true.", type: "subjunctive" }
      ],
      "Продвинутые союзы": [
        { en: "nevertheless", ru: "тем не менее", tr: "/ˌnevərðəˈles/", ex: "It's expensive; nevertheless, I want it." },
        { en: "nonetheless", ru: "тем не менее", tr: "/ˌnʌnðəˈles/", ex: "Nonetheless, we should go." },
        { en: "furthermore", ru: "кроме того", tr: "/ˌfɜːrðərˈmɔːr/", ex: "Furthermore, it's easy." },
        { en: "moreover", ru: "более того", tr: "/mɔːrˈoʊvər/", ex: "Moreover, it's cheap." },
        { en: "however", ru: "однако", tr: "/haʊˈevər/", ex: "It's cold; however, it's sunny." },
        { en: "therefore", ru: "следовательно", tr: "/ˈðerfɔːr/", ex: "He's busy; therefore, he can't come." },
        { en: "thus", ru: "таким образом", tr: "/ðʌs/", ex: "Thus, we must act." },
        { en: "hence", ru: "следовательно", tr: "/hens/", ex: "Hence the problem." },
        { en: "consequently", ru: "следовательно", tr: "/ˈkɑːnsəkwentli/", ex: "Consequently, we failed." },
        { en: "meanwhile", ru: "тем временем", tr: "/ˈmiːnwaɪl/", ex: "Meanwhile, let's eat." }
      ],
      "Фразовые глаголы": [
        { en: "break down", ru: "сломаться", tr: "/breɪk daʊn/", ex: "My car broke down." },
        { en: "break up", ru: "разлучаться", tr: "/breɪk ʌp/", ex: "They broke up." },
        { en: "bring up", ru: "воспитывать", tr: "/brɪŋ ʌp/", ex: "She was brought up well." },
        { en: "call off", ru: "отменять", tr: "/kɔːl ɔːf/", ex: "They called off the meeting." },
        { en: "call back", ru: "перезванивать", tr: "/kɔːl bæk/", ex: "Call me back later." },
        { en: "come across", ru: "налететь на", tr: "/kʌm əˈkrɔːs/", ex: "I came across a good book." },
        { en: "come up with", ru: "придумывать", tr: "/kʌm ʌp wɪð/", ex: "She came up with a great idea." },
        { en: "count on", ru: "рассчитывать на", tr: "/kaʊnt ɑːn/", ex: "You can count on me." },
        { en: "cut down", ru: "сокращать", tr: "/kʌt daʊn/", ex: "Cut down on sugar." },
        { en: "do without", ru: "обходиться без", tr: "/duː wɪˈðaʊt/", ex: "I can do without help." },
        { en: "figure out", ru: "понять", tr: "/ˈfɪɡjər aʊt/", ex: "I can't figure it out." },
        { en: "get away", ru: "сбегать", tr: "/ɡet əˈweɪ/", ex: "Let's get away for the weekend." },
        { en: "get along", ru: "ладить", tr: "/ɡet əˈlɔːŋ/", ex: "We get along well." },
        { en: "give up", ru: "сдаваться", tr: "/ɡɪv ʌp/", ex: "Don't give up!" },
        { en: "go over", ru: "проверять", tr: "/ɡoʊ ˈoʊvər/", ex: "Let's go over the homework." },
        { en: "look after", ru: "присматривать за", tr: "/lʊk ˈæftər/", ex: "Look after my cat." },
        { en: "look forward to", ru: "ждать с нетерпением", tr: "/lʊk ˈfɔːrwərd tuː/", ex: "I'm looking forward to it." },
        { en: "put off", ru: "откладывать", tr: "/pʊt ɔːf/", ex: "Don't put it off!" },
        { en: "turn down", ru: "отказывать", tr: "/tɜːrn daʊn/", ex: "He turned down the offer." },
        { en: "turn up", ru: "появляться", tr: "/tɜːrn ʌp/", ex: "She turned up unexpectedly." }
      ]
    },
    verbs: [
      { en: "would have done", ru: "был бы сделал", tr: "/wʊd hæv dʌn/", ex: "I would have helped you." },
      { en: "might have done", ru: "мог бы сделать", tr: "/maɪt hæv dʌn/", ex: "I might have made a mistake." },
      { en: "should have done", ru: "следовало бы сделать", tr: "/ʃʊd hæv dʌn/", ex: "You should have studied more." },
      { en: "must have done", ru: "должно быть сделал", tr: "/mʌst hæv dʌn/", ex: "You must have been tired." },
      { en: "can't have done", ru: "не могло быть сделано", tr: "/kænt hæv dʌn/", ex: "He can't have done that." },
      { en: "needn't have done", ru: "не нужно было делать", tr: "/ˈniːdnt hæv dʌn/", ex: "You needn't have come early." },
      { en: "ought to have done", ru: "следовало бы сделать", tr: "/ˈɔːt tuː hæv dʌn/", ex: "You ought to have called." },
      { en: "used to doing", ru: "привык к деланию", tr: "/juːst tuː ˈduːɪŋ/", ex: "I'm used to getting up early." },
      { en: "be supposed to", ru: "должен", tr: "/biː səˈpoʊzd tuː/", ex: "You're supposed to be here at 9." },
      { en: "be meant to", ru: "предназначен для", tr: "/biː ment tuː/", ex: "This book is meant for beginners." },
      { en: "be likely to", ru: "вероятно", tr: "/biː ˈlaɪkli tuː/", ex: "He's likely to win." },
      { en: "be unlikely to", ru: "маловероятно", tr: "/biː ʌnˈlaɪkli tuː/", ex: "It's unlikely to rain." }
    ],
    grammar: [
      {
        title: "Conditionals (0, 1, 2, 3, Mixed)",
        rule: "0: If + Present Simple, Present Simple (fact/habit)\n1: If + Present Simple, will + V (possible future)\n2: If + Past Simple, would + V (unlikely present)\n3: If + Past Perfect, would have + V3 (impossible past)\nMixed: If + Past Perfect, would + V (3→2)",
        tip: "⚠️ Don't use 'will' after 'if' in 1st conditional!",
        examples: [
          ["If you heat water, it boils.", "Если нагреть воду, она закипает (0)."],
          ["If it rains tomorrow, we'll stay home.", "Если завтра пойдёт дождь, мы останемся дома (1)."],
          ["If I had more time, I'd learn Spanish.", "Если бы у меня было больше времени, я бы учил испанский (2)."],
          ["If I had known, I would have told you.", "Если бы я знал, я бы сказал тебе (3)."],
          ["If I had studied harder, I would have passed.", "Если бы я учился лучше, я бы сдал (3)."]
        ]
      },
      {
        title: "Passive Voice",
        rule: "Active: Subject does action\nPassive: Subject receives action\nForm: Be + Past Participle (V3)\nTenses change: Present Simple → is/are + V3, Past Simple → was/were + V3, etc.",
        tip: "✅ Use 'by' to say who did the action!",
        examples: [
          ["The book was written by Orwell.", "Книга была написана Оруэллом."],
          ["My bike was stolen.", "Мой велосипед украли."],
          ["The meeting will be held tomorrow.", "Собрание будет завтра."],
          ["The house has been sold.", "Дом уже продан."],
          ["Cars are made in factories.", "Машины делают на заводах."]
        ]
      },
      {
        title: "Modal Perfects (should have, could have, etc.)",
        rule: "Use to talk about past situations:\n- Should have: regret/unfulfilled obligation\n- Could have: missed opportunity\n- Must have: certainty about past\n- Can't have: impossibility",
        tip: "🤔 Add 'have' + V3 after modal verbs!",
        examples: [
          ["You should have studied more!", "Тебе следовало бы учиться больше!"],
          ["We could have gone to the beach.", "Мы могли бы поехать на пляж."],
          ["He must have forgotten.", "Он, должно быть, забыл."],
          ["She can't have left yet.", "Она ещё не могла уйти."],
          ["They might have missed the train.", "Они, возможно, опоздали на поезд."]
        ]
      },
      {
        title: "Reported Speech",
        rule: "When we tell what someone else said:\n- Tenses go back (Present → Past, Past → Past Perfect)\n- Pronouns and place/time words change (this → that, today → that day, etc.)\n- Questions become statements",
        tip: "📜 Use 'that' or omit it after reporting verbs!",
        examples: [
          ["He said, 'I love pizza.' → He said (that) he loved pizza.", "Он сказал, что любит пиццу."],
          ["She asked, 'Are you coming?' → She asked if/whether I was coming.", "Она спросила, приду ли я."],
          ["They said, 'We'll be late.' → They said (that) they would be late.", "Они сказали, что опоздают."],
          ["I told him, 'Don't go.' → I told him not to go.", "Я сказал ему не идти."],
          ["He asked, 'Where is the bank?' → He asked where the bank was.", "Он спросил, где банк."]
        ]
      },
      {
        title: "-ed/-ing Adjectives",
        rule: "-ed: describes how someone feels (I'm bored)\n-ing: describes what causes the feeling (The book is boring)",
        tip: "🎯 -ed = feeling, -ing = thing that causes it!",
        examples: [
          ["I'm interested in this movie.", "Мне интересен этот фильм."],
          ["The movie is interesting.", "Фильм интересный."],
          ["She's tired.", "Она устала."],
          ["The long day was tiring.", "Длинный день был утомительным."],
          ["He's excited about the trip.", "Он радуется поездке."]
        ]
      }
    ],
    dialogues: [
      {
        title: "Hypothetical situations",
        desc: "Talking about what if...",
        msgs: [
          { s: "left", av: "💭", en: "What would you do if you won the lottery?", ru: "Что бы ты сделал, если бы выиграл лотерею?" },
          { s: "right", av: "👤", en: "If I won, I'd buy a house and travel.", ru: "Если бы я выиграл, я бы купил дом и путешествовал." },
          { s: "left", av: "💭", en: "Nice! I wish I could travel more too.", ru: "Круто! Я бы тоже хотел больше путешествовать." },
          { s: "right", av: "👤", en: "It's time we planned our next trip, don't you think?", ru: "Пора нам спланировать следующую поездку, как ты думаешь?" }
        ]
      },
      {
        title: "Talking about a mistake",
        desc: "Regretting a past action",
        msgs: [
          { s: "left", av: "😕", en: "I missed the meeting this morning.", ru: "Я пропустил собрание сегодня утром." },
          { s: "right", av: "👤", en: "Oh no! What happened?", ru: "О нет! Что случилось?" },
          { s: "left", av: "😕", en: "I woke up late. I should have set my alarm.", ru: "Я поздно проснулся. Мне следовало поставить будильник." },
          { s: "right", av: "👤", en: "Don't worry! They said it was recorded anyway.", ru: "Не волнуйся! Они сказали, что всё записали." }
        ]
      }
    ],
    fillEx: [
      { s: "If I ___ (have) more time, I'd learn Chinese.", b: "had", h: "2nd conditional: Past Simple" },
      { s: "You ___ (should / study) more for the test!", b: "should have studied", h: "Modal perfect" },
      { s: "This book ___ (write) in 1984.", b: "was written", h: "Passive voice" },
      { s: "I'm so ___ (interest) in this course!", b: "interested", h: "-ed adjective" },
      { s: "I wish I ___ (can) speak Japanese!", b: "could", h: "Wish + Past Simple" }
    ],
    schedule: [
      { day: "Пн", title: "Conditionals (0, 1)", lessons: ["0 conditional (facts)", "1 conditional (future)", "Practice dialogues"], topics: ["basic conditionals"] },
      { day: "Вт", title: "Conditionals (2, 3)", lessons: ["2 conditional (unlikely)", "3 conditional (impossible)", "Mixed conditionals"], topics: ["advanced conditionals"] },
      { day: "Ср", title: "Passive Voice", lessons: ["Passive forms", "Tenses in passive", "Active ↔ Passive"], topics: ["passive voice"] },
      { day: "Чт", title: "Modal Perfects", lessons: ["Should have / Could have", "Must have / Can't have", "Regrets and deductions"], topics: ["modal perfects"] },
      { day: "Пт", title: "Reported Speech", lessons: ["Reported statements", "Reported questions", "Reported commands"], topics: ["reported speech"] },
      { day: "Сб", title: "Vocabulary + Phrasal Verbs", lessons: ["Complex ideas vocab", "Phrasal verbs B2", "Collocations practice"], topics: ["vocabulary B2"] },
      { day: "Вс", title: "Review + Test", lessons: ["Review all B2 grammar", "Full vocabulary review", "B2 practice test"], topics: ["B2 review"] }
    ]
  },

  C1: {
    color: "#f0b429",
    name: "Advanced",
    vocab: {
      "Академическая лексика": [
        { en: "analyze", ru: "анализировать", tr: "/ˈænəlaɪz/", ex: "We need to analyze the data." },
        { en: "evaluate", ru: "оценивать", tr: "/ɪˈvæljueɪt/", ex: "Evaluate the results carefully." },
        { en: "hypothesis", ru: "гипотеза", tr: "/haɪˈpɑːθəsɪs/", ex: "Test your hypothesis." },
        { en: "phenomenon", ru: "явление", tr: "/fəˈnɑːmɪnən/", ex: "Study this phenomenon." },
        { en: "methodology", ru: "методология", tr: "/ˌmeθəˈdɑːlədʒi/", ex: "Explain your methodology." },
        { en: "significant", ru: "значимый", tr: "/sɪɡˈnɪfɪkənt/", ex: "The results are significant." },
        { en: "substantial", ru: "существенный", tr: "/səbˈstænʃl/", ex: "We made substantial progress." },
        { en: "consistent", ru: "последовательный", tr: "/kənˈsɪstənt/", ex: "Be consistent in your work." },
        { en: "implication", ru: "последствие", tr: "/ˌɪmplɪˈkeɪʃn/", ex: "Consider the implications." },
        { en: "inference", ru: "вывод", tr: "/ˈɪnfərəns/", ex: "Draw your own inferences." },
        { en: "constraint", ru: "ограничение", tr: "/kənˈstreɪnt/", ex: "There are time constraints." },
        { en: "paradigm", ru: "парадигма", tr: "/ˈperədaɪm/", ex: "Shift in paradigm." },
        { en: "empirical", ru: "эмпирический", tr: "/ɪmˈpɪrɪkl/", ex: "Empirical evidence is needed." },
        { en: "theoretical", ru: "теоретический", tr: "/ˌθiːəˈretɪkl/", ex: "Theoretical framework." },
        { en: "assumption", ru: "предположение", tr: "/əˈsʌmpʃn/", ex: "Challenge your assumptions." },
        { en: "correlation", ru: "корреляция", tr: "/ˌkɔːrəˈleɪʃn/", ex: "Correlation doesn't mean causation." },
        { en: "variable", ru: "переменная", tr: "/ˈveriəbl/", ex: "Control your variables." },
        { en: "quantitative", ru: "количественный", tr: "/ˈkwɑːntəteɪtɪv/", ex: "Quantitative analysis." },
        { en: "qualitative", ru: "качественный", tr: "/ˈkwɑːləteɪtɪv/", ex: "Qualitative research." },
        { en: "validity", ru: "валидность", tr: "/vəˈlɪdəti/", ex: "Check the validity." },
        { en: "reliability", ru: "надежность", tr: "/rɪˌlaɪəˈbɪləti/", ex: "Test reliability." }
      ],
      "Идиомы и фиксированные выражения": [
        { en: "break a leg", ru: "удачи", tr: "/breɪk ə leɡ/", ex: "You're performing tonight? Break a leg!" },
        { en: "piece of cake", ru: "пустяк", tr: "/piːs əv keɪk/", ex: "The exam was a piece of cake!" },
        { en: "cost an arm and a leg", ru: "стоить целое состояние", tr: "/kɔːst ən ɑːrm ænd ə leɡ/", ex: "That car costs an arm and a leg." },
        { en: "hit the hay", ru: "идти спать", tr: "/hɪt ðə heɪ/", ex: "I'm tired, I'm going to hit the hay." },
        { en: "hit the nail on the head", ru: "попасть в точку", tr: "/hɪt ðə neɪl ɑːn ðə hed/", ex: "You hit the nail on the head!" },
        { en: "once in a blue moon", ru: "очень редко", tr: "/wʌns ɪn ə bluː muːn/", ex: "He visits once in a blue moon." },
        { en: "cut corners", ru: "халтурить", tr: "/kʌt ˈkɔːrnərz/", ex: "Don't cut corners on quality." },
        { en: "piece of the pie", ru: "доля", tr: "/piːs əv ðə paɪ/", ex: "Everyone wants a piece of the pie." },
        { en: "break the ice", ru: "разговорить компанию", tr: "/breɪk ðə aɪs/", ex: "A joke can break the ice." },
        { en: "the best of both worlds", ru: "лучшее из обоих миров", tr: "/ðə best əv boʊθ wɜːrldz/", ex: "Working from home is the best of both worlds." },
        { en: "burn the midnight oil", ru: "работать допоздна", tr: "/bɜːrn ðə ˈmɪdnaɪt ɔɪl/", ex: "I had to burn the midnight oil." },
        { en: "under the weather", ru: "неважно себя чувствовать", tr: "/ˈʌndər ðə ˈweðər/", ex: "I'm feeling under the weather." },
        { en: "break even", ru: "выходить в ноль", tr: "/breɪk ˈiːvən/", ex: "We finally broke even this year." },
        { en: "call it a day", ru: "закончить на сегодня", tr: "/kɔːl ɪt ə deɪ/", ex: "Let's call it a day, we're done." },
        { en: "devil's advocate", ru: "адвокат дьявола", tr: "/ˈdevəlz ˈædvəkət/", ex: "Let me play devil's advocate." },
        { en: "the ball is in your court", ru: "ход за тобой", tr: "/ðə bɔːl ɪz ɪn jɔːr kɔːrt/", ex: "Now the ball is in your court." },
        { en: "a piece of cake", ru: "пустяк", tr: "/piːs əv keɪk/", ex: "It's not hard, it's a piece of cake." },
        { en: "the elephant in the room", ru: "неговорящая проблема", tr: "/ði ˈelɪfənt ɪn ðə ruːm/", ex: "Let's address the elephant in the room." },
        { en: "when pigs fly", ru: "когда рак на горе свистнет", tr: "/wen pɪɡz flaɪ/", ex: "He'll do that when pigs fly!" },
        { en: "hold your horses", ru: "потерпи", tr: "/hoʊld jɔːr ˈhɔːrsɪz/", ex: "Hold your horses, we're not ready!" },
        { en: "kill two birds with one stone", ru: "убить двух зайцев", tr: "/kɪl tuː bɜːrdz wɪð wʌn stoʊn/", ex: "Let's kill two birds with one stone." }
      ],
      "Контекстные синонимы": [
        { en: "big", ru: "большой", tr: "/bɪɡ/", ex: "A big house (general)" },
        { en: "large", ru: "большой", tr: "/lɑːrdʒ/", ex: "A large amount (quantity)" },
        { en: "huge", ru: "огромный", tr: "/hjuːdʒ/", ex: "A huge mistake (emphasis)" },
        { en: "vast", ru: "обширный", tr: "/væst/", ex: "A vast desert (area)" },
        { en: "enormous", ru: "колоссальный", tr: "/ɪˈnɔːrməs/", ex: "An enormous dinosaur (size)" },
        { en: "happy", ru: "счастливый", tr: "/ˈhæpi/", ex: "Feeling happy (general)" },
        { en: "delighted", ru: "восторженный", tr: "/dɪˈlaɪtɪd/", ex: "I'm delighted to hear (formal)" },
        { en: "pleased", ru: "довольный", tr: "/pliːzd/", ex: "Pleased to meet you (polite)" },
        { en: "thrilled", ru: "в восторге", tr: "/θrɪld/", ex: "Thrilled with the gift (emotional)" },
        { en: "sad", ru: "грустный", tr: "/sæd/", ex: "Feeling sad (general)" },
        { en: "depressed", ru: "депрессивный", tr: "/dɪˈprest/", ex: "Feeling depressed (clinical)" },
        { en: "sorrowful", ru: "печальный", tr: "/ˈsɑːroʊfl/", ex: "Sorrowful news (formal)" },
        { en: "upset", ru: "расстроенный", tr: "/ʌpˈset/", ex: "I'm upset about it (emotional)" },
        { en: "important", ru: "важный", tr: "/ɪmˈpɔːrtənt/", ex: "Important meeting (general)" },
        { en: "vital", ru: "жизненно важный", tr: "/ˈvaɪtl/", ex: "Vital information (critical)" },
        { en: "crucial", ru: "решающий", tr: "/ˈkruːʃl/", ex: "Crucial decision (key)" },
        { en: "essential", ru: "необходимый", tr: "/ɪˈsenʃl/", ex: "Essential supplies (necessary)" }
      ],
      "Разговорные выражения": [
        { en: "you know", ru: "знаете ли", tr: "/juː noʊ/", ex: "I was, you know, a bit nervous." },
        { en: "I mean", ru: "я имею в виду", tr: "/aɪ miːn/", ex: "I mean, it's not that bad." },
        { en: "sort of", ru: "вроде", tr: "/sɔːrt əv/", ex: "I'm sort of tired." },
        { en: "kind of", ru: "вроде", tr: "/kaɪnd əv/", ex: "It's kind of cold today." },
        { en: "like", ru: "типа", tr: "/laɪk/", ex: "And I was, like, so surprised!" },
        { en: "basically", ru: "в основном", tr: "/ˈbeɪsɪkli/", ex: "Basically, we need to do more work." },
        { en: "actually", ru: "на самом деле", tr: "/ˈæktʃuəli/", ex: "Actually, I disagree." },
        { en: "literally", ru: "буквально", tr: "/ˈlɪtərəli/", ex: "I'm literally dying of laughter!" },
        { en: "pretty much", ru: "почти", tr: "/ˈprɪti mʌtʃ/", ex: "That's pretty much it." },
        { en: "as well", ru: "также", tr: "/æz wel/", ex: "I like it as well." },
        { en: "on the other hand", ru: "с другой стороны", tr: "/ɑːn ði ˈʌðər hænd/", ex: "It's expensive, but on the other hand, it's good." },
        { en: "at the end of the day", ru: "в итоге", tr: "/æt ði end əv ðə deɪ/", ex: "At the end of the day, it's your decision." },
        { en: "for what it's worth", ru: "к чему там", tr: "/fər hwət ɪts wɜːrθ/", ex: "For what it's worth, I believe you." },
        { en: "to be honest", ru: "если честно", tr: "/tuː bi ˈɑːnɪst/", ex: "To be honest, I don't like it." },
        { en: "in my opinion", ru: "по моему мнению", tr: "/ɪn maɪ əˈpɪnjən/", ex: "In my opinion, it's too expensive." },
        { en: "as far as I'm concerned", ru: "насколько меня касается", tr: "/æz fɑːr æz aɪm kənˈsɜːrnd/", ex: "As far as I'm concerned, it's fine." }
      ]
    },
    verbs: [
      { en: "anticipate", ru: "предвидеть", tr: "/ænˈtɪsɪpeɪt/", ex: "I anticipate some problems." },
      { en: "acknowledge", ru: "признавать", tr: "/əkˈnɑːlɪdʒ/", ex: "He acknowledged his mistake." },
      { en: "compensate", ru: "компенсировать", tr: "/ˈkɑːmpənseɪt/", ex: "We'll compensate you for damage." },
      { en: "cooperate", ru: "сотрудничать", tr: "/koʊˈɑːpəreɪt/", ex: "Please cooperate with us." },
      { en: "demonstrate", ru: "демонстрировать", tr: "/ˈdemənstreɪt/", ex: "Can you demonstrate how it works?" },
      { en: "emphasize", ru: "подчёркивать", tr: "/ˈemfəsaɪz/", ex: "I want to emphasize this point." },
      { en: "establish", ru: "устанавливать", tr: "/ɪˈstæblɪʃ/", ex: "We need to establish rules." },
      { en: "justify", ru: "оправдывать", tr: "/ˈdʒʌstɪfaɪ/", ex: "Can you justify your actions?" },
      { en: "negotiate", ru: "вести переговоры", tr: "/nɪˈɡoʊʃieɪt/", ex: "We need to negotiate a deal." },
      { en: "persist", ru: "настаивать", tr: "/pərˈsɪst/", ex: "If you persist, you'll succeed." },
      { en: "validate", ru: "подтверждать", tr: "/ˈvælɪdeɪt/", ex: "We need to validate your ticket." },
      { en: "integrate", ru: "интегрировать", tr: "/ˈɪntɪɡreɪt/", ex: "Integrate the new system." },
      { en: "facilitate", ru: "облегчать", tr: "/fəˈsɪlɪteɪt/", ex: "This tool will facilitate the process." },
      { en: "prioritize", ru: "определять приоритеты", tr: "/praɪˈɔːrətaɪz/", ex: "Prioritize your tasks." },
      { en: "differentiate", ru: "различать", tr: "/ˌdɪfəˈrenʃieɪt/", ex: "Can you differentiate between them?" },
      { en: "optimize", ru: "оптимизировать", tr: "/ˈɑːptɪmaɪz/", ex: "Optimize your workflow." },
      { en: "utilize", ru: "использовать", tr: "/ˈjuːtəlaɪz/", ex: "Utilize all available resources." },
      { en: "consolidate", ru: "консолидировать", tr: "/kənˈsɑːlɪdeɪt/", ex: "Consolidate your debts." },
      { en: "incentivize", ru: "стимулировать", tr: "/ɪnˈsentɪvaɪz/", ex: "Incentivize employees to perform better." },
      { en: "mitigate", ru: "сглаживать", tr: "/ˈmɪtɪɡeɪt/", ex: "Mitigate the risks." }
    ],
    grammar: [
      {
        title: "Inversion",
        rule: "Reverse subject and verb in certain cases:\n- After negative adverbs (Never, Rarely, Hardly, Scarcely, etc.)\n- Only + preposition/phrase (Only then, Only after, Only when)\n- Conditional sentences without 'if' (Had I known, Were I you)",
        tip: "⚠️ Inversion sounds formal! Don't overuse.",
        examples: [
          ["Never have I seen such a thing.", "Никогда я не видел такого."],
          ["Only then did I realize.", "Только тогда я понял."],
          ["Hardly had she left when it started.", "Она едва ушла, как всё началось."],
          ["Were I you, I'd leave now.", "На твоём месте я бы сейчас ушёл."],
          ["Had I known, I would have helped.", "Если бы я знал, я бы помог."]
        ]
      },
      {
        title: "Participle Clauses",
        rule: "Clauses starting with -ing or -ed that replace longer relative clauses:\n- Active: -ing\n- Passive: -ed",
        tip: "✨ Makes your writing more concise and formal!",
        examples: [
          ["Being tired, I went to bed early.", "Будучи усталым, я рано лег спать."],
          ["Having finished, I left.", "Закончив, я ушёл."],
          ["Written in 1984, the book is a classic.", "Написанная в 1984 году, книга является классикой."],
          ["Walking down the street, she saw her friend.", "Идя по улице, она увидела подругу."],
          ["The man wearing a hat is my boss.", "Мужчина в шляпе — мой начальник."]
        ]
      },
      {
        title: "Cleft Sentences (It was... that..., What... is...)",
        rule: "Emphasize a part of the sentence:\n- It + be + emphasized part + that/who + rest\n- What + clause + be + emphasized part",
        tip: "🎯 Great for emphasis in writing and speaking!",
        examples: [
          ["It was John who broke the window.", "Это Джон разбил окно."],
          ["It was in Paris that I met her.", "Это в Париже я с ней встретился."],
          ["What I need is a vacation.", "Чего мне нужно — это отпуск."],
          ["What I really like is the food.", "Чего мне действительно нравится — это еда."],
          ["It was not until yesterday that I heard.", "Только вчера я услышал."]
        ]
      },
      {
        title: "Subjunctive Mood (Advanced)",
        rule: "Formal subjunctive: base verb (be, have, go) for all subjects:\n- After verbs like suggest, demand, propose, insist\n- After phrases like It's essential/important/vital that...\n- As if / as though clauses",
        tip: "📜 Formal in English, more common in writing!",
        examples: [
          ["I suggest that he go now.", "Я предлагаю ему идти сейчас."],
          ["It's essential that she be present.", "Важно, чтобы она присутствовала."],
          ["They insisted that we stay.", "Они настояли, чтобы мы остались."],
          ["She looks as if she were tired.", "Она выглядит так, как будто устала."],
          ["The manager demanded that everyone attend.", "Менеджер потребовал, чтобы все присутствовали."]
        ]
      }
    ],
    dialogues: [
      {
        title: "Formal discussion",
        desc: "Discussing a project at work",
        msgs: [
          { s: "left", av: "👔", en: "To address the elephant in the room, sales are down this quarter.", ru: "Чтобы пообщаться о неудобном — продажи в этом квартале падают." },
          { s: "right", av: "👤", en: "What do you propose we do?", ru: "Что ты предлагаешь сделать?" },
          { s: "left", av: "👔", en: "I suggest we optimize our marketing strategy and focus on retention.", ru: "Я предлагаю оптимизировать маркетинговую стратегию и сосредоточиться на удержании клиентов." },
          { s: "right", av: "👤", en: "Fair enough. Let's prioritize that and see.", ru: "Ладно. Давай поставим это в приоритет и посмотрим." }
        ]
      }
    ],
    fillEx: [
      { s: "Never ___ (I / see) such a beautiful sunset!", b: "have I seen", h: "Negative inversion" },
      { s: "It was John ___ broke the window.", b: "who / that", h: "Cleft sentence" },
      { s: "I suggest that he ___ (leave) now.", b: "leave", h: "Subjunctive mood" },
      { s: "___ (finish) my work, I went home.", b: "Having finished", h: "Participle clause" },
      { s: "What I need ___ a cup of coffee!", b: "is", h: "What-clause" }
    ],
    schedule: [
      { day: "Пн", title: "Inversion", lessons: ["Negative adverbs inversion", "Only inversion", "Conditional inversion"], topics: ["inversion C1"] },
      { day: "Вт", title: "Participle Clauses", lessons: ["-ing participles", "-ed participles", "Perfect participles"], topics: ["participle clauses"] },
      { day: "Ср", title: "Cleft Sentences", lessons: ["It... that...", "What... is...", "Emphasizing techniques"], topics: ["cleft sentences"] },
      { day: "Чт", title: "Subjunctive Mood", lessons: ["Formal subjunctive", "It's essential that...", "As if / as though"], topics: ["subjunctive C1"] },
      { day: "Пт", title: "Academic Vocab", lessons: ["Academic words", "Collocations C1", "Paraphrasing"], topics: ["C1 vocabulary"] },
      { day: "Сб", title: "Idioms & Colloquialisms", lessons: ["Common idioms C1", "Colloquial phrases", "Register practice"], topics: ["C1 idioms"] },
      { day: "Вс", title: "C1 Review & Test", lessons: ["All C1 grammar review", "Vocabulary review", "Practice test C1"], topics: ["C1 review"] }
    ]
  },

  C2: {
    color: "#f05252",
    name: "Mastery",
    vocab: {
      "Элегантная лексика": [
        { en: "ubiquitous", ru: "вездесущий", tr: "/juːˈbɪkwɪtəs/", ex: "Smartphones are ubiquitous now." },
        { en: "serendipity", ru: "случайное открытие", tr: "/ˌserənˈdɪpəti/", ex: "It was pure serendipity!" },
        { en: "ephemeral", ru: "кратковременный", tr: "/ɪˈfemərəl/", ex: "Fame can be ephemeral." },
        { en: "eloquent", ru: "красноречивый", tr: "/ˈeləkwənt/", ex: "She's an eloquent speaker." },
        { en: "ambiguous", ru: "неоднозначный", tr: "/æmˈbɪɡjuəs/", ex: "The instructions are ambiguous." },
        { en: "perspicacious", ru: "проницательный", tr: "/ˌpɜːrspɪˈkeɪʃəs/", ex: "He made a perspicacious observation." },
        { en: "melancholy", ru: "меланхоличный", tr: "/ˈmelənkɑːli/", ex: "A melancholy feeling." },
        { en: "whimsical", ru: "причудливый", tr: "/ˈwɪmzɪkl/", ex: "A whimsical story." },
        { en: "pragmatic", ru: "прагматичный", tr: "/præɡˈmætɪk/", ex: "A pragmatic approach." },
        { en: "meticulous", ru: "тщательный", tr: "/məˈtɪkjələs/", ex: "Meticulous attention to detail." },
        { en: "resilient", ru: "прочный", tr: "/rɪˈzɪliənt/", ex: "She's very resilient." },
        { en: "fortuitous", ru: "случайный", tr: "/fɔːrˈtuːɪtəs/", ex: "A fortuitous meeting." },
        { en: "esoteric", ru: "эзотерический", tr: "/ˌesəˈterɪk/", ex: "Esoteric knowledge." },
        { en: "quintessential", ru: "квинтэссенция", tr: "/ˌkwɪntɪˈsenʃl/", ex: "He's the quintessential gentleman." },
        { en: "eloquence", ru: "красноречие", tr: "/ˈeləkwəns/", ex: "Eloquent speech." },
        { en: "serenity", ru: "безмятежность", tr: "/səˈrenəti/", ex: "The lake offered serenity." },
        { en: "vulnerable", ru: "уязвимый", tr: "/ˈvʌlnərəbl/", ex: "Be vulnerable sometimes." },
        { en: "resolute", ru: "решительный", tr: "/ˈrezəluːt/", ex: "Resolute in his beliefs." },
        { en: "nostalgic", ru: "ностальгичный", tr: "/nəˈstældʒɪk/", ex: "Nostalgic memories." },
        { en: "ambivalent", ru: "двоякий", tr: "/æmˈbɪvələnt/", ex: "I feel ambivalent about it." }
      ],
      "Идиомы C2": [
        { en: "the last straw", ru: "последняя капля", tr: "/ðə læst strɔː/", ex: "That was the last straw!" },
        { en: "bark up the wrong tree", ru: "обращаться не туда", tr: "/bɑːrk ʌp ðə rɔːŋ triː/", ex: "You're barking up the wrong tree!" },
        { en: "bite the bullet", ru: "сделать что-то неприятное", tr: "/baɪt ðə ˈbʊlɪt/", ex: "Just bite the bullet and do it!" },
        { en: "let the cat out of the bag", ru: "разболтать секрет", tr: "/let ðə kæt aʊt əv ðə bæɡ/", ex: "Who let the cat out of the bag?" },
        { en: "straight from the horse's mouth", ru: "из первых рук", tr: "/streɪt frəm ðə ˈhɔːrsɪz maʊθ/", ex: "I heard it straight from the horse's mouth!" },
        { en: "the whole nine yards", ru: "все возможное", tr: "/ðə hoʊl naɪn jɑːrdz/", ex: "We went the whole nine yards!" },
        { en: "cut to the chase", ru: "переходить к главному", tr: "/kʌt tuː ðə tʃeɪs/", ex: "Let's cut to the chase!" },
        { en: "go the extra mile", ru: "пойти на дополнительные усилия", tr: "/ɡoʊ ði ˈekstrə maɪl/", ex: "He always goes the extra mile." },
        { en: "hit the sack", ru: "идти спать", tr: "/hɪt ðə sæk/", ex: "I'm tired, let's hit the sack!" },
        { en: "think outside the box", ru: "думать нешаблонно", tr: "/θɪŋk ˌaʊtˈsaɪd ðə bɑːks/", ex: "We need to think outside the box!" },
        { en: "pull someone's leg", ru: "шутить над кем-то", tr: "/pʊl ˈsʌmwʌnz leɡ/", ex: "I'm just pulling your leg!" },
        { en: "cry over spilt milk", ru: "плакать о испорченном молоке", tr: "/kraɪ ˈoʊvər spɪlt mɪlk/", ex: "Don't cry over spilt milk!" },
        { en: "piece of cake", ru: "пустяк", tr: "/piːs əv keɪk/", ex: "That's a piece of cake!" },
        { en: "break the ice", ru: "разговорить компанию", tr: "/breɪk ðə aɪs/", ex: "Let's break the ice with a joke!" },
        { en: "cost an arm and a leg", ru: "стоить целое состояние", tr: "/kɔːst ən ɑːrm ænd ə leɡ/", ex: "That costs an arm and a leg!" },
        { en: "hit the nail on the head", ru: "попасть в точку", tr: "/hɪt ðə neɪl ɑːn ðə hed/", ex: "You hit the nail on the head!" }
      ],
      "Коллокации C2": [
        { en: "commit to memory", ru: "запоминать", tr: "/kəˈmɪt tuː ˈmeməri/", ex: "Commit this rule to memory." },
        { en: "draw a distinction", ru: "проводить различие", tr: "/drɔː ə dɪˈstɪŋkʃn/", ex: "We must draw a distinction." },
        { en: "take into account", ru: "принимать во внимание", tr: "/teɪk ˈɪntuː əˈkaʊnt/", ex: "Take that into account." },
        { en: "bear in mind", ru: "иметь в виду", tr: "/ber ɪn maɪnd/", ex: "Bear that in mind." },
        { en: "place emphasis on", ru: "акцентировать внимание на", tr: "/pleɪs ˈemfəsɪs ɑːn/", ex: "Place emphasis on quality." },
        { en: "come to terms with", ru: "смириться с", tr: "/kʌm tuː tɜːrmz wɪð/", ex: "I've come to terms with it." },
        { en: "have a crack at", ru: "попробовать", tr: "/hæv ə kræk æt/", ex: "Let me have a crack at it!" },
        { en: "give someone the benefit of the doubt", ru: "дать человеку шанс", tr: "/ɡɪv ˈsʌmwʌn ðə ˈbenɪfɪt əv ðə daʊt/", ex: "I'll give you the benefit of the doubt." },
        { en: "call the shots", ru: "решать всё", tr: "/kɔːl ðə ʃɑːts/", ex: "He likes to call the shots." },
        { en: "keep your chin up", ru: "не унывать", tr: "/kiːp jɔːr tʃɪn ʌp/", ex: "Keep your chin up!" },
        { en: "break a leg", ru: "удачи", tr: "/breɪk ə leɡ/", ex: "Break a leg tonight!" },
        { en: "cut corners", ru: "халтурить", tr: "/kʌt ˈkɔːrnərz/", ex: "Don't cut corners!" },
        { en: "jump to conclusions", ru: "поспешно выводить", tr: "/dʒʌmp tuː kənˈkluːʒn/", ex: "Don't jump to conclusions!" },
        { en: "beat around the bush", ru: "говорить окольными путями", tr: "/biːt əˈraʊnd ðə bʊʃ/", ex: "Stop beating around the bush!" }
      ]
    },
    verbs: [
      { en: "reciprocate", ru: "отвечать тем же", tr: "/rɪˈsɪprəkeɪt/", ex: "Will they reciprocate?" },
      { en: "galvanize", ru: "подбодрять", tr: "/ˈɡælvənaɪz/", ex: "The speech galvanized the crowd." },
      { en: "circumvent", ru: "обходить", tr: "/ˌsɜːrkəmˈvent/", ex: "Circumvent the rules." },
      { en: "reiterate", ru: "повторять", tr: "/riˈɪtəreɪt/", ex: "Let me reiterate." },
      { en: "delineate", ru: "обрисовывать", tr: "/dɪˈlɪnieɪt/", ex: "Delineate your goals." },
      { en: "perpetuate", ru: "увековечать", tr: "/pərˈpetʃueɪt/", ex: "Don't perpetuate myths." },
      { en: "exacerbate", ru: "ухудшать", tr: "/ɪɡˈzæsərbeɪt/", ex: "That will exacerbate the problem." },
      { en: "mitigate", ru: "сглаживать", tr: "/ˈmɪtɪɡeɪt/", ex: "Mitigate the damage." },
      { en: "articulate", ru: "говорить ясно", tr: "/ɑːrˈtɪkjəleɪt/", ex: "Articulate your thoughts." },
      { en: "dispel", ru: "развеивать", tr: "/dɪˈspel/", ex: "Dispel the rumors." },
      { en: "induce", ru: "индуцировать", tr: "/ɪnˈduːs/", ex: "Induce sleep." },
      { en: "fluctuate", ru: "колебаться", tr: "/ˈflʌktʃueɪt/", ex: "Prices fluctuate." },
      { en: "deteriorate", ru: "ухудшаться", tr: "/dɪˈtɪriəreɪt/", ex: "Health deteriorated." },
      { en: "ameliorate", ru: "улучшать", tr: "/əˈmiːliəreɪt/", ex: "Ameliorate conditions." },
      { en: "exemplify", ru: "иллюстрировать", tr: "/ɪɡˈzemplɪfaɪ/", ex: "Exemplify excellence." },
      { en: "fortify", ru: "укреплять", tr: "/ˈfɔːrtɪfaɪ/", ex: "Fortify defenses." }
    ],
    grammar: [
      {
        title: "Absolute Constructions",
        rule: "A noun + participle (no conjunction!): Used to give extra information, especially in writing.",
        tip: "📖 Very literary! Used in novels and formal texts.",
        examples: [
          ["The weather being good, we went for a walk.", "Погода была хорошая, мы пошли гулять."],
          ["All things considered, it's okay.", "Все вещи учтены, всё нормально."],
          ["The meeting having finished, we left.", "Собрание закончилось, мы ушли."],
          ["His work done, he relaxed.", "Его работа была сделана, он расслабился."],
          ["The kids were sleeping, we watched a movie.", "Дети спали, мы смотрели фильм."]
        ]
      },
      {
        title: "Advanced Ellipsis",
        rule: "Leave out repeated words to sound natural:\n- Question tags (..., isn't he?)\n- So/Neither/Nor for agreements\n- Short answers",
        tip: "💬 Makes your speech flow better!",
        examples: [
          ["She likes coffee, and so do I.", "Она любит кофе, и я тоже."],
          ["He doesn't like tea, and neither does she.", "Он не любит чай, и она тоже."],
          ["'Did you go?' 'Yes, I did.'", "'Ты ходил?' 'Да.'" ],
          ["'Are you tired?' 'A little.'", "'Ты устал?' 'Немного.'" ],
          ["He plays tennis, but he doesn't like it.", "Он играет в теннис, но не любит это."]
        ]
      },
      {
        title: "Contractions in Context",
        rule: "When to use contractions (I'm, don't) and when not to (formal writing)",
        tip: "📝 Formal writing: avoid contractions! Informal/speaking: use freely!",
        examples: [
          ["I'm going to the store. (informal)", "Я иду в магазин."],
          ["I am going to the store. (formal)", "Я иду в магазин."],
          ["Don't forget! (speaking)", "Не забывай!"],
          ["Do not forget. (written notice)", "Не забывайте!"],
          ["It's a beautiful day! (informal)", "Красивый день!"],
          ["It is a beautiful day. (formal)", "День прекрасный."]
        ]
      }
    ],
    dialogues: [
      {
        title: "C2-level discussion",
        desc: "Nuanced conversation about society",
        msgs: [
          { s: "left", av: "🗣️", en: "To what extent do you think social media has exacerbated polarization?", ru: "Как сильно ты думаешь, что соцсети усугубили поляризацию?" },
          { s: "right", av: "👤", en: "Well, it's a double-edged sword—it's ubiquitous, but we have to be careful not to jump to conclusions.", ru: "Ну, это палка о двух концах — он вездесущий, но нужно быть осторожными, не делать поспешных выводов." },
          { s: "left", av: "🗣️", en: "I concur! We must draw a distinction between misinformation and genuine debate, and bear in mind that it's complicated.", ru: "Согласен! Нужно проводить различие между дезинформацией и подлинной дискуссией, и помнить, что всё сложно." },
          { s: "right", av: "👤", en: "Very perspicacious! Let's think outside the box to find solutions that ameliorate the situation.", ru: "Очень проницательно! Давай думать нешаблонно, чтобы найти решения, которые улучшат ситуацию." }
        ]
      }
    ],
    fillEx: [
      { s: "The weather ___ (be) good, we went out.", b: "being", h: "Absolute construction" },
      { s: "She eats chocolate, and so ___ I!", b: "do", h: "So/Neither agreement" },
      { s: "We must draw a ___ (distinguish) between them.", b: "distinction", h: "Collocation 'draw a distinction'" },
      { s: "This is the ___ (quintessence) of elegance!", b: "quintessential", h: "Adjective form" },
      { s: "Don't cry ___ spilt milk!", b: "over", h: "Idiom" }
    ],
    schedule: [
      { day: "Пн", title: "Absolute Constructions", lessons: ["Noun + -ing/-ed", "Absolute uses in writing", "Literary examples"], topics: ["absolute C2"] },
      { day: "Вт", title: "Advanced Ellipsis", lessons: ["So/Neither", "Short answers", "Contractions"], topics: ["ellipsis C2"] },
      { day: "Ср", title: "Vocab C2 - Elegant Words", lessons: ["Ubiquitous, serendipity...", "Nuanced vocabulary", "Collocations"], topics: ["C2 vocab"] },
      { day: "Чт", title: "Idioms C2", lessons: ["The last straw, bark up wrong tree...", "C2-level idioms", "Practice"], topics: ["C2 idioms"] },
      { day: "Пт", title: "Register & Style", lessons: ["Formal vs informal", "Written vs spoken", "Appropriate word choice"], topics: ["register C2"] },
      { day: "Сб", title: "Practice & Fluency", lessons: ["C2-level discussion", "Debates", "Role-plays"], topics: ["C2 speaking"] },
      { day: "Вс", title: "Final Review & Test", lessons: ["Full C2 review", "Mock proficiency test", "Next steps"], topics: ["C2 review"] }
    ]
  }
};

// --- APPLICATION LOGIC ---
let currentLevel = null;
let currentSection = 'vocab';
window.studiedWords = JSON.parse(localStorage.getItem('studiedWords') || '{}');
window.quizzesTaken = parseInt(localStorage.getItem('quizzesTaken') || '0');
let studiedWords = window.studiedWords; // Local alias
let quizzesTaken = window.quizzesTaken; // Local alias
let vocabFilter = '';
let vocabTopic = 'all';

function openLevel(level) {
  currentLevel = level;
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.documentElement.style.setProperty('--accent', LEVELS[level].color);
  document.getElementById('sb-badge').textContent = level;
  updateAvatarDisplay(); // Update sidebar avatar

  // Written translation task is only available on A1 level
  const trBtn = document.getElementById('nav-translate-btn');
  if (trBtn) trBtn.style.display = (level === 'A1') ? '' : 'none';

  goto('vocab');
  updateStats();
}

function backToLanding() {
  document.getElementById('app').classList.add('hidden');
  document.getElementById('landing').classList.remove('hidden');
}

function goto(section) {
  currentSection = section;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[onclick="goto('${section}')"]`).classList.add('active');
  document.querySelectorAll('#app .page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${section}`).classList.add('active');
  
  // Close sidebar on mobile when a section is chosen
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');
  const btn = document.getElementById('menu-toggle-btn');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    if (btn) btn.classList.remove('open');
  }
  
  switch(section) {
    case 'vocab': renderVocab(); break;
    case 'verbs': renderVerbs(); break;
    case 'grammar': renderGrammar(); break;
    case 'pronunciation': renderPronunciation(); break;
    case 'practice': renderPractice(); break;
    case 'schedule': renderSchedule(); break;
    case 'quiz': startQuiz(); break;
    case 'translate':
      if (currentLevel !== 'A1') { goto('vocab'); break; }
      renderTranslateBlock();
      break;
  }
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('backdrop');
  const btn = document.getElementById('menu-toggle-btn');
  sidebar.classList.toggle('open');
  backdrop.classList.toggle('open');
  if (btn) btn.classList.toggle('open');
}

function updateStats() {
  const levelData = studiedWords[currentLevel] || {};
  const levelVocab = LEVELS[currentLevel]?.vocab || {};
  let total = 0;
  for (const topic in levelVocab) total += levelVocab[topic].length;
  
  let known = 0;
  for (const key in levelData) if (levelData[key]) known++;
  
  document.getElementById('s-lvl').textContent = currentLevel;
  document.getElementById('s-known').textContent = known;
  document.getElementById('s-total').textContent = total;
  document.getElementById('s-tests').textContent = quizzesTaken;
}

function renderVocab() {
  const data = LEVELS[currentLevel];
  if (!data) return;
  
  const topicPills = document.getElementById('topicPills');
  topicPills.innerHTML = '';
  const allPill = document.createElement('button');
  allPill.className = 'pill active';
  allPill.style.background = 'var(--accent)';
  allPill.textContent = 'Все';
  allPill.onclick = () => filterByTopic('all');
  topicPills.appendChild(allPill);
  
  for (const topic in data.vocab) {
    const pill = document.createElement('button');
    pill.className = 'pill';
    pill.textContent = topic;
    pill.onclick = () => filterByTopic(topic);
    topicPills.appendChild(pill);
  }
  
  renderWordGrid();
  updateVocabProgress();
}

function filterByTopic(topic) {
  vocabTopic = topic;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.pill').forEach(p => p.style.background = '');
  const activePill = Array.from(document.querySelectorAll('.pill')).find(p => 
    (topic === 'all' && p.textContent === 'Все') || p.textContent === topic
  );
  if(activePill) {
    activePill.classList.add('active');
    activePill.style.background = 'var(--accent)';
  }
  renderWordGrid();
}

function filterVocab() {
  vocabFilter = document.getElementById('vocabSearch').value.toLowerCase();
  renderWordGrid();
}

function renderWordGrid() {
  const data = LEVELS[currentLevel];
  const grid = document.getElementById('wordGrid');
  grid.innerHTML = '';
  
  for (const topic in data.vocab) {
    if (vocabTopic !== 'all' && vocabTopic !== topic) continue;
    
    data.vocab[topic].forEach((word, idx) => {
      const key = `${topic}-${idx}`;
      const isKnown = studiedWords[currentLevel]?.[key] || false;
      
      if (vocabFilter) {
        const matches = word.en.toLowerCase().includes(vocabFilter) || 
                        word.ru.toLowerCase().includes(vocabFilter) ||
                        word.ex.toLowerCase().includes(vocabFilter);
        if (!matches) return;
      }
      
      const card = document.createElement('div');
      card.className = `word-card ${isKnown ? 'known' : ''}`;
      card.onclick = () => toggleKnown(topic, idx);
      
      card.innerHTML = `
        <div class="wc-top">
          <div class="wc-en">${word.en}</div>
          <button class="wc-sp" onclick="event.stopPropagation(); speak('${word.en}')">🔊</button>
        </div>
        <div class="wc-tr">${word.tr || ''}</div>
        <div class="wc-ru">${word.ru}</div>
        <div class="wc-ex">${word.ex}</div>
        <span class="wc-badge">✓</span>
      `;
      
      grid.appendChild(card);
    });
  }
}

function toggleKnown(topic, idx) {
  if (!studiedWords[currentLevel]) studiedWords[currentLevel] = {};
  const key = `${topic}-${idx}`;
  studiedWords[currentLevel][key] = !studiedWords[currentLevel][key];
  localStorage.setItem('studiedWords', JSON.stringify(studiedWords));
  updateStats();
  renderWordGrid();
  updateVocabProgress();
}

function updateVocabProgress() {
  const data = LEVELS[currentLevel];
  const levelData = studiedWords[currentLevel] || {};
  let total = 0, known = 0;
  
  for (const topic in data.vocab) {
    total += data.vocab[topic].length;
    data.vocab[topic].forEach((_, idx) => {
      if (levelData[`${topic}-${idx}`]) known++;
    });
  }
  
  document.getElementById('progText').textContent = `${known} / ${total}`;
  document.getElementById('progPct').textContent = `${total ? Math.round((known/total)*100) : 0}%`;
  document.getElementById('progFill').style.width = `${total ? Math.round((known/total)*100) : 0}%`;
}

function renderVerbs() {
  const data = LEVELS[currentLevel];
  const tbody = document.getElementById('verbBody');
  tbody.innerHTML = '';
  
  const filter = document.getElementById('verbSearch').value.toLowerCase();
  data.verbs.forEach(v => {
    if (filter && !v.en.toLowerCase().includes(filter) && !v.ru.toLowerCase().includes(filter)) return;
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><b>${v.en}</b> <button class="audio-btn" onclick="speak('${v.en}')">🔊</button></td>
      <td>${v.ru}</td>
      <td>${v.tr || ''}</td>
      <td>${v.ex}</td>
    `;
    tbody.appendChild(row);
  });
}

function filterVerbs() {
  renderVerbs();
}

function renderGrammar() {
  const data = LEVELS[currentLevel];
  const container = document.getElementById('gramContent');
  container.innerHTML = '';
  
  data.grammar.forEach(g => {
    const card = document.createElement('div');
    card.className = 'gram-card';
    
    let examplesHTML = '<div class="gram-examples"><div class="gram-ex-title">Примеры</div>';
    g.examples.forEach(([en, ru]) => {
      examplesHTML += `
        <div class="gram-ex-row">
          <div class="ex-en">${en}</div>
          <div class="ex-ru">${ru}</div>
        </div>`;
    });
    examplesHTML += '</div>';
    
    card.innerHTML = `
      <div class="gram-title">${g.title}</div>
      <div class="gram-rule">${g.rule.replace(/\n/g, '<br>')}</div>
      ${g.tip ? `<div class="gram-tip">💡 ${g.tip}</div>` : ''}
      ${examplesHTML}
    `;
    container.appendChild(card);
  });
}

function renderPronunciation() {
  const container = document.getElementById('phonContent');
  container.innerHTML = `
    <div class="grammar-card">
      <h3>🔊 Произношение</h3>
      <p class="rule-text">Используйте кнопку 🔊 рядом с любым словом, чтобы услышать его произношение! Сервис использует стандартный Speech Synthesis API вашего браузера.</p>
      <h3>Советы по произношению</h3>
      <ul class="examples-list">
        <li><b>/θ/ (think)</b> — язык касается верхних зубов</li>
        <li><b>/ð/ (this)</b> — то же, но голосом</li>
        <li><b>/r/ (red)</b> — не гортанный звук, как в русском</li>
        <li><b>/ɪ/ (it)</b> vs <b>/iː/ (eat)</b> — короткий и долгий звук</li>
        <li><b>/æ/ (cat)</b> — широко открываем рот</li>
      </ul>
    </div>
  `;
}

function renderPractice() {
  renderDialogues();
  renderFillEx();
  renderMatchEx();
  switchPTab('dialogues');
}

function switchPTab(tab) {
  document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
  document.querySelector(`[onclick="switchPTab('${tab}')"]`).classList.add('active');
  document.querySelectorAll('.psec').forEach(p => p.classList.remove('active'));
  document.getElementById(`ps-${tab}`).classList.add('active');
}

function renderDialogues() {
  const container = document.getElementById('ps-dialogues');
  container.innerHTML = '';
  const data = LEVELS[currentLevel];
  
  data.dialogues.forEach(d => {
    const wrap = document.createElement('div');
    wrap.className = 'dlg-card';
    wrap.innerHTML = `<div class="dlg-title">${d.title}</div><div class="dlg-desc">${d.desc}</div>`;
    
    d.msgs.forEach(m => {
      const msg = document.createElement('div');
      msg.className = `msg ${m.s}`;
      msg.innerHTML = `
        <div class="msg-av">${m.av}</div>
        <div class="bubble">
          <div>${m.en}</div>
          <div class="bubble-ru">${m.ru}</div>
        </div>`;
      wrap.appendChild(msg);
    });
    container.appendChild(wrap);
  });
}

let fillCorrectAnswers = [];

function renderFillEx() {
  const container = document.getElementById('ps-fill');
  container.innerHTML = '';
  const data = LEVELS[currentLevel];
  fillCorrectAnswers = data.fillEx.map(ex => ex.b);
  
  data.fillEx.forEach((ex, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'quiz-wrap';
    wrap.style.marginBottom = '20px';
    
    wrap.innerHTML = `
      <div class="quiz-q">${ex.s.replace(/___/g, '<input type="text" class="fill-input" id="fill-${idx}" placeholder="...">')}</div>
      <div class="fill-hint" style="display:none" id="fill-hint-${idx}">💡 Подсказка: ${ex.h}</div>
      <div style="margin-top:8px;">
        <button class="btn" onclick="checkFill(${idx})">Проверить</button>
        <button class="btn" style="background:var(--text2);" onclick="showHint(${idx})">Подсказка</button>
      </div>
      <div id="fill-res-${idx}" style="margin-top:8px;"></div>
    `;
    container.appendChild(wrap);
  });
}

function showHint(idx) {
  document.getElementById(`fill-hint-${idx}`).style.display = 'block';
}

function checkFill(idx) {
  const correct = fillCorrectAnswers[idx];
  const input = document.getElementById(`fill-${idx}`);
  const res = document.getElementById(`fill-res-${idx}`);
  
  if (input.value.trim().toLowerCase() === correct.toLowerCase()) {
    res.innerHTML = '<span class="correct">✅ Правильно!</span>';
  } else {
    res.innerHTML = `<span class="incorrect">❌ Неправильно! Правильный ответ: <b>${correct}</b></span>`;
  }
}

let matchSelected = null;
let matchPairs = {}; // { en: ru }
let matchMatched = {};

function renderMatchEx() {
  const container = document.getElementById('ps-match');
  const data = LEVELS[currentLevel];
  const sample = [];
  for (const topic in data.vocab) {
    data.vocab[topic].slice(0, 3).forEach(w => sample.push(w));
  }
  const selected = sample.sort(() => Math.random() - 0.5).slice(0, 6);

  // Build pairs map
  matchPairs = {};
  matchMatched = {};
  matchSelected = null;
  selected.forEach(w => { matchPairs[w.en] = w.ru; });

  const leftItems = selected.map(w => w.en);
  const rightItems = selected.map(w => w.ru).sort(() => Math.random() - 0.5);

  container.innerHTML = `
    <div class="match-instructions">🔗 Нажмите слово слева, затем его перевод справа</div>
    <div class="match-grid" id="match-area">
      <div class="mcol" id="match-left">
        ${leftItems.map(en => `<button class="mi" id="ml-${en.replace(/\s/g,'_')}" onclick="matchClickLeft('${en.replace(/'/g,"\\'")}')"> ${en}</button>`).join('')}
      </div>
      <div class="mcol" id="match-right">
        ${rightItems.map(ru => `<button class="mi" id="mr-${ru.replace(/\s/g,'_')}" onclick="matchClickRight('${ru.replace(/'/g,"\\'")}')"> ${ru}</button>`).join('')}
      </div>
    </div>
    <div id="match-result" style="margin-top:16px;font-size:14px;font-weight:600;"></div>
    <div style="margin-top:14px;">
      <button class="btn" style="background:var(--text2);" onclick="renderMatchEx()">🔄 Заново</button>
    </div>
  `;
}

function matchClickLeft(en) {
  // If already matched, ignore
  if (matchMatched[en]) return;
  // Deselect previous left
  document.querySelectorAll('.mi.sel-left').forEach(el => el.classList.remove('sel-left', 'sel'));
  matchSelected = en;
  const id = 'ml-' + en.replace(/\s/g, '_');
  const btn = document.getElementById(id);
  if (btn) { btn.classList.add('sel', 'sel-left'); }
}

function matchClickRight(ru) {
  if (!matchSelected) return;
  const en = matchSelected;
  const correctRu = matchPairs[en];
  const leftId = 'ml-' + en.replace(/\s/g, '_');
  const rightId = 'mr-' + ru.replace(/\s/g, '_');
  const leftBtn = document.getElementById(leftId);
  const rightBtn = document.getElementById(rightId);

  if (ru === correctRu) {
    // Correct match
    matchMatched[en] = true;
    if (leftBtn) { leftBtn.classList.remove('sel', 'sel-left'); leftBtn.classList.add('mat'); leftBtn.disabled = true; }
    if (rightBtn) { rightBtn.classList.add('mat'); rightBtn.disabled = true; }
    matchSelected = null;

    // Check if all matched
    if (Object.keys(matchMatched).length === Object.keys(matchPairs).length) {
      const res = document.getElementById('match-result');
      if (res) res.innerHTML = '<span style="color:var(--green)">🎉 Отлично! Все пары найдены!</span>';
    }
  } else {
    // Wrong match
    if (rightBtn) {
      rightBtn.classList.add('bad');
      setTimeout(() => rightBtn.classList.remove('bad'), 700);
    }
    if (leftBtn) {
      leftBtn.classList.add('bad');
      setTimeout(() => { leftBtn.classList.remove('bad', 'sel', 'sel-left'); }, 700);
    }
    matchSelected = null;
  }
}

function checkMatch() {
  // Kept for compatibility but not used
}

function renderSchedule() {
  const container = document.getElementById('weekGrid');
  const data = LEVELS[currentLevel];
  container.innerHTML = '';
  
  data.schedule.forEach(day => {
    const card = document.createElement('div');
    card.className = 'day-card';
    
    card.innerHTML = `
      <div class="day-head">
        <div class="day-chip" style="background:var(--accent);">${day.day}</div>
        <div style="font-weight:600;">${day.title}</div>
      </div>
      <div class="day-body">
        ${day.lessons.map(l => `
        <div class="lr">
          <div class="ldot" style="background:var(--accent);"></div>
          <div>${l}</div>
        </div>
      `).join('')}
      </div>
    `;
    container.appendChild(card);
  });
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
}

// --- QUIZ LOGIC ---
let quizQ = [];
let quizA = [];
let quizIdx = 0;
let quizScore = 0;

function startQuiz() {
  const data = LEVELS[currentLevel];
  quizQ = [];
  quizIdx = 0;
  quizScore = 0;
  
  for (const topic in data.vocab) {
    data.vocab[topic].forEach(w => {
      quizQ.push({ type: 'vocab', q: w.ru, a: w.en, w });
    });
  }
  data.verbs.forEach(v => {
    quizQ.push({ type: 'verb', q: v.ru, a: v.en, v });
  });
  
  quizQ.sort(() => Math.random()-0.5);
  quizQ = quizQ.slice(0,10);
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quizWrap');
  if (quizIdx >= quizQ.length) {
    container.innerHTML = `
      <div class="qr-card">
        <div class="qr-score">${quizScore}</div>
        <div class="qr-label">Правильных из ${quizQ.length}</div>
        <button class="btn" onclick="startQuiz()">Пройти ещё раз</button>
      </div>
    `;
    quizzesTaken++;
    localStorage.setItem('quizzesTaken', quizzesTaken);
    updateStats();
    return;
  }
  
  const q = quizQ[quizIdx];
  const options = generateOptions(q.a);
  
  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-prog">
        <div class="quiz-prog-bar">
          <div class="quiz-prog-fill" style="width:${Math.round((quizIdx+1)/quizQ.length*100)}%"></div>
        </div>
        <div class="quiz-prog-text">${quizIdx+1} / ${quizQ.length}</div>
      </div>
      <div class="quiz-word">${q.q}</div>
      <div class="quiz-opts">
        ${options.map(opt => `<button class="qob" onclick="checkAnswer('${opt}')">${opt}</button>`).join('')}
      </div>
      <div class="quiz-fb" id="quiz-res"></div>
    </div>
  `;
}

function generateOptions(correct) {
  const allWords = [];
  const data = LEVELS[currentLevel];
  
  for (const topic in data.vocab) {
    data.vocab[topic].forEach(w => allWords.push(w.en));
  }
  data.verbs.forEach(v => allWords.push(v.en));
  
  const others = allWords.filter(w => w !== correct).sort(()=>Math.random()-0.5).slice(0,3);
  return [...others, correct].sort(()=>Math.random()-0.5);
}

function checkAnswer(ans) {
  const res = document.getElementById('quiz-res');
  const q = quizQ[quizIdx];
  const buttons = document.querySelectorAll('.qob');
  
  buttons.forEach(btn => {
    btn.disabled = true;
    if(btn.textContent === q.a) btn.classList.add('correct');
    if(btn.textContent === ans && ans !== q.a) btn.classList.add('wrong');
  });
  
  if (ans === q.a) {
    quizScore++;
    res.innerHTML = '✅ Правильно!';
  } else {
    res.innerHTML = `❌ Неправильно! Правильный ответ: <b>${q.a}</b>`;
  }
  
  setTimeout(() => {
    quizIdx++;
    if (quizIdx >= quizQ.length) {
      quizzesTaken++;
      localStorage.setItem('quizzesTaken', quizzesTaken);
      updateUserProgress();
    }
    renderQuiz();
  }, 1300);
}

// Initialize progress bar on level cards on landing
function initLevelCards() {
  document.querySelectorAll('.level-card').forEach(card => {
    const level = card.querySelector('.lc-badge').textContent;
    const saved = studiedWords[level] || {};
    let total = 0, known = 0;

    if (LEVELS[level]) {
      for (const topic in LEVELS[level].vocab) {
        total += LEVELS[level].vocab[topic].length;
        LEVELS[level].vocab[topic].forEach((_, idx) => {
          if (saved[`${topic}-${idx}`]) known++;
        });
      }

      if (total > 0) {
        const percent = Math.round((known/total)*100);
        const bar = document.createElement('div');
        bar.className = 'mini-prog';
        bar.innerHTML = `<div style="width:${percent}%"></div>`;
        card.appendChild(bar);
      }
    }
  });
}

// Auth functions
function switchAuthTab(tab) {
  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');
  
  tabs.forEach(t => t.classList.remove('active'));
  forms.forEach(f => f.classList.add('hidden'));
  
  document.querySelector(`[onclick="switchAuthTab('${tab}')"]`).classList.add('active');
  document.getElementById(`${tab}-form`).classList.remove('hidden');
  
  document.getElementById('login-message').textContent = '';
  document.getElementById('register-message').textContent = '';
  document.getElementById('login-message').className = 'auth-message';
  document.getElementById('register-message').className = 'auth-message';
  
  // Reset avatar preview when switching to register
  if (tab === 'register') {
    const preview = document.getElementById('register-avatar-preview');
    if (preview) preview.innerHTML = '👤';
    const input = document.getElementById('register-avatar');
    if (input) input.value = '';
    if (typeof window.currentAvatar !== 'undefined') {
      window.currentAvatar = null;
    }
    // Close editor modal if open
    const modal = document.getElementById('image-editor-modal');
    if (modal) modal.classList.add('hidden');
  }
}

function handleLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const msgDiv = document.getElementById('login-message');
  
  if (!email || !password) {
    msgDiv.textContent = 'Пожалуйста, заполните все поля!';
    msgDiv.className = 'auth-message error';
    return;
  }
  
  const result = loginUser(email, password);
  if (result.success) {
    msgDiv.textContent = result.message;
    msgDiv.className = 'auth-message success';
    setTimeout(() => showLanding(), 800);
  } else {
    msgDiv.textContent = result.message;
    msgDiv.className = 'auth-message error';
  }
}

async function handleRegister() {
  const name = document.getElementById('register-name').value;
  const nicknameInput = document.getElementById('register-nickname').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const confirm = document.getElementById('register-confirm').value;
  const msgDiv = document.getElementById('register-message');
  
  if (!name || !email || !password || !confirm) {
    msgDiv.textContent = 'Пожалуйста, заполните все поля!';
    msgDiv.className = 'auth-message error';
    return;
  }
  
  if (password !== confirm) {
    msgDiv.textContent = 'Пароли не совпадают!';
    msgDiv.className = 'auth-message error';
    return;
  }
  
  // Process nickname to add @ prefix
  let nickname = nicknameInput.trim();
  if (nickname && !nickname.startsWith('@')) {
    nickname = '@' + nickname;
  }
  
  const result = await registerUser(email, password, name, nickname);
  if (result.success) {
    msgDiv.textContent = result.message;
    msgDiv.className = 'auth-message success';
    setTimeout(() => showLanding(), 800);
  } else {
    msgDiv.textContent = result.message;
    msgDiv.className = 'auth-message error';
  }
}

function showLanding() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('landing').classList.remove('hidden');
  const userInfoDiv = document.getElementById('user-info');
  if (currentUser) {
    let displayName = currentUser.nickname || currentUser.name;
    document.getElementById('user-name').textContent = displayName;
    userInfoDiv.classList.remove('hidden');
    // Update avatar
    const landingAvatar = document.getElementById('landing-user-avatar');
    if (currentUser.avatar) {
      landingAvatar.innerHTML = `<img src="${currentUser.avatar}" style="width:100%;height:100%;object-fit:cover;">`;
    } else {
      landingAvatar.innerHTML = '👤';
    }
  } else {
    userInfoDiv.classList.add('hidden');
  }
  initLevelCards();
}

window.updateAvatarDisplay = function() {
  if (currentUser) {
    const landingAvatar = document.getElementById('landing-user-avatar');
    const sidebarAvatar = document.getElementById('sidebar-user-avatar');
    const sidebarUserName = document.getElementById('sidebar-user-name');
    if (landingAvatar) {
      if (currentUser.avatar) {
        landingAvatar.innerHTML = `<img src="${currentUser.avatar}" style="width:100%;height:100%;object-fit:cover;">`;
      } else {
        landingAvatar.innerHTML = '👤';
      }
    }
    // Update name display
    let displayName = currentUser.nickname || currentUser.name;
    document.getElementById('user-name').textContent = displayName;
    if (sidebarUserName) {
      sidebarUserName.textContent = displayName;
    }
    if (sidebarAvatar) {
      if (currentUser.avatar) {
        sidebarAvatar.innerHTML = `<img src="${currentUser.avatar}" style="width:100%;height:100%;object-fit:cover;">`;
      } else {
        sidebarAvatar.innerHTML = '👤';
      }
    }
  }
}

function showAuth() {
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.add('hidden');
}

// Check if user is logged in on page load
document.addEventListener('DOMContentLoaded', () => {
  if (isLoggedIn()) {
    showLanding();
  } else {
    showAuth();
  }
});

// Update user progress and save to currentUser
function updateUserProgress() {
  if (window.currentUser) { // Check if currentUser exists on window
    window.currentUser.studiedWords = studiedWords;
    window.currentUser.quizzesTaken = quizzesTaken;
    const index = window.allUsers.findIndex(u => u.email === window.currentUser.email);
    if (index !== -1) {
      window.allUsers[index] = window.currentUser;
      localStorage.setItem('allUsers', JSON.stringify(window.allUsers));
      localStorage.setItem('currentUser', JSON.stringify(window.currentUser));
    }
  }
}

// Update user progress when changes happen
const originalToggleKnown = toggleKnown;
toggleKnown = function(topic, idx) {
  originalToggleKnown(topic, idx);
  updateUserProgress();
};

const originalStartQuiz = startQuiz;
startQuiz = function() {
  originalStartQuiz();
};

// After quiz completes, update user progress
const originalRenderQuiz = renderQuiz;
renderQuiz = function() {
  const container = document.getElementById('quiz-wrap');
  if (quizIdx >= quizQ.length) {
    // Update user progress here too
    updateUserProgress();
  }
  originalRenderQuiz();
};
// ═════════════ WRITTEN TRANSLATION TASK (RU → EN) ═════════════
const TRANSLATE_TEXTS = [
  {
    ru: "Образование важно для всех. Оно помогает людям читать, писать и мыслить. В школе учащиеся изучают такие предметы, как математика, естествознание и история. Учителя направляют учеников в изучении новых навыков. Образование также готовит учащихся к будущей работе. Оно даёт знания и учит дисциплине. Хорошее образование помогает людям осуществлять свои мечты.",
    en: "Education is important for everyone. It helps people read, write, and think. In school, students study subjects like math, science, and history. Teachers guide students to learn new skills. Education also prepares students for jobs in the future. It gives knowledge and teaches discipline. Good education helps people achieve their dreams."
  },
  {
    ru: "Здоровье очень важно. Чтобы оставаться здоровым, люди должны правильно питаться, заниматься спортом и хорошо высыпаться. Фрукты и овощи дают витамины, а физические упражнения укрепляют тело. Питьё воды также полезно для здоровья. Врачи помогают больным людям чувствовать себя лучше. Хорошее здоровье позволяет людям работать, играть и наслаждаться жизнью.",
    en: "Health is very important. To stay healthy, people should eat good food, exercise, and sleep well. Fruits and vegetables give vitamins, and exercise makes the body strong. Drinking water is also good for health. Doctors help sick people feel better. Good health allows people to work, play, and enjoy life."
  },
  {
    ru: "Технологии делают жизнь проще. Мы каждый день пользуемся телефонами, компьютерами и интернетом. Телефоны помогают нам разговаривать с друзьями, а компьютеры используются для работы и учёбы. Интернет быстро даёт нам информацию. Технологии также применяются в медицине, образовании и на транспорте. Они меняют мир и помогают людям жить лучше.",
    en: "Technology makes life easier. We use phones, computers, and the internet every day. Phones help us talk to friends, and computers are used for work and study. The internet gives us information quickly. Technology is also used in medicine, education, and transportation. It changes the world and helps people live better lives."
  },
  {
    ru: "Работа — важная часть жизни. Люди выбирают такие профессии, как учитель, врач и инженер. Хорошая карьера помогает людям зарабатывать деньги и получать удовольствие от своей работы. Чтобы построить карьеру, люди учатся и приобретают навыки. Упорный труд и терпение — ключ к успеху. Выбор правильной профессии важен для счастливого будущего.",
    en: "Work is an important part of life. People choose careers like teachers, doctors, and engineers. A good career helps people earn money and enjoy their jobs. To build a career, people study and gain skills. Hard work and patience are key to success. Choosing the right career is important for a happy future."
  },
  {
    ru: "Медиа делятся новостями, развлечениями и идеями. Они включают телевидение, радио, газеты и интернет. Реклама показывает людям товары через медиа. Компании используют рекламу, чтобы продавать такие товары, как одежда и телефоны. Некоторые объявления размещаются на сайтах, а другие — на рекламных щитах. Медиа и реклама помогают людям узнавать о новом и делать выбор.",
    en: "Media shares news, entertainment, and ideas. It includes TV, radio, newspapers, and the internet. Advertising shows products to people through media. Companies use ads to sell items like clothes and phones. Some ads are on websites, and others are on billboards. Media and advertising help people learn about new things and make choices."
  },
  {
    ru: "Преступление означает нарушение закона. Некоторые преступления — это воровство, ложь или причинение вреда другим. Полиция работает, чтобы останавливать преступления и обеспечивать безопасность людей. Важно соблюдать правила и уважать других. Хорошие граждане помогают сделать мир лучше, будучи добрыми и честными.",
    en: "Crime means breaking the law. Some crimes are stealing, lying, or hurting others. Police work to stop crimes and keep people safe. It is important to follow rules and respect others. Good citizens help make the world a better place by being kind and honest."
  },
  {
    ru: "Освоение космоса означает изучение космоса. Космонавты летают на ракетах, чтобы изучать планеты и звёзды. Спутники делают снимки космоса и отправляют их на Землю. Освоение космоса помогает нам понять вселенную. Оно также помогает создавать новые технологии, такие как более совершенные телефоны и компьютеры.",
    en: "Space exploration means studying space. Astronauts travel in rockets to learn about planets and stars. Satellites take pictures of space and send them to Earth. Space exploration helps us understand the universe. It also helps make new technology, like better phones and computers."
  },
  {
    ru: "Окружающая среда включает воздух, воду, растения и животных. Это то место, где мы живём. Чистый воздух и чистая вода важны для здоровья. Деревья дают нам кислород, а животные — часть природы. Загрязнение вредит окружающей среде и делает её грязной. Чтобы защитить окружающую среду, нам следует сажать деревья, беречь воду и перерабатывать отходы.",
    en: "The environment includes air, water, plants, and animals. It is where we live. Clean air and water are important for health. Trees give us oxygen, and animals are part of nature. Pollution harms the environment and makes it dirty. To protect the environment, we should plant trees, save water, and recycle waste."
  }
];

let currentTranslateIdx = 0;

function renderTranslateBlock() {
  const picker = document.getElementById('trPicker');
  if (!picker) return;

  picker.innerHTML = TRANSLATE_TEXTS.map((item, idx) => `
    <button class="tr-pick-btn ${idx === currentTranslateIdx ? 'active' : ''}" onclick="selectTranslateText(${idx})">Текст ${idx + 1}</button>
  `).join('');

  renderTranslateItem(currentTranslateIdx);
}

function selectTranslateText(idx) {
  currentTranslateIdx = idx;
  document.querySelectorAll('.tr-pick-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  renderTranslateItem(idx);
}

function renderTranslateItem(idx) {
  const container = document.getElementById('translateWrap');
  if (!container) return;
  const item = TRANSLATE_TEXTS[idx];

  container.innerHTML = `
    <div class="tr-card">
      <div class="tr-num">Текст ${idx + 1} из ${TRANSLATE_TEXTS.length}</div>
      <div class="tr-src">${item.ru}</div>
      <textarea class="tr-input" id="tr-input-${idx}" placeholder="Напиши здесь свой перевод на английский..."></textarea>
      <div class="tr-actions">
        <button class="btn" onclick="checkTranslate(${idx})">Проверить</button>
        <button class="btn" style="background:var(--text2);" onclick="resetTranslate(${idx})">Очистить</button>
      </div>
      <div class="tr-result" id="tr-res-${idx}" style="display:none;"></div>
    </div>
  `;
}

function normalizeWords(str) {
  return str
    .toLowerCase()
    .replace(/[.,!?;:"'()]/g, '')
    .split(/\s+/)
    .filter(Boolean);
}

function checkTranslate(idx) {
  const item = TRANSLATE_TEXTS[idx];
  const input = document.getElementById(`tr-input-${idx}`);
  const res = document.getElementById(`tr-res-${idx}`);
  const userText = input.value.trim();

  if (!userText) {
    res.style.display = 'block';
    res.innerHTML = `<div class="tr-score incorrect">✏️ Сначала напиши свой перевод.</div>`;
    return;
  }

  const userWords = normalizeWords(userText);
  const origWords = normalizeWords(item.en);
  const origSet = new Set(origWords);
  let matched = 0;
  userWords.forEach(w => { if (origSet.has(w)) matched++; });
  const score = Math.round((matched / origWords.length) * 100);

  let scoreClass = 'incorrect';
  let scoreLabel = '❌ Есть над чем поработать';
  if (score >= 70) { scoreClass = 'correct'; scoreLabel = '✅ Отлично, очень близко к оригиналу!'; }
  else if (score >= 40) { scoreClass = ''; scoreLabel = '🟡 Неплохо, но есть неточности'; }

  res.style.display = 'block';
  res.innerHTML = `
    <div class="tr-score ${scoreClass}">${scoreLabel} · совпадение с оригиналом: ${score}%</div>
    <div class="tr-orig"><b>Оригинал:</b> ${item.en}</div>
  `;
}

function resetTranslate(idx) {
  const input = document.getElementById(`tr-input-${idx}`);
  const res = document.getElementById(`tr-res-${idx}`);
  if (input) input.value = '';
  if (res) { res.style.display = 'none'; res.innerHTML = ''; }
}