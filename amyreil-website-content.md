# Amyreil Technologies: Website Content & Structure Spec

**Purpose:** Defines every page, every section, and the placeholder copy for the Amyreil Technologies website. Use alongside `design.md`, which owns the visual layer (colors, type, spacing, components). This file owns structure and words.

**Source:** Company Overview handbook (Amyreil Technologies).
**Status:** Draft v1. Placeholder copy is written to be usable, but edit freely.

---

## 0. How to use this file with `design.md`

- Every section has a **Section ID** (e.g. `HOME-01`). Reference these IDs in `design.md` when assigning layouts or components.
- **Component hint** is a suggestion only (hero, card-grid, split, banner, etc.). Map it to whatever component names `design.md` uses.
- Copy fields use fixed labels so they can be bound to design slots: `eyebrow`, `heading`, `subheading`, `body`, `bullets`, `cta_primary`, `cta_secondary`, `items`.
- `{{double_braces}}` = a value you must supply (email, URL, name).
- `[CONFIRM]` = a claim not in the handbook. Verify or delete before launch.
- Do not add stats, client logos, testimonials, or team names until they are real. Founding-stage companies lose trust faster by faking these than by leaving them out.

---

## 1. Company facts (single source of truth)

| Field | Value |
|---|---|
| Company name | Amyreil Technologies |
| Short name | Amyreil |
| Type | Independent agency |
| Stage | Founding stage |
| Operations | Remote-first |
| Industry | IT services provider; SaaS product development; web and app development; AI automation; UI/UX design and prototyping; data analytics and chatbots |
| Logo | Blue "A" mark + "Amyreil" wordmark (use asset from `design.md`) |
| Contact email | `{{contact_email}}` |
| Social links | `{{linkedin_url}}`, `{{x_url}}`, `{{github_url}}` (include only those that exist) |

### Suggested tagline (pick one)
1. Original SaaS. Fewer steps.
2. Fresh answers to problems everyone thinks are solved.
3. Technology that starts with the right questions.

### Brand voice (from handbook tone)
- Plain, direct, confident. Short sentences.
- Talks about **problems and outcomes**, not buzzwords.
- Avoid: "cutting-edge", "world-class", "revolutionary", "synergy", "next-gen".
- Recurring ideas to reuse: *asking the right questions*, *original thinking*, *cutting complexity*, *removing steps*, *a clear reason to exist*.

---

## 2. Sitemap: page count

**Total: 9 pages** (6 main, 2 legal, 1 utility)

| # | Page | URL | In main nav? | Priority |
|---|---|---|---|---|
| 1 | Home | `/` | Yes | Launch |
| 2 | Services | `/services` | Yes | Launch |
| 3 | Products | `/products` | Yes | Launch |
| 4 | About | `/about` | Yes | Launch |
| 5 | Careers | `/careers` | Yes (or footer only) | Optional at launch |
| 6 | Contact | `/contact` | Yes (as CTA button) | Launch |
| 7 | Privacy Policy | `/privacy` | Footer | Launch |
| 8 | Terms of Service | `/terms` | Footer | Launch |
| 9 | 404 Not Found | `/404` | None | Launch |

**Minimum viable launch = 5 main pages + 2 legal + 404** (drop Careers if you aren't hiring yet).

**Phase 2 (later, not in this spec):** individual service detail pages (`/services/saas-development`, etc.), case studies (`/work`), blog (`/insights`), one page per product.

### Page flow
```
Home ─┬─ Services ──┐
      ├─ Products ──┤
      ├─ About ─────┼──► Contact (primary conversion)
      └─ Careers ───┘
```

---

## 3. Global elements (appear on every page)

### GLOBAL-01 · Navigation bar
- **Component hint:** sticky top nav, logo left, links center/right, CTA button far right
- **Logo:** links to `/`
- **Links:** Services · Products · About · Careers
- **cta_primary:** `Start a project` → `/contact`
- **Mobile:** collapses to menu; CTA stays visible inside menu

### GLOBAL-02 · Footer
- **Component hint:** multi-column footer
- **Column 1 (brand):**
  - Logo
  - body: `Original SaaS products and digital solutions, built remotely and built with purpose.`
- **Column 2 (Company):** About · Careers · Contact
- **Column 3 (What we do):** SaaS product development · Web and app development · AI automation · UI/UX design · Data analytics and chatbots (each links to `/services#anchor`)
- **Column 4 (Get in touch):** `{{contact_email}}` · Social icons
- **Bottom bar:** `© 2026 Amyreil Technologies. All rights reserved.` · Privacy Policy · Terms of Service

### GLOBAL-03 · Closing CTA banner (reusable on Home, Services, Products, About)
- **Component hint:** full-width banner, high contrast
- **heading:** `Have a problem worth solving?`
- **body:** `Tell us what's slowing you down. We'll tell you honestly whether we can help.`
- **cta_primary:** `Start a project` → `/contact`
- **cta_secondary:** `{{contact_email}}` (mailto)

---

## 4. Page specs

---

### PAGE 1 · Home (`/`)

**Goal:** In under 10 seconds, say who we are, what we do, and why we're different. Push to Services and Contact.

**SEO**
- title: `Amyreil Technologies | Original SaaS Products & Digital Solutions`
- meta description: `Amyreil Technologies is an independent, remote-first agency building original SaaS products, web and app solutions, AI automation, and more. Cutting complexity so everyday work gets easier.`

#### HOME-01 · Hero
- **Component hint:** large hero, headline + subtext + two buttons, room for brand visual (the logo's "A" shape is already used as a background motif in the handbook)
- **eyebrow:** `Amyreil Technologies`
- **heading:** `Great technology starts with asking the right questions.`
- **subheading:** `We're an independent, remote-first agency building original SaaS products and digital solutions that cut complexity, so everyday work gets easier.`
- **cta_primary:** `Start a project` → `/contact`
- **cta_secondary:** `See what we do` → `/services`

#### HOME-02 · Positioning statement
- **Component hint:** centered large-text statement, minimal
- **body:** `We don't build technology just to add another tool to the market. We build it to make a meaningful difference.`

#### HOME-03 · What we do
- **Component hint:** card grid (5 cards; 3 + 2 layout or horizontal scroll on mobile)
- **eyebrow:** `What we do`
- **heading:** `Five ways we help you move faster`
- **items:**
  1. **SaaS product development**: `Original software products built to solve problems others overlook.`
  2. **Web and app development**: `Fast, reliable websites and apps that work in daily use, not just on launch day.`
  3. **AI automation services**: `Automations that take repetitive work off your team's plate.`
  4. **UI/UX design and prototyping**: `Practical interfaces, tested as prototypes before a line of production code.`
  5. **Data analytics and chatbots**: `Turn your data into decisions, and answer your customers around the clock.`
- **cta_secondary:** `Explore all services` → `/services`

#### HOME-04 · Our approach
- **Component hint:** split layout (text left, 4 numbered points right) or 4-column icon row
- **eyebrow:** `How we think`
- **heading:** `We look past the familiar.`
- **body:** `Instead of following familiar patterns or recreating what already exists, we look for better ways to solve the problem.`
- **items:**
  1. **Ask first**: `We start with the right questions, not a feature list.`
  2. **Remove steps**: `Good products take work away. They don't add more.`
  3. **Build for daily use**: `If it only works on launch day, it doesn't work.`
  4. **Ship with purpose**: `Every product needs a clear reason to exist.`

#### HOME-05 · Core values strip
- **Component hint:** 5-item horizontal row of icon + label + one-liner
- **eyebrow:** `What we stand for`
- **heading:** `Five values behind every project`
- **items:**
  - **Efficiency**: `Our products remove steps instead of adding them.`
  - **Integrity**: `We do right by our users and by one another, every time.`
  - **Effectiveness**: `What we build works in daily use, not just on launch day.`
  - **Innovation**: `Original thinking is our starting point, not an occasional exception.`
  - **Purposeful Products**: `Market-ready, with a clear reason to exist. Never generic clones.`
- **cta_secondary:** `Learn more about us` → `/about`

#### HOME-06 · Products teaser
- **Component hint:** 2-column feature block with image/mockup placeholder
- **eyebrow:** `Our products`
- **heading:** `Original SaaS, built in-house.`
- **body:** `Alongside client work, we're building our own SaaS products for challenges others overlook. Our first releases are in progress. [CONFIRM]`
- **cta_primary:** `See what we're building` → `/products`

#### HOME-07 · Closing CTA
- Use **GLOBAL-03**.

---

### PAGE 2 · Services (`/services`)

**Goal:** Explain each offering clearly enough that a visitor can self-qualify, then send them to Contact.

**SEO**
- title: `Services | Amyreil Technologies`
- meta description: `SaaS product development, web and app development, AI automation, UI/UX design and prototyping, data analytics and chatbots, delivered by a remote-first independent agency.`

#### SVC-01 · Page hero
- **Component hint:** compact hero (shorter than Home), with anchor links to each service below
- **eyebrow:** `Services`
- **heading:** `Practical engineering. Original thinking.`
- **subheading:** `From first idea to finished product, we help businesses and individuals cut complexity and unnecessary effort.`
- **anchor links:** SaaS · Web & Apps · AI Automation · UI/UX · Data & Chatbots

#### SVC-02 → SVC-06 · Service blocks
- **Component hint:** alternating split sections (text + visual), each with an anchor ID. Use the same internal structure for all five.
- **Fields per block:** `eyebrow` (number), `heading`, `body`, `bullets` (3), `good_fit` line, `cta_secondary`

**SVC-02 · SaaS product development** (`#saas`)
- eyebrow: `01`
- heading: `SaaS product development`
- body: `We design, build, and launch software products that solve real problems, from the first question to a market-ready release. No generic clones.`
- bullets:
  - `Problem discovery and product definition`
  - `Full-stack build, from MVP to scale`
  - `Launch support and iteration`
- good_fit: `Good fit for: founders and teams with a problem worth solving and no one solving it well.`
- cta_secondary: `Discuss your product` → `/contact`

**SVC-03 · Web and app development** (`#web-app`)
- eyebrow: `02`
- heading: `Web and app development`
- body: `Websites, web apps, and mobile apps built for daily use. Fast, reliable, and easy for your team to run.`
- bullets:
  - `Business websites and web platforms`
  - `Custom web and mobile applications`
  - `Integrations with the tools you already use`
- good_fit: `Good fit for: businesses that need a digital presence or internal tool that actually works.`
- cta_secondary: `Plan your build` → `/contact`

**SVC-04 · AI automation services** (`#ai-automation`)
- eyebrow: `03`
- heading: `AI automation services`
- body: `We find the repetitive steps in your workflow and automate them, so people spend time on work that needs people.`
- bullets:
  - `Workflow audit and automation mapping`
  - `Custom AI-powered automations`
  - `Integration with your existing systems`
- good_fit: `Good fit for: teams buried in manual, repetitive tasks.`
- cta_secondary: `Automate a workflow` → `/contact`

**SVC-05 · UI/UX design and prototyping** (`#design`)
- eyebrow: `04`
- heading: `UI/UX design and prototyping`
- body: `Practical design that makes products easier to use. We prototype first, so you can see and test the idea before committing to a full build.`
- bullets:
  - `User flows and wireframes`
  - `Interactive prototypes`
  - `Visual design and design systems`
- good_fit: `Good fit for: early-stage ideas, redesigns, and products with confusing interfaces.`
- cta_secondary: `Start with a prototype` → `/contact`

**SVC-06 · Data analytics and chatbots** (`#data-chatbots`)
- eyebrow: `05`
- heading: `Data analytics and chatbots`
- body: `Turn scattered data into clear answers, and give your customers instant, helpful responses with chatbots built around your business.`
- bullets:
  - `Dashboards and reporting`
  - `Data cleanup and analysis`
  - `Custom chatbots for support and sales`
- good_fit: `Good fit for: teams with data they can't use and customers who need faster answers.`
- cta_secondary: `Talk about your data` → `/contact`

#### SVC-07 · How we work *(proposed process; not in handbook)* [CONFIRM]
- **Component hint:** 4-step horizontal timeline / numbered steps
- **eyebrow:** `Our process`
- **heading:** `Simple, from first call to final release`
- **items:**
  1. **Ask**: `We learn the real problem before proposing anything.`
  2. **Shape**: `We define scope, design, and a plan you can understand.`
  3. **Build**: `We engineer in small steps, with regular check-ins.`
  4. **Refine**: `We launch, measure how it's used, and improve it.`

#### SVC-08 · Closing CTA
- Use **GLOBAL-03**.

---

### PAGE 3 · Products (`/products`)

**Goal:** Show that Amyreil builds its own original products, not only client work. Capture interest while the product line is still early.

**SEO**
- title: `Products | Amyreil Technologies`
- meta description: `Original SaaS products from Amyreil Technologies, built for challenges others overlook.`

#### PROD-01 · Page hero
- **eyebrow:** `Products`
- **heading:** `Solutions for problems everyone assumes are already solved.`
- **subheading:** `Our products are built to remove steps, not add them. Each one ships market-ready, with a clear reason to exist.`

#### PROD-02 · Product principles
- **Component hint:** 3-column icon row
- **heading:** `What every Amyreil product must do`
- **items:**
  1. **Solve a real problem**: `If we can't name the problem in one sentence, we don't build it.`
  2. **Cut effort**: `Fewer clicks, fewer tools, fewer steps.`
  3. **Never be a clone**: `If it already exists, we make it meaningfully better or we don't make it.`

#### PROD-03 · Product cards (template, repeat per product)
- **Component hint:** large card or alternating feature rows, with image/mockup slot, status badge, and link
- **Fields:** `status_badge`, `heading`, `body`, `bullets` (3), `cta_primary`
- **Product A** *(placeholder)*
  - status_badge: `In development` *(options: In development · Beta · Live)*
  - heading: `{{Product A name}}`
  - body: `{{One sentence: who it's for and the problem it solves.}}`
  - bullets: `{{Benefit 1}}` · `{{Benefit 2}}` · `{{Benefit 3}}`
  - cta_primary: `Join the waitlist` → `{{product_url_or_#waitlist}}`
- **Product B** *(placeholder; same structure)*
- **Product C** *(placeholder; same structure)*

> If there are no products to show at launch, replace PROD-03 with PROD-03-ALT below and keep the page.

#### PROD-03-ALT · "Coming soon" state
- **Component hint:** centered block with illustration
- **heading:** `Our first products are on the way.`
- **body:** `We're building original SaaS for challenges others overlook. Leave your email and we'll tell you when the first one is ready.`
- **cta_primary:** `Notify me` (email input + button)

#### PROD-04 · Waitlist / email capture
- **Component hint:** inline form band
- **heading:** `Be first to try what we build.`
- **body:** `No spam. Just launch updates.`
- **form fields:** Email (required)
- **cta_primary:** `Join the waitlist`
- **success message:** `You're on the list. Thanks!`

#### PROD-05 · Closing CTA
- Use **GLOBAL-03**.

---

### PAGE 4 · About (`/about`)

**Goal:** Build trust. Explain the thinking, the vision, and the values. This page uses the handbook's wording most directly.

**SEO**
- title: `About | Amyreil Technologies`
- meta description: `Amyreil Technologies is an independent, remote-first agency building original SaaS innovation. Learn about our vision, mission, and values.`

#### ABOUT-01 · Page hero
- **eyebrow:** `About us`
- **heading:** `We build technology to make a meaningful difference.`
- **subheading:** `An independent, remote-first agency at the founding stage, with a clear point of view.`

#### ABOUT-02 · Our story
- **Component hint:** long-form text block, narrow column, optional pull-quote
- **eyebrow:** `Who we are`
- **heading:** `Great technology starts with asking the right questions.`
- **body:**
  > At Amyreil Technologies, we believe great technology starts with asking the right questions. We build SaaS products that tackle real-world challenges through original thinking, purposeful engineering, and practical design.
  >
  > Instead of following familiar patterns or recreating what already exists, we look past conventional approaches to find better ways of solving problems. Our products serve businesses and individuals across many sectors, with one shared goal: cutting complexity and unnecessary effort so everyday work gets easier.
- **pull_quote:** `We don't build technology just to add another tool to the market. We build it to make a meaningful difference.`

#### ABOUT-03 · Company at a glance
- **Component hint:** compact fact table or 4 small stat-style tiles (text only, no numbers)
- **items:**
  - **Type**: `Independent agency`
  - **Stage**: `Founding stage`
  - **Operations**: `Remote-first`
  - **Focus**: `Original SaaS, web and app development, AI automation, UI/UX, data and chatbots`

#### ABOUT-04 · Vision
- **Component hint:** large statement block (light background)
- **eyebrow:** `Our vision`
- **body:** `To become a leading source of original SaaS innovation, building solutions for challenges others overlook and finding fresh ways to solve problems everyone assumes are already solved.`

#### ABOUT-05 · Mission
- **Component hint:** large statement block (dark/inverted background, matching the handbook's dark Mission card)
- **eyebrow:** `Our mission`
- **body:** `{{MISSION: see note below}}`

> ⚠️ **Handbook issue:** the handbook's Mission text is an exact copy of the Vision text. A mission should say *what you do and how*, a vision *where you're headed*. Suggested replacement (edit as you like): 
> *"To build original, practical SaaS products and digital solutions that cut complexity and unnecessary effort, so everyday work gets easier for the businesses and people who use them."*
> Until you decide, use the suggestion above.

#### ABOUT-06 · Core values
- **Component hint:** 5 cards or stacked rows with icon, name, one-liner
- **eyebrow:** `Core values`
- **heading:** `How we work, and what we hold ourselves to`
- **items:**
  1. **Efficiency**: `Our products remove steps instead of adding them.`
  2. **Integrity**: `We do right by our users and by one another, every time.`
  3. **Effectiveness**: `What we build works in daily use, not just on launch day.`
  4. **Innovation**: `Original thinking is our starting point, not an occasional exception.`
  5. **Purposeful Products**: `We ship market-ready products with a clear reason to exist, never generic clones.`

#### ABOUT-07 · Remote-first
- **Component hint:** split layout, text + illustration
- **eyebrow:** `How we operate`
- **heading:** `Remote-first, by design.`
- **body:** `We work remotely, so we hire and partner on talent and trust, not location. Clear communication and honest updates keep projects moving across time zones. [CONFIRM]`

#### ABOUT-08 · Team *(hidden until ready)*
- **Component hint:** card grid with photo, name, role
- **heading:** `The people behind Amyreil`
- **items:** `{{Name}}` · `{{Role}}` · `{{One-line bio}}` (repeat)
- **Note:** leave out if team details aren't ready. Don't use stock photos or invented names.

#### ABOUT-09 · Closing CTA
- Use **GLOBAL-03**.

---

### PAGE 5 · Careers (`/careers`) *(optional at launch)*

**Goal:** Attract aligned people, even with no open roles. Collect general applications.

**SEO**
- title: `Careers | Amyreil Technologies`
- meta description: `Join Amyreil Technologies, a remote-first agency building original SaaS. See open roles and values.`

#### CAR-01 · Page hero
- **eyebrow:** `Careers`
- **heading:** `Help us find better ways to solve old problems.`
- **subheading:** `We're a founding-stage, remote-first team. Early members shape the products, the culture, and the company.`

#### CAR-02 · Why Amyreil
- **Component hint:** 3-column icon cards
- **items:**
  1. **Remote-first**: `Work where you work best.`
  2. **Original work**: `Build new products, not copies of old ones.`
  3. **Real ownership**: `At the founding stage, your work moves the company. [CONFIRM]`

#### CAR-03 · Values we hire for
- **Component hint:** compact list reusing the 5 core values (Efficiency, Integrity, Effectiveness, Innovation, Purposeful Products)
- **heading:** `Who thrives here`
- **body:** `People who ask good questions, remove needless steps, and care whether the thing actually works.`

#### CAR-04 · Open roles
- **Component hint:** list/table with title, type, location ("Remote"), apply button
- **Role row template:** `{{Role title}}` · `{{Full-time / Contract / Internship}}` · `Remote` · `Apply`
- **Empty state:** `No open roles right now, but we're always glad to hear from curious people. Send us a note.`
- **cta_primary:** `Send a general application` → `mailto:{{careers_email}}`

---

### PAGE 6 · Contact (`/contact`)

**Goal:** Primary conversion page. Make it effortless.

**SEO**
- title: `Contact | Amyreil Technologies`
- meta description: `Start a project with Amyreil Technologies. Tell us what you're trying to solve and we'll get back to you.`

#### CON-01 · Page hero
- **eyebrow:** `Contact`
- **heading:** `Tell us what's slowing you down.`
- **subheading:** `Share a few details about your idea or problem. We'll reply with honest next steps. [CONFIRM response time, e.g. within 2 business days]`

#### CON-02 · Contact form
- **Component hint:** form card, left or center, with contact details on the side
- **Fields:**
  | Label | Type | Required | Placeholder |
  |---|---|---|---|
  | Full name | text | Yes | `Your name` |
  | Email | email | Yes | `you@company.com` |
  | Company | text | No | `Company name (optional)` |
  | What do you need? | select | Yes | SaaS product development · Web and app development · AI automation · UI/UX design and prototyping · Data analytics and chatbots · Something else |
  | Budget range | select | No | `{{ranges}}` |
  | Tell us about your project | textarea | Yes | `What problem are you trying to solve?` |
- **cta_primary:** `Send message`
- **success message:** `Thanks! We've got your message and will be in touch soon.`
- **error message:** `Something went wrong. Please try again or email us at {{contact_email}}.`
- **privacy note:** `By sending this form you agree to our Privacy Policy.` (links to `/privacy`)

#### CON-03 · Direct contact details
- **Component hint:** sidebar or row beneath form
- **items:**
  - Email: `{{contact_email}}`
  - Working model: `Remote-first. We work with clients worldwide. [CONFIRM]`
  - Social: `{{linkedin_url}}` · `{{x_url}}`
- **Note:** don't list a street address unless one exists.

#### CON-04 · FAQ *(optional)*
- **Component hint:** accordion
- **heading:** `Before you write`
- **items:**
  1. **Do you work with early-stage startups?** → `Yes. We're founding-stage ourselves, and we enjoy early ideas. [CONFIRM]`
  2. **Can you start with just a prototype?** → `Absolutely. Prototyping first is often the smartest way to test an idea.`
  3. **Where are you based?** → `We're remote-first, so we work across time zones.`
  4. **How does pricing work?** → `{{Fixed-price / project-based / retainer: describe}}`

---

### PAGE 7 · Privacy Policy (`/privacy`)

- **Component hint:** plain long-form document layout, table of contents optional
- **heading:** `Privacy Policy`
- **meta:** `Last updated: {{date}}`
- **body:** `{{Insert legal text.}}` Suggested sections: Information we collect · How we use it · Cookies and analytics · Sharing and third parties · Data retention · Your rights · Contact.
- **Note:** have this reviewed by a qualified professional. Do not ship placeholder legal text.

### PAGE 8 · Terms of Service (`/terms`)

- **Component hint:** same layout as Privacy Policy
- **heading:** `Terms of Service`
- **meta:** `Last updated: {{date}}`
- **body:** `{{Insert legal text.}}` Suggested sections: Use of the site · Intellectual property · Disclaimers · Limitation of liability · Governing law · Changes · Contact.
- **Note:** same as above.

### PAGE 9 · 404 Not Found (`/404`)

- **Component hint:** centered, minimal, one illustration or large "404"
- **eyebrow:** `404`
- **heading:** `This page took a different path.`
- **body:** `The page you're looking for doesn't exist or has moved.`
- **cta_primary:** `Back to home` → `/`
- **cta_secondary:** `Contact us` → `/contact`

---

## 5. Section count summary

| Page | Sections |
|---|---|
| Home | 7 |
| Services | 8 |
| Products | 5 |
| About | 9 |
| Careers | 4 |
| Contact | 4 |
| Privacy / Terms / 404 | 1 each |
| Global (nav, footer, CTA banner) | 3 |

---

## 6. Open items to confirm before launch

1. **Mission statement:** handbook duplicates Vision. Choose the final wording (ABOUT-05).
2. **Typo fixed:** handbook reads "Wedo right by our users", corrected to "We do right by our users" in this file.
3. **Contact email, social links, careers email:** supply real values.
4. **Products:** how many, names, statuses. If none are public yet, use PROD-03-ALT.
5. **Process steps (SVC-07):** invented to suit the handbook's tone. Keep, edit, or delete.
6. **Claims marked `[CONFIRM]`:** response time, worldwide clients, startup focus, remote-first hiring wording.
7. **Careers page:** launch with it or hold it back?
8. **Team section:** include only with real names and photos.
9. **Legal pages:** have real text drafted and reviewed.
10. **Pricing/budget field and FAQ answer:** decide your approach.
11. **Imagery:** handbook shows only the logo and the large "A" background shape. Decide if the site needs illustrations, product mockups, or photography (`design.md` should specify).

---

*End of file.*
