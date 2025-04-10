// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A curated collection of projects, both productive and puttering",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-sourdough-tips-and-tricks",
      
        title: "Sourdough tips and tricks",
      
      description: "a quick and dirty guide to starting sourdough projects",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Sourdough-tips-and-tricks/";
        
      },
    },{id: "post-website-construction-process",
      
        title: "Website construction process",
      
      description: "documentation on customizing this website",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/website-construction-process/";
        
      },
    },{id: "projects-fantasy-foods",
          title: 'Fantasy Foods',
          description: "A website I built for university back in 2020",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Fantasy_Foods/";
            },},{id: "projects-npha-intergen",
          title: 'NPHA-intergen',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NPHA-intergen/";
            },},{id: "projects-resources",
          title: 'Resources',
          description: "Websites with resources I use frequently",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Resources/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%61%74%69%65.%6C.%66%72%69%65%73%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/KatieLF", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/katie-l-friese", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
