---
name: project-hubbot
description: HubBot product overview — full capabilities, target market, and tech stack for use when writing copy or building features
metadata:
  type: project
---

HubBot is a multi-tenant SaaS platform for automating customer support via AI, built for Brazilian internet providers (ISPs) and telecom resellers.

**Full product capabilities (from /home/renato/echo-ia source):**
- Omnichannel inbox: WhatsApp, Telegram, Instagram, web chat widget
- Multiple configurable AI agents (Support, Sales, Receptionist, E-commerce, SaaS Onboarding templates)
- RAG (base de conhecimento) — train agents with company docs, plans, coverage FAQs
- Broadcast/Campaigns — segmented WhatsApp mass messaging
- NPS — automated satisfaction surveys post-conversation
- Contacts CRM — lifecycle stages, tags, segmentation, full interaction history
- Analytics dashboard — real-time metrics, team performance, channel volume, conversion funnel
- Supervisor view — queue management, SLA tracking, agent performance
- AI→Human handoff — configurable escalation rules
- Voice via Vapi integration (AI phone calls)
- Billing via Stripe, plans (free/pro), trial period
- Integrations: MK Solutions (ISP management), Zabbix, Vapi
- Multi-tenancy: organizations, departments, roles (owner/admin/member)
- i18n: Portuguese (pt-BR) and English

**Target market:** Brazilian ISPs (provedores de internet), telecom resellers, TV subscription companies

**Why:** This product exists at /home/renato/echo-ia — this is the actual SaaS app. The /home/renato/hubbot/nextjs-app is its marketing site.
