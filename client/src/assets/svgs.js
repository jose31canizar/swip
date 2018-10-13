import React from "react";
import { G, Path } from "react-native-svg";

// Each nameValuePair can be:
// * Name: <Svg />; or
// * Name: { svg: <Svg />  viewBox: '0 0 50 50' }
//SortArrows: <G><Path d="M0 45h90L45 0 0 45z"/><Path d="M0 55h90l-45 45L0 55z"/></G>

export default {
  Leaf: {
    svg: (
      <Path d="M33.229291 26.8352811 C33.135997 26.8128109 32.9956807 26.7676211 32.8233492 26.7334168 C32.4769355 26.6582669 31.9899553 26.5818687 31.4204361 26.5476641 C30.8504168 26.5119618 30.1981085 26.5236962 29.5132849 26.5876109 C28.8284612 26.6530239 28.113123 26.7816025 27.4102908 26.9581174 C26.7077089 27.1371289 26.0171324 27.3633275 25.3843333 27.6324689 C25.1904918 27.7148592 25.0041536 27.8012442 24.8215673 27.888378 C24.9363717 27.7907582 25.0511759 27.6938872 25.167481 27.5900255 C25.4791282 27.306653 25.8020308 27.0053045 26.1186805 26.679988 C26.7557315 26.0308528 27.3810271 25.2985782 27.962802 24.5328484 C28.5410753 23.7653709 29.0780791 22.9656862 29.5305429 22.1774864 C29.981506 21.3887871 30.3589344 20.6195618 30.6413179 19.9289818 C30.9257023 19.2398999 31.117543 18.6319598 31.2328475 18.1917962 C31.2938764 17.9738366 31.3251411 17.7905807 31.3539048 17.67099 C31.3794167 17.5491524 31.3881708 17.4804938 31.3881708 17.4804938 C31.3881708 17.4804938 31.3241406 17.5077076 31.2138386 17.5653807 C31.1057874 17.6253009 30.937708 17.7051945 30.7438663 17.8222885 C30.3511808 18.0522321 29.8171785 18.4020161 29.2294005 18.8616538 C28.6398721 19.3197934 28.0003198 19.8910324 27.3617679 20.5384199 C26.7242166 21.1863068 26.0989212 21.9183315 25.5151453 22.6825634 C24.9343708 23.4487927 24.3968666 24.2482276 23.9446529 25.0356785 C23.7535627 25.3642408 23.5827319 25.690556 23.4209054 26.0086322 C23.5649735 25.3475131 23.6915334 24.629969 23.7848274 23.8739763 C23.9211418 22.7884224 23.9861726 21.6307148 23.987173 20.4730071 C23.9831713 19.3152994 23.9173901 18.1578414 23.7800752 17.0722876 C23.6457617 15.9869835 23.4444165 14.974083 23.2193101 14.1057398 C22.994704 13.237147 22.7415843 12.5138605 22.5354871 12.0072854 C22.3316406 11.5012096 22.1728155 11.2118451 22.1728155 11.2118451 C22.1728155 11.2118451 22.0137403 11.5012096 21.8101441 12.0077848 C21.6042969 12.5143599 21.3511772 13.2376463 21.1260708 14.1062391 C20.9014647 14.9745823 20.6998694 15.9874829 20.5658061 17.072787 C20.4282411 18.1583408 20.36246 19.3157988 20.3589583 20.4735064 C20.3597087 21.631214 20.4247394 22.7889218 20.561304 23.8744755 C20.6540978 24.6307181 20.7811579 25.3485118 20.9252259 26.0096309 C20.7633994 25.6915547 20.5925687 25.36474 20.4014784 25.0361778 C19.9485143 24.2487268 19.4112604 23.4495416 18.8307361 22.6830628 C18.2472103 21.918831 17.6216646 21.1865564 16.9838632 20.5389193 C16.3455615 19.8915317 15.7062594 19.3205424 15.1167308 18.8621531 C14.528953 18.4025155 13.9952007 18.0527315 13.6017648 17.8227878 C13.4081733 17.7056938 13.2395936 17.6258002 13.1320428 17.5658801 C13.0214905 17.5084566 12.9577104 17.4809932 12.9577104 17.4809932 C12.9577104 17.4809932 12.9667147 17.5496517 12.9922267 17.6714894 C13.0207402 17.79108 13.052005 17.9745856 13.1125336 18.1922955 C13.2280882 18.6324591 13.4204291 19.2401495 13.7045634 19.9294812 C13.9869468 20.6200612 14.3646253 21.3892863 14.8155885 22.1779856 C15.2678022 22.9661857 15.8045558 23.7658702 16.3833294 24.5333478 C16.9651043 25.2988278 17.5898996 26.0313521 18.2269507 26.6804873 C18.5436004 27.0058039 18.8670032 27.3071525 19.1781503 27.5905249 C19.2949555 27.6943865 19.4097597 27.7915071 19.524564 27.8888773 C19.3419777 27.8014938 19.1553895 27.7153585 18.961798 27.6329684 C18.3289989 27.3638268 17.6384226 27.1376281 16.9358405 26.9586167 C16.2325081 26.782102 15.51717 26.6532735 14.8325965 26.5881104 C14.1472726 26.5241954 13.4957146 26.5124611 12.9254451 26.5481636 C12.355926 26.5823679 11.8686957 26.6587661 11.522282 26.733916 C11.3502007 26.7681206 11.2098843 26.8133104 11.1163401 26.8357803 C11.0220456 26.8617457 10.9705212 26.8807205 10.9705212 26.8807205 C10.9705212 26.8807205 11.0067884 26.9221653 11.0770716 26.9903246 C11.1483553 27.0547386 11.2496531 27.161097 11.3849671 27.2731975 C11.6530938 27.5043896 12.0442787 27.8042401 12.5285075 28.1055887 C13.0122362 28.4089346 13.5902593 28.7097837 14.2230584 28.9804233 C14.8553573 29.2495647 15.5454334 29.4772613 16.2477653 29.6582702 C16.9505975 29.8362829 17.6656855 29.9663597 18.3500089 30.0317726 C18.7979706 30.0747154 19.2286741 30.092192 19.634616 30.0901948 C19.164894 30.2697056 18.6811654 30.4954048 18.2209479 30.7645463 C17.783241 31.017709 17.3660438 31.3063245 16.9916169 31.606175 C16.6169398 31.9045276 16.287284 32.2186092 16.0199076 32.513716 C15.7522811 32.8083236 15.5469341 33.0842059 15.4108698 33.2909306 C15.275806 33.4986539 15.2077738 33.6332246 15.2077738 33.6332246 C15.2077738 33.6332246 15.3588452 33.6409643 15.6067124 33.6274821 C15.8538291 33.6127519 16.1954906 33.5728051 16.5849247 33.4874188 C16.9743587 33.4030313 17.410815 33.2739532 17.857276 33.0981874 C18.303737 32.9231706 18.7622037 32.7057101 19.2001607 32.4525476 C20.0785758 31.9507161 20.8696997 31.2993339 21.4027017 30.7058745 C21.6698278 30.4107677 21.8751749 30.1348851 22.010989 29.9276612 C22.0497574 29.8672417 22.0817725 29.8155605 22.1097858 29.7686231 C22.1893234 29.7546417 22.2113339 29.7613827 22.2368457 29.7686231 C22.264609 29.8155605 22.296374 29.8672417 22.3353925 29.9276612 C22.4712066 30.1348851 22.6763036 30.4110173 22.9441802 30.7058745 C23.4766818 31.2993339 24.2675555 31.9512154 25.1464711 32.4525476 C25.5841779 32.7057101 26.0423944 32.9231706 26.4888554 33.0981874 C26.9353165 33.2737036 27.3720229 33.4030313 27.7614568 33.4874188 C28.1508909 33.5728051 28.4928026 33.6127519 28.7399193 33.6274821 C28.9875364 33.6412139 29.1386078 33.6332246 29.1386078 33.6332246 C29.1386078 33.6332246 29.0708257 33.4986539 28.9357619 33.2909306 C28.7994475 33.0842059 28.5938502 32.8080739 28.3259737 32.513716 C28.0593476 32.2186092 27.7294417 31.9047772 27.3547647 31.606175 C26.9805878 31.3063245 26.5633907 31.017709 26.1251836 30.7645463 C25.6649661 30.4954048 25.1814874 30.2697056 24.7120157 30.0901948 C25.1174572 30.092192 25.548411 30.0747154 25.9958725 30.0317726 C26.6806961 29.9663597 27.3955338 29.8362829 28.098366 29.6582702 C28.8004479 29.4772613 29.4905241 29.2495647 30.1233232 28.9804233 C30.7553719 28.7097837 31.3338953 28.4089346 31.8173737 28.1055887 C32.3016027 27.8042401 32.6927875 27.5043896 32.9614145 27.2731975 C33.0962282 27.161097 33.1977761 27.0547386 33.2690598 26.9903246 C33.339343 26.9221653 33.3756102 26.8807205 33.3756102 26.8807205 C33.3756102 26.8807205 33.3235856 26.8609969 33.229291 26.8352811 Z" />
    ),
    viewBox: "0 0 50 50"
  },
  Tick: {
    svg: (
      <Path d="M38.729 75.688a4.48 4.48 0 0 1-3.21-1.356L16.558 55.004c-1.774-1.807-1.774-4.736-.001-6.543a4.48 4.48 0 0 1 6.42 0l15.753 16.056 37.749-38.474a4.478 4.478 0 0 1 6.419 0c1.773 1.806 1.773 4.736 0 6.543L41.939 74.332a4.48 4.48 0 0 1-3.21 1.356z" />
    ),
    viewBox: "0 0 50 50"
  },
  Nav1: {
    svg: (
      <Path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    ),
    viewBox: "0 0 24 24"
  },
  Nav: {
    svg: <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />,
    viewBox: "-12 -6 36 36"
  },
  EmptyStar: {
    svg: (
      <Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
    ),
    viewBox: "0 0 24 24"
  },
  FilledStar: {
    svg: (
      <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    ),
    viewBox: "0 0 24 24"
  },
  HalfStar: {
    svg: (
      <Path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
    ),
    viewBox: "0 0 24 24"
  },
  Pencil: {
    svg: (
      <Path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    ),
    viewBox: "0 0 24 24"
  },
  Message: {
    svg: (
      <Path d="M8.7 2h31.7C44 2 47 5 47 8.7V27c0 3.7-3 6.7-6.7 6.7H8.7C5 33.6 2 30.6 2 27V8.7C2 5 5 2 8.7 2zM2 8.8L24.1 19 47 8.8" />
    ),
    viewBox: "0 -25 45 90"
  },
  Suggestions: {
    svg: <Path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z" />,
    viewBox: "0 0 24 24"
  },
  Store: {
    svg: (
      <Path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
    ),
    viewBox: "0 0 24 24"
  },
  Checkmark: {
    svg: <Path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />,
    viewBox: "0 0 24 24"
  },
  Close: {
    svg: (
      <Path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    ),
    viewBox: "0 0 24 24"
  },
  Eye: {
    svg: (
      <Path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    ),
    viewBox: "0 0 24 24"
  },
  Location: {
    svg: (
      <Path
        class="st1"
        strokeWidth="1"
        fill="none"
        d="M20.8,11.3c0,2.6-2.9,6-2.9,6S15,14,15,11.3c0-1.6,1.3-2.9,2.9-2.9C19.5,8.4,20.8,9.7,20.8,11.3z M17.9,10.3 c0.6,0,1.2,0.5,1.2,1.2s-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2S17.3,10.3,17.9,10.3z"
      />
    ),
    viewBox: "0 2 24 24"
  },
  Repost: {
    svg: (
      <Path
        Fill="#000"
        d="M7,7h10v3l4-4l-4-4v3H5v6h2V7z M17,17H7v-3l-4,4l4,4v-3h12v-6h-2V17z"
      />
    ),
    viewBox: "0 0 24 24",
    fill: "#000"
  },
  Reposted: {
    svg: (
      <Path d="M7,7h10v3l4-4l-4-4v3H5v6h2V7z M17,17H7v-3l-4,4l4,4v-3h12v-6h-2V17z" />
    ),
    viewBox: "0 0 24 24"
  },
  Heart: {
    svg: (
      <Path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
    ),
    viewBox: "0 0 24 24"
  },
  FilledHeart: {
    svg: (
      <Path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
    viewBox: "0 0 24 24"
  },
  Send: {
    svg: (
      <G>
        <Path
          d="M15.1,22c-0.3,0-0.5-0.1-0.6-0.4l-3.3-7.1l-6.9-3.2C4,11.2,3.9,11,3.9,10.7c0-0.3,0.2-0.5,0.4-0.6L21,3.9
		c0.1,0,0.1,0,0.2,0c0.2,0,0.3,0.1,0.5,0.2c0.1,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.1,0.4,0,0.5l-6.1,16.8C15.7,21.8,15.4,22,15.1,22
		L15.1,22z M15.1,19.7l4.6-12.6l-7.1,7.1L15.1,19.7z M11.6,13.3l7.1-7.1L6.2,10.8L11.6,13.3z"
        />
        <Path
          d="M21.2,4.1c0.1,0,0.2,0,0.2,0.1C21.4,4.2,21.3,4.1,21.2,4.1c0,0-0.1,0-0.1,0l0,0C21.1,4.1,21.2,4.1,21.2,4.1 M21.1,4.2
		c-0.1,0-0.1,0-0.1,0.1l-1.3,1.3l-14,5.2l6,2.8l-0.2,0.2c-0.2,0.2-0.2,0.4,0,0.6c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l0.2-0.2
		l2.9,6.2l5.1-14.2l1.3-1.3c0,0,0.1-0.1,0.1-0.1l-6.1,16.8c-0.1,0.2-0.2,0.3-0.4,0.3c0,0,0,0,0,0c-0.2,0-0.3-0.1-0.4-0.2l-3.4-7.2
		l-7-3.2c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.2,0.1-0.3,0.3-0.4L21.1,4.2 M21.4,4.2C21.5,4.2,21.5,4.2,21.4,4.2
		C21.5,4.3,21.5,4.3,21.4,4.2C21.5,4.3,21.5,4.3,21.4,4.2C21.5,4.2,21.5,4.2,21.4,4.2 M21.5,4.3c0.1,0.1,0.1,0.3,0.1,0.4l0,0
		C21.6,4.5,21.6,4.4,21.5,4.3 M20.5,5.2l-0.3,0.9l-8,8l-0.1-0.3c0-0.1-0.1-0.2-0.2-0.2l-0.3-0.1l8-8L20.5,5.2 M21.2,3.6
		c-0.1,0-0.2,0-0.3,0.1L4.2,9.9c-0.3,0.1-0.6,0.4-0.6,0.8c0,0.4,0.2,0.7,0.5,0.9l6.9,3.2l3.3,7c0.1,0.3,0.5,0.5,0.8,0.5
		c0.4,0,0.7-0.3,0.8-0.6l6.1-16.8c0-0.1,0-0.1,0-0.2h0l0,0l0-0.1l-0.5,0l0,0l0.5,0c0-0.2-0.1-0.4-0.2-0.6l0,0l-0.1-0.1
		c0,0-0.1-0.1-0.1-0.1C21.6,3.7,21.4,3.6,21.2,3.6L21.2,3.6z M6.9,10.8l10.8-4L11.5,13L6.9,10.8L6.9,10.8z M12.8,14.2L19,8l-4,11
		L12.8,14.2L12.8,14.2z"
        />
      </G>
    ),
    viewBox: "0 0 24 24"
  },
  Search: {
    svg: (
      <Path d="M34.9 35.5l-5.7-5.3M17 2c8.3 0 15 6.7 15 15s-6.7 15-15 15S2 25.3 2 17 8.7 2 17 2z" />
    ),
    viewBox: "0 -27 90 90"
  },
  Person: {
    svg: (
      <Path d="M14.4 5.8c3.5 0 6.3 2.8 6.3 6.3s-2.8 6.3-6.3 6.3-6.3-2.8-6.3-6.3c.1-3.5 2.9-6.3 6.3-6.3zm10.9 29.1c1.2 0 2.1-1 2.1-2.2 0-.1 0-.3-.1-.4-1.2-5.4-6.1-7.9-11.9-7.9h-2c-5.8 0-10.7 2.5-11.9 7.9-.3 1.1.5 2.3 1.6 2.5.1 0 .3 0 .4.1h21.8z" />
    ),
    viewBox: "0 -12 30 70"
  },
  Add: {
    svg: <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />,
    viewBox: "-6 -6 36 36"
  },
  Calendar: {
    svg: (
      <G>
        <Path d="M12.79 6.77h15.74M1.5 16.9v-2c0-4.5 2.91-8.15 6.5-8.15h4.79M28.53 6.77H34c3.59 0 6.5 3.65 6.5 8.15v2" />
        <Path d="M1.5 16.9v21.21c0 4.5 2.91 8.15 6.5 8.15h26c3.59 0 6.5-3.65 6.5-8.15V16.9" />
        <Path d="M13.64 6.77V.31M27.67 6.77V0" />
        <Path d="M.5 16.9h41M27.5 24.13l-13 13M14.5 24.13l13 13" />
      </G>
    ),
    viewBox: "0 0 44 48"
  },
  Share: {
    svg: (
      <G>
        <Path d="M24.88 0a24.88 24.88 0 1 0 24.88 24.88A24.91 24.91 0 0 0 24.88 0zm-6.53 24.84a4.94 4.94 0 0 1-.06.74l10.47 5.12a5 5 0 1 1-1.3 2.65L17 28.22a4.92 4.92 0 1 1 0-6.76l10.45-5.07a5 5 0 0 1-.06-.72A4.93 4.93 0 1 1 28.74 19l-10.45 5.12a4.85 4.85 0 0 1 .06.72z" />
      </G>
    ),
    viewBox: "0 0 50 50"
  },
  Trash: {
    svg: (
      <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    ),
    viewBox: "0 0 24 24"
  },
  Bio: {
    svg: (
      <G>
        <Path d="M36.09 27.61v9.49a8.8 8.8 0 0 1-8.78 8.78H10.78A8.8 8.8 0 0 1 2 37.1V20.56a8.8 8.8 0 0 1 8.78-8.78h9.49" />
        <Path d="M45.01 9.41L26.75 28.89l-9.48 3.52 2.94-10.06L38.48 2.88l6.53 6.53z" />
      </G>
    ),
    viewBox: "0 -20 50 90"
  },
  Grid: {
    svg: (
      <Path d="M5.3 1.5h3.5c2.1 0 3.8 1.7 3.8 3.8v3.5c0 2.1-1.7 3.8-3.8 3.8H5.3c-2.1 0-3.8-1.7-3.8-3.8V5.3c0-2.1 1.7-3.8 3.8-3.8zm16.9 0h3.5c2.1 0 3.8 1.7 3.8 3.8v3.5c0 2.1-1.7 3.8-3.8 3.8h-3.5c-2.1 0-3.8-1.7-3.8-3.8V5.3c0-2.1 1.7-3.8 3.8-3.8zM5.3 18.4h3.5c2.1 0 3.8 1.7 3.8 3.8v3.5c0 2.1-1.7 3.8-3.8 3.8H5.3c-2.1 0-3.8-1.7-3.8-3.8v-3.5c0-2.1 1.7-3.8 3.8-3.8zm16.9 0h3.5c2.1 0 3.8 1.7 3.8 3.8v3.5c0 2.1-1.7 3.8-3.8 3.8h-3.5c-2.1 0-3.8-1.7-3.8-3.8v-3.5c0-2.1 1.7-3.8 3.8-3.8z" />
    ),
    viewBox: "0 0 40 40"
  },
  Home: {
    svg: (
      <G>
        <Path d="M52.14 21L26.79 2.5 2.81 21" />
        <Path d="M46 17.57V39.5H33V24.69a3.19 3.19 0 0 0-3.19-3.19h-4.65A3.19 3.19 0 0 0 22 24.69V39.5H9V17.57" />
      </G>
    ),
    viewBox: "0 0 24 24"
  },
  Instagram: {
    svg: (
      <Path d="M14.7 2h12.7C34.3 2 40 7.7 40 14.7v12.7c0 7-5.7 12.7-12.7 12.7H14.7C7.7 40 2 34.3 2 27.3V14.7C2 7.7 7.7 2 14.7 2zM21 12c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm11-3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" />
    ),
    viewBox: "0 0 24 24"
  },
  List: {
    svg: (
      <Path d="M3.5 1H29c1.4 0 2.5 1.1 2.5 2.5S30.4 6 29 6H3.5C2.1 6 1 4.9 1 3.5S2.1 1 3.5 1zm0 11H29c1.4 0 2.5 1.1 2.5 2.5S30.4 17 29 17H3.5C2.1 17 1 15.9 1 14.5S2.1 12 3.5 12zm0 12H29c1.4 0 2.5 1.1 2.5 2.5S30.4 29 29 29H3.5C2.1 29 1 27.9 1 26.5S2.1 24 3.5 24z" />
    ),
    viewBox: "0 -23 30 86"
  }
};