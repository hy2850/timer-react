Pomodoro timer
Simple timer tool to maximize productivity

</br>

These To-do's are sorted in the order of completion
**(This to-do list is forked from original JS timer project)**

###**To-do (Plain-JS version)**

- [x] <span style="color:blue">[12June21]</span> User time setting
  - [x] <span style="color:blue">[1July21]</span> (Preserve settings even when refreshed -> use **browser cache**?)
- [x] <span style="color:blue">[17June21]</span> Add one more clock → long-cycle (45min+) clock
      (Dual clock feature, each running separately)
      **(Componentize using React)**
- [x] <span style="color:blue">[17June21]</span> Toggle 'start' or create 'pause' button to pause the timer
- [x] <span style="color:blue">[17June21]</span> Keyboard input (space) to toggle start/pause
- [x] <span style="color:blue">[27June21]</span> Keyboard input ('R') to reset
  - [x] <span style="color:blue">[3Aug21'R]</span>'RR' to revert to the original timer from break-timer
        → Ctrl+R
- [x] <span style="color:blue">[28June21]</span> Different bell for long-timer and fade-out
- [x] <span style="color:blue">[28June21]</span>Design (Buttons, clock, ...) </br>
  - Different color theme for Night mode?
- [x] <span style="color:blue">[31June21]</span> Short Break (1st clock), Long break (2nd clock)
  - [x] <span style="color:blue">[27July21'R]</span>Also give user option to set break time?)
- [ ] Night mode (white -> black, black -> white) -> use inbuilt dark mode

Limited to two timers (further work : react componentize to create more than two timers)

Break mode is not separated - timer to break auto transition is default
(Do we really need to create another separate tab for break timer?)

함수별 modularization 잘 한듯.  
reset 재활용해서 pause 만들기  
countDown 재활용해서 break 모드 만들기

</br>

###**Additional To-do in React**

- [x] <span style="color:blue">[25July21'R']</span> Auto-start after each cycle ends
- [x] <span style="color:blue">[25July21'R']</span> Option to adjust volume of timer sound
- [x] <span style="color:blue">[25July21'R']</span> Create general settings for both clock
- [x] <span style="color:blue">[1Aug21'R']</span> Change time by clicking and re-writing clock itself
- [x] <span style="color:blue">[3Aug21'R']</span> Sync current settings with modal options display
      (ex. if current short timer has timer set to 10 min, show 10 min in 'timeSettingsModal' when opened)
- [x] <span style="color:blue">[3Aug21'R']</span> Option in 'Settings', to reset the settings
      → 'reset settings' in App.js header
- [x] <span style="color:blue">[12Aug21'R']</span> Add toggle to change timer to break mode (back and forth)
- [x] <span style="color:blue">[12Aug21'R']</span> Change tab icon and title
- [x] <span style="color:blue">[18Aug21'R']</span> Add Chrome Notification
  - [x] <span style="color:blue">[25Aug21'R']</span> Focus to timer when clicking notification
- [ ] For invalid input in writableClock, use small overlay popup for notification
      (called 'toast'? - more like a tooltip)
- [ ] Toast notification for genSettings saved

</br>

###**Problem**

- [x] Settings) For multiple timer components, need different setting for each component

- [x] Settings) Time setting change is not applied while the timer is already on.

- [x] General Settings) Time setting not reflected to initTimeObj right away - setting goes away once App.js is re-rendered
      → <span style="color:blue">[25July21'R']</span> Changed 'initTimeObj' to state from ref, passed set function to Timer.js to update initTimeObj right away

- [x] Changing time setting in break mode, causes break mode to have the timer Time
      → <span style="color:blue">[1Aug21'R']</span> Fixed argument for 'setCurTime' in 'applyTimeSettings'

- [x] <span style="color:blue">[18Aug21'R']</span> useLayoutEffect to remove clock rendering gap (00:00 -> 25:00)

- [x] <span style="color:blue">[26Aug21'R']</span> Ask for confirmation when 'reset settings' (clear localStorage)

- [ ] When in another tab or another unused window, alarm doesn't seem to go off (deactivated?)
      (Audio stacks up at the moment of timer completion, if the window is not active at the moment)
      → single-threaded JS의 setInterval 구조적 한계?
      https://stackoverflow.com/questions/23506103/setinterval-slows-down-with-tab-window-inactive

- [x] <span style="color:blue">[12Sep21'R']</span> (After changing time on short timer) Changing genSettings while timer is running causes long timer to have undefined time

- [ ] Running long timer after short timer alternates browser tab title

</br>

###**Further works**

- Use Redux (to clean-up the data transfer between the components, e.g. timer ↔ modal)
- Responsive web (layout changing to window size - CSS grid?)
- Adopt SCSS to clean-up messey CSS
  (I really need to adopt **solid CSS naming rules**)

</br>

- Scheduling (Sign-in, track record) - back-end study?
- Desk-top or mobile application

</br>

###**References**

#####Functions

- Clock Padding
  https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
- Add sound
  https://www.geeksforgeeks.org/how-to-make-a-beep-sound-in-javascript/
- SetInterval SetTimeout
  https://ko.javascript.info/settimeout-setinterval
- localStorage
  ★https://www.daleseo.com/js-web-storage/
  https://velog.io/@yijaee/%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
- JSON
  https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON
- Multiple keydown
  - https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
  - https://stackoverflow.com/questions/29250534/event-keycode-alternative/29254154
- Chrome Notification
  https://www.youtube.com/watch?v=Jncoj-Gvh9o&ab_channel=dcode

</br>

#####Design

- slider
  https://www.w3schools.com/howto/howto_js_rangeslider.asp
- position:fixed center element (modal)
  https://stackoverflow.com/questions/2005954/center-a-positionfixed-element
- Toggle switch  
  https://www.w3schools.com/howto/howto_css_switch.asp

</br>

---

### Functional testing

- Timer

  - [x] Timer ends with alarm + starts break timer
  - [x] mode switch (Timer <-> Break) while running

  - [x] Reset while running

  - Notification
    - [x] pop-up
    - [x] focus when clicked

</br>

- genSettingsModal
  - [x] Show saved settings
  - Notification
    - [x] Permission
    - [x] Yes/No checkbox
  - [x] Autostart mode
  - [x] Alarm vol

</br>

- Change time
  - [x] 'Time' button (TimeSettingsModal)
  - [x] Change using WritableClock
  - [x] Does changed time persist after reset/mode switch/reload?

</br>

- keydown
  - [x] Space - toggle start/pause
  - [x] R - Reset
  - [x] CTRL + R - Reset break mode (only in break mode)
  - [x] Space/Enter - save in Settings modal

</br>

- localStorage caching
  - [x] Time, genSettings persistence check
