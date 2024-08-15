import { Header } from "../components/header/header";
import { ApprovedItems } from "../components/cards/clothesApproved";
import { Footer } from "../components/footer/footer";

export const Clothes = () => {
  return (
    <>
      <Header />
      <h1>CLOTHES PAGE</h1>
      <ApprovedItems />
      <Footer/>
    </>
  );
};
