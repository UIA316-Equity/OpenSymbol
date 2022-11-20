
window.onload = function highlightLineOnHover() {

	var array = [];

    var elements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, pre, span, article, section, blockquote, ol, ul, li, strong, b, em')

	// var words = $("p").text().split(" ");
	// $("p").empty();
	// $.each(words, function(i, v) {
    // $("p").append($("<span>").text(v));
	// });	

	// Splits text into lines, words, characters (default)
	const splitType = new SplitType(elements, { types: 'words', wordClass: 'highlightLineOnHover' } );
	//console.log(splitType.words);

	// $(".highlightLineOnHover").mouseover(function(){
	// 	$(this).select();
	//    });

	   $(document).mouseover(function(e) {
		$(e.target).contents().each(function(index, elem) {
			if( elem.nodeType === 3 && $.trim(elem.nodeValue).length ) {
				let t = $.trim(elem.nodeValue)
				let k = t.toLowerCase();

				let urlv = "https://firebasestorage.googleapis.com/v0/b/uia-316-entity.appspot.com/o/symbols%2" + k + ".webp?alt=media"

				
				console.log(k);

				
				document.getElementsByClassName("highlightLineOnHover")[0].innerHTML = "<img src= https://firebasestorage.googleapis.com/v0/b/uia-316-entity.appspot.com/o/symbols%2F" + k + ".webp?alt=media>";
				return false;
			}
		});

		// document.addEventListener('mouseover', (event) => {
			
		// });

});
}
