import { BarChart3, Database, MapPin } from 'lucide-react';

const icons = {
  warehouse: Database,
  reporting: BarChart3,
  mobility: MapPin,
};

export default function ProjectIcon({ artwork, size }) {
  const Icon = icons[artwork];
  return Icon ? <Icon size={size} strokeWidth={1.6} aria-hidden="true" /> : null;
}
