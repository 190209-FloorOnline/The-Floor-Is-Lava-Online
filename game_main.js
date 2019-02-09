function Start(){
  $.ajax({
				type: "post",
				url: "https://www.vr439.com/Api/act/get_api",
				data:{
					"app_id":"123456789"
				},
				cache: false,
				async: false,
				dataType: "json",
				success: function(ret) {
					if (ret) {
						if (ret.code == 200) {
							if (ret.result.show_icon == "1") {
                imgs(ret.result.iconimage,"on");
							}else{
								game_start();
							}
						}else{
							game_start();
						}
					}else{
						game_start();
					}
				},
				error:function(ret){
					game_start();
				}
			});
  
}
