# REACT CV

## Online bilingual curriculum vitae

### Table of contents

| Section | Topic                                 | Description                         |
| ------- | ------------------------------------- | ----------------------------------- |
| 1       | [Frontend](#frontend)                 | Development story                   |
| 1.1     | [Roadmap](#roadmap)                   | Milestones of development           |
| 1.2     | [Packages](#packages)                 | What is used within the app         |
| 1.3     | [Folder structure](#folder-structure) | How everything is set up            |
| 2       | [Hosting](#hosting)                   | Methodology                         |
| 2.1     | [Server](#server)                     | Where can you find it               |
| 2.2     | [Deployment](#deployment)             | What had to be done                 |
| 2.3     | [Lessons](#lessons)                   | Some headaches learning to interact |
| 3       | [TODOs](#todos)                       | List of pending ideas               |

### Frontend

How everythin was set up, some of its milestones, the packages needed and how the whole project folder is structured.

#### Roadmap

#### Packages

- @fortawesome/fontawesome-svg-core@6.4.2
- @fortawesome/free-brands-svg-icons@6.4.2
- @fortawesome/free-solid-svg-icons@6.4.2
- @fortawesome/react-fontawesome@0.2.0
- @testing-library/jest-dom@5.17.0
- @testing-library/react@13.4.0
- @testing-library/user-event@13.5.0
- boostrap@2.0.0
- bootstrap@5.3.1
- react-dom@18.2.0
- react-scripts@5.0.1
- react@18.2.0
- web-vitals@2.1.4

#### Folder structure

```
react-cv
    ├── node_modules
    ├── public
        └── index.html
    ├── src
        ├── components
            ├── DetailRecord.js
            ├── DeatilText.js
            ├── LatTitle.js
            ├── RefLink.js
            ├── SectionTitle.js
            ├── SimpleRecord.js
            └── SkillBar.js
        ├── data
            ├── english.js
            ├── icons.js
            ├── spanish.js
            └── titles.js
        ├── media
            └── fonts
                ├── Oswald-Bold.ttf
                ├── Oswald-ExtraLight.ttf
                ├── Oswald-Light.ttf
                ├── Oswald-Medium.ttf
                ├── Oswald-Regular.ttf
                └── Oswald-SemiBold.ttf
        ├── utils
            └── utils.js
        ├── views
            ├── Curriculum.js
            └── Languages.js
        ├── App.css
        ├── App.js
        └── Index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

### Hosting

Where is it hosted, some steps needed and some lessons learned down the road to deploying.

#### Server

The whole app is hosted on a AWS EC2 instance. The instance works with Ubuntu and is reacheable via a ssh key. Right now theres no domain associated with it though the instance has an elastic IP associated so I can start sharing it right now.

You can find the site through: http://54.80.77.97

The instance was set up from scratch without any knowledge on how to use AWS nor on how to set up an app on it, the process was aided by consulting the docs, checking similar issues on StackOverflow but mainly with [this tutorial](https://www.youtube.com/watch?v=rE8mJ1OYjmM) on YouTube from the [Classed channel](https://www.youtube.com/@Classsed).

#### Deployment

The EC2 is connected to the specific repo by a ssh key generated within the instance and added as a deploy key on the repo's settings.

The repo only pulls the changes merged into the `master` branch though theorically, the `develop` branch should be up to date with all the relaese-ready
features.

Using the commands `sudo apt install nodejs` and `sudo apt install npm` the instance was able to handle the build of the repo after it was cloned.

The server was set by using `nginx` as per the previously mentioned tutorial indicated.

#### Lessons

1. EC2 instance have a set of inbound and outbound rules, if inbound rules for ssh are not set the instance won't be accesible, same for http requests. In case of the outbound rules: some updates require to have http rules set, but at least ssh rules should be allowed.
2. An elastic IP is needed to share the site. Though there is a public IP set to connect to the instance, this seems to change, allocating an elastic IP did the trick.
3. SSH keys should be added after creation. [GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) has this doc on how to generate the ssh keys, but as important as it is to have them, running the [ssh-add](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent) command is important too; though the docs talk about it, I seem to forget about it a lot.
4. You can choose to not assign a password to an ssh-key, but if you do: **write it down somewhere!** I'm sure there is (somewhere) a better more _techy_ way to keep them, but the iportant thing is that you do.

### TODOs

Things done and some things I still want to add.

- [x] Set the React App.
- [x] Mimic the original CV in spanish.
- [x] Add the language change option between es/en
- [x] Host the cv online.
- [x] Give reactiveness for mobile audiences.
- [ ] Add Dark mode.
- [ ] Add a landing page to set the initial language.
- [ ] Build a portafolio site to hold the cv within.
- [ ] Add analytics to the page (mostly visits).
