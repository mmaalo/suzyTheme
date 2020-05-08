# suzyTheme
### How to use the script:
  - To check it out just paste the contents of one of the .js file into the console in the browser dev tools while at any part of 'suzylu.co.uk'. This method requires a new pasteing each time the site is reloaded.
  - A permanent way is to load the script each time the using some external tool each time the page is loaded.
  - In any actual implementation both the #themeStyles script and #themeToggleButton button should be hard coded into the website. The JS that creates these html elements could then be omitted.

### The three files are all variations of the same thing: 
  - The suzyThemeTest.js file has all the css styles for the dark theme set with variables that can be changed easly.
  - The suzyTheme.js file has the css styles for the dark theme hard coded.
  - The suzyTheme.min.js file is a minified version of the suzyTheme.js file.
  
### How the script works:
1) A style tag with the id of 'themeStyles' containing all the styles for the dark theme is created at the bottom of the head element.
2) The script checks if the user has agreed to cookies. If the user has agreed and the cookie does not exist a cookie for remembering the theme setting is created.
3) If there is a cookie the media attribute of the 'themeStyles' style tag is set or removed to toggle the dark theme on or off in accordance with the cookies value.
4) The theme toggle button is created. The icon inside the button is set to match the activated theme. The button runs a function that changes the values of the cookie, 'themeStyles' media attribute and button icon.
