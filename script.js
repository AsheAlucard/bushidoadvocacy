// 30% of this was ChatGPT'd
const overlay = document.getElementById("overlay");
const enterBtn = document.getElementById("enter-btn");
enterBtn.addEventListener("click", () => overlay.style.display = "none");


const backdrop = document.getElementById("backdrop");
const letters = document.querySelectorAll(".letter");

const dataMap = {
  B: { img: "pictures/blade.jpg", sfx: "sounds/taiko.mp3" },
  U: { img: "pictures/armor.jpg", sfx: "sounds/shakuhachi.mp3" },
  S: { img: "pictures/samurai.jpg", sfx: "sounds/koto.mp3" },
  H: { img: "pictures/temple.jpg", sfx: "sounds/gong.mp3" },
  I: { img: "pictures/ink.jpg", sfx: "sounds/flute.mp3" },
  D: { img: "pictures/discipline.jpg", sfx: "sounds/drum.mp3" },
  O: { img: "pictures/oath.jpg", sfx: "sounds/bell.mp3" },
};

let currentAudio = null;

letters.forEach(letter => {
  letter.addEventListener("mouseenter", () => {
    const key = letter.dataset.key;
    const assets = dataMap[key];
    if (!assets) return;

    backdrop.style.backgroundImage = `url(${assets.img})`;
    backdrop.style.opacity = 0.5;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    currentAudio = new Audio(assets.sfx);
    currentAudio.play();
  });

  letter.addEventListener("mouseleave", () => {
    backdrop.style.opacity = 0;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
  });
});


// Translation toggle
const translateBtn = document.getElementById("translate-btn");
let translated = false;

translateBtn.addEventListener("click", () => {
	translated = !translated;

	if (translated) {
		// Hero title
		document.querySelector(".hero-title").textContent = "武士道";

		// Section heading
		document.querySelector(".virtues h2").textContent = "武士道の七つの徳";

		// Virtues
		const virtues = document.querySelectorAll(".virtue");
		const jpVirtues = [
			"義 — Gi",
			"礼 — Rei",
			"勇 — Yu",
			"名誉 — Meiyo",
			"仁 — Jin",
			"誠 — Makoto",
			"忠義 — Chuugi"
		];
		virtues.forEach((v, i) => v.textContent = jpVirtues[i]);

		// Quotes
		const quotes = document.querySelectorAll(".quotes blockquote");
		const jpQuotes = [
			"「武士道は死に際において顕現する。すなわち、生と死の選択においては常に死を選ぶということである。他に理由はない。」\n— 山本常朝『葉隠』",
			"「敵を誇りに思うべし。敵の成功はすなわち己の成功なり。」\n— 新渡戸稲造『武士道』"
		];
		quotes.forEach((q, i) => q.textContent = jpQuotes[i]);

		// Button text
		translateBtn.textContent = "🌐 Translate English";
	} else {
		// Hero title
		const heroTitle = document.querySelector(".hero-title");
		heroTitle.innerHTML = `
			<span class="letter" data-key="B">B</span>
			<span class="letter" data-key="U">U</span>
			<span class="letter" data-key="S">S</span>
			<span class="letter" data-key="H">H</span>
			<span class="letter" data-key="I">I</span>
			<span class="letter" data-key="D">D</span>
			<span class="letter" data-key="O">O</span>
		`;

		// Rebind hero interactivity after resetting HTML
		bindHeroLetters();

		// Section heading
		document.querySelector(".virtues h2").textContent = "The Seven Virtues of Bushidō";

		// Virtues
		const virtues = document.querySelectorAll(".virtue");
		const enVirtues = [
			"Gi — Righteousness",
			"Rei — Respect",
			"Yu — Courage",
			"Meiyo — Honor",
			"Jin — Compassion",
			"Makoto — Integrity",
			"Chuugi — Loyalty"
		];
		virtues.forEach((v, i) => v.textContent = enVirtues[i]);

		// Quotes
		const quotes = document.querySelectorAll(".quotes blockquote");
		const enQuotes = [
			"\"Bushidō is realized in the presence of death. This means choosing death whenever there is a choice between life and death. There is no other reasoning.\" \n— Yamamoto Tsunetomo, *Hagakure*",
			"\"You are to be proud of your enemy; then the success of your enemy is your success also.\" \n— Inazō Nitobe, *Bushidō: The Soul of Japan*"
		];
		quotes.forEach((q, i) => q.textContent = enQuotes[i]);

		// Button text
		translateBtn.textContent = "🌐 Translate 日本語";
	}
});

// Rebind function for hero letters when switching back
function bindHeroLetters() {
	const backdrop = document.getElementById("backdrop");
	const letters = document.querySelectorAll(".letter");

	letters.forEach(letter => {
		letter.addEventListener("mouseenter", () => {
			const key = letter.dataset.key;
			const assets = dataMap[key];
			if (!assets) return;

			backdrop.style.backgroundImage = `url(${assets.img})`;
			backdrop.style.opacity = 0.5;

			if (currentAudio) {
				currentAudio.pause();
				currentAudio = null;
			}
			currentAudio = new Audio(assets.sfx);
			currentAudio.play();
		});

		letter.addEventListener("mouseleave", () => {
			backdrop.style.opacity = 0;
			if (currentAudio) {
				currentAudio.pause();
				currentAudio = null;
			}
		});
	});
}
