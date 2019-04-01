document.addEventListener('DOMContentLoaded', function() {
	var pageMain = document.querySelector('.page-main');
	var pageCollapsed = document.querySelector('.page-collapsed');

	var moreBtn = document.querySelector('.button.more');
	var promocodeBtn = pageMain.querySelector('.button.promocode');
	var promocodeCollapsedBtn = pageCollapsed.querySelector('.button.promocode');


	moreBtn.addEventListener('click', function() {
		pageMain.classList.remove('page-active');
		pageCollapsed.classList.add('page-active');
		sendGA('2 экран');
	});


	promocodeBtn.addEventListener('click', function() {
		sendGA('сайт');
		sendPostMessage()
	});

	promocodeCollapsedBtn.addEventListener('click', function() {
		sendGA('сайт');
		sendPostMessage();
	});


	function sendGA(action) {
		gtag('event', 'biooil', { 'event_category': 'button_click', 'event_action': action});
	}

	function sendPostMessage() {
		window.parent.postMessage('outer__http://www.mybiooil.ru/?utm_source=ctc&utm_medium=media&utm_campaign=promo_interblock&utm_term=studiya24', '*');
	}

});

