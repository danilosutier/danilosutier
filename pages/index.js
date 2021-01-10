// pages/index.js
import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <br />
    <Link href="/explore">
      <a> Bem vindo ao meu site !</a>
    </Link>
  </Layout>
);

export default Index;