# suzyTheme
### How to use the script:
  - To check it out just paste the contents of one of the .js file into the console in the browser dev tools while at any part of 'suzylu.co.uk'. This method requires a new pasteing each time the site is reloaded.
  - A more permanent way is to load the script using some external tool like requestly each time the page is loaded.
  - In any actual implementation both the #themeStyles script and #themeToggleButton button should be hard coded into the website. The JS that creates these html elements could then be omitted.

### The three files are all variations of the same thing: 
  - The suzyThemeDev.js file has all the css styles for the dark theme set with variables that can be changed easly.
  - The suzyTheme.js file has the css styles for the dark theme minified and hard coded.
  - The suzyTheme.min.js file is a minified version of the suzyTheme.js file.
  
### How the script works:
1) A style tag with the id of 'themeStyles' containing all the styles for the dark theme is created at the bottom of the head element.
2) The script checks if the user has agreed to cookies. If the user has agreed and the cookie does not exist a cookie for remembering the theme setting is created.
3) If there is a cookie the media attribute of the 'themeStyles' style tag is set or removed to toggle the dark theme on or off in accordance with the cookies value.
4) The theme toggle button is created. The icon inside the button is set to match the activated theme. The button runs a function that changes the values of the cookie if the user has agreed to cookies, the 'themeStyles' style tag, the media attribute and button icon.
