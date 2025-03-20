Going over the github repository:
We have 3 main folders: milestones, sourcecode, and teammeetinglogs.

In terminal, gc -m “test” runs a script that makes sure your code is actually doing something, makes sure you didn’t break anything, makes sure your code is structured properly, makes sure you’re not failing tests - keeps a clean codebase

2 docker compose files - docker-compose.yaml same as in class
Docker-compose-prod.yaml creates optimized build to make deployment easier

Milestone submissions - every document we create for the lab

Github progress tracking in github projects with to-do, doing, and done tasks (issues) assigned to each person

Branching, working on issue, and committing your issue:
Github > issues > choose an issue assigned to you

Cd projectsourcecode **- always make sure you're working in source code folder!!**
Git checkout -b <branch name> 
**You are now in a new branch called <branch name>. Now you can write your local code.**
**To commit in terminal:**
gc -m “add tailwind to head.hbs _closes #19_”
Git push origin <branch name>

Github -> create pull request
Code is tested to see if it breaks anything
Reviewers review eachother’s code
Confirm squash
Delete branch
Now in main, #19 pull request linking, git automatically closes that issue (moves it to done in projects)

-- one commit per issue
-- end commit message with “closes #[issue number]”




Notes for meeting with Bhargav:
Weekly TA meetings will be ½ what we’ve done so far and ½ plan for following week

Make sure each one of you is making consistent commits to repository (you will be graded on this) 

Graded on if github project board is up to date or not
Does github repo have latest code in main branch or not
Are all the features you said you will demonstrate that week actually demonstrable
Meeting notes need to be uploaded to github repo in short document (could be audio recording) 
Have clear responsibilities distributed across your team
