var menu = $.GetContextPanel()
var pos = GameUI.GetCursorPosition()

menu.style['margin-left'] = pos[0] + 'px';
menu.style['margin-top'] = pos[1] + 'px';

function GiveItem( itemName ) 
{
	GameEvents.SendCustomGameEventToServer( 'request_item', { 'dispenser': 0, 'name' : itemName } );
}