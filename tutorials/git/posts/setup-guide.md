Before you start using Git, you have to install it on your computer. You can generally do so through use package management tool that comes with your OS distribution to install git.

### Installing Git on Linux
Open a terminal window. **Copy & paste the following** into the terminal window and press `enter`. You may be prompted to enter your password.

#### Debian-based linux systems

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install git
```

#### Red Hat-based linux systems

```
sudo yum upgrade
sudo yum install git
```

#### Arch linux systems

```
sudo pacman -Syu
sudo pacman -Sy git
```

### Installing Git on Mac

You can install git on Mac use Homebrew. Homebrew is simplifies the installation of software on the Mac OS X operating system. And then install git use command `brew install git`. To install it, **Copy & paste the following** into the terminal window and press `enter`.

```
brew install git
```

### Installing Git on Windows
**Download** *Git* from [Git for windows](https://git-scm.com/download/win) and *install it*.

### Configuring Git
In order to use Git you need to set at least a name and email. Use this command to configure your name and email.

```
git config --global user.name  "User Name"
git config --global user.email "user@email.com"
```