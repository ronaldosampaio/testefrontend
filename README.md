# testefrontend
Teste para vaga de desenvolvedor Front-end 

DTS - Factory 

Equipe 
Equipe de front-end será composta de desenvolvedores de todos os níveis para atender as demandas dos diversos produtos da empresa. 

Especificações do teste: 
Este teste engloba o fluxo de trabalho básico da equipe atual, não foge das atividades cotidianas de um desenvolvedor front-end: construção do layout, aplicação de responsividade e implementação da dinâmica das telas.  
O teste é composto por diversas atividades que definem a habilidade, nível profissional e experiência do desenvolvedor com relação às linguagens e ferramentas utilizadas pela equipe atual no desenvolvimento das aplicações.  O teste abaixo terá como objetivo avaliar o conhecimento técnico, skills e os pontos fortes do desenvolvedor nos seguintes critérios:  Domínio sobre o Angular (v6.+) e suas particularidades.  Conhecimentos sobre JavaScript, TypeScript e ES6.  Conhecimentos sobre CSS3, SASS e Angula Material.  Qualidade e legibilidade do código.  Conhecimentos básicos em GIT.  Habilidade de abstração;  Entendimento do conceito de componentização utilizando componentes simples e compostos.  O layout da aplicação deve ser feito em angular material, baseando-se em um wireframe simples.  Quanto mais telas e funcionalidades forem implementadas utilizando técnicas, abordagens e soluções diversificadas maior a possibilidade de subir o nível de classificação da vaga oferecida ao desenvolvedor.  O layout tem foco em desktop, porém deve ser adaptável minimamente para dispositiveis móveis.  

Teste : 
Desenvolva uma aplicação em Angular 6+ com angular material contendo as seguintes especificações:  

Topo e menu de navegação: 
Implementar um menu de navegação que possua ao menos 2 itens. Estes itens devem ser inicializados em algum local da aplicação por um array de objetos contendo o título e rota do item para popular o menu.  Implementar um sistema de roteamento para navegar pelas páginas dos itens do menu;  

Dashboard:  
Implementar o cabeçalho (menu), com dados que devem vir de um serviço populado por um mock dentro da aplicação;  Implementar um layout com uma coluna lateral listando as mensagens e outra coluna a direita exibindo a mensagem selecionada.  Inserir um botão para excluir a mensagem selecionada.  
Wireframe:Wireframe dashboard 

Cadastrar mensagens:  
Este formulário deverá fazer um post para um serviço fictício e armazenar as mensagens cadastradas.  Implementar formulário de cadastro de mensagens contendo os seguintes campos com suas especificações: 

Nome :  
Um campo do tipo texto, que deverá receber o nome do usuário;  Campo obrigatório.  Campo deve aceitar apenas letras.  

Email :  
Um campo do tipo texto que deverá receber o email do usuário;  Deve conter e-mail válido;  Campo obrigatório.  

Assunto :  
Um campo do tipo select que deverá ser populado através de um serviço que retorna os dados de um mock;  O mock deve ser um JSON que retorne uma lista de strings assuntos para inserir no select. Ex.: [“Orçamento”, Dúvida”, “Elogio”, “Reclamação”];  Campo obrigatório. 

Telefone :  
Um campo do tipo input com máscara de telefone, sendo um campo opcional. Deve aceitar apenas números 

Mensagem :  
Um campo do tipo textarea que receberá uma mensagem de até 500 caracteres;  
Campo obrigatório.  
Exibir abaixo do text area um count de quantos caracteres foram digitados e o limite de caracteres ex. 200/500 .  

Botão Enviar :  
Deve ser habilitado somente quando os campos obrigatórios forem preenchidos e os critérios de validação de campos forem atingidos, após clicar enviar os dados digitados a uma lista dentro de um service, após o cadastro, limpar os campos digitados; 
Wireframe tela de cadastro 

Integração :  
Listar na dashboard as mensagens cadastradas na tela anterior
Utilizar o service para recuperar as mensagens cadastradas e exibir dinamicamente na tela de dashboard  

Comitar todo o código em um respotório aberto (github, bitbucket..), e nos enviar a URL do repositório para avaliação
