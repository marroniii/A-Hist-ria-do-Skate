🛹 

Uma aplicação web interativa e responsiva que apresenta os momentos mais marcantes da história do skate,
desde suas origens como "Surf de Calçada" até sua consolidação como esporte olímpico. O projeto utiliza dados dinâmicos para gerar uma linha do tempo visualmente atrativa.
📸 Demonstração
(Sugestão: Adicione aqui um print da tela ou um GIF do projeto rodando)
![alt text](<img width="842" height="596" alt="a história do skate" src="https://github.com/user-attachments/assets/fcdea818-b195-485e-920d-fb51e39d9c6c" />)
🚀 Tecnologias Utilizadas
O projeto foi desenvolvido utilizando tecnologias web nativas (Vanilla), focando em performance e semântica:
HTML5: Estruturação semântica do conteúdo.
CSS3:
Flexbox para layout.
Variáveis CSS (:raiz) para gerenciamento de tema (Dark Mode).
Consultas de mídia para design responsivo
Animações (@keyframes) para entrada suave dos elementos.
JavaScript (ES6+):
API Fetch: Para consumo assíncrono do arquivo de dados (data.json).
Manipulação do DOM: Renderi
JSON: Armazenamento estruturado dos dados históricos.
✨ Funcionalidades
Carregamento Dinâmico: Evento Os
Design Responsivo: O layout da linha do tempo se adapta automaticamente a desktops, tablets e smartphones.
Tema Escuro:
Interatividade: Efeitos de pairaro

📂 Estrutura do Projeto


📁 /
├── 📄 index.html      
├── 🎨 style.css       
├── 📜 script.js       
├── 📦 data.json       
└── 📁 imagens/        
🔧 Como Executar o Projeto
Como o projeto utiliza a API Fetch para carregar o arquivo data.json, navegadores modernos podem bloquear a requisição por
segurança (CORS) se você abrir o arquivo index.html diretamente pelo sistema de arquivos (protocolo arquivo://).
Para rodar corretamente, você precisa de um servidor local simples.
Opção 1: Extensão Live Server (VS Code) - Recomendado
Abra a pasta do projeto no VS Code.
Instale a extensão Servidor ao vivo.
Clique com o botão direito no index.html e selecione "Abrir com servidor ao vivo".
Sobre
Se você tem Python instalado, abra o terminal na pasta do projeto e rode:
code
Bash
# Python 3.x
python -m http.server
Acesse http://localhost:8000 no seu navegador.
🤝 Como Contribuir
Faça um garfo do projeto.
Crie uma nova branch com as suas alterações: git checkout -b my-feature
Salve as alterações e crie uma mensagem de commit contando o que você fez: git commit -m "feature: Meu novo recurso"
Envie as suas alterações: git push origin my-feature
Abra um Solicitação de Pull Request.
Feito com 🛹 e 💻 por [Marroniii]
