import { FormularioDePublicacao } from "../components/adm/formPublic"
import { TabelaDeControle } from "../components/adm/table"
import { Footer } from "../components/footer/footer"
import { Menu } from "../components/adm/menu"
import { HeaderAdministrador } from "../components/header/headerAdministrador"
import { TableDonor } from "../components/adm/tableDonor"
export const Administrador = () => {
return(
    <>
    <HeaderAdministrador/>
    
    <FormularioDePublicacao/>
    <TabelaDeControle/>

    <TableDonor/>
    <Footer/>
    </>
)
}