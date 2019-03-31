document.addEventListener('DOMContentLoaded', function() {
	var moreBtn = document.querySelector('.button.more');
	var pageMain = document.querySelector('.page-main');
	var pageCollapsed = document.querySelector('.page-collapsed');

	moreBtn.addEventListener('click', function() {
		pageMain.classList.remove('page-active');
		pageCollapsed.classList.add('page-active');
	});
});