import { prisma } from "../src/lib/prisma";

async function run() {
  await prisma.book.deleteMany()

  await Promise.all([
    prisma.book.create({
      data: {
        id: '1',
        author: 'J.R.R. Tolkien',
        title: 'O Hobbit',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/51S6-VeaHJL._SY346_.jpg',
        rating: 0,
        synopsis: 'Bilbo Bolseiro era um dos mais respeitáveis hobbits de todo o Condado até que, um dia, o mago Gandalf bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos.Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.Lançado em 1937, O Hobbit é um divisor de águas na literatura de fantasia mundial. Mais de 80 anos após a sua publicação, o livro que antecede os ocorridos em O Senhor dos Anéis continua arrebatando fãs de todas as idades, talvez pelo seu tom brincalhão com uma pitada de magia élfica, ou talvez porque J.R.R. Tolkien tenha escrito o melhor livro infantojuvenil de todos os tempos.'
      }
    }),
    prisma.book.create({
      data: {
        id: '2',
        author: 'J.R.R. Tolkien',
        title: 'O Senhor dos Anéis: A Sociedade do Anel',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/61VLT3aMviL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        rating: 0,
        synopsis: 'Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro.A Sociedade do Anel é a primeira parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis.É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”.Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal.'
      }
    }),
    prisma.book.create({
      data: {
        id: '3',
        author: 'J.R.R. Tolkien',
        title: 'O Senhor dos Anéis: As Duas Torres',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/61lW1iKenkL._SX356_BO1,204,203,200_.jpg',
        rating: 0,
        synopsis: 'A Comitiva do Anel se divide. Frodo e Sam continuam a viagem, descendo sozinhos o Grande Rio Anduin ? mas não tão sozinhos assim, pois uma figura misteriosa segue todos os seus passos...As Duas Torres é a segunda parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis.É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”. Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal.'
      }
    }),
    prisma.book.create({
      data: {
        id: '4',
        author: 'J.R.R. Tolkien',
        title: 'O Senhor dos Anéis: O Retorno do Rei',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/51Bsupv6jZL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        rating: 0,
        synopsis: 'A sombra dos exércitos do Senhor do Escuro cresce cada vez mais. Homens, anões e elfos unem-se para lutar contra a Escuridão. Enquanto isso, Frodo e Sam penetram na terra de Mordor, em sua empreitada heroica para destruir o Anel. O Retorno do Rei é a terceira parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis. É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”. Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal.'
      }
    }),
    prisma.book.create({
      data: {
        id: '5',
        author: 'J.R.R. Tolkien',
        title: 'O Silmarillion',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/51UI-f5k6tL._SX329_BO1,204,203,200_.jpg',
        rating: 0,
        synopsis: 'O Silmarillion, agora reeditado pela Editora WMF Martins Fontes, relata acontecimentos de uma época muito anterior ao final da Terceira Era, quando ocorreram os grandes eventos narrados em O Senhor dos Anéis. São lendas derivadas de um passado remoto, ligadas às Silmarils, três gemas perfeitas criadas por Fëanor, o mais talentoso dos elfos. Tolkien trabalhou nesses textos ao longo de toda a sua vida, tornando-os veículo e registro de suas reflexões mais profundas'
      }
    }),
    prisma.book.create({
      data: {
        id: '6',
        author: 'J.R.R. Tolkien',
        title: 'Os Filhos de Húrin',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/91tO3AZhkcL.jpg',
        rating: 0,
        synopsis: 'O mais poderoso guerreiro que já existiu na Terra-média fora Húrin, cujo orgulho era tão grande quanto sua força física. Ao ser capturado pelas forças de Morgoth, o Primeiro Senhor Sombrio, Húrin resiste às ameaças e torturas que lhe foram impostas no cativeiro e ousa zombar do líder maligno. As consequências de sua postura resoluta recaem, na forma de uma maldição, diretamente em sua família.Morwen, esposa de Húrin, mesmo grávida e sob grande perigo, envia Túrin, seu filho primogênito, para o Reino élfico de Doriath, cujo rei recebe o menino e o protege das muitas ameaças que se espalham com o avanço do poderio de Morgoth. A criança é criada como um príncipe e se torna um destemido guerreiro, que herda o temperamento arredio e severo da mãe, bem como a destreza de batalha do pai. Túrin se torna um justiceiro nas terras ermas e o grande motivo de pavor por parte dos servos de Morgoth.Sabendo que o Túrin era o misterioso guerreiro no ermo, o Senhor Sombrio dispende sua mais maliciosa criatura para trazer desgraça à família de Húrin: Glaurung, o Pai dos Dragões. O lagarto de fogo tece um plano venenoso e intrincado para destruir Túrin, sua mãe Morwen e sua irmã Nienor. Dessa forma, o Destino cobrará um alto preço pela arrogância de pai e filho.Considerada a grande tragédia escrita por J.R.R. Tolkien, Os Filhos de Húrin apresenta uma narrativa ininterrupta e completa. Ao lado de Beren e Lúthien e A Queda de Gondolin, a história é considerada um dos “Três Grandes Contos dos Dias Antigos" que estão dispostos de maneira condensada em O Silmarillion.O livro apresenta textos explicativos de Christopher Tolkien, bem como ilustrações coloridas e em preto e branco do respeitado ilustrador Alan Lee, ganhador do Oscar de Melhor Direção de Arte pela trilogia cinematográfica de O Senhor dos Anéis.'
      }
    }),
    prisma.book.create({
      data: {
        id: '7',
        author: 'J.R.R. Tolkien',
        title: 'Beren e Lúthien',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/81XoKNXIkZL.jpg',
        rating: 0,
        synopsis: 'Citada em O Senhor dos Anéis, a principal história contada em O Silmarillion narra o romance e a jornada épica de Beren, um homem mortal, e Lúthien, uma princesa élfica. O pai dela, um grande senhor élfico, opõe-se à união e, para permitir o casamento com Lúthien, impõe a Beren uma tarefa impossível de ser realizada. É este o foco central da lenda: a tentativa incrivelmente heroica de Beren e Lúthien juntos, roubar uma Silmaril do maior de todos os seres malignos, Morgoth, o Sombrio Inimigo do Mundo.Escrito originalmente entre 1916 e 1917, o conto de Beren e Lúthien sofreu diversas mudanças e ajustes ao longo de toda a vida de J.R.R. Tolkien. Neste livro, seu filho, Christopher Tolkien, reuniu pela primeira vez as diferentes versões da lenda, escritas em diferentes épocas, em prosa ou em versos altamente musicais. Ao lado de “A Queda de Gondolin” e “Os Filhos de Húrin”, “Beren e Lúthien” era considerado por Tolkien um dos Três Grandes Contos dos Dias Antigos. Cada um deles é apresentado, de forma resumida, em O Silmarillion, mas também foi desenvolvido por Christopher, cada qual, em um livro próprio. Dentre eles, talvez “Beren e Lúthien” fosse o mais apreciado, a nível pessoal, por seu próprio autor, que relacionava o romance mágico entre os dois protagonistas à sua própria história de amor com a esposa, Edith Bratt.'
      }
    }),
    prisma.book.create({
      data: {
        id: '8',
        author: 'J.R.R. Tolkien',
        title: 'A queda de Gondolin',
        genre: 'fantasia',
        image: 'https://m.media-amazon.com/images/I/910rZtt4b0L.jpg',
        rating: 0,
        synopsis: 'A Queda de Gondolin narra a trajetória de Tuor, um homem de uma casa outrora nobre, que agora tenta fugir da escravidão para buscar uma mítica e secreta cidade, da qual conhece apenas rumores. A cidade é Gondolin, o último grande refúgio élfico que ainda resiste ao domínio de Morgoth, o Sombrio Inimigo do Mundo. Deixando para atrás a servidão e sua terra natal, Tuor sente em seu íntimo que, de alguma forma, não está vagando no ermo, mas que é guiado pelos caminhos que se abrem à sua frente.'
      }
    }),
    prisma.book.create({
      data: {
        id: '9',
        author: 'Bernard Cornwell',
        title: 'O último reino',
        genre: 'ficcao-historica',
        image: 'https://m.media-amazon.com/images/I/51ds9gXYaEL._SY346_.jpg',
        rating: 0,
        synopsis: 'O ÚLTIMO REINO é o primeiro romance de uma série que contará a história de Alfredo, o Grande, e seus descendentes. Aqui, Cornwell reconstrói a saga do monarca que livrou o território britânico da fúria dos vikings. Pelos olhos do órfão Uthred, que aos 9 anos se tornou escravo dos guerreiros no norte, surge uma história de lealdades divididas, amor relutante e heroísmo desesperado. O ÚLTIMO REINO não se resume a cenas de batalhas bem escritas e reviravoltas cheias de ação e suspense. O livro apresenta os elementos que consagraram Cornwell: história e aventura na dose exata. Uma fábula sobre guerra e heroísmo que encanta do início ao fim.'
      }
    }),
    prisma.book.create({
      data: {
        id: '10',
        author: 'Bernard Cornwell',
        title: 'O cavaleiro da morte',
        genre: 'ficcao-historica',
        image: 'https://m.media-amazon.com/images/I/51QxVdN3mfL.jpg',
        rating: 0,
        synopsis: 'O CAVALEIRO DA MORTE é um belíssimo relato de lealdades divididas, amor relutante e heroísmo desesperado. O livro começa no dia seguinte aos eventos de O último reino, primeiro volume da série. São tempos terríveis para os saxões. Derrotados pelos vikings, Alfredo e seus seguidores sobreviventes procuram refúgio em Æthelingæg, a região a que ficou reduzido o reino de Alfredo. Aí, encobertos pela neblina, viajam em pequenos barcos entre as ilhas na esperança de se reagruparem, e encontrarem mais apoio. Ao reunir o Grande Exército, os vikings têm apenas uma ambição: conquistar Wessex. Quando atacam em uma escuridão impiedosa, Uhtred se vê surpreendentemente do lado de Alfredo. Aliados improváveis: um rei cristão devoto e um pagão que vive da espada. Alfredo é um erudito; Uhtred, um guerreiro cheio de arrogância. No entanto, a desconfortável aliança é forjada e os conduzirá dos pântanos para a colina íngreme, onde o último exército saxão lutará pela existência da Inglaterra.'
      }
    }),
    prisma.book.create({
      data: {
        id: '11',
        author: 'Bernard Cornwell',
        title: 'Os senhores do norte',
        genre: 'ficcao-historica',
        image: 'https://m.media-amazon.com/images/I/51OixavvaZL.jpg',
        rating: 0,
        synopsis: ' Os senhores do norte é o terceiro volume das Crônicas Saxônicas, série de Bernard Cornwell que apresenta a história do lendário Alfredo, o Grande, e de seus descendentes, narrando a criação da Inglaterra que hoje conhecemos. Uma história poderosa feita de traição, romance e luta, numa região de conflitos, levantes e glória em que Uhtred, um nortumbriano criado como viking, homem sem terras, guerreiro sem país, se tornou uma esplêndida figura heróica. '
      }
    }),
    prisma.book.create({
      data: {
        id: '12',
        author: 'Bernard Cornwell',
        title: 'A canção da espada',
        genre: 'ficcao-historica',
        image: 'https://m.media-amazon.com/images/I/51iUyZv2trL.jpg',
        rating: 0,
        synopsis: 'Uhtred é um saxão cuja herança foi usurpada. Está à deriva num mundo de fogo e traições, e precisa fazer uma escolha: lutar pelos vikings, que o criaram, ou por Alfredo, rei dos saxões, que o odeia. Em A canção da espada, quarto volume das Crônicas Saxônicas — série que apresenta a história do lendário Alfredo, o Grande, e de seus descendentes —, Bernard Cornwell tece um belíssimo relato de lealdades divididas, amor relutante e heroísmo desesperado.O ano é 885 e a Inglaterra está em paz, dividida entre o reino dinamarquês ao norte e o reino saxão de Wessex, ao sul. Uhtred, filho exilado de um senhor da Nortúmbria, guerreiro por instinto, viking por natureza, parece ter se acomodado. Tem terras, mulher, dois filhos e uma tarefa dada por Alfredo: sustentar a fronteira no Tâmisa. Mas os problemas aparecem, um morto ressuscitou e novos vikings chegaram para ocupar Londres. O sonho deles é conquistar Wessex, e para isso precisam da ajuda de Uhtred.Alfredo tem outras idéias. Quer que Uhtred expulse os invasores vikings de Londres. É uma época perigosa e Uhtred precisa decidir até que ponto seu juramento o liga ao rei. Outras nuvens de tempestade estão se reunindo. Æthelflaed — a filha de Alfredo — está casada, mas uma reviravolta cruel do destino faz com que sua própria existência se torne uma ameaça ao reino de Alfredo. São as lealdades dúbias de Uhtred, meio saxão, meio dinamarquês, que devem agora decidir todo o futuro da Inglaterra.'
      }
    }),
    prisma.book.create({
      data: {
        id: '13',
        author: 'Bernard Cornwell',
        title: 'Terra em chamas',
        genre: 'ficcao-historica',
        image: 'https://m.media-amazon.com/images/I/51xylkzBK1L.jpg',
        rating: 0,
        synopsis: 'O gosto da vitória inglesa, que Uhtred infligiu aos vikings, é ofuscado por uma tragédia que o leva a jurar jamais servir o reino saxão. Então ele se une a Ragnar e ao antigo inimigo Haesten para tomar Wessex. Com o pai debilitado pela saúde frágil, a filha de Alfredo implora pela ajuda do guerreiro para combater os inimigos que investem na Inglaterra. E ele, incapaz de dizer não, toma a frente do exército derrotado da Mércia, rumo a uma batalha inesquecível num campo encharcado de sangue junto ao Tâmisa.'
      }
    }),
    prisma.book.create({
      data: {
        id: '14',
        author: 'Matt Haig',
        title: 'A biblioteca da Meia-Noite',
        genre: 'romance',
        image: 'https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg',
        rating: 0,
        synopsis: 'Aos 35 anos, Nora Seed é uma mulher cheia de talentos e poucas conquistas. Arrependida das escolhas que fez no passado, ela vive se perguntando o que poderia ter acontecido caso tivesse vivido de maneira diferente. Após ser demitida e seu gato ser atropelado, Nora vê pouco sentido em sua existência e decide colocar um ponto final em tudo. Porém, quando se vê na Biblioteca da Meia-Noite, Nora ganha uma oportunidade única de viver todas as vidas que poderia ter vivido.Neste lugar entre a vida e a morte, e graças à ajuda de uma velha amiga, Nora pode, finalmente, se mudar para a Austrália, reatar relacionamentos antigos – ou começar outros –, ser uma estrela do rock, uma glaciologista, uma nadadora olímpica... enfim, as opções são infinitas. Mas será que alguma dessas outras vidas é realmente melhor do que a que ela já tem?'
      }
    }),
    prisma.book.create({
      data: {
        id: '15',
        author: 'Anne Frank',
        title: 'O diário de Anne Frank',
        genre: 'biografia',
        image: 'https://m.media-amazon.com/images/P/B08CY6XRN3.01._SCLZZZZZZZ_SX500_.jpg',
        rating: 0,
        synopsis: 'O Diário de Anne Frank teve a autenticidade confirmada por peritos. Estudos forenses da caligrafia de Anne e exame do papel do diário, da tinta e da cola comprovaram ser de material existente na época. A conclusão foi oficialmente apresentada pelo Instituto Estatal Holandês para Documentação da Guerra.'
      }
    }),
    prisma.book.create({
      data: {
        id: '16',
        author: 'Emily Bronte',
        title: 'O morro dos ventos uivantes',
        genre: 'romance',
        image: 'https://m.media-amazon.com/images/I/51sz0nn7u9L._SX331_BO1,204,203,200_.jpg',
        rating: 0,
        synopsis: 'Único romance da escritora inglesa Emily Bronte, O morro dos ventos uivantes retrata uma trágica historia de amor e obsessão em que os personagens principais são a obstinada e geniosa Catherine Earnshaw e seu irmão adotivo, Heathcliff. Grosseiro, humilhado e rejeitado, ele guarda apenas rancor no coração, mas tem com Catherine um relacionamento marcado por amor e, ao mesmo tempo, ódio.'
      }
    }),
    prisma.book.create({
      data: {
        id: '17',
        author: 'William Shakespeare',
        title: 'Hamlet',
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/P/B08WXFD5YB.01._SCLZZZZZZZ_SX500_.jpg',
        rating: 0,
        synopsis: 'Hamlet foi provavelmente escrita entre 1599 e 1602, mas não há até hoje uma data comprovada da gênese deste clássico da dramaturgia. Tendo como cenário a Dinamarca, mais precisamente o castelo de Elsinor, esta peça traz sua versão do destino do príncipe Hamlet, obrigado a empreender um drástico ato de revanche contra seu tio, para vingar a morte do pai. Adaptada pelo escritor Júlio Emílio Braz, o texto considerado a joia da coroa de uma carreira teatral triunfante, é daqueles para ser lido e relido inúmeras vezes.'
      }
    }),
    prisma.book.create({
      data: {
        id: '18',
        author: 'William Shakespeare',
        title: 'Romeu e Julieta',
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/I/719trP22IcL.jpg',
        rating: 0,
        synopsis: 'A obra-prima de William Shakespeare é uma das maiores histórias de amor infeliz de todos os tempos. Em um mundo repleto de disputa, de intriga e de violência, dois jovens se apaixonam, mas suas famílias, os Montecchios e os Capuletos, estão envolvidas em uma rixa de sangue e não permitem nem sequer que eles se encontrem. A paixão desenfreada, o encontro proibido e a busca pela alma gêmea são alguns dos aspectos que tornam a história de Romeu e Julieta atemporal e uma das mais conhecidas tragédias da literatura.'
      }
    }),
    prisma.book.create({
      data: {
        id: '19',
        author: 'William Shakespeare',
        title: 'Macbeth',
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/I/71F7-GE8TwL.jpg',
        rating: 0,
        synopsis: 'Considerada uma das obras mais sombrias e poderosas de William Shakespeare, esta narrativa clássica mostra Macbeth e Banquo, seu amigo, retornando de uma guerra pelo reinado da Escócia, depois de retumbante vitória. Na estrada eles se deparam com três feiticeiras, que realizam surpreendentes previsões. De acordo com as irmãs, símbolos aqui das três tecelãs do destino humano, o protagonista se tornará Barão de Cawdor e, futuramente, o novo soberano. Quanto a Banquo, será o progenitor de reis. Macbeth foi publicada pela primeira em 1623, possivelmente a partir de uma transcrição de alguma performance específica e adaptada para cinema, televisão, ópera, romances, história sem quadrinhos e outras mídias.'
      }
    }),
    prisma.book.create({
      data: {
        id: '20',
        author: 'William Shakespeare',
        title: 'Otelo',
        genre: 'drama',
        image: 'https://m.media-amazon.com/images/I/71LrTogv+QL.jpg',
        rating: 0,
        synopsis: 'Dentro da ampla galeria de personagens que ao longo das obras de Shakespeare corporificaram as paixões mais universais e comuns que movem a natureza humana, Otelo passou a representar o homem destruído pelo ciúme. No entanto, apesar de esta característica permanecer na memória coletiva como a mais famosa da obra, este é apenas o ápice visível do tema crucial e mais geral: a desconfiança. Movido pelo veneno que se espalha por meio de seus diálogos e permeia as relações entre casais, entre homens e mulheres, entre chefes e subordinados, Otelo continua a ser, hoje como ontem, uma leitura contundente e poderosa pela perfeição da sua trama e pelo desenvolvimento cerrado dos mecanismos que, tendo como fonte principal Iago, o mais cínico e perigoso diabo humano da literatura, articulam inexoravelmente a ação e acabam por precipitar a tragédia.'
      }
    }),
    prisma.book.create({
      data: {
        id: '21',
        author: 'Charles R. Cross',
        title: 'Mais pesado que o céu: Uma biografia de Kurt Cobain',
        genre: 'biografia',
        image: 'https://m.media-amazon.com/images/I/71N230VBKTL.jpg',
        rating: 0,
        synopsis: 'Mais pesado que o céu apresenta a vida singular de Kurt Cobain, o mítico líder do Nirvana, banda que revolucionou o estagnado mundo da música pop no início da década de 1990, com o lançamento do clássico álbum Nevermind. Em capítulos que evoluem em ordem cronológica, Charles Cross traça a vida de Cobain desde sua infância, quando ele morava no interior de um trailer numa cidade perdida do estado de Washington, até a conquista da fama, do sucesso e da adoração de toda uma legião de fãs. Heavier than heaven revela os dramas familiares que instigaram a criatividade musical de Cobain, a história da geração que moldou seu caráter e sensibilidade, detalhes do vício pela heroína, os planos suicidas e seu estranho e conturbado caso de amor com Courtney Love. Analisando relatos médicos e policiais, e cartas do próprio músico, Charles Cross também revela fatos novos sobre a saúde de Cobain, sua depressão e seus últimos dias.'
      }
    }),
    prisma.book.create({
      data: {
        id: '22',
        author: 'Dave Grohl',
        title: 'O contador de histórias: Memórias de vida e música',
        genre: 'biografia',
        image: 'https://m.media-amazon.com/images/I/817qemCEfVL.jpg',
        rating: 0,
        synopsis: 'Não é preciso ser fã do Nirvana ou do Foo Fighters para saber que Dave Grohl é uma das figuras mais queridas e respeitadas da música mundial. De sua entrada na banda punk Scream, no fim da adolescência, até o enorme sucesso do Foo Fighters ― passando pelos estrondosos anos no Nirvana ―, Dave tem uma trajetória marcada por situações bizarras, dores inimagináveis, contratempos descomunais e conquistas ainda maiores. Em O contador de histórias, uma reunião de memórias de todos os períodos de sua vida, ele oferece algo raro: um retrato íntimo e sincero de uma vida extraordinária feita de momentos comuns ― e de outros nem tanto assim.'
      }
    }),
    prisma.book.create({
      data: {
        id: '23',
        author: 'George Orwell',
        title: '1984',
        genre: 'ficcao',
        image: 'https://m.media-amazon.com/images/I/91omCzLLwUL.jpg',
        rating: 0,
        synopsis: 'Texto integral com apêndice “Os princípios da Novilíngua”. Nova tradução assinada por Alexandre Barbosa de Souza, ex-editor da Biblioteca Azul, Cosac Naify e Editora 34. Capa e artes dos brindes especialmente desenvolvidas pelo artista plástico Carlo Giovanni.1984 é um dos mais importantes romances de ficção científica do século XX. Publicada originalmente em 1949, poucos meses antes da morte do autor, George Orwell, essa sátira política ambientada em uma distopia futurista influencia a literatura até hoje.Nesta obra magistral, acompanhamos o drama de Winston Smith, um funcionário do Ministério da Verdade, parte do governo do superestado da Oceania ― que inclui as Américas, a Austrália, a Inglaterra e o sul da África.O estado totalitário comandado pela figura mítica do Grande Irmão controla todos os aspectos da vida de seus cidadãos. No entanto, Smith odeia secretamente o Partido e deseja se rebelar contra o sistema.'
      }
    }),
    prisma.book.create({
      data: {
        id: '24',
        author: 'George Orwell',
        title: 'A revolução dos bichos',
        genre: 'ficcao',
        image: 'https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg',
        rating: 0,
        synopsis: ' Verdadeiro clássico moderno, concebido por um dos mais influentes escritores do século XX, A revolução dos bichos é uma fábula sobre o poder. Narra a insurreição dos animais de uma granja contra seus donos. Progressivamente, porém, a revolução degenera numa tirania ainda mais opressiva que a dos humanos.Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias editoras, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo. O próprio Orwell, adepto do socialismo e inimigo de qualquer forma de manipulação política, sentiu-se incomodado com a utilização de sua fábula como panfleto. Depois das profundas transformações políticas que mudaram a fisionomia do planeta nas últimas décadas, a pequena obra-prima de Orwell pode ser vista sem o viés ideológico reducionista. Mais de sessenta anos depois de escrita, ela mantém o viço e o brilho de uma alegoria perene sobre as fraquezas humanas que levam à corrosão dos grandes projetos de revolução política. É irônico que o escritor, para fazer esse retrato cruel da humanidade, tenha recorrido aos animais como personagens. De certo modo, a inteligência política que humaniza seus bichos é a mesma que animaliza os homens. Escrito com perfeito domínio da narrativa, atenção às minúcias e extraordinária capacidade de criação de personagens e situações, A revolução dos bichos combina de maneira feliz duas ricas tradições literárias: a das fábulas morais, que remontam a Esopo, e a da sátira política, que teve talvez em Jonathan Swift seu representante máximo. "A melhor sátira já escrita sobre a face negra da história moderna." Malcolm Bradbury "Um livro para todos os tipos de leitor, seu brilho ainda intacto depois de sessenta anos." Ruth Rendell '
      }
    }),
    prisma.book.create({
      data: {
        id: '25',
        author: 'Neil DeGrasse Tyson',
        title: 'Astrofísica para apressados',
        genre: 'fisica',
        image: 'https://m.media-amazon.com/images/I/51rbl+HFO8L.jpg',
        rating: 0,
        synopsis: '"Quem nunca olhou para o céu numa noite estrelada e se perguntou: que lugar ocupo no espaço? O que tudo isso significa? Como funciona?Em Astrofísica para apressados, o aclamado astrofísico e pesquisador Neil deGrasse Tyson responde a essas e outras perguntas que certamente todos já fizeram sobre o universo. De forma clara e sucinta, Tyson traduz o cosmos numa obra organizada em capítulos enxutos, escritos para quem tem pressa, mas que oferecem conhecimentos fundamentais sobre todas as principais ideias e descobertas relacionadas ao universo. Um guia para todos aqueles que apreciam ciência, astrofísica e se interessam pelos mistérios do espaço universal, tão bem revelado ao público por este autor best-seller." '
      }
    }),
    prisma.book.create({
      data: {
        id: '26',
        author: 'Carl Sagan',
        title: 'Cosmos',
        genre: 'fisica',
        image: 'https://m.media-amazon.com/images/I/51WyIo+DkVL.jpg',
        rating: 0,
        synopsis: 'Escrito por um dos maiores divulgadores de ciência do século XX, Cosmos retraça 14 bilhões de anos de evolução cósmica, explorando tópicos como a origem da vida, o cérebro humano, hieróglifos egípcios, missões espaciais, a morte do sol, a evolução das galáxias e as forças e indivíduos que ajudaram a moldar a ciência moderna. Numa prosa transparente, Carl Sagan revela os segredos do planeta azul habitado por uma forma de vida que apenas começa a descobrir sua própria identidade e a se aventurar no vasto oceano do espaço sideral.Aqui, o tratamento dos temas científicos está sempre imbricado com outros campos de estudo tradicionais, como história, antropologia, arte e filosofia. Publicado pela primeira vez em 1980, Cosmos reúne alguns dos conhecimentos mais avançados da época sobre a natureza, a vida e o Universo — e se mantém até hoje como uma das mais importantes obras de divulgação científica da história. Embora diversas descobertas fascinantes tenham ocorrido nos últimos quarenta anos, o tema central deste livro nunca estará desatualizado: nosso fascínio pelo conhecimento e a prática da ciência como atividade cultural.'
      }
    }),
    prisma.book.create({
      data: {
        id: '27',
        author: 'Stephen Hawking',
        title: 'Uma breve história do tempo',
        genre: 'fisica',
        image: 'https://m.media-amazon.com/images/I/51aG2+outOL.jpg',
        rating: 0,
        synopsis: 'Uma das mentes mais geniais do mundo moderno, Stephen Hawking guia o leitor na busca por respostas a algumas das maiores dúvidas da humanidade: Qual a origem do universo? Ele é infinito? E o tempo? Sempre existiu, ou houve um começo e haverá um fim? Existem outras dimensões além das três espaciais? E o que vai acontecer quando tudo terminar?'
      }
    }),

  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })