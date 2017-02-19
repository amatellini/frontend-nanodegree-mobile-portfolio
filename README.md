## Website Performance Optimization portfolio project

### Getting started

Install [nodejs](https://nodejs.org/en/) and [gruntjs](http://gruntjs.com/getting-started).

Clone the repo and install dependency:

git clone https://github.com/amatellini/frontend-nanodegree-mobile-portfolio.git
cd frontend-nanodegree-mobile-portfolio
npm install

Build the site:

gulp build

The output will be put in the "docs" directory, so I can use github for host the site.

## Part 1 - PageSpeed score of 90 or better (index.html)

I used grunt for automating the build process:
 - js minification
 - html minification
 - image optimization
 - copy the file to "docs" folder
 
I used [http-server](https://www.npmjs.com/package/http-server) for serving the site.

I used [ngrok](https://ngrok.com/) for exposing the site to the internet and test it with [Pagespeed](https://developers.google.com/speed/pagespeed/insights/).

You can view the site [here](https://amatellini.github.io/frontend-nanodegree-mobile-portfolio/)
Here are the test result:
 - [desktop](https://amatellini.github.io/frontend-nanodegree-mobile-portfolio/PageSpeed_result/desktop.png)
 - [mobile](https://amatellini.github.io/frontend-nanodegree-mobile-portfolio/PageSpeed_result/mobile.png)

The optimizations for index.html consist of:
 - inline (manually) css files
 - minified js files
 - minified html files
 - optimized images

## Part 2 - Consistent 60 fps when scrolling (pizza.html)

The optimizations for pizza.html consist of:
 - optimized images
 - put async attribure for loading script for Google Analytics
 - replaced the import of Open Sans with the latin version only
 - moved DOM query outside of loop where applicable
 - replaced querySelector & querySelectorAll method with the more performant version
 - reduced the number of "flying pizza" from 200 to 100
 - added some bootstrap attribute


 
 

