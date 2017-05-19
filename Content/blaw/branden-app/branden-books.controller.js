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

        function showReview(book)
        {
            vm.currentBook = book;
            vm.isReview = true;
            vm.isBooksList = false;
        }

        function goBackToBooks()
        {
            vm.isReview = false;
            vm.isBooksList = true;
        }

        function setRating()
        {
            vm.books.forEach(function (book) {
                book.rating = book.bookReviewRating;
            });
        }
    }




}(angular));