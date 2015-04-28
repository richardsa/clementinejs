app.controller('linkCtrlr', function ($scope, $timeout) {

	function getHref (e) {
		var href = '';

		if (e.srcElement.localName === "img") {
			return e.target.offsetParent.attributes.href.nodeValue;
		} else {
			return e.target.href;
		}
	}


	$scope.delayLink = function (e) {
		$timeout(function () {
			var url = getHref(e);

			window.open(url, '_blank');
		}, 350);
	};

});