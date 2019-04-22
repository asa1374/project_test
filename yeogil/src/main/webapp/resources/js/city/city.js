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
				case 'hotel':
					
					break;
				case 'touristarea':
					alert('관광명소 누름');
					
					break;
				case 'restaurant':
					alert('음식점 누름');
					break;
				case 'shopping':
					alert('쇼핑 누름');
					break;
				case 'calendar':
					
					break;
				}
			});
		});
		city_detail();
	};
	let common_navi = ()=>{
	return [
		{name :"home",text :"홈"},
		{name :"hotel",text :"호텔"},
		{name :"touristarea",text :"관광명소"},
		{name :"restaurant",text :"음식점"},
		{name :"shopping",text :"쇼핑"},
		{name :"calendar",text :"여행일정"}
		];
	};
	let city_detail = ()=>{
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