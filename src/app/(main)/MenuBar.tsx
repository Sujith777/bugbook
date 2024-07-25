import { Button } from "@/components/ui/button";
import { Bell, Bookmark, HomeIcon, Mail } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default function MenuBar({ className }: MenuBarProps) {
  return (
    <div className={className}>
      <Button
        title="Home"
        variant="ghost"
        className="flex items-center justify-start gap-3"
        asChild
      >
        <Link href="/">
          <HomeIcon />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>
      <Button
        title="Notifications"
        variant="ghost"
        className="flex items-center justify-start gap-3"
        asChild
      >
        <Link href="/notifications">
          <Bell />
          <span className="hidden lg:inline">Notifications</span>
        </Link>
      </Button>
      <Button
        title="Messages"
        variant="ghost"
        className="flex items-center justify-start gap-3"
        asChild
      >
        <Link href="/messages">
          <Mail />
          <span className="hidden lg:inline">Messages</span>
        </Link>
      </Button>
      <Button
        title="Bookmarks"
        variant="ghost"
        className="flex items-center justify-start gap-3"
        asChild
      >
        <Link href="/bookmarks">
          <Bookmark />
          <span className="hidden lg:inline">Bookmarks</span>
        </Link>
      </Button>
    </div>
  );
}
