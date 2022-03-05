const books = ["A Smarter Way to Learn JavaScript","JavaScript: The Definitive Guide","Head First JavaScript Programming: A Brain-Friendly Guide","Eloquent JavaScript, 3rd Edition","The Principles of Object-Oriented JavaScript","JavaScript: The Good Parts","Secrets of the JavaScript Ninja","Professional JavaScript for Web Developers","Javascript for Beginners","Effective JavaScript","You Don’t Know JS"];

for(let book of books){
    if(book.toLowerCase().includes("javascript")){
        console.log(book);
    }
}