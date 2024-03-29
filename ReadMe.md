# HRNet

HRNet is a fictitious employee management application, originally developed as a jQuery application (found in the `hrnet-ancien` directory), which has been refactored into a React application (located in the `hrnet-nouveau` directory).

## Installation and Setup

Before running the application, ensure you have Node.js and npm installed on your system. Follow these steps:

1. Navigate to the `hrnet-server` directory:
   ```
   cd hrnet-server
   ```

2. Install JSON Server globally:
   ```
   npm install -g json-server
   ```

3. Start JSON Server with the provided data:
   ```
   json-server --watch data.json --port 3001
   ```

4. Open another terminal and navigate to the `hrnet-nouveau` directory:
   ```
   cd hrnet-nouveau
   ```

5. Start the React application:
   ```
   npm start
   ```

## Project Links

- **GitHub Repository**: [HRNet GitHub Repository](https://github.com/AntunesD/HRNet_-_Faites_passer_une_librairie_jQuery_vers_React.git)
- **Live Demo**: [HRNet Live Demo](https://AntunesD.github.io/HRNet_-_Faites_passer_une_librairie_jQuery_vers_React)

## NPM Component

As part of the project, one of the four plugins used in the original site has been transformed into a React component and published on npm.

- **Component Name**: modal_antunes_lib
- **GitHub Repository**: [Component GitHub Repository](https://github.com/AntunesD/HRNet_Plugin_Modal_-_Faites_passer_une_librairie_jQuery_vers_React.git)
- **NPM Package**: [Component NPM Package](https://www.npmjs.com/package/modal_antunes_lib)

## About

This project is developed by an OpenClassrooms student as part of their coursework. It serves as an exercise in migrating a jQuery application to React and practicing componentization. 