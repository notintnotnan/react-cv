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

This all started wanting to mimic a [pay-to-download CV generator](https://resume.io/app/) that I used to update my cv after a couple of years just re writting the (nicest) template I could find initially on MS Word. I still ended up buying the free trial of the site and downloading both and english and spanish version of the CV I designed (Its a good one, I recommend it without being paid or anything), though I started to wonder: Could I build my own using what I knew of React?

I am pretty new to React (working on a couple of secret projects with it), not more than 6 months working with it, though after few extra hours expended on REALLY learning the basics through some YouTube videos ([this one](https://www.youtube.com/watch?v=SqcY0GlETPk&pp=ygUOcmVhY3QgdG90b3JpYWw%3D) and and [that one](https://www.youtube.com/watch?v=jCY6DH8F4oc) helped a lot) and the docs.

The first step was mimicking the CV style and layout, it was pretty simple using [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/), its `row` and `col` classes make up the mayority of cv layout, though I had to add some styling through my own .css file when I found that Bootstrap added more than I needed or that things could get a bit too complex. After some days working on it the spanish cv was done.

After, the setting of the language change was the next new deal, I understand that some packages exist to handle translation and that using some kind of db there could be a text managing, but I wanted to keep things simple and under control. From the begining the spanish texts where saved into a JSON file that was feeding the components within the app so: Why not create another one in english and use a state to handle the change? `useState` was an obvious one, there is one state for the language setting and another one for the active JSON imported, the tricky part was being able to make it work, since the state change on the lang variable wouldn't trigger the JSON change on time. Enter `useEffect`! I hadn't used that one much, but after some guidance it made it work.

The next one was responsiveness, I knew it existed and I had tried to make it work using vanilla CSS, but learning how to make it work with Bootstrap really made the look of the CV scale up. I do handle a couple of events using media queries, but the important ones happen using breakpoints.

As of now the CV works like a charm as it was intended to, though there may be [some things](#todos) I would like to add in the (near?) future. I'll try to keep the REAME as up to date as possible, maybe I'll add some of my troubles so that anyone may learn if the visit the repo.

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
- [ ] Purchase a domain.
- [ ] Add analytics to the page (mostly visits).

---

© Oscar Felipe Ramírez Pardo 2023
