// Import the newly created component
import { Profile } from './components/Profile';
import Card from './components/TeamCard';

export default function App() {
  return (
    <div className="bg-slate-50 items-center flex gap-4 flex-col">
      <h1 className='text-2xl  font-mono'>Week 1 Assigment</h1>
      <Profile name="Arttu Tikkamäki" role="Junior Dev"></Profile>
      <div className='flex'>
      <Card name="Bart Simpson" role="SON"></Card>
      <Card name="Lisa Simpson" role="DAUGHTER"></Card>
      <Card name="Maggie Simpson" role="DAUGHTER"></Card>
      <Card name="Marge Simpson" role="MOTHER"></Card>
      </div>
    </div>
  );
}