import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar className="w-[18rem]" />
      <div className="ml-[18rem] p-6 h-screen  overflow-y-auto">{children}</div>
    </section>
  );
}
