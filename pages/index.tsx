import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import ConnectWallet, { formatAddress, formatBalance } from "../components/ConnectWallet";
import { loadConfig } from '../features/configSlice'

export default function Home() {
  const config = useSelector((state: any) => state.config);
  const account = useSelector((state: any) => state.account);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadConfig(null));
  }, [dispatch, config, account]);
  console.log(account, config, account.address);
  
  return (
    <>
      <Head>
        <title>Auth Web3</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="flex justify-between items-center px-10 py-5">
        {account.connected ? (
            <div className="space-x-3 font-mono">
              <span className="rounded-md py-1 px-2 bg-gradient-to-r from-pink-400 to-amber-200 font-mono tracking-wide">
                {formatAddress(account.address)}
              </span>
            </div>
          ) : (
            <ConnectWallet label="Login" />
          )}
        </header>

        {account.connected && (
          <div className="px-10">
            <h1 className="text-3xl font-semibold mb-5">Token Balance</h1>

            <div className="flex flex-col">
              {/* <span>{formatBalance(account.balance)} ETH</span>
              <span>{formatBalance(account.usdtBalance)} USDT</span> */}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
