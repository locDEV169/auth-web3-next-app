import Head from "next/head";
import ConnectWallet from "../components/ConnectWallet";


export default function Home() {
  return (
    <>
      <Head>
        <title>Auth Web3</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="flex justify-between items-center">
          <div className="h-10 w-10 bg-amber-40 rounded-full">
            <ConnectWallet label="Login" />
          </div>
        </header>
      </main>
    </>
  );
}
