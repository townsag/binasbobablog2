# BinasBobaBlog
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Welcome to BinasBobaBlog! This is a markdown blog website created using SvelteKit, Typescript, TailwindCSS, MDsvex, and Vite. This blog can be found at (change soon) http://209.38.172.6:3000/ being served from a docker container running on a Digital Ocean virtual machine. Changes to the blog are continuously pushed to the Digital Ocean using Github Actions. 

## Building and running

If you wish to run this product on your machine there are two easy ways you can do that with the second one being a bit easier:
1. This method works on a computer that already has npm installed. Clone the github repository and then add a environment variables file with your own Google maps API key. You can find the format for the .env file in .env.example. Next, run the Sveltekit dev server. You should be able to see the website at http://localhost:3000

    ```bash
    git clone https://github.com/townsag/binasbobablog2.git
    cd binasbobablog2
    vi .env
    npm run dev
    ```
2. The second method works on a machine that has docker set up. We will utilize docker and docker compose to create a container on the host os for the web-server to run in. Start by cloning the repository and adding your own Google maps API key, then use the docker compose build and docker compose up commands to build and run the docker container. This container will encapsulate all of the dependencies of the project so we only have to do minimal configuration. After these steps, you should be able to access the blog at http://localhost:3000 or http://host_ip:3000
    ```bash
    git clone https://github.com/townsag/binasbobablog2.git
    cd binasbobablog2
    vi .env
    docker compose build
    docker compose up -d
    ```

## Adding New Content

One of the main goals of this project is to make uploading new blog content as easy as possible. I wanted to avoid the workflow in which I had to write more svelte for each new boba shop we reviewed. I achieved this goal using sveltekits dynamic routing, sveltekit server routes, vite dynamic importing, and MDSvex. 

Each blog post is actually the same svelte component rendered with different props. The /reviews page provides a list of all blog posts. This list is returned by a svelte server route that uses a dynamic import to crawl the directory holding each blog post markdown file. This server route uses MDSvex to convert the markdown files into svelte components (this is very neat!). When the user selects a boba shop from the list of reviews, that boba shops props (including the front matter from the markdown file) are passed to the dynamic route created for that blog post. 

This enables fast addition of content because I only have to add a new markdown file and a new directory of images each time we want to include a new blog post. This also makes routing to blog posts clean and concise, as all blog posts use the same routing code. 

The catch.... As of the writing of this readme, Vite allows dynamic imports of markdown files but not images. This means that I can't just use the blog post markdown frontmatter to store a file path to the directory containing images, and let the blog post page dynamically import the images in that directory. Vite doesnt know to include the images in the bundle unless they are concretely referenced in the code.

The fix.... Each image needs to have one place where it is concretely imported. This means that the import calling the image has to be a relative path instead of an absolute path and the file path for the image can't have any javascript variables in it (like `../lib/images/{blog_name}/*.png`). So each markdown file gets it's own typescript file that concretely imports the images for that blog post and exports a list of imported images. This typescript file can be dynamically imported by the blog post page because Vite allows for the dynamic import of typescript files. It must share the same name as the corresponding markdown file so the dynamic import works.

I am working on a way to automatically generate these concrete-import files at build time to better streamline the process of adding new content.

This is the actual process for adding new blog posts:
1. Add a new markdown file containing the information for that blog post to the directory binasbobablog2/src/lib/content/posts/
    * The markdown file must have these elements in it's frontmatter:
        * shopname: string
        * date: string
        * scores: associative array with keys value, variety, atmosphere, quality, and wow each mapped to a score from 0 to 5
        * tags: list of short descriptive tags
        * address: string
2. Add a new directory in the binasbobablog2/src/lib/images/ directory
    * populate this directory with .png images of the boba shop
3. Make a new concrete import file in the binasbobablog2/src/lib/generagted_image_imports/ directory with the same name as the new markdown file. This file should concretely import the images in the recently added directory
    * I am working on automating this task with a script that runs at build time.