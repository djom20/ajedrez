$(function(){
	$ajedrez.createBoard('#board');
	$ajedrez.createControls('.row2');
	$ajedrez.chessPieces('#board');
	$ajedrez.startGame();
});

window.$ajedrez = {
	createObjs: function(){
		window.$players = null;
		window.$turn 	= null;
		window.$moving 	= null;
		window.$temp 	= [];
		window.$board 	= [];
	},
	createBoard: function(id){
		this.createObjs();

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

		$(id).append(board2);
		$(id).append(board1);
		$(id).append(board3);
	},
	createControls: function(id){
		this.log('Creating Controls');
		var text = ['Play', 'Pause', 'Stop'];

		for (var i = 0; i < 3; i++) {
			$('<button/>', { class: 'btn btn-default' })
				.text(text[i])
				.click(function(){
					alert(text[i] + ' Game');
				}).appendTo($(id));
		}
	},
	chessPieces: function(id){
		this.log('Creating Chess Pieces');
		var obj = $('<img/>')
			.attr("id","reina_negra")
			.attr("src","img/reina_negra.png")
			.attr("draggable","true")
			.attr("ondragstart","drag(this, event)");

		this.log('Loading Chess Pieces on Board');
		$(id).append(obj);
	},
	clearBoard: function(){
		$temp 	= [];
		$board 	= [];
		var i 	= 8;
		var n 	= 0;

		while(i > n){
			$board[i] = [0,0,0,0,0,0,0,0];
			i--;
		}
	},
	createPlayers: function(){
		this.log('Create Players');

		$players 	= ['Player1', 'Player2'];
		$turn 		= 'Player1';
		$moving 	= [0, 0];
	},
	movePlayer: function(player, to, end){
		$turn 	= player;
		$moving = [to, end];
	},
	startGame: function(){
		this.log('Starting Game');

		this.clearBoard();
		this.createPlayers();

		this.log('Ready to the Game');
	},
	log: function(value){
		console.log(value);
	}
};

function drag(obj, evento) {
	evento.dataTransfer.setData('Ficha', obj.id);
}

function drop(contenedor, evento) {
	var id = evento.dataTransfer.getData('Ficha');
	contenedor.appendChild(document.getElementById(id));
	evento.preventDefault();
}