import Image from "next/image";
import { data } from '../lib/data'
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <div className="px-10">
      <Navbar/>
      <Herosection/>
      {
        data.map((item, index) => {
          return (
            <>
              <div key={index}>
                <Card
                  data={item}
                />
              </div>
            </>
          )
        })
      }
    </div>
  );
}
