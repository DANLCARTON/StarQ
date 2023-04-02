# StarQ!

Hello ! I’m Eric Thiberge, a french engineering student near Paris. The website you are currently using is a little web development project made for our english class, and on this page, I will talk about the creative process behind this website. 

## I. Technical process

I decided that I was going to use Vue.js to develop this website. it was maybe a little too much to make such a basic website, but I did it to practice using it since we learn it during our web development class. All the quotes as well as the potential authors that may appear during the quiz come from the Quotes API from API Ninja. 

In a little more detail here is how I proceed to generate a quiz : the webpage generate itself with an empty string and an array of empty strings. I then make a call to the Quotes API which returns me a random quote with its author. I then fill the empty string with the quote and one the empty string in the array with the author. I finally make three more calls to the API to get three random quotes from which I keep only the authors, and I fill the remaining empty string in the array with those. 

## II. Esthetical choices

When I work on the css of my web projects, I often color the blocks I'm working on with a very bright color to see them better. This time I thought it might be cool to keep the colors bright, so I went with pink, blue and then yellow with a rather pastel shade so as not to tear your eyes out too much.

Doing this reminded me of the artistic current called "Memphis" in which we use quite bright colors and particular geometric shapes. So I chose a background image with this style and with a dominance of green since the color was missing

## III. Difficulties encountered

One of the biggest difficulties I have encoutered is how to the make the possible answers to the quiz appear on a random order. Like I said before the first call to the API gives the quote and the right answer, so if it appears in first every time, there is no more quiz. 

There is a lot of ways to shuffle or randomize an array in JavaScript, but none worked here, I think it's because of the asyncronicity of the API call function. 

To handle this issue, I decided to change the way I instantiate the array of empty texts for responses before I did it like this:

```jsx
answers: []
```

I will then use the `array.push()` function to fill it. Now I do it like this:

```jsx
answers: [0, 1, 2, 3].sort( () => .5 - Math.random() )
```

this makes it possible to generate from the start an array with the numbers from 0 to 3 placed randomly. then I replace them by the possible answers in the order of the digits thanks to the `array.indexOf()` function

Sadly using this method makes the numbers 0, 1, 2 and 3 appear before the answers can load, I think with a little more time to work on the project I could fix this problem.

When compiling the project before uploading it online, I’ve encoutered another problem : the compiled version of the website consisted on a single blank page. In fact it’s the first time I finish a Vue.js project, and I didn’t thinked that I would have to configure anything. So in the `vue.config.js` I added the following code in the `module.export` function: 

```jsx
publicPath: ''
```