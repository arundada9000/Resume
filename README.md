# Branching a repository

To Branch and existing repo you can you following command

- git branch ( Check current working branch and list existing branches)
- git checkout -b name (Creating a new branch )
  eg : git checkout -b feat/readme
  It creates a new branch with name feat/readme
  When a new branch is created it will be the active branch. SO now whatever changes you make will not be updated in the main branch.
- Use same command as main branch to add, commit and push.
  eg: git add .
  git commit -m"Committed in new branch "
  git push origin feat/readme (Pushes the new branch to github so you can see it there)

## Now that you have made some changes in the new branch you can ask for pull request from github.

Now go to github -> to your repository -> Pull req -> New pull req
