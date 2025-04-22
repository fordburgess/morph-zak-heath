import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/audio/')({
  component: AudioLanding,
})

function AudioLanding() {
  return null
}
