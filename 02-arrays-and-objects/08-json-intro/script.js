const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
}

console.log(post)

const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

console.log(str);
console.log(obj);