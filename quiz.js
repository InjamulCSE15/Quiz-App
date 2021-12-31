console.log("Hello from Quiz App!!!");

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestion = {}
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "'OS' computer abbreviation usually means?",
        choice1: "Order of Significance",
        choice2: "Open Software",
        choice3: "Operating System",
        choice4: "Optical Sensor",
        answer: 3
    },
    
    {
        question: "'.MOV' extension refers usually to what kind of file?",
        choice1: "Image file",
        choice2: "Animation/movie file",
        choice3: "Audio file",
        choice4: "MS Office document",
        answer: 2
    },
    { 
        question: "'.MPG' extension refers usually to what kind of file?",
        choice1: "Word Perfect Document file",
        choice2: "MS Office document",
        choice3: "Animation/movie file",
        choice4: "Image file",
        answer: 3
    },
4. What is part of a database that holds only one type of information?
(A) Report
(B) Field
(C) Record
(D) File
Correct Answer
5. Who developed Yahoo?
(A) Dennis Ritchie & Ken Thompson
(B) David Filo & Jerry Yang
(C) Vint Cerf & Robert Kahn
(D) Steve Case & Jeff Bezos
Correct Answer
6. 'DB' computer abbreviation usually means?
(A) Database
(B) Double Byte
(C) Data Block
(D) Driver Boot
Correct Answer
7. '.INI' extension refers usually to what kind of file?
(A) Image file
(B) System file
(C) Hypertext related file
(D) Image Color Matching Profile file
Correct Answer
8. The sampling rate, (how many samples per second are stored) for a CD is?
(A) 48.4 kHz
(B) 22,050 Hz
(C) 44.1 kHz
(D) 48 kHz
Correct Answer
9. What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines.

 
(A) URL (Universal Resource Locator)
(B) LAN (Local Area Network)
(C) WAN (Wide Area Network)
(D) World Wide Web
Correct Answer
10. Sometimes computers and cache registers in a foodmart are connected to a UPS system. What does UPS mean?
(A) United Parcel Service
(B) Uniform Product Support
(C) Under Paneling Storage
(D) Uninterruptable Power Supply
Correct Answer
11. What is FMD?
(A) Fast-Ethernet Measuring Device
(B) Flashing Media Diode
(C) Fluorescent Multi-Layer Disc
(D) Flash Media Driver
Correct Answer
12. Which of these is a documented hoax virus?
(A) McDonalds screensaver
(B) Alien.worm
(C) Merry Xmas
(D) Adolph
Correct Answer
13. What does SSL stand for?
(A) Secure Socket Layer
(B) System Socket Layer
(C) Superuser System Login
(D) Secure System Login
Correct Answer
14. What is a URL?
(A) A computer software program
(B) A type of UFO
(C) The address of a document or "page" on the World Wide Web
(D) An acronym for Uniform Resources Learning
Correct Answer
15. The Central Processing Unit is an embedded chip that acts as the 'brains' of a computer. What Intel chip was used in the Altair (the first real personal computer)?
(A) 6502
(B) 8080
(C) 6400
(D) 8286
Correct Answer

    }
]