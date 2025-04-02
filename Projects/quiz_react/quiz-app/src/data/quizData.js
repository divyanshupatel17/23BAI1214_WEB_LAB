// Quiz data for different categories and difficulties
const quizData = {
  general: {
    easy: [
      {
        id: 'ge1',
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        id: 'ge2',
        question: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris'
      },
      {
        id: 'ge3',
        question: 'How many sides does a hexagon have?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '6'
      },
      {
        id: 'ge4',
        question: 'Which is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean'
      },
      {
        id: 'ge5',
        question: 'What is the chemical symbol for gold?',
        options: ['Go', 'Gd', 'Au', 'Ag'],
        correctAnswer: 'Au'
      },
      {
        id: 'ge6',
        question: 'Which famous scientist developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
        correctAnswer: 'Albert Einstein'
      },
      {
        id: 'ge7',
        question: 'What is the tallest mountain in the world?',
        options: ['K2', 'Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji'],
        correctAnswer: 'Mount Everest'
      }
    ],
    medium: [
      {
        id: 'gm1',
        question: 'In which year did the Titanic sink?',
        options: ['1905', '1912', '1920', '1931'],
        correctAnswer: '1912'
      },
      {
        id: 'gm2',
        question: 'Who painted the Mona Lisa?',
        options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Michelangelo'],
        correctAnswer: 'Leonardo da Vinci'
      },
      {
        id: 'gm3',
        question: 'What is the smallest country in the world?',
        options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
        correctAnswer: 'Vatican City'
      },
      {
        id: 'gm4',
        question: 'Which element has the chemical symbol Hg?',
        options: ['Hydrogen', 'Helium', 'Mercury', 'Magnesium'],
        correctAnswer: 'Mercury'
      },
      {
        id: 'gm5',
        question: 'What is the currency of Japan?',
        options: ['Yuan', 'Yen', 'Won', 'Ringgit'],
        correctAnswer: 'Yen'
      }
    ],
    hard: [
      {
        id: 'gh1',
        question: 'What is the speed of light in a vacuum?',
        options: ['299,792,458 meters per second', '300,000,000 meters per second', '150,000,000 meters per second', '199,792,458 meters per second'],
        correctAnswer: '299,792,458 meters per second'
      },
      {
        id: 'gh2',
        question: 'Which of these elements has the highest atomic number?',
        options: ['Uranium', 'Plutonium', 'Californium', 'Fermium'],
        correctAnswer: 'Fermium'
      },
      {
        id: 'gh3',
        question: 'Who wrote "War and Peace"?',
        options: ['Charles Dickens', 'Leo Tolstoy', 'Fyodor Dostoevsky', 'Victor Hugo'],
        correctAnswer: 'Leo Tolstoy'
      },
      {
        id: 'gh4',
        question: 'In what year was the first human heart transplant performed?',
        options: ['1957', '1967', '1977', '1987'],
        correctAnswer: '1967'
      },
      {
        id: 'gh5',
        question: 'What is the most abundant element in the universe?',
        options: ['Oxygen', 'Carbon', 'Hydrogen', 'Helium'],
        correctAnswer: 'Hydrogen'
      }
    ]
  },
  science: {
    easy: [
      {
        id: 'se1',
        question: 'What is the chemical formula for water?',
        options: ['H2O', 'CO2', 'O2', 'N2'],
        correctAnswer: 'H2O'
      },
      {
        id: 'se2',
        question: 'Which is the closest planet to the Sun?',
        options: ['Venus', 'Earth', 'Mercury', 'Mars'],
        correctAnswer: 'Mercury'
      },
      {
        id: 'se3',
        question: 'What is the human body\'s largest organ?',
        options: ['Heart', 'Liver', 'Brain', 'Skin'],
        correctAnswer: 'Skin'
      },
      {
        id: 'se4',
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
        correctAnswer: 'Carbon dioxide'
      },
      {
        id: 'se5',
        question: 'What type of energy does the sun provide?',
        options: ['Mechanical energy', 'Solar energy', 'Potential energy', 'Kinetic energy'],
        correctAnswer: 'Solar energy'
      }
    ],
    medium: [
      {
        id: 'sm1',
        question: 'What is the unit of electrical resistance?',
        options: ['Volt', 'Watt', 'Ohm', 'Ampere'],
        correctAnswer: 'Ohm'
      },
      {
        id: 'sm2',
        question: 'Which element has the atomic number 1?',
        options: ['Helium', 'Oxygen', 'Carbon', 'Hydrogen'],
        correctAnswer: 'Hydrogen'
      },
      {
        id: 'sm3',
        question: 'What is the process by which plants make their own food?',
        options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Transpiration'],
        correctAnswer: 'Photosynthesis'
      },
      {
        id: 'sm4',
        question: 'What is the largest organ in the human digestive system?',
        options: ['Stomach', 'Liver', 'Small intestine', 'Large intestine'],
        correctAnswer: 'Small intestine'
      },
      {
        id: 'sm5',
        question: 'Which part of the brain controls balance and coordination?',
        options: ['Medulla', 'Cerebrum', 'Cerebellum', 'Thalamus'],
        correctAnswer: 'Cerebellum'
      }
    ],
    hard: [
      {
        id: 'sh1',
        question: 'What is the chemical compound with the formula C8H10N4O2?',
        options: ['Aspirin', 'Caffeine', 'Penicillin', 'Adrenaline'],
        correctAnswer: 'Caffeine'
      },
      {
        id: 'sh2',
        question: 'What is the phenomenon where light changes direction when it passes from one medium to another?',
        options: ['Reflection', 'Diffraction', 'Refraction', 'Interference'],
        correctAnswer: 'Refraction'
      },
      {
        id: 'sh3',
        question: 'Which subatomic particle is found in the nucleus of an atom and has a positive charge?',
        options: ['Electron', 'Neutron', 'Proton', 'Positron'],
        correctAnswer: 'Proton'
      },
      {
        id: 'sh4',
        question: 'What is the primary function of mitochondria in a cell?',
        options: ['Cell division', 'Protein synthesis', 'Energy production', 'Waste removal'],
        correctAnswer: 'Energy production'
      },
      {
        id: 'sh5',
        question: 'What is the name of the process by which rocks are broken down into smaller pieces by water, ice, and wind?',
        options: ['Erosion', 'Weathering', 'Deposition', 'Sublimation'],
        correctAnswer: 'Weathering'
      }
    ]
  },
  history: {
    easy: [
      {
        id: 'he1',
        question: 'Who was the first President of the United States?',
        options: ['Thomas Jefferson', 'George Washington', 'Abraham Lincoln', 'John Adams'],
        correctAnswer: 'George Washington'
      },
      {
        id: 'he2',
        question: 'In which year did World War II end?',
        options: ['1943', '1945', '1947', '1950'],
        correctAnswer: '1945'
      },
      {
        id: 'he3',
        question: 'Which ancient civilization built the pyramids of Giza?',
        options: ['Roman', 'Greek', 'Egyptian', 'Mesopotamian'],
        correctAnswer: 'Egyptian'
      },
      {
        id: 'he4',
        question: 'What was the name of the ship that sank in 1912 on its maiden voyage?',
        options: ['Lusitania', 'Titanic', 'Queen Mary', 'Britannic'],
        correctAnswer: 'Titanic'
      },
      {
        id: 'he5',
        question: 'Who painted the Mona Lisa?',
        options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Michelangelo'],
        correctAnswer: 'Leonardo da Vinci'
      }
    ],
    medium: [
      {
        id: 'hm1',
        question: 'Which country was formerly known as Persia?',
        options: ['Iraq', 'Turkey', 'Iran', 'Egypt'],
        correctAnswer: 'Iran'
      },
      {
        id: 'hm2',
        question: 'The Cuban Missile Crisis occurred during which decade?',
        options: ['1950s', '1960s', '1970s', '1980s'],
        correctAnswer: '1960s'
      },
      {
        id: 'hm3',
        question: 'Who was the first female Prime Minister of the United Kingdom?',
        options: ['Angela Merkel', 'Margaret Thatcher', 'Theresa May', 'Indira Gandhi'],
        correctAnswer: 'Margaret Thatcher'
      },
      {
        id: 'hm4',
        question: 'Which ancient wonder was located in Alexandria, Egypt?',
        options: ['The Hanging Gardens', 'The Lighthouse', 'The Colossus', 'The Temple of Artemis'],
        correctAnswer: 'The Lighthouse'
      },
      {
        id: 'hm5',
        question: 'In which year did the Berlin Wall fall?',
        options: ['1987', '1989', '1991', '1993'],
        correctAnswer: '1989'
      }
    ],
    hard: [
      {
        id: 'hh1',
        question: 'Who was the last Tsar of Russia?',
        options: ['Nicholas II', 'Alexander III', 'Ivan the Terrible', 'Peter the Great'],
        correctAnswer: 'Nicholas II'
      },
      {
        id: 'hh2',
        question: 'The Treaty of Tordesillas (1494) divided newly discovered lands between which two countries?',
        options: ['England and France', 'Spain and Portugal', 'Netherlands and Spain', 'Portugal and France'],
        correctAnswer: 'Spain and Portugal'
      },
      {
        id: 'hh3',
        question: 'Which battle in 1815 marked the final defeat of Napoleon Bonaparte?',
        options: ['Battle of Trafalgar', 'Battle of Austerlitz', 'Battle of Waterloo', 'Battle of Leipzig'],
        correctAnswer: 'Battle of Waterloo'
      },
      {
        id: 'hh4',
        question: 'Who was the first Emperor of China?',
        options: ['Qin Shi Huang', 'Emperor Wu of Han', 'Kublai Khan', 'Emperor Wu of Jin'],
        correctAnswer: 'Qin Shi Huang'
      },
      {
        id: 'hh5',
        question: 'The Defenestration of Prague in 1618 helped trigger which major European conflict?',
        options: ['The Franco-Prussian War', 'The Hundred Years War', 'The Thirty Years War', 'The Napoleonic Wars'],
        correctAnswer: 'The Thirty Years War'
      }
    ]
  },
  technology: {
    easy: [
      {
        id: 'te1',
        question: 'What does "CPU" stand for?',
        options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Process Utility', 'Core Processing Unit'],
        correctAnswer: 'Central Processing Unit'
      },
      {
        id: 'te2',
        question: 'Which company created the iPhone?',
        options: ['Microsoft', 'Google', 'Samsung', 'Apple'],
        correctAnswer: 'Apple'
      },
      {
        id: 'te3',
        question: 'What does "HTML" stand for?',
        options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'],
        correctAnswer: 'Hyper Text Markup Language'
      },
      {
        id: 'te4',
        question: 'Which of these is not a programming language?',
        options: ['Java', 'Python', 'Microsoft', 'C++'],
        correctAnswer: 'Microsoft'
      },
      {
        id: 'te5',
        question: 'What does "URL" stand for?',
        options: ['Universal Resource Locator', 'Uniform Resource Locator', 'United Resource Link', 'Universal Resource Link'],
        correctAnswer: 'Uniform Resource Locator'
      }
    ],
    medium: [
      {
        id: 'tm1',
        question: 'Which protocol is commonly used for sending emails?',
        options: ['HTTP', 'FTP', 'SMTP', 'SSH'],
        correctAnswer: 'SMTP'
      },
      {
        id: 'tm2',
        question: 'What is the main function of a firewall in computer networks?',
        options: ['Speed up internet connection', 'Block unauthorized access', 'Increase storage capacity', 'Improve processing power'],
        correctAnswer: 'Block unauthorized access'
      },
      {
        id: 'tm3',
        question: 'What year was the first iPhone released?',
        options: ['2005', '2007', '2009', '2010'],
        correctAnswer: '2007'
      },
      {
        id: 'tm4',
        question: 'What programming language is primarily used for iOS app development?',
        options: ['Java', 'Swift', 'C#', 'Python'],
        correctAnswer: 'Swift'
      },
      {
        id: 'tm5',
        question: 'Which company developed the Android operating system?',
        options: ['Apple', 'Microsoft', 'Google', 'Samsung'],
        correctAnswer: 'Google'
      }
    ],
    hard: [
      {
        id: 'th1',
        question: 'What is the time complexity of binary search in Big O notation?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
        correctAnswer: 'O(log n)'
      },
      {
        id: 'th2',
        question: 'Which encryption algorithm is considered to be one of the most secure for hashing passwords?',
        options: ['MD5', 'SHA-1', 'bcrypt', 'RSA'],
        correctAnswer: 'bcrypt'
      },
      {
        id: 'th3',
        question: 'What was the name of the first programmable electronic general-purpose computer?',
        options: ['UNIVAC', 'ENIAC', 'EDVAC', 'Colossus'],
        correctAnswer: 'ENIAC'
      },
      {
        id: 'th4',
        question: 'Which of these is not a type of blockchain consensus mechanism?',
        options: ['Proof of Work', 'Proof of Stake', 'Proof of Authority', 'Proof of Concept'],
        correctAnswer: 'Proof of Concept'
      },
      {
        id: 'th5',
        question: 'Which of these programming paradigms focuses on applying functions without changing state or mutable data?',
        options: ['Object-Oriented Programming', 'Procedural Programming', 'Functional Programming', 'Event-Driven Programming'],
        correctAnswer: 'Functional Programming'
      }
    ]
  }
};

// Add more categories as needed
export default quizData; 