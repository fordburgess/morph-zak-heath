import { createFileRoute } from '@tanstack/react-router'
import AboutView from '../features/aboutView'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return <AboutView />
}
