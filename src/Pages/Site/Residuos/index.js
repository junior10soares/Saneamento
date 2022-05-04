import { useCallback, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import {
    Container,
    Center,
    Row,
    TitleSection,
    BannerPage,
    HeaderPage,
    TextSection,
    EstudoCatadores,
    ProjetoTecnico,
} from "./styles";
import { DocumentsList } from "../../../components/DocumentsList";
import MapComponent from "../../../components/MapComponent";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import capa from "../../../assets/public/imagens/ResiduosSolidos/capa.png";

import monitoramento from "../../../assets/public/imagens/ResiduosSolidos/security.png";
import tablets from "../../../assets/public/imagens/ResiduosSolidos/tablets.png";
import seguranca from "../../../assets/public/imagens/ResiduosSolidos/security-system.png";
import compactadora from "../../../assets/public/imagens/ResiduosSolidos/garbage.png";
import cabeamento from "../../../assets/public/imagens/ResiduosSolidos/cable.png";
import comunicacao from "../../../assets/public/imagens/ResiduosSolidos/communication.png";

import { FiClipboard } from "react-icons/fi";

const locations = [{
        name: "Av. Dom Jorge Marcos de Oliveira",
        lat: "-23.660236991157788",
        lng: "-46.54713773086169",
    },

    {
        name: "Rua da Visão",
        lat: "-23.706545114521383",
        lng: "-46.49638566381487",
    },
    // {
    //   name: "Rua da Constituição",
    //   lat: "-23.698315528762667", 
    //   lng: "-46.508629288264814",
    // },
    {
        name: "R. Rolândia",
        lat: "-23.69434398188793",
        lng: "-46.52216404677351",
    },
    {
        name: "R. Pintassilva",
        lat: "-23.730238645892868",
        lng: "-46.494521753520246",
    },
    {
        name: "Tv. São Bento",
        lat: " -23.652158874526105",
        lng: "-46.53155805990961",
    },
    {
        name: "Av Preste Maia",
        lat: "-23.644084780360906",
        lng: "-46.54065794198922",
    },
    {
        name: "Rua Antonio Cardoso",
        lat: "-23.64149331843551",
        lng: "-46.52233967268445",
    },
    {
        name: " Av. Cândido Camargo",
        lat: "-23.62676680729257",
        lng: "-46.48654480202437",
    },
    {
        name: "R. José Fernando de Medina Braga",
        lat: "-23.690163337206005",
        lng: "-46.532107500118336",
    },
];

const Residuos = () => {
    const [isVisible, setVisible] = useState(false);
    const [constructions, setConstrutions] = useState([]);
    const construction = useCallback(() => {
        api
            .get(
                "work?filters[][work_category.uuid@equal]=bb7f1740-35be-11eb-8cc1-1540c95fed24"
            )
            .then(({ data }) => setConstrutions(data.data));
    }, []);

    useEffect(() => {
        construction();
    }, [construction]);

    const hasPictures = constructions.find(
        (construction) => construction.work_pictures.length > 0
    );

    if (constructions.length > 0) {
        setVisible(true);
    }

    const hasVideos = constructions.find(
        (construction) => construction.work_videos.length > 0
    );
    return ( <
        >
        <
        Header / >
        <
        BannerPage image = { capa }
        /> <
        Container >
        <
        div className = "desktopStepBar"
        style = {
            { width: "100%" } } >
        <
        div className = "groupButtons" >
        <
        div className = "buttonAlign" >
        <
        ProjetoTecnico href = "/projeto-trabalho-tecnico"
        target = "_blank"
        style = {
            { marginRight: "2px", marginLeft: "25px" } } >
        <
        FiClipboard / >
        Projeto Socioambiental <
        /ProjetoTecnico> <
        EstudoCatadores href = "/estudo-de-catadores"
        target = "_blank"
        style = {
            { marginLeft: "2px" } } >
        <
        FiClipboard / >
        Estudo de catadores <
        /EstudoCatadores> <
        /div> <
        /div> <
        /div>

        <
        Center >
        <
        HeaderPage style = {
            { marginBottom: 60 } } >
        <
        TitleSection center >
        Gestão de < strong > Resíduos Sólidos < /strong> <
        /TitleSection> <
        /HeaderPage> <
        div className = "responsiveStepBar" >
        <
        div className = "groupButtonsResponsive" >
        <
        div className = "buttonAlignResponsive" >
        <
        ProjetoTecnico href = "/projeto-trabalho-tecnico"
        target = "_blank"
        style = {
            { minWidth: "200px" } } >
        <
        FiClipboard / >
        Projeto Socioambiental <
        /ProjetoTecnico> <
        EstudoCatadores style = {
            { minWidth: 200 } }
        href = "/estudo-de-catadores"
        target = "_blank" >
        <
        FiClipboard / >
        Estudo de catadores <
        /EstudoCatadores> <
        /div> <
        /div> <
        /div> <
        TextSection style = {
            { marginTop: 110 } }
        columns = "2"
        id = "firstParagraph" >
        <
        p style = {
            { textAlign: "justify" } } >
        Com o Programa Sanear Santo André, a Prefeitura e o Semasa vão construir mais 10 Estações de Coleta e implantar novos PEVS(Pontos de Entrega Voluntária) para receber resíduos recicláveis,
        eletroeletrônicos e outros materiais, o que vai beneficiar diretamente mais de 170 mil pessoas. <
        strong > As intervenções têm como objetivos < /strong>: <
        /p> <
        p style = {
            { textAlign: "justify" } } > •Aumentar a reciclagem. < /p> <
        p style = {
            { textAlign: "justify" } } > •Reduzir a quantidade de materiais secos que são aterrados e ampliar a vida útil do Aterro Sanitário Municipal.A previsão é de
        que o equipamento tenha apenas mais 5 anos de operação. <
        /p> <
        p style = {
            { textAlign: "justify" } } > •Diminuir pontos de descarte irregular de resíduos. <
        /p> <
        p style = {
            { textAlign: "justify" } } > •Proporcionar economia de recursos públicos que são utilizados com serviços de limpeza. <
        /p> <
        p style = {
            { textAlign: "justify" } } > •Deixar os bairros mais limpos e proteger o meio ambiente. <
        /p> <
        p style = {
            { textAlign: "justify" } } > •Aumentar a criação de postos de trabalho nas duas cooperativas de reciclagem que existem– a Coopcicla e a Cidade Limpa. <
        /p> <
        p style = {
            { textAlign: "justify" } } >
        Em abril de 2022, começou a construção das { " " } <
        strong > Estações de Coleta Ana Maria, Palmeiras e Bangu < /strong>{" "}
        (confira abaixo a localização dos ecopontos).O prazo de execução das obras é de dois meses.Só na região dessas três unidades, a equipe de varrição do Semasa gastou, em todo o ano de 2021, mais
        de R$ 141 mil para limpar pontos de descarte irregular de resíduos.Foram retiradas 680 toneladas de materiais. <
        /p> <
        p style = {
            { textAlign: "justify" } } >
        O segundo bloco de obras contempla a construção das { " " } <
        strong > Estações de Coleta Centro, Alvorada < /strong> e{" "} <
        strong > Jardim Cristiane < /strong>. Já o terceiro e último bloco
        envolve as unidades { " " } <
        strong > Parque Miami, Jardim Santo André < /strong> e{" "} <
        strong > Vila Guiomar < /strong>. Outro local ainda está para ser
        definido.Contando com as 10 Estações de Coleta que vão ser implantadas, o Semasa pode economizar mais de R$ 500 mil por ano,
        caso consiga combater pontos de descarte irregular.O investimento para construir as 10 Estações de Coleta é de mais de R$ 6 milhões. <
        /p> <
        p style = {
            { textAlign: "justify" } } >
        <
        strong > Modernização dos equipamentos < /strong> <
        /p> <
        p style = {
            { textAlign: "justify" } } >
        As novas Estações de Coleta serão mais  modernas.As unidades vão receber caçambas compactadoras para melhorar a eficiência do
            sistema e reduzir o número de viagens de caminhões que levam os
        resíduos às cooperativas de reciclagem.Além disso, os funcionários que trabalham nos ecopontos ganharão tablets ou celulares para fazer controle das pessoas que acessam as Estações de Coleta.Atualmente, o serviço é feito a mão.Todos os equipamentos ainda terão um sistema de filmagem de qualidade para monitorar os locais e evitar depredações, furtos e invasões.O monitoramento ocorrerá em um { " " } <
        strong > Centro de Controle Operação < /strong>, espaço que será
        construído. <
        /p> <
        p style = {
            { textAlign: "justify" } } >
        <
        strong > Nova Central de Triagem < /strong> <
        /p> <
        p style = {
            { textAlign: "justify" } } >
        Outra importante obra para a gestão de resíduos sólidos é a implantação de uma nova Central de Triagem de Resíduos Recicláveis, local para abrigar as duas cooperativas de reciclagem que existem em Santo André.O espaço também será mais moderno,
        oferecendo equipamentos e estrutura mais adequados aos cooperados que fazem a triagem, compactação e venda de resíduos secos.Atualmente, mais de 100 pessoas trabalham na Central de Triagem que existe dentro do Aterro Sanitário Municipal.O novo galpão,
            que será maior, poderá receber mais pessoas para trabalhar. <
            /p> <
            p style = {
                { textAlign: "justify" } } >
            <
            strong > Descarte correto nas Estações de Coleta < /strong> <
            /p> <
            p style = {
                { textAlign: "justify" } } >
            Atualmente, Santo André disponibiliza 20 ecopontos, que são
        equipamentos gratuitos e exclusivos para o uso dos moradores da cidade.A população pode descartar recicláveis volumosos, entulho,
        móveis, colchões e estofados, quatro pneus por mês, óleo de cozinha e resíduos eletroeletrônicos, como computador, monitor,
        geladeira, fogão e etc.Cada pessoa pode fazer a disposição de até um metro cúbico de resíduos, que é o equivalente a dez sacos de lixo de 100 litros.Algumas unidades também aceitam podas de vegetação, telhas de amianto e gesso.O endereço de todas as Estações de Coleta, bem como os dias e horários de funcionamento,
        pode ser consultados no < a href = "http://www.semasa.sp.gov.br/residuos/coleta-domiciliar-2/coleta-seletiva/estacoes-de-coleta/" > site do Semasa < /a>. <
            /p> <
            p
        style = {
            {
                textTransform: "uppercase",
                fontWeight: "bold",
                marginTop: 30,
                marginBottom: 60,
            }
        } >
        Infraestrutura das novas estações de coleta:
        <
        /p> <
        /TextSection> <
        /Center> <
        div className = "iconsGrid" >
        <
        DocumentsList >
        <
        div className = "Grid" >
        <
        div className = "row" >
        <
        span className = "span-column"
        style = {
            { marginLeft: 0, marginRight: 30 } } >
        <
        img style = {
            { height: 50, width: 50 } }
        src = { monitoramento }
        /> <
        p style = {
            { margin: 0, flexWrap: "wrap" } } >
        Câmeras de Monitoramento <
        /p> <
        /span> <
        span className = "span-column"
        style = {
            { marginLeft: 80, marginRight: 60 } } >
        <
        img style = {
            { height: 50, width: 50 } }
        src = { tablets }
        /> <
        p style = {
            { margin: 0, flexWrap: "wrap" } } > Tablets < /p> <
        /span> <
        span className = "span-column"
        style = {
            { marginLeft: 35, marginRight: 5 } } >
        <
        img style = {
            { height: 50, width: 50 } }
        src = { seguranca }
        /> <
        p style = {
            { margin: 0, marginRight: 0, flexWrap: "wrap" } } >
        Sistema de Segurança <
        /p> <
        /span> <
        /div> <
        div className = "row" >
        <
        span className = "span-column"
        style = {
            { marginLeft: 25, marginRight: 5 } } >
        <
        img style = {
            { height: 50, width: 50 } }
        src = { cabeamento }
        /> <
        p style = {
            { margin: 0 } } > Cabeamento Estruturado < /p> <
        /span> <
        span className = "span-column"
        style = {
            { marginLeft: 45, marginRight: 10 } } >
        <
        img style = {
            { height: 50, width: 50 } }
        src = { compactadora }
        /> <
        p style = {
            { margin: 0 } } > Caçambas Compactadoras < /p> <
        /span> <
        span className = "span-column"
        style = {
            { marginLeft: 0, marginRight: 5 } } >
        <
        img style = {
            { height: 50, width: 50 } }
        src = { comunicacao }
        /> <
        p style = {
            { margin: 0 } } > Sistemas de Comunicação < /p> <
        /span> <
        /div> <
        /div> <
        /DocumentsList> <
        /div> <
        /Container>

        {
            hasPictures && hasVideos && ( <
                Container >
                <
                Center >
                <
                AlbumPhotos / >
                <
                /Center> <
                /Container>
            )
        }

        <
        Container > {
            isVisible && ( <
                Center >
                <
                TitleSection className = "text-center" >
                Obras em < strong > andamento < /strong> <
                /TitleSection>

                <
                Row >
                <
                WorkCarousel category = "bb7f1740-35be-11eb-8cc1-1540c95fed24" / >
                <
                /Row> <
                /Center>
            )
        } <
        TextSection style = {
            { marginTop: -95 } }
        columns = "2" >
        <
        p style = {
            { textAlign: "justify" } } >
        Veja abaixo a < strong > localização dos novos 10 ecopontos. < /strong>{" "} <
        /p> <
        /TextSection> <
        Center >
        <
        h2 > Ecopontos < /h2> <
        MapComponent markers = { locations }
        /> <
        /Center> <
        /Container> <
        Footer / >
        <
        />
    );
};

export default Residuos;