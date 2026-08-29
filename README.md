# Palarong Panlipunan

> **An educational Filipino RPG experience built with RPG Maker MV.**

**Palarong Panlipunan** is an educational role-playing game designed to introduce and reinforce Filipino culture, history, traditions, and social knowledge through an interactive game experience.

The project is being developed as part of a **Capstone Project**, combining educational content with RPG-style exploration, character interaction, dialogue, events, and game-based learning.

---

## About the Project

Palarong Panlipunan was originally developed using **Godot Engine**, with the intention of building a fully customized 2D educational RPG from the ground up.

During development, the project was migrated from **Godot to RPG Maker MV** to improve development speed and reduce the amount of engine-level systems that needed to be implemented manually.

This transition allows the development team to focus more heavily on:

* Educational content
* Game flow and progression
* Maps and environments
* NPC interactions
* Dialogue
* Quizzes and learning activities
* Filipino cultural representation
* Gameplay testing and refinement

RPG Maker MV provides built-in systems for maps, events, characters, dialogue, databases, and other RPG mechanics, while still allowing deeper customization through JavaScript plugins.

---

## Why RPG Maker MV?

The project was moved from Godot to RPG Maker MV primarily because of **development efficiency**.

Building an RPG from scratch in Godot required the team to implement and maintain several systems manually, including:

* Character movement
* NPC interaction
* Dialogue systems
* Event handling
* Map transitions
* Collision behavior
* Game state management
* UI systems
* Save/load functionality

RPG Maker MV already provides many of these systems through its event-driven workflow and database architecture.

This allowed the project to reach a playable state significantly faster while still leaving room for custom JavaScript development through plugins. RPG Maker MV officially supports JavaScript-based plugins that can modify and extend the engine's behavior.

### Development Direction

**Previous Engine**

```text
Godot Engine
     │
     ├── Custom gameplay systems
     ├── Custom NPC systems
     ├── Custom collision handling
     ├── Custom interaction logic
     └── Custom UI/game flow
```

**Current Engine**

```text
RPG Maker MV
     │
     ├── Built-in RPG systems
     ├── Event-based gameplay
     ├── Map editor
     ├── Database system
     ├── NPC & dialogue events
     └── JavaScript plugins
```

The migration is therefore not simply a change in technology, but a deliberate decision to prioritize **faster development and educational content implementation**.

---

## Features

### Exploration

Players can explore game environments inspired by Filipino settings and interact with objects, characters, and locations throughout the game world.

### NPC Interaction

Non-player characters are used to provide:

* Dialogue
* Information
* Instructions
* Quests
* Learning activities
* Gameplay progression

### Educational Gameplay

The game integrates educational content directly into the RPG experience rather than presenting the learning material as a completely separate system.

### Filipino Culture

The project focuses on incorporating Filipino culture, traditions, history, and social knowledge into the game world.

### Event-Driven Gameplay

RPG Maker MV's event system is used to control interactions, conversations, map transitions, progression, and other gameplay behaviors.

### Customization Through JavaScript

Where the built-in RPG Maker MV systems are insufficient, JavaScript plugins can be used to extend or modify the game's behavior.

---

## Technology Stack

| Technology       | Purpose                                   |
| ---------------- | ----------------------------------------- |
| **RPG Maker MV** | Primary game engine                       |
| **JavaScript**   | Custom gameplay functionality and plugins |
| **HTML5**        | RPG Maker MV runtime/web deployment       |
| **JSON**         | Game database and map data                |
| **Git**          | Version control                           |
| **GitHub**       | Source code repository                    |

RPG Maker MV uses JavaScript together with HTML5 technologies and supports exporting games to multiple platforms, including Windows and HTML5-based web deployment.

---

## Project Structure

```text
CAPSTONE_PPV2/
│
├── audio/
│   ├── bgm/
│   ├── bgs/
│   ├── me/
│   └── se/
│
├── data/
│   ├── Actors.json
│   ├── Animations.json
│   ├── Armors.json
│   ├── Classes.json
│   ├── CommonEvents.json
│   ├── Enemies.json
│   ├── Items.json
│   ├── Map001.json
│   ├── Map002.json
│   ├── MapInfos.json
│   ├── Skills.json
│   ├── States.json
│   ├── System.json
│   ├── Tilesets.json
│   ├── Troops.json
│   └── Weapons.json
│
├── fonts/
│
├── icon/
│   └── icon.png
│
├── img/
│   ├── animations/
│   ├── battlebacks1/
│   ├── battlebacks2/
│   ├── characters/
│   ├── enemies/
│   ├── faces/
│   ├── parallaxes/
│   ├── pictures/
│   ├── sv_actors/
│   ├── sv_enemies/
│   ├── system/
│   ├── tilesets/
│   └── titles1/
│
├── js/
│   ├── libs/
│   ├── plugins/
│   ├── main.js
│   ├── plugins.js
│   ├── rpg_core.js
│   ├── rpg_managers.js
│   ├── rpg_objects.js
│   ├── rpg_scenes.js
│   ├── rpg_sprites.js
│   └── rpg_windows.js
│
├── save/
│
├── Game.rpgproject
├── index.html
└── package.json
```

The repository currently follows the standard RPG Maker MV project structure, including its database JSON files and JavaScript runtime/plugin directories.

---

## Getting Started

### Requirements

To work on the project, you will need:

* **RPG Maker MV**
* **Git**
* A code editor such as:

  * Visual Studio Code
  * Sublime Text
  * Notepad++

RPG Maker MV is available for Windows and macOS and supports JavaScript-based customization through its plugin system.

### Clone the Repository

```bash
git clone https://github.com/Harleythetech/CAPSTONE_PPV2.git
cd CAPSTONE_PPV2
```

### Open the Project

Open:

```text
Game.rpgproject
```

using RPG Maker MV.

From there, the project can be edited using the RPG Maker MV editor.

---

## Running the Game

The project can be tested directly through RPG Maker MV's **Playtest** functionality.

Alternatively, because RPG Maker MV uses an HTML5-based runtime, the project contains an `index.html` entry point for the game's runtime.

> **Note:** Development and testing should preferably be performed through RPG Maker MV to ensure that maps, events, database changes, plugins, and project settings are handled correctly.

---

## Development Workflow

The current development workflow generally follows:

```text
Design
   ↓
Map / Event Development
   ↓
NPC & Dialogue Implementation
   ↓
Educational Content Integration
   ↓
Gameplay Testing
   ↓
Bug Fixing
   ↓
Playtesting
   ↓
Iteration
```

For systems that cannot be reasonably implemented using RPG Maker MV's default event commands, custom JavaScript plugins can be introduced.

---

## Plugins

RPG Maker MV supports JavaScript plugins through the project's:

```text
js/plugins/
```

directory.

Plugin configuration is managed through:

```text
js/plugins.js
```

RPG Maker MV's official documentation specifies that plugins are JavaScript files placed inside `js/plugins`, with plugin configuration managed by the editor.

When adding or modifying plugins:

1. Place the plugin inside `js/plugins/`.
2. Open the project in RPG Maker MV.
3. Open the **Plugin Manager**.
4. Enable and configure the plugin.
5. Test the project.
6. Commit the required plugin files and configuration changes.

---

## Development Status

> **Status: Active Development**

The project is currently under development as a capstone project.

### Current Development Priorities

* [ ] Core map development
* [ ] NPC interactions
* [ ] Dialogue implementation
* [ ] Educational activities
* [ ] Game progression
* [ ] Gameplay balancing
* [ ] UI/UX refinement
* [ ] Audio integration
* [ ] Testing and debugging
* [ ] Final optimization
* [ ] Capstone evaluation

---

## Migration from Godot

Palarong Panlipunan originally started as a **Godot-based project**.

The Godot version required a more custom approach to the game's underlying systems. While this provided greater low-level control, it also increased development time because core RPG functionality had to be implemented and maintained manually.

The project was subsequently migrated to **RPG Maker MV**.

### Reason for Migration

The primary reason for the migration was:

> **To reduce development overhead and allow the team to spend more time developing the actual educational game experience.**

RPG Maker MV provides ready-made systems for maps, events, databases, characters, battles, and other RPG functionality. Its plugin architecture also provides an escape hatch for functionality that requires custom JavaScript.

This makes RPG Maker MV a better fit for the project's current development goals.

---

## Educational Purpose

Palarong Panlipunan aims to explore how game-based learning can be used to present Filipino educational content in a more interactive format.

Instead of relying solely on conventional text-based learning materials, the project attempts to combine:

```text
Education
    +
Exploration
    +
Storytelling
    +
Interaction
    +
Game Mechanics
```

The goal is to create an experience where educational information becomes part of the player's progression through the game.

---

## Repository

The source code and current project files are available on GitHub:

[Palarong Panlipunan — GitHub Repository](https://github.com/Harleythetech/CAPSTONE_PPV2?utm_source=chatgpt.com)

---

## Project Name

**Palarong Panlipunan**

### Engine

**RPG Maker MV**

### Project Type

**Educational RPG / Game-Based Learning**

### Development Status

**Active Development**

### Purpose

**Capstone Project**

---

## Credits

Developed as part of an academic capstone project.

### Development

**Harley Jovellano**

GitHub: [@Harleythetech](https://github.com/Harleythetech)

---

## License

This project is currently intended for academic and development purposes.

Game assets, audio, fonts, plugins, and other third-party resources may be subject to their respective licenses and terms of use.

Please refer to the individual resource's license or attribution requirements before redistributing or using assets outside this project.

---

## Acknowledgements

Special thanks to the developers and communities behind **RPG Maker MV** and its plugin ecosystem.

RPG Maker MV provides the map editor, event system, database, runtime, and JavaScript plugin architecture that make rapid development of this project possible.

---

<p align="center">
  <strong>Palarong Panlipunan</strong><br>
  An educational RPG inspired by Filipino culture and learning.
</p>
