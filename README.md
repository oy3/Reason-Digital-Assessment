# GoodThings Foundation Vue App

Welcome to the GoodThings Foundation Vue.js application! This app is designed to showcase information about various foundation sections.

## Project Structure
- src
    - assets
        - css: Contains styles for the application.
        - icon: Icons used in the app.
        - img: Images used in the app.
- components: Vue components used across the app.
    - HomeItem: Specific components related to the home page items.
    - NavBar: Components related to the navigation bar.
    - TypeSection: Components related to different types of sections.
- router: Vue Router configuration (index.js).
- store: Vuex store configuration (menu.js).
- views: Vue components representing different views in the app.
    - AboutView: View for the "About" section.
    - DigitalDivideView: View for "The Digital Divide" section.
    - HomeView: View for the home page.
    - LearnView: View for the "Learn" section.
- app.vue: The main Vue application component.
- main.js: Main entry point for the application.
- prismic.js: Configuration for the Prismic headless CMS.
- index.html: Main HTML file for the app.

## Working pages

- [Home]
- [About]
- [The Digital Divide]
- [Learn]

## Using Headless CMS (Prismic.io)
This application uses Prismic as a headless CMS to manage and deliver content. The content is structured into different types, including "about," "divide," and "learn." Each type corresponds to a section in the app.

To integrate with Prismic, the prismic.js file contains the configuration for connecting to the Prismic API, and each view in the views directory fetches the relevant content using the Prismic SDK.

Feel free to explore and modify the code to suit your specific requirements!

## Getting Started

1. Clone this repository.

```bash
git clone https://github.com/oy3/Reason-Digital-Assessment
```

2. Install dependencies.

```bash
cd goodthings-foundation-vue-app
npm install
```

3. Run the app.

```bash
npm run serve
```

Visit [https://goodthingsfoundation.netlify.app/](https://goodthingsfoundation.netlify.app/) to view the app in your browser.

## Contributing
Contributions are welcome! If you'd like to contribute to this project.