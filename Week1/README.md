
## First Hour
---
- Expectations
  - Student Expectations
  - Instructor Expectations
- Class structure 
    - 20 minutes lecture
    - 20 minutes hands on
    - 10 minutes questions
    - 10 minute break
    - Pop quiz at the beginning of each class except day 1, mid-term, finals day
- Objectives
  - fundamentals
  - taste of programming
  - learn something new
  - get an aquired skill
  - Algorithms
  - What is an algorithm (recipe: PB&J Sandwich)
  ````
    gather ingredients
    gather utensils
    on a plate place the bread
    with a butter knife or spoon spread peanut butter on one slice
    with another clean spoon spread jelly on the other slice
    join 
  ````
  - Start of learning to think like a programmer
  - Decide if programming is right for you (only you can decide that)
  - Learn how to use the contemporary tools of the trade (IDE or Editor, Git, Libraries)
  - Learn uses for JS
  - Learn how to use libraries and frameworks
- What do I get for completing this course?
  - certificate of completion
  - passing 70%
  - exam 40%
    - midterm 30 questions
    - final   30 questions
  - homework 40%
  - quizzes 10% 5 questions each
  - class participation   
- Code Morsels is not accredited
- 5-10 Hours of homework
- Learning hurts or at least uncofortable
- What you will learn
- Why Javascript
- What else will I need after completing the course
- Resources - discoord, github repo, codemorsels secure page, book
- Who can I turn to for help?


## What is JavaScript
- Defacto front end language
  - What is frond end?
  - What is back end?
- Has no relationship to Java
- Javascript went from most hated language to most loved and popular
- Javascript is old but JavaScript was modernized in the HTML5 movement
- Owes a lot of popularity due to JQuery and the V8 Engine
- JavaScript is a dynamic language
    - not as wordy as a static language (e.g. java, C#, C++)
    - it is considered a scripting langauge
    - it is not classy (there is TypeScript which is more like a static langauge)
- JS is 1 of 5 components
- 5 Components are JS, HTML, CSS, Back End, and DB(NoSql, Relational)
- JS can also be used on the back end

## Statistics from Stack Overflow
- JS Top Programming/Scripting Language
- Top Web Frameworks: JQuery top framework, React, Angular
- Other frameworks - node.js, .Net, .Net Core
- Source: https://insights.stackoverflow.com/survey/2019

## Programming is like any other discipline
- It is an art form
- It is a science
- Not all practices are shared - propietary
- Levels of mastery
- Employers need problem solvers
- Sometimes recipes are useful
- Sometimes the problem is brand new to you or period
- What are the three things to become a good programmer? Practice, Practice, Practice
- You don't have to be a master to become a professional though
- You don't need all five components to become a professiona but you need at least fundamentals of the first three (CSS, HTML, JavaScript)

# Second Hour
- Windows command uses Disk Operating System (DOS) 
- Unix and Linux Systems use Bourne Again Shell (BASH) 
- Command Line Basics
  - why are we talking about the command line?
  - We fear what we do not know!
    - Do not fear the command line
    - Let's learn it instead
  - opening the command line
  - basic commands [commandLineBasics.md](commandLineBasics.md)
  - installing Gow or Running Gitbash
  - why BASH and not MS DOS?
  - BASH is a richer utilitie or set of utilities... BASH works on Mac and Linux
- Most common commands
  - pwd
    - displays your full current path
    - I think it means print working directory *note
  - ls, ls -al
    - lists all your files and directories
  - cd
    - change directory
  - mkdir [foldername]
    - creates a directory (aka a folder)
  - rm [filename]
  - rm -r [foldername]
  - rm -rf [foldername]
  - BE EXTRA CAREFUL WITH RM
  - touch [filename]
  - cat [filename]
  - mv [filename] [newfilename]
  - use of tab
    - e.g. cd /users/Java[tab] will finish out the command
  - use of up and down arrows
  - history
  - cd .. to go up one directory
    - .. means up one
    - . means the current directory
  - history > myhistory.txt
  - ./[exectuable file name]
  - clear

- In class assignment
    - navigate to your home directory
    - create child folder named mydocs
    - navigate into that director
    - create another child folder name child1
    - create another child folder named child2
    - in each folder create two files named data.txt
    - modify the file data.txt by adding a line
    - rename each data.txt file to data1.txt
    - navigate into the folder named child1
    - navigate up to the parent folder
    - use the history command to view your history

- Most common git commands
  - git itself is a command
  - we study these once we install git  

# Third hour - Installing Software

- 4 products
- Gow - software for running BASH utilities from windows command line
- Git - Version Control Software
- NodeJs - Software for running your JS Code
- Visual Studio Code (Not the same Visual Studio)
## Install Visual Studio Code from https://code.visualstudio.com/

- https://code.visualstudio.com/

## Install the plugin JSHint in Visual Studio

## Install git for your appropriate OS (Linux, Mac or Windows) from https://git-scm.com/downloads
- Documentation at https://git-scm.com/doc
- Setup your credentials locally using these instructions https://confluence.atlassian.com/bitbucket/configure-your-dvcs-username-for-commits-950301867.html

## Let's examine git
 - git clone
 - git remote -v
 - git status
 - git add .
 - git commit -m "I changed something"
 - git push origin master

 - the three step process
 - change or add files
 - git add to stage files
 - git status to see staged files
 - git commit to commit changes locally
 - git push to commit changes to remote branch
 - branches
 - git branch
 - creating a branch
 - git checkout -b feature/add-login
 - git checkout master
 - git checkout feature/add-login
 - the .gitignore file

# Installing required software

## Install node from https://nodejs.org/en/download/

## Create a github account and email me the link to your repo so I can follow you at BeginningProgrammer.com@gmail.com

- https://github.com/

## Fork this repository and then clone it from your repository
- https://github.com/fernandozamoraj/JavaScriptForNewProgrammersCourse

## Keep your fork up to date by adding an upstream
- Instructions are here on how to do that https://stefanbauer.me/articles/how-to-keep-your-git-fork-up-to-date 

- Step by step to do it with this repo [howto-keep-remote-updated.md](../Week2/howto-keep-remote-update.md)

## Run the [helloWorld.js](helloWorld.js) program in Week1 folder
- node hellowWorld.js
- if you installed everything correctly run the command above and it should output "hello world"





