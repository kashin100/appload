//현재 브라우저 정보를 소문자로 받아온다.
	var agent = navigator.userAgent.toLowerCase(); 
	// 브라우저 식별
	if(agent.indexOf("msie 7") >= 0){ 
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("naver") > -1){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("samsungbrowser") > -1){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("kakao") > -1){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("facebook") > -1){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("youtube") > -1){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("msie 9") >= 0){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("msie 10") >= 0){ 
		// IE 10
		if(agent.indexOf("Touch") >= 0){
			// IE10 on a machine with touch-capable hardware
			window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
		}else{
			window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
		}
	}else if(agent.indexOf("rv:11.0") >= 0){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("edg") >= 0){
		window.location.href = "intent://lover902.net#Intent;scheme=https;package=com.android.chrome;end";
	}else if(agent.indexOf("chrome") >= 0){
		
	}else if(agent.indexOf("whale") >= 0){
		
	}else if(agent.indexOf("safari") >= 0){
		
	}else if(agent.indexOf("firefox") >= 0){
		
	}else if(agent.indexOf("opera") >= 0){
		
	}else{
		alert(agent);
	}