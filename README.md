# db.meglab.org

### Overview

This repository contains the front-end html/javascript source code for the MEGARes database browser that's hosted at https://db.meglab.org. It connects to a REST API that's built using the Dropwizard REST framework for Java. Its source code, and deployment information, can be found at https://github.com/Microbial-Ecology-Group/megares-db. 

### Technology stack

The source code for the MEGARes database browser's front end is built using Angular and Typescript. The project uses [Angular Material](https://material.angular.io/) ui components.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
- Development server: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

This repository/project uses GitHub Actions to automatically build and publish the database browser to a Github Pages site.

### Making changes to the front end code

- Using Angular CLI for local development and testing is highly recommended. 
- A nice editor for source code editing is [Visual Studio Code](https://code.visualstudio.com/)
- When you push any changes to the source code's master branch, a deployment process will automatically be started. If it fails, your changes won't be pushed to the live site.
- The Github Actions YAML file is located under .github\workflows\gh-pages.yml
