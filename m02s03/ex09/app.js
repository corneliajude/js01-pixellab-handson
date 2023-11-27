// // fun research:
// // tot un array like object
// // obj.0 => are nevoie de bracket notation
// // obj[0];
// const heading = document.getElementsByTagName('h1')[0];
// const ul = document.querySelector('ul');

// // functiile adaugate ca event listener
// // vor primi event ca parametru
// const onClick = (event) => {
//   // destucutre
//   const { currentTarget: heading } = event;
//   // echivalent cu currentTarget = event.currentTarget
//   // alias cu heading
//   // const heading = event.currentTarget;

//   // DOM traversal spre UL (h1 + ul)
//   const ul = heading.nextElementSibling;
//   // proprietatea style.display
//   // se refera la stilul INLINE
//   // nu la ce avem in CSS
//   if (ul.style.display === '') {
//     ul.style.display = 'none';
//   } else {
//     ul.style.display = '';
//   }
// };

// // const onResize = () => {
// //   const width = window.innerWidth;

// //   if (width <= 500) {
// //     ul.style.display = 'none';
// //     heading.addEventListener('click', onClick);
// //   } else {
// //     ul.style.display = '';
// //     heading.removeEventListener('click', onClick);
// //   }
// // };

// // onResize();

// // window.addEventListener('resize', onResize);
// const mediaQueryList = matchMedia('(max-width: 500px)');
// const enableMenu = (matches) => {
//   if (matches) {
//     ul.style.display = 'none';
//     heading.addEventListener('click', onClick);
//   } else {
//     ul.style.display = '';
//     heading.removeEventListener('click', onClick);
//   }
// };

// enableMenu(mediaQueryList.matches);

// mediaQueryList.addEventListener('change', (event) => {
//   // destructure
//   // const matches = event.matches;
//   const { matches } = event;
//   enableMenu(matches);
// });

const breakpoint = 992;
const mql = window.matchMedia(`max-width: ${breakpoint}px`);

// event delegation
document.addEventListener('click', onClick);

function onClick(event) {
  // target elementul de pe care a plecat eventul
  const target = event.target;

  // verificari + early return
  if (target.nodeName !== 'H1') {
    return;
  }

  const list = target.nextElementSibling;
  list.hidden = !list.hidden;
}

// low resolution
if (mql.matches) {
  toggleLists();
}

mql.addEventListener('change', function ({ matches }) {
  const lists = document.querySelectorAll('ul');

  if (matches === true) {
    // add listener
    document.addEventListener('click', onClick);
    lists.forEach(function (list) {
      list.hidden = true;
    });
  } else {
    // remove listener
    document.removeEventListener('click', onClick);
    lists.forEach(function (list) {
      list.hidden = false;
    });
  }
});

function toggleLists() {
  const lists = document.querySelectorAll('ul');
  lists.forEach(function (list) {
    list.hidden = true;
  });
}
