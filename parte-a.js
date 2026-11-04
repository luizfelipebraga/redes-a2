const QUESTOES = [
  {
    n: 1,
    enunciado: "Uma pequena empresa possui dez computadores, duas impressoras e um servidor. Atualmente, os funcionários transportam documentos em dispositivos USB e precisam utilizar o computador da recepção para imprimir.\n\nA implantação de uma rede adequadamente configurada permitirá:",
    opcoes: [
      "garantir acesso irrestrito de todos os funcionários a qualquer documento do servidor.",
      "eliminar a necessidade de cópias de segurança, pois os arquivos estarão disponíveis em rede.",
      "dispensar autenticação, uma vez que todos os equipamentos pertencem à mesma empresa.",
      "compartilhar impressoras e arquivos, centralizar determinados serviços e controlar o acesso aos recursos conforme as permissões dos usuários.",
      "transformar as impressoras em equipamentos responsáveis pelo roteamento entre redes."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Uma rede nesse porte serve para compartilhar a impressora e os arquivos do servidor, concentrar serviços e limitar o que cada usuário alcança. Acesso livre a qualquer documento, ausência de backup e ausência de autenticação não são consequências de uma rede bem configurada. Impressora não encaminha pacotes entre redes."
    ]
  },
  {
    n: 2,
    enunciado: "Uma equipe utiliza mensagens ICMP para investigar problemas de conectividade IPv4 e compreender eventos ocorridos no encaminhamento dos pacotes.\n\nI. Echo Request e Echo Reply podem ser utilizados para testar se um destino responde a solicitações ICMP.\nII. Destination Unreachable pode informar situações em que a entrega não foi possível, conforme o motivo indicado.\nIII. Time Exceeded pode indicar o esgotamento do TTL durante o encaminhamento.\nIV. O ICMP garante a entrega dos dados das aplicações e substitui o TCP.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III, apenas.",
      "I e IV, apenas.",
      "I, II, III e IV.",
      "I e III, apenas.",
      "II e IV, apenas."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Echo Request e Echo Reply são o par usado pelo ping. Destination Unreachable avisa que o pacote não pôde ser entregue e traz um código com o motivo. Time Exceeded aparece quando o TTL chega a zero no caminho. O ICMP só sinaliza esses eventos. Quem oferece entrega confiável à aplicação é o TCP."
    ]
  },
  {
    n: 3,
    enunciado: "Uma equipe utiliza o modelo TCP/IP de quatro camadas para documentar o acesso de usuários a um sistema. Em seguida, relaciona essa organização ao modelo OSI.\n\nI. A camada de Aplicação do TCP/IP reúne funções associadas às camadas de Aplicação, Apresentação e Sessão do OSI.\nII. A camada de Transporte do TCP/IP corresponde, de modo geral, à camada de Transporte do OSI.\nIII. A camada de Internet relaciona-se à de Rede; a de Acesso à Rede reúne funções associadas às camadas de Enlace e Física.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "II e III, apenas.",
      "I, II e III.",
      "I e III, apenas.",
      "I, apenas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "No TCP/IP de quatro camadas, Aplicação cobre o que o OSI separa em Aplicação, Apresentação e Sessão. Transporte corresponde à camada de Transporte. Internet corresponde à de Rede. Acesso à Rede junta Enlace e Física."
    ]
  },
  {
    n: 4,
    enunciado: "Uma instituição possui redes em diferentes andares. Os enlaces que interligam esses segmentos concentram o tráfego destinado aos servidores e à saída para a Internet.\n\nI. O backbone interliga segmentos e pode concentrar o tráfego agregado de diversas partes da rede.\nII. Sua capacidade deve considerar a demanda dos segmentos atendidos e as necessidades de crescimento.\nIII. Caminhos e equipamentos redundantes, quando corretamente projetados, podem contribuir para a disponibilidade.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I e III, apenas.",
      "I, II e III.",
      "I, apenas.",
      "II, apenas.",
      "II e III, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "O backbone é o tronco que liga os segmentos e por onde passa o tráfego somado, inclusive o dos servidores e da saída para a Internet. O dimensionamento precisa caber a demanda atual e o crescimento. Redundância de caminhos e de equipamentos, quando o projeto fecha de fato, aumenta a disponibilidade."
    ]
  },
  {
    n: 5,
    enunciado: "Uma equipe compara caminhos para a mesma rede. No cenário RIP, o caminho A possui dois saltos e o B possui três. No cenário OSPF, o caminho A tem custo total 30 e o B tem custo total 15. Considere rotas elegíveis e ausência de outras restrições.\n\nA interpretação correta é:",
    opcoes: [
      "RIP seleciona A e OSPF seleciona B; o BGP seleciona rotas exclusivamente pela quantidade de roteadores atravessados.",
      "RIP seleciona B e OSPF seleciona A, pois ambos priorizam o maior valor de métrica.",
      "RIP seleciona B e OSPF seleciona B; o BGP ignora políticas administrativas.",
      "RIP e OSPF selecionam A, pois ambos utilizam exclusivamente a quantidade de saltos.",
      "RIP seleciona A pela menor quantidade de saltos; OSPF seleciona B pelo menor custo; BGP considera políticas e atributos na seleção das rotas."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "O RIP conta saltos e fica com A, que tem dois. O OSPF soma custo e fica com B, que tem 15. Os dois escolhem o menor valor da própria métrica, e essa métrica não é a mesma. O BGP não escolhe só pela quantidade de roteadores: entram políticas e atributos, como preferência local, tamanho do AS path e MED."
    ]
  },
  {
    n: 6,
    enunciado: "Os mesmos dados digitais podem ser transportados por diferentes meios, desde que sejam representados por sinais compatíveis com a tecnologia utilizada.\n\nA associação correta é:",
    opcoes: [
      "par trançado — sinais elétricos; fibra óptica — sinais luminosos; Wi-Fi — ondas eletromagnéticas de radiofrequência.",
      "fibra óptica — corrente elétrica no núcleo; par trançado — luz infravermelha; Wi-Fi — sinais em pares metálicos.",
      "fibra óptica — sinais elétricos; par trançado — luz; Wi-Fi — corrente contínua em cabos.",
      "fibra óptica — ondas sonoras; par trançado — luz; Wi-Fi — pulsos mecânicos.",
      "fibra óptica — sinais magnéticos em discos; par trançado — rádio; Wi-Fi — luz confinada."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "O par trançado conduz eletricidade. A fibra conduz luz. O Wi-Fi usa rádio. As outras alternativas trocam esses sinais de meio."
    ]
  },
  {
    n: 7,
    enunciado: "Um escritório precisa conectar estações fixas que transferem arquivos volumosos e notebooks utilizados em diferentes salas. A equipe avalia mobilidade, instalação e condições do ambiente antes de escolher os meios de acesso.\n\nI. Redes sem fio favorecem a mobilidade, mas seu desempenho pode ser afetado por obstáculos, interferências e compartilhamento do meio.\nII. Redes cabeadas podem oferecer maior previsibilidade de desempenho para estações fixas, desde que projetadas e instaladas adequadamente.\nIII. Redes cabeadas são imunes a qualquer falha, enquanto redes sem fio não podem utilizar mecanismos de segurança.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "I e II, apenas.",
      "II e III, apenas.",
      "III, apenas.",
      "I, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "O rádio facilita o notebook circular entre as salas e sofre com parede, interferência e meio compartilhado. O cabo, bem instalado, é mais estável para a estação que transfere arquivo grande. Cabo também falha, e Wi-Fi tem mecanismos de segurança, como WPA2 e WPA3."
    ]
  },
  {
    n: 8,
    enunciado: "Uma empresa utiliza a rede 192.168.10.0/24 para os setores Administrativo, Financeiro, RH e TI. A equipe avalia a divisão desse espaço em sub-redes.\n\nI. Devem ser levantados o número de dispositivos por setor e a previsão de crescimento.\nII. Requisitos de organização, separação de domínios de broadcast e controle de acesso podem justificar a divisão.\nIII. A divisão em sub-redes, isoladamente, garante que os setores não possam se comunicar, independentemente de roteamento e regras de segurança.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III.",
      "I e II, apenas.",
      "II e III, apenas.",
      "I, apenas.",
      "II, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Antes de fatiar o /24 é preciso contar hosts e deixar folga. Separar broadcast e aplicar controle de acesso são motivos válidos para a divisão. Sub-rede, sozinha, não isola os setores: se houver rota entre elas e nenhuma regra bloqueando, a comunicação continua."
    ]
  },
  {
    n: 9,
    enunciado: "Uma organização deseja conectar seis dispositivos em uma malha completa, na qual cada dispositivo possui um enlace direto com todos os demais. Cada ligação é bidirecional e deve ser contada uma única vez.\n\nUtilizando a fórmula L = n(n − 1)/2, a quantidade necessária de enlaces é:",
    opcoes: [
      "30, pois cada dispositivo estabelece cinco ligações, contadas separadamente nas duas extremidades.",
      "18, pois o número de dispositivos deve ser multiplicado por três.",
      "12, pois são necessárias duas ligações por dispositivo.",
      "15, pois 6 × 5 ÷ 2 = 15.",
      "6, pois cada dispositivo exige uma ligação."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Cada um dos seis fala com os outros cinco, e cada cabo serve às duas pontas. 6 × 5 ÷ 2 = 15. Contar as duas pontas em separado dobraria o resultado para 30."
    ]
  },
  {
    n: 10,
    enunciado: "Uma empresa pretende manter conexões Gigabit Ethernet e preparar determinados pontos para 10GBASE-T. O responsável deve relacionar a categoria do cabeamento à distância e às condições de instalação.\n\nI. Cat5e pode suportar 1000BASE-T em canais de até 100 metros, respeitados os requisitos da instalação.\nII. Cat6 pode suportar 10GBASE-T em distâncias reduzidas, chegando a cerca de 55 metros em condições adequadas, conforme as características do canal e as interferências.\nIII. Cat6A foi especificado para suportar 10GBASE-T em canais de até 100 metros.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, apenas.",
      "I e III, apenas.",
      "I, II e III.",
      "II, apenas.",
      "II e III, apenas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "Cat5e cobre 1000BASE-T no canal de até 100 m. Cat6 chega a 10GBASE-T em trecho mais curto, em torno de 55 m, quando o canal e a interferência permitem. Cat6A foi feita para 10GBASE-T até 100 m."
    ]
  },
  {
    n: 11,
    enunciado: "Ao executar tracert, um técnico observa respostas de alguns roteadores e asteriscos em determinadas linhas. Ele precisa interpretar o resultado sem tirar conclusões indevidas.\n\nA interpretação correta é:",
    opcoes: [
      "o comando utiliza TTLs progressivos para provocar respostas dos saltos; asteriscos indicam ausência de resposta às sondagens no prazo, podendo decorrer de filtros, perdas ou políticas dos equipamentos.",
      "o comando apresenta necessariamente todos os roteadores e comprova que o caminho de retorno é idêntico ao de ida.",
      "o comando mantém o mesmo TTL em todas as sondagens e consulta apenas o servidor DNS.",
      "cada asterisco comprova a interrupção definitiva do caminho, mesmo quando o destino responde nas linhas seguintes.",
      "os asteriscos identificam obrigatoriamente equipamentos desligados."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "O tracert sobe o TTL a cada sondagem para que cada salto responda com ICMP Time Exceeded. O asterisco significa que aquela sondagem não voltou no prazo: filtro, descarte, perda ou política do equipamento. Não lista todo roteador, não prova que a volta é igual à ida e não significa equipamento desligado. Se as linhas seguintes respondem, o caminho não está interrompido."
    ]
  },
  {
    n: 12,
    enunciado: "Em uma simulação, quatro computadores estão conectados a um hub. Um deles envia um quadro destinado a outro equipamento, e os sinais correspondentes são repetidos para as demais portas.\n\nEsse comportamento ocorre porque o hub:",
    opcoes: [
      "funciona como um roteador e cria uma rota independente para cada computador.",
      "utiliza o DNS para localizar todos os destinatários possíveis.",
      "identifica o endereço MAC de destino e encaminha o sinal somente à porta correspondente.",
      "atua na camada Física, repetindo sinais sem realizar seleção de destino com base em endereços MAC.",
      "consulta uma tabela de endereços IP antes de selecionar a porta de destino."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "O hub é da camada Física: recebe o sinal numa porta e o repete nas outras, sem ler MAC nem IP. Quem escolhe a porta pelo MAC é o switch. Quem encaminha pelo IP é o roteador. DNS não participa disso."
    ]
  },
  {
    n: 13,
    enunciado: "Um usuário questiona por que seu computador precisa de endereço IP se já possui um nome e um endereço MAC.\n\nA explicação adequada é:",
    opcoes: [
      "o MAC e o nome possuem obrigatoriamente o mesmo alcance e a mesma função do endereço IP.",
      "o IP é utilizado apenas para identificar o fabricante da placa de rede.",
      "o IP fornece endereçamento lógico utilizado no encaminhamento entre redes; o MAC atua na comunicação do enlace, e nomes dependem de mecanismos de resolução para serem associados a endereços.",
      "o MAC informa diretamente a localização de qualquer computador na Internet, dispensando roteamento.",
      "o nome do computador substitui automaticamente o IP em todos os cabeçalhos de rede."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "O IP é o endereço lógico que os roteadores usam para atravessar redes. O MAC vale no enlace local e muda a cada salto. O nome só vira endereço depois de uma resolução, como o DNS. O fabricante da placa está no OUI do MAC, não no IP. O nome não entra no cabeçalho no lugar do IP."
    ]
  },
  {
    n: 14,
    enunciado: "Uma escola instalou uma infraestrutura que permite aos professores acessar arquivos armazenados em um servidor e utilizar uma impressora disponível na secretaria. Os equipamentos trocam informações por meio de conexões cabeadas e sem fio.\n\nI. Uma rede de computadores permite a comunicação entre dispositivos por meio de conexões e regras de comunicação.\nII. O compartilhamento de arquivos e de impressoras constitui uma possibilidade de utilização de uma rede.\nIII. A existência de uma rede local depende obrigatoriamente de uma conexão com a Internet.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I e II, apenas.",
      "II e III, apenas.",
      "I, II e III.",
      "I, apenas.",
      "III, apenas."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Rede é dispositivos ligados por um meio, seguindo protocolos, e serve para compartilhar arquivo e impressora. A rede do laboratório continua existindo sem saída para a Internet."
    ]
  },
  {
    n: 15,
    enunciado: "Uma estação IPv6 apresenta um endereço global unicast e um endereço link-local. A equipe precisa explicar por que os dois podem coexistir na mesma interface.\n\nI. Endereços global unicast permitem identificação com alcance global, embora a conectividade efetiva dependa de roteamento e políticas.\nII. Endereços link-local são utilizados na comunicação restrita ao enlace e em funções de controle do IPv6.\nIII. Roteadores não devem encaminhar para outros enlaces pacotes com origem ou destino link-local.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III.",
      "I, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "II, apenas."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "O global unicast pode ser roteado na Internet, desde que existam rotas e as políticas deixem passar. O link-local (fe80::/10) fica no enlace e sustenta o Neighbor Discovery e o anúncio de roteadores. Roteador não encaminha pacote cuja origem ou destino seja link-local. A interface IPv6 convive com os dois porque o escopo de cada um é diferente."
    ]
  },
  {
    n: 16,
    enunciado: "Ao modernizar uma rede, um técnico compara equipamentos que apresentam comportamentos diferentes no encaminhamento das informações. Ele considera um hub, uma bridge e um switch de camada 2.\n\nI. O hub repete os sinais recebidos para as demais portas, sem selecionar o destino pelo endereço MAC.\nII. Bridges e switches podem aprender endereços MAC e utilizá-los para filtrar ou encaminhar quadros.\nIII. Um switch encaminha obrigatoriamente todo quadro unicast conhecido para todas as portas, da mesma forma que um hub.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II e III, apenas.",
      "II, apenas.",
      "I, II e III.",
      "I, apenas.",
      "I e II, apenas."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "O hub repete o sinal sem olhar MAC. Bridge e switch aprendem o MAC de origem e usam a tabela para encaminhar ou filtrar. Quando o destino unicast já está na tabela, o switch manda o quadro só para a porta correspondente. Inundar todas as portas fica para destino desconhecido, broadcast e alguns multicasts."
    ]
  },
  {
    n: 17,
    enunciado: "Um laboratório possui três computadores conectados ao mesmo switch, na mesma VLAN e sem roteador:\n\nPC1: 192.168.10.10/24\nPC2: 192.168.10.11/24\nPC3: 192.168.20.12/24\n\nPara colocá-los na mesma sub-rede IPv4, sem alterar os endereços dos dois primeiros, deve-se:",
    opcoes: [
      "configurar o PC3 com 192.168.10.10/24, repetindo o endereço do PC1.",
      "configurar no PC3 o endereço 192.168.10.255/24 como endereço de host.",
      "manter os endereços e configurar o switch de camada 2 como servidor DNS.",
      "configurar no PC3 um endereço disponível como 192.168.10.12/24, verificando previamente a ausência de conflito.",
      "alterar apenas o nome do PC3 para indicar o laboratório correto."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "PC1 e PC2 estão em 192.168.10.0/24. O PC3 está em outra rede e, sem roteador, não os alcança. Ele precisa de um host livre dessa mesma rede, como 192.168.10.12/24, depois de conferir que ninguém mais usa esse endereço. Repetir o .10 gera conflito. O .255 é o broadcast do /24. DNS e nome de máquina não mudam a sub-rede."
    ]
  },
  {
    n: 18,
    enunciado: "Dois computadores de uma topologia não conseguem se comunicar. O estudante deve investigar o problema de maneira organizada, evitando alterações aleatórias.\n\nI. É adequado verificar os cabos, a compatibilidade das interfaces e o estado dos enlaces.\nII. Devem ser conferidos os endereços IP, as máscaras e a existência de endereços duplicados.\nIII. Quando o destino estiver em outra rede, devem ser analisados o gateway e os caminhos de roteamento necessários.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II e III, apenas.",
      "II, apenas.",
      "I e III, apenas.",
      "I, apenas.",
      "I, II e III."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "A investigação sobe pelas camadas: cabo, interface e link; depois IP, máscara e duplicidade; se o destino for de outra rede, gateway e rotas. As três verificações cabem no diagnóstico."
    ]
  },
  {
    n: 19,
    enunciado: "Um estudante deseja compreender por que um endereço IPv4, em notação decimal pontuada, contém quatro valores separados por pontos e por que cada valor não ultrapassa 255.\n\nA explicação correta é:",
    opcoes: [
      "o endereço possui 32 bits, organizados em quatro octetos de oito bits; cada octeto admite 2⁸ = 256 combinações, representadas de 0 a 255.",
      "os quatro valores correspondem às portas físicas do equipamento.",
      "o IPv4 possui quatro bits, representados por quatro números decimais.",
      "os quatro valores representam, obrigatoriamente, país, estado, cidade e computador.",
      "cada parte possui dez bits e admite 256 valores positivos, excluindo o zero."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "O IPv4 tem 32 bits, em quatro grupos de 8. Oito bits formam 256 valores, de 0 a 255. Não são portas, nem uma divisão geográfica fixa, nem quatro bits no total. Cada octeto tem 8 bits, e o zero é um valor válido."
    ]
  },
  {
    n: 20,
    enunciado: "Um computador 192.168.1.10/24 precisa acessar um servidor 192.168.2.20/24. Seu gateway é 192.168.1.1. Considere que não há tradução de endereços no caminho analisado.\n\nO comportamento esperado é:",
    opcoes: [
      "utilizar o DNS como substituto do roteador para transportar o pacote entre as sub-redes.",
      "alterar automaticamente a máscara para /16, independentemente do projeto da rede.",
      "substituir o IP de destino do pacote por 192.168.1.1 durante todo o percurso.",
      "enviar o pacote diretamente ao MAC do servidor remoto, sem utilizar o gateway.",
      "encaminhar o quadro local ao gateway, mantendo no pacote IP o endereço de destino 192.168.2.20 para que os roteadores o encaminhem até a rede do servidor."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "As redes /24 são diferentes, então o quadro local vai ao MAC do gateway 192.168.1.1. O IP de destino do pacote continua 192.168.2.20, e cada roteador decide o próximo salto. Sem NAT, origem e destino IP não são trocados. DNS não carrega o pacote, e a máscara não muda sozinha. O MAC do servidor remoto não é alcançável no enlace local."
    ]
  },
  {
    n: 21,
    enunciado: "Uma rede utiliza um hub central, ao qual todos os computadores estão conectados por cabos individuais. Embora o desenho apresente um equipamento central, os dispositivos compartilham o meio de comunicação.\n\nI. A disposição física das conexões corresponde a uma estrela.\nII. O comportamento lógico pode ser associado a um barramento compartilhado.\nIII. A utilização do hub garante enlaces dedicados full-duplex independentes para cada computador.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III.",
      "I, apenas.",
      "II, apenas.",
      "I e II, apenas.",
      "I e III, apenas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Cabos individuais até um ponto central desenham uma estrela. Como o hub repete tudo, o meio é compartilhado, no mesmo espírito de um barramento, com um domínio de colisão. Hub opera em half-duplex. Enlace dedicado e full-duplex é comportamento de switch."
    ]
  },
  {
    n: 22,
    enunciado: "Um usuário acessa uma página que utiliza HTTP/1.1 ou HTTP/2 sobre TCP. Para compreender o processo, a equipe analisa a participação dos protocolos em diferentes camadas.\n\nI. O DNS pode ser consultado para resolver o nome do servidor quando a informação ainda não estiver disponível.\nII. O TCP oferece transporte confiável e ordenado de bytes, enquanto o IP participa do endereçamento e encaminhamento entre redes.\nIII. Ethernet ou Wi-Fi transportam quadros no enlace de acesso, complementando as funções dos protocolos das camadas superiores.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "II e III, apenas.",
      "I, II e III.",
      "I e III, apenas.",
      "I, apenas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "O DNS entra quando o nome ainda não está resolvido em cache. O TCP entrega o fluxo em ordem e com retransmissão; o IP endereça e encaminha. Ethernet ou Wi-Fi levam o quadro no enlace de acesso. As três descrições cabem no acesso à página."
    ]
  },
  {
    n: 23,
    enunciado: "A expansão da Internet aumentou a necessidade de endereços e evidenciou limitações do espaço de endereçamento IPv4. O IPv6 foi desenvolvido para oferecer um espaço muito maior, entre outras mudanças.\n\nI. O IPv4 utiliza endereços de 32 bits, enquanto o IPv6 utiliza endereços de 128 bits.\nII. O espaço teórico corresponde a 2³² combinações no IPv4 e 2¹²⁸ no IPv6, embora nem todas sejam destinadas ao uso comum como endereços públicos de hosts.\nIII. O IPv6 possui apenas quatro vezes mais combinações de endereços que o IPv4.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III.",
      "II e III, apenas.",
      "I e II, apenas.",
      "I, apenas.",
      "II, apenas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "IPv4 tem 32 bits e IPv6 tem 128. O espaço teórico é 2 elevado a esses tamanhos, e parte das faixas fica reservada. O endereço IPv6 tem quatro vezes mais bits, mas o número de combinações cresce por 2⁹⁶, não por quatro."
    ]
  },
  {
    n: 24,
    enunciado: "Uma equipe compara duas formas de transmissão: uma envia os bits sequencialmente em um canal ou lane; outra utiliza várias linhas para transmitir múltiplos bits simultaneamente.\n\nA interpretação correta é:",
    opcoes: [
      "a transmissão serial envia bits em sequência por canal ou lane; a paralela utiliza várias linhas simultâneas, devendo-se considerar sincronização, interferências, distância e taxa de sinalização.",
      "a transmissão paralela é sempre mais rápida, independentemente da distância e da tecnologia utilizada.",
      "a transmissão serial somente pode ser empregada em conexões analógicas.",
      "as duas modalidades se diferenciam exclusivamente pela utilização de endereços IP públicos ou privados.",
      "a transmissão serial envia todos os bits simultaneamente, enquanto a paralela envia um bit por vez."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Serial manda um bit depois do outro no canal. Paralela manda vários ao mesmo tempo, um por linha, e esbarra em skew, crosstalk, distância e taxa. Paralela não é sempre mais rápida. Serial é comum em enlaces digitais. Endereço IP não define o modo de transmitir bits. A última alternativa inverte as duas definições."
    ]
  },
  {
    n: 25,
    enunciado: "Uma região permanece durante 24 horas sem acesso à Internet. Embora a energia elétrica continue disponível, organizações precisam adaptar suas atividades para manter os serviços essenciais.\n\nI. No setor financeiro, pagamentos e consultas que dependem de comunicação com serviços remotos podem ser prejudicados.\nII. Na educação, aulas on-line e acesso a ambientes virtuais podem ser interrompidos.\nIII. Na saúde, teleconsultas e consultas a sistemas remotos podem ser afetadas, embora atividades locais possam continuar conforme a infraestrutura disponível.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I e II, apenas.",
      "II, apenas.",
      "II e III, apenas.",
      "I, apenas.",
      "I, II e III."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "Pagamento e consulta que dependem de serviço remoto param ou degradam. Aula on-line e ambiente virtual também. Teleconsulta e prontuário remoto sofrem, e o atendimento que já funciona na rede local pode seguir, porque há energia e infraestrutura interna. O verbo das três frases é podem, e as três cabem."
    ]
  },
  {
    n: 26,
    enunciado: "Uma biblioteca pretende explicar aos usuários a diferença entre a infraestrutura que interliga redes e os serviços utilizados sobre essa infraestrutura. Para isso, apresenta exemplos de navegação em páginas, envio de e-mails e transferência de arquivos.\n\nI. A Internet é uma infraestrutura de interconexão de redes que utiliza o conjunto de protocolos TCP/IP.\nII. A World Wide Web é um sistema de recursos e documentos interligados, acessados normalmente por navegadores.\nIII. Navegadores e hiperlinks facilitaram a consulta e a circulação de informações entre páginas e sites.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II e III, apenas.",
      "I, II e III.",
      "I, apenas.",
      "I e III, apenas.",
      "II, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Internet é a malha de redes sobre TCP/IP. A Web é um serviço dessa malha: documentos ligados por URL, acessados em geral pelo navegador. Hiperlink e navegador é o que tornou essa consulta corrente. E-mail e transferência de arquivo são outros serviços sobre a mesma infraestrutura."
    ]
  },
  {
    n: 27,
    enunciado: "Um técnico precisa simplificar o endereço:\n\n2001:0DB8:0000:0000:0000:0000:00A0:0001\n\nAplicando a remoção de zeros à esquerda e a compressão da sequência de grupos nulos, obtém-se:",
    opcoes: [
      "2001::DB8::A0:1",
      "2001:DB8::A0:1",
      "2001:DB8::A:1",
      "2001:DB8:0:A0:1",
      "2001:DB8::A0:10"
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Tirando zeros à esquerda: 2001:DB8:0:0:0:0:A0:1. Os quatro zeros seguidos viram um único ::, e fica 2001:DB8::A0:1. Dois :: no mesmo endereço são inválidos. O grupo 00A0 perde só os zeros da esquerda e continua A0. A quarta forma não repõe os quatro grupos omitidos. O último grupo é 1, não 10."
    ]
  },
  {
    n: 28,
    enunciado: "Ao reproduzir um desenho de topologia em anel, um estudante percebe que alguns equipamentos disponíveis possuem apenas uma interface apropriada para a conexão pretendida.\n\nI. O desenho de uma topologia não garante que os equipamentos escolhidos disponham das interfaces necessárias para implementá-la.\nII. A implementação funcional exige interfaces, meios e configurações compatíveis com a tecnologia utilizada.\nIII. Desenhar cabos formando um círculo é suficiente para garantir o funcionamento de qualquer rede em anel.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, apenas.",
      "II e III, apenas.",
      "III, apenas.",
      "I e II, apenas.",
      "I, II e III."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "O desenho não cria a segunda porta que o anel pede em cada nó. Para funcionar, interface, meio e configuração têm de ser compatíveis com a tecnologia. Fechar um círculo de cabos no papel não basta."
    ]
  },
  {
    n: 29,
    enunciado: "Durante uma auditoria, foi encontrado o registro:\n\n2001:DB8::BEBA::C0:CA\n\nI. O registro é inválido porque utiliza duas ocorrências de :: no mesmo endereço.\nII. Duas compressões impedem determinar de maneira única quantos grupos nulos foram omitidos em cada posição.\nIII. Para validar o registro, basta remover todas as letras dos grupos hexadecimais.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "III, apenas.",
      "I e II, apenas.",
      "II, apenas.",
      "I, apenas.",
      "II e III, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "O :: só pode aparecer uma vez. Com dois, não dá para saber como os grupos que faltam se repartem, e o endereço deixa de ser único. As letras de A a F são dígitos hexadecimais. Apagá-las altera o valor e não corrige a compressão duplicada."
    ]
  },
  {
    n: 30,
    enunciado: "Uma instituição possui uma rede em um laboratório, interliga unidades distribuídas por uma cidade e mantém comunicação com filiais em diferentes estados. Para documentar o projeto, o responsável utiliza a classificação por abrangência geográfica.\n\nA classificação mais adequada para essas três situações, respectivamente, é:",
    opcoes: [
      "LAN, MAN e WAN.",
      "MAN, WAN e LAN.",
      "WAN, MAN e LAN.",
      "LAN, WAN e MAN.",
      "MAN, LAN e WAN."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Laboratório é rede local. Unidades na mesma cidade formam uma rede metropolitana. Filiais em outros estados exigem uma rede de longa distância. A ordem do enunciado é LAN, MAN e WAN."
    ]
  },
  {
    n: 31,
    enunciado: "Uma empresa ampliará seu quadro de dez para cinquenta usuários. Além do aumento do número de equipamentos, haverá utilização de videoconferências, sistemas corporativos e armazenamento compartilhado.\n\nI. O projeto deve considerar quantidade de portas, capacidade dos enlaces, cobertura sem fio e demanda dos serviços.\nII. O plano de endereçamento, a segurança e a capacidade de expansão devem integrar o planejamento.\nIII. Acrescentar pontos de acesso e switches sem analisar a infraestrutura existente é suficiente para assegurar o desempenho.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, apenas.",
      "I, II e III.",
      "III, apenas.",
      "I e II, apenas.",
      "II, apenas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Cinquenta usuários, vídeo e armazenamento pedem porta, uplink, cobertura e uma leitura do tráfego. Endereçamento, segurança e folga para crescer entram no mesmo plano. Comprar access point e switch sem olhar o que já existe pode criar gargalo, interferência e loop."
    ]
  },
  {
    n: 32,
    enunciado: "Durante uma atividade de endereçamento, um estudante precisa representar o IPv4 192.168.10.25 em binário, mantendo oito bits em cada octeto.\n\nAssinale a alternativa correta.",
    opcoes: [
      "11000000.10101000.00001010.00011001",
      "11000000.10101000.00001010.00011010",
      "11000000.10100010.00001010.00011001",
      "11000001.10101000.00001010.00011001",
      "11000000.10101000.00010100.00011001"
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "192 é 11000000, 168 é 10101000, 10 é 00001010 e 25 é 00011001. Nas outras, o último octeto vale 26, o segundo vale 162, o primeiro vale 193 ou o terceiro vale 20."
    ]
  },
  {
    n: 33,
    enunciado: "Uma organização precisa interligar dois prédios separados por uma distância superior à prevista para seus enlaces de cobre. O percurso também passa por uma área com elevada interferência eletromagnética.\n\nA fibra óptica é uma alternativa adequada porque:",
    opcoes: [
      "transmite sinais elétricos com potência suficiente para neutralizar todas as interferências externas.",
      "apresenta a mesma distância máxima em qualquer tipo de fibra e transceptor.",
      "exige que os dois prédios compartilhem obrigatoriamente o mesmo circuito elétrico.",
      "dispensa transceptores e permite ligar qualquer conector diretamente às portas elétricas dos switches.",
      "utiliza sinais luminosos e apresenta imunidade eletromagnética no transporte do sinal, podendo atender distâncias maiores conforme a fibra e os transceptores selecionados."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "A fibra leva luz, então o campo eletromagnético do percurso não entra no sinal, e o alcance passa do limite típico do par trançado. Esse alcance depende da fibra e do transceptor. Ela não conduz eletricidade, não dispensa módulo óptico e não exige o mesmo circuito elétrico nos dois prédios."
    ]
  },
  {
    n: 34,
    enunciado: "Uma professora propõe que os estudantes construam uma rede virtual, configurem endereços e observem o deslocamento de mensagens entre dispositivos no Cisco Packet Tracer.\n\nI. A ferramenta permite montar topologias e configurar diferentes equipamentos disponíveis no ambiente de simulação.\nII. A observação dos eventos pode ajudar a compreender encapsulamento, encaminhamento e funcionamento de protocolos suportados.\nIII. Os resultados da simulação dispensam qualquer verificação de compatibilidade e desempenho em uma implantação real.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I e II, apenas.",
      "II, apenas.",
      "I, apenas.",
      "II e III, apenas.",
      "I, II e III."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Dá para montar a topologia, configurar os equipamentos do simulador e acompanhar o pacote camada a camada. O resultado não substitui a prova no equipamento real: desempenho, firmware e meio físico ficam de fora do modelo."
    ]
  },
  {
    n: 35,
    enunciado: "Ao documentar um endereço IPv6 sem abreviações, um administrador precisa utilizar a representação completa dos seus 128 bits.\n\nEssa representação é formada por:",
    opcoes: [
      "seis grupos de oito bits, escritos em hexadecimal e separados por hífens.",
      "oito grupos de oito bits, escritos em decimal e separados por dois-pontos.",
      "oito grupos de dezesseis bits, normalmente representados por quatro dígitos hexadecimais em cada grupo e separados por dois-pontos.",
      "quatro grupos de oito bits, escritos em decimal e separados por pontos.",
      "dezesseis grupos de dezesseis bits, escritos em binário e separados por pontos."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "128 bits viram oito grupos de 16. Cada grupo cabe em quatro dígitos hexadecimais, separados por dois-pontos. Seis grupos de 8 bits com hífen é o formato do MAC. Quatro grupos decimais com ponto é o IPv4. Oito grupos de 8 bits somariam 64, e dezesseis grupos de 16 somariam 256."
    ]
  },
  {
    n: 36,
    enunciado: "Um estudante precisa construir uma rede local com quatro computadores e um switch de camada 2. O objetivo inicial é permitir a comunicação entre todos os computadores dentro de uma única sub-rede.\n\nA sequência mais adequada é:",
    opcoes: [
      "inserir os equipamentos, utilizar conexões Ethernet compatíveis, configurar IPs únicos da mesma sub-rede com máscaras coerentes e testar a comunicação.",
      "configurar endereços de redes diferentes, ligar os computadores ao switch e dispensar qualquer teste.",
      "conectar os computadores às portas de console do switch e atribuir o mesmo IP a todas as estações.",
      "instalar um servidor web antes de verificar a existência de enlaces físicos.",
      "atribuir um gateway inexistente e utilizar sua configuração como comprovação de que a rede está funcionando."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Primeiro o enlace Ethernet, depois um IP único na mesma rede e na mesma máscara, e por fim um teste. Redes diferentes sem roteador não se falam. A porta de console não transporta o tráfego dos usuários, e IP repetido conflita. Servidor web e gateway inventado não provam a rede local."
    ]
  },
  {
    n: 37,
    enunciado: "Em uma atividade, os estudantes analisam três situações: uma emissora de rádio transmitindo sua programação, dois usuários conversando por rádios comunicadores com alternância de fala e uma chamada telefônica que permite falar e ouvir simultaneamente.\n\nEssas situações representam, respectivamente:",
    opcoes: [
      "half-duplex, full-duplex e simplex.",
      "full-duplex, simplex e half-duplex.",
      "half-duplex, simplex e full-duplex.",
      "simplex, full-duplex e half-duplex.",
      "simplex, half-duplex e full-duplex."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "A emissora só transmite: simplex. O rádio comunicador alterna quem fala: half-duplex. O telefone deixa falar e ouvir ao mesmo tempo: full-duplex."
    ]
  },
  {
    n: 38,
    enunciado: "Uma equipe precisa selecionar meios para três situações: estações fixas em um escritório, interligação de prédios com forte interferência eletromagnética e acesso de dispositivos móveis.\n\nA associação mais adequada é:",
    opcoes: [
      "par trançado utilizando luz para estações fixas; fibra utilizando eletricidade para prédios; radiofrequência para mobilidade.",
      "par trançado com sinais elétricos para estações fixas; fibra óptica com sinais luminosos entre prédios; radiofrequência para acesso móvel, considerando interferências e cobertura.",
      "fibra óptica para mobilidade; radiofrequência imune a interferências para prédios; coaxial obrigatório para estações fixas.",
      "radiofrequência para estações fixas; par trançado para qualquer distância entre prédios; fibra óptica para mobilidade.",
      "qualquer meio produz o mesmo desempenho, independentemente da distância, dos equipamentos e do ambiente."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Estação fixa no escritório fica bem no par trançado. Entre prédios, com interferência e distância, a fibra leva luz e não sofre o campo eletromagnético. Notebook e celular pedem rádio, com cobertura e interferência no projeto. Os meios não são intercambiáveis, e o sinal de cada um não é o que as outras alternativas descrevem."
    ]
  },
  {
    n: 39,
    enunciado: "Uma estudante utiliza o WhatsApp para participar de um grupo de trabalho. Durante uma reunião, ela envia mensagens de texto, compartilha fotografias e realiza uma chamada de vídeo. Ao perder a conexão com a rede, as novas mensagens deixam de ser entregues imediatamente.\n\nO funcionamento desse aplicativo depende de uma infraestrutura de rede porque:",
    opcoes: [
      "a transmissão de fotografias exige uma rede diferente daquela utilizada para mensagens de texto.",
      "as chamadas de vídeo são processadas exclusivamente pelo chip do celular, dispensando servidores e enlaces de comunicação.",
      "a rede tem como única função armazenar as mensagens no dispositivo do remetente.",
      "todos os conteúdos são transmitidos como arquivos de texto, independentemente do formato original.",
      "textos, imagens, áudio, vídeo e dados de controle precisam ser transportados entre dispositivos e serviços envolvidos na comunicação."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "Texto, foto, áudio, vídeo e a sinalização da conversa precisam chegar aos aparelhos e aos serviços do aplicativo. Sem o transporte, a mensagem nova não sai. Texto e foto usam a mesma rede. A chamada não acontece só no chip. A rede não existe para guardar o arquivo no remetente, e cada conteúdo segue no próprio formato."
    ]
  },
  {
    n: 40,
    enunciado: "Um pacote atravessa diferentes roteadores até alcançar uma rede de destino. Durante o percurso, informações do cabeçalho IPv4 são utilizadas para encaminhá-lo e limitar sua permanência na rede.\n\nI. Os endereços de origem e destino identificam os endpoints IP do pacote.\nII. O endereço de destino é utilizado na consulta às informações de encaminhamento.\nIII. O TTL é reduzido durante o encaminhamento por roteadores; quando esgotado, o pacote é descartado, evitando sua circulação indefinida.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "I, II e III.",
      "I e III, apenas.",
      "I, apenas.",
      "II e III, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Origem e destino identificam as pontas IP. Cada roteador consulta a tabela com o destino. O TTL desce um a cada salto e, em zero, o pacote é descartado, o que corta um loop de roteamento."
    ]
  }
];
