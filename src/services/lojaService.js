// src/services/lojasService.js
export async function getLoja(slug) {
  const url = `${import.meta.env.BASE_URL}lojistas/${slug}.json`;
  console.log("🔍 Buscando JSON em:", url);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Erro ao carregar JSON");
    const data = await res.json();
    console.log("✅ JSON carregado:", data);
    return data;
  } catch (error) {
    console.error("❌ Erro ao buscar loja:", error);
    throw error;
  }
}
