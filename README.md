<!-- the approach taken -->
At first the hardest thing was figuring out how to get started.  I realized quickly that the w3 and bootstrap approaches were not how I wanted to go since it didn't help me understand how to build from the ground up.  After meeting with Ivona and seeing her grid approach, I liked that idea but once I started that way - I realized it felt arbitrary to start creating a grid when there was no content to orient so then I started watching youtube videos on building portfolios to get a sense how different people approached this (some started with a grid, some flexbox), but I finally landed on one where the guy was working with sections and this 
clicked with me because when we did the LOTR and started with a section, it was easy for me to see how we were working within that to move/create/orient elements within it.

So I started with putting a section in html, add a class to signify the group and an id to use in scripts, name it as the description of what the section is and then add divs > h1/h2 > p from there and style in css.  Once this flow was developed I was grew confidence and was able to build/fix any bugs quicker.  I like to organize by section and then keep adding on within and sizing as needed, then moving to the next section.  Organization was a big learning in that, being very descriptive in the class/IDs helped to move quickly between html and css and visualize what I needed to adjust if something didn't look right.   

The css/html styling was fun and went really well once I found the format/layout I desired and worked towards it to tweak till it looked right.  Went the mobile first route and it helped a lot in feeling confident that because it worked in that view, anything bigger would be easy to manipulate with a media query.  

Another thing that clicked was the css background image rule so I decided to use that to apply an input that would show text when the project image is clicked.  I researched the label tag since it follows a "caption" format and then used the input checked to show the description of the project ("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label")

I had a really hard time with integrating the javascript aspect since I wasn't sure what to start with (I got really comfortable working with html/css) but once I realized they didn't have to be too complicated and I could work with toggles and adjusting displays it was easy.  

<!-- Explanations of the technologies used -->
The script I wrote worked with writing js for the burger menu toggle to show the nav bar when clicked, the burger menu switching to a fixed position so it would scroll if any li from the nav bar is clicked, and the same for the navbar to show/hide and be relative to where you are on the page if the burger menu is clicked, and the photos in about me disappearing if clicked.

<!-- problems I had -->
It was really hard to get the pictures to line up correctly across the whole page - I still think in some ways the bottom image for contact could be better adjusted.  I also was having a hard time with getting the burger menu to go away on click, for it to be "sticky" or follow along as you scroll and for the navbar to show if you clicked the burger menu and follow down.  I'd still really like to work with building a pagination javascript so the pictures auto scroll but are clickable too.  Another feature I'd like to add is some sort of animation.



<!-- works cited  
different youtube vids I watched to see different approaches: 
https://www.youtube.com/watch?v=-D6oTPA4vXc
https://www.youtube.com/watch?v=0YFrGy_mzjY
https://www.youtube.com/watch?v=YfmYUtGOaTg&t=973s

transitions:https://www.w3schools.com/css/css3_transitions.asp

text overlay
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://www.youtube.com/watch?v=GSQisyui5iY
https://www.w3schools.com/tags/att_input_checked.asp

https://www.w3schools.com/css/css_rwd_mediaqueries.asp

icons 
https://boxicons.com/usage

for learing about responsive pagination (I removed it once I realized it was from a library but still very cool to use for the future) - https://www.youtube.com/watch?v=aRE2Zge1rUI
https://swiperjs.com/get-started
-->
