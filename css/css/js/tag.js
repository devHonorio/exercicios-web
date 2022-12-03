const colors = {
	p: '#388e3c',
	div: '#1565c0',
	span: '#e53935',
	section: '#f67809',
	ul: '#5e35b1',
	ol: '#fbc02d',
	header: '#d81b60',
	nav: '#64dd17',
	main: '#00acc1',
	footer: '#304ffe',
	form: '#9f6581',
	body: '#25b6da',
	padrao: '#616161',
	get(tag) {
		return this[tag] ? this[tag] : this.padrao
	},
}

// Iremos selecionar uma lista de tags pela classe
document.querySelectorAll('.tag').forEach((elemento) => {
	// tag name é uma propiedade da tag que busca o nome
	const tagName = elemento.tagName.toLowerCase()

	elemento.style.borderColor = colors.get(tagName)
	// classList é uma propiedade que mostra as classes da tag
	// com contains retorna verdadeiro ou falso
	if (!elemento.classList.contains('nolabel')) {
		// createElement cria um elemento
		const label = document.createElement('label')
		// dicionario.get() busca o elemento do dicionário
		label.style.backgroundColor = colors.get(tagName)
		label.innerHTML = tagName
		// insertBefore insere novos elementos no inicio do html
		// referenciado sendo a primeiro parametro o elemento
		// a ser adicionado e o segundo parametro a lista e
		// indice 0

		// clildNodes retorna uma lista de filhos de uma tag
		elemento.insertBefore(label, elemento.childNodes[0])
	}
})
