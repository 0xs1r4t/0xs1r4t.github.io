# sirat.me 🧜🏽‍♀️

![👀 new website who dis 👀]("./src/assets/new-website/who-dis.gif")

hey there 👉🏼👈🏼 i really liked how my website turned out so i thought i'd _share it with the_ **🌏 _world_ 🌍** (or something like that). i just created this because this domain used to be free and i could easily have a more _professional looking_ website to host my projects from github pages on. i ended up buying this domain a few days ago (sometime in feb 2021) so i thought i'd do it up a bit.

## 🔗 table of contents 🔗

-   [x] [🥞 stack](##stack)
-   [x] [💻 recreate this website](##recreate-this-website)
-   [x] [🖤 my website](https://www.sirat.me)

## stack 🥞

this website is deceptively simple. it just uses the following:

1. **react.js** (with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)) because it's great for generating static html.

2. [styled-components](https://www.npmjs.com/package/styled-components) because it makes styling with css a little less confusing and a lot more productive. it's also great for creating themes!

3. [prettier](https://www.npmjs.com/package/prettier) as a dev dependency for code formatting because it keeps my code _squeaky clean_.

## recreate this website 💻

do you want to recreate this website on your own machine? if so, just follow these steps:

1. clone this repository and change your current directory to the one that holds all the contents of this repository

    ```bash
    git clone https://github.com/sBx99/sBx99.github.io hella-cute-website
    cd hella-cute-website
    ```

2. install all dependencies and run the code (make sure you have node installed on your machine before you do this)

    ```bash
    npm i
    npm run start
    ```

    aaand you're pretty much done! if you want to do more stuff, such as deploying the code after editing it a little, move on to the next step.

3. (optional) if you want to deploy this code, just make sure to do the following

    i. open up package.json in the current directory and just make sure to change the "homepage" property to whatever is your homepage. you can look at [these docs](https://create-react-app.dev/docs/deployment/#github-pages) for reference.

    ii. if you're following the above docs for deployment on github pages, make sure fork this repository, and then add, commit and push your changes to the `dev` branch of the forked repository.

    p.s: please don't create a pull request in my repository if you do so! thx

    iii. run the following on your terminal

    ```bash
    npm i # reset all the previous values
    npm run predeploy
    npm run deploy
    ```

🥳 you're done! enjoy the fruits of _our_ labour (esp. if you did the last step lol)
