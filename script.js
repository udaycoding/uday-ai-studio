<script>
async function runAI() {
  const prompt = document.getElementById("prompt").value || "A futuristic city skyline at sunset";

  // ✅ Correct Proxy URL (with https)
  const API_URL = "https://ai-proxy-backend-one.vercel.app/api/generate";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: prompt,
        options: { wait_for_model: true }
      })
    });

    if (!response.ok) {
      throw new Error(`❌ API Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.blob();
    const imgUrl = URL.createObjectURL(result);
    document.getElementById("output").src = imgUrl;

  } catch (err) {
    console.error(err);
    alert("⚠️ Image generate karne me problem aayi!");
  }
}
</script>
