import React, { useState } from "react";
import { Header } from "../../../components/Header";

import { Container, Center, TextSection, TitleSection } from "./styles";

import { Footer } from "../../../components/Footer";

import MapComponent from "../../../components/MapComponent";

// const locations = [
//   {
//     lat: -23.639676,
//     lng: -46.556002,
//     name: "Rua João Caetano – Av. Prof. Luís Inácio de Anhaia Mello",
//   },
//   {
//     lat: -23.667673,
//     lng: -46.544285,
//     name: "Av. Giovani Batista Pirelli – Av. Prof. Luís Inácio de Anhaia Mello",
//   },
//   {
//     lat: -23.681234,
//     lng: -46.538809,
//     name: "Rua do Amaro/ rua Guarará/ Av. Capitão Mario Toledo Camargo",
//   },
//   {
//     lat: -23.653011,
//     lng: -46.506345,
//     name: "Estrada do Pedroso, 5200 - Miami",
//   },
//   {
//     lat: -23.648743,
//     lng: -46.527328,
//     name: "Estrada do Pedroso próximo a Av. Inconfidência Mineira (Rotatória)",
//   },
//   {
//     lat: -23.652963,
//     lng: -46.548875,
//     name: "Piscinão Rua Xingu (encontro Itororó x Araçatuba)",
//   },
//   { lat: -23.646741, lng: -46.558634, name: "Av. Atlântica x Av. Lauro Gomes" },
//   {
//     lat: -23.639644,
//     lng: -46.529914,
//     name: "Rua pederneiras/Praça palmares (Ponto de alagamento)",
//   },
//   {
//     lat: -23.646078,
//     lng: -46.558176,
//     name: "Av. Lauro Gomes x Rua Dr. Simão de Lima (Alagamento)",
//   },
//   { lat: -23.655597, lng: -46.556336, name: "Rua Graciliano Ramos X Montemor" },
//   { lat: -23.655697, lng: -46.553324, name: "Av. João Ducin" },
//   {
//     lat: -23.652795,
//     lng: -46.550476,
//     name: "Rua Camilo Castelo Branco (Ponto de Alagamento)",
//   },
//   {
//     lat: -23.648053,
//     lng: -46.532643,
//     name: "Rua Candido Camargo / Rua Oratório (Alagamento)",
//   },
//   {
//     lat: -23.650076,
//     lng: -46.532948,
//     name: "Rua Planaltina x Rua Tremembé (Alagamento)",
//   },
//   { lat: -23.654476, lng: -46.509012, name: "Rio Grande do Norte, 615" },
//   {
//     lat: -23.668234,
//     lng: -46.564808,
//     name: "Rua Ianomami x Av. Antônio Cardoso",
//   },
//   { lat: -23.649055, lng: -46.552192, name: "Av. da Paz (estação Utinga)" },
//   {
//     lat: -23.649772,
//     lng: -46.535916,
//     name: "Rua Elisa Flaquer x Rua Alvares de Azevedo",
//   },
//   {
//     lat: -23.646487,
//     lng: -46.55163,
//     name: "Travessa General Klinger x Av. Andrade Neves",
//   },
//   { lat: -23.649433, lng: -46.528292, name: "Rua Oratório x Rua Almada" },
//   {
//     lat: -23.656368,
//     lng: -46.554303,
//     name: "Rua 24 de Maio x Av. Capitão Mário",
//   },
//   { lat: -23.65916, lng: -46.55756, name: "Rua Antonina x Rua Japão" },
//   {
//     lat: -23.657657,
//     lng: -46.561106,
//     name: "Av. Firestone x Rua Queiroz dos Santos",
//   },
//   {
//     lat: -23.638168,
//     lng: -46.523927,
//     name: "Av. Industrial x Alamedas dos Jacarandás",
//   },
//   { lat: -23.658546, lng: -46.53869, name: "Rua Jundiaí (Praça) (Alagamento)" },
//   { lat: -23.645634, lng: -46.537073, name: "Av. dos Estados x Av. Sorocaba" },
//   { lat: -23.650072, lng: -46.552795, name: "Av. dos Estados x Av. da Paz" },
//   { lat: -23.654301, lng: -46.55938, name: "Av. dos Estados x Rua do Ouro" },
//   {
//     lat: -23.659219,
//     lng: -46.564018,
//     name: "Av. dos Estados x Rua Antonio Cardoso",
//   },
//   { lat: -23.668095, lng: -46.562409, name: "Av. Eng. Olávo Alaisio de Lima" },
//   {
//     lat: -23.666867,
//     lng: -46.561028,
//     name: "Av. Eng. Olávo Alaisio de Lima - Pesqueiro",
//   },
//   { lat: -23.651618, lng: -46.561099, name: "Rua Jordão" },
//   {
//     lat: -23.652654,
//     lng: -46.5518,
//     name: "Av. das Nações x Rua América do Sul",
//   },
//   {
//     lat: -23.657469,
//     lng: -46.539722,
//     name: "Av. Lauro Gomes x Rua Grã-Bretanha",
//   },
//   {
//     lat: -23.657564,
//     lng: -46.554071,
//     name: "Av. Capuava Altura do nº 870 - (Ponto inundável)",
//   },
//   {
//     lat: -23.668623,
//     lng: -46.553163,
//     name: "Rua Giovanni Battista Pirelli x Av. Manoel da Nobrega",
//   },
//   {
//     lat: -23.652868,
//     lng: -46.559001,
//     name: "Rua Valdemar Costa Filho x Av. Marginal Itrapoã",
//   },
//   {
//     lat: -23.636882,
//     lng: -46.539477,
//     name: "Av. Brasília x R. José Fernando de Medina Braga",
//   },
//   {
//     lat: -23.635793,
//     lng: -46.540014,
//     name: "R. José Fernando de Medina Braga x R. Quênia",
//   },
//   { lat: -23.649609, lng: -46.544727, name: "Rua João Pessoa x Av. Sapopemba" },
//   { lat: -23.651883, lng: -46.552158, name: "Rua Maestro Erlon Chaves" },
//   { lat: -23.654281, lng: -46.528369, name: "Rua São José" },
//   {
//     lat: -23.645588,
//     lng: -46.540831,
//     name: "Rua Barbara Heliodora (Ponto inundável)",
//   },
//   {
//     lat: -23.652233,
//     lng: -46.546558,
//     name: "Av. Ramiro Colleoni x Rua Venezuela",
//   },
//   {
//     lat: -23.658761,
//     lng: -46.536412,
//     name: "Av. Henri Sannejouand x Av. Visconte de Taunai",
//   },
//   { lat: -23.659437, lng: -46.546624, name: "Rua Londres" },
//   { lat: -23.658473, lng: -46.559474, name: "Rua Juquiá x Rua Carijós" },
//   { lat: -23.649789, lng: -46.533752, name: "Rua Itambé (Alagamento)" },
//   {
//     lat: -23.657085,
//     lng: -46.554687,
//     name: "Av. Santos Dumont x Av. Cap. Mário Toledo de Camargo",
//   },
//   {
//     lat: -23.645589,
//     lng: -46.530742,
//     name: "Rua Pederneiras x Rua Lauro Muller",
//   },
//   {
//     lat: -23.653491,
//     lng: -46.548999,
//     name: "Rua Dr. Simão de Lima x Rua das Amoras",
//   },
//   {
//     lat: -23.653609,
//     lng: -46.550016,
//     name: "Rua Camilo Castelo Branco (Ponto de Alagamento)",
//   },
//   { lat: -23.660683, lng: -46.547638, name: "Av. Bom Pastor x Tr. Sta. Rosa" },
//   {
//     lat: -23.660157,
//     lng: -46.557437,
//     name: "Rua Lord Crochrane x Rua Mato Grosso",
//   },
//   {
//     lat: -23.642571,
//     lng: -46.540073,
//     name: "Rua Silva Jardim x Rua Bartolomeu de Gusmão",
//   },
//   { lat: -23.642676, lng: -46.548104, name: "Rua Distrito Federal" },
//   { lat: -23.641287, lng: -46.555612, name: "Av. André Ramalho" },
//   { lat: -23.660462, lng: -46.546176, name: "Rua Taubaté" },
//   { lat: -23.659466, lng: -46.544129, name: "Rua Siqueira Alves" },
//   { lat: -23.654826, lng: -46.535536, name: "Rua Erato x Rua Nilo Peçanha" },
//   { lat: -23.655451, lng: -46.534972, name: "Rua Erato x Rua Afonso Pena" },
//   { lat: -23.657029, lng: -46.535585, name: "Rua Alencastro" },
//   { lat: -23.65792, lng: -46.531779, name: "Rua Jorge Chamas" },
//   { lat: -23.648517, lng: -46.541887, name: "Av. Mauricio de Medeiros" },
//   { lat: -23.645703, lng: -46.535409, name: "Rua Quatá x Rua Lauro Muller" },
//   { lat: -23.647234, lng: -46.542248, name: "Av. Mauricio de Medeiros" },
//   { lat: -23.658261, lng: -46.538874, name: "Rua Londres (alagamento)" },
//   { lat: -23.647633, lng: -46.52857, name: "Rua Senador Pompeu" },
//   {
//     lat: -23.64339,
//     lng: -46.540904,
//     name: "Rua Alvares de Azevedo (alagamento)",
//   },
//   { lat: -23.638517, lng: -46.538408, name: "Av. Industrial (alagamento)" },
//   { lat: -23.646861, lng: -46.550365, name: "Rua Igarapava (alagamento)" },
//   {
//     lat: -23.647209,
//     lng: -46.553393,
//     name: "Rua Felício Pedroso x R. Dom Silvério Pimenta (alagamento)",
//   },
//   { lat: -23.65837, lng: -46.548977, name: "Av. Lauro Gomes (Assai)" },
//   { lat: -23.655249, lng: -46.551425, name: "Rua Miguel Couto (alagamento)" },
//   { lat: -23.656546, lng: -46.555705, name: "Rua São Pedro (alagamento)" },
//   { lat: -23.649812, lng: -46.559013, name: "Av. D. Pedro I (alagamento)" },
//   { lat: -23.670167, lng: -46.545829, name: "Estrada Velha do Mar" },
//   {
//     lat: -23.660469,
//     lng: -46.527712,
//     name: "Estrada do Rio Claro x Estrada de Paranapiacaba (Est. Campo Grande)",
//   },
// ];

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "500px",
};

const mapaUrl =
  "https://www.google.com/maps/d/u/1/embed?mid=1-AL7wnsEw4-Do77pjh-Fz_utvcWaCsU&ehbc=2E312F&noprof=1";

const Fluviometros = () => {
  return (
    <div>
      <Header />
      <Container style={{ paddingTop: 20 }}>
        <Center>
          <TitleSection center>
            <strong>Fluviômetros</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              Como parte das intervenções para ampliar e modernizar o sistema de
              monitoramento e alerta de chuva de Santo André, serão instalados
              78 fluviômetros.
            </p>
            <p style={{ textAlign: "justify" }}>
              Esses equipamentos possuem sensores ultrassônicos para
              <strong>
                {" "}
                medir o nível da água de córregos e de áreas inundáveis{" "}
              </strong>
              , além do trecho do rio Tamanduateí em Santo André.
            </p>
            <p style={{ textAlign: "justify" }}>
              Esses dispositivos, portanto, têm papel importante para{" "}
              <strong>
                alertar sobre a possibilidade de acontecer o transbordamento de
                cursos d'água
              </strong>{" "}
              quando há fortes chuvas, contribuindo para agilizar ações
              preventivas das equipes de drenagem e da Defesa Civil do
              município.
            </p>
            <p
              style={{
                textAlign: "justify",
                marginTop: "30px",
                marginBotton: "30px",
              }}
            >
              Ao todo, 46 bairros serão beneficiados com a instalação de
              fluviômetros. O investimento é de mais de R$ 1,3 milhão.
            </p>
          </TextSection>
          {/* <MapComponent markers={locations} /> */}
          <iframe
            style={containerStyle}
            title="Mapa Google"
            src={mapaUrl}
            width="1150"
            height="500"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Center>
      </Container>
      <Footer />
    </div>
  );
};

export default Fluviometros;
