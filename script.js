// 30% of this was ChatGPT'd
const overlay = document.getElementById("overlay");
const enterBtn = document.getElementById("enter-btn");
enterBtn.addEventListener("click", () => overlay.style.display = "none");


// Translation toggle
const translateBtn = document.getElementById("translate-btn");
let translated = false;

translateBtn.addEventListener("click", () => {
	translated = !translated;

	if (translated) { //Essentially if it's Japanese
		// Hero title
		document.querySelector(".hero-title").textContent = "武士道";

		// Section heading
		document.querySelector(".virtues h2").textContent = "武士道の七つの徳";

		// Virtues 
		const virtues = document.querySelectorAll('.virtue')
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
	} else { //essentially if it's englishj 
		// Hero title
		const heroTitle = document.querySelector(".hero-title");
		heroTitle.innerHTML = `<span class="letter">BUSHIDO</span>`;

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