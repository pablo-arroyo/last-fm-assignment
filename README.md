# Assignment

This project was an assigment for interview, it is not complete since the time limit was 8 hours.

It has the following functionalities:

* You can search for the top albums of an artist (you have to click the button though, the input it's not of submit type). 
This will show you a list of cards that is responsive with the album cover, album name, and a button to go into the album details. 
* There's a component for Album Details that contains a picture of the album cover, artist name, album name, 
date uploaded into the API (if available), and a list of all of its tracks.
* At the end of each track, there's a star icon which you can use to add the track into your favorite track list,
if that track it's already in the list, then it will remove it from there (there's no visual difference between a track that it's or isn't favorite).
* At the button of the album details there's also a button to go bak to the home page
(it doesn't save the state of the previous component though, you'll have the make a search to view items again).
* There's also a button to check your favorite track list at the Home Page, which will show you an alert 
with all the tracks that you have added into your list.

For data management I chose to use `localStorage` to save the list of favorite tracks,
this does not completely persist the list, however you will be able to check your favorite tracks
between albums, and even sessions.

## Technologies Used

For this project the following technologies were added:

* [React](https://reactjs.org)
* [TypeScript](https://www.typescriptlang.org)
* [Material UI](https://mui.com)
* [Styled Components](https://styled-components.com)
* [Axios (To communicate with LastFM's API)](https://axios-http.com)
* [ESLint](https://eslint.org)
* [Prettier](https://prettier.io)

## Available Scripts

For the project to run, you need to install the following dependencies in your computer:

* [NodeJS](https://nodejs.org/en/) (You need to install version >=15.0.0)
* [Yarn](https://yarnpkg.com)

Once you have both of the above frameworks installed, you have to run the following commands in your terminal, on the root folder of the project:

```shell
yarn install
```


```shell
yarn start
```

Then should be able to get look at the page at your [LOCALHOST](http://localhost:3000)
