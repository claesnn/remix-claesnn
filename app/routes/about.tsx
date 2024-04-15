import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About page" },
    { name: "description", content: "The about page of awesomeness!" },
  ];
};

export default function About() {
  return <h1>About page!!!!</h1>;
}
