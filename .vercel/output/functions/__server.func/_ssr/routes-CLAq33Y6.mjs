import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLAq33Y6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var htmlCode = `<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph of body text.</p>
    <img src="star.svg" alt="A gold star">
  </body>
</html>`;
var htmlDoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { font-family: Georgia, serif; margin: 24px; background: #fff; color: #1c1917; }
  h1 { margin: 0 0 8px; }
  p { margin: 0 0 12px; }
  img { width: 72px; height: 72px; }
</style>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph of body text.</p>
  <img alt="A gold star" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpolygon fill='%23f59e0b' points='32,4 39,24 60,24 43,36 50,56 32,44 14,56 21,36 4,24 25,24'/%3E%3C/svg%3E">
</body>
</html>`;
var cssCode = `h1 {
  color: red;
  font-size: 60px;
  text-align: center;
}

.card {
  width: 500px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}`;
var cssDoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 16px; background: #fff; font-family: Georgia, serif; }
  h1 {
    color: red;
    font-size: 48px;
    text-align: center;
  }
  .card {
    width: min(500px, 100%);
    margin: 0 auto;
    background-color: #ff9500;
    padding: 0 20px 20px 20px;
    border: 5px solid black;
    box-sizing: border-box;
  }
  p { margin: 0; font-size: 18px; }
</style>
</head>
<body>
  <div class="card">
    <h1>Hello</h1>
    <p>Same words. CSS changed the colour, size, border and background.</p>
  </div>
</body>
</html>`;
var jsCode = `// Find the heading, then change it
const title = document.getElementById("title");
title.textContent = "The light is ON";
title.style.color = "#ea580c";
title.style.fontSize = "36px";`;
var jsDoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; font-family: Georgia, serif; background: #111; color: #fafaf9; text-align: center; padding: 28px 12px; }
  button { font: inherit; padding: 8px 14px; margin: 6px; border-radius: 8px; border: 2px solid #fafaf9; background: #fafaf9; }
  #bulb { width: 70px; height: 70px; margin: 12px auto; border-radius: 50%; background: #44403c; box-shadow: inset 0 -8px 0 #292524; }
  #bulb.on { background: #fde047; box-shadow: 0 0 28px #facc15; }
</style>
</head>
<body>
  <h2 id="title">The light is OFF</h2>
  <div id="bulb"></div>
  <button id="on">Turn on the light</button>
  <button id="off">Turn off the light</button>
  <script>
    const title = document.getElementById("title");
    const bulb = document.getElementById("bulb");
    document.getElementById("on").onclick = function () {
      title.textContent = "The light is ON";
      title.style.color = "#fde047";
      title.style.fontSize = "28px";
      bulb.className = "on";
    };
    document.getElementById("off").onclick = function () {
      title.textContent = "The light is OFF";
      title.style.color = "#fafaf9";
      title.style.fontSize = "24px";
      bulb.className = "";
    };
  <\/script>
</body>
</html>`;
var starter = `<!DOCTYPE html>
<html>
<head>
<style>
  body {
    font-family: Georgia, serif;
    text-align: center;
    background: #fff7ed;
  }
  h1 { color: #ea580c; }
  button {
    font-size: 18px;
    padding: 10px 16px;
  }
</style>
</head>
<body>
  <h1 id="title">Hello World</h1>
  <p>Edit the code, then press Run.</p>
  <button onclick="sayHi()">Click me</button>
  <script>
    function sayHi() {
      document.getElementById("title").textContent = "JavaScript changed this!";
      document.getElementById("title").style.color = "red";
    }
  <\/script>
</body>
</html>`;
function Frame({ title, doc, tall }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-xl border border-stone-300 bg-white shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-stone-200 bg-stone-100 px-3 py-2 text-xs font-semibold tracking-wide text-stone-500 uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			title,
			sandbox: "allow-scripts",
			srcDoc: doc,
			className: tall ? "h-[420px] w-full bg-white" : "h-64 w-full bg-white"
		})]
	});
}
function Code({ code }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "h-64 max-w-full overflow-auto rounded-xl border border-stone-800 bg-stone-950 p-4 text-left text-[13px] leading-relaxed whitespace-pre-wrap text-amber-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: code })
	});
}
function Split({ badge, title, blurb, code, doc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid min-w-0 gap-4 border-t border-stone-300 py-8 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold tracking-[0.18em] text-orange-700 uppercase",
					children: badge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-serif text-2xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-stone-700",
					children: blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { code })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-w-0 flex-col justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "What the browser shows",
				doc
			})
		})]
	});
}
function Home() {
	const [draft, setDraft] = (0, import_react.useState)(starter);
	const [running, setRunning] = (0, import_react.useState)(starter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-8 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-[0.2em] text-orange-700 uppercase",
						children: "Webpage lesson"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-serif text-4xl tracking-tight",
						children: "The big three"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-base leading-relaxed text-stone-700",
						children: "Every webpage is built from three jobs. HTML is the skeleton. CSS is the clothes. JavaScript is the muscles that make things move."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
				badge: "1 · HTML",
				title: "Tags name the pieces",
				blurb: "An element starts with a tag in angle brackets, like <h1> for a heading, <p> for a paragraph, and <img> for a picture. Most tags have a start and an end so the browser knows what is inside.",
				code: htmlCode,
				doc: htmlDoc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
				badge: "2 · CSS",
				title: "Rules change how it looks",
				blurb: "CSS does not add new words. It styles the HTML you already wrote: colour, size, width, border, background and alignment.",
				code: cssCode,
				doc: cssDoc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Split, {
				badge: "3 · JavaScript",
				title: "The programming language of the web",
				blurb: "JavaScript can calculate, check, and rewrite data. It can also change HTML text and CSS styles after the page has loaded. Try the buttons on the right.",
				code: jsCode,
				doc: jsDoc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 border-t border-stone-300 pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold tracking-[0.18em] text-orange-700 uppercase",
						children: "Playground"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-serif text-2xl",
						children: "Type it. Run it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-stone-700",
						children: "Change the heading, colours, or the click function. Press Run to see your page. Nothing here is saved."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid min-w-0 gap-4 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setRunning(draft),
									className: "rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700",
									children: "Run"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										setDraft(starter);
										setRunning(starter);
									},
									className: "rounded-lg border border-stone-400 bg-white px-4 py-2 text-sm font-semibold hover:bg-stone-50",
									children: "Reset"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								spellCheck: false,
								"aria-label": "Your HTML code",
								className: "h-[420px] w-full max-w-full resize-y rounded-xl border border-stone-800 bg-stone-950 p-4 font-mono text-[13px] leading-relaxed text-amber-100"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0 md:pt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
								title: "Your page",
								doc: running,
								tall: true
							})
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
