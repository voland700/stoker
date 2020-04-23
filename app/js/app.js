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

	function backToTop() {
		let btnTop = $('#btn_up');
		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 2000 && window.innerWidth >= 576) {
				btnTop.fadeIn();
			} else {
				btnTop.fadeOut();
			}
		});
		btnTop.on('click', () => {
			$('html').animate({ scrollTop: 0 }, 1000);
		});
	}
	backToTop();



});