import AccessAlert from "@/components/AccessAlert";
import Hint from "@/components/Hint";
import Navbar from "@/components/Navbar";
import { HintVariant } from "@/types/types";
import { HomeIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-4 px2 md:px-24">
      <Hint title="Welcome!" variant={HintVariant.INFO}>This page is accessible to everyone.
        <span className="text-red-400 my-8">Navigate through pages and change your role below to see how permissions work!</span>
        <div className="flex flex-col mt-4">
          <span className="text-center italic"><span className="font-bold text-blue-400">Admin</span> has all permissions.</span>
          <span className="text-center italic"><span className="font-bold text-green-400">User</span> can only view pages.</span>
          <span className="text-center italic"><span className="font-bold text-yellow-400">Custom</span> has permissions set by you.</span>
        </div>
      </Hint>
    </div>
  );
}
