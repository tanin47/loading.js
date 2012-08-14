loading.js
====================

This javascript solves:

    When a user clicks on a submit button in order to submit a form,
    How would you show a loading image? Next to the button? inside the button?

I've decided that the loading image should be shown within the button, and the label is erased, because the user won't be able to re-click it until that loading image disappears.

If there is an error, I show the error message, remove the loading image, and bring back the label of the button.

Please see [the demo](http://tanin.nanakorn.com/b/182/loading_button_js)


Requirement
-----------------

* jQuery
* A button must be a SPAN (or DIV) element


How to use it
------------------

You can invoke ```$(button).loading_button(true);``` in order to show the loading image, and you can invoke ```$(button).loading_button(false);``` in order to bring it back to the normal state.

It also works with a textbox and an icon. Please see [the demo](http://tanin.nanakorn.com/b/182/loading_button_js) for more information.


Author
-------------

Tanin Na Nakorn


Boring Legal stuff
--------------------


License
---------

Do What The Fuck You Want To Public License (http://sam.zoy.org/wtfpl/)

0. You just DO WHAT THE FUCK YOU WANT TO.
