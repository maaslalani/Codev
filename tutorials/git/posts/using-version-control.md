Here are some of the most common commands, roughly in the order you will encounter them:

```
git init
```

This will create a hidden `.git` folder inside your current folder — this is the "repository" (or repo) where git stores all of its internal tracking data. Any changes you make to any files within the original folder will now be possible to track.

✨ The original folder is now referred to as your working directory, as opposed to the repository (the `.git` folder) that tracks your changes. You work in the working directory. Simple!

**Clone an existing repo:**

```
git clone https://github.com/maaslalani/Codev.git
```

This will download a `.git` repository from the internet (GitHub) to your computer and extract the latest snapshot of the repository (all the files) to your working directory. By default it will all be saved in a folder with the same name as the repo (in this case Codev).<br>

```
git add
```

Adds the files in the local repository and stages them for commit.

```
git commit -m "First commit"
```

Commits the tracked changes and prepares them to be pushed to a remote repository.
