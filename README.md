# suzyTheme

How the script works:
1) A style tag with the id of 'themeStyles' containing all the styles for the dark theme is created at the bottom of the head element.
2) The script checks if the user has agreed to cookies. If the user has agreed, a cookie for remembering the theme setting is created.
3) If there is a cookie the media attribute of the 'themeStyles' style tag is set or removed to toggle the dark theme on or off.
4) The theme toggle button is created. It changes the values of the cookie and 'themeStyles' media attribute
