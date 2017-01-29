var menu = $.GetContextPanel()
var pos = GameUI.GetCursorPosition()

var dispenserEntIndex = null;

function GiveItem( itemName ) 
{
	GameEvents.SendCustomGameEventToServer( 'request_item', { 'dispenser': 0, 'name' : itemName } );
}

function UpdatePosition()
{
	var origin = Entities.GetAbsOrigin(dispenserEntIndex)
	var posX = Game.WorldToScreenX(origin[0], origin[1], origin[2]);
	var posY = Game.WorldToScreenY(origin[0], origin[1], origin[2]);
	menu.style['margin-left'] = posX + 'px';
	menu.style['margin-top'] = posY + 'px';

	$.Schedule(1/60, UpdatePosition);
}

function OnDispenserActivate( data )
{
	dispenserEntIndex = data['entity_index'];
	UpdatePosition();
}

(function() 
{
	GameEvents.Subscribe( 'dispenser_activate', OnDispenserActivate);
})();