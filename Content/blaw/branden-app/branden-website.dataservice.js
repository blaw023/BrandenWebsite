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
            getSkillsVideos : getSkillsVideos,
            getPlayers : getPlayers,
            getChelseaFacts : getChelseaFacts,
            getUconnPlayerStats : getUconnPlayerStats,
            trackUserActivity : trackUserActivity
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

        function getPlayers()
        {
            return $http({
                headers: {'X-Auth-Token': '942057f7594244e9a567edbe36ac46f6'},
                method: 'GET',
                url: 'http://api.football-data.org/v1/teams/61/players'
            }).then(ResponseSuccess)
              .catch(ResponseError);
        }

        function getChelseaFacts()
        {
            return $http.get(config.prodApiUrl + 'api/dashboard/getChelseaFacts')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function getUconnPlayerStats()
        {
            return $http.get(config.prodApiUrl + 'api/dashboard/getUconnPlayerStats')
                .then(ResponseSuccess)
                .catch(ResponseError);
        }

        function trackUserActivity(info)
        {
            return $http.post(config.prodApiUrl + 'api/dashboard/postUserActivity', info)
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