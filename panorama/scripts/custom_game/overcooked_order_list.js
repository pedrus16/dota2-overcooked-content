'use strict';

var orders = [];
var listPanel = $( '#OrderList' );

function OnNewOrder( order )
{
	var orderPanel = $.CreatePanel( 'Panel', listPanel, '' );
	orderPanel.BLoadLayout( 'file://{resources}/layout/custom_game/overcooked_order.xml', false, false );
	orderPanel.SetTimes(order.start_time, order.duration);
	orderPanel.SetItems(order.items);
	orders[order.start_time] = orderPanel;
}

function OnOrderComplete( data )
{
	var order = orders[data.start_time];
	if (order)
	{
		order.DeleteAsync(0);
	}
}

(function()
{
 	orders = [];

	GameEvents.Subscribe( 'new_order', OnNewOrder);
	GameEvents.Subscribe( 'order_complete', OnOrderComplete);

})();
