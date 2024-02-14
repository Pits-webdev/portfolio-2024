import { Three } from "@/components/3D/Three";
import Hero from "@/components/Home/Hero";
import HorizontScroll from "@/components/Home/HorizontScroll";

export default function Home() {
  return (
    <main className='w-full'>
      <Hero />
      <Three />
      <HorizontScroll />
    </main>
  );
}
