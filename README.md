## Task 1 - Image gallery

Add the SimpleLightbox library as a project dependency using npm (the CDN link
from your past work is no longer needed).

1. Use your JavaScript code from the previous homework, but refactor it given
   that the library was installed via npm (import/export syntax).
2. In order to add the CSS code of the library to the project, you need to add
   one more import, aside from the one described in the documentation.

```// Described in documentation;

import SimpleLightbox from "simplelightbox";
```

## Task 2 - Video playback

1. Check out the documentation of the Vimeo player library.
2. Add the library as a project dependency via npm.
3. Initialize the player in the script file as described in the pre-existing
   player section, but note that you have added the player as an npm package,
   not via CDN.
4. Read the documentation of the on() method and start tracking the timeupdate
   event - playback time update.
5. Save playback time to local storage. Let the key for the storage be the
   "videoplayer-current-time" string.
6. When reloading the page, use the setCurrentTime() method to resume playback
   from the saved position.
7. Add the lodash.throttle library to the project and make sure that the
   playback time is updated in the storage once a second or less frequent.

## Task 3 - Feedback form

1. Track the input event on the form, and each time write to local storage an
   object with the email and message fields, in which you save the current
   values of the form fields. Let the key for the storage be the
   "feedback-form-state" string.
2. When loading the page, check the state of the storage, and if it stores some
   data, use it to fill in the form fields. Otherwise, the fields must be empty.
3. When submitting the form, clear the storage and form fields, and also display
   the object with the email and message fields and their current values in the
   console.
4. Make sure that the storage is updated no more than once every 500
   milliseconds. To do this, add to the project and use the lodash.throttle
   library.
