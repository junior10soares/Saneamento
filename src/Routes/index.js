import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Pages/Site/Home';
import Macrodrenagem from '../Pages/Site/Macrodrenagem';
import Noticias from '../Pages/Site/Noticias';
import Noticia from '../Pages/Site/Noticia';
import Obra from '../Pages/Site/Obra';
import PlantaoSocial from '../Pages/Site/PlantaoSocial';
import ProjetoSocioambiental from '../Pages/Site/ProjetoSocioambiental';
import ProjetoTrabalhoTecnico from '../Pages/Site/ProjetoTrabalhoTecnico';
import EstudoCatadores from '../Pages/Site/EstudoCatadores';
import Residuos from '../Pages/Site/Residuos';
import Sobre from '../Pages/Site/Sobre';
import SistemaMonitoramento from '../Pages/Site/SistemaMonitoramento';
import EstacaoMeteorologicas from '../Pages/Site/EstacaoMeteorologicas';
import Login from '../Pages/Painel/auth/login';
import Banner from '../Pages/Painel/Banner';
import PainelObras from '../Pages/Painel/Obras';
import PainelVideos from '../Pages/Painel/Videos';
import PainelNoticias from '../Pages/Painel/Noticias';
import PainelMensagens from '../Pages/Painel/Mensagens';
import ObrasCreate from '../Pages/Painel/Obras/create';
import PhaseWork from '../Pages/Painel/PhaseWork';
import PhaseWorkEdit from '../Pages/Painel/PhaseWork/edit';
import ObraEdit from '../Pages/Painel/Obras/Edit';
import PowerBi from '../Pages/Painel/Dashboard';
import LivroCatadores from '../Pages/Site/LivroCatadores';
import BueirosInteligentes from '../Pages/Site/BueirosInteligentes';

const Routes = () => {
  return(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/macrodrenagem" component={Macrodrenagem} />
        <Route exact path="/noticias" component={Noticias} />
        <Route exact path="/noticias/:slug/:id" component={Noticia} />
        <Route exact path="/obra/:id" component={Obra} />
        <Route exact path="/plantao-social" component={PlantaoSocial} />
        <Route exact path="/projeto-socioambiental" component={ProjetoSocioambiental} />
        <Route exact path="/projeto-trabalho-tecnico" component={ProjetoTrabalhoTecnico} />
        <Route exact path="/livro-sobre-catadores" component={LivroCatadores} />
        <Route exact path="/estudo-de-catadores" component={EstudoCatadores} />
        <Route exact path="/residuos" component={Residuos} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/sistemas-monitoramento" component={SistemaMonitoramento} />
        <Route exact path="/estacao-meteorologicas" component={EstacaoMeteorologicas} />  
        <Route exact path="/bueiros-inteligentes" component={BueirosInteligentes} />      
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/painel/banner" component={Banner} />
        <Route exact path="/painel/videos" component={PainelVideos} />
        <Route exact path="/painel/dashboard" component={PowerBi} />
        <Route exact path="/painel/noticias" component={PainelNoticias} />
        <Route exact path="/painel/mensagens" component={PainelMensagens} />
        <Route exact path="/painel/obras" component={PainelObras} />
        <Route exact path="/painel/obras/create" component={ObrasCreate} />
        <Route exact path="/painel/obras/edit/:id" component={ObraEdit} />
        <Route exact path="/painel/obra/fase-obra/:id" component={PhaseWork} />
        <Route exact path="/painel/fase-obra/edit/:id" component={PhaseWorkEdit} />


    </Switch>
  );
}

export default Routes;