// Step 1

const library  =[
    {
        title: 'To Kill a Mockingbird',
        author: 'Nelle Harper Lee',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        status: {
          own: true,
          reading: false,
          read: false,
        },
      },
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        status: {
          own: true,
          reading: false,
          read: true,
        },
      },
];

// Step 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);


// Step 3

const {title: firstBook} = library[0];

console.log(firstBook);

// Step 4

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);