import LoggedUser from "@/components/server/LoggedUser";
import SignOutButton from "@/components/server/SignOutButton";
import LoggedUserClient from "@/components/client/LoggedUser";
import SignInButtonClient from "@/components/client/SignInButton";
import SignOutButtonClient from "@/components/client/SignOutButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <div><Link href="/sign/in">Sign In</Link></div>
      </header>
      <main>
        <section className="mb-4">
          <h2 className="text-xl font-bold">Server Side</h2>
          <LoggedUser />
          <SignOutButton />
        </section>
        <section>
          <h2 className="text-xl font-bold">Client Side</h2>
          <LoggedUserClient />
          <br />
          <SignInButtonClient />
          <SignOutButtonClient />
        </section>
      </main>
    </div>
  );
}
