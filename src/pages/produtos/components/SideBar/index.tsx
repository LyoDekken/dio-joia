import React from "react";
import {
  Container,
  SideBarForm,
  SideBarFormInput,
  SideBarFormLabel,
  SideBarFormSearch,
  SideBarFormSearchIconButton,
  SideBarMain,
  SideBarSearchDiv,
  SideBarSpecial,
  SideBarSpecialLink,
  SideBarSpecialText,
  SideBarTitle,
} from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function SideBarProducts({ categorie }: any) {
  const renderLinks = (items: any[]) => {
    return items.map((data: any) => (
      <SideBarSpecialLink key={data.id}>
        <SideBarSpecialText>{data.name}</SideBarSpecialText>
      </SideBarSpecialLink>
    ));
  };

  return (
    <Container>
      <SideBarMain>
        <SideBarSearchDiv>
          <SideBarForm>
            <SideBarFormLabel>Pesquisar</SideBarFormLabel>
            <SideBarFormSearch>
              <SideBarFormInput />
              <SideBarFormSearchIconButton>
                <MagnifyingGlass size={24} />
              </SideBarFormSearchIconButton>
            </SideBarFormSearch>
          </SideBarForm>
        </SideBarSearchDiv>
        <SideBarTitle>Seleção Especial</SideBarTitle>
        <SideBarSpecial>
          {renderLinks([
            { id: 1, name: "Fabricação" },
            { id: 2, name: "Novidades" },
            { id: 3, name: "Promoções" },
            { id: 4, name: "Religiosos" },
          ])}
        </SideBarSpecial>

        <SideBarTitle style={{ marginTop: "30px" }}>Categorias</SideBarTitle>
        <SideBarSpecial>{renderLinks(categorie)}</SideBarSpecial>
      </SideBarMain>
    </Container>
  );
}
