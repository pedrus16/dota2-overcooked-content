"use strict";

var startTime = 0;
var endTime = 0;
var orderDuration = 0;

function UpdateTimer()
{
	var timeLeft = (startTime + orderDuration) - Game.GetGameTime();
	if (timeLeft <= 0 || orderDuration <= 0) 
	{ 
		return;
	}
	var width = ((timeLeft  / orderDuration) * 100) + '%';
	$('#timer').style['width'] = width;
	$.Schedule(1/30, UpdateTimer);
}

function SetTimes( start_time, duration )
{
	startTime = start_time;
	orderDuration = duration;
	endTime = startTime + orderDuration;
	UpdateTimer();
}

function SetItem( key, item )
{
	$( "#item" + key ).itemname = item;
}

(function()
{

	$.GetContextPanel().SetTimes = SetTimes;
	$.GetContextPanel().SetItem = SetItem;

})();
