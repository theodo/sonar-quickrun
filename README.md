# SONAR QUICKRUN
Owner : [Aurélien Le Masson](https://github.com/Ojisama)

The goal of this repo is to allow everyone to run a quick sonarqube analysis of snippets / files / repositories. 
This is run locally, no need to have a Sonarqube server somewhere.  


## Installation / Setup

1. Run `make start` to run the server
2. Go to http://localhost:9000 and login
3. Change the password as asked
4. Put the new password in the `sonar-project.properties` file (replace the `<TO UPDATE WITH NEW PASSWORD>` placeholder)
5. ???
6. Profit

## Usage

1. Copy the files you want to analyse in the `src` folder.
2. Run `make start` to have the sonarqube server running.
3. Run `make analysis` to launch an analysis.
4. Go to the URL given at the end of your analysis (or directly to http://localhost:9000/dashboard?id=quick-run-project)
5. ???
6. Profit

![image](https://user-images.githubusercontent.com/25685118/129384781-48a5d151-05e2-4a98-bd5c-3a83a3c6dd9e.png)
![image](https://user-images.githubusercontent.com/25685118/129384845-f89f23b4-dfa1-4788-92f9-9454b237c1e4.png)

