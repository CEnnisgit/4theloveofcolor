# Git Commit Guidelines & Standards

All git commits in this repository must adhere to the following standards for clean, maintainable, and readable commit history.

## 1. Commit Message Structure

Commit messages should follow the **Conventional Commits** format:

```
<type>: <short summary in imperative mood>

[optional body explaining what and why, keeping it concise]
```

### Format Rules
* **Type Prefix**: Must use one of the standard types below.
* **Imperative Mood**: Use imperative present tense in the summary line (e.g. `add`, `fix`, `refactor`, not `added`, `fixing`, `refactored`).
* **Concise Subject**: Keep the first line under 72 characters. Capitalize appropriately, no trailing period.
* **No Unnecessary Metadata or Fluff**: Never include agent conversation logs, debugging traces, prompt details, or verbose step-by-step commentary in the commit message.

## 2. Allowed Commit Types

| Type | Description | Example |
| :--- | :--- | :--- |
| `feat` | New feature or major UI component implementation | `feat: add mobile navigation menu` |
| `fix` | Bug fix or layout issue resolution | `fix: prevent horizontal overflow on mobile` |
| `style` | Formatting, CSS adjustments, padding, and visual polish | `style: refine hero layout and trust strip spacing` |
| `refactor` | Code restructuring without changing behavior | `refactor: clean up obsolete prototype components` |
| `chore` | Build tasks, package updates, or project configuration | `chore: install framer-motion dependency` |

## 3. Best Practices

1. **Atomic Commits**: Group related changes together into single logical units.
2. **Clear & Direct**: State *what* changed clearly without redundant words.
3. **No Speculative Notes**: Describe completed facts, not future ideas or agent scratch notes.
