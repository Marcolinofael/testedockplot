import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { type User } from '@/types';
import { Link, router } from '@inertiajs/react';
import { LogOut, Settings } from 'lucide-react';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-3 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar_url || `/img/avatars/${user.id}.jpg`} alt={user.name} />
                        <AvatarFallback className="text-xs">
                            {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm">
                        <span className="truncate font-semibold">{user.name}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={route('profile.edit')} as="button" prefetch onClick={cleanup}>
                        <Settings className="mr-2" />
                        Configurações
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link className="block w-full" method="post" href={route('logout')} as="button" onClick={handleLogout}>
                    <LogOut className="mr-2" />
                    Sair
                </Link>
            </DropdownMenuItem>
        </>
    );
}
