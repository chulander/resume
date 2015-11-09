function filterDate($filter) {
    return function(input) {
        if (input === null) {
            return "";
        }

        var _date = $filter('date')(new Date(input), 'MMM yy');

        return _date;

    };
}

filterDate.$inject = ['$filter'];

module.exports = /*@ngInject*/ filterDate;