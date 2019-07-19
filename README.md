# Event Tracker

![Event Tracker](https://images-na.ssl-images-amazon.com/images/I/310FYY86eLL._SY355_.png)

This is a task tracking application based on Node and Express JS that logs when tasks should be carried out. Each task has a predetermined interval in which it should repeatedly be performed as well as the order of precedence in case tasks coincide.

You can see the GitHub repository here [Event Tracker](https://github.com/jameskomo/Event-Tracking-System).

Author Information
========
James Komo 

Features
========

- Built with Node JS, Express JS
- Uses Node cron jobs for task scheduling
- Uses PostgreSQL DB

User Stories
============

Allows supervisors to:
- View logged tasks
- Generate task reports
- Create, Update, Delete and View Tasks


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to:

-   Have Node JS installed
-   Install Express JS
-   Install NPM
-   Install Node schedule package
-   Have PostgreSQL DB installed plus npm pg package
-   Have a terminal to interact with the app.
-   Any text editor
-   Browser to view



Build & Deployment
========

**NOTE:** You need to have fully cloned it to run it locally.


    (Terminal) $ node event.js

    # it will launch the web page from local server through port 3000. 



Contribute
========

If you want to add any new features, or improve existing ones, feel free to send a pull request! This is still work in progress with many of the features still pending

Known Bugs
========
There are currently no known bugs for the app. However, I will be updating the README incase any bugs arise.

## License

MIT License

Copyright (c) 2019 James Komo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
