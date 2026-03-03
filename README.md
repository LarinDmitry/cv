## My contacts:

``` 
Telegram: @Larin_Dmytro
Phone: +380938839926
Linkedin: https://www.linkedin.com/in/larindmitriy/
```

Let's keep in touch

## Tech Stack

- **Next.js 14.0.4** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS 3.3.0** - Utility-first styling
- **Framer Motion** - Animations and scroll effects
- **@tsparticles** - Particle background
- **react-vertical-timeline-component** - Timeline visualization
- **@heroicons/react** + **FontAwesome** - Icons
- **Node 24.x**

## Project Structure

```
src/app/
├── Components/
│   ├── Header.tsx           # Navigation
│   ├── Presentation.tsx     # Hero section
│   ├── About.tsx            # About & skills
│   ├── CurrentWork.tsx      # Current position highlight
│   ├── Experience.tsx       # Work history
│   ├── TimelineElement.tsx  # Timeline cards with collapse
│   ├── Projects.tsx         # Project showcase
│   ├── Contact.tsx          # Contact + footer
│   ├── PageLoader.tsx       # Loading screen
│   └── ParticlesBackground.tsx
├── layout.tsx
├── page.tsx
├── globals.css
└── particles-config.ts
```

## Design System

- **Colors:** Violet/purple theme (`violet-900`, `violet-700`, `violet-600`, `violet-400`)
- **Font:** Roboto (400, 700, 900)
- **Z-Index:** Particles (-1), Content (10), Header (20)

### Styling
- Conditional classes with template literals
- Subtle transparency backgrounds
- Maintain violet/purple color consistency
- Avoid overpowering title sizes

### Code
- Use `"use client"` for interactive components
- Define TypeScript interfaces for props
- Hardcoded content (no CMS)
- Extract reusable components