import { createFileRoute } from '@tanstack/react-router'
import { VocabularyView } from '../components/pedagogy/VocabularyView';

export const Route = createFileRoute('/about')({
  component: () => <div className="p-10"><VocabularyView /></div>,
})
