import Sidebar from "../../dashboard/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <section className='flex gap-x-5'>
        <div className='w-[300px]'>
          <Sidebar />
        </div>
        <div className='w-full'>{children}</div>
      </section>
    </>
  );
}
