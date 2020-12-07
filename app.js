console.log($);

const triviaQuestions = [
    {
        id: 1,
        question: 'Which player is over 7 feet tall and won championships with both the Los Angeles lakers and Miami Heat?',
        answer: 'Shaquille O\'Neal',
        wrongAnswers: ['Yao Ming', 'Kareem Abdul-Jabbar', 'Tyson Chandler'],
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
        question: 'The Miami Heat\'s neon blue and pink jerseys are called what?',
        answer: 'Vice Nights',
        wrongAnswers: ['Neon Nights', 'Cyber Nights', 'Electric Neon']
    },


    {
        id: 31,
        question: 'The classic Detroit Pistons jersey featured what icon?',
        answer: 'Horse head with flames',
        wrongAnswers: ['Car engine on fire', 'A spaceship blasting off', 'A cheetah with a trail of flames']
    },


    {
        id: 32,
        question: 'What was Hakeem Olajuwon\'s nickname?',
        answer: 'The Dream',
        wrongAnswers: ['The Cream', 'Extreme', 'Supreme']
    },


    {
        id: 33,
        question: 'Which player is featured on the NBA logo?',
        answer: 'Jerry West',
        wrongAnswers: ['Pistol Pete', 'Larry Bird', 'Magic Johnson']
    },


    {
        id: 34,
        question: 'Which college did Michael Jordan attend?',
        answer: 'UNC',
        wrongAnswers: ['UCLA', 'University of Illinois', 'Notre Dame']
    },


    {
        id: 35,
        question: 'Were Michael Jordan\'s kids in the film "Space Jam" portrayed by his real kids?',
        answer: 'No',
        wrongAnswers: ['Yes']
    },


    {
        id: 36,
        question: 'In December of 2016, which player scored 60 points while holding the ball for only 90 seconds and dribbling only 11 times?',
        answer: 'Klay Thompson',
        wrongAnswers: ['Devin Booker', 'James Harden', 'Steph Curry']
    },


    {
        id: 37,
        question: 'Which player once scored 100 points in a game?',
        answer: 'Wilt Chamberlain',
        wrongAnswers: ['Kareem Abdul-Jabbar', 'Kobe Bryant', 'Vince Carter']
    },


    {
        id: 38,
        question: 'What percentage of high school basketball players make it to the NBA?',
        answer: '0.03%',
        wrongAnswers: ['0.02%', '0.06%', '0.01%']
    },

    {
        id: 39,
        question: 'Which former NBA player became a huge star while playing basketball in China?',
        answer: 'Stephon Marbury',
        wrongAnswers: ['Lance Stephenson', 'Tracy McGrady', 'Steve Francis']
    },


    {
        id: 40, 
        question: 'What is the San Antonio Spurs mascot?',
        answer: 'A Coyote',
         wrongAnswers: ['A Cowboy', 'A Horse', 'A Cowboy Boot']
    },


    {
        id: 41, 
        question: 'Which of these players have not torn their ACL?',
        answer: 'Stephen Curry',
        wrongAnswers: ['Kristaps Porzingis', 'Zach Lavine', 'DeMarcus Cousins']
    },

    {
        id: 42,
        question: 'What is the nickname for the duo of Stephen Curry and Klay Thompson?',
        answer: 'Splash Brothers',
        wrongAnswers: ['Smash Brothers', 'Bash Brothers', 'Bounce Brothers']
    },

    {
        id: 43,
        question: '76ers center, Joel Embiid, is a native of which African country?',
        answer: 'Cameroon',
        wrongAnswers: ['Nigeria', 'Kenya', 'Sudan']
    },

    {
        id: 44,
        question: 'Who invented the game of basketball?',
        answer: 'James Naismith',
        wrongAnswers: ['Alexander Fleming', 'Alfred Blalock', 'Benjamin Spock']
    },


    {
        id: 45,
        question: 'Which NBA player hit a clutch 3-pointer to send Game 6 of the 2013 Finals into overtime?',
        answer: 'Ray Allen',
        wrongAnswers: ['Manu Ginobli', 'Shane Battier', 'Kevin Durant']
    },


    {
        id: 46,
        question: 'Which NBA player was infamously selected right before Michael Jordan in the Draft?',
        answer: 'Sam Bowie',
        wrongAnswers: ['Mark Eaton', 'Phil Jackson', 'Steve Kerr']
    },


    {
        id: 47,
        question: 'Which NBA player had the nickname of "Ice Man"?',
        answer: 'George Gervin',
        wrongAnswers: ['Julius Erving', 'Earl Monroe', 'Moses Malone']
    },


    {
        id: 48,
        question: 'What team has LeBron James not played on?',
        answer: 'Boston Celtics',
        wrongAnswers: ['Cleveland Cavaliers', 'Los Angeles Lakers', 'Miami Heat']
    },

    {
        id: 49,
        question: 'In what year did the Seattle Supersonics move to Oklahoma City and become the Thunder?',
        answer: '2008',
        wrongAnswers: ['2006', '2007', '2009']
    },

    {
        id: 50,
        question: 'Which team drafted Dennis Rodman?',
        answer: 'Detroit Pistons',
        wrongAnswers: ['Chicago Bulls', 'Los Angeles Lakers', 'San Antonio Spurs']
    },

    {
        id: 51, 
        question: 'Which of these NBA players does not have their own signature shoe?',
        answer: 'Luka Doncic',
        wrongAnswers: ['Klay Thompson', 'Joel Embiid', 'Donovan Mitchell']
    },

    {
        id: 52,
        question: 'How many MVPs has LeBron James won?',
        answer: '4',
        wrongAnswers: ['3', '5', '2']
    }
]




$(()=> {
    





})
