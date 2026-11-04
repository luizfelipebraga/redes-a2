QUESTOES.push(
  {
    n: 41,
    enunciado: "Uma equipe compara topologias para compreender como a organização das conexões influencia a disponibilidade de uma rede.\n\nI. Em um barramento clássico, os dispositivos compartilham um meio principal, cuja ruptura pode comprometer a comunicação do segmento.\nII. Em um anel simples sem mecanismos de proteção, uma ruptura pode interromper a circulação prevista dos dados.\nIII. Em uma estrela, a falha de um cabo de acesso tende a afetar o dispositivo conectado por esse cabo, enquanto a falha do equipamento central pode afetar todos os dispositivos associados a ele.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, apenas.",
      "I e III, apenas.",
      "II e III, apenas.",
      "I, II e III.",
      "II, apenas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "No barramento, o cabo comum partido derruba o segmento. No anel simples, sem proteção, o corte interrompe a circulação. Na estrela, o cabo isola uma estação e a queda do equipamento central isola todas as que dependem dele."
    ]
  },
  {
    n: 42,
    enunciado: "Um técnico executa ping para um servidor e não recebe respostas. Antes de informar que o servidor está desligado, ele decide realizar verificações adicionais.\n\nI. Um firewall pode bloquear mensagens ICMP mesmo quando outros serviços do servidor estão disponíveis.\nII. Problemas de rota, perda de pacotes ou limitação de respostas também podem explicar o resultado.\nIII. A ausência de resposta ao ping comprova, isoladamente, que o servidor está sem energia.\n\nÉ correto o que se afirma em:",
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
      "Firewall pode descartar o ICMP e deixar HTTP ou SSH no ar. Rota ausente, perda e limite de respostas ICMP também explicam o silêncio. O ping, sozinho, não prova que o servidor está desligado."
    ]
  },
  {
    n: 43,
    enunciado: "Uma atividade solicita a representação de uma rede de laboratório, da interligação de unidades de uma instituição em uma cidade e da comunicação entre filiais em diferentes estados.\n\nA escolha dos equipamentos deve considerar que:",
    opcoes: [
      "a abrangência geográfica determina que todos os enlaces de uma WAN sejam sem fio.",
      "redes WAN são formadas exclusivamente por hubs, pois roteadores funcionam apenas em LANs.",
      "redes MAN dispensam endereçamento, já que todos os equipamentos estão na mesma cidade.",
      "um access point substitui qualquer infraestrutura de operadora na interligação entre estados.",
      "switches e access points podem atender ao acesso local, enquanto a interligação entre redes pode exigir roteadores, enlaces e serviços adequados à abrangência e aos requisitos do projeto."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "No laboratório, switch e access point dão o acesso. Ligar unidades na cidade e filiais em outros estados pede roteador, enlace e o serviço compatível com a distância. WAN não é só rádio, hub não substitui roteador, MAN também endereça, e um access point não cruza estados."
    ]
  },
  {
    n: 44,
    enunciado: "Um computador apresenta as seguintes informações:\n\nIPv4: 192.168.1.20\nmáscara: 255.255.255.0\ngateway padrão: 192.168.1.1\n\nA interpretação correta é:",
    opcoes: [
      "o IPv4 indica a taxa de transmissão, e a máscara representa a quantidade de portas do switch.",
      "o IPv4 identifica a interface na rede; a máscara permite determinar a sub-rede; o gateway é utilizado para alcançar destinos externos à sub-rede quando não há rota mais específica.",
      "a máscara identifica o servidor de páginas, enquanto o gateway define o nome do computador.",
      "o gateway deve ser igual ao endereço do computador para permitir a comunicação.",
      "qualquer comunicação com um equipamento da mesma sub-rede precisa passar obrigatoriamente pelo gateway."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "192.168.1.20 identifica a interface. A máscara /24 define a rede 192.168.1.0. O gateway 192.168.1.1 recebe o que sai dessa rede, se não houver rota mais específica. IP não é velocidade, máscara não conta portas, e o tráfego da mesma sub-rede vai direto pelo enlace, sem passar no gateway. O gateway também não pode repetir o IP do próprio computador."
    ]
  },
  {
    n: 45,
    enunciado: "Dois computadores da mesma sub-rede foram configurados manualmente com o endereço 192.168.10.30. Os usuários relatam falhas e comportamento intermitente na comunicação.\n\nA providência mais adequada é:",
    opcoes: [
      "atribuir endereços únicos e revisar o controle das configurações estáticas, reservas e faixas DHCP para prevenir novas duplicações.",
      "alterar somente o servidor DNS, pois conflitos de IP não afetam a comunicação local.",
      "substituir todos os switches por hubs, mantendo a duplicação.",
      "configurar um terceiro computador com o mesmo endereço para estabilizar a comunicação.",
      "manter os endereços e alterar apenas os nomes dos usuários."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Dois MACs disputando o mesmo IP fazem a tabela ARP oscilar, e a comunicação falha de forma intermitente. Cada máquina precisa de um endereço único, e o controle de estáticos, reservas e faixa do DHCP evita que o conflito volte. DNS, nome de usuário, hub e um terceiro IP igual não resolvem."
    ]
  },
  {
    n: 46,
    enunciado: "Dois equipamentos foram conectados por um cabo compatível, mas não conseguiram trocar informações corretamente. A equipe constatou que também era necessário verificar as configurações e as regras utilizadas na comunicação.\n\nI. O meio de transmissão transporta os sinais que representam os dados.\nII. Os protocolos estabelecem regras, formatos e procedimentos para a comunicação.\nIII. A presença de um cabo conectado garante compatibilidade entre quaisquer protocolos e configurações.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II e III, apenas.",
      "I, apenas.",
      "I, II e III.",
      "I e II, apenas.",
      "III, apenas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "O meio carrega o sinal. O protocolo define formato, ordem e procedimento. O cabo ligado não faz dois protocolos incompatíveis, nem dois endereçamentos incoerentes, passarem a funcionar."
    ]
  },
  {
    n: 47,
    enunciado: "Um estudante tenta conectar dois switches por fibra óptica, mas o enlace não é estabelecido. Ele verifica que a escolha do cabo foi realizada sem analisar as interfaces disponíveis.\n\nPara corrigir e validar a conexão, deve:",
    opcoes: [
      "substituir a fibra por um cabo de console, que transmite dados de usuários em alta velocidade.",
      "configurar o mesmo endereço IP nos dois dispositivos para forçar o estabelecimento físico do enlace.",
      "verificar portas, módulos, tipo de fibra, conectores, velocidade e alcance compatíveis, conferir o estado do enlace e testar a comunicação com endereçamento adequado.",
      "manter qualquer interface instalada, pois todos os módulos ópticos aceitam todos os tipos de fibra.",
      "alterar o servidor DNS, pois ele é responsável por acender os indicadores das interfaces ópticas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "O enlace óptico depende de porta ou módulo, tipo de fibra, conector, velocidade e alcance compatíveis dos dois lados. Depois se olha o estado do link e se testa com endereçamento coerente. Cabo de console não leva o tráfego dos usuários. IP igual não acende o link físico. Módulo óptico não aceita qualquer fibra, e DNS não acende LED."
    ]
  },
  {
    n: 48,
    enunciado: "Uma empresa possui vinte computadores de mesa, cinco notebooks, duas impressoras e um servidor. Os computadores fixos precisam de conexões estáveis, enquanto os notebooks devem circular entre as salas. Todos utilizarão serviços locais e acesso à Internet.\n\nA proposta mais adequada é:",
    opcoes: [
      "utilizar switches com portas suficientes e margem de expansão, cabeamento adequado para os dispositivos fixos, access points para os notebooks e roteador para a interligação com a Internet.",
      "utilizar somente repetidores, pois eles realizam endereçamento e encaminhamento entre redes.",
      "conectar o servidor diretamente a cada computador por um cabo exclusivo, dispensando equipamentos de interconexão.",
      "conectar todos os equipamentos a um hub, sem analisar portas disponíveis, tráfego ou segurança.",
      "fornecer endereços IP públicos fixos a todos os equipamentos como única medida de organização da rede."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Switch com folga de portas e cabo para o que é fixo, access point para o notebook que muda de sala, e roteador para a Internet. Repetidor não endereça nem roteia. Um cabo do servidor até cada máquina não escala. Hub sem análise ignora tráfego e segurança. IP público em todo equipamento não organiza a rede interna."
    ]
  },
  {
    n: 49,
    enunciado: "Um laboratório possui quinze computadores conectados a um único switch, formando uma topologia estrela. Durante o uso, o cabo de uma estação apresenta defeito. Em outro momento, o switch deixa de funcionar.\n\nConsiderando uma infraestrutura sem redundância, espera-se que:",
    opcoes: [
      "os dois problemas sejam resolvidos apenas alterando os nomes dos computadores.",
      "o defeito no cabo afete principalmente a estação correspondente, enquanto a falha do switch comprometa a comunicação dos dispositivos conectados a ele.",
      "o computador com cabo defeituoso assuma automaticamente a função do switch.",
      "o defeito em qualquer cabo interrompa obrigatoriamente todos os computadores, mas a falha do switch não produza efeitos.",
      "a falha do switch interrompa apenas o acesso à impressora, mantendo todas as demais comunicações."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Na estrela sem redundância, o cabo ruim isola a estação daquele cabo. O switch é o ponto comum: se ele para, param as comunicações que dependem dele. Nome de máquina não corrige cabo, e um PC não assume o papel do switch."
    ]
  },
  {
    n: 50,
    enunciado: "Dois computadores da mesma VLAN comunicam-se por um switch de camada 2. Para compreender o processo, um estudante analisa as interfaces, os endereços MAC e o campo FCS dos quadros Ethernet.\n\nI. A interface de rede participa do envio e do recebimento de quadros que utilizam endereços MAC.\nII. O switch pode aprender o MAC de origem e utilizar sua tabela para decidir o encaminhamento.\nIII. O FCS permite detectar determinados erros de transmissão, mas não realiza, por si só, a correção dos dados nem garante sua entrega.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II e III, apenas.",
      "I, apenas.",
      "II, apenas.",
      "I e III, apenas.",
      "I, II e III."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "A placa envia e recebe quadros endereçados por MAC. O switch grava o MAC de origem com a porta e consulta essa tabela para encaminhar. O FCS detecta erro e o quadro ruim é descartado. Ele não corrige o conteúdo nem garante que a informação chegue. Retransmissão, quando existe, fica em camada superior."
    ]
  },
  {
    n: 51,
    enunciado: "Uma empresa utiliza roteamento dinâmico e espera manter a comunicação após uma falha de enlace. Entretanto, a equipe identifica que determinados destinos continuam indisponíveis.\n\nI. Rotas estáticas são configuradas administrativamente, enquanto protocolos dinâmicos podem trocar informações e atualizar rotas.\nII. Convergência corresponde ao processo pelo qual as informações de roteamento se ajustam às condições da rede após mudanças.\nIII. A existência de roteamento dinâmico não cria enlaces alternativos; a recuperação depende da topologia, das configurações e da disponibilidade de caminhos válidos.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III.",
      "I e III, apenas.",
      "II, apenas.",
      "I, apenas.",
      "II e III, apenas."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Rota estática é digitada. Protocolo dinâmico troca informação e recalcula. Convergência é esse ajuste depois da mudança. O protocolo não inventa um cabo que não existe: se não houver outro caminho válido, ou se a configuração não anunciar a rede, o destino continua fora."
    ]
  },
  {
    n: 52,
    enunciado: "Uma aplicação de comunicação em tempo real utiliza UDP e implementa mecanismos próprios para lidar com parte das perdas. A equipe precisa explicar as características do protocolo.\n\nI. O UDP transporta datagramas sem estabelecer previamente uma conexão como a do TCP.\nII. As portas ajudam a identificar os serviços ou processos envolvidos na comunicação.\nIII. O próprio UDP garante retransmissão, ordenação e entrega de todos os datagramas.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "I, II e III.",
      "II e III, apenas.",
      "I e II, apenas.",
      "I, apenas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "O UDP manda o datagrama sem o aperto de mãos do TCP. As portas apontam o processo nas duas pontas. Retransmissão, ordem e entrega garantida não fazem parte do UDP. Por isso a aplicação de tempo real trata uma parte das perdas por conta própria."
    ]
  },
  {
    n: 53,
    enunciado: "Uma empresa contratou um acesso à Internet com elevada taxa de transmissão. Mesmo assim, durante reuniões virtuais, os participantes percebem demora entre a fala de uma pessoa e sua reprodução para os demais. O problema permanece mesmo quando não há grandes transferências de arquivos.\n\nA explicação mais adequada é que:",
    opcoes: [
      "a latência corresponde à quantidade máxima de arquivos que uma conexão armazena.",
      "conexões com elevada taxa de transmissão eliminam atrasos de propagação e processamento.",
      "a taxa de transmissão determina, isoladamente, o tempo de deslocamento de cada pacote.",
      "a latência representa um atraso na comunicação, influenciado por fatores como distância, filas e processamento, prejudicando a interação em tempo real.",
      "o atraso indica necessariamente que os computadores utilizam endereços IP duplicados."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Taxa alta diz quanto cabe por segundo. Latência é o tempo até a fala chegar, e ela soma propagação, fila e processamento. Mais megabits não apagam a distância nem o tempo de codificar o áudio. IP duplicado não é a explicação desse atraso constante."
    ]
  },
  {
    n: 54,
    enunciado: "Uma empresa deseja utilizar endereços privados em sua rede interna. A equipe revisa os blocos reservados e sua relação com a comunicação pela Internet.\n\nI. Os blocos privados IPv4 incluem 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16.\nII. Esses endereços podem ser reutilizados em redes privadas distintas, desde que se considerem possíveis conflitos quando essas redes forem interligadas.\nIII. Endereços privados são globalmente únicos e diretamente roteáveis na Internet pública.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I e II, apenas.",
      "I, apenas.",
      "II e III, apenas.",
      "I, II e III.",
      "II, apenas."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "A RFC 1918 reserva 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Cada rede interna pode reutilizá-los, e o conflito aparece quando duas dessas redes se ligam com a mesma faixa. Eles não são únicos no mundo e não são roteados na Internet pública. A saída usa tradução para um endereço público."
    ]
  },
  {
    n: 55,
    enunciado: "Um serviço IPv6 precisa oferecer comunicação individual, distribuição para um grupo e atendimento por uma entre várias instâncias que compartilham um endereço.\n\nA associação correta é:",
    opcoes: [
      "anycast entrega simultaneamente a todas as interfaces, exigindo confirmação de cada uma.",
      "unicast entrega a todas as interfaces; multicast entrega a uma; anycast entrega obrigatoriamente a todas.",
      "unicast e multicast possuem o mesmo comportamento, diferenciando-se apenas pela quantidade de dígitos do endereço.",
      "unicast destina o pacote a uma interface; multicast, às interfaces participantes do grupo no escopo correspondente; anycast, a uma das interfaces que compartilham o endereço, selecionada conforme o roteamento.",
      "multicast seleciona sempre o equipamento geograficamente mais próximo, enquanto anycast utiliza broadcast."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Unicast vai a uma interface. Multicast vai às interfaces inscritas no grupo, dentro do escopo. Anycast é o mesmo endereço em várias interfaces, e o roteamento entrega a uma delas. O IPv6 não tem broadcast, e não é o multicast que escolhe a instância mais próxima pelo roteamento."
    ]
  },
  {
    n: 56,
    enunciado: "Um endereço foi registrado em um relatório na forma:\n\n10101100.00010000.00000101.00001010\n\nPara configurar uma estação, o técnico precisa convertê-lo para a notação decimal pontuada.\n\nO endereço correspondente é:",
    opcoes: [
      "172.32.5.10.",
      "172.16.10.5.",
      "192.16.5.10.",
      "172.16.5.10.",
      "168.16.5.10."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "10101100 é 172, 00010000 é 16, 00000101 é 5 e 00001010 é 10. O resultado é 172.16.5.10. As outras trocam um octeto ou invertem os dois últimos."
    ]
  },
  {
    n: 57,
    enunciado: "Ao estudar a evolução das redes, uma turma identificou que a Internet resultou de pesquisas, experimentos e iniciativas de interconexão desenvolvidos ao longo de décadas. Entre os marcos desse processo estão a ARPANET e a adoção do conjunto de protocolos TCP/IP.\n\nI. A ARPANET contribuiu para o desenvolvimento e a experimentação de redes baseadas em comutação de pacotes.\nII. A adoção do TCP/IP favoreceu a interconexão de redes com características diferentes.\nIII. A ARPANET surgiu como um serviço de navegação em páginas da World Wide Web.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "I e III, apenas.",
      "I e II, apenas.",
      "III, apenas.",
      "I, apenas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "A ARPANET experimentou a comutação de pacotes bem antes da Web. O TCP/IP, adotado nela em 1983, permitiu ligar redes heterogêneas. A Web surgiu por volta de 1989–1991, cerca de vinte anos depois da ARPANET."
    ]
  },
  {
    n: 58,
    enunciado: "Um técnico precisa identificar três componentes: o que conecta um computador à rede, o que adapta a comunicação ao meio de acesso do provedor e o que regenera sinais para ampliar o alcance de um enlace.\n\nEssas funções correspondem, respectivamente, a:",
    opcoes: [
      "placa de rede, modem e repetidor.",
      "modem, repetidor e placa de rede.",
      "roteador, servidor DHCP e impressora.",
      "placa de rede, switch e servidor DNS.",
      "repetidor, placa de rede e modem."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "A placa liga o computador à rede. O modem adapta o sinal ao meio do provedor. O repetidor regenera o sinal para estender o alcance do enlace. A ordem do enunciado é placa, modem e repetidor."
    ]
  },
  {
    n: 59,
    enunciado: "Um relógio inteligente envia ao celular dados sobre passos e frequência cardíaca por Bluetooth. No mesmo ambiente, uma calculadora realiza operações utilizando apenas seus componentes internos, sem conexão com outros dispositivos.\n\nA análise correta dessas situações é:",
    opcoes: [
      "o relógio e o celular somente formariam uma rede se utilizassem acesso à Internet.",
      "os dois casos representam redes porque qualquer equipamento eletrônico constitui uma rede independente.",
      "o relógio não participa de comunicação em rede porque utiliza uma conexão de curto alcance.",
      "o relógio e o celular realizam comunicação em rede, pois trocam dados por um enlace e utilizam protocolos de comunicação.",
      "existe rede somente na calculadora, pois ela processa dados digitais."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Relógio e celular trocam dados por um enlace Bluetooth, com protocolo. Isso é rede, ainda que de curtíssimo alcance e sem Internet. A calculadora só calcula dentro de si e não se comunica com outro dispositivo."
    ]
  },
  {
    n: 60,
    enunciado: "Uma equipe utiliza o modelo OSI como referência para organizar a investigação de uma falha. Inicialmente, verifica sinais e cabos; depois, analisa quadros, endereços e serviços.\n\nI. A camada Física trata da transmissão de bits; a de Enlace organiza quadros e realiza funções de comunicação no enlace.\nII. A camada de Rede envolve endereçamento lógico e encaminhamento; a de Transporte oferece comunicação entre processos, com serviços que variam conforme o protocolo.\nIII. A camada de Sessão trata do controle de sessões; a de Apresentação envolve a representação dos dados; a de Aplicação oferece serviços de comunicação utilizados pelas aplicações.\nIV. A divisão em camadas determina que qualquer falha seja necessariamente física, dispensando a análise das demais camadas.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I e III, apenas.",
      "I, II, III e IV.",
      "I e IV, apenas.",
      "I, II e III, apenas.",
      "II e IV, apenas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "Física transmite bits e Enlace organiza o quadro. Rede endereça e encaminha; Transporte liga processos, com serviço diferente conforme TCP ou UDP. Sessão, Apresentação e Aplicação fecham o modelo como a afirmativa descreve. A divisão em camadas organiza a busca. Ela não declara que toda falha é física."
    ]
  },
  {
    n: 61,
    enunciado: "Uma empresa possui acesso à Internet de 500 Mbps. Um computador com interface Gigabit Ethernet está conectado a uma porta Fast Ethernet de um switch, e esse caminho não apresenta outras limitações relevantes.\n\nA análise correta é:",
    opcoes: [
      "a interface Gigabit limita a comunicação a 10 Mbps.",
      "a capacidade da porta é irrelevante, pois o cabo determina sozinho a taxa de comunicação.",
      "o acesso de 500 Mbps garante que o computador receba essa taxa, independentemente do switch.",
      "a porta Fast Ethernet limita esse trecho a uma taxa nominal de 100 Mbps; utilizar portas Gigabit nos enlaces envolvidos pode reduzir esse gargalo.",
      "alterar o nome do computador permite que a porta Fast Ethernet opere a 500 Mbps."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "A placa Gigabit e a porta Fast Ethernet negociam 100 Mbps, que é o teto comum. Os 500 Mbps da operadora não atravessam esse trecho. Trocar as portas do caminho para Gigabit tira esse limite. O nome do computador não altera a velocidade da porta."
    ]
  },
  {
    n: 62,
    enunciado: "Uma indústria instalará pontos de rede próximos a motores e equipamentos que produzem interferências eletromagnéticas. A equipe compara cabos de par trançado sem blindagem e cabos blindados.\n\nA avaliação tecnicamente adequada é:",
    opcoes: [
      "a blindagem pode reduzir a influência de interferências, desde que o sistema blindado seja instalado e equipotencializado adequadamente.",
      "cabos UTP utilizam luz, enquanto cabos STP utilizam sinais elétricos.",
      "o UTP possui blindagem metálica individual em todos os pares, diferentemente do STP.",
      "o STP deve ser escolhido apenas quando a rede não utilizar switches.",
      "a blindagem do STP elimina a necessidade de respeitar distâncias e práticas de instalação."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "A blindagem reduz a interferência se o canal inteiro for blindado e estiver aterrado e equipotencializado. UTP e STP conduzem eletricidade. UTP é o cabo sem blindagem. A escolha não depende de haver switch, e o limite de distância e o cuidado na instalação continuam valendo."
    ]
  },
  {
    n: 63,
    enunciado: "Uma organização deseja conectar computadores cabeados, disponibilizar Wi-Fi para notebooks e permitir acesso à Internet. Para isso, a equipe considera a utilização de switches de camada 2, roteador e access points.\n\nI. O switch de camada 2 encaminha quadros na rede local utilizando informações como endereços MAC.\nII. O roteador encaminha pacotes entre redes IP.\nIII. O access point permite associar dispositivos sem fio à infraestrutura da rede.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III.",
      "II e III, apenas.",
      "I e III, apenas.",
      "II, apenas.",
      "I, apenas."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "O switch de camada 2 encaminha pelo MAC. O roteador encaminha entre redes IP e é o caminho para a Internet. O access point associa o notebook sem fio à infraestrutura."
    ]
  },
  {
    n: 64,
    enunciado: "Um projetista precisa escolher a fibra para enlaces com diferentes distâncias e taxas de transmissão. Ele considera o tipo de propagação da luz e a compatibilidade dos transceptores.\n\nA análise correta é:",
    opcoes: [
      "um mesmo transceptor funciona obrigatoriamente com qualquer fibra e em qualquer distância.",
      "a monomodo conduz um modo espacial na faixa de operação prevista e é comum em maiores distâncias; a multimodo admite vários modos, e sua escolha depende de alcance, taxa, categoria da fibra e transceptores.",
      "a monomodo utiliza sinais elétricos, enquanto a multimodo utiliza sinais luminosos.",
      "a multimodo oferece alcance ilimitado porque todos os modos chegam simultaneamente ao receptor.",
      "a escolha entre as duas depende apenas da cor do revestimento, sem relação com os equipamentos."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "A monomodo conduz um modo e alcança distâncias longas. A multimodo conduz vários modos, e a dispersão entre eles limita o alcance conforme categoria, taxa e transceptor. As duas levam luz. Os modos da multimodo não chegam juntos. A cor da capa só ajuda a identificar o cabo."
    ]
  },
  {
    n: 65,
    enunciado: "Após uma reforma, uma rede passou a apresentar erros e redução de desempenho. A inspeção identificou pares excessivamente destrançados nas terminações e cabos instalados próximos a fontes de interferência.\n\nI. O trançamento dos pares contribui para reduzir efeitos de interferências e diafonia.\nII. A blindagem, quando corretamente instalada, pode ajudar a reduzir a influência de interferências eletromagnéticas externas.\nIII. Terminações inadequadas, curvaturas excessivas e práticas incorretas de instalação podem comprometer o desempenho do enlace.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "I, apenas.",
      "I, II e III.",
      "I e II, apenas.",
      "II e III, apenas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "O trançado cancela interferência e reduz diafonia, por isso a terminação não pode desfazer o par além do limite. Blindagem bem instalada ajuda contra fonte externa. Par aberto demais, curva fechada e cabo junto de interferência degradam o enlace, como na reforma."
    ]
  },
  {
    n: 66,
    enunciado: "Uma escola pretende reorganizar sua infraestrutura para facilitar a identificação de pontos, a manutenção e a expansão futura. O projeto prevê documentação, organização dos distribuidores e testes dos enlaces.\n\nI. O cabeamento estruturado adota uma organização planejada para atender serviços e facilitar alterações.\nII. A identificação de cabos, portas e tomadas ajuda a localizar conexões e investigar falhas.\nIII. Um teste de continuidade, isoladamente, comprova todos os parâmetros de desempenho exigidos para qualquer categoria de cabeamento.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II, apenas.",
      "I e II, apenas.",
      "I, apenas.",
      "I, II e III.",
      "II e III, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Cabeamento estruturado organiza o prédio para servir várias aplicações e para mudar ponto sem refazer tudo. Etiqueta em cabo, porta e tomada é o que permite achar a falha. Continuidade só mostra se o condutor liga. Certificar a categoria exige atenuação, diafonia, perda de retorno e comprimento."
    ]
  },
  {
    n: 67,
    enunciado: "Uma organização deseja que sua impressora mantenha um endereço previsível, enquanto os notebooks dos usuários devem receber configurações automaticamente.\n\nI. Um endereço configurado estaticamente deve ser administrado para evitar sobreposição e conflitos.\nII. O DHCP pode fornecer automaticamente endereço IP e parâmetros como máscara, gateway e servidores DNS.\nIII. Uma reserva DHCP pode manter um endereço previsível para a impressora, enquanto concessões dinâmicas podem atender aos notebooks.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, apenas.",
      "II e III, apenas.",
      "I, II e III.",
      "I e III, apenas.",
      "II, apenas."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "IP fixo precisa estar fora do pool e documentado, senão o DHCP o entrega a outro. O DHCP entrega IP, máscara, gateway e DNS. A reserva amarra o MAC da impressora a um endereço estável, e os notebooks seguem no pool dinâmico."
    ]
  },
  {
    n: 68,
    enunciado: "Uma aplicação de transferência de arquivos e outra de comunicação em tempo real possuem requisitos distintos. A equipe compara TCP e UDP antes de selecionar os protocolos de transporte.\n\nI. O TCP utiliza estabelecimento de conexão e oferece mecanismos de ordenação, retransmissão e controles de fluxo e congestionamento.\nII. O UDP não oferece, por si só, esses mecanismos de confiabilidade e controle, embora a aplicação possa implementar recursos adicionais.\nIII. O UDP exige que os datagramas sejam entregues em ordem antes de disponibilizar qualquer dado à aplicação.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, apenas.",
      "III, apenas.",
      "I, II e III.",
      "II, apenas.",
      "I e II, apenas."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "O TCP abre a conexão, ordena, retransmite e controla fluxo e congestionamento. Cabe bem na transferência de arquivo. O UDP não faz isso. A aplicação pode acrescentar o que precisar. Ele entrega o datagrama à aplicação na ordem em que chega, sem esperar uma sequência."
    ]
  },
  {
    n: 69,
    enunciado: "Durante o inventário de uma rede, um técnico precisa classificar os equipamentos conforme sua participação na comunicação. Foram identificados um computador, uma impressora de rede, um servidor, um switch e um roteador.\n\nA classificação correta é:",
    opcoes: [
      "apenas o computador é final; todos os demais são intermediários.",
      "computador e roteador são finais; impressora, servidor e switch são intermediários.",
      "computador, impressora e switch são finais; servidor e roteador são intermediários.",
      "computador e switch são finais; impressora, servidor e roteador são intermediários.",
      "computador, impressora e servidor são finais; switch e roteador são intermediários."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "Computador, impressora e servidor são as pontas: é neles que a informação nasce ou termina. Switch e roteador ficam no caminho e encaminham."
    ]
  },
  {
    n: 70,
    enunciado: "Ao analisar um pacote IPv6, um estudante identifica os campos Classe de Tráfego, Rótulo de Fluxo, Próximo Cabeçalho e Limite de Saltos.\n\nI. A Classe de Tráfego pode ser utilizada para classificação e tratamento do tráfego, enquanto o Rótulo de Fluxo auxilia na identificação de fluxos.\nII. O Próximo Cabeçalho identifica o cabeçalho que vem a seguir, que pode ser de extensão ou de um protocolo de camada superior.\nIII. O Limite de Saltos é reduzido a cada encaminhamento por roteador e contribui para impedir a circulação indefinida do pacote.\nIV. O Rótulo de Fluxo substitui os endereços IPv6 de origem e destino.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III, apenas.",
      "I e IV, apenas.",
      "II e IV, apenas.",
      "I e III, apenas.",
      "I, II, III e IV."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "Classe de Tráfego serve à classificação e ao tratamento diferenciado. O rótulo marca um fluxo. Próximo Cabeçalho diz se vem extensão ou o protocolo de cima, como TCP, UDP ou ICMPv6. Limite de Saltos desce em cada roteador, no papel do TTL. O rótulo não substitui os endereços de 128 bits, que continuam no cabeçalho."
    ]
  },
  {
    n: 71,
    enunciado: "Uma indústria utiliza câmeras para identificar falhas em uma linha de produção. Inicialmente, todas as imagens eram enviadas para um centro de processamento remoto. Após uma revisão do projeto, parte da análise passou a ocorrer em equipamentos instalados próximos às máquinas.\n\nEssa mudança caracteriza uma aplicação de Edge Computing porque:",
    opcoes: [
      "elimina a necessidade de comunicação entre dispositivos da indústria.",
      "substitui o processamento digital pela transmissão analógica de imagens.",
      "aproxima parte do processamento da origem dos dados, podendo reduzir o tempo de resposta e o tráfego enviado à nuvem.",
      "garante ausência de atrasos, independentemente dos equipamentos e algoritmos utilizados.",
      "transfere obrigatoriamente todo o armazenamento para um serviço de nuvem pública."
    ],
    certa: 2,
    comentario: [
      "A leitura que se sustenta é a terceira alternativa.",
      "Edge computing põe parte do processamento junto da câmera e da máquina. A falha pode ser apontada com menos ida e volta, e sobe para a nuvem só o que interessa. Os dispositivos continuam se comunicando, o processamento segue digital, o atraso não desaparece, e o armazenamento não vai todo para a nuvem pública."
    ]
  },
  {
    n: 72,
    enunciado: "Um computador está ligado e possui um cabo conectado à placa de rede. Apesar disso, o usuário não consegue acessar um sistema hospedado na Internet.\n\nI. A conexão física não comprova que o computador possui endereçamento e roteamento adequados.\nII. Falhas de DNS, gateway ou disponibilidade do serviço remoto podem impedir o acesso.\nIII. A presença do cabo conectado comprova que todas as camadas da comunicação funcionam corretamente.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "I, II e III.",
      "I e II, apenas.",
      "II, apenas.",
      "II e III, apenas.",
      "I, apenas."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Cabo na placa não prova IP, máscara, gateway nem rota. O nome pode não resolver, o gateway pode estar errado e o serviço remoto pode estar fora. O cabo não certifica as camadas de cima."
    ]
  },
  {
    n: 73,
    enunciado: "Um professor apresenta os endereços 10.0.0.15, 172.16.10.5, 192.168.1.20 e 200.10.20.30 para revisar o endereçamento por classes e discutir suas limitações na análise de redes atuais.\n\nA classificação histórica e a observação corretas são:",
    opcoes: [
      "A, A, B e C; o primeiro octeto determina sempre a máscara utilizada atualmente.",
      "A, B, C e C; a análise da rede efetivamente utilizada exige considerar o prefixo ou a máscara, conforme o endereçamento sem classes.",
      "B, B, C e C; endereços privados não podem receber prefixos diferentes.",
      "A, B, D e C; todos os endereços apresentados são públicos.",
      "A, C, C e D; a classe elimina a necessidade de conhecer a máscara."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "Pelo primeiro octeto, 10 é classe A, 172 é classe B, 192 e 200 são classe C. Hoje a rede em uso é a do prefixo ou da máscara, não a da classe antiga. O primeiro octeto não fixa a máscara atual, e os três primeiros endereços são privados."
    ]
  },
  {
    n: 74,
    enunciado: "Um usuário consegue acessar um serviço quando informa seu endereço IP, mas não consegue acessá-lo pelo nome. Os testes indicam que existe conectividade IP com o servidor.\n\nA investigação deve priorizar:",
    opcoes: [
      "o DNS e os mecanismos de resolução de nomes, que associam nomes a endereços; o gateway exerce a função de encaminhar tráfego para outras redes.",
      "o gateway, cuja função principal é armazenar os nomes de todos os sites.",
      "a categoria do cabo, pois ela determina a tradução dos nomes dos serviços.",
      "a substituição do switch, sem verificar as configurações de resolução.",
      "o endereço MAC do monitor utilizado pelo usuário."
    ],
    certa: 0,
    comentario: [
      "A leitura que se sustenta é a primeira alternativa.",
      "O acesso pelo IP já prova o caminho. O que falta é a resolução do nome: servidores DNS, cache e o arquivo de hosts. O gateway encaminha para outras redes e não guarda o cadastro de nomes. Cabo, switch e o monitor não traduzem nome em endereço."
    ]
  },
  {
    n: 75,
    enunciado: "Uma estação utiliza o endereço 192.168.10.25/24. O administrador precisa registrar a máscara, o endereço da rede, o broadcast e a faixa convencional de endereços disponíveis para hosts nessa sub-rede.\n\nO registro correto é:",
    opcoes: [
      "máscara 255.255.255.128; rede 192.168.10.0; broadcast 192.168.10.127; hosts 192.168.10.1 a 192.168.10.126.",
      "máscara 255.255.255.0; rede 192.168.10.1; broadcast 192.168.10.254; hosts 192.168.10.0 a 192.168.10.255.",
      "máscara 255.255.255.0; rede 192.168.10.25; broadcast 192.168.10.255; hosts 192.168.10.26 a 192.168.10.254.",
      "máscara 255.255.0.0; rede 192.168.0.0; broadcast 192.168.255.255; hosts 192.168.0.1 a 192.168.255.254.",
      "máscara 255.255.255.0; rede 192.168.10.0; broadcast 192.168.10.255; hosts 192.168.10.1 a 192.168.10.254."
    ],
    certa: 4,
    comentario: [
      "A leitura que se sustenta é a quinta alternativa.",
      "O /24 usa máscara 255.255.255.0. A rede é 192.168.10.0, o broadcast é 192.168.10.255 e os hosts vão de .1 a .254. A primeira linha é um /25. A segunda inclui rede e broadcast na faixa de hosts. 192.168.10.25 é o endereço da estação, não o da rede. A quarta linha é um /16."
    ]
  },
  {
    n: 76,
    enunciado: "Uma empresa deseja adquirir equipamentos de fabricantes diferentes. Para reduzir problemas de compatibilidade, o setor de tecnologia verifica os padrões utilizados pelas interfaces de rede.\n\nI. A padronização favorece a interoperabilidade entre equipamentos que implementam especificações compatíveis.\nII. A família IEEE 802.3 está associada à Ethernet.\nIII. A família IEEE 802.11 está associada às redes locais sem fio, utilizadas nas tecnologias Wi-Fi.\n\nÉ correto o que se afirma em:",
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
      "Padrão comum é o que permite placa e switch de fabricantes diferentes se falarem. IEEE 802.3 é a família Ethernet. IEEE 802.11 é a família das redes locais sem fio usadas pelo Wi-Fi."
    ]
  },
  {
    n: 77,
    enunciado: "Ao comparar equipamentos, um estudante encontra as expressões Ethernet de 10 Mbps, Fast Ethernet, Gigabit Ethernet e 10 Gigabit Ethernet. Ele também observa que programas de transferência podem apresentar valores em MB/s.\n\nA interpretação correta é:",
    opcoes: [
      "uma conexão de 100 Mbps transfere necessariamente arquivos a 100 MB/s.",
      "as taxas nominais são 10, 100, 1.000 e 10.000 Mbps, respectivamente; Mbps mede megabits por segundo, enquanto MB/s mede megabytes por segundo, com oito bits por byte.",
      "Gigabit Ethernet corresponde a 100 Mbps, e Mbps e MB/s representam a mesma unidade.",
      "10 Gigabit Ethernet corresponde a 10 MB/s, independentemente dos protocolos utilizados.",
      "Fast Ethernet corresponde a 1.000 Mbps, e um byte equivale a dez bits."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      "As taxas nominais, nessa ordem, são 10, 100, 1.000 e 10.000 Mbps. Mbps conta megabits por segundo e MB/s conta megabytes. Um byte tem oito bits, então 100 Mbps ficam em torno de 12,5 MB/s antes do overhead. Fast Ethernet é 100 Mbps, não 1.000."
    ]
  },
  {
    n: 78,
    enunciado: "Um administrador encontra os endereços :: e ::1 em registros de configuração e testes. Embora semelhantes, eles possuem finalidades diferentes.\n\nA interpretação correta é:",
    opcoes: [
      ":: é o broadcast do IPv6; ::1 identifica todos os roteadores do enlace.",
      ":: é o endereço não especificado, utilizado em situações em que ainda não há um endereço apropriado de origem; ::1 é o loopback, utilizado para comunicação com o próprio nó.",
      ":: é o loopback; ::1 é o endereço não especificado.",
      "os dois endereços podem ser atribuídos a computadores diferentes para comunicação normal entre redes.",
      "ambos representam endereços públicos de servidores DNS."
    ],
    certa: 1,
    comentario: [
      "A leitura que se sustenta é a segunda alternativa.",
      ":: é o endereço não especificado, usado quando ainda não há origem válida, no papel do 0.0.0.0. ::1 é o loopback, o próprio nó, no papel do 127.0.0.1. O IPv6 não tem broadcast. O grupo de todos os roteadores do enlace é ff02::2. Nenhum dos dois serve como endereço público de um host."
    ]
  },
  {
    n: 79,
    enunciado: "Durante uma manutenção, um técnico observa que um cabo possui condutor central, material isolante, uma camada condutora externa e revestimento de proteção. O equipamento utiliza cabo coaxial.\n\nA descrição correta da estrutura e de sua função é:",
    opcoes: [
      "o condutor central funciona como blindagem, enquanto o revestimento plástico transporta o sinal.",
      "o dielétrico deve conduzir corrente entre o núcleo e a blindagem para permitir a transmissão.",
      "o cabo coaxial possui exclusivamente componentes ópticos, responsáveis por conduzir pulsos luminosos.",
      "o condutor central transporta o sinal; o dielétrico separa os condutores; a blindagem participa do circuito e ajuda a proteger o sinal contra interferências externas.",
      "a camada metálica externa tem apenas finalidade estética e não interfere nas características elétricas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "O núcleo leva o sinal, o dielétrico isola o núcleo da malha e define a geometria do cabo, e a blindagem fecha o circuito e barra interferência. A capa externa só protege. O dielétrico não pode conduzir, senão há curto. Coaxial não é fibra, e a malha não é enfeite."
    ]
  },
  {
    n: 80,
    enunciado: "Uma empresa identificou tentativas de acesso indevido a seus sistemas e decidiu incorporar medidas de proteção ao planejamento da rede. A equipe propôs o uso de firewall, VPN e autenticação multifator.\n\nI. O firewall pode controlar o tráfego conforme regras de segurança.\nII. Uma VPN pode estabelecer um túnel protegido para a comunicação sobre uma infraestrutura compartilhada.\nIII. A autenticação multifator combina fatores de categorias diferentes, como senha e posse de um dispositivo autenticador.\n\nÉ correto o que se afirma em:",
    opcoes: [
      "II e III, apenas.",
      "I, apenas.",
      "III, apenas.",
      "I, II e III.",
      "I e II, apenas."
    ],
    certa: 3,
    comentario: [
      "A leitura que se sustenta é a quarta alternativa.",
      "O firewall aplica regras sobre o tráfego. A VPN abre um túnel protegido em cima de uma rede compartilhada, como a Internet. A autenticação multifator junta categorias diferentes: algo que a pessoa sabe, como a senha, e algo que ela tem, como o dispositivo autenticador."
    ]
  }
);
