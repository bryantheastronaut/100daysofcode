## 100 Days of Code
---
#### Day 1:
__Working on Pomodoro counter to finish up the long in the making FCC Front End Certificate__

Got done: Designed the Pomodoro App in Sketch. Created the signup page on DrinkUp. Got the signup page to create
accounts and save to the postgres db.

Next up: Add `react-bootstrap` when you get internet access again.

---
#### Day 2:
__Worked on DrinkUp__

Got done: Added bootstrap to DrinkUp app. Created Home, Navbar, About, and stylized Signup components.

Next up: Finish up styling components. Get the json back from api after you interact with the API

---
#### Day 3:

__Working on Pomodoro timer__

Got done: Created component structure in folder. Started Header.

Next up: SetTime component needs to be inline.

 ---
#### Day 4:

__Worked on Pomodoro App__

Got done: Added functionality to SetTime component. Figured out how to set up the timer.

Next up: Set up the display and counter. To display time:

    function timeRemaining(time) {
      if (time < 1) return '0:00';
      else {
        let seconds = Math.floor((time / 1000) % 60)
        let minutes = Math.floor((time / 1000 / 60) % 60)
        seconds = (seconds < 10) ? `0${seconds}` : seconds;
        console.log(`${minutes}:${seconds}`);
      }
    }

    let tenSec = 1000 * 10;

    setInterval(() => {
      timeRemaining(tenSec);
      tenSec -= 1000;
    }, 1000);

Do it like this.

---
#### Day 5:
__Wrote a Medium blog post on Arrays vs. Linked Lists. Working on Pomodoro again__

#### Day 6:

__Worked on pomodoro timer. didnt get anything done. broke everything__

#### Day 7

__Got the timer to work! now to convert out of ms and add a pause/reset feature!__ 
