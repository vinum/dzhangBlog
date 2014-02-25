Msg = new Meteor.Collection("messages");

Meteor.subscribe("messages");

Template.postMsg.events({
	'click #post_Msg':function(){
		var date = new Date();
		var time = {
			date:date,
			year:date.getFullYear(),
			month:date.getFullYear()+"-"+(date.getMonth()+1),
			day:date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate(),
			minute:date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+(date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
	};
		var userMsg = $('#content').val();
		if(userMsg.length<6 || userMsg >38){
			alert("length >= 6 && length <=38");
			return false;
		}else{
			Meteor.call("postMsg",Meteor.user().username,Meteor.userId(),userMsg,time,function(err){
				if(err){
					alert(err.reason);
				}else{
					$('#content').val(''); //empty
				}
			})
		}
		
	},
	'click #content':function(e,t){
		$('#content').focus();
		$("#content").select();
	}

});
