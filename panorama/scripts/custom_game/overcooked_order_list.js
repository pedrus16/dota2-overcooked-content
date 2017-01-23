"use strict";

var listPanel = $( "#OrderList" );

function UpdateOrders( table_name, key, data)
{
	if (key !== 'orders') { return; }

	listPanel.RemoveAndDeleteChildren();
	for (var key in data) 
	{
		if (data.hasOwnProperty(key))
		{
			var order = data[key];
			var orderPanel = $.CreatePanel( "Panel", listPanel, "Order" + key );
			orderPanel.BLoadLayout( "file://{resources}/layout/custom_game/overcooked_order.xml", false, false );
			orderPanel.SetTimes(order.start_time, order.content.duration);
			var items = order.content.items;

			for (var key in items)
			{
				if (items.hasOwnProperty(key)) 
				{
					orderPanel.SetItem(key, items[key]);
				}
			}
		}
	}
}

(function()
{

	CustomNetTables.SubscribeNetTableListener('overcooked', UpdateOrders)

})();
