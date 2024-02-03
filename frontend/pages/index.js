
import React from "react";
import Signin from "@/components/Authentication/Signin";
import Signup from "@/components/Authentication/Signup";
import taxCover from '../public/taxcover.png'
import logo from '../public/logo.png'
import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  const [handleSignUp, setHandleSingup] = React.useState(true)

  return (
      <>
        <Head>
          <title>{handleSignUp ? "Sign up" : "Sign in"}</title>
        </Head>
        <div className="h-screen onboarding grid grid-cols-1 md:grid-cols-7" >
            
            <div className="no-scrollbar md:col-span-3 lg:col-span-2 overflow-x-hidden h-screen overflow-y-auto onboarding__content px-8 pt-10" style={{background:"#0B2558"}}>
              <div className="p-5" >
                <Link className="logo" href="/">
                    <Image src={logo} width={180} height={62} alt="Logo"/>
                </Link>
                {handleSignUp ? <Signup setHandleSingup={setHandleSingup}/> : <Signin/> }
              </div>
            </div>

            <div className="onboarding__image hidden sm:block md:col-span-3 lg:col-span-5  ">
              <Image src={taxCover} alt="Tax Cover" className="h-screen object-cover" />
            </div>
        </div>
      </>

  );
}
