import { Header } from "../components/header/header";

export const Contacts = () => {
  return (
    <>
      <Header />
      <h1>CONTATCS PAGE</h1>
      <div className=" flex rounded-box mt-20 ml-80 w-[1800px]">
      <div className="w-[600px]">
  <img
    src="/public/imgs/imagemContact.jpg"
    className="w-full h-auto"
    style={{
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    }}
  />
</div>
  <div className="w-[600px]">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="w-full" />
  </div>
  </div>
    </>
  );
};
