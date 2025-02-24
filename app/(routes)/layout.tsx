import { NavigationBar } from "@/components/ui/navbar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
}

export default DashboardLayout;