const description = document.querySelector(".tooltip");

		document.querySelectorAll('path').forEach((el) => {

			el.addEventListener('mouseover', (event) => {
				event.target.className = ("enabled");
				description.classList.add("active");
				description.innerHTML = event.target.id;
			})

			el.addEventListener("mouseout", () => {
				description.classList.remove("active");
			})

			el.addEventListener("click", () => {

				//pega a sigla do estado selecionado
				const estadoSelecionado = event.target.id;
				// atribui ao link a ser direcionado
				const link = `https://www.google.com.br/search?q=${estadoSelecionado}`;

				// alert(estadoSelecionado);			
				// Abre o link em uma nova aba
				window.open(link, "_blank");
			})
		});



		document.onmousemove = function (e) {
			description.style.left = e.pageX + "px";
			description.style.top = (e.pageY - 70) + "px";
		}