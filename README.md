# GitHub Branching and Hosting Guide

## Introduction

This guide will walk you through the process of creating a branch in a GitHub repository and hosting your files using GitHub Pages. Branching allows you to work on new features or changes without affecting the main project, and GitHub Pages lets you host static websites directly from your GitHub repository.

## Prerequisites

- Git installed on your local machine
- A GitHub account
- A repository on GitHub

## Step-by-Step Guide

### 1. Clone the Repository

First, clone your GitHub repository to your local machine:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. Create a New Branch

Create a new branch to work on a new feature or changes:

```
git checkout -b new-branch-name
```

Verify that you are now on the new branch:

```
git branch
```

### 3. Make Changes and Commit

Make the necessary changes to your files. After making changes, stage and commit them:

```

git add .

```

git commit -m "Describe your changes"

### 4. Push the Branch to GitHub

```

Push the new branch to your GitHub repository:

```

git push origin new-branch-name

```
### 5. Open a Pull Request
```

Go to your repository on GitHub, and you will see a prompt to open a pull request for your new branch. Follow the instructions to create a pull request. This step allows others to review your changes before merging them into the main branch.

```
### 6. Host Your Files Using GitHub Pages
```

To host your files using GitHub Pages:

```
  #### 1.Go to your repository on GitHub.
  #### 2. Click on the Settings tab.
  #### 3. Scroll down to the Pages section.
  #### 4. Under Source, select the branch you want to use (e.g., main or gh-pages).
  #### 5. Click Save.
```

Your site will be published at https://your-username.github.io/your-repository/.

```
### 7. Merge the Branch
```

Once your pull request is reviewed and approved, merge it into the main branch:

```
  git checkout main
```

git pull origin main

```
  git merge new-branch-name
```

git push origin main

```

### 8. Clean Up
```

Optionally, you can delete the branch after merging:

```

git branch -d new-branch-name
```

git push origin --delete new-branch-name

```

```

## Conclusion

By following these steps, you can effectively manage changes in your GitHub repository using branches and host your files with GitHub Pages. Branching allows for isolated development work, and GitHub Pages makes it easy to share your project with the world.

```

```
