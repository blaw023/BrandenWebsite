    angular
        .module('branden-site.module')
        .factory('branden-site.dataservice',['$http', '$q', BrandenDataService])
        

    function BrandenDataService($http, $q)
    {
        var service = {

            getImages : getImages,
            getBooks : getBooks,
            getInvestments : getInvestments,
            getSkillsVideos : getSkillsVideos
        }

        return service;

        function getImages()
        {
            //put as config item
            var baseurl = 'http://localhost:2713/';

            return $http.get(baseurl + 'api/homepage/getImages')
                .then(ResponseSuccess)
                .catch(ResponseError);         
        }

        function getBooks()
        {
            var baseurl = 'http://localhost:2713/';

            return $http.get(baseurl + 'api/books/getBooks')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function getInvestments()
        {
            var baseurl = 'http://localhost:2713/';

            return $http.get(baseurl + 'api/investments/getInvestments')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function getSkillsVideos()
        {
            var baseurl = 'http://localhost:2713/';

            return $http.get(baseurl + 'api/skills/getSkillsVideos')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function ResponseSuccess(response)
        {
            return response.data;
        }

        function ResponseError(error)
        {
            return $q.reject(error);
        }
    }