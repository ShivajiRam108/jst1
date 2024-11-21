 
//  question -1 
 
 class book {
    title;
    author;
    isbn;

    constructor (title , author , isbn){
        this. title = title;
        this. author = author;
        this. isbn = isbn;
    }
    checkOut(){
        console.log(this.title, "ravindranth has been  taken");
    }
    return(){
        console.log(this.title, "he is return the book");
 
    }
    updatedtitle(newtitle){
        this.title = newtitle;
    }
}
var bookone = new book ("vandemathar" , "ravindranth", "152" );
bookone.checkOut();
bookone.return();
bookone .updatedtitle("ramayan");
console.log(bookone);

var booktwo = new book ("html" , "lee" , "1995")
console.log(booktwo);
// console.log();






