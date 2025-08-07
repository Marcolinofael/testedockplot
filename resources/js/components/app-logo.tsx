import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center justify-center">
                <AppLogoIcon className="size-12 fill-current text-sidebar-primary dark:text-sidebar-primary-foreground" />
            </div>
            <div className="ml-3 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">AssistCell</span>
            </div>
        </>
    );
}
