# Autify Front-end Assignment

Thank you for participating in Autify's front-end technical assignment. Please read the introductions carefully, and let us know if you have any questions. If you bump into any issues during the assignment, feel free to reach us out.

## ACTIONS 

![linter workflow](https://github.com/eduaravila/acme-store/actions/workflows/lint.yml/badge.svg)
![test workflow](https://github.com/eduaravila/acme-store/actions/workflows/test.yml/badge.svg)


## Features
  - Docker
  - Docker-compose (for local development)
  - make file for newcomers 
  - github actions: runs lint (super-lint), and runs the test
  - tailwind
  - husky pre-commit action 
  - testing setup with jest
  - Has dependabot alerts and updates enabled


## Development Docker Image

### Prerequisites

- You need to have docker and docker-compose installed on your system.
- You need to have a dockerfile and a docker-compose.yml file in the same directory as the makefile.

## Makefile Commands

The makefile contains the following commands:

- `make remove-development`: This command stops and removes any existing development docker containers and networks.
- `make build-development`: This command builds the development docker image using the dockerfile and the docker-compose.yml file.
- `make start-development`: This command starts the development docker container and attaches it to the network specified in the docker-compose.yml file.

## Usage

To use the makefile commands, follow these steps:

1. Open a terminal and navigate to the directory where the makefile, the dockerfile and the docker-compose.yml file are located.
2. Run `make remove-development` to stop and remove any existing development docker containers and networks. This is optional but recommended to avoid conflicts.
3. Run `make build-development` to build the development docker image. This may take some time depending on the size and complexity of your image.
4. Run `make start-development` to start the development docker container and attach it to the network. You should see some output from the container indicating that it is running.
5. To stop the development docker container, press Ctrl+C in the terminal or run `make remove-development` in another terminal.


## Instruction

When you finish the assignment

1. Create a private repository in your own GitHub account
2. Push this project to that repository
3. Invite @CYBAI and @ykhs as collaborators

## Tips

1. Decide on your front-end stack. You are free to use the modern front-end technologies of your choice for things like styling, testing, linting etc. You are also free to utilize any tool, library, UI toolkit etc. that you normally use in your projects. It's an empty canvas, and you're the artist! We only ask you to make sure to use **React** and **Typescript**.

2. You will work on the provided [Next.js](https://nextjs.org/docs/getting-started) application. While you don't need to know much about Next.js to complete this assignment, we encourage you to check out the basics. You might find using some Next.js features (such as SSR) in your assignment to be useful and time saving.

3. We care about your code being linted, clean, readable, maintainable, well-tested, and well-documented as much as we care about the end result. We'd like to know your reasoning behind your design and code. Documentation would help us not to misunderstand and overlooking your intentions. You are free to chose the technologies you enforce these things with, but please make sure to do so.

4. Please make sure that your build works, and we can run your code. If the build breaks due to minor issues like linting, **we will** try our best to get around it and somehow run your code to evaluate it. However keep in mind that this might effect your overall score.


## observations!!

the api always return a total of 100
- even if items is empty 
- with an invalid query param

for example 
`api/items?limit=10&offset=0&query=xxxxx`

{
	"total": 100,
	"perPage": 10,
	"items": []
}
