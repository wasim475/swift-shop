import Sidebar from '../../../swift-shop/Home/sidebar/sidebar';


export default function categoryLayout({ children }) {
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
