var city = city || {}
city = (()=>{
	let _,js,compojs;
	
	let init = ()=>{
		_ = $.ctx();
        js = $.js();
        compojs = js+"/comp/compo.js";
		onCreate();
	};
	let onCreate = ()=>{
		setContentView();
	};
	let setContentView = ()=>{
		$(compo.common_menu()).appendTo('#common_area');
		
		$.each(common_navi(),(i,j)=>{
			$('<a>'+j.text+'</a>')
			.appendTo('.common_menu')
			.attr('name',j.name)
			.click(function(){
				let that = $(this).attr('name');
				switch(that){
				case 'home':
					
					break;
				case 'main_city':
					$.getScript(compojs,()=>{
						$('.inner_box').remove();
						$('.white').remove();
						$('<div id="cj_content"></div>').appendTo('#wrapper');
						$(compo.tourist_main_city()).appendTo('#cj_content');
						
						$('#taipai').click(()=>{
							$('#cj_content').remove();
							$('.inner_box').remove();
							$('.white').remove();
							$('<div id="cj_content"></div>').appendTo('#wrapper');
							$(compo.city_detail()).appendTo('#cj_content');
							$('.area_title b').text('타이베이');
							$('.area_title span').text('taipai');
							$('<a> &gt; 타이베이 </a>').addClass('nav_btn').appendTo('.area_nav');
							$('<img></img>')
							.attr("src",_+"/resources/img/component/taipai.jpg")
							.attr("width","628")
							.attr("height","369")
							.appendTo('.img_box');
							
							city_detail();
						});
					});
					break;
				case 'tourist_city':
					$.getScript(compojs,()=>{
						$('#cj_content').remove();
						$('.inner_box').remove();
						$('.white').remove();
						$('<div id="cj_content"></div>').appendTo('#wrapper');
						$(compo.tourist_city()).appendTo('#cj_content');
						$(compo.tourist_list()).appendTo('#cj_content');

					});
					break;
				case 'restaurant':
					$.getScript(compojs,()=>{
						$('#cj_content').remove();
						$('.inner_box').remove();
						$('.white').remove();
						$('<div id="cj_content"></div>').appendTo('#wrapper');
						$(compo.restaurant_city()).appendTo('#cj_content');
						$(compo.tourist_list()).appendTo('#cj_content');
						
					});
					break;
				case 'shopping':
					$.getScript(compojs,()=>{
						$('#cj_content').remove();
						$('.inner_box').remove();
						$('.white').remove();
						$('<div id="cj_content"></div>').appendTo('#wrapper');
						$(compo.shopping_city()).appendTo('#cj_content');
						$(compo.tourist_list()).appendTo('#cj_content');
						
					});
					break;
				case 'calendar':
					
					break;
				case 'map':
					
					break;
				}
			});
		});
		country_detail();
	};
	let common_navi = ()=>{
	return [
		{name :"home",text :"홈"},
		{name :"main_city",text :"주요도시"},
		{name :"tourist_city",text :"관광명소"},
		{name :"restaurant",text :"음식점"},
		{name :"shopping",text :"쇼핑"},
		{name :"calendar",text :"여행일정"},
		{name :"map",text :"지도보기"}
		];
	};
	let country_detail = ()=>{

		$('<img></img>').attr("src",_+"/resources/img/component/taiwan01.png")
		.attr("width","625")
		.attr("height","369").appendTo('.img_box');
		$('<a class="city_box"><div class="city_title">가오슝</div>'
				+'<div class="city_desc">가오슝원경관,삼봉궁,보얼예술특구</div>'
				+'</a>')
				.appendTo('.city_list');
		
		$('<img class="city_img"></img>')
		.attr("src",_+"/resources/img/component/taiwan02.jpg")
		.attr("width","346")
		.attr("height","240")
		.appendTo('.city_box');
		
		$('<a class="city_box"><div class="city_title">타이베이</div>'
				+'<div class="city_desc">타이베이 기차역 북문~</div>'
				+'</a>')
				.appendTo('.city_list');
		
		$('<img class="city_img"></img>')
		.attr("src",_+"/resources/img/component/taiwan03.jpg")
		.attr("width","346")
		.attr("height","240")
		.appendTo('.city_box');
		
		$('<a class="city_box"><div class="city_title">화롄</div>'
				+'<div class="city_desc">바다~</div>'
				+'</a>')
				.appendTo('.city_list');
		
		$('<img class="city_img"></img>')
		.attr("src",_+"/resources/img/component/taiwan04.jpg")
		.attr("width","346")
		.attr("height","240")
		.appendTo('.city_box');
	};
	let city_detail = ()=>{
		$('.area_title').text('타이베이 인기장소');
		
		$('<img></img>').attr("src",_+"/resources/img/component/taiwan01.png")
		.attr("width","625")
		.attr("height","369").appendTo('.img_box');
		$('<a class="city_box"><div class="city_title">가오슝</div>'
				+'<div class="city_desc">가오슝원경관,삼봉궁,보얼예술특구</div>'
				+'</a>')
				.appendTo('.city_list');
		
		$('<img class="city_img"></img>')
		.attr("src",_+"/resources/img/component/taiwan02.jpg")
		.attr("width","346")
		.attr("height","240")
		.appendTo('.city_box');
		
		$('<a class="city_box"><div class="city_title">타이베이</div>'
				+'<div class="city_desc">타이베이 기차역 북문~</div>'
				+'</a>')
				.appendTo('.city_list');
		
		$('<img class="city_img"></img>')
		.attr("src",_+"/resources/img/component/taiwan03.jpg")
		.attr("width","346")
		.attr("height","240")
		.appendTo('.city_box');
		
		$('<a class="city_box"><div class="city_title">화롄</div>'
				+'<div class="city_desc">바다~</div>'
				+'</a>')
				.appendTo('.city_list');
		
		$('<img class="city_img"></img>')
		.attr("src",_+"/resources/img/component/taiwan04.jpg")
		.attr("width","346")
		.attr("height","240")
		.appendTo('.city_box');
	};
	return {init : init}
})();