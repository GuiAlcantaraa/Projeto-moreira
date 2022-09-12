
import { Header } from '../../components/Header';
import './styles.scss';
import { Navigate } from 'react-router-dom';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { useContext } from 'react';



export function Home() {

    const { signed, user } = useContext(AuthGoogleContext);

    if (signed) {
        return (
            <>
                <Header
                    name={user.displayName}
                />
                <h1 className='title'>Gestão estratégica de TI</h1><br />

                <div className='content'>
                    <h2>O que é ?</h2>
                    <br />
                    <div className='styleContent'>
                        <p>A gestão estratégica é um conjunto de práticas aplicadas na administração de uma empresa, departamento e até mesmo de projetos,
                            em que os processos são estruturados de forma eficaz <br />para atingir os objetivos traçados pela organização. Por meio dela,
                            todas as tarefas são executadas em cima de direcionamentos previamente estabelecidos, ajudando a impulsionar a competitividade e o crescimento do negócio.
                            A gestão de TI é definida por todas as práticas voltadas para a administração dos recursos e soluções de tecnologia de uma empresa.
                            Quando o gerenciamento é pensado e feito de forma estratégica ele assume condutas de governança sobre as ferramentas da área com o objetivo de melhorar os resultados da companhia
                        </p>
                    </div>
                    <br />

                    <h2>Beneficios</h2>
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

                    <h2>Resenha sobre Gestão Estratégica de TI</h2>
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
            </>

        )
    } else {
        return <Navigate to="/Login" />
    }
}