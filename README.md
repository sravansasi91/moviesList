*************************************************

# moviesList

I have developed a cross-platform mobile application using React Native and Type Script. 
Here's a summary of the key features Implemented.

1.  Integrate with Open API Movie Database : Utilized the provided APi to fetch movie data.
2. Home Screen: Displayed 10 random movies and implemented a search bar for users to search for movies.
3. Search functionality: Implemented search functionality based on title or keywords, displaying results in a list with movie posters and titles.
4. Movie details screen : Created a details movie screen showing information such as title,description poster,actor etc..
5. Cross-Platform Compatibility: Ensured smooth operation on both iOS and Android devices.
6. Business Logic Separation Development : Developed a network business logic SDK in typescript for fetching movie data, designed for reusability components.


## Step 1: Installation

1. Clone the repository.
    git clone https://github.com/sravansasi91/moviesList.git
2. Navigate into the project directory.
    cd moviesList
3. Install dependencies:
    npm install or yarn install
4. Start the Metro Bundler:
   npm start or yarn start
5. Run on ios/Android device:
    npm run ios 
    npm run android

    npx react-native run-ios 
    npx react-native run-android

## Step 2: Folder Structure: 

moviesList/
---android    
   --- app   
   --- gradle    
   --- ...
---ios    
   --- app    
   --- moviesList    
   --- ...
--- node_modules
---src    
   --- components    
   --- screens    
   --- navigation
--- .gitclon 
--- package.json
--- README.md
--- ....



***********************************
