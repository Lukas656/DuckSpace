import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLoja } from "../services/lojaService";

export default function Loja() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getLoja(slug)
      .then(setData)
      .catch(() => setError(true));
  }, [slug]);

  if (error) return <p className="text-center mt-20">Loja não encontrada 😢</p>;
  if (!data) return <p className="text-center mt-20">Carregando...</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{data.nome}</h1>
      <p className="text-gray-600">{data.descricao}</p>
      <a href='/' className="text-cosmic">Retornar</a>
      

    </div>
  );
}
