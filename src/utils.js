const tips = [
  'Pro tip: Open a PR to trigger CI.',
  'Small commits, clear messages.',
  'Write a failing test first.',
  'Refactor in tiny steps.',
  'Add README updates for documentation credit.'
]

export function randomTip () {
  return tips[Math.floor(Math.random() * tips.length)]
}
