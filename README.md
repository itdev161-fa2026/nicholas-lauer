# nicholas-lauer

Final Project Updates

12/5/35
## Final Project Enhancements

### Enhancements Implemented
- Modern react-hot-toast notification system
- Full Dark Mode Support (sliding toggle)
- Global theme variables for consistent light/dark UI
- Cleanup and consolidating of dupicate components
- Improved CSS for form styling, shadows, and readability for both light/dark mode, mobile/desktop viewing


### Video Demonstration 

https://youtu.be/rli-sbkgnzw

## Features Added
- Replaced all alerts with success, error, and confirm toasts
- Toasts automatically adjust colors based on light/dark mode
- Added ThemeContext with persistent dark mode
- Created a sliding toggle switch with icons for light/dark mode
- Unified design via CSS variables* (index.css)
- Updated all components (login, register, post cards, forms) to use theme variables
- Enhanced UI shadows, spacing, contrast, and readability
- Removed unused/duplicate files for cleaner architecture

### Technical Implementation

## Libraries/ Tools Used
- react-hot-toast - notification system
- React Context API - global theme management
- CSS custom variables - for theme-driven styling (light/dark mode)
- LocalStorage - persistent theme between page reloads

## Key Challenges Solved
- Make toast notificatons match light/dark themes
- Ensuring all components adapt to light/dark mode
- Fixing low contrast issues and unifying text colors
- Removing duplicate pages and rebuilding clean file structure
- Creating a smooth and animated toggle that updates the whole app

### Main Files/ Components Created or Modified
- /src/utils/toastStyles.jsx - custome toast system and animations
- /src/context/ThemeContext.jsx - global theme logic
- /src/components/ThemeToggle.jsx - sliding light/dark mode switch
- /src/index.css - complete light/dark theme variable system

    ## Updated
    - Header.css
    - Header.jsx
    - Login.css
    - Register.css
    - Home.css
    - all forms + layout wrappers to use toast/ global theme logic



## New Dependencies
- react-hot-toast
    ###
        bash

        npm install react-hot-toast
    ###




12/2/25

Started creating Dark Mode Toggle 
1. Updated Header.jsx to include Toggle Slider for Light/Dark Mode
2. Updated Header.css to include animation for Toggle Slider
3. Updated App.css to feature stying for Dark Mode

11/30/25

Updated React Hot Toast Notifications with animations, stacking on top and pushing down the previous toast.

Very difficult to do, installed React on backend, not frontend Client, and became an issue, may need code to be cleaned up.


11/25/25

Updated the following pages removing error() handling to toast notifications:
CreatePost.jsx
EditPost.jsx
Home.jsx
LoginPage.jsx
PostDetail.jsx
RegisterPage.jsx






