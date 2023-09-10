import React from "react";
import Header from "../../components/layout/header/header";
import "./home.Module.scss";
import Hero from "./components/hero/hero";
import Posts from "./components/posts/posts";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Posts />
    </div>
  );
}
