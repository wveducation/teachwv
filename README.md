# TeachWV.com
This site aims to help prospective educators learn more about the many ways to become a teacher in West Virginia.

## Live Site
[TeachWV](https://teachwv.com)

### Technologies used:

- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://github.com/alpinejs/alpine)
- [Tailwind CSS](https://tailwindcss.com/)
- [Netlify CMS](https://www.netlifycms.org/) _* development only_


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

## Authors

Aaron Silber, *Developer at [WV Department of Education](https://wvde.us)*

Shaun Dover, *Developer at [WV Department of Education](https://wvde.us)*
