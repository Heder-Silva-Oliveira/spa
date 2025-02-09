import React from "react";
import PageBody from "../../components/Geral/PageBody";
import { BigCalender } from "../../components/Planner/Calendar";
import { ClientContextProvider } from "../../context/ClientContext";
import { PlannerContextProvider } from "../../context/PlannerContext";
import { SubjectContextProvider } from "../../context/SubjectContext";
import { DivHeader,DivTitle,DivLogo,DivIconTitle,DivRouteTitle,Path,Title } from "./styles";
import IconSystem from "../../assets/IconSystem";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";



class PlannerPage extends React.Component {
  render() {
    return (
      
        <PageBody showNav={true}>
          <PlannerContextProvider>
          <SubjectContextProvider>
          <ClientContextProvider>
          <DivHeader>
            {/*A Rota e o Nome da Pagina de Planner*/}
            <DivRouteTitle>
              <Path>Home - Planner</Path>
              <DivTitle>
                <Title>Planner</Title>
                {/*Tippy Usada para aparecer uma caixa de text quando passa o mouse em cima */}
                <Tippy content="Agenda, calendar with activites and appointments of the day">
                  <DivIconTitle> <IconSystem icon={"Info"} width={"1rem"} height={"1rem"}/> </DivIconTitle>
                </Tippy>
              </DivTitle>
            </DivRouteTitle>
            {/*LOGO da TCS na parte inicial da tela de Planner */}
              <DivLogo>
                <IconSystem icon={"LogoTcsPlanner"} width={"174px"} height={"58px"}/> 
              </DivLogo>
          </DivHeader>
          <BigCalender />
          </ClientContextProvider>
          </SubjectContextProvider>
          </PlannerContextProvider>
        </PageBody>
      
    );
  }
}

export default PlannerPage;