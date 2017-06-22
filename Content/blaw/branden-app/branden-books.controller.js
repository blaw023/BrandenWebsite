(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-books.controller', ['Books', 'BooksSearch', BrandenBooksController])


    function BrandenBooksController(Books, BooksSearch) {
        var vm = this;

        //variables
        vm.books = Books;
        vm.booksSearch = BooksSearch;
        vm.isCollapsed = false;
        vm.isReview = false;
        vm.isBooksList = true;
        vm.currentBookUrl = null;
        vm.isReadOnly = true;

        vm.currentBook = [];
        vm.bookUrlDict = new Map();
        
        vm.currentNavItem = "books";
        
        //functions
        vm.showReview = showReview;
        vm.setBookDict = setBookDict;
        vm.goBackToBooks = goBackToBooks;
        vm.setRating = setRating;

        activate();


        function activate()
        {
            setRating();          
        }

        ///<summary>
        ///Called when user wants to see review of book
        ///</summary>
        function showReview(book)
        {
            vm.currentBook = book;
            vm.currentBookUrl = vm.bookUrlDict.get(vm.currentBook.BookCode);
            vm.isReview = true;
            vm.isBooksList = false;
        }

        /**
        *Sets the book url values from array into dictionary
        */
        function setBookDict()
        {
            vm.booksSearch.forEach(function(book){
                vm.bookUrlDict.set(book.BookCode, book.BookUrl);
            });
        }

        ///<summary>
        ///Called when user is done with review and wants to go back to main books page.
        ///</summary>
        function goBackToBooks()
        {
            vm.isReview = false;
            vm.isBooksList = true;
        }
        
        ///<summary>
        ///On activate set the star rating for each book.
        ///</summary>
        function setRating()
        {
            vm.books.forEach(function (book) {
                book.Rating = book.BookReviewRating;
            });

            setBookDict();
        }

    }




}(angular));