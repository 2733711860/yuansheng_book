/**
 * Created by ChengYa on 2016/6/18.
 */

//判断手机类型
window.onload = function() {
	var u = navigator.userAgent;
	if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
	} else if(u.indexOf('iPhone') > -1) { //苹果手机
		//屏蔽ios下上下弹性
		$(window).on('scroll.elasticity', function(e) {
			e.preventDefault();
		}).on('touchmove.elasticity', function(e) {
			e.preventDefault();
		});
	} else if(u.indexOf('Windows Phone') > -1) { //winphone手机
	}
	//预加载
	loading();
}

//加载页面
function loading() {
	$(function progressbar() {
		//拼接图片
		$('.shade').hide();
		$(".flipbook-viewport").show();
	});
	//配置turn.js
	function loadApp() {
		var w = $('.container').width();
		var h = $('.container').height();
		$('.flipboox').width(w).height(h);
		$(window).resize(function() {
			w = $('.container').width();
			h = $('.container').height();
			$('.flipboox').width(w).height(h);
		});
		$('.flipbook').turn({
			width: w,
			height: h,
			elevation: 50,
			acceleration: true, // 加速模式ture or false。（必须在移动端）
			display: 'single', // 显示模式(只显示一页single,两个页面double)
			gradients: true, // 显示渐变阴影
			autoCenter: true, // 中心翻取决于有多少页面可见 true or false
			duration: 300, // 设置翻页动画持续时间即翻页的快慢，默认600
			page: 1, // 默认哪一页
			when: { // 监听事件
				turning: function(e, page, view) {},
				turned: function(e, page, view) {
					console.log(page);
					var total = $(".flipbook").turn("pages"); //总页数
					var nowPage = $(".flipbook").turn("page"); // 当前页
					$(".number").html(nowPage + '/' + total);
				}
			}
		})
	}
	yepnope({
		test: Modernizr.csstransforms,
		yep: ['js/turn.js'],
		complete: loadApp
	});
}