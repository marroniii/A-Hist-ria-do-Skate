// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar os dados do JSON e construir a linha do tempo
    async function carregarLinhaDoTempo() {
        try {
            const resposta = await fetch("data.json");
            if (!resposta.ok) {
                throw new Error(`Erro na rede: ${resposta.statusText}`);
            }
            const dados = await resposta.json();
            renderizarLinhaDoTempo(dados);
        } catch (error) {
            // Exibe um erro no console e na página caso o JSON não seja carregado
            console.error('Erro ao carregar a linha do tempo:', error);
            const timelineContainer = document.getElementById('timeline-container');
            timelineContainer.innerHTML = `<p style="text-align: center; color: red;">Não foi possível carregar os dados da linha do tempo.</p>`;
        }
    }

    // Função para renderizar os itens na linha do tempo
    function renderizarLinhaDoTempo(dados) {
        const timelineContainer = document.getElementById('timeline-container');
        timelineContainer.innerHTML = ""; // Limpa o container

        // Garante que os dados estão ordenados por ano
        const dadosOrdenados = dados.sort((a, b) => a.ano - b.ano);

        // Itera sobre cada evento e cria o HTML correspondente
        dadosOrdenados.forEach((item, index) => {
            // Alterna entre 'left' e 'right' para o posicionamento
            const side = index % 2 === 0 ? 'left' : 'right';

            // Cria o elemento div para o item da linha do tempo
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${side}`;

            // Cria o conteúdo interno do item
            // Adiciona a tag <img> se a propriedade 'imagem' existir no item
            const imagemHtml = item.imagem ? `<img src="${item.imagem}" alt="${item.nome}" class="timeline-image" loading="lazy">` : '';

            timelineItem.innerHTML = `
                <div class="content">
                    ${imagemHtml}
                    <h2>${item.ano}</h2>
                    <h3>${item.nome}</h3>
                    <p>${item.descricao}</p>
                    <a href="${item.link}" target="_blank" rel="noopener noreferrer">Saiba Mais</a>
                </div>
            `;

            // Adiciona o item criado ao container da linha do tempo
            timelineContainer.appendChild(timelineItem);
        });
    }

    // Chama a função para carregar os dados assim que o script for executado
    carregarLinhaDoTempo();
});
