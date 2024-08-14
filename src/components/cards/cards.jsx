  
  
  const Card = ({ imgSrc, title, description, size, condition }) => {
    return (
      <div className="card card-compact bg-base-100 shadow-md w-96 mt-14 mx-4">
        <figure>
          <img
            src={imgSrc}
            alt={title}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {size && <p className="text-sm text-gray-600">Tamanho: {size}</p>}
          {condition && <p className="text-sm text-gray-600">Estado: {condition}</p>}
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-verde-100 rounded-md text-white">
              Requisitar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export const Roupas = () => {
    const cardData = [
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 1",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "P",
        condition: "Novo",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      {
        imgSrc: "https://img.freepik.com/fotos-premium/tres-conjuntos-de-roupas-de-bebe-colocadas-no-chao-de-madeira_437323-10330.jpg?ga=GA1.1.860888004.1721808221&semt=ais_hybrid",
        title: "Conjunto de Bebê 2",
        description: "Se um cachorro mastiga sapatos, de quem ele escolhe?",
        size: "M",
        condition: "Usado",
      },
      // Adicione mais cartões conforme necessário
    ];
  
    return (
      <>
        <h1 className="text-3xl mt-20 text-amarelo-100">Requisite aqui as roupas que precisa</h1>
        <div className="flex flex-wrap">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
              size={card.size}
              condition={card.condition}
            />
          ))}
        </div>
      </>
    );
  };
  