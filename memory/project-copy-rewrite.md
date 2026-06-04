---
name: project-copy-rewrite
description: Marketing site copy rewrite — LP backup route at /lp, main site rewritten with SaaS-style professional copy
metadata:
  type: project
---

Rewrote the main HubBot marketing site copy from landing-page style (emotional FOMO) to SaaS product page style (platform-first, feature depth, professional credibility).

**Changes made (2026-06-04):**
- Created `/app/lp/` route — backup of original LP copy for campaign use (noindex, nofollow)
- Copied original components to `/components/lp/` (HeroLP, WhyHubBotLP, FeaturesLP, AIAgentsLP, TestimonialsLP, CTALPX)
- Rewrote `Hero.tsx` — now positions the platform, not the emotional problem
- Rewrote `WhyHubBot.tsx` — systemic problem framing (4 structural pain points) + step-by-step solution
- Rewrote `Features.tsx` — expanded from 6 to 8 features, includes RAG, NPS, Campaigns, Supervisor, each with category tag
- Rewrote `AIAgents.tsx` — shows 4 agent types with use cases, plus capability list and stats
- Rewrote `Testimonials.tsx` — added stats bar (200+ provedores, 1M+ mensagens, etc.) before testimonials
- Rewrote `CTA.tsx` — "Solicitar Demonstração" framing, trust checklist instead of single badge
- Updated homepage metadata for SaaS keywords

**Why:** Original copy was landing-page style (urgency/fear-driven). Goal was professional SaaS product page tone.

**How to apply:** If user asks to update copy or add features to the marketing site, maintain the SaaS/platform framing established here. The /lp route is for campaigns and should not be changed.
