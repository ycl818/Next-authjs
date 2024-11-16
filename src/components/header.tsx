import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Input,
  Button,
  Avatar,
  NavbarContent,
} from "@nextui-org/react";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {session?.user ? <div>Signed in</div> : <div>Singed out</div>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
