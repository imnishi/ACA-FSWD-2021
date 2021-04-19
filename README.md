# ACA-FSWD-2021

## CMD commamds
- git add
  - adds new/changed file to staging area
  - command in 3 ways
    1. git add .
    2. git add < file >
    3. git add < path >

- git commit
  - puts the project's currently staged changes into local repository
  - command
    1. git commit .
    2. git commit -m"your message for this commit"

- git push
  - pushes the final code of local repository to remote repository
  - commad
    1. git push origin 
    2. git push origin master

- git clone
  - clone /copies the data in remote repostory to local repository
  - command
    git clone _link_

- git status
  - git status shows the current state of your git working directory and staging area.
  - Command:
    1. git status
    2. git status -s

- git log
  - git log helps to list the commits in reverse chronological order
  - Commands:-
    1. git log
    2. git log --oneline
    3. git log --stat
    4. git log --since=”1 month ago”


## Description

1. **client side** - In web development, 'client side' refers to everything in a web application that is displayed or takes place on the client (end user device). This includes what the user sees, such as text, images, and the rest of the UI, along with any actions that an application performs within the user's browser.

2. **server side** - Similarly, 'server side' means everything that happens on the server, instead of on the client. In the past, nearly all business logic ran on the server side, and this included rendering dynamic webpages, interacting with databases, identity authentication, and push notifications.

3. **HTTP protocols** - HTTP is a protocol which allows the fetching of resources, such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.

4. **http vs https** -
  - HTTP is unsecured while HTTPS is secured.
  - HTTP sends data over port 80 while HTTPS uses port 443.
  - HTTP operates at application layer, while HTTPS operates at transport layer.
  - No SSL certificates are required for HTTP, with HTTPS it is required that you have an SSL certificate and it is signed by a CA.
  - HTTP doesn't require domain validation, where as HTTPS requires at least domain validation and certain         certificates even require legal document validation.
  - No encryption in HTTP, with HTTPS the data is encrypted before sending

5. **frameworks vs libraries** - Both frameworks and libraries are code written by someone else that is used to help solve common problems. When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.