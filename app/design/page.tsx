import { auth, signIn, signOut } from "@/auth";

const DesignComp = async () => {
  const session = await auth();
  console.log("session:", session);
  return (
    <div>
      <h1>Design Component</h1>
      <form
        action={async () => {
          "use server";
          await signIn("twitch");
        }}
      >
        <button type="submit">Sign in with Twitch</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default DesignComp;
