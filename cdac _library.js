console.log("Connected💡");

const tbody = document.getElementsByTagName('tbody')[0];
const alerts = document.getElementsByClassName('alert')[0];

class Book {
    constructor(bookname, Author, booktype) {

        this.bookname = bookname,
            this.Author = Author,
            this.booktype = booktype
    }
}



const getData = document.getElementsByClassName("submit_btn")[0];
getData.addEventListener('click', submitted);

function submitted(e) {
    e.preventDefault()
    // console.log("Received Data");
    // const bookname = document.getElementsByClassName("bookname")[0];
    // console.log(bookname.value);

    // const Author = document.getElementsByClassName("Author")[0];
    // console.log(Author.value);


    const bookname = document.getElementsByClassName("bookname")[0].value;
    const Author = document.getElementsByClassName("Author")[0].value;

    const historical_fiction = document.getElementsByClassName('Historical_fiction')[0].checked;
    const fantasy_fiction = document.getElementsByClassName('Fantasy_fiction')[0].checked;
    const biography = document.getElementsByClassName('Biography')[0].checked;

    var booktype;
    if (historical_fiction) {
        booktype = "Historical fiction"
    }
    else if (fantasy_fiction) {
        booktype = "Fantasy fiction"

    }
    else {
        booktype = "Biography"
    }

    const bookdata = new Book(bookname, Author, booktype)
    console.log(bookdata);
    if(bookname.length>2 && Author.length>2){
        addrow(bookdata)
    }
    else{
        alerts.classList.remove('hidden')
        setTimeout(()=>{
            alerts.classList.add('hidden')
        },1000)
    }
    document.getElementsByTagName('form')[1].reset();

}

var i=0;

function addrow(data) {
    i++
    const newrow = document.createElement('tr');
    newrow.innerHTML = ` <th scope="row">${i}</th>
                     <td>${data.bookname}</td>
                     <td>${data.Author}</td>
                     <td>${data.booktype}</td>`
tbody.append(newrow)
}