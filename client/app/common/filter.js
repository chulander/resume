function filterDate($filter) {
    return function(input) {
        if (input == null) {
            return "";
        }

        var _date = $filter('date')(new Date(input), 'MMM yy');

        return _date.toUpperCase();

    };
}

filterDate.$inject = ['$filter'];

module.exports = filterDate;