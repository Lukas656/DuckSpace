const API_URL = import.meta.env.VITE_MONGODB_URI

if (!API_URL) {
  throw new Error("❌ VITE_API_URL não está definido no .env");
}

// requests
export async function getNavLinks() {
  const res = await fetch(`${API_URL}/navlinks`);
  return res.json();
}

export async function getHeroData(){
  const res = await fetch(`${API_URL}/hero`);
  return res.json();
}
