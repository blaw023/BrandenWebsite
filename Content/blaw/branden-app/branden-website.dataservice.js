    angular
        .module('branden-site.module')
        .factory('branden-site.dataservice',['$http', '$q', 'config', BrandenDataService])
        

    function BrandenDataService($http, $q, config)
    {
        var service = {

            getImages : getImages,
            getBooks : getBooks,
            getBooksSearchUrl : getBooksSearchUrl,
            getInvestments : getInvestments,
            getSkillsVideos : getSkillsVideos
        }

        return service;

        function getImages()
        {
            return $http.get(config.prodApiUrl + 'api/homepage/getImages')
                .then(ResponseSuccess)
                .catch(ResponseError);         
        }

        function getBooks()
        {
            return $http.get(config.prodApiUrl + 'api/books/getBooks')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function getBooksSearchUrl()
        {
            return $http.get(config.prodApiUrl + 'api/books/getBooksSearchUrl')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function getInvestments()
        {
            return $http.get(config.prodApiUrl + 'api/investments/getInvestments')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function getSkillsVideos()
        {
            return $http.get(config.prodApiUrl + 'api/skills/getSkillsVideos')
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