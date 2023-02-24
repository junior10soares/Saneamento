// import { useCallback, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import React from "react";
import _ from "lodash";
import {
  Container,
  Center,
  Row,
  TitleSection,
  BannerPage,
  HeaderPage,
  TableSection,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import monitoramento from "../../../assets/public/imagens/monitoramento/monitoramento.jpeg";
import Table from "../../../components/Table";

const data = [
  {
    rua: "Rua Planaltina - Vila Sá.",
    qtd: "8",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Taubaté - Vila Sá",
    qtd: "4",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Tremembé - Vila Sá",
    qtd: "2",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Milão - Vila Sá",
    qtd: "6",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Av. Visconde de Cairu - Vila Sá",
    qtd: "5",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Nestor de Barros x Rua Oratório - Jardim Ana Maria",
    qtd: "6",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Havana - Vila Metalúrgica",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Havana",
  },
  {
    rua: "Av. Varsóvia - Vila Metalurgica",
    qtd: "10",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Jundiaí - Bairro Santa Terezinha",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Jundiai",
  },
  {
    rua: "Av. Eng. Olavo Alaysio de Lima - Vila Metalurgica",
    qtd: "10",
    obs: "Rio Tamanduateí - Córrego Jundiai",
  },
  {
    rua: "Av. da Paz, Bairro Utinga ",
    qtd: "11",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Av. dos Estados - Felipe Camarão até Av. da Paz (nos dois sentidos) - Vila Metalúrgica",
    qtd: "20",
    obs: "Rio Tamanduateí",
  },

  {
    rua: "Rua Distrito Federal, Bairro Santa Terezinha ",
    qtd: "7",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Alameda Martins Fontes, Bairro Santa Terezinha ",
    qtd: "6",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Mato Grosso, Bairro Santa Terezinha",
    qtd: "6",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Alameda Martins Fontes x Rua Silva Jardim e Rua Silveira Martins - Bairro Santa Terezinha ",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Comprido",
  },
  {
    rua: "Praça Samuel de Castro Neves - Bairro Santa Terezinha ",
    qtd: "4",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Bárbara Heliodora - Utinga",
    qtd: "2",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Lord Cochrane - Bairro Santa Terezinha",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Comprido",
  },
  {
    rua: "Alameda São Bernardo - Bairro Santa Terezinha",
    qtd: "6",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Rio Grande do Norte - Bairro Santa Terezinha",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Comprido",
  },
  {
    rua: "Rua Paulo Setubal - Bairro Santa Terezinha",
    qtd: "4",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Santa Adélia x Av. dos Estados - Bairro Santa Terezinha",
    qtd: "4",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Av. Antônio Cardoso - Bairro Bangu",
    qtd: "4",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Guaxinduva e Rua Caraguatatuba - Jd. Monte Líbano",
    qtd: "4",
    obs: "Rio Tamanduateí",
  },
  {
    rua: " Av. dos Estados x Av. André Ramalho - Pq. João Ramalho",
    qtd: "2",
    obs: "Rio Tamanduateí",
  },
  {
    rua: " Av. dos Estados x Av. Sorocaba - Pq. João Ramalho",
    qtd: "4",
    obs: "Rio Tamanduateí",
  },
  {
    rua: " Av. dos Estados, trecho 5745 a 7395, Bairro Jaçatuba",
    qtd: "4",
    obs: "Rio Tamanduateí",
  },
  {
    rua: " Rua Itambé (Estação Ferroviária CPTM) - Centro",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: " Rua Queirós dos Santos, Centro",
    qtd: "10",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: " Rua Visconde Taunay, próximo do portão do Atacadista Assaí - Centro",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: " Av. Industrial - Bairro Jardim",
    qtd: "10",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: " Rua Monte Casseros - Centro",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: " Rua Álvares de Azevedo - Centro",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: " Rua Sete de Setembro - Vila Alzira",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: " Rua Belém, defronte ao Parque - Vila Assunção",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Apiaí",
  },
  {
    rua: " Rua Siqueira Alves - Vila Leopoldina ",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Apiaí",
  },
  {
    rua: " Rua Ribeiro Guimarães x Rua Manoel Vaz - Vila Leopoldina",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Apiaí",
  },
  {
    rua: " Av. Firestone, próximo da Rua Siqueira Alves - Vila Alzira",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Apiaí",
  },
  {
    rua: " Rua Sargento Cid - Vila Alzira",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Apiaí",
  },
  {
    rua: " Rua Nilo Peçanha, de frente ao nº 279, final da rua, próxima à Av. Cap. Mário T. de Camargo - Vila América",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: " Rua Erato, próximo ao nº 504, final da rua - Vila América",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Afonso Pena, Vila América",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua José do Patrocínio, Vila América",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Osvaldo Aranha, Vila América",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Jorge Chammas - Vila América",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Hatsuey Motomura,100 (próximo da Av. Cap. Mário T. de Camargo) - Bairro Silveira",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Av. Cap. Mário T. de Camargo,2042 x Rua Gil Vicente, Bairro Silveira",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Av. Cap. Mário T. de Camargo, próximo à Rua Vinte e Quatro de Maio Rua Gil Vicente, Bairro Silveira",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Alencastro, defronte ao nº 241 - Bairro Silveira",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Miguel Couto, próximo ao nº 527 - Vila Pires",
    qtd: "5",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Caravelas x Rua Chuí - Vila Pires",
    qtd: "5",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Buri x Av. Cap. Mário T. de Camargo - Vila Pires",
    qtd: "2",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Cajuru, defronte ao nº 353 - Vila Pires",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Alida, 79 - Vila Pires",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Av. Dom Pedro I x Rua Jericó - Vila Pires",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Guarará, 13 - Vila Mazzei",
    qtd: "2",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua do Amaro,114 - próximo à Rua Pi, Jardim Europa ",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Av. Capitão Mário T. de Camargo x Rua São Judas Tadeu - Vila Tibiriçá",
    qtd: "2",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Inconfidência Mineira,378 e 50 X Estrada do Pedroso,6860 - Jd. Vila Rica ",
    qtd: "5",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Estrada do Pedroso, 1635 - Córrego Dominicanos - Jd. Santo André",
    qtd: "2",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Estrada da Cata Preta,663 - Bairro João Ramalho (590 a 980)",
    qtd: "5",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Estrada da Cata Preta x Rua Por do Sol, próximo ao afluente do Córrego Guarará - Vila João Ramalho",
    qtd: "5",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Estrada da Cata Preta,869 x Rua Dom Manoel - Vila João Ramalho",
    qtd: "8",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua André Magini, altura do nº 41, Jardim Irene",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua André Magini, altura do nº 106, próximo à Rua Arduino Novella - Jardim Irene",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Caminho dos Vianas,489 - próximo à Rua Beija Flor Jd. Irene",
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Rua Caminho dos Vianas,463 Viela - Jd. Irene",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Av. Maurício de Medeiros x Rua Ardille Bacchi, Jd. Irene",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Guarará",
  },
  {
    rua: "Av. Valentim Magalhães - Vila Guarani",
    qtd: "10",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Av. Prof. Luis Ignacio Anhaia Mello - Homero Thon",
    qtd: "10",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Av. Capuava - Bairro Homero Thon",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua Anibal - Bairro Homero Thon ",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua Leonardo da Vinci -Bairro Homero Thon",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Av. Giovanni Batista Pirelli - Homero Thon",
    qtd: "10",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua Fernando Pessoa - Parque Marajoara",
    qtd: "2",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Av. Pedro Americo - Bairro Homero Thon",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua Epaminondas Rodrigues - Jd. Mareck",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua Booker Pittiman - Centreville ",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua Walt Disney - Centreville ",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua Assis Chateaubriand - Centreville",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    rua: "Rua do Pêssego, nº 44, Bairro Palmares (17 a 55) ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Pederneiras, nº 534, Vila Palmares  ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Dr. Simão de Lima, Bairro Palmares ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Laura Muller, altura nº 1146 x Rua Quatá, Bairro Palmares ",
    qtd: "4",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Av. Lauro Gomes, altura 4650, Bairro Palmares",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Av. Lauro Gomes, 734, próximo à Rua Fernando de Noronha, Bairro Sacadura Cabral (2 a 995)",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Lauro Muller x Rua Camilo Castelo Branco, próximo ao oleoduto, Bairro Sacadura Cabral (299 a 331)",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Maquiavel, lado oposto ao nº 203, Bairro Sacadura Cabral (49 a 251) ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Las Palmas, nº 716, Bairro Sacadura Cabral (689 a 711)",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Dom Pedro Fernandes Sardinha, nº 130, Bairro Sacadura Cabral (11 a 246) ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Grã-Bretanha, 584 - próximo à esquina com a Rua Igarapava, Bairro Valparaíso ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Andradina, 840, Bairro Valparaíso",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Av. Bom Pastor, nº, 214, próximo a Travessa Santa Maria, Jd. Bom Pastor ",
    qtd: "4",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Av. Bom Pastor,960- próximo à Rua Dom Silvério Pimenta, Jd. Bom Pastor",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Av. Bom Pastor 1115 (esquina Rua Sebastião Pedroso), Jd. Bom Pastor ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Antônio de Lima, 160 -próximo a córrego canalizado - Jd. Ocara",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Abrahão Delega ,8 - Jd. Ocara ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Felício Pedroso, 761, Jd. Bom Pastor ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Felício Pedroso, 632 - Jd. Bom Pastor ",
    qtd: "4",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Iguape, 138 - Jd. Bom Pastor ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Dom Silvério Pimenta, 740 - próximo ao cruzamento com a Rua Inverno, Jd. Bom Pastor ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Ibiacema,310 e Rua Jordão,321 - Jd. Bom Pastor",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Av. Sarina,97 - Jd. Bom Pastor ",
    qtd: "4",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Osasco, Jd. Bom Pastor ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Julio Ribeiro,138 e 141- Vila Sacadura Cabral ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Fernando de Mascarenhas,180 - Vila Humaita   ",
    qtd: "2",
    obs: "Córrego Cassaquera",
  },
  {
    rua: "Praça Palmares,1204, 1178,1046,1056 e 986 - Vila Sacadura Cabral ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Bras Cubas - Centro ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua Afonsina, 214 - Vila Palmares ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua das Amoras - Vila Palmares ",
    qtd: "2",
    obs: "Ribeirão dos Meninos",
  },
  {
    rua: "Rua General Glicério - Centro ",
    qtd: "12",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: "Tv. Diana - Centro ",
    qtd: "2",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: "Av. 15 de Novembro - Centro ",
    qtd: "4",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    rua: "Av. Sapopemba - Jardim Utinga  ",
    qtd: "4",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Timor, 965 - Parque Oratorio ",
    qtd: "2",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "R. Sumatra, 274 - Parque Oratorio  ",
    qtd: "2",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Av. das Nações, 246 - Parque Novo Oratorio",
    qtd: "12",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Almada,69 – Jd. Santo Alberto ",
    qtd: "3",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "R. Calábria, 77 - Parque Novo Oratório ",
    qtd: "3",
    obs: "Ribeirão Oratório",
  },
  {
    rua: "Rua Oratorio, 3226 - Parque das Nações ",
    qtd: "5",
    obs: "Ribeirão Oratório ",
  },
  {
    rua: "Av. dos Estados - Centro",
    qtd: "6",
    obs: "Rio Tamanduateí",
  },
  {
    rua: "Rua Delfim Moreira - Centro",
    qtd: "3",
    obs: "Córrego Cemitério",
  },
  {
    rua: "Rua Presidente Carlos de Campos - Centro",
    qtd: "5",
    obs: "Córrego Cemitério",
  },
  {
    rua: "Av. Guaianazes, 938 - Vila Homero Thon ",
    qtd: "3",
    obs: "Córrego Cassaquera",
  },
  {
    rua: "Alameda Francisco Alves, 188 - Jardim ",
    qtd: "3",
    obs: "Córrego Cemitério",
  },
];

const BueirosInteligentes = () => {
  const columns = React.useMemo(() => [
    {
      Header: "LOCAL",
      accessor: "rua",
    },
    {
      Header: "QUANTIDADE",
      accessor: "qtd",
      Footer: (
        <span>
          {" "}
          <stron>
          TOTAL:{" "}
          </stron>
          {data
            .map((value) => value.qtd)
            .reduce((a, b) => parseInt(a) + parseInt(b))}
        </span>
      ),
    },
    {
      Header: "OBSERVAÇÃO",
      accessor: "obs",
    },
  ]);

  return (
    <>
      <Header />
      <BannerPage image={monitoramento} />{" "}
      <Container>
        <Center>
          <HeaderPage style={{ marginBottom: 10 }}>
            <TitleSection center>
              <strong>Bueiros Inteligentes</strong>
            </TitleSection>{" "}
          </HeaderPage>{" "}
        </Center>{" "}
        <Center>
          <TableSection>
            <Table columns={columns} data={data} />
          </TableSection>
        </Center>
      </Container>{" "}
      <Footer />
    </>
  );
};

export default BueirosInteligentes;
