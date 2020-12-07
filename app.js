console.log($);

const triviaQuestions = [
    {
        id: 1,
        question: 'Which player is over 7 feet tall and won championships with both the Los Angeles lakers and Miami Heat?',
        answer: 'Shaquille O\'Neal',
        wrongAnswers: ['Yao Ming', 'Kareem Abdul-Jabbar', 'Tyson Chandler']
    },

    {
        id: 2,
        question: 'Which NBA player is known for starting the in-game fight known as "Malice at the Palace"?',
        answer: 'Ron Artest',
        wrongAnswers: ['DeMarcus Cousins', 'John Starks', 'Dennis Rodman']

    },

    {
        id: 3,
        question: 'Which is the first team to come back from a 3-1 deficit in the NBA finals?',
        answer: 'Cleveland Cavaliers',
        wrongAnswers: ['Washington Bullets', 'Los Angeles Lakers', 'Golden State Warriors']
    },

    {
        id: 4,
        question: 'Which team won the NBA finals in 2000?',
        answer: 'Los Angeles Lakers',
        wrongAnswers: ['San Antonio Spurs', 'Detroit Pistons', 'New Jersey Nets']
    },

    {
        id: 5,
        question: 'Which college did LeBron James strong suggest he would have gone to?',
        answer: 'Ohio State',
        wrongAnswers: ['Duke', 'UNC', 'UCLA']
    },
    

    {
        id: 6,
        question: 'Which Jordan shoe model did Michael Jordan wear in his first NBA finals?',
        answer: 'Air Jordan VI',
        wrongAnswers: ['Air Jordan I', 'Air Jordan IV', 'Air Jordan V']
    },

    {
        id: 7,
        question: 'Who is the shortest NBA player in history?',
        answer: 'Muggsy Bogues',
        wrongAnswers: ['Isaiah Thomas', 'Earl Boykins', 'Allen Iverson']
    },

    {
        id: 8,
        question: 'Who played every position in an NBA finals game in his rookie year?',
        answer: 'Magic Johnson',
        wrongAnswers: ['Michael Jordan', 'Larry Bird', 'Jerry West']
    },

    {
        id: 9,
        question: 'Who is the youngest player to reach 10,000 points?',
        answer: 'LeBron James',
        wrongAnswers: ['Kobe Bryant', 'Kevin Durant', 'Michael Jordan']
    },

    {
        id: 10, 
        question: 'Who is the only player to win MVP as a rookie?',
        answer: 'Magic Johnson',
        wrongAnswers: ['Derrick Rose', 'Bill Russell', 'David Robinson']
    },

    {
        id: 11,
        question: 'Which team drafted Kobe Bryant?',
        answer: 'Charlotte Hornets',
        wrongAnswers: ['Los Angeles Lakers', 'Seattle Supersonics', 'Miami Heat']
    },

    {
        id: 12,
        question: 'Which team is the first to lose three straight NBA Finals?',
        answer: 'New York Knicks',
        wrongAnswers: ['Detroit Pistons', 'Utah Jazz', 'Houston Rockets']
    },

    {
        id: 13,
        question: 'Which team played the Los Angeles Lakers in the 2009 NBA Finals?',
        answer: 'Orlando Magic',
        wrongAnswers: ['Cleveland Cavaliers', 'Boston Celtics', 'Miami Heat']
    },

    {
        id: 14,
        question: 'Which team drafted three players in a row that later became MVPs?',
        answer: 'Oklahoma City Thunder',
        wrongAnswers: ['Los Angeles Lakers', 'Golden State Warriors', 'Phoenix Suns']
    },

    {
        id: 15,
        question: 'Who is the youngest player to ever be drafted?',
        answer: 'Andrew Bynum',
        wrongAnswers: ['Zion Williamson', 'LaMelo Ball', 'Luka Doncic']
    },

    {
        id: 16,
        question: 'Where was the first NBA all-star game held?',
        answer: 'Boston',
        wrongAnswers: ['New York', 'Los Angeles', 'Phoenix']
    },

    {
        id: 17,
        question: 'How many 3-point shots did Shaquille O\'Neal make throughout his career?',
        answer: '1',
        wrongAnswers: ['2', '3', '4']
    },

    {
        id: 18,
        question: '60% of NBA players become broke after 5 years of retirement',
        answer: 'True',
        wrongAnswers: ['False']
    },

    {
        id: 19,
        question: 'How many shots did Muggsy Bogues (the shortest NBA player) block in his career?',
        answer: '39',
        wrongAnswers: ['12', '29', '37']
    },

    {
        id: 20,
        question: 'Which NBA player was stabbed 11 times in a season and still played every game?',
        answer: 'Paul Pierce',
        wrongAnswers: ['Jermaine O\'Neal', 'Stephen Jackson', 'Baron Davis', 'Kevin Garnett']
    },

    {
        id: 21,
        question: 'What year was the NBA founded?',
        answer: '1946',
        wrongAnswers: ['1937', '1951', '1953']
    },

    {
        id: 22,
        question: 'Who was the point guard of the Utah Jazz team that Michael Jordan met in the Finals?',
        answer: 'John Stockton',
        wrongAnswers: ['Mark Jackson', 'Gary Payton', 'Isiah Thomas']
    },


    {
        id: 23,
        question: 'What colors were the Seattle Supersonics jerseys?',
        answer: 'Green and Yellow',
        wrongAnswers: ['Blue and Orange', 'Red and Black', 'Purple and Gold']
    },

    {
        id: 24,
        question: 'Who holds the record for the most missed shots?',
        answer: 'Kobe Bryant',
        wrongAnswers: ['Dirk Nowitzki', 'Dwyane Wade', 'LeBron James']
    },

    {
        id: 25,
        question: 'Which one of these teams has Carmelo Anthony NOT played for?',
        answer: 'Dallas Mavericks',
        wrongAnswers: ['Houston Rockets', 'Oklahoma City Thunder', 'Portland Trailblazers']
    },


    {
        id: 26,
        question: 'What NBA star was set to face a 15-year prison sentence but was granted clemency after four months?',
        answer: 'Allen Iverson',
        wrongAnswers: ['Chauncey Billups', 'Rasheed Wallace', 'Kwame Brown']
    },


    {
        id: 27, 
        question: 'Which star musician had a share of ownership in the Brooklyn Nets franchise?',
        answer: 'Jay-Z',
        wrongAnswers: ['Nas', 'A$AP Rocky', '50 Cent']
    },


    {
        id: 28,
        question: 'Which player shares the 61-point record at Madison Square Garden with Kobe Bryant?',
        answer: 'James Harden',
        wrongAnswers: ['Kevin Durant', 'LeBron James', 'Michael Jordan']
    },


    {
        id: 29,
        question: 'Which player choked his coach?',
        answer: 'Latrell Spreewell',
        wrongAnswers: ['Ron Artest', 'Robert Horry', 'Antoine Walker']
    },

    {
        id: 30,
        question: ''
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }

    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }

    {
        id: 
        question:
        answer:
        wrongAnswers:
    }

    {
        id: 
        question:
        answer:
        wrongAnswers:
    }

    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }


    {
        id: 
        question:
        answer:
        wrongAnswers:
    }
]