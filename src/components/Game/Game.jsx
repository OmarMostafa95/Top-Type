import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import { RandomWordsez, RandomWordsnm, RandomWordsHard } from '../WordsGen/WordsGen'
import { useAuth } from '../Auth/AuthProvider'
import { useNavigate } from 'react-router-dom';

export default function Game({ difficulty }) {
    const [wordlist, setwordlist] = useState([])
    useEffect(() => {
        let words;
        if (difficulty === "easy") {
            words = RandomWordsez()
        } else if (difficulty === "Normal") {
            words = RandomWordsnm()
        } else if (difficulty === "Hard") {
            words = RandomWordsHard()
        } setword(words);
        setdisplayed(words.slice(0, chunk));
        setwordlist(words);
        setChunkindex(0);
        setcurrentIndex(0);
    }, [difficulty]
    )

    //game visiuals\
    const chunk = 15
    const [displayed, setdisplayed] = useState([])
    const [chunkindex, setChunkindex] = useState(0)
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     const generated = wordlist
    //     setword(generated)
    //     setdisplayed(generated.slice(0, chunk))
    //     setChunkindex(0)
    //     setcurrentIndex(0)
    // }, [])

    // WPM and Accuracy
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)
    const [Correct, setCorrect] = useState(0)
    const [total, setTotal] = useState(null)
    const [showResult, setshowResults] = useState(false)


    const getWPM = () => {
        let min = (end - start) / 1000 / 60;
        return Math.round(Correct / min)
    }

    const getAccuracy = () => {
        return Math.round((Correct / total) * 100)
    }

    // core game
    const [word, setword] = useState([])
    const [input, setinput] = useState('')
    const inputRef = useRef(null)
    const [correctness, setCorrectness] = useState({})

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    const [currentIndex, setcurrentIndex] = useState(0)

    const [wpm, setWPM] = useState(0);
    useEffect(() => {
        if (start && Correct > 0) {
            const now = Date.now();
            const minutes = (now - start) / 1000 / 60;
            const currentWPM = Math.round(Correct / minutes);
            setWPM(currentWPM);
        }
    }, [Correct, start]);
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        if (!start) {
            setStart(Date.now())
        }
        const value = e.target.value;
        if (value.endsWith(" ")) {

            const rightWord = word[currentIndex]
            const trim = value.trim()
            const isCorrect = trim === rightWord;
            if (trim === rightWord) {
                setCorrectness(prev => ({ ...prev, [currentIndex]: true }));
            } else {
                setCorrectness(prev => ({ ...prev, [currentIndex]: false }));
            };
            if (isCorrect) {
                setCorrect(prev => prev + 1)
                const NextI = currentIndex + 1;
                setcurrentIndex(NextI);
                setinput("")
                setCounter(prev => prev + 1)
                if (NextI % chunk === 0) {
                    let nextchunk = NextI
                    let nextchunkend = nextchunk + chunk
                    setdisplayed(word.slice(nextchunk, nextchunkend))
                    setChunkindex((prev) => prev + 1)
                }
            }


            setTotal(prev => prev + 1)
            if (currentIndex + 1 === word.length) {
                setEnd(Date.now())
                setshowResults(true);
            }

            if (!isCorrect) {
                setinput("")
                return;
            }

            setinput("")
        } else {
            setinput(value)
        }

    }
    const [showPopup, setShowPopup] = useState(false);
    const [popup, setPopup] = useState("");
    const { currentUser } = useAuth();
    useEffect(() => {
        if (showResult && start && end) {
            const WPM = getWPM();
            const key = `highscore for-${difficulty} difficulty`;
            const prev = parseInt(localStorage.getItem(key)) || 0;
            if (!currentUser) {
                setPopup("Login to save your highscore.")
            } else {
                if (!prev || WPM > prev) {
                    setPopup(`NEW HIGH SCORE:${WPM} WPM`)
                    localStorage.setItem(key, WPM);
                } else {
                    setPopup(`Your WPM: ${WPM}. High score:${prev}`)
                }
            }
            setShowPopup(true);
        }
    })
    const resetGame = () => {
        let words;
        if (difficulty === "easy") {
            words = RandomWordsez();
        } else if (difficulty === "Normal") {
            words = RandomWordsnm();
        } else if (difficulty === "Hard") {
            words = RandomWordsHard();
        }
        

        setShowPopup(false);
        setinput('');
        setStart(null);
        setEnd(null);
        setcurrentIndex(0);
        setCorrect(0);
        setTotal(0);
        setWPM(0);
        setCorrectness({});
        setCounter(0);
        setword(words);
        setwordlist(words);
        setdisplayed(words.slice(0, chunk));
        setChunkindex(0);
    };

    return (
        <>

            <div className="text-center mt-10 px-80 text-2xl flex flex-row gap-2 font-mono font-bold text-cyan-600">
                <p>WPM: {start ? wpm : 0}</p>
                <p>Accuracy: {total ? getAccuracy() : 0}%</p>
            </div>

            <div className='flex flex-wrap max-w-2xl mt-20 max-h-6 font-mono text-xl mx-auto p-4 gap-2' onClick={() => inputRef.current.focus()}>
                {displayed.map((word, index) => {
                    const globalIndex = chunkindex * chunk + index
                    let className = "";
                    if (correctness[globalIndex] === false) {
                        className = "text-red-600   bg-slate-800";
                    } else if (correctness[globalIndex] === true) {
                        className = "text-green-900";
                    }
                    else if (index === currentIndex % chunk) {
                        className = "text-blue-600 bg-slate-800";
                    }
                    else if (index < currentIndex) {
                        className = "text-gray-600";
                    }
                    else if (index > currentIndex) {
                        className = "text-gray-600";
                    }
                    return (
                        <span key={index} className={` text-gray-700 ${className}`} >
                            {word}
                        </span>
                    )
                })}
            </div>
            <div className='w-full flex justify-center'>
                <div className='text-green-400 fixed mt-8 translate-x-32'>
                    {counter} / {word?.length}
                </div>

            </div>

            <div>

                <input
                    ref={inputRef}
                    type='text'
                    value={input}
                    onChange={handleInputChange}
                    className="mt-40 block mx-auto bg-transparent border-b-2 border-gray-400 outline-none text-center text-xl text-gray-300"
                    autoFocus />
            </div>
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-slate-800 text-gray-400 p-6 rounded-xl  font-bold shadow-xl text-center w-96">
                        <p className="text-lg mb-6">{popup}</p>
                        <div className="flex justify-around">
                            <button
                                onClick={() => window.location.href = "/"}
                                className="bg-blue-800 text-gray-100 px-4 py-2 rounded hover:bg-blue-900"
                            >
                                Go to Home
                            </button>
                            <button
                                onClick={resetGame}
                                className="bg-green-800 text-gray-100 px-4 py-2 rounded hover:bg-green-900"
                            >
                                Play Again
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}
