$(function(){
	$ajedrez.createBoard('#board');
	$ajedrez.createControls('.row2');
	// $ajedrez.chessPieces('#board');
});

window.$ajedrez = {
	createBoard: function(id){
		// this.log('Creating Table');
		var fila 	= null;
		var i		= 8;
		var j		= 8;
		var n 		= 1;
		var vec		= ['a','b','c','d','e','f','g','h'];
		var board1 	= $('<table/>');
		var board2 	= $('<table/>', { class: 'rigth' });
		var board3 	= $('<table/>', { class: 'bottom' });

		this.log('Creating Nums');
		while(n <= i){
			board2.append(
				$('<tr/>').append(
					$('<td/>', { class: 'noColor' }).text(i)
				)
			);
			i--;
		}
		this.log('Finish Nums');

		this.log('Creating Board');
		i = 8;
		while(i >= n){
			fila = $('<tr/>');
			while(j >= n){
				fila.append(
					$('<td/>').html('&nbsp')
				);
				j--;
			}

			board1.append(fila);
			j = 8;
			i--;
		}
		this.log('Finish Board');

		this.log('Creating Letters');
		i 		= 8;
		fila 	= $('<tr/>');
		while(i >= n){
			fila.append(
				$('<td/>', { class: 'noColor' }).text(vec[i-1])
			);
			i--;
		}

		board3.append(fila);
		this.log('Finish Letters');

		$(id).append(board2);
		$(id).append(board1);
		$(id).append(board3);
	},
	createControls: function(id){
		this.log('Creating Controls');
		var div 	= $(id);
		var text 	= ['Play', 'Pause', 'Stop'];

		for (var i = 0; i < 3; i++) {
			$('<button/>', { class: 'btn' })
				.text(text[i])
				.click(function(){
					alert(text[i] + ' Game');
				}).appendTo(div);
		}
	},
	chessPieces: function(id){
		this.log('Load Chess Pieces');
		var obj = $('<img/>').attr("src","img/reina_negra.png");

		// $(id).append(obj);
	},
	startGame: function(){

	},
	log: function(value){
		console.log(value);
	}
};