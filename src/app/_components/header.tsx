import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
   <div>
     <Card className="rounded-none">
        <CardContent className="p-5 flex flex-row items-center justify-between">
            <Image alt="FSW-Barber" src="/logo.png" height={18} width={120}/>
            <Button size="icon" variant="outline">
                <MenuIcon />
            </Button>
        </CardContent>
    </Card>
   </div>
    );
}
 
export default Header;