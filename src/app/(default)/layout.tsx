import { Header } from "../../components/Header";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex justify-center mt-32 lg:mt-44 pb-12 pl-3 pr-4">
      <div className="min-[640px]:max-w-[860px] min-[768px]:max-w-[740px] min-[1024px]:max-w-[980px]">
        <Header/>
        
        {children}
      </div>
    </div>
  );
}
