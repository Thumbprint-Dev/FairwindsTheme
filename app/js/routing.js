four51.app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    var concatProductView = function(routeParams){
        return 'productview.hcf?id='+ routeParams.productInteropID;
    }

    var concatSpecFormView = function(routeParams){
        return 'specform.hcf?id=' + routeParams.productInteropID;
    }

    $routeProvider.
        when('/listOrders', { templateUrl: 'partials/listOrders.html', controller: 'ListOrdersCtrl' }).
        when('/orderdetails/:orderid', {templateUrl: 'partials/orderDetails.html', controller: 'OrderDetailsCtrl'}).
        when('/catalog', { templateUrl: 'partials/categoryView.html', controller: 'CategoryCtrl' }).
        when('/catalog/:categoryInteropID', { templateUrl: 'partials/categoryView.html', controller: 'CategoryCtrl' }).
        when('/kit/:id', {templateUrl: 'partials/kitView.html', controller: 'KitCtrl'}).
        when('/kit/:id/:lineitemid', {templateUrl: 'partials/kitView.html', controller: 'KitCtrl'}).
        when('/kit/:id/:lineitemid/:productInteropID', {templateUrl: concatSpecFormView, controller: 'KitSpecFormCtrl'}).
        when('/kit/:id/:lineitemid/:productInteropID/:variantInteropID', {templateUrl: "partials/kitVariantView.html", controller: 'KitVariantCtrl'}).
        when('/kit/:id/:lineitemid/:productInteropID/:variantInteropID/edit', {templateUrl: concatSpecFormView, controller: 'KitSpecFormCtrl'}).
        when('/product/:productInteropID', {templateUrl: concatProductView, controller: 'ProductCtrl'}).
        when('/product/:productInteropID/:variantInteropID', {templateUrl: concatProductView, controller: 'ProductCtrl'}).
        when('/product/:productInteropID/:variantInteropID/edit', {templateUrl: concatSpecFormView, controller: 'SpecFormCtrl'}).
        when('/product/:productInteropID/:variantInteropID/:orderID', {templateUrl: concatProductView, controller: 'ProductCtrl'}).
        when('/product/:productInteropID/:variantInteropID/:lineItemIndex/:orderID/edit', {templateUrl: concatSpecFormView, controller: 'SpecFormCtrl'}).
        when('/order', { templateUrl: 'partials/orderSearchView.html', controller: 'OrderSearchCtrl' }).
        when('/order/:id', { templateUrl: 'partials/Reporting/orderHistoryView.html', controller: 'OrderViewCtrl' }).
        when('/order/new/:id', { templateUrl: 'partials/Reporting/orderHistoryView.html', controller: 'OrderViewCtrl' }).
        when('/favoriteorders', { templateUrl: 'partials/favoriteOrderListView.html', controller: 'FavoriteOrderCtrl' }).
        when('/order/:orderid/:lineitemindex/', { templateUrl: 'partials/Reporting/lineItemHistoryView.html', controller: 'LineItemViewCtrl' }).
        when('/message', { templateUrl: 'partials/messageListView.html', controller: 'MessageListCtrl' }).
        when('/message/:id', { templateUrl: 'partials/messageView.html', controller: 'MessageViewCtrl' }).
        when('/admin', { templateUrl: 'partials/userView.html', controller: 'UserEditCtrl' }).
        when('/addresses', { templateUrl: 'partials/addressListView.html', controller: 'AddressListCtrl' }).
        when('/address', { templateUrl: 'partials/addressView.html', controller: 'AddressViewCtrl' }).
        when('/address/:id', { templateUrl: 'partials/addressView.html', controller: 'AddressViewCtrl' }).
        when('/cart', { templateUrl: 'partials/cartView.html', controller: 'CartViewCtrl'}).
        when('/checkout', { templateUrl: 'partials/checkOutView.html', controller: 'CheckOutViewCtrl' }).
        when('/checkout/:id', { templateUrl: 'partials/checkOutView.html', controller: 'CheckOutViewCtrl' }).
        when('/cart/:productInteropID/:lineItemIndex', { templateUrl: concatProductView, controller: 'LineItemEditCtrl'}).
        when('/cart/:productInteropID/:orderID/:lineItemIndex', { templateUrl: concatProductView, controller: 'LineItemEditCtrl'}).
        when('/cart/:id', { templateUrl: 'partials/cartView.html', controller: 'CartViewCtrl' }).
        when('/login', { templateUrl: 'partials/controls/login.html', controller: 'LoginCtrl' }).
        when('/search', { templateUrl: 'partials/searchView.html', controller: 'ProductSearchCtrl' }).
        when('/search/:searchTerm', { templateUrl: 'partials/searchView.html', controller: 'ProductSearchCtrl' }).
        when('/security', { templateUrl: 'partials/Security/security.html', controller: 'SecurityCtrl' }).
        when('/conditions', { templateUrl: 'partials/Conditions/conditions.html', controller: 'ConditionsCtrl' }).
        when('/reports', { templateUrl: 'partials/reportsView.html', controller: 'ReportsCtrl' }).
        when('/report/:id', { templateUrl: 'partials/Reporting/reportView.html', controller: 'ReportCtrl' }).
        when('/contactus', { templateUrl: 'partials/Messages/contactus.html' }).
        otherwise({redirectTo: '/catalog'});
}]);

// Start every route at the top of the page.
//
// ngView already has an `autoscroll` attribute in index.html, but in Angular 1.2
// that calls $anchorScroll from inside the ngAnimate "enter" callback - it fires
// after the browser has clamped the previous scroll offset to the new view's
// height. Following a link from the bottom of a long page (the footer's own links,
// or the contact link in the home CTA) therefore lands part-way down, or at the
// bottom, of the next page. Resetting on $routeChangeSuccess is independent of the
// animation, so it holds regardless of view height.
four51.app.run(['$rootScope', '$anchorScroll', '$location', function($rootScope, $anchorScroll, $location) {
    $rootScope.$on('$routeChangeSuccess', function() {
        // A link that targets an in-page anchor still wins; only reset when there
        // is no fragment to honour.
        if ($location.hash()) $anchorScroll();
        else window.scrollTo(0, 0);
    });
}]);
