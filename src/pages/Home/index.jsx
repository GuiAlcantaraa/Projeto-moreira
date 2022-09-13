
import { Header } from '../../components/Header';
import './styles.scss';
import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useContext } from 'react';



export function Home() {

    const { signed } = useContext(AuthGoogleContext);

    if (signed) {
        return (
            <>
                <Header />
                <h1 className='title'><u>Gestão estratégica de TI</u></h1><br />

                <div className='content'>
                    <h2><u>O que é ?</u></h2>
                    <br />
                    <div className='styleContent'>
                        <p>A gestão estratégica é um conjunto de práticas aplicadas na administração de uma empresa, departamento e até mesmo de projetos,
                            em que os processos são estruturados de forma eficaz para atingir os objetivos traçados pela organização. Por meio dela,
                            todas as tarefas são executadas em cima de direcionamentos previamente estabelecidos, ajudando a impulsionar a competitividade e o crescimento do negócio.
                            A gestão de TI é definida por todas as práticas voltadas para a administração dos recursos e soluções de tecnologia de uma empresa.
                            Quando o gerenciamento é pensado e feito de forma estratégica ele assume condutas de governança sobre as ferramentas da área com o objetivo de melhorar os resultados da companhia
                        </p>
                    </div>
                    <br />

                    <h2><u>Beneficios</u></h2>
                    <br />

                    <div className='styleContent'>
                        <p>O TI estratégico consegue direcionar as ações para maior economia de recursos e eficiência integral das equipes,
                            podendo promover a geração de incremento de vendas, melhoria de serviços, produtos, atendimento e diversos outros benefícios.
                            Com profissionais engajados e capacitados, sobrepujando práticas de apenas fornecer suporte, recursos ou ferramentas,
                            é possível que o setor de TI se torne um ativo importante para os projetos da companhia.
                            Para isso, é necessário que os objetivos da área estejam em consonância com os da instituição.
                        </p>
                    </div>
                    <br />

                    <h2><u>Resenha sobre Gestão Estratégica de TI</u></h2>
                    <br />

                    <div className='styleContent'>
                        <p>O TI estratégico consegue direcionar as ações para maior economia de recursos e eficiência integral das equipes,
                            podendo promover a geração de incremento de vendas, melhoria de serviços, produtos, atendimento e diversos outros benefícios.
                            Com profissionais engajados e capacitados, sobrepujando práticas de apenas fornecer suporte, recursos ou ferramentas,
                            é possível que o setor de TI se torne um ativo importante para os projetos da companhia.
                            Para isso, é necessário que os objetivos da área estejam em consonância com os da instituição.
                        </p>
                    </div>
                    <br />

                    Fonte: <a href="https://www.findup.com.br/gestao-de-ti-estrategica/" target="_blank">https://www.findup.com.br/gestao-de-ti-estrategica/</a>
                </div>
                    <br />
                <h1 className='title'><u>Entrevista com Gestor</u></h1><br />

            </>

        )
    } else {
        return <Navigate to="/Login" />
    }
}