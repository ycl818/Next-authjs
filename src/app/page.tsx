import { Button } from "@nextui-org/react";
import * as actions from "@/actions";

export default function Home() {
  return (
    <>
      <form action={actions.signIn}>
        <Button type="submit">signIn!!!</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">signOut!!!</Button>
      </form>
    </>
  );
}
