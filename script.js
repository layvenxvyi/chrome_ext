var s=document.createElement('script');
s.src=chrome.extension.getURL('js/hook.js');
s.onload=function(){
	this.remove();
};
(document.head||document.documentElement).appendChild(s);

// var s=document.createElement('script');
// s.src=chrome.extension.getURL('js/inject.js');
// s.onload=function(){
// 	this.remove();
// };
// (document.head||document.documentElement).appendChild(s);
