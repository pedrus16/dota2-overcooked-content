// This is an example of how to use the GameUI.SetMouseCallback function
GameUI.SetMouseCallback( function( eventName, arg ) {
	var CONSUME_EVENT = true;
	var CONTINUE_PROCESSING_EVENT = false;

	$.Msg(GameUI.GetClickBehaviors());
	$.Msg(eventName);
	$.Msg(arg);
	// if ( GameUI.GetClickBehaviors() !== CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_NONE )
		return CONTINUE_PROCESSING_EVENT;

	// if ( eventName == "pressed" )
	// {
	// 	// Left-click is move to position
	// 	if ( arg === 0 )
	// 	{
	// 		var order = {};
	// 		order.OrderType = dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION;
	// 		order.Position = GameUI.GetScreenWorldPosition( GameUI.GetCursorPosition() );
	// 		order.Queue = false;
	// 		order.ShowEffects = false;
	// 		Game.PrepareUnitOrders( order );
	// 		return CONSUME_EVENT;
	// 	}

	// 	// Disable right-click
	// 	if ( arg === 1 )
	// 	{
	// 		return CONSUME_EVENT;
	// 	}
	// }
	// else if ( eventName === "wheeled" )
	// {
	// 	if ( arg < 0 )
	// 	{
	// 		var order = {};
	// 		order.OrderType = dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION;
	// 		order.Position = GameUI.GetScreenWorldPosition( GameUI.GetCursorPosition() );
	// 		order.Queue = false;
	// 		order.ShowEffects = false;
	// 		Game.PrepareUnitOrders( order );
	// 		return CONSUME_EVENT;		
	// 	}
	// 	else if ( arg > 0 )
	// 	{
	// 		var order = {};
	// 		order.OrderType = dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE;
	// 		order.Position = GameUI.GetScreenWorldPosition( GameUI.GetCursorPosition() );
	// 		order.Queue = false;
	// 		order.ShowEffects = false;
	// 		Game.PrepareUnitOrders( order );
	// 		return CONSUME_EVENT;		
	// 	}
	// }
	// return CONTINUE_PROCESSING_EVENT;
} );