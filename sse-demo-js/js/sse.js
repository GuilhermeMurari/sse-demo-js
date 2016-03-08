var SSE = window.SSE || {};

SSE.ServerSentEvent = (function($) {

	var ServerSentEvent = {
		var uri = "";
		var eventSource;

		"init" : function(uri) {
			this.uri = uri;

			eventSource = new EventSource(this.uri);
			source.onmessage = this.onmessage;
        },

        "onmessage" = function (event) {
			document.body.innerHTML += "Received data: " + event.data + " at " + Date() + " <br>";
		};

	};

})(jQuery);