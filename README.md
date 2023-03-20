Personal Website Final Prep Project

DESCRIPTION

My final prep project is a site dedicated to Patrobs...the mysterious FUTURE-TELLER...

What you'll see after the header and the very creepy looking photo of Patrob is a quick descripton of his powers which reads: 

"Patrob is a world renowned artist in the craft of future-telling.  He can peer through the fog of confusion and gaze into the endless horizon to see flashes of truth that have not yet come to pass.  Is there something you wish to know?  Something that has been eating at you from inside?  A question that keeps you up countless nights?  Ask Patrob your question below and see your future revealed..."

You will then find a prompt to ask Patrob a question and you will find a answer magically revealed.  Will it be the answer you seek?  Ask if you dare.

QUESTION FUNCTION

In order to create the proper effect of a random answer to an inputed question, I had to first create a form in the html within which contained an input text box and a button below.  I then created an event listener on the button which would trigger a function upon a click.  The triggered function first creates a variable called "text".  If the value typed within the box was longer than 0 characters and ended with a question (value[value.length - 1]), the the function would then first create another variable "num" which hold the value of a random number between 0 and 1 multiplied by 8 and then using math.floor to round down to the nearest integer (for a min value of 0 and max of 7).  Each number 0-7 is then assigned a conditional that returns a different string which would then be assigned to the "text" variable.  If there is no input in the text box or the input does not end with a "?", the returned string would then reflect an improper input and assign that to "text".  Finally, the function then finds a hidden empty "p" section in the html using "getElementById" and assigns the newly assigned "text" variable to the "p" element immediately.  The result is a random answer generator, akin to a magic 8 ball, that appears out of thin air.

INTENTION

The intention with this webpage was to have a little fun and give myself a challenge.  I wanted to see if I could create an "8 ball" like function and apply it to something like a website with multiple elements in play as well as mess around with the CSS stylings to see how wacky I could get.