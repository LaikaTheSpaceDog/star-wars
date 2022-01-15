# Star Wars Top Trumps
A React game app based on Top Trumps that uses the [Star Wars API](https://swapi.dev/). Pick an attribute for your starship and the player with the highest score wins the round!

## Build Status
The app is functional but still in the process of being built.

## Tech/framework used
Built using:
- React
- Redux
- Styled Components
- Axios

## How to use
1. When the app loads, the player will be presented with two cards - one for the player, and one for the computer with its attributes hidden
2. The player should pick one of their attributes (speed, cost, passengers or number of films), which they think will be able to beat their opponent's card
3. When the player clicks on their chosen attribute, the computer's card's attributes will be revealed and a message saying who has won/lost the round. Each player's score will be updated accordingly. At the end of each round, the player and computer's cards from that round are discarded.
4. Continue the process until the player and computer have run out of cards. The player with the highest score wins!

## Installation
To set up the app locally, please follow these steps:

1. `git clone` the repository onto your local machine
2. `cd` into the local repo and run `npm install` to install dependencies
3. Run `npm start` to spin up a local version of the app