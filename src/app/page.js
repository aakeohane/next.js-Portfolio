import { getAllWerkData } from '@/lib/werk';
import Portfolio from './portfolio';

export const metadata = {
  title: 'Aaron Keohane',
  description: 'Portfolio of work, contact info and about Aaron Keohane',
}
 
export default function Page() {
  // grab project info from lib and pass to portfolio
  const allWerkData   = getAllWerkData()
  // Forward fetched data to your Client Component
  return <Portfolio allWerkData={allWerkData} />
}
