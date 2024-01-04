# Git Cheatsheet

## These commands are what you need to clone a repository
- git clone [your repository]
- cd [your repository]
- make any changes like modify files or add new files
- git add .
- git commit -m "I made this change ... description of my change"
- git push origin master

## Most common commands

- git pull upstream master

to pull down changes from original repository (instructors)

- git status

to see the current status of your directory

- git log

to see the log... usually you can tell if you need to push from this

- git rebase --interactive HEAD~1 

this command is useful to change your commit comment 
it is also useful to squash several commits into one when
you change the 1 to the last n that you want to squash

- git checkout -b new/branch

This command allows you to create a new/branch
and move to that branch

- git checkout master

This command allows your to change from your branch to master

- git checkout new/branch

This command allows your to move from a branch (e.g. master) to new/branch

- git push origin new/branch

This command allows your push your changes to the central repo (github)

- git pull

This command combines fetch and merge into your current branch from the central repo (github)

- git pull origin master

This command makes it explicit to pull. In some cases there may not be a default for git pull so you have to be specific about which remote and branch to pull

- git remote

This command shows you your remotes (remotes are your central repos. i.e. github)

- git remote -v

Get detailed information about your remotes

- git branch

Shows you which branches you have and which branch you are currently in

- git merge master

If you have to merge master into your local branch
You must do a push afterwards
If there are conflicts you must fix them and commit then execute the following command

- git merge --continue

- gitk 

allows you to visually see your commit log in a GUI

