module.exports = function AutoNostrum(dispatch) {
 
	dispatch.hook('C_REVIVE_NOW', 1, (event) => { // when accepting a rez
		setTimeout(function () {
			dispatch.toServer('C_PCBANGINVENTORY_USE_SLOT', 1,{ slot: 6 }) // use Nostrum (Elite bar), slot 4: Elite Gift Box, slot 5: Elite Consumable Box
		}, 500)
	})
}