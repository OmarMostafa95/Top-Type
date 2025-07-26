import React from 'react'
const wordBank = ["a", "about", "above", "across", "act", "add", "after", "again", "against", "age",
    "ago", "agree", "air", "all", "allow", "also", "always", "am", "among", "an",
    "and", "animal", "another", "answer", "any", "appear", "are", "area", "arm", "around",
    "arrive", "art", "as", "ask", "at", "away", "back", "bad", "ball", "base",
    "be", "bear", "beat", "beautiful", "because", "become", "bed", "been", "before", "began",
    "begin", "behind", "believe", "below", "best", "better", "between", "big", "bird", "bit",
    "black", "blue", "boat", "body", "book", "both", "box", "boy", "bring", "brother",
    "build", "busy", "but", "buy", "by", "call", "came", "can", "cannot", "car",
    "care", "carry", "cat", "cause", "center", "change", "check", "child", "children", "choose",
    "city", "class", "clean", "clear", "climb", "close", "cold", "color", "come", "common",
    "company", "complete", "consider", "contain", "continue", "control", "cook", "copy", "corn", "corner",
    "correct", "could", "country", "course", "cover", "cry", "cut", "dark", "day", "decide",
    "deep", "develop", "did", "die", "difference", "different", "difficult", "do", "does", "dog",
    "door", "down", "draw", "dream", "drive", "drop", "dry", "during", "each", "early",
    "earth", "east", "easy", "eat", "edge", "effect", "egg", "eight", "either", "else",
    "end", "enough", "even", "ever", "every", "example", "eye", "face", "fact", "fall",
    "family", "far", "farm", "fast", "father", "feel", "feet", "few", "field", "fight",
    "figure", "fill", "final", "find", "fine", "finger", "finish", "fire", "first", "fish",
    "five", "floor", "fly", "follow", "food", "foot", "for", "force", "form", "found",
    "four", "free", "friend", "from", "front", "full", "game", "gave", "get", "girl",
    "give", "go", "gold", "gone", "good", "got", "government", "great", "green", "ground",
    "group", "grow", "guess", "gun", "had", "hair", "half", "hand", "happen", "happy",
    "hard", "has", "have", "he", "head", "hear", "heard", "heart", "heat", "help",
    "her", "here", "high", "him", "his", "history", "hold", "home", "hope", "horse",
    "hot", "hour", "house", "how", "human", "hundred", "hunt", "I", "idea", "if",
    "imagine", "important", "in", "include", "indicate", "information", "inside", "interest", "into", "iron",
    "is", "island", "it", "job", "join", "joy", "jump", "just", "keep", "key",
    "kill", "kind", "king", "knew", "know", "land", "language", "large", "last", "late",
    "laugh", "law", "lay", "lead", "learn", "least", "leave", "left", "leg", "length",
    "less", "let", "letter", "life", "light", "like", "line", "list", "listen", "little",
    "live", "long", "look", "lost", "love", "low", "machine", "made", "make", "man",
    "many", "map", "mark", "matter", "may", "me", "mean", "measure", "meet", "men",
    "might", "mile", "milk", "mind", "minute", "miss", "money", "moon", "more", "morning",
    "most", "mother", "mountain", "move", "much", "music", "must", "my", "name", "near",
    "need", "never", "new", "next", "night", "no", "noise", "north", "not", "note",
    "nothing", "notice", "now", "number", "object", "of", "off", "offer", "office", "often",
]
const numberBank = () => Math.floor(Math.random() * 1000).toString()
const SymbolBank = () => {
    const symbols = ["@", "#", "$", "%", "&", "*", "!", "?", "~", "^"];
    return symbols[Math.floor(Math.random() * symbols.length)];
}
//Easy
export function RandomWordsez(count = 50) {
    return Array.from({ length: count },
        () => wordBank[Math.floor(Math.random() * wordBank.length)]
    )
}
//noraml
export function RandomWordsnm(count = 50) {
    return Array.from({ length: count },
        () => {
            return Math.random() < 0.8
                ? wordBank[Math.floor(Math.random() * wordBank.length)]
                : numberBank();
        }
    )
}
//hard
export function RandomWordsHard(count = 50) {
    return Array.from({ length: count },
        () => {
            const chance = Math.random();
            if (chance < 0.5) return wordBank[Math.floor(Math.random() * wordBank.length)];
            if (chance < 0.75) return numberBank();
            return SymbolBank();
            return SymbolBank();
        });
}

export default function WordsGen() {



    return (
        <>
        </>
    )
}
