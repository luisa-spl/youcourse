import { Header } from "../../components/Header";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex py-12 pl-3 pr-4">
      <Header/>
      
      {children}
    </div>
  );
}
