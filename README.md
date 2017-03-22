# James Lee's Portfolio

### Purpose
##### This project is a website for myself (James Lee) to display examples of my work alongside links to my Github, LinkedIn, and any other sites I may be a part of.

### Contents
- profile details
- contact information
- links to external sites
- several examples of my work (thumbnails that link to live sites)

### Credits
- Jess Scheuring (The Iron Yard) for project scaffolding


### Progress Log
- first commit - installed scaffold

- connected main.js to html, set up router. The last time I did this, I used Router and hashHistory from react-router, and used it as such
```
<Router history={hashHistory}>
  ...
</Router>
```
This no longer works, so I discovered the new way to do this by importing HashRouter from react-router-dom
```
<HashRouter>
...
</HashRouter>
```
Also added several js files for components later on
