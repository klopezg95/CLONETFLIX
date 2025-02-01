import { Navbar } from "@/components/Shared/Navbar";
import { SliderVideo } from "./(home)/Slider";

export default function Home() {
  return (
    <div className="relative bg-zinc-900">
      <Navbar />
      <SliderVideo />
    </div>
  );
}
