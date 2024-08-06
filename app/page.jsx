import Image from "next/image";
import { data } from '../lib/data'
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      {
        data.map((item, index) => {
          return (
            <div key={index}>
              <Card
                data={item}
              />
            </div>
          )
        })
      }
    </div>
  );
}
