    angular
        .module('branden-site.module')
        .factory('branden-site.dataservice',['$http', '$q', BrandenDataService])
        

    function BrandenDataService($http, $q)
    {
        var service = {

            getImages : getImages
        }

        return service;

        function getImages()
        {
            //put as config item
            var baseurl = 'http://localhost:2713/';

            return $http.get(baseurl + 'api/homepage/getImages')
                .then(ImageResponseSuccess)
                .catch(ImageResponseError)          
        }

        function ImageResponseSuccess(response)
        {
            return response.data;
        }

        function ImageResponseError(error)
        {
            return $q.reject(error);
        }
    }