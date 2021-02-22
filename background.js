chrome.webRequest.onBeforeSendHeaders.addListener(
	function(details){
		hascache=0;
		for (var i = 0; i < details.requestHeaders.length; ++i) {
			if (details.requestHeaders[i].name.toString()=='Cache-Control'){
				alert(1);
				details.requestHeaders[i].value="no-cache";
				hascache=1;
				break;
			}
		}
		if(hascache!=1){
			var myCache=new Object();
			myCache.name="Cache-Control";
			myCache.value="no-cache";
			details.requestHeaders.push(myCache);
		}
		return {requestHeaders:details.requestHeaders};
	},
	{urls:["https://rsb.pingan.com.cn/*"]},
	['requestHeaders','blocking']
	);