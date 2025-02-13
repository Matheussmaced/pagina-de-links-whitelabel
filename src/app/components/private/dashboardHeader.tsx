import { ChartLine, LinkIcon, Settings, Wallpaper } from "lucide-react";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="text-gray-800 p-6 shadow-md">
      <div className="ml-12 w-screen flex gap-14">
        <Link href='/dashboard/links' className="flex items-center gap-3 hover:text-blueLink transition-colors delay-75">
          <LinkIcon />
          <span>Links</span>
        </Link>
        <Link href='/dashboard/appearance' className="flex items-center gap-3 hover:text-blueLink transition-colors delay-75">
          <Wallpaper />
          <span>Aparência</span>
        </Link>
        <Link href='/dashboard/analytics' className="flex items-center gap-3 hover:text-blueLink transition-colors delay-75">
          <ChartLine />
          <span>análise</span>
        </Link>
        <Link href='/dashboard/settings' className="flex items-center gap-3 hover:text-blueLink transition-colors delay-75">
          <Settings />
          <span>Configurações</span>
        </Link>
      </div>
    </div>
  )
}