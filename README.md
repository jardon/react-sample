# Project Title
## Project Description
Enter project description here.

## Build Directions
### Dependencies
The project is built using Docker which simplifies the host dependency requirements.  You'll want to install Docker using the preferred method for your operating system.  Here are some examples:

#### APT (Ubuntu, Debian, Elementary, Deepin, etc)
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu <codename> stable"
sudo apt install docker-ce docker-compose
```
**__NOTE:__** Replace `<codename>` with your OS codename(xenial, bionic, etc)
#### YUM (Pre 8 CENTOS and RHEL)
```bash
sudo yum-utils device-mapper-persistent-data lvm2 epel-release
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-compose
```
#### DNF (8+ CENTOS and RHEL, FEDORA)
```bash
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install docker-ce docker-compose
```
#### PACMAN (Arch, Manjaro)
```bash
sudo pacman -Sy docker docker-compose
```
You will probably want to **add your user to the docker group** to avoid having to use sudo for everything.  You can do that by using the command `sudo usermod -aG docker $(whoami)`

**__NOTE:__** You will have to log out and log back in to process the user group change on your account.

### Host Configuration

#### Enable Docker
```bash
sudo systemctl enable docker
sudo systemctl start docker
```
#### Clone Repository
```bash
git clone <git_address> /path/to/desired/destination
```
**__NOTE:__** You can omit the path if you want to clone it to the current directory

### Run Instance
```bash
cd /path/to/cloned/repo
docker-compose up -d
```
**__NOTE:__** You can omit the `-d` flag if you do not want to run detached.

## Connecting to the Application

The project is currently configured to forward port 3000 of the web application container to the host.  You should be able to access the application by pointing your web browser to `localhost:3000`

## Rebuilding Project
Rebuild project using cached images:
```bash
docker stop $(docker ps -a -q)
docker-compose build
docker-compose up
```
Rebuild project without using cached images:
```bash
docker stop $(docker ps -a -q)
docker system prune -af
docker-compose up
```
**__NOTE:__** You may need to delete the node_modules directories if the project fails to build
