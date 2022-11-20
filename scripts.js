const SYMBOL_CONTAINER_ID = "symbolContainerId";

function getSymbolUrlForWord(word) {
	/**
	 * Generate symbol url from the word
	 */
	let symbolUrl = `https://firebasestorage.googleapis.com/v0/b/uia-316-entity.appspot.com/o/symbols%2F${word}.webp?alt=media`;
	return symbolUrl;
}

function showSymbolOnHover(word, top, left) {
	/**
	 * Generate symbol container and respective DOM elements
	 * and render them.
	 */
	const symbolUrl = getSymbolUrlForWord(word);

	// Image tag to show image
	let imageTag = document.createElement('img');
	imageTag.style.minWidth = '70px';
	imageTag.src = symbolUrl;
	imageTag.onerror = function () {
		// Don't show image if not available
		this.style.display = 'none';
	}

	// Label for currently hover word
	let imageWord = document.createElement('p');
	imageWord.innerText = word;

	// Div to show symbol
	let symbolContainer = document.createElement("div");
	symbolContainer.className = "symbolContainer";
	symbolContainer.id = SYMBOL_CONTAINER_ID;
	symbolContainer.style.top = `${top}px`;
	symbolContainer.style.left = `${left}px`;
	symbolContainer.appendChild(imageTag);
	symbolContainer.appendChild(imageWord);
	$("body").after(symbolContainer);
}

window.onload = function highlightLineOnHover() {
	var elements = document.body.querySelectorAll(
		"h1, h2, h3, h4, h5, h6, p, pre, span, article, section, blockquote, ol, ul, li, strong, b, em"
	);

	// Splits text into lines, words, characters (default)
	const splitType = new SplitType(elements, {
		types: "words",
		wordClass: "highlightLineOnHover",
	});

	// Show symbol on hover
	$(document).mouseover(function (e) {
		const target = e.target;
		$(target)
			.contents()
			.each(function (index, elem) {
				if (elem.nodeType === 3 && $.trim(elem.nodeValue).length) {
					let word = $.trim(elem.nodeValue).toLowerCase();
					const left = target.offsetLeft + target.offsetWidth;
					const top = target.offsetTop + target.offsetHeight;
					showSymbolOnHover(word, top, left);
					return false;
				}
			});
	});

	// Hide symbol once mouse moved to another symbol
	$(document).mouseout(function (e) {
		$(`#${SYMBOL_CONTAINER_ID}`).remove()
	});
};
