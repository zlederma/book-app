export function numBooks(width, min) {
    let booksPerRow = 0;
    //if smaller breakpoint
    if (width <= 767) {
        let gridWidth = 160;
        //width minus the left and right margins
        width = width - 30;
        booksPerRow = Math.floor(width / gridWidth);
    }
    else {
        let gridWidth = 225;
        width = width - 40;
        booksPerRow = Math.floor(width / gridWidth);
    }

    let num = 0;
    //We want to show at least 10 books and have fully filled grid rows
    while (num < min) {
        num += booksPerRow
    }
    return num;
}
