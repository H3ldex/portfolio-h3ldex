<p align="center">
  <img src="/public/iconhl.svg" width="50" alt="Logo" />
</p>
<h1 align="center">H3ldex Website</h1>

[![Site preview](/public/h3image.png)](https://h3ldex.dev)

## Project Overview

The H3ldex Website is a personal design portfolio that showcases a selection of projects, demonstrating skills in web development and design. The site is built using modern web technologies to ensure a fast, dynamic, and visually appealing user experience.

## Features

- **Responsive Design**: The site is fully responsive, ensuring a seamless experience across all devices.
- **3D Graphics**: Utilizes Three.js for rendering interactive 3D content.
- **Smooth Animations**: Implemented using Framer Motion for engaging user interactions.
- **Contact Form**: Integrated with AWS SES for reliable email communication.

## Technologies Used

- **Remix**: A modern framework for building fast and dynamic web applications.
- **Three.js**: A powerful 3D graphics library for rendering 3D content in the browser.
- **Framer Motion**: A library for creating smooth animations and interactions.
- **Node.js & npm**: For managing dependencies and running the development server.

## Installation & Setup

Ensure you have Node.js `19.9.0` or higher and npm `9.6.3` or higher installed. You can verify your versions with:

```bash
node -v
npm -v
```

Install the project dependencies:

```bash
npm install
```

Start a local development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

## Deployment

The site is hosted on [Cloudflare Pages](https://www.cloudflare.com/). To deploy the site, use:

```bash
npm run deploy
```

Before deploying, ensure your build is up-to-date:

```bash
npm run build
```

For continuous deployment, consider setting up a CI/CD pipeline with your preferred service (e.g., GitHub Actions, GitLab CI).

## Contribution Guidelines

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request. Please ensure your code follows the project's coding standards and includes appropriate tests.

## Permissions

I'm cool with anyone using the code or parts of the code for their own site, it is open source so people can learn from it and adapt it. However, I would encourage you to modify the theme and components it to make it your own. If you are using the site's design largely unmodified, I'd appreciate being credited as the designer of the website.

I do not give permission to present any of my projects as your own (this is being actively used as my portfolio site and these are my real projects I've worked on).

## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>

<details>
  <summary>How do I get the contact form to work?</summary>
  
  To get the contact form working create an AWS account and set up SES (Simple Email service). Then plug in your details into `.dev.vars.example` and rename it to `.dev.vars`. You'll also need to add these as enviroment variables in the Cloudflare dashboard for it to work in production. Or if you don't mind sending through gmail use [nodemailer](https://nodemailer.com/) instead.
</details>

<details>
  <summary>How can I customize the 3D models on the site?</summary>
  
  To customize the 3D models, you can use a 3D modeling software like Blender to create or modify models. Once you have your model, export it in a format compatible with Three.js, such as GLTF or OBJ. Then, update the model file in the project's assets and adjust the Three.js code to load your new model.
</details>
