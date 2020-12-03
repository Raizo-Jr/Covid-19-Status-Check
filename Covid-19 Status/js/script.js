
const URL = "https://covid19.mathdro.id/api";
let app = angular.module('MyApp', [])

app.controller('MyCtrl', ($scope, $http) => {
    //This is controller
    $scope.title = "Stay Home Stay Safe";

    //API Calling
    $http.get(URL).then((response) => {
        //Success
        console.log(response.data);

        $scope.all_data = response.data;
    }, (error) => {
        //Error
        console.log(error);
    });

    //get country data
    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == "") {
            $scope.c_data = undefined;
            return;
        };

        $http.get(`${URL}/countries/${country}`)
            .then((response) => {
                $scope.c_data = response.data;
            }, (error) => {
                console.log(error);
            });
    }
});