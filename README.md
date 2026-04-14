# 🌿 Scroll-Based Animation Website — AI Build Guide

> Build a stunning scroll-triggered animation website in **15–20 minutes** — no deep coding knowledge required. Let AI turn your creative vision into a real, working experience.

---

## 📽️ Demo

> *(Add a screen recording or GIF of your final site here)*

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Google Antigravity](https://antigravity.google/) | AI-powered IDE (agent-first) |
| AI Image Generator (e.g., Midjourney, Ideogram, Flux) | Generate animation frames |
| [Google Flow](https://flow.google.com) | Generate transition video |
| [ezgif.com](https://ezgif.com) | Extract frames from video |
| React + Framer Motion | Frontend framework & animation |

---

## 🚀 Step-by-Step Guide

### Step 1 — Set Up Your IDE

Download and install **Google Antigravity**, an AI-powered, agent-first Integrated Development Environment (IDE).

Create a **new project folder** inside Antigravity to house your website.

---

### Step 2 — Generate Animation Frames

You need two key frames: a **starting frame** and an **ending frame** for your scroll animation. Use any AI image generation tool (Midjourney, Ideogram, Flux, etc.) with the prompts below as a reference.

**First Frame Prompt (example):**

```
A modern, custom-designed 3D cartoon-style gaming PC tower is floating horizontally
in the exact center of a vast, soft cream-white void that extends into a gentle,
minimalist space background. The computer chassis is primarily sleek, matte-white,
with clean lines and slightly exaggerated proportions, featuring several integrated
forest elements. Small, stylized pine trees and bushes sprout directly from vents on
the top and sides, a tiny winding dirt path graphic is painted on the main side panel,
and a cascade of miniature bioluminescent vines and glowing blue-green LEDs trails
from the rear. The main window on the side reveals a stylized internal 'core' with
rotating gears and glowing blue plasma, rendered with a chunky, friendly cartoon aesthetic.

Soft, warm light from an unseen source on the right highlights the edges, creating gentle
gradients and casting soft, purple-tinted shadows that give the PC a tangible, floaty quality.
Small, decorative starbursts and a few softly blurred white asteroid fragments drift around it
in the cream space. The style is charming, polished 3D, like an element from a high-quality
animated feature, with slightly simplified forms and clean, friendly textures. A stylized text
'explore the game' is subtly visible in a small, glowing white script near the bottom right
of the floating PC.
```

**Last Frame Prompt (example):**

```
A 3D cartoon hero section for a gaming website. The image should feature a modern white gaming
PC as the central element, floating in a clean, soft cream white space. The PC is in mid-reveal,
with its components (white custom body panels, motherboard, CPU cooler, RAM sticks, GPU, and PSU)
fanned out in different rotated orientations around it, as if exploding in slow motion. The
components themselves have subtle leaf and vine motifs integrated into their design, and a light
trail of green leaves and faint glowing spores traces the PC's form, adding a soft forest effect.
The style is bright and stylized, with a slight 3D pop. The overall mood is futuristic yet organic
and clean, optimized for the final frame of an animation sequence.
```

---

### Step 3 — Create the Transition Video

Use **Google Flow** to generate a smooth animation between your two frames.

**Video Prompt (example):**

```
Create a smooth transition animation with a few rotations and a reveal of the mechanical parts.
Make it realistic and follow proper physics. It should feel like an Apple-style animation —
smooth, elegant, with an explosion effect and soft light reflections.
```

---

### Step 4 — Extract Frames from the Video

Use **[ezgif.com](https://ezgif.com/video-to-gif)** to extract individual frames from your animation video.

> ⚠️ **Set the frame rate to at least 24 FPS** for a smooth scroll animation.

Save all extracted frames to your project under:

```
public/images/hero/
```

---

### Step 5 — Build the Website Layout

Use the **Antigravity agent** to scaffold your React layout. Paste this prompt (or adapt it to your project):

```
Task: Act as an expert UI/UX Designer and Framer developer. Create a high-fidelity,
long-form landing page for "Custom PCs."

Visual Identity & Palette:
- Background: Cream White (#F5F5F7)
- Typography: Clean, bold Sans-Serif (SF Pro style). Headers in deep Slate/Charcoal;
  emphasis words in Natural Moss Green (#4B5D44) for a "tech-meets-nature" feel.
- Atmosphere: Floating components, extreme whitespace, weightless 3D product renders.

Section 1 — Antigravity Hero (No Buttons):
- Headline: "Lighter than Air. Faster than Thought."
- Visual: High-res 3D render of a floating PC chassis with internal components
  (GPU, RAM) drifting in zero-G.
- Interaction: Framer Motion float animation (Y-axis oscillation). On scroll,
  components reassemble back into the case.

Section 2 — Component Breakdown (Exploded View):
- Long scroll-triggered section. Components (RTX GPU, Liquid Cooler, Wood-accented RAM)
  fly in from screen edges as the user scrolls.
- Thin leader lines connect text blocks to components. Moss Green for specs (e.g., "32GB DDR5").
- Viewport-triggered animations with blur-in + slide-up (Apple-style),
  spring transition with stiffness: 100.

Section 3 — Custom Build Pricing:
- Minimalist "Build Tier" section with horizontal separators (no boxes).
- Tiers: "The Ascent", "The Stratosphere", "The Zenith" with specs and pricing.

Footer:
- Gradually fades in Moss Green as the background color, reversing the theme.
```

---

### Step 6 — Implement the Scroll Animation

Once your layout is ready and your frames are in `public/images/hero/`, give the agent this instruction:

```
Using the images in public/images/hero, create a scroll-based animation where the frame
sequence plays as the user scrolls. Overlay animated text that also responds to scroll
position. Show different feature highlights at different scroll stages. Implement this in
the hero section, replacing the current placeholder.
```

---

### Step 7 — Preview Your Site

Your site will be live on the local development server. Open the provided `localhost` URL in your browser to see the final result.

---

## ⚠️ Important Notes

> **This method is great for static or portfolio projects.** It is **not recommended** for large, dynamic, or production-grade applications due to the following limitations:
> - Large number of image frames → heavy page load
> - Frame-based animation is less flexible than code-driven alternatives
> - Difficult to maintain or scale

### ✅ For Modern, Production-Ready Websites

If you want a professional, maintainable site, build without this AI-framing method and use established libraries directly in React:

| Library | Use Case |
|---|---|
| [Three.js](https://threejs.org/) | 3D scenes & WebGL rendering |
| [GSAP](https://greensock.com/gsap/) | High-performance scroll animations |
| [Framer Motion](https://www.framer.com/motion/) | React animation primitives |
| [Shadcn/ui](https://ui.shadcn.com/) | Accessible, beautiful UI components |

---

## 📁 Project Structure

```
my-project/
├── public/
│   └── images/
│       └── hero/        ← All extracted animation frames go here
├── src/
│   ├── components/
│   │   └── HeroSection.jsx
│   └── App.jsx
├── package.json
└── README.md
```

---
