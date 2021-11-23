# Catálago de Fones Bluetooth
Inicialmente eu criei os arquivos base do React Native e organizei as bibliotecas necessárias para o desenvolvimento do projeto. 

Após a instalação das bibliotecas eu comecei o projeto organizando os arquivos utilizados para a navegação, com a página "Home", a página "Details" que será utilizada para detalhar o produto que foi escolhido e a página bluetooth que traz uma explicação mais detalhada da teconologia.

## Página Home
A ideia para a criação para a página "Home" era adicionar um resumo da explicação sobre a tecnologia bluetooth e as opções de fones com essa tecnologia. Para a área da explicação sobre o bluetooth a ideia inicial foi de colocar a imagem do logo, abaixo o resumo e um botão que iria direcionar para a página bluetooth. Já na área do catálago dos fones a ideia era usar um flatlist para fazer um grid e facilitar o trabalho, mas durante a execução encontrei alguns problemas em relação aos itens clicáveis e desisti por julgar que provavelmente não conseguiria entregar o projeto completo se continuasse insistindo nessa ideia. 


Por esse motivo que adaptei e utilizei áreas de view, mesmo sabendo que não seria a melhor opção para um projeto real. 

Foi criada uma função "Product" que seria utilizada para organizar as informações dos produtos que seriam apresentadas na página "Home".

## Página Bluetooth
Na página "Bluetooth" foi colocado os textos explicativos sobre a tecnologia.

## Página dos Produtos
Na pasta "Details" foram colocados as pasta respectivas para cada produto, contendo o arquivo index.js e o styles.js. 

Basicamente todos os arquivos dos produtos possuem a mesma estrutura, mudando somente o conteúdo. No inicia a foto referente ao produto, abaixo vem seu nome e o preço atual, seguido das cores disponíveis. Foi feita duas áreas, uma para a descrição do produto e a outra para a ficha tecnica.


