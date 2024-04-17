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

// secretarias de saúde capitais 
const secretariasSaude = [
	{ sigla: "AC", estado: "Acre", site: "https://info.dengue.mat.br/alerta/AC/dengue"},
	{ sigla: "AL", estado: "Alagoas", site: "https://info.dengue.mat.br/alerta/AL/dengue"},
	{ sigla: "AP", estado: "Amapá", site: "https://info.dengue.mat.br/alerta/AP/dengue"},
	{ sigla: "AM", estado: "Amazonas", site: "https://info.dengue.mat.br/alerta/AM/dengue"},
	{ sigla: "BA", estado: "Bahia", site: "https://info.dengue.mat.br/alerta/BA/dengue"},
	{ sigla: "CE", estado: "Ceará", site: "https://info.dengue.mat.br/alerta/CE/dengue"},
	{ sigla: "DF", estado: "Distrito Federal", site: "https://info.dengue.mat.br/alerta/DF/dengue"},
	{ sigla: "ES", estado: "Espírito Santo", site: "https://info.dengue.mat.br/alerta/ES/dengue"},
	{ sigla: "GO", estado: "Goiás", site: "https://info.dengue.mat.br/alerta/GO/dengue"},
	{ sigla: "MA", estado: "Maranhão", site: "https://info.dengue.mat.br/alerta/MA/dengue"},
	{ sigla: "MT", estado: "Mato Grosso", site: "https://info.dengue.mat.br/alerta/MT/dengue"},
	{ sigla: "MS", estado: "Mato Grosso do Sul", site: "https://info.dengue.mat.br/alerta/MS/dengue"},
	{ sigla: "MG", estado: "Minas Gerais", site: "https://info.dengue.mat.br/alerta/MG/dengue"},
	{ sigla: "PA", estado: "Pará", site: "https://info.dengue.mat.br/alerta/PA/dengue"},
	{ sigla: "PB", estado: "Paraíba", site: "https://info.dengue.mat.br/alerta/PB/dengue"},
	{ sigla: "PR", estado: "Paraná", site: "https://info.dengue.mat.br/alerta/PR/dengue"},
	{ sigla: "PE", estado: "Pernambuco", site: "https://info.dengue.mat.br/alerta/PE/dengue"},
	{ sigla: "PI", estado: "Piauí", site: "https://info.dengue.mat.br/alerta/PI/dengue"},
	{ sigla: "RJ", estado: "Rio de Janeiro", site: "https://info.dengue.mat.br/alerta/RJ/dengue"},
	{ sigla: "RN", estado: "Rio Grande do Norte", site: "https://info.dengue.mat.br/alerta/RN/dengue"},
	{ sigla: "RS", estado: "Rio Grande do Sul", site: "https://info.dengue.mat.br/alerta/RS/dengue"},
	{ sigla: "RO", estado: "Rondônia", site: "https://info.dengue.mat.br/alerta/RO/dengue"},
	{ sigla: "RR", estado: "Roraima", site: "https://info.dengue.mat.br/alerta/RR/dengue"},
	{ sigla: "SC", estado: "Santa Catarina", site: "https://info.dengue.mat.br/alerta/SC/dengue"},
	{ sigla: "SP", estado: "São Paulo", site: "https://info.dengue.mat.br/alerta/SP/dengue"},
	{ sigla: "SE", estado: "Sergipe", site: "https://info.dengue.mat.br/alerta/SE/dengue"},
	{ sigla: "TO", estado: "Tocantins", site: "https://info.dengue.mat.br/alerta/TO/dengue"},
]