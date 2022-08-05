# quetudesinfo

## Note that this is the "old"/archived version of the quetudesinfo README and will no longer be updated.

As this doesn't quite meet the standards for `DOCS.md`, `ABOUT.md`, or any other Markdown documentation category, this document should be considered "out-of-date" (an old draft). **This file will *no longer* be modified or updated, and may simply be deleted in the future. Refer instead to the following documents:**

- [Code of conduct](CODE_OF_CONDUCT.md)
- [Licenses](LICENSE.md)
- [Readme](../README.md)
- [Contribution guidelines](CONTRIBUTING.md)

### *Visit the QUÉtudes-info site* ➡️ <https://cw118.github.io/quetudesinfo>

<details>
    <summary><strong>README Table of contents</strong></summary>

- [What is QUÉtudes-info?](#-what-is-quétudes-info)
- [Why was QUÉtudes-info created?](#-why-was-quétudes-info-created)
- [Milestones](#-milestones)
- [The code](#-the-code)
- [Design and content](#-design-and-content)
- [Dissecting the site: the purpose of each section](#-dissecting-the-site-the-purpose-of-each-section)
- [CSS and JavaScript](#%EF%B8%8F-css-and-javascript)

</details>

___

## 🎓 What is QUÉtudes-info?

QUÉtudes-info is a website all about CEGEP, an educational stage unique to the province of Québec. Created by a high school student for high school students and parents, the site is a comprehensive guide on everything CEGEP from programs, English-language CEGEPs, admissions, applications and more! **(Please note that the QUÉtudes-info site is *in no way* affiliated with any of the institutions mentioned in its web pages.)**

This was also my first major coding project, and my first ever website — coding, research and design were all independently done by me.

## 💡 Why was QUÉtudes-info created?

As I was a high school student myself when I first developed the website, the primary goal was to inform others about CEGEP — it's a significant step in the lives of Quebec students, and yet the topic is always the object of confusion. With QUÉtudes-info, I really wanted to gather information on CEGEP in one place. I'm quite sure I spent more time on research than on the actual coding in order to provide the most accurate and up-to-date information as possible. Meanwhile, I was also trying to answer questions concerning CEGEP that I often heard being discussed, including several that I stressed over myself.
The idea first came when I was brainstorming for my [CS50](https://cs50.harvard.edu/x/) final project. 

Speaking of CS50, I have professor Malan, Brian Yu, and all of the CS50 team to thank for a kickstart to my coding journey. Taking Harvard CS50 online is also what gave me the skills and confidence to make QUÉtudes-info into a reality, so **thank you, CS50**.

## 📅 Milestones

- **August 12, 2021:** start the project
- **September 25, 2021:** all code, design and research complete (website code finished, ready for hosting)
- **September 26, 2021:** final checks complete, added to `quetudesinfo` repository. Site now available on GitHub Pages.
- **September 27, 2021:** CS50x 2021 final project requirements completed and submitted. This was CS50!
- **January 2, 2022** (happy new year!)**:** first reorganization of the `quetudesinfo` repository complete
- **January 21, 2022:** more improvements (custom 404 page, slight reorganization) and starting on the road to open source
- **July 28, 2022:** the project is "officially" open to contributions
___

## 💻 The code

While the QUÉtudes-info site consists of numerous code files, the majority of the project's files are probably images. Many had to be taken as screenshots and uploaded to the repository as fitting photos did not exist elsewhere online.
CSS and responsive design are definitely what got me stuck for a while. It took at least two weeks to get my navigation bar working properly, and to learn the basics of responsive design tools like media queries, Flexbox and Grid. I admit that my code is quite messy, but because I kept discovering newer and more efficient features and tools along the way, I decided to prioritize finishing the site without worrying too much about code "design". Reworking and cleaning up my source code may be on my agenda if I ever have the time.

*A few tutorials were consulted for certain parts of my source code and are cited in my files.*

## 🎨 Design and content

The design was pretty much improvised, though I did roughly plan out the looks of my site on different devices (mobile, laptops, etc.) before coding certain pages. I played around with the colours a lot to see which ones looked best, though I tried to make blue the main colour (specifically the blue used in Quebec's flag). 

<details>
    <summary>Read more:</summary>

<br>

I created the logo and name with simplicity in mind: the name includes Québec, études (French for studies), and info(rmation) all in one, then the logo is just a grad cap with a slightly adjusted information icon made with Canva. The main font used is Montserrat, though a few others will also be seen (for a bit of contrast and/or to help something stand out).

The site's organization and features were designed with the hope of facilitating navigation on any device — previous and next buttons are at the top and bottom (except for Disclaimers and Terms, since I'd like users to read through the page before going elsewhere); "back to top" buttons are generally found at the end of a page for large screens while mobile/smaller devices activate a floating back to top button once they've scrolled down to a certain point. The number of columns also adjusts based on screen width if applicable (ie. the four boxes on the homepage). I kept the JavaScript to a minimum since I didn't want the site looking too flashy (and admittedly because I don't know the language very well), so that might be something else to improve if/when I rework my code. *Nonetheless, since QUÉtudes-info has lots of information (long texts), I still strongly recommend using a device with a larger screen to browse the site, like laptops or desktops.*

Moreover, I'd originally tried to stick with using only Creative Commons images, but as this narrowed down my options far too much, I resorted instead to properly citing any copyright-protected media that I included. All references (my sources of information) are cited as well, and I made sure to use official and reliable sites/documents.
</details>

___

## 📁 Dissecting the site: the purpose of each section

<details>
    <summary>Read more about the "sections"/pages on QUÉtudes-info:</summary>

### [🏠 **Home**](https://cw118.github.io/quetudesinfo/)

The homepage of QUÉtudes-info: welcome to the site! This page has the most unique design, displays just a bit of key information on CEGEP with *Why CEGEP?* and *Dates to Remember*, and mainly serves to help users get started.

(HTML file `index` at the root)

### [**What is CEGEP**](https://cw118.github.io/quetudesinfo/whatiscegep)

This section includes titles **What is CEGEP**, **Programs**, **English-language CEGEPs**, **The R-Score**, and **Alternatives to CEGEP**. It aims to introduce you to CEGEP, explaining exactly what CEGEP is and what options are out there, as well as address common concerns.

(HTML files in the `whatiscegep` folder: `index`, `programs`, `english-cegeps`, `r-score`, `cegep-alternatives`)

### [**Applying to CEGEP**](https://cw118.github.io/quetudesinfo/apply)

This section includes titles **Applying to CEGEP**, **Choosing a CEGEP and Program**, **Making smart choices**, **Important Dates**, **Application Systems**, and **After applying**. Its purpose is to provide tips on the research and application process for CEGEP, as well as walk you through each step of completing and submitting an application. 

(HTML files in the `apply` folder: `index`, `choose-a-cegep-program`, `make-smart-choices`, `important-dates`, `application-systems`, `after-applying`)

### [**Program Comparison Tool**](https://cw118.github.io/quetudesinfo/compare-programs)

This is a tool that allows you to select and compare pre-university programs from English-language CEGEPs side-by-side. Be sure to select a CEGEP first to activate the program select menu (which will then allow you to select a specific program).

(HTML file `compare-programs`)

### [**Important Links**](https://cw118.github.io/quetudesinfo/links)

A catalogue of important links on CEGEP, including official CEGEP and organization sites, official documents such as viewbooks and calendars, and many more!

(HTML file `links`)

### [**Resources**](https://cw118.github.io/quetudesinfo/resources)

A collection of free web resources for a variety of subjects.

(HTML file `resources`)

### [**About**](https://cw118.github.io/quetudesinfo/about/disclaimers-terms)

This section includes titles **Disclaimers and Terms**, **QUÉtudes-info: The Project**, and **About the site creator**. It contains legal information about the site, but also shares the story behind QUÉtudes-info and a bit about the student behind the site *(aka me — also take a look at my [GitHub profile](https://github.com/cw118) to learn more about me)*.

(HTML files in the `about` folder: `disclaimers-terms`, `about-project`, `about-me`)

### [**Help**](https://cw118.github.io/quetudesinfo/help)

The Help page consists of an FAQ and a sitemap, in case you're really not sure where to go or just have a quick question for which reading an entire web page may be unnecessary.

(HTML file `help`)

### [**Contact**](https://cw118.github.io/quetudesinfo/contact)

Leads to a "coming soon" page for now. Whether or not my contact information will ever be posted, or at least some means of getting in touch through a QUÉtudes-info specific email/social media account, etc. is still undecided.

(HTML file `contact`)
</details>

## ⚙️ CSS and JavaScript

I wrote three CSS files: `navbar`, `styles`, and `template`. `navbar.css` contains the styles for my navigation bars, both the top and side navs; `styles.css` has some universal styles for all pages and some `index.html` specific ones; `template.css` is used for all pages except the homepage (`index.html`).

There are three JS files (linked externally): `app`, `compare`, and `top`. `app.js` has code for my responsive topnav, for when it turns into a burger menu that will slide the nav links/options in or out; `compare.js` is what runs my Program Comparison Tool (`compare-programs.html`) and is used only in that file/page; `top.js` configures a small floating "back to top" button for smaller screens once the user has scrolled down far enough, and is used in most pages with longer texts. I also wrote a small JS script in `index.html` that forces the page to scroll back to the top whenever it's refreshed, mainly because the disclaimer at the top gets reset and I would like users to read it.
