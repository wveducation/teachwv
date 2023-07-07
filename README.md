![](https://github.com/wveducation/teachwv/blob/master/src/static/img/og-image-default.jpg?raw=true)

# TeachWV.com
This site aims to help prospective educators learn more about the many ways to become a teacher in West Virginia.

## Live Site
[TeachWV](https://teachwv.com)

### Technologies used:

- [Eleventy](https://www.11ty.dev/) - a static site generator.
- [Alpine.js](https://github.com/alpinejs/alpine) - lightweight JS library for simple interactions (no need for jQuery!)
- [Tailwind CSS](https://tailwindcss.com/) - rapid utility-first CSS framework.
- [Netlify CMS](https://www.netlifycms.org/) _* development only_ - A local backend for your data entry needs (so you don't have to write markdown files directly for Eleventy).


<a href="https://app.netlify.com/start/deploy?repository=https://github.com/wveducation/teachwv&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>

------

## Getting Started

### 1\. Clone this Repository

```
git clone https://github.com/wveducation/teachwv.git
```

### 2\. Navigate to the directory

```
cd [project_root]
```

### 3\. Install dependencies

```
npm install
```

### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5\. Run Eleventy

```
npm run start
```

## Local Netlify CMS

If you'd like to log into the Netlify CMS locally (/admin), you'll need to run this proxy server. You'll be able to bypass the "Login with Netlify Identity" screen this way.

```
npx netlify-cms-proxy-server
```

You may find that if your site isn't running on the default port (8081), you'll need to make a configuration change. 

- [Netlify: Configure the Netlify CMS proxy server port number](https://www.netlifycms.org/docs/beta-features/#configure-the-netlify-cms-proxy-server-port-number)

------

## Web Performance

This tech stack significantly lowers the cost of achieving high levels of web performance. We've consistently accomplished a perfect 400 in Google Lighthouse Audits and aim to keep it that way.

![alt="Perfect Google Lighthouse Score"](https://github.com/wveducation/teachwv/blob/master/docs/static/img/google-lighthouse-400.png?raw=true)

------

## Hosting

This site is hosted using [Github Pages](https://pages.github.com/). 

Why? Because procuring hosting quickly can be very *onerous* in state government. We'd prefer to host using Netlify's services, enabling the use of the Netlify CMS in the live environment, but purchasing officers can't readily accept their Terms of Service in WV. 🥴

This site is deployed to Github Pages through a Github Action ([look here](https://github.com/wveducation/teachwv/blob/master/.github/workflows/eleventy_build.yml)) on every commit to master.

------

## Who Made This?

Aaron Silber, *Design, Development at [WV Department of Education](https://wvde.us)*

Shaun Dover, *Development at [WV Department of Education](https://wvde.us)*

Kristina Hawley, *Graphic Design at [WV Department of Education](https://wvde.us)*

Megan Archer, *Content Creation at [WV Department of Education](https://wvde.us)*