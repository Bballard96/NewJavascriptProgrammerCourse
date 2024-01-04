
Visit my repository https://github.com/fernandozamoraj/JavaScriptForNewProgrammersCourse
Fork the repository from the top menu

Clone the remote
```
  git clone https://github.com/YOURUSERNAME/JavaScriptForNewProgrammersCourse.git

```

 Add the upstream... this time point the upstream to my repository

```

 git remote add upstream https://github.com/fernandozamoraj/JavaScriptForNewProgrammersCourse.git
 
```

Every week or daily keep your post updated by doing the following two steps

```

git fetch upstream
git merge upstream/master master

```

or simply do it in one step

```

git rebase upstream/master

```

To verify that you have done it right enter the following commands
```

git remote -v

```

If you did everything right you should see the following


```
origin  https://github.com/YOURUSERNAME/JavaScriptForNewProgrammersCourse(fetch)
origin  https://github.com/YOURUSERNAME/JavaScriptForNewProgrammersCourse (push)
upstream        https://github.com/fernandozamoraj/JavaScriptForNewProgrammersCourse (fetch)
upstream        https://github.com/fernandozamoraj/JavaScriptForNewProgrammersCourse (push)

```
