(function (angular) {

    angular.module('branden-site.module')
            .controller('branden-books.controller', ['books', BrandenBooksController])


    function BrandenBooksController(books) {
        var vm = this;

        //variables
        vm.books = books;
        vm.isCollapsed = false;
        vm.isReview = false;
        vm.isBooksList = true;
        vm.currentBook = [];
        vm.currentNavItem = "books";
        vm.isReadOnly = true;
        

        //functions
        vm.showReview = showReview;
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
            vm.isReview = true;
            vm.isBooksList = false;
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
                book.rating = book.bookReviewRating;
            });
        }
    }




}(angular));