console.log($);


// LIST OF TRIVIA QUESTIONS
const triviaQuestions = [
    {
        id: 1,
        question: 'Which player is over 7 feet tall and won championships with both the Los Angeles lakers and Miami Heat?',
        rightAnswer: 'Shaquille O\'Neal',
        answers: ['Yao Ming', 'Kareem Abdul-Jabbar', 'Shaquille O\'Neal', 'Tyson Chandler'],
        points: 100
    },

    {
        id: 2,
        question: 'Which NBA player is known for starting the in-game fight known as "Malice at the Palace"?',
        rightAnswer: 'Ron Artest',
        answers: ['DeMarcus Cousins', 'Ron Artest', 'John Starks', 'Dennis Rodman'],
        points: 100
    },

    {
        id: 3,
        question: 'Which is the first team to come back from a 3-1 deficit in the NBA finals?',
        rightAnswer: 'Cleveland Cavaliers',
        answers: ['Cleveland Cavaliers', 'Washington Bullets', 'Los Angeles Lakers', 'Golden State Warriors'],
        points: 100
    },

    {
        id: 4,
        question: 'Which team won the NBA finals in 2000?',
        rightAnswer: 'Los Angeles Lakers',
        answers: ['San Antonio Spurs', 'Detroit Pistons', 'New Jersey Nets', 'Los Angeles Lakers'],
        points: 100
    },

    {
        id: 5,
        question: 'Which college did LeBron James strong suggest he would have gone to?',
        rightAnswer: 'Ohio State',
        answers: ['Duke', 'UNC', 'Ohio State', 'UCLA'],
        points: 100
    },
    

    {
        id: 6,
        question: 'Which Jordan shoe model did Michael Jordan wear in his first NBA finals?',
        rightAnswer: 'Air Jordan VI',
        answers: ['Air Jordan I', 'Air Jordan IV', 'Air Jordan V', 'Air Jordan VI'],
        points: 100
    },

    {
        id: 7,
        question: 'Who is the shortest NBA player in history?',
        rightAnswer: 'Muggsy Bogues',
        answers: ['Isaiah Thomas', 'Muggsy Bogues', 'Earl Boykins', 'Allen Iverson'],
        points: 100
    },

    {
        id: 8,
        question: 'Who played every position in an NBA finals game in his rookie year?',
        rightAnswer: 'Magic Johnson',
        answers: ['Michael Jordan', 'Larry Bird', 'Magic Johnson', 'Jerry West'],
        points: 100
    },

    {
        id: 9,
        question: 'Who is the youngest player to reach 10,000 points?',
        rightAnswer: 'LeBron James',
        answers: ['LeBron James', 'Kobe Bryant', 'Kevin Durant', 'Michael Jordan'],
        points: 100
    },

    {
        id: 10, 
        question: 'Who is the only player to win MVP as a rookie?',
        rightAnswer: 'Magic Johnson',
        answers: ['Derrick Rose', 'Bill Russell', 'Magic Johnson', 'David Robinson'],
        points: 100
    },

    {
        id: 11,
        question: 'Which team drafted Kobe Bryant?',
        rightAnswer: 'Charlotte Hornets',
        answers: ['Los Angeles Lakers', 'Charlotte Hornets', 'Seattle Supersonics', 'Miami Heat'],
        points: 100
    },

    {
        id: 12,
        question: 'Which team is the first to lose three straight NBA Finals?',
        rightAnswer: 'New York Knicks',
        answers: ['Detroit Pistons', 'Utah Jazz', 'Houston Rockets', 'New York Knicks'],
        points: 100
    },

    {
        id: 13,
        question: 'Which team played the Los Angeles Lakers in the 2009 NBA Finals?',
        rightAnswer: 'Orlando Magic',
        answers: ['Cleveland Cavaliers', 'Boston Celtics', 'Miami Heat', 'Orlando Magic'],
        points: 100
    },

    {
        id: 14,
        question: 'Which team drafted three players in a row that later became MVPs?',
        rightAnswer: 'Oklahoma City Thunder',
        answers: ['Oklahoma City Thunder', 'Los Angeles Lakers', 'Golden State Warriors', 'Phoenix Suns'],
        points: 100
    },

    {
        id: 15,
        question: 'Who is the youngest player to ever be drafted?',
        rightAnswer: 'Andrew Bynum',
        answers: ['Zion Williamson', 'LaMelo Ball', 'Andrew Bynum', 'Luka Doncic'],
        points: 100
    },

    {
        id: 16,
        question: 'Where was the first NBA all-star game held?',
        rightAnswer: 'Boston',
        answers: ['New York', 'Los Angeles', 'Boston', 'Phoenix'],
        points: 100
    },

    {
        id: 17,
        question: 'How many 3-point shots did Shaquille O\'Neal make throughout his career?',
        rightAnswer: '1',
        answers: ['2', '3', '1', '4'],
        points: 100
    },

    {
        id: 18,
        question: '60% of NBA players become broke after 5 years of retirement',
        rightAnswer: 'True',
        answers: ['False', 'True'],
        points: 100
    },

    {
        id: 19,
        question: 'How many shots did Muggsy Bogues (the shortest NBA player) block in his career?',
        rightAnswer: '39',
        answers: ['12', '29', '39', '37'],
        points: 100
    },

    {
        id: 20,
        question: 'Which NBA player was stabbed 11 times in a season and still played every game?',
        rightAnswer: 'Paul Pierce',
        answers: ['Jermaine O\'Neal', 'Stephen Jackson', 'Paul Pierce', 'Kevin Garnett'],
        points: 100
    },

    {
        id: 21,
        question: 'What year was the NBA founded?',
        rightAnswer: '1946',
        answers: ['1937', '1951', '1953', '1946'],
        points: 100
    },

    {
        id: 22,
        question: 'Who was the point guard of the Utah Jazz team that Michael Jordan met in the Finals?',
        rightAnswer: 'John Stockton',
        answers: ['Mark Jackson', 'Gary Payton', 'Isiah Thomas', 'John Stockton'],
        points: 100
    },


    {
        id: 23,
        question: 'What colors were the Seattle Supersonics jerseys?',
        rightAnswer: 'Green and Yellow',
        answers: ['Blue and Orange', 'Green and Yellow', 'Red and Black', 'Purple and Gold'],
        points: 100
    },

    {
        id: 24,
        question: 'Who holds the record for the most missed shots?',
        rightAnswer: 'Kobe Bryant',
        answers: ['Dirk Nowitzki', 'Dwyane Wade', 'LeBron James', 'Kobe Bryant'],
        points: 100
    },

    {
        id: 25,
        question: 'Which one of these teams has Carmelo Anthony NOT played for?',
        rightAnswer: 'Dallas Mavericks',
        answers: ['Dallas Mavericks', 'Houston Rockets', 'Oklahoma City Thunder', 'Portland Trailblazers'],
        points: 100
    },


    {
        id: 26,
        question: 'What NBA star was set to face a 15-year prison sentence but was granted clemency after four months?',
        rightAnswer: 'Allen Iverson',
        answers: ['Chauncey Billups', 'Rasheed Wallace', 'Kwame Brown', 'Allen Iverson'],
        points: 100
    },


    {
        id: 27, 
        question: 'Which star musician had a share of ownership in the Brooklyn Nets franchise?',
        rightAnswer: 'Jay-Z',
        answers: ['Nas', 'Jay-Z', 'A$AP Rocky', '50 Cent'],
        points: 100
    },


    {
        id: 28,
        question: 'Which player shares the 61-point record at Madison Square Garden with Kobe Bryant?',
        rightAnswer: 'James Harden',
        answers: ['James Harden', 'Kevin Durant', 'LeBron James', 'Michael Jordan'],
        points: 100
    },


    {
        id: 29,
        question: 'Which player choked his coach?',
        rightAnswer: 'Latrell Spreewell',
        answers: ['Ron Artest', 'Robert Horry', 'Antoine Walker', 'Latrell Spreewell'],
        points: 100
    },

    {
        id: 30,
        question: 'The Miami Heat\'s neon blue and pink jerseys are called what?',
        rightAnswer: 'Vice Nights',
        answers: ['Neon Nights', 'Vice Nights', 'Cyber Nights', 'Electric Neon'],
        points: 100
    },


    {
        id: 31,
        question: 'The classic Detroit Pistons jersey featured what icon?',
        rightAnswer: 'Horse head with flames',
        answers: ['Horse head with flames', 'Car engine on fire', 'A spaceship blasting off', 'A cheetah with a trail of flames'],
        points: 100
    },


    {
        id: 32,
        question: 'What was Hakeem Olajuwon\'s nickname?',
        rightAnswer: 'The Dream',
        answers: ['The Cream', 'Extreme', 'Supreme', 'The Dream'],
        points: 100
    },


    {
        id: 33,
        question: 'Which player is featured on the NBA logo?',
        rightAnswer: 'Jerry West',
        answers: ['Pistol Pete', 'Jerry West', 'Larry Bird', 'Magic Johnson'],
        points: 100
    },


    {
        id: 34,
        question: 'Which college did Michael Jordan attend?',
        rightAnswer: 'UNC',
        answers: ['UCLA', 'University of Illinois', 'Notre Dame', 'UNC'],
        points: 100
    },


    {
        id: 35,
        question: 'Were Michael Jordan\'s kids in the film "Space Jam" portrayed by his real kids?',
        rightAnswer: 'No',
        answers: ['Yes', 'No'],
        points: 100
    },


    {
        id: 36,
        question: 'In December of 2016, which player scored 60 points while holding the ball for only 90 seconds and dribbling only 11 times?',
        rightAnswer: 'Klay Thompson',
        answers: ['Devin Booker', 'Klay Thompson', 'James Harden', 'Steph Curry'],
        points: 100
    },


    {
        id: 37,
        question: 'Which player once scored 100 points in a game?',
        rightAnswer: 'Wilt Chamberlain',
        answers: ['Kareem Abdul-Jabbar', 'Kobe Bryant', 'Vince Carter', 'Wilt Chamberlain'],
        points: 100
    },


    {
        id: 38,
        question: 'What percentage of high school basketball players make it to the NBA?',
        rightAnswer: '0.03%',
        answers: ['0.02%', '0.03%', '0.06%', '0.01%'],
        points: 100
    },

    {
        id: 39,
        question: 'Which former NBA player became a huge star while playing basketball in China?',
        rightAnswer: 'Stephon Marbury',
        answers: ['Lance Stephenson', 'Tracy McGrady', 'Steve Francis', 'Stephon Marbury'],
        points: 100
    },


    {
        id: 40, 
        question: 'What is the San Antonio Spurs mascot?',
        rightAnswer: 'A Coyote',
        answers: ['A Cowboy', 'A Horse', 'A Coyote', 'A Cowboy Boot'],
        points: 100
    },


    {
        id: 41, 
        question: 'Which of these players have not torn their ACL?',
        rightAnswer: 'Stephen Curry',
        answers: ['Stephen Curry', 'Kristaps Porzingis', 'Zach Lavine', 'DeMarcus Cousins'],
        points: 100
    },

    {
        id: 42,
        question: 'What is the nickname for the duo of Stephen Curry and Klay Thompson?',
        rightAnswer: 'Splash Brothers',
        answers: ['Smash Brothers', 'Bash Brothers', 'Bounce Brothers', 'Splash Brothers'],
        points: 100
    },

    {
        id: 43,
        question: '76ers center, Joel Embiid, is a native of which African country?',
        rightAnswer: 'Cameroon',
        answers: ['Nigeria', 'Cameroon', 'Kenya', 'Sudan'],
        points: 100
    },

    {
        id: 44,
        question: 'Who invented the game of basketball?',
        rightAnswer: 'James Naismith',
        answers: ['James Naismith', 'Alexander Fleming', 'Alfred Blalock', 'Benjamin Spock'],
        points: 100
    },


    {
        id: 45,
        question: 'Which NBA player hit a clutch 3-pointer to send Game 6 of the 2013 Finals into overtime?',
        rightAnswer: 'Ray Allen',
        answers: ['Manu Ginobli', 'Shane Battier', 'Ray Allen', 'Kevin Durant'],
        points: 100
    },


    {
        id: 46,
        question: 'Which NBA player was infamously selected right before Michael Jordan in the Draft?',
        rightAnswer: 'Sam Bowie',
        answers: ['Mark Eaton', 'Phil Jackson', 'Steve Kerr', 'Sam Bowie'],
        points: 100
    },


    {
        id: 47,
        question: 'Which NBA player had the nickname of "Ice Man"?',
        rightAnswer: 'George Gervin',
        answers: ['Julius Erving', 'George Gervin', 'Earl Monroe', 'Moses Malone'],
        points: 100
    },


    {
        id: 48,
        question: 'What team has LeBron James not played on?',
        rightAnswer: 'Boston Celtics',
        answers: ['Boston Celtics', 'Cleveland Cavaliers', 'Los Angeles Lakers', 'Miami Heat'],
        points: 100
    },

    {
        id: 49,
        question: 'In what year did the Seattle Supersonics move to Oklahoma City and become the Thunder?',
        rightAnswer: '2008',
        answers: ['2006', '2007', '2008', '2009'],
        points: 100
    },

    {
        id: 50,
        question: 'Which team drafted Dennis Rodman?',
        rightAnswer: 'Detroit Pistons',
        answers: ['Chicago Bulls', 'Los Angeles Lakers', 'San Antonio Spurs', 'Detroit Pistons'],
        points: 100
    },

    {
        id: 51, 
        question: 'Which of these NBA players does not have their own signature shoe?',
        rightAnswer: 'Luka Doncic',
        answers: ['Klay Thompson', 'Luka Doncic', 'Joel Embiid', 'Donovan Mitchell'],
        points: 100
    },

    {
        id: 52,
        question: 'How many MVPs has LeBron James won?',
        rightAnswer: '4',
        answers: ['3', '5', '2', '4'],
        points: 100
    }
]



$(()=> {

// cached dom nodes
const $modal = $('#modal');
const $modalText = $('#modal-box');
const $openModal = $('#instructions');
const $closeModal = $('#close');
const $audio = $('audio');
const $twoPlayer = $('#two-player');

//DEFINED VARIABLES
let randomIndex = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
let randomQuestion = randomIndex.question;
const $answerQuestion1 = randomIndex.answers[0];
const $answerQuestion2 = randomIndex.answers[1];
const $answerQuestion3 = randomIndex.answers[2];
const $answerQuestion4 = randomIndex.answers[3];
// let answerClicked = 

 // CREATING PLAYER CLASS
 class Player {
    constructor (name, points, isActive){
        this.name = name;
        this.points = points;
        this.isActive = isActive;
    }
  //   gainPoints() {
  //     if 
  //   }
}


// CREATING TWO INSTANCES OF THE PLAYER
const east = new Player ('East', 0, false);
const west = new Player ('West', 0, false);

console.log(east);


// FUNCTIONS TO OPEN THE MODAL
const instructions = () => {
    $modal.css('display', 'flex');

  }

  const closeModal = () => {
    $modal.css('display', 'none');
  }




  // OPENING THE MODAL ACTION
  

  const pullQuestion = () => {
    $('<h2>').addClass('question').text(`${randomQuestion}`).insertBefore('#choice1');
    $('<h3>').addClass('answers').text(`${$answerQuestion1}`).appendTo('#choice1');
    $('<h3>').addClass('answers').text(`${$answerQuestion2}`).appendTo('#choice2');
    $('<h3>').addClass('answers').text(`${$answerQuestion3}`).appendTo('#choice3');
    $('<h3>').addClass('answers').text(`${$answerQuestion4}`).appendTo('#choice4');   
    }
    



  const startGame = () => {
    $twoPlayer.remove();
    $openModal.remove();
    $('<button>').addClass('choices').attr('id', 'choice1').insertBefore('#modal');
    $('<button>').addClass('choices').attr('id', 'choice2').insertBefore('#modal');
    $('<button>').addClass('choices').attr('id', 'choice3').insertBefore('#modal');
    $('<button>').addClass('choices').attr('id', 'choice4').insertBefore('#modal');
    pullQuestion(); 

    alert('East is up first!');
    $('<h3>').attr('id', 'score').text(`You have scored ${east.points} out of 500`).insertBefore('#choice1');
  }

 

//   const checkAnswer = () => {
//     let answerClicked = 
//   }

 



$openModal.on('click', instructions);
  $closeModal.on('click', closeModal);


$twoPlayer.on('click', startGame);

})
