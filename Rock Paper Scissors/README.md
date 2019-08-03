# Rock Paper Scissors Tournament
This project is part of - `"Intro to the Programming" Nanodegree` at `Udacity` learning platform.
The goal of the project is to create a `Rock Paper Scissors `tournament between different players using `Python Language`. The live version of the project can be accessed using this [Link](https://vamshi-krishna-prime.github.io/Rock%20Paper%20Scissors/).

## About the game
The game of Rock Paper Scissors is played throughout the world. It dates back to the Han Dynasty of ancient China, contemporary with the Roman Empire. Today it is called jian dao, shi tou, bu in China, pierre-papier-ciseaux or chifoumi in France; roshambo in parts of the U.S., taş kağıt makas in Turkey, and jan-ken-pon in Japan. It is the distant ancestor of the type system in the immensely popular Pokémon games. The game is played competitively; there have been international RPS tournaments — however, it's more commonly used as a playful way of settling disputes, whether in the schoolyard or the barroom.

The game has two players. In a single round of the game, each player secretly chooses one of three moves, or "throws" — rock, paper, or scissors. Then, players reveal their moves at the same time. If both players picked the same move, there is no winner. Otherwise, rock beats scissors; paper beats rock; and scissors beat paper. Players can play a single round, or "best of three", or any number of other options.

## INFORMATION
[python_code.py]-------- 
+ Player 1 : <kbd>Human player</kbd>, 
+ Player 2 : <kbd>RandomPlayer</kbd>, that chooses its move at random
+ Player 3 : <kbd>ReflectPlayer</kbd>, that remembers opponent's move in last round, and plays that move this round
+ Player 4 : <kbd>ReflectPlayer</kbd>, Cycles through 'rock, paper, scissors'. 

[python_code_2.py]-------- 
+ Same as `python_code.py` except for the <kbd>player 3</kbd> behviour.
+ Player 3 : <kbd>ReflectPlayer</kbd>, Mimics only Human player's previous move. 

![rps play](https://user-images.githubusercontent.com/49973760/62416252-93853700-b654-11e9-95b6-57d9d1601723.PNG)

**The Aim of the project is as follows:**

1. The aim of this project is to use the OOPS (Object Oriented Progeamming) concepts in Python language learnt throughout the Nanodegree program.
2. Succesfully implement a tournament between <kbd>Human player</kbd> and distinctive <kbd>computer players</kbd>.

## Instructions
+ Use Command line shell like GitBash to run the python program - [install Git-scm](https://git-scm.com/downloads)
+ If you are a beginner, follow the steps in this [link](https://www.atlassian.com/git/tutorials/install-git#windows)
+ If using GitBash, install **'colorama'** and **'termcolor'** using the following commands before executing the python code:
```
pip install colorama
pip install termcolor
```

## Gameplay
Each round has 3 sessions: 
+ Session 1 : Play-off betweenw <kbd>Player 1</kbd>  and <kbd>Player 2</kbd>. 
+ Session 2 : Play-off betweenw <kbd>Player 3</kbd> and <kbd>Player 4</kbd>. 
+ Session 3 : Play-off betweenw <kbd>'session 1 winner'</kbd> and <kbd>'session 2 winner'</kbd>. 
+ Game length is of user's choice.

 
### Additional features successfully implemented:
After meeting the initial requirements, more advanced features were added to the project.
+ Colors were added in the code for aesthetic purposes.
+ Some text were given the `Blink` special effect. 
+ Additional effects such as `Spin` are implemented.
+ Keeps individual session score and displays overall match result.
+ Validate user input and let the user try again if invalid input is received.

## Contribution:
Contributons are welcome as long as your code follows the below style guidelines:
+ The program plays a game of Rock Paper Scissors, following the conventional rules.
+ + Paper beats rock; rock beats scissors; scissors beat paper.
+ The program plays a match consisting of multiple rounds, and tracks players' total score.
+ + The game displays the results after each round, including each player's score. At the end, the final score is displayed.
+ The code uses classes and objects to store game data, rather than global variables.
+ + Facts about the current match, such as the players' score, or the number of rounds played, should be stored as instance variables. They shouldn't be stored as global variables. It's okay to use global variables for the game moves "rock", "paper", and "scissors".
+ The code uses subclasses appropriately.
+ + Each computer player strategy should be a subclass of the Player base class.
+ The program checks the validity of user input.
+ + The code should be thoroughly tested. Invalid moves should not make the program crash and should give the user a chance to retry that move until they enter a valid move.Also, it should not treat invalid input as a valid move.
+ The code style follows the standard Python style guide.
+ + The pycodestyle tool should report zero errors and zero warnings. If the program is called rps.py, the command to test it is pycodestyle rps.py.
+ The number of rounds per game, as well as when to stop, are up to the user!


#### Possible Improvements

Topic open for Suggestions and discussion.

## Technologies Used

+ Python - OOPS
+ Visual Studio Code 
+ Git
+ Git Bash

## Acknowledgement

Thanks to the mentor- `Hadeel Alharthi` and the Udacity platform for the feedback, ideas, and help throughout the course and help me attain the necessary knowledge for the succesful implementation of this project.
