<a id="readme-top"></a>

<!-- NEED LOGO, AND EVENT PAGE SCREENSHOT, ERROR AND GLOBAL ERROR PAGES -->

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Unlicense License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Falk33n/event-page">
    <img src="public/logo.png" alt="Event Page Logo" width="80" height="80">
  </a>

  <h3 align="center">Event Page</h3>

  <p align="center">
    Fully dynamic event page — just edit the JSON and your page updates automatically!
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Event Page Screenshot][product-screenshot]](https://example.com)

This project is a fully dynamic, JSON-driven event page. The page is built with **Next.js 15**, Tailwind CSS, and TypeScript. All sections, including the hero, schedule, speakers, FAQ, tickets, and footer, are generated from a single JSON file.

**Why this project exists:**

- Let users quickly create an event page without touching code.
- Centralized data in a JSON file simplifies updates.
- Pre-built sections reduce repetitive work and follow DRY principles.
- Ready for Bun users for fast package management and installation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bun](https://bun.sh/) - package manager and runtime

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Follow these steps to set up your own event page locally.

### Prerequisites

Install Bun if you don’t have it yet:

```sh
curl -fsSL https://bun.sh/install | bash
```

Make sure Node.js is installed if required for Next.js tooling.

### Installation

1. Clone the repository:

```sh
git clone https://github.com/Falk33n/event-page.git
cd event-page
```

2. Install dependencies using Bun:

```sh
bun install
```

3. Run the development server:

```sh
bun dev
```

4. Open your browser at `http://localhost:3000`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Edit the JSON file (`src/data/event-data.json`) to update your event:

```json
{
  "title": "Code the Future",
  "slogan": "A Night of Digital Alchemy",
  "city": "San Francisco, CA",
  "venue": "The Innovation Loft",
  "date": "November 16, 2025",
  "time": "6:00 PM - 12:00 AM",
  "about": "Code the Future: A Night of Digital Alchemy is an immersive evening dedicated to the art and science of modern technology. This event brings together developers, designers, engineers, and visionaries to explore how creativity and code intersect to shape the digital experiences of tomorrow. From inspiring keynotes to interactive showcases, the night is designed to spark new ideas, ignite collaboration, and celebrate the transformative power of technology.",
  "additionalAbout": "Attendees will experience a dynamic blend of talks, workshops, and live demos covering topics such as artificial intelligence, creative coding, web innovation, and digital design. Between sessions, participants can connect with fellow innovators, exchange ideas over curated networking lounges, and engage with cutting-edge tools and concepts shaping the future of software and art. Whether you're an industry veteran or just beginning your coding journey, Code the Future offers an unforgettable evening of learning, connection, and creative discovery.",
  "tickets": [
    {
      "price": "$149",
      "discountedPrice": "$129",
      "label": "Early Bird (Limited Offer)",
      "href": "https://earlybird.com/"
    },
    {
      "price": "$189",
      "label": "Creator's Pass",
      "href": "https://earlybird.com/creators-pass"
    }
  ],
  "schedule": [
    {
      "time": "6:00 PM",
      "title": "Opening Keynote: The Art of Digital Alchemy",
      "description": "The night begins with a visionary talk on the fusion of creativity and technology, exploring how imagination and innovation shape the digital world."
    },
    {
      "time": "6:45 PM",
      "title": "Panel Discussion: The Future of Human-AI Collaboration",
      "description": "A roundtable of industry pioneers discusses how artificial intelligence is redefining the creative process, software development, and human potential."
    },
    {
      "time": "7:30 PM",
      "title": "Networking Break",
      "description": "Take a moment to connect with fellow innovators and creators over refreshments and shared ideas."
    },
    {
      "time": "8:00 PM",
      "title": "Live Demo: Building Magic with Code",
      "description": "Watch a team of developers and digital artists collaborate live to create an interactive experience — showcasing real-time creativity through code."
    },
    {
      "time": "8:45 PM",
      "title": "Workshop: Crafting the Web of Tomorrow",
      "description": "A hands-on deep dive into emerging technologies, frameworks, and techniques that are shaping the next evolution of the web."
    },
    {
      "time": "9:45 PM",
      "title": "Showcase: Digital Innovation Gallery",
      "description": "Explore a curated exhibition of digital art, experimental code projects, and immersive installations designed by forward-thinking creators."
    },
    {
      "time": "10:30 PM",
      "title": "Fireside Chat: The Ethics of Creation",
      "description": "A thought-provoking conversation on responsibility, creativity, and the moral dimensions of building the future through technology."
    },
    {
      "time": "11:15 PM",
      "title": "Closing Remarks & Midnight Innovation Party",
      "description": "The event concludes with reflections, gratitude, and an afterparty celebrating innovation, collaboration, and the limitless potential of imagination."
    }
  ],
  "generic-section": {
    "id": "speakers",
    "title": "Featured Speakers",
    "items": [
      {
        "name": "Alex Rivera",
        "subtitle": "CTO, Neural Forge",
        "image": "/speakers/alex.png"
      },
      {
        "name": "Naomi Chen",
        "subtitle": "AI Researcher, Open Vision Labs",
        "image": "/speakers/naomi.png"
      },
      {
        "name": "Dr. Elias Moran",
        "subtitle": "Futurist, Cognitive Systems Lab",
        "image": "/speakers/elias.png"
      },
      {
        "name": "Sofia Martinez",
        "subtitle": "Lead Designer, Quantum Canvas",
        "image": "/speakers/sofia.png"
      },
      {
        "name": "Ravi Patel",
        "subtitle": "Founder, CodeAlchemy Studios",
        "image": "/speakers/ravi.png"
      },
      {
        "name": "Juno Park",
        "subtitle": "AI Ethicist, Nova Institute",
        "image": "/speakers/juno.png"
      },
      {
        "name": "Aisha Rahman",
        "subtitle": "Director of Emerging Tech, Lumina Labs",
        "image": "/speakers/aisha.png"
      },
      {
        "name": "Leo Tanaka",
        "subtitle": "Creative Technologist, HoloStream",
        "image": "/speakers/leo.png"
      },
      {
        "name": "Clara Nguyen",
        "subtitle": "Head of Experience Design, Atlas Interface",
        "image": "/speakers/clara.png"
      }
    ]
  },
  "faq": [
    {
      "question": "What is Code the Future: A Night of Digital Alchemy?",
      "answer": "Code the Future is an immersive evening that explores the fusion of creativity, technology, and innovation. Attendees will experience inspiring talks, live coding sessions, and interactive showcases highlighting how technology is shaping the world of tomorrow."
    },
    {
      "question": "Who should attend this event?",
      "answer": "Developers, designers, entrepreneurs, students, and anyone passionate about technology, innovation, or digital creativity are welcome. Whether you're a seasoned professional or simply curious, there’s something for everyone."
    },
    {
      "question": "Where is the event being held?",
      "answer": "The event takes place at The Quantum Hall, downtown Tech City. It’s a modern venue equipped for both live experiences and interactive installations."
    },
    {
      "question": "Will there be networking opportunities?",
      "answer": "Yes! The event is designed to encourage collaboration and connection. There will be dedicated networking sessions, breakout lounges, and opportunities to meet speakers, sponsors, and fellow attendees."
    },
    {
      "question": "Are there any online or virtual options?",
      "answer": "At this time, Code the Future is an in-person experience to preserve the energy and interactivity of the event. However, highlight recordings will be available afterward."
    },
    {
      "question": "What topics will be covered during the event?",
      "answer": "Expect a wide range of topics including artificial intelligence, creative coding, human-computer interaction, ethical design, and the future of digital art. Each session is crafted to inspire and inform."
    },
    {
      "question": "How can I get tickets and what do they include?",
      "answer": "Tickets can be purchased directly from our official event page. Admission includes access to all talks, interactive showcases, networking sessions, and exclusive event materials."
    }
  ],
  "footer": {
    "privacy-policy-url": "https://termly.io/resources/templates/terms-and-conditions-template",
    "terms-and-conditions-url": "https://www.google.com/search?q=template+privacy+policy&ie=UTF-8",
    "contact-mail": "tickets@codethefuture.event"
  }
}
```

Once you save the JSON file, the page updates automatically.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Hero section
- [x] Generic section
- [x] Schedule section
- [x] FAQ section
- [x] About section
- [x] Dark mode toggle

See [open issues](https://github.com/Falk33n/event-page/issues) for more.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are welcome! Please follow the guidelines below to keep the project organized and maintainable. Fork the project, make your changes, and submit a pull request.

### Steps to Contribute

1. **Fork the repository** to your GitHub account.
2. **Create a feature branch** from `develop`:

```sh
git checkout -b feature/MyFeature develop
```

> All feature branches **must start with `feature/`**. Bug fixes can use `fix/` and other maintenance branches can use `chore/`.

3. **Make your changes** and commit them using **conventional commits**:

- `feat:` A new feature
- `fix:` A bug fix
- `chore:` Maintenance or refactoring
- `docs:` Documentation updates
- `style:` Code style changes (formatting, linting)
- `refactor:` Code restructuring without behavior changes
- `test:` Adding or updating tests

Example:

```sh
git commit -m "feat: add ticket section to hero component"
```

4. **Push your branch** to your fork:

```sh
git push origin feature/MyFeature
```

5. **Open a Pull Request** against the `develop` branch of the main repository.

> ⚠️ Pull requests should **only target the `develop` branch**, not `main`.

By following this workflow, we keep the project organized, make reviews easier, and ensure consistent commit history.

<!-- LICENSE -->

## License

Distributed under the **MIT License**. See `LICENSE` for details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Falk33n - [tim.falk00@gmail.com](mailto:tim.falk00@gmail.com)
Project Link: [https://github.com/Falk33n/event-page](https://github.com/Falk33n/event-page)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Falk33n/event-page.svg?style=for-the-badge
[contributors-url]: https://github.com/Falk33n/event-page/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Falk33n/event-page.svg?style=for-the-badge
[forks-url]: https://github.com/Falk33n/event-page/network/members
[stars-shield]: https://img.shields.io/github/stars/Falk33n/event-page.svg?style=for-the-badge
[stars-url]: https://github.com/Falk33n/event-page/stargazers
[issues-shield]: https://img.shields.io/github/issues/Falk33n/event-page.svg?style=for-the-badge
[issues-url]: https://github.com/Falk33n/event-page/issues
[license-shield]: https://img.shields.io/github/license/Falk33n/event-page.svg?style=for-the-badge
[license-url]: https://github.com/Falk33n/event-page/blob/main/LICENSE
[product-screenshot]: public/screenshot.png
