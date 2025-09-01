<script>
// 🌐 Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 🌐 Hero Button Click
document.querySelector(".hero button")?.addEventListener("click", () => {
  alert("🚀 Welcome to Uday AI Studio!");
});

// 🌐 Fade-in Animation
const faders = document.querySelectorAll("section");
const options = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// 🌐 Demo Button → Update iframe with params
function openDemoWithParams(){
  const prompt = encodeURIComponent(document.getElementById('prompt').value || 'A cinematic sunrise over a futuristic city');
  const steps = encodeURIComponent(document.getElementById('steps').value || '24');
  const preset = encodeURIComponent(document.getElementById('preset').value || 'cinematic');
  const ratio = encodeURIComponent(document.getElementById('ratio').value || '1:1');

  // ✅ Fix: use backticks for template string
  const qs = prompt=${prompt}&steps=${steps}&preset=${preset}&ratio=${ratio};
  
  // ✅ Same Space URL as iframe
  const base = 'https://uday-ai.hf.space';
  
  document.getElementById('demoFrame').src = base + '?embed=true&' + qs;
  document.getElementById('demoFrame').focus();
  document.getElementById('demo').scrollIntoView({behavior:'smooth'});
}
</script>
