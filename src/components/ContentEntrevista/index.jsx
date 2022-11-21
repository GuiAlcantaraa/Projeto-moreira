import './styles.scss'

export function ContentEntrevista() {
    return (
        <>
            <h1 className='title'><u>Entrevista com Gestor</u></h1> <br />
            <div className='photoGestor'>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE_Svf_iOkfxQ/profile-displayphoto-shrink_100_100/0/1540421462591?e=1674691200&v=beta&t=stoOgbZQ6bgMbvt3wx0At19fbkuVCW_j_kA-QiSUEh8" alt="" />
            </div>
            <p className='gestorDesc'>Giovani Silva | Coordenador de desenvolvimento de sistemas</p><br /><br />

            <div className='content'>
                <h2><u>Como você definiria a gestão de TI?</u></h2> <br />
                <p>Vejo como “resumidamente”, atuar no gerenciamento de sistemas (softwares), de equipamentos (hardwares) e
                    principalmente de pessoas (profissionais que atual operacionalmente na área).
                    O principal foco é a melhoria e a otimização dos processos e procedimentos que envolvem a área de tecnologia
                    da informação bem como o que tange direta/indiretamente os clientes internos.
                </p> <br />

                <h2><u>Quais as principais dificuldades no cargo de Gestor?</u></h2> <br />
                <p>Neste momento, vejo pelo menos 4 grandes desafios que podem ser elencados:<br /><br />
                    <li className='topicos'>Proteger a rede e os dados contra ameaças;</li>
                    <li className='topicos'>Manter a organização do setor alinhada as necessidades do negócio da empresa;</li>
                    <li className='topicos'>Acompanhar a rápida evolução das tecnologias;</li>
                    <li className='topicos'>Manter sistemas e principalmente funcionários “antigos” (experientes);</li>
                </p> <br />

                <h2><u>Como você se organiza para gerir sua equipe:</u></h2> <br />

                <div className='topicos'>
                    <ul>
                        <li>
                            Separação de funções:
                        </li>
                        <p>Trabalhamos de forma “genérica” de forma que os colaboradores tenham chance de participar/atuar
                            em mais de uma função, via metodologia ágil onde os times são multidisciplinares.
                        </p>

                        <li>
                            Separando tempo/cronograma das atividades: <br />
                        </li>

                        <p>Os projetos/atividades são registrados em “backlog” (lista do que tem de ser feito) e
                            são priorizados de acordo com o encontro de “planning sprint” realizado com as áreas de negócio envolvidas.
                            São apresentadas as estimativas de esforços e dentro do que foi priorizado, trabalha-se em sprints de 15 dias
                            (em média) com objetivo mínimo de termos um MVP para ser apresentado e entregue para os solicitantes.
                        </p>
                        <li>
                            Organização de feedback:
                        </li>
                        <p>Os feedbacks são dados de forma “indireta” todos os dias e também em momentos oportunos (que o propiciem),
                            e de maneira “direta” formalmente a cada 6 meses (em sala fechada, com horário agendado e duração média de 60min a 90min).
                        </p>
                    </ul>
                </div><br />

                <h2><u>Qual sua trajetória profissional até chegar no cargo de Gestor?</u></h2> <br />
                <p>Iniciei na Zema em 2003, como prestador de serviços na área de desenvolvimento, 1 ano depois fui contratado para a
                    mesma função (Dev Jr.), em 3 anos passei para Dev PL. e depois de mais 4 anos me tornei Dev SR.
                    Onde permaneci por cerca de 5 anos. Em 2015 fui promovido a coordenação de desenvolvimento, e 2 anos
                    depois assumi também a área/equipe de banco/DBA,s onde estou até hoje
                </p> <br />

                <h2><u>Você encontra desafios diários na empresa? Como se organiza para resolvê-los?</u></h2> <br />
                <p>Sim. A gestão do tempo acaba sendo o principal ponto de controle para que se tenha uma melhor organização para atender
                    e tratar dos problemas da área no dia a dia, bem como acompanhar as mudanças, medir os resultados e principalmente propor melhorias buscando sempre mais resultado para a área e também para a empresa
                </p> <br /><br />

            </div>
        </>
    )
}