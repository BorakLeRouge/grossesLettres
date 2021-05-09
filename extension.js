const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */

function clog(...tb) {
    console.log(tb[0]) ;
    if (tb.length > 1) {
        console.log(tb) ;
}   }

async function grosseslettres() {
	// ==================================================
	//  L      EEEEE  TTTTT  TTTTT  RRRR   EEEEE   SSS
	//  L      E        T      T    R   R  E      S
	//  L      EEE      T      T    R   R  EEE     SSS
	//  L      E        T      T    RRRR   E          S
	//  L      E        T      T    R  R   E          S
	//  LLLLL  EEEEE    T      T    R   R  EEEEE  SSSS
	// ==================================================
	// * * * Lettres
	let listeLettres = {
		'A': [ '   A   '
		     , '  A A  '
		     , ' A   A '
		     , ' AAAAA '
		     , ' A   A '
		     , ' A   A '

		] ,
		'B': [ ' BBB   '
		     , ' B  B  '
		     , ' BBBB  '
		     , ' B   B '
		     , ' B   B '
		     , ' BBBB  '

		] ,
		'C': [ '  CCC  '
		     , ' C   C '
		     , ' C     '
		     , ' C     '
		     , ' C   C '
		     , '  CCC  '

		] ,
		'D': [ ' DDD   '
		     , ' D  D  '
		     , ' D   D '
		     , ' D   D '
		     , ' D  D  '
		     , ' DDD   '

		] ,
		'E': [ ' EEEEE '
		     , ' E     '
		     , ' EEE   '
		     , ' E     '
		     , ' E     '
		     , ' EEEEE '

		] ,
		'F': [ ' FFFFF '
		     , ' F     '
		     , ' FFF   '
		     , ' F     '
		     , ' F     '
		     , ' F     '

		] ,
		'G': [ '  GGG  '
		     , ' G   G '
		     , ' G     '
		     , ' G  GG '
		     , ' G   G '
		     , '  GGGG '

		] ,
		'H': [ ' H   H '
		     , ' H   H '
		     , ' HHHHH '
		     , ' H   H '
		     , ' H   H '
		     , ' H   H '

		] ,
		'I': [ ' III '
		     , '  I  '
		     , '  I  '
		     , '  I  '
		     , '  I  '
		     , ' III '
		] ,
		'J': [ '   JJJ '
		     , '    J  '
		     , '    J  '
		     , '    J  '
		     , ' J  J  '
		     , '  JJ   '
		] ,
		'K': [ ' K  K  '
		     , ' K K   '
		     , ' KK    '
		     , ' K K   '
		     , ' K  K  '
		     , ' K   K '
		] ,
		'L': [ ' L     '
		     , ' L     '
		     , ' L     '
		     , ' L     '
		     , ' L     '
		     , ' LLLLL '

		] ,
		'M': [ ' M   M '
		     , ' MM MM '
		     , ' M M M '
		     , ' M   M '
		     , ' M   M '
		     , ' M   M '
		] ,
		'N': [ ' N   N '
		     , ' NN  N '
		     , ' N N N '
		     , ' N  NN '
		     , ' N   N '
		     , ' N   N '
		] ,
		'O': [ '  OOO  '
		     , ' O   O '
		     , ' O   O '
		     , ' O   O '
		     , ' O   O '
		     , '  OOO  '
		] ,
		'P': [ ' PPPP  '
		     , ' P   P '
		     , ' P   P '
		     , ' PPPP  '
		     , ' P     '
		     , ' P     '
		] ,
		'Q': [ '  QQQ  '
		     , ' Q   Q '
		     , ' Q   Q '
		     , ' Q Q Q '
		     , ' Q  Q  '
		     , '  QQ Q '
		] ,
		'R': [ ' RRRR  '
		     , ' R   R '
		     , ' R   R '
		     , ' RRRR  '
		     , ' R  R  '
		     , ' R   R '
		] ,
		'S': [ '  SSS  '
		     , ' S     '
		     , '  SSS  '
		     , '     S '
		     , '     S '
		     , ' SSSS  '

		] ,
		'T': [ ' TTTTT '
		     , '   T   '
		     , '   T   '
		     , '   T   '
		     , '   T   '
		     , '   T   '

		] ,
		'U': [ ' U   U '
		     , ' U   U '
		     , ' U   U '
		     , ' U   U '
		     , ' U   U '
		     , '  UUU  '
		] ,
		'V': [ ' V   V '
		     , ' V   V '
		     , ' V   V '
		     , '  V V  '
		     , '  V V  '
		     , '   V   '

		] ,
		'W': [ ' W   W '
		     , ' W   W '
		     , ' W   W '
		     , ' W W W '
		     , ' W W W '
		     , '  W W  '

		] ,
		'X': [ ' X   X '
		     , '  X X  '
		     , '   X   '
		     , '  X X  '
		     , ' X   X '
		     , ' X   X '
		] ,
		'Y': [ ' Y   Y '
	         , ' Y   Y '
		     , '  Y Y  '
		     , '   Y   '
		     , '   Y   '
		     , '   Y   '
		] ,
		'Z': [ ' ZZZZZ '
		     , '    Z  '
		     , '   Z   '
		     , '  Z    '
		     , ' Z     '
		     , ' ZZZZZ '
		] ,
		'0': [ '  00  '
		     , ' 0  0 '
		     , ' 0  0 '
		     , ' 0  0 '
		     , ' 0  0 '
		     , '  00  '
		],
		'1': [ '  1  '
		     , ' 11  '
		     , '  1  '
		     , '  1  '
		     , '  1  '
		     , ' 111 '
		],
		'2': [ '  222  '
		     , ' 2   2 '
		     , '    2  '
		     , '   2   '
		     , '  2    '
		     , ' 22222 '
		],
		'3': [ ' 33333 '
		     , '    3  '
		     , '   33  '
		     , '     3 '
		     , ' 3   3 '
		     , '  333  '
		],
		'4': [ '    4  '
		     , '   44  '
		     , '  4 4  '
		     , ' 4  4  '
		     , ' 44444 '
		     , '    4  '
		],
		'5': [ ' 55555 '
		     , ' 5     '
		     , ' 5555  '
		     , '     5 '
		     , '     5 '
		     , ' 5555  '
		],
		'6': [ '  666  '
		     , ' 6     '
		     , ' 6666  '
		     , ' 6   6 '
		     , ' 6   6 '
		     , '  666  '
		],
		'7': [ ' 77777 '
		     , '    7  '
		     , '   7   '
		     , '  7    '
		     , '  7    '
		     , '  7    '
		],
		'8': [ '  888  '
		     , ' 8   8 '
		     , '  888  '
		     , ' 8   8 '
		     , ' 8   8 '
		     , '  888  '
		],
		'9': [ '  999  '
		     , ' 9   9 '
		     , ' 9   9 '
		     , '  9999 '
		     , '     9 '
		     , '  999  '
		],
		' ': [ '     '
		     , '     '
		     , '     '
		     , '     '
		     , '     '
		     , '     '
		],
		'"': [ ' " " '
		     , " ' ' "
		     , '     '
		     , '     '
		     , '     '
		     , '     '
		],
		"'": [ '  , '
		     , ' ,  '
		     , '    '
		     , '    '
		     , '    '
		     , '    '
		],
		'!': [ ' !!! '
		     , ' !!! '
		     , ' !!! '
		     , '  !  '
		     , '    '
		     , '  O  '
		],
		'-': [ '     '
		     , '     '
		     , '     '
		     , ' --- '
		     , '     '
		     , '     '
		],
		'_': [ '     '
		     , '     '
		     , '     '
		     , '     '
		     , '     '
		     , '_____'
		],
		'$': [ '  $$$  '
		     , ' $ $   '
		     , '  $$$  '
		     , '   $ $ '
		     , '   $ $ '
		     , '  $$$  '
		],
		'%': [ ' OO  % '
		     , ' OO %  '
		     , '   %   '
		     , '  %    '
		     , ' %  OO ' 
		     , ' %  OO ' 
		],
		'*': [ '       '
			 , '       '
		     , '   *   '
		     , '  ***  '
		     , '   *   '
		     , '       ' 
		],
		',': [ '     '
		     , '     '
		     , '     '
		     , '     '
		     , '  ,, '
		     , ' ,,  ' 
		],
		'.': [ '     '
		     , '     '
		     , '     '
		     , '     '
		     , ' ..  '
		     , ' ..  ' 
		],
		':': [ '     '
	      	 , '     '
		     , ' ::  '
		     , '     '
		     , ' ::  '
		     , '     ' 
		],
		';': [ '     '
		     , '     '
		     , ' ::  '
		     , '     '
		     , ' ;;  '
		     , ' ;   ' 
		],
		'?': [ '  ???  '
		     , ' ?   ? '
		     , '    ?  '
		     , '    ?  '
		     , '       '
		     , '    o  ' 
		],
		'/': [ '       '
		     , '     / '
		     , '    /  '
		     , '   /   '
		     , '  /    '
		     , ' /     ' 
		],
		'=': [ '       '
	         , '       '
		     , ' ===== '
		     , '       '
		     , ' ===== '
		     , '       ' 
		],
		'+': [ '     '
		     , '     '
		     , '  +  '
		     , ' +++ '
		     , '  +  '
		     , '     ' 
		],
		'>': [ '       '
		     , ' >     '
		     , '  >>   '
		     , '    >> '
		     , '  >>   '
		     , ' >     ' 
		],
		'<': [ '       '
		     , '    << '
		     , '  <<   '
		     , ' <     '
		     , '  <<   '
		     , '    << ' 
		],
		'&': [ '  &    '
		     , ' & &   '
		     , '  &    '
		     , ' & & & '
		     , ' &  &  '
		     , '  && & ' 
		]
	}


	// ==================================================
	//    A     CCC    CCC   EEEEE  N   N  TTTTT   SSS
	//   A A   C   C  C   C  E      NN  N    T    S
	//  A   A  C      C      EEE    N N N    T     SSS
	//  AAAAA  C      C      E      N  NN    T        S
	//  A   A  C   C  C   C  E      N   N    T        S
	//  A   A   CCC    CCC   EEEEE  N   N    T    SSSS
	// ==================================================
	function retireAccent(s){
		let r = s ;
		r = r.replace(new RegExp(/[àáâãäå]/g),"a");
		r = r.replace(new RegExp(/æ/g),"ae");
		r = r.replace(new RegExp(/ç/g),"c");
		r = r.replace(new RegExp(/[èéêë]/g),"e");
		r = r.replace(new RegExp(/[ìíîï]/g),"i");
		r = r.replace(new RegExp(/ñ/g),"n");                
		r = r.replace(new RegExp(/[òóôõö]/g),"o");
		r = r.replace(new RegExp(/œ/g),"oe");
		r = r.replace(new RegExp(/[ùúûü]/g),"u");
		r = r.replace(new RegExp(/[ýÿ]/g),"y");
		return r;
	};


	// =====================================================================
	//  TTTTT  RRRR     A    N   N   SSS   FFFFF   OOO   RRRR   M   M
	//    T    R   R   A A   NN  N  S      F      O   O  R   R  MM MM
	//    T    R   R  A   A  N N N   SSS   FFF    O   O  R   R  M M M
	//    T    RRRR   AAAAA  N  NN      S  F      O   O  RRRR   M   M
	//    T    R  R   A   A  N   N      S  F      O   O  R  R   M   M  ..
	//    T    R   R  A   A  N   N  SSSS   F       OOO   R   R  M   M  ..
	// =====================================================================
	// * * * Fonction de transformation
	async function transform(leTexte, leType) {
		let resultat = new Array('', '', '', '', '', '') ;
		let txt = retireAccent(leTexte.trim()).toUpperCase() ;
		if (leType == 'COBOL') {
			txt = txt.substr(0,9)
		}
		if(txt == '') { return txt ;}

		// * * * On ajoute les lettres
		for (let i in txt) {
			if (listeLettres[txt[i]] != undefined) {
				for (let j in resultat) {
					resultat[j] += listeLettres[txt[i]][j] ;
				} 
			} else {
				for (let j in resultat) {
					resultat[j] += listeLettres[' '][j] ;
				} 				
			}
		}

		// * * * Message final
		if(leType == 'COBOL') {
			// * * * Commentaires en langage COBOL
			let res = '      *===============================================================' + "\r\n"
		         	+ '      * ' + resultat[0].trimEnd() + "\r\n" 
		         	+ '      * ' + resultat[1].trimEnd() + "\r\n" 
		         	+ '      * ' + resultat[2].trimEnd() + "\r\n" 
		         	+ '      * ' + resultat[3].trimEnd() + "\r\n" 
		         	+ '      * ' + resultat[4].trimEnd() + "\r\n" 
		         	+ '      * ' + resultat[5].trimEnd() + "\r\n" 
		         	+ '      *===============================================================' + "\r\n"
					+ '      * * * ' + leTexte.trim() + "\r\n"  ;
			return res ;
		} else {
			// * * * Calcul espace devant commentaire
			let patt = /(\s*).*/ ;
			let deb  = leTexte.match(patt) ; 
			if (deb == undefined || deb == null) { deb = '' ; }
			else { deb = deb[1];
			}
			// * * * Préparation commentaire GL
			let res = deb + '// ' +('=').repeat(resultat[0].length + 1 ) + "\r\n" 
			        + deb + '// ' + resultat[0].trimEnd() + "\r\n" 
			        + deb + '// ' + resultat[1].trimEnd() + "\r\n" 
			        + deb + '// ' + resultat[2].trimEnd() + "\r\n" 
			        + deb + '// ' + resultat[3].trimEnd() + "\r\n" 
			        + deb + '// ' + resultat[4].trimEnd() + "\r\n" 
			        + deb + '// ' + resultat[5].trimEnd() + "\r\n" 
					+ deb + '// ' +('=').repeat(resultat[0].length + 1) + "\r\n" 
					+ deb + '// * * * ' + leTexte.trim() + "\r\n"  ;
			return res ;
		}
	}


	// =====================================================================
	//  TTTTT  RRRR     A    III  TTTTT  EEEEE  M   M  EEEEE  N   N  TTTTT
	//    T    R   R   A A    I     T    E      MM MM  E      NN  N    T
	//    T    R   R  A   A   I     T    EEE    M M M  EEE    N N N    T
	//    T    RRRR   AAAAA   I     T    E      M   M  E      N  NN    T
	//    T    R  R   A   A   I     T    E      M   M  E      N   N    T
	//    T    R   R  A   A  III    T    EEEEE  M   M  EEEEE  N   N    T
	// =====================================================================
	// * * * Récupération du texte
	let ligne   = vscode.window.activeTextEditor.selection.active.line ; 
	let posit   = new vscode.Range(new vscode.Position(ligne, 0), new vscode.Position(ligne + 1, 0)) ; 
	let leTexte = vscode.window.activeTextEditor.document.getText(posit) ;  	
	let leType  = vscode.window.activeTextEditor.document.languageId.toUpperCase() ;

    // * * * Transformation du texte
	let newTexte = await transform(leTexte, leType) ;

	// * * * Mise en place du nouveau texte
	if (newTexte != '') {
		let editor = vscode.window.activeTextEditor;
		editor.edit(builder => {
			builder.replace(posit, newTexte);
		});
	}
} 



  
// =========================================
//  RRRR     A     CCC   III  N   N  EEEEE
//  R   R   A A   C   C   I   NN  N  E
//  R   R  A   A  C       I   N N N  EEE
//  RRRR   AAAAA  C       I   N  NN  E
//  R  R   A   A  C   C   I   N   N  E
//  R   R  A   A   CCC   III  N   N  EEEEE
// =========================================
// * * * racine
function activate(context) {
	console.log('Congratulations, your extension "grosseslettres" is now active!');

	let disposable = vscode.commands.registerCommand('grosseslettres', async function () {
		grosseslettres() ;
	});

	context.subscriptions.push(disposable);
}
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
