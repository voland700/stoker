document.addEventListener("DOMContentLoaded", function() {

	document.getElementById('topSearch').addEventListener('click', searchShow);
	function searchShow() {
		const searchForm = document.getElementById('searchForm');
		if (!searchForm.classList.contains('show')){
			searchForm.classList.add('show');
		}
		document.getElementById('searchClosed').addEventListener('click', function(){
			if (searchForm.classList.contains('show')) {
				searchForm.classList.remove('show');
			}
		})
	}

	document.getElementById('topMenuBtn').addEventListener('click', function () {
		const menu = document.querySelector('.head_menu-wrap');
		this.classList.toggle('btn_closed');
		this.classList.toggle('btn_open');
		menu.classList.toggle('menu_show');
	});


	document.getElementById('MobPhone').addEventListener('click', function () {
		const MobPhoneInfo = document.querySelector('.mob_phone_wrap');
		if (window.innerWidth <= 768) {
			MobPhoneInfo.classList.toggle('mob_showcase');
		}
		document.querySelector('.mob_phone_closed').addEventListener('click', function () {
			if (MobPhoneInfo.classList.contains('mob_showcase')) {
				MobPhoneInfo.classList.remove('mob_showcase');
			}
		});
	});

	/*--same-hight-bloks-main-page--*/
	funcItemsHeight()
	function funcItemsHeight() {
		var menuItems = document.querySelectorAll('.advice_item');
		var top = menuItems[0].offsetTop;
		var arrHeight = [];
		var arrItems = [];
		for (var i = 0; i < menuItems.length; i++) {
			menuItems[i].style.height = 'auto';
		}
		for (var i = 0; i < menuItems.length; i++) {
			if (top != menuItems[i].offsetTop) {
				arrHeight.sort(function (a, b) { return b - a });
				for (var j = 0; j < arrItems.length; j++) {

					arrItems[j].style.height = arrHeight[0] + 'px';
				}
				top = menuItems[i].offsetTop;
				arrHeight.length = arrItems.length = 0;
				i = i - 1;
				continue;
			}
			arrHeight[arrHeight.length] = menuItems[i].offsetHeight;
			arrItems[arrItems.length] = menuItems[i];
		}
		arrHeight.sort(function (a, b) { return b - a });
		for (var j = 0; j < arrItems.length; j++) {
			arrItems[j].style.height = arrHeight[0] + 'px';
		}
	}
	window.onresize = funcItemsHeight

	/*--tabs--*/
	document.querySelectorAll('.advice_top_item').forEach(function(elem){
		elem.addEventListener('click', function(item){
			let elemSelected = item.target.parentElement;
			let nameAttr = elemSelected.dataset.advice;
			let nameList = document.querySelectorAll('.advice_top_item');
			let tabsList;
			if (!elemSelected.classList.contains('clicked')){
				nameList.forEach(function(name){
					if (name.classList.contains('clicked'))name.classList.remove('clicked');
				});
				elemSelected.classList.add('clicked');
				tabsList = document.querySelectorAll('.advice_prodact_wrap');
				tabsList.forEach(item => {
					item.dataset.tab == nameAttr ? item.classList.add('behold') : item.classList.remove('behold');
				})
			}
		});
	});





















});