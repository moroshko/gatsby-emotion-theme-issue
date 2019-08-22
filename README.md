# Repro

1. git clone git@github.com:moroshko/gatsby-emotion-theme-issue.git
2. cd gatsby-emotion-theme-issue
3. npm install
4. cd website
5. npm install
6. npm start

Open the developer tools and you'll see that `website/src/components/button` gets the `theme` as expected.

Now, in `website/src/pages/index.js`, import `src/components/button` instead, and you'll see that the `Button` doesn't get the `theme` anymore.
