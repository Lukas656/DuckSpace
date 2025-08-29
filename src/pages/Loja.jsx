import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export default function Loja() {
  const { slug } = useParams()
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    // força buscar do /public (raiz)
    const url = `${import.meta.env.BASE_URL}lojistas/${slug}.json`
    console.log("🔍 Buscando JSON em:", url)

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao carregar JSON")
        return res.json()
      })
      .then(json => {
        console.log("✅ JSON carregado:", json)
        setData(json)
      })
      .catch(err => {
        console.error("❌ Erro:", err)
        setError(true)
      })
  }, [slug])

  if (error) return <p className="text-center mt-20">Loja não encontrada 😢</p>
  if (!data) return <p className="text-center mt-20">Carregando...</p>

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{data.nome}</h1>
      <p className="mb-6 text-gray-600">{data.descricao}</p>

      <div className="grid gap-4">
        {data.produtos.map((item, i) => (
          <div key={i} className="p-4 border rounded-xl shadow">
            <h2 className="text-xl font-semibold">{item.nome}</h2>
            <p className="text-gray-500">{item.preco}</p>
            <a
              href={`https://wa.me/${data.whatsapp}?text=Olá, tenho interesse em: ${item.nome}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
