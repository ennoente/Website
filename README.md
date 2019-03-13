# My Personal Website

#### This project does not only include building my personal website where I showcase myself. It is also a great reason and way to learn ReactJS, as it poweres the websites frontend.
#### Let's see where our journey takes us!

### Setup
Clone or pull the project code via Git and run via

        npm start
        
The development server running on NodeJS, will open the standard browser automatically, typically on port 3000.
To build and deploy, run

        npm run build

### Frontend
ReactJS: Website is divided into components. Over the course of its development, the components will be listed here as said list grows.
Components at this time include:

- ProfilePic - Profile picture in the upper left corner
- Profile - Quick profile who I am and what I do
- MainArticle - Introductory text about myself and my qualifications

The navigation bar (and therefore also the hamburger menu) contain tabs which route to articles/subpages that I want
to create in the future. Right now, though, they just circle back to the main page.


### Responsive Design
Mainly, the website is split into two parts by CSS media queries: Desktops and Mobile devices.
The breakpoint for those is set at a width of 992 pixels. The main feature of the responsive design is the
change from a fixed-height navigation bar in desktop mode to a hamburger menu in 'mobile' mode. Next to the responsive
navigation bar, the profile picture is hidden in the 'mobile' mode, while all divs and other features are centered
horizontally.

In both 'desktop' and 'mobile' mode, the social media bar stays the same, since it works on all resolutions.


### Backend
Even-though this project, having been installed and initialized with create-react-app, runs on a NodeJS server in development mode, once in production, a Spring backend takes
responsibility as webserver.