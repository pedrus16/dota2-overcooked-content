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
	$.GetContextPanel().DeleteAsync( orderDuration - (Game.GetGameTime() - startTime) );
}

function SetItems( items )
{
	for (var key in items)
	{
		if (items.hasOwnProperty(key)) 
		{
			$( "#item" + key ).itemname = items[key];
		}
	}
}

(function()
{

	$.GetContextPanel().SetTimes = SetTimes;
	$.GetContextPanel().SetItems = SetItems;

})();
