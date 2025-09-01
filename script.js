<script>
async function runAI() {
  const prompt = document.getElementById("prompt").value || "A cinematic sunrise over a futuristic city";
  const steps = document.getElementById("steps").value || "24";

  // Hugging Face Inference API URL (apna model ka lagana hoga)
  const API_URL = "https://huggingface.co/stabilityai/stable-diffusion-3.5-large";

  // Yahan apna Hugging Face Token paste karo
  const HF_TOKEN = "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";

  // Request
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Authorization": Bearer ${HF_TOKEN},
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: prompt,
      options: { wait_for_model: true }
    })
  });

  // Response ko Blob me convert karo (kyunki image hai)
  const result = await response.blob();
  const imgUrl = URL.createObjectURL(result);

  // Show in page
  document.getElementById("output").src = imgUrl;
}
</script>
