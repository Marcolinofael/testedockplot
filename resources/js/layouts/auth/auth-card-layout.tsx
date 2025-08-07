import AppLogoIcon from '@/components/app-logo-icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <div className="flex min-h-svh items-center justify-center p-6 md:p-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/img/assistcelfundo.png)' }}>
            <div className="flex w-full max-w-6xl items-center gap-20">
                {/* Logo grande do lado esquerdo */}
                <div className="hidden xl:flex flex-1 items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                        <Link href={route('home')} className="flex items-center justify-center">
                            <div className="flex h-96 w-96 items-center justify-center">
                                <AppLogoIcon className="size-140 fill-current text-white" />
                            </div>
                        </Link>
                        <div className="text-center text-white">
                            <h2 className="text-9xl font-bold mb-2">AssistCeLL</h2>
                            <p className="text-2xl ">Sistema de Gestão para Assistência Técnica em Celulares</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 max-w-md">
                    <Card className="rounded-xl">
                        <CardHeader className="px-10 pt-10 pb-0 text-center">
                            <CardTitle className="text-xl">{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <CardContent className="px-10 py-8">{children}</CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
