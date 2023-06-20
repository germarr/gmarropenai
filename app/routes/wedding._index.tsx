import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Steph & Ger Wedding!" },
    {
      name: "description",
      content:
        "This site is entireley dedicated to talk about Steph and Ger's Wedding.",
    },
  ];
};

export default function Wedding() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello!</h1>
      <Link to="./ai">Galleta</Link>
    </div>
  );
}
