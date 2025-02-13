import DashboardHeader from "../components/private/dashboardHeader";


export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  );
}